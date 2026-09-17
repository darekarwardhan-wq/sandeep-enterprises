"use client";

import { useRef, useState } from "react";
import { CheckCircle2, ImagePlus, Upload, X } from "lucide-react";
import { createClient } from "../../lib/supabase/client";

interface ProjectImageUploadProps {
  projectId: number;
}

export default function ProjectImageUpload({
  projectId,
}: ProjectImageUploadProps) {
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0];

    setMessage("");
    setError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Maximum 5 MB
    if (selectedFile.size > 5 * 1024 * 1024) {
      setFile(null);
      setError("Image size must be less than 5 MB.");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      return;
    }

    // Allowed image types
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setFile(null);
      setError(
        "Only JPG, PNG and WEBP images are allowed."
      );

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      return;
    }

    setFile(selectedFile);
  }

  function removeSelectedFile() {
    setFile(null);
    setMessage("");
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleUpload() {
    if (!file) {
      setError("Please choose a photo first.");
      return;
    }

    setUploading(true);
    setMessage("");
    setError("");

    try {
      const fileExtension =
        file.name.split(".").pop()?.toLowerCase() || "jpg";

      const uniqueName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 10)}.${fileExtension}`;

      const storagePath =
        `projects/${projectId}/${uniqueName}`;

      // ========================================================
      // UPLOAD IMAGE TO SUPABASE STORAGE
      // ========================================================

      const { error: uploadError } =
        await supabase.storage
          .from("project-images")
          .upload(storagePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

      if (uploadError) {
        console.error(
          "Image upload error:",
          uploadError
        );

        setError(
          "Unable to upload photo. Please try again."
        );

        setUploading(false);
        return;
      }

      // ========================================================
      // SAVE IMAGE INFORMATION IN DATABASE
      // ========================================================

      const { error: databaseError } =
        await supabase
          .from("project_images")
          .insert({
            project_id: projectId,
            storage_path: storagePath,
          });

      if (databaseError) {
        console.error(
          "Project image database error:",
          databaseError
        );

        // Remove uploaded file if database insert fails
        await supabase.storage
          .from("project-images")
          .remove([storagePath]);

        setError(
          "Photo could not be saved. Please try again."
        );

        setUploading(false);
        return;
      }

      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setMessage(
        "Photo uploaded successfully."
      );

      // Refresh page so new photo appears immediately
      window.location.reload();
    } catch (uploadError) {
      console.error(uploadError);

      setError(
        "Something went wrong while uploading the photo."
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="w-full">
      {/* ======================================================
          UPLOAD AREA
      ====================================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        {/* ====================================================
            FILE SELECTOR
        ==================================================== */}

        <input
          ref={fileInputRef}
          id={`project-photo-${projectId}`}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor={`project-photo-${projectId}`}
          className={`group flex min-h-[96px] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed px-5 py-5 text-center transition-all ${
            file
              ? "border-orange-300 bg-orange-50/40"
              : "border-slate-200 bg-slate-50/50 hover:border-orange-300 hover:bg-orange-50/40"
          }`}
        >
          <div className="flex items-center gap-4">
            {/* ICON */}

            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
                file
                  ? "bg-orange-100 text-orange-600"
                  : "bg-white text-slate-400 shadow-sm group-hover:bg-orange-100 group-hover:text-orange-500"
              }`}
            >
              {file ? (
                <CheckCircle2
                  className="h-6 w-6"
                  strokeWidth={2}
                />
              ) : (
                <ImagePlus
                  className="h-6 w-6"
                  strokeWidth={1.8}
                />
              )}
            </div>

            {/* TEXT */}

            <div className="min-w-0 text-left">
              {file ? (
                <>
                  <p className="max-w-[260px] truncate text-sm font-bold text-slate-900">
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                    {" · "}
                    Ready to upload
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-bold text-slate-800">
                    Choose a project photo
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Click here to browse your device
                  </p>
                </>
              )}
            </div>
          </div>
        </label>

        {/* ====================================================
            SELECTED FILE ACTION
        ==================================================== */}

        {file && !uploading && (
          <div className="mt-3 flex items-center justify-between rounded-lg border border-orange-100 bg-orange-50 px-3 py-2.5">
            <div className="flex min-w-0 items-center gap-2">
              <Upload className="h-3.5 w-3.5 shrink-0 text-orange-500" />

              <span className="truncate text-xs font-semibold text-orange-700">
                Photo selected and ready
              </span>
            </div>

            <button
              type="button"
              onClick={removeSelectedFile}
              className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-orange-500 transition hover:bg-orange-100 hover:text-orange-700"
              aria-label="Remove selected photo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* ====================================================
            UPLOAD BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={handleUpload}
          disabled={!file || uploading}
          className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-bold text-black shadow-sm transition hover:bg-orange-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
        >
          <Upload
            className={`h-4 w-4 ${
              uploading ? "animate-pulse" : ""
            }`}
            strokeWidth={2.5}
          />

          {uploading
            ? "Uploading Photo..."
            : "Upload Photo"}
        </button>

        {/* ====================================================
            FILE INFORMATION
        ==================================================== */}

        <div className="mt-3 flex items-center justify-center gap-2 text-center">
          <p className="text-[11px] text-slate-400">
            JPG, PNG or WEBP · Maximum 5 MB per image
          </p>
        </div>

        {/* ====================================================
            SUCCESS MESSAGE
        ==================================================== */}

        {message && (
          <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            <CheckCircle2 className="h-4 w-4 shrink-0" />

            <span>{message}</span>
          </div>
        )}

        {/* ====================================================
            ERROR MESSAGE
        ==================================================== */}

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}