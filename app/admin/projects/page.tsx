import {
  CalendarDays,
  FolderOpen,
  Image as ImageIcon,
  MapPin,
  Pencil,
  Plus,
  Upload,
  XCircle,
  Images,
  BriefcaseBusiness,
} from "lucide-react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import ProjectForm from "../../../components/admin/ProjectForm";
import ProjectDeleteButton from "../../../components/admin/ProjectDeleteButton";
import ProjectImageUpload from "../../../components/admin/ProjectImageUpload";
import ProjectImageDeleteButton from "@/components/admin/ProjectImageDeleteButton";
import ProjectCoverButton from "@/components/admin/ProjectCoverButton";

export default async function AdminProjectsPage() {
  const supabase = await createClient();

  // ============================================================
  // AUTHENTICATION
  // ============================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // ============================================================
  // GET PROJECTS + PROJECT IMAGES
  // ============================================================

  const { data: projects, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_images!project_images_project_id_fkey (
        id,
        storage_path
      )
    `)
    .order("created_at", {
      ascending: false,
    });

  // ============================================================
  // DERIVED STATS
  // ============================================================

  const projectCount = projects?.length ?? 0;

  const totalPhotoCount =
    projects?.reduce(
      (sum, project) => sum + (project.project_images?.length ?? 0),
      0
    ) ?? 0;

  const projectsMissingPhotos =
    projects?.filter(
      (project) => (project.project_images?.length ?? 0) === 0
    ).length ?? 0;

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 lg:flex">
      {/* ========================================================
          SIDEBAR
      ======================================================== */}

      <AdminSidebar />

      {/* ========================================================
          MAIN CONTENT
      ======================================================== */}

      <div className="min-w-0 flex-1">
        {/* MOBILE NAV */}

        <AdminMobileNav />

        {/* ======================================================
            HEADER
        ====================================================== */}

        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500">
                Sandeep Enterprises
              </p>

              <h1 className="mt-0.5 text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                Project Management
              </h1>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Administrator
                </p>

                <p className="mt-0.5 text-sm font-semibold text-slate-800">
                  {user.email}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {user.email?.charAt(0).toUpperCase() || "A"}
              </div>
            </div>
          </div>
        </header>

        {/* ======================================================
            PAGE CONTENT
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* ====================================================
              PAGE INTRO
          ==================================================== */}

          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500">
                Portfolio Management
              </p>
            </div>

            <h2 className="mt-2.5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Manage Projects
            </h2>

            <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-500">
              Add, edit and manage fabrication and erection projects
              displayed on the public website.
            </p>

            {/* STAT CARDS */}

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <FolderOpen className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-black leading-none text-slate-950">
                    {projectCount}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {projectCount === 1 ? "Total Project" : "Total Projects"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <Images className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-black leading-none text-slate-950">
                    {totalPhotoCount}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {totalPhotoCount === 1 ? "Photo Uploaded" : "Photos Uploaded"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    projectsMissingPhotos > 0
                      ? "bg-red-50 text-red-500"
                      : "bg-emerald-50 text-emerald-500"
                  }`}
                >
                  <ImageIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-black leading-none text-slate-950">
                    {projectsMissingPhotos}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Missing Photos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              ADD NEW PROJECT
          ==================================================== */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 sm:px-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Plus className="h-5 w-5" strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                  New Project
                </p>

                <h3 className="mt-0.5 text-lg font-bold text-slate-950">
                  Add New Project
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-6 text-sm text-slate-500">
                Enter the basic information for your project. Photos can be
                uploaded separately after the project is created.
              </p>

              <ProjectForm />
            </div>
          </div>

          {/* ====================================================
              EXISTING PROJECTS
          ==================================================== */}

          <div className="mt-10">
            {/* SECTION HEADER */}

            <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2.5">
                <BriefcaseBusiness className="h-4 w-4 text-orange-500" />
                <h3 className="text-base font-bold tracking-tight text-slate-950">
                  Existing Projects
                </h3>
              </div>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
                {projectCount} {projectCount === 1 ? "project" : "projects"}
              </span>
            </div>

            {/* ==================================================
                ERROR
            ================================================== */}

            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-5 text-red-600">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0" />

                <div>
                  <p className="font-bold">Unable to load projects.</p>
                  <p className="mt-1 text-sm">{error.message}</p>
                </div>
              </div>
            )}

            {/* ==================================================
                EMPTY STATE
            ================================================== */}

            {!error && (!projects || projects.length === 0) && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                  <FolderOpen className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  No projects yet
                </h3>

                <p className="mx-auto mt-1.5 max-w-md text-sm leading-6 text-slate-500">
                  Add your first fabrication or erection project using the
                  form above.
                </p>
              </div>
            )}

            {/* ==================================================
                PROJECT LIST
            ================================================== */}

            {projects && projects.length > 0 && (
              <div className="space-y-5">
                {projects.map((project) => {
                  const photoCount = project.project_images?.length ?? 0;

                  return (
                    <article
                      key={project.id}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                    >
                      {/* =================================================
                          PROJECT HEADER ROW
                      ================================================= */}

                      <div className="flex flex-col gap-5 px-6 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
                        {/* PROJECT DETAILS */}

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">
                              {project.category}
                            </p>
                          </div>

                          <h4 className="mt-1.5 truncate text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                            {project.title}
                          </h4>

                          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-slate-400" />
                              {project.location || "Location not provided"}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                              {project.year || "Year not provided"}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <ImageIcon className="h-3.5 w-3.5 text-slate-400" />
                              {photoCount} {photoCount === 1 ? "photo" : "photos"}
                            </span>
                          </div>

                          {project.description && (
                            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                              {project.description}
                            </p>
                          )}
                        </div>

                        {/* ACTIONS */}

                        <div className="flex shrink-0 items-center gap-2 lg:self-start">
                          <a
                            href={`/admin/projects/${project.id}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit
                          </a>

                          <ProjectDeleteButton projectId={project.id} />
                        </div>
                      </div>

                      {/* =================================================
                          PROJECT PHOTOS
                      ================================================= */}

                      <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-6 sm:px-7">
                        {/* PHOTO HEADER */}

                        <div className="flex items-center justify-between gap-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                            Project Photos
                          </p>

                          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold text-slate-500">
                            {photoCount} {photoCount === 1 ? "photo" : "photos"}
                          </span>
                        </div>

                        {/* =================================================
                            UPLOAD BOX
                        ================================================= */}

                        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                          <div className="mb-4 flex items-center gap-2">
                            <Upload className="h-4 w-4 text-orange-500" />
                            <div>
                              <p className="text-xs font-bold text-slate-700">
                                Upload photos for{" "}
                                <span className="text-slate-950">
                                  {project.title}
                                </span>
                              </p>
                              <p className="text-[11px] text-slate-400">
                                JPG, PNG, WEBP · Max 5 MB per image
                              </p>
                            </div>
                          </div>

                          <ProjectImageUpload projectId={project.id} />
                        </div>

                        {/* =================================================
                            UPLOADED PHOTOS
                        ================================================= */}

                        {photoCount > 0 && (
                          <div className="mt-6">
                            <p className="mb-3 text-xs text-slate-400">
                              Select one photo as the highlighted cover photo.
                            </p>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                              {project.project_images.map(
                                (image: { id: number; storage_path: string }) => {
                                  const {
                                    data: { publicUrl },
                                  } = supabase.storage
                                    .from("project-images")
                                    .getPublicUrl(image.storage_path);

                                  const isCover =
                                    project.cover_image_id === image.id;

                                  return (
                                    <div
                                      key={image.id}
                                      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                                    >
                                      <div className="relative h-44 overflow-hidden bg-slate-100">
                                        <img
                                          src={publicUrl}
                                          alt={`${project.title} project photo`}
                                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                                        {isCover && (
                                          <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-orange-500 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white shadow-lg">
                                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                            Cover
                                          </div>
                                        )}
                                      </div>

                                      <div className="space-y-1.5 p-3">
                                        <ProjectCoverButton
                                          projectId={project.id}
                                          imageId={image.id}
                                          isCover={isCover}
                                        />

                                        <ProjectImageDeleteButton
                                          imageId={image.id}
                                          storagePath={image.storage_path}
                                        />
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}

                        {/* =================================================
                            NO PHOTOS
                        ================================================= */}

                        {photoCount === 0 && (
                          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-8 text-center">
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                              <ImageIcon className="h-5 w-5" />
                            </div>

                            <p className="mt-3 text-sm font-bold text-slate-700">
                              No photos uploaded
                            </p>

                            <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-slate-400">
                              Use the upload box above to add photos for this
                              project.
                            </p>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
