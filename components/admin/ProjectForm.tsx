"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

interface UploadedPhoto {
  id: number;
  storage_path: string;
  url: string;
}

export default function ProjectForm() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const [projectId, setProjectId] = useState<number | null>(null);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /*
   * ============================================================
   * CREATE PROJECT
   * ============================================================
   */

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const { data, error: insertError } = await supabase
      .from("projects")
      .insert({
        title: title.trim(),
        category: category.trim(),
        location: location.trim() || null,
        year: year ? Number(year) : null,
        description: description.trim() || null,
      })
      .select("id")
      .single();

    if (insertError || !data) {
      console.error("Project insert error:", insertError);

      setError(
        "Unable to create the project. Please check your details and try again."
      );

      setLoading(false);
      return;
    }

    /*
     * Store the newly created project ID.
     *
     * Photos uploaded below will belong ONLY to this project.
     */

    setProjectId(data.id);

    setTitle("");
    setCategory("");
    setLocation("");
    setYear("");
    setDescription("");

    setSuccess(
      "Project created successfully. You can now upload photos for this project."
    );

    setLoading(false);

    router.refresh();
  }

  /*
   * ============================================================
   * SELECT PHOTOS
   * ============================================================
   */

  function handleFileSelect(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = Array.from(event.target.files ?? []);

    const validFiles = files.filter((file) => {
      const validType = [
        "image/jpeg",
        "image/png",
        "image/webp",
      ].includes(file.type);

      const validSize = file.size <= 5 * 1024 * 1024;

      return validType && validSize;
    });

    setSelectedFiles(validFiles);

    setError("");

    if (files.length !== validFiles.length) {
      setError(
        "Some files were skipped. Only JPG, PNG and WEBP images up to 5 MB are allowed."
      );
    }
  }

  /*
   * ============================================================
   * UPLOAD PHOTOS
   * ============================================================
   */

  async function handleUploadPhotos() {
    if (!projectId) {
      setError("Please create the project first.");
      return;
    }

    if (selectedFiles.length === 0) {
      setError("Please select at least one photo.");
      return;
    }

    setUploading(true);
    setError("");
    setSuccess("");

    const newPhotos: UploadedPhoto[] = [];

    try {
      for (const file of selectedFiles) {
        const safeFileName = file.name
          .replace(/[^a-zA-Z0-9.-]/g, "-")
          .toLowerCase();

        const storagePath = `projects/${projectId}/${crypto.randomUUID()}-${safeFileName}`;

        /*
         * Upload image to Supabase Storage
         */

        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(storagePath, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type,
          });

        if (uploadError) {
          console.error("Photo upload error:", uploadError);
          throw new Error(
            `Unable to upload ${file.name}.`
          );
        }

        /*
         * Save image information in project_images
         */

        const { data: imageData, error: imageInsertError } =
          await supabase
            .from("project_images")
            .insert({
              project_id: projectId,
              storage_path: storagePath,
            })
            .select("id, storage_path")
            .single();

        if (imageInsertError || !imageData) {
          console.error(
            "Project image database error:",
            imageInsertError
          );

          /*
           * Remove uploaded file if database insert fails.
           */

          await supabase.storage
            .from("project-images")
            .remove([storagePath]);

          throw new Error(
            `Unable to save ${file.name} to the project.`
          );
        }

        const {
          data: { publicUrl },
        } = supabase.storage
          .from("project-images")
          .getPublicUrl(storagePath);

        newPhotos.push({
          id: imageData.id,
          storage_path: imageData.storage_path,
          url: publicUrl,
        });
      }

      /*
       * Add newly uploaded photos to the UI.
       */

      setUploadedPhotos((previous) => [
        ...previous,
        ...newPhotos,
      ]);

      /*
       * If this is the first photo uploaded for the project,
       * automatically make it the cover photo.
       */

      if (uploadedPhotos.length === 0 && newPhotos.length > 0) {
        const firstPhoto = newPhotos[0];

        const { error: coverError } = await supabase
          .from("projects")
          .update({
            cover_image_id: firstPhoto.id,
          })
          .eq("id", projectId);

        if (coverError) {
          console.error(
            "Cover photo update error:",
            coverError
          );
        }
      }

      setSelectedFiles([]);

      /*
       * Reset file input.
       */

      const fileInput = document.getElementById(
        "project-photo-upload"
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = "";
      }

      setSuccess(
        `${newPhotos.length} photo${
          newPhotos.length > 1 ? "s" : ""
        } uploaded successfully.`
      );

      router.refresh();
    } catch (uploadError) {
      console.error(uploadError);

      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Unable to upload photos."
      );
    } finally {
      setUploading(false);
    }
  }

  /*
   * ============================================================
   * SET COVER PHOTO
   * ============================================================
   */

  async function setCoverPhoto(imageId: number) {
    if (!projectId) return;

    setError("");
    setSuccess("");

    const { error: coverError } = await supabase
      .from("projects")
      .update({
        cover_image_id: imageId,
      })
      .eq("id", projectId);

    if (coverError) {
      console.error("Cover photo error:", coverError);

      setError(
        "Unable to set the cover photo. Please try again."
      );

      return;
    }

    setSuccess("Cover photo updated successfully.");

    router.refresh();
  }

  return (
    <div>
      {/* ========================================================
          ADD PROJECT FORM
      ======================================================== */}

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">

          {/* PROJECT NAME */}

          <div>
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
              Project Name
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Industrial Shed Fabrication"
              className="mt-3 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
            />
          </div>

          {/* WORK TYPE */}

          <div>
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
              Work Type
            </label>

            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-3 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-gray-900 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
            >
              <option value="">
                Select work type
              </option>

              <option value="Structural Steel Fabrication">
                Structural Steel Fabrication
              </option>

              <option value="Industrial Shed">
                Industrial Shed
              </option>

              <option value="Steel Erection">
                Steel Erection
              </option>

              <option value="MS Fabrication">
                MS Fabrication
              </option>

              <option value="Staircases & Handrails">
                Staircases & Handrails
              </option>

              <option value="Platforms & Structures">
                Platforms & Structures
              </option>

              <option value="Machinery Structures">
                Machinery Structures
              </option>

              <option value="Repair & Modification">
                Repair & Modification
              </option>

              <option value="Custom Work">
                Custom Work
              </option>
            </select>
          </div>

          {/* LOCATION */}

          <div>
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Sanaswadi, Pune"
              className="mt-3 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
            />
          </div>

          {/* YEAR */}

          <div>
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
              Year
            </label>

            <input
              type="number"
              min="2000"
              max="2100"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="2026"
              className="mt-3 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
            />
          </div>
        </div>

        {/* DESCRIPTION */}

        <div className="mt-6">
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the fabrication or erection work..."
            className="mt-3 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm leading-7 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
          />
        </div>

        {/* CREATE PROJECT */}

        <button
          type="submit"
          disabled={loading || !!projectId}
          className="mt-6 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-black shadow-sm transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Creating Project..."
            : projectId
            ? "Project Created ✓"
            : "Add Project →"}
        </button>
      </form>

      {/* ========================================================
          SUCCESS / ERROR
      ======================================================== */}

      {success && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
          {success}
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {/* ========================================================
          PROJECT PHOTO UPLOAD
      ======================================================== */}

      {projectId && (
        <section className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-gray-50">

          {/* HEADER */}

          <div className="border-b border-black/10 bg-white px-6 py-5">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Project Photos
                </p>

                <h3 className="mt-1 text-xl font-black text-gray-950">
                  Upload Photos
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Upload photos belonging to this project and choose
                  one as the cover photo.
                </p>
              </div>

              <div className="rounded-full bg-orange-50 px-4 py-2 text-xs font-bold text-orange-600">
                Project #{projectId}
              </div>
            </div>
          </div>

          <div className="p-6">

            {/* UPLOAD AREA */}

            <div className="rounded-2xl border-2 border-dashed border-black/10 bg-white p-6">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex-1">
                  <label
                    htmlFor="project-photo-upload"
                    className="flex min-h-14 cursor-pointer items-center rounded-xl border border-black/10 bg-white px-4 py-3 transition hover:border-orange-500"
                  >
                    <span className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-black">
                      Choose Photos
                    </span>

                    <span className="ml-4 truncate text-sm text-gray-500">
                      {selectedFiles.length > 0
                        ? `${selectedFiles.length} photo${
                            selectedFiles.length > 1
                              ? "s"
                              : ""
                          } selected`
                        : "Select photos for this project"}
                    </span>
                  </label>

                  <input
                    id="project-photo-upload"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  <p className="mt-3 text-xs text-gray-500">
                    JPG, PNG, WEBP • Maximum 5 MB per image
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleUploadPhotos}
                  disabled={
                    uploading || selectedFiles.length === 0
                  }
                  className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {uploading
                    ? "Uploading..."
                    : "Upload Photos →"}
                </button>
              </div>

              {/* SELECTED FILES */}

              {selectedFiles.length > 0 && (
                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-sm">
                        📷
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-gray-800">
                          {file.name}
                        </p>

                        <p className="text-[10px] text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ==================================================
                UPLOADED PHOTOS
            ================================================== */}

            {uploadedPhotos.length > 0 && (
              <div className="mt-8">

                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-500">
                      Uploaded Photos
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Select one photo as the project cover.
                    </p>
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-2 text-xs font-bold text-gray-600">
                    {uploadedPhotos.length}{" "}
                    {uploadedPhotos.length === 1
                      ? "Photo"
                      : "Photos"}
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {uploadedPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
                    >

                      {/* IMAGE */}

                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                          src={photo.url}
                          alt="Project photo"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* ACTION */}

                      <div className="p-4">
                        <button
                          type="button"
                          onClick={() =>
                            setCoverPhoto(photo.id)
                          }
                          className="w-full rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-100"
                        >
                          ★ Set as Cover Photo
                        </button>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            )}

            {/* INFORMATION */}

            <div className="mt-6 rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-bold text-gray-900">
                How project photos work
              </p>

              <ul className="mt-2 space-y-1 text-xs leading-6 text-gray-600">
                <li>
                  • Upload multiple photos belonging to this project.
                </li>

                <li>
                  • One photo can be selected as the Cover Photo.
                </li>

                <li>
                  • The Cover Photo is displayed first on the public
                  website.
                </li>

                <li>
                  • Other photos remain available under More Photos.
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}