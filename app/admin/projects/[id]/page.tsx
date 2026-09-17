import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  FolderOpen,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { createClient } from "@/lib/supabase/server";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface ProjectImage {
  id: number;
  storage_path: string;
}

interface Project {
  id: number;
  title: string;
  category: string | null;
  location: string | null;
  year: number | null;
  description: string | null;
  cover_image_id: number | null;
  project_images: ProjectImage[];
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const supabase = await createClient();

  // ============================================================
  // FETCH PROJECT
  // ============================================================

  const { data: projectData, error } = await supabase
    .from("projects")
    .select(
      `
        id,
        title,
        category,
        location,
        year,
        description,
        cover_image_id,
        project_images!project_images_project_id_fkey (
          id,
          storage_path
        )
      `
    )
    .eq("id", projectId)
    .single();

  if (error || !projectData) {
    notFound();
  }

  const project = projectData as Project;

  // ============================================================
  // FIND SELECTED COVER IMAGE
  // ============================================================

  const coverImage = project.project_images?.find(
    (image) => image.id === project.cover_image_id
  );

  let coverImageUrl: string | null = null;

  if (coverImage) {
    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(coverImage.storage_path);

    coverImageUrl = data.publicUrl;
  }

  // ============================================================
  // ADDITIONAL PROJECT PHOTOS
  // ============================================================

  const additionalImages = (project.project_images ?? []).filter(
    (image) => image.id !== project.cover_image_id
  );

  const additionalImagesWithUrls = additionalImages.map((image) => {
    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(image.storage_path);

    return {
      ...image,
      publicUrl: data.publicUrl,
    };
  });

  // ============================================================
  // WHATSAPP
  // ============================================================

  const whatsappMessage = encodeURIComponent(
    `Hello Sandeep Enterprises, I am interested in discussing a fabrication or erection requirement similar to "${project.title}".`
  );

  const whatsappUrl = `https://wa.me/919822193954?text=${whatsappMessage}`;

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* ========================================================
          PROJECT HEADER
      ======================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
          {/* BACK TO PROJECTS */}

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-orange-500"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to Projects
          </Link>

          {/* CATEGORY */}

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 sm:text-xs">
              {project.category || "Industrial Work"}
            </p>
          </div>

          {/* TITLE */}

          <h1 className="mt-4 max-w-5xl text-3xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            {project.description ||
              "Fabrication and erection work executed by SANDEEP ENTERPRISES."}
          </p>

          {/* PROJECT META */}

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.location && (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700">
                <MapPin className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} />
                {project.location}
              </div>
            )}

            {project.year && (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700">
                <CalendarDays className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} />
                {project.year}
              </div>
            )}

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700">
              <ImageIcon className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} />
              {project.project_images?.length || 0}{" "}
              {project.project_images?.length === 1 ? "Photo" : "Photos"}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          COVER IMAGE + PROJECT INFORMATION
      ======================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            {/* ==================================================
                PROJECT COVER
            ================================================== */}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {coverImageUrl ? (
                <div className="relative aspect-[16/10] w-full max-h-[420px] overflow-hidden bg-slate-100">
                  {/*
                    object-cover at a fixed aspect ratio, capped height,
                    avoids stretching/upscaling a lower-res source image.
                  */}

                  <img
                    src={coverImageUrl}
                    alt={`${project.title} project cover`}
                    className="h-full w-full object-cover"
                  />

                  {/* soft gradient for badge legibility */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />

                  {/* PROJECT COVER BADGE */}

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Project Cover
                  </div>
                </div>
              ) : (
                <div className="flex h-[280px] items-center justify-center bg-slate-100">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-300 shadow-sm">
                      <ImageIcon className="h-6 w-6" strokeWidth={1.7} />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-500">
                      No cover photo available
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ==================================================
                PROJECT INFORMATION
            ================================================== */}

            <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* HEADER */}

              <div className="border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <FolderOpen className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Project
                    </p>

                    <h2 className="mt-0.5 text-base font-black text-slate-950">
                      Information
                    </h2>
                  </div>
                </div>
              </div>

              {/* DETAILS */}

              <div className="px-6">
                {project.category && (
                  <div className="border-b border-slate-100 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Work Type
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      {project.category}
                    </p>
                  </div>
                )}

                {project.location && (
                  <div className="border-b border-slate-100 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Location
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={2} />
                      <p className="text-sm font-bold text-slate-900">
                        {project.location}
                      </p>
                    </div>
                  </div>
                )}

                {project.year && (
                  <div className="border-b border-slate-100 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Year
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={2} />
                      <p className="text-sm font-bold text-slate-900">
                        {project.year}
                      </p>
                    </div>
                  </div>
                )}

                <div className="py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Project Photos
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={2} />
                    <p className="text-sm font-bold text-slate-900">
                      {project.project_images?.length || 0}{" "}
                      {project.project_images?.length === 1 ? "Photo" : "Photos"}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========================================================
          OVERVIEW
      ======================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 border-t border-slate-100 pt-12 lg:grid-cols-[180px_minmax(0,1fr)]">
            {/* LABEL */}

            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
                  Overview
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                The Work
              </h2>

              <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
                {project.description ||
                  "The project was completed by SANDEEP ENTERPRISES with a focus on quality fabrication, safe erection practices and reliable execution."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ADDITIONAL PROJECT PHOTOS
      ======================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <div className="border-t border-slate-100 pt-12">
            {/* SECTION HEADER */}

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-8 bg-orange-500" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
                    Project Gallery
                  </p>
                </div>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  More Photos
                </h2>
              </div>

              {additionalImagesWithUrls.length > 0 && (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
                  <ImageIcon className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} />
                  {additionalImagesWithUrls.length} additional{" "}
                  {additionalImagesWithUrls.length === 1 ? "photo" : "photos"}
                </div>
              )}
            </div>

            {/* ====================================================
                ADDITIONAL PHOTO GRID
            ==================================================== */}

            {additionalImagesWithUrls.length > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {additionalImagesWithUrls.map((image, index) => (
                  <div
                    key={image.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={image.publicUrl}
                        alt={`${project.title} project photo ${index + 1}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/50 bg-white/90 px-2 text-[10px] font-black text-slate-700 shadow-sm backdrop-blur">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-6 py-14 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-300 shadow-sm ring-1 ring-slate-100">
                  <ImageIcon className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-800">
                  More project photos will be added soon
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Additional photographs from this project will be displayed
                  here as they become available.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
      ======================================================== */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-orange-600">
                  Have a similar requirement?
                </p>

                <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
                  Let&apos;s discuss your fabrication or erection project.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                  Share your requirement, project location and scope of work
                  with SANDEEP ENTERPRISES.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center gap-2.5 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Discuss on WhatsApp
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
