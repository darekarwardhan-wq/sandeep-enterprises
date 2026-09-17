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

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsAppButton from "../../../components/WhatsAppButton";

import { createClient } from "@/lib/supabase/server";

const whatsappNumber = "919822193954";

interface ProjectImage {
  id: number;
  storage_path: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  location: string | null;
  year: number | null;
  description: string | null;
  cover_image_id: number | null;
  project_images: ProjectImage[];
}

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const supabase = await createClient();

  // ============================================================
  // GET PROJECT
  // ============================================================

  const { data, error } = await supabase
    .from("projects")
    .select(`
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
    `)
    .eq("id", projectId)
    .single();

  if (error || !data) {
    notFound();
  }

  const project = data as Project;

  // ============================================================
  // FIND ADMIN-SELECTED COVER
  // ============================================================

  const coverImage =
    project.cover_image_id !== null
      ? project.project_images.find(
          (image) => image.id === project.cover_image_id
        )
      : undefined;

  let coverImageUrl: string | null = null;

  if (coverImage) {
    const { data: publicUrlData } = supabase.storage
      .from("project-images")
      .getPublicUrl(coverImage.storage_path);

    coverImageUrl = publicUrlData.publicUrl;
  }

  // ============================================================
  // ADDITIONAL PROJECT PHOTOS
  // ============================================================

  const additionalImages = project.project_images.filter(
    (image) => image.id !== project.cover_image_id
  );

  // ============================================================
  // WHATSAPP
  // ============================================================

  const whatsappMessage = encodeURIComponent(
    `Hello SANDEEP ENTERPRISES,

I saw your project "${project.title}" on your website and would like to discuss a similar fabrication / erection requirement.

Work Type: ${project.category}
Location: ${project.location || "Not specified"}`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* ======================================================== */}
      {/* PROJECT HEADER */}
      {/* ======================================================== */}

      <section className="border-b border-slate-200 bg-white pt-32 sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">

          {/* BACK */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-orange-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* TITLE AREA */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  {project.category || "Project"}
                </p>
              </div>

              <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                Fabrication and erection work executed by SANDEEP ENTERPRISES.
              </p>
            </div>

            {/* PROJECT META */}
            <div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">

              {project.location && (
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600">
                  <MapPin className="h-3.5 w-3.5 text-orange-500" />
                  {project.location}
                </div>
              )}

              {project.year && (
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600">
                  <CalendarDays className="h-3.5 w-3.5 text-orange-500" />
                  {project.year}
                </div>
              )}

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600">
                <ImageIcon className="h-3.5 w-3.5 text-orange-500" />
                {project.project_images.length}{" "}
                {project.project_images.length === 1
                  ? "Photo"
                  : "Photos"}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* COVER + PROJECT INFORMATION */}
      {/* ======================================================== */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">

            {/* COVER IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {coverImageUrl ? (
                <div className="group relative overflow-hidden">

                  <img
                    src={coverImageUrl}
                    alt={`${project.title} cover photo`}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />

                  {/* COVER LABEL */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Project Cover
                  </div>

                </div>
              ) : (
                <div className="flex aspect-[16/10] flex-col items-center justify-center px-6 text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                    <FolderOpen className="h-7 w-7" />
                  </div>

                  <h2 className="mt-5 text-lg font-black text-slate-800">
                    No Cover Photo
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    A cover photo has not been selected for this project yet.
                  </p>

                </div>
              )}

            </div>

            {/* PROJECT INFORMATION */}
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <FolderOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Project
                  </p>

                  <h2 className="mt-0.5 text-base font-black text-slate-900">
                    Information
                  </h2>
                </div>
              </div>

              <div className="mt-7 divide-y divide-slate-100">

                {/* WORK TYPE */}
                <div className="pb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Work Type
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {project.category || "Not provided"}
                  </p>
                </div>

                {/* LOCATION */}
                <div className="py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-2 flex items-start gap-2 text-sm font-semibold text-slate-800">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    {project.location || "Not provided"}
                  </p>
                </div>

                {/* YEAR */}
                <div className="py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Year
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <CalendarDays className="h-4 w-4 text-orange-500" />
                    {project.year || "Not provided"}
                  </p>
                </div>

                {/* PHOTOS */}
                <div className="pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Project Photos
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <ImageIcon className="h-4 w-4 text-orange-500" />
                    {project.project_images.length}{" "}
                    {project.project_images.length === 1
                      ? "Photo"
                      : "Photos"}
                  </p>
                </div>

              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PROJECT OVERVIEW */}
      {/* ======================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

            {/* LABEL */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                Overview
              </p>

              <div className="mt-4 h-px w-12 bg-slate-200" />
            </div>

            {/* CONTENT */}
            <div className="max-w-4xl">

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                The Work
              </h2>

              {project.description ? (
                <p className="mt-6 whitespace-pre-wrap text-base leading-8 text-slate-600">
                  {project.description}
                </p>
              ) : (
                <p className="mt-6 text-sm leading-7 text-slate-400">
                  Project details will be updated soon.
                </p>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ADDITIONAL PROJECT PHOTOS */}
      {/* ======================================================== */}

      {additionalImages.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

            {/* SECTION HEADER */}
            <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                  Project Gallery
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  More from this project
                </h2>
              </div>

              <p className="text-sm text-slate-400">
                {additionalImages.length}{" "}
                {additionalImages.length === 1
                  ? "additional photo"
                  : "additional photos"}
              </p>

            </div>

            {/* PHOTO GRID */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {additionalImages.map((image) => {
                const { data: publicUrlData } = supabase.storage
                  .from("project-images")
                  .getPublicUrl(image.storage_path);

                return (
                  <div
                    key={image.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">

                      <img
                        src={publicUrlData.publicUrl}
                        alt={`${project.title} project photo`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* NO ADDITIONAL PHOTOS */}
      {/* ======================================================== */}

      {additionalImages.length === 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-6 lg:px-8">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-300 shadow-sm">
              <ImageIcon className="h-5 w-5" />
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              More photos from this project will be added soon.
            </p>

          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* CTA */}
      {/* ======================================================== */}

      <section className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Have a Similar Requirement?
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Let's discuss your fabrication or erection project.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">
                Share your requirement, project location and scope of work
                with SANDEEP ENTERPRISES.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-black/80"
            >
              <MessageCircle className="h-4 w-4" />
              Discuss on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FOOTER */}
      {/* ======================================================== */}

      <Footer />

      <WhatsAppButton />
    </main>
  );
}