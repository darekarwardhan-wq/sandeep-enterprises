import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FolderOpen,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

import { createClient } from "@/lib/supabase/server";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to discuss a fabrication or erection project."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

export default async function ProjectsPage() {
  const supabase = await createClient();

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
    .order("created_at", {
      ascending: false,
    });

  const projects = (data as Project[] | null) ?? [];

  const projectsWithImages = projects.map((project) => {
    let coverImageUrl: string | null = null;

    if (project.cover_image_id !== null) {
      const coverImage = project.project_images.find(
        (image) => image.id === project.cover_image_id
      );

      if (coverImage) {
        const { data: publicUrlData } = supabase.storage
          .from("project-images")
          .getPublicUrl(coverImage.storage_path);

        coverImageUrl = publicUrlData.publicUrl;
      }
    }

    return {
      ...project,
      coverImageUrl,
    };
  });

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-slate-200 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.10),transparent_45%)]" />

        <div className="pointer-events-none absolute right-20 top-28 hidden h-80 w-px rotate-12 bg-orange-500/20 lg:block" />

        <div className="pointer-events-none absolute right-40 top-40 hidden h-64 w-px -rotate-12 bg-slate-200 lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
                Our Portfolio
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              WORK THAT
              <br />
              <span className="text-orange-500">STANDS.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A selection of fabrication, structural and erection work
              carried out by SANDEEP ENTERPRISES.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROJECT INTRO */}
      {/* ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Project Portfolio
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Fabrication. Erection. Execution.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Explore completed projects and fabrication work carried out
              by SANDEEP ENTERPRISES.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROJECT GRID */}
      {/* ========================================================= */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <p className="text-sm font-bold text-red-600">
                Unable to load projects.
              </p>

              <p className="mt-2 text-sm text-red-500">
                Please try again later.
              </p>
            </div>
          )}

          {!error && projectsWithImages.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <FolderOpen className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-900">
                Projects Coming Soon
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Our project portfolio is currently being updated.
                Please check back soon to explore our work.
              </p>
            </div>
          )}

          {!error && projectsWithImages.length > 0 && (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projectsWithImages.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group block"
                >
                  <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-200 group-hover:shadow-xl">

                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                      {project.coverImageUrl ? (
                        <img
                          src={project.coverImageUrl}
                          alt={`${project.title} project`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                          <FolderOpen className="h-12 w-12 text-slate-300" />

                          <span className="mt-3 text-xs font-semibold text-slate-400">
                            No cover photo
                          </span>
                        </div>
                      )}

                      {/* IMAGE OVERLAY */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      {/* PROJECT NUMBER */}
                      <div className="absolute bottom-5 left-5">
                        <span className="border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* FEATURED */}
                      {project.coverImageUrl && (
                        <div className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-lg">
                          Featured
                        </div>
                      )}

                      {/* ARROW */}
                      <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="p-7">

                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                        {project.category || "Fabrication & Erection"}
                      </p>

                      <h3 className="mt-3 text-xl font-black leading-tight text-slate-950">
                        {project.title}
                      </h3>

                      {/* LOCATION + YEAR */}
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">

                        {project.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-orange-500" />
                            {project.location}
                          </span>
                        )}

                        {project.year && (
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5 text-orange-500" />
                            {project.year}
                          </span>
                        )}

                      </div>

                      {/* DESCRIPTION */}
                      {project.description && (
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                          {project.description}
                        </p>
                      )}

                      {/* FOOTER */}
                      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">

                        <span className="text-xs font-medium text-slate-400">
                          View Project
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 transition-all group-hover:gap-2.5">
                          Explore
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>

                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* AREAS OF WORK */}
      {/* ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Areas of Work
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Different work.
                <br />
                <span className="text-orange-500">
                  One focus.
                </span>
              </h2>

              <p className="mt-5 max-w-md leading-7 text-slate-600">
                Our work can range from individual fabricated components
                to larger structural fabrication and erection requirements.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Structural Steel",
                  text: "Columns, beams, frames and supporting structures.",
                },
                {
                  number: "02",
                  title: "Industrial Sheds",
                  text: "Fabrication and erection for industrial buildings and sheds.",
                },
                {
                  number: "03",
                  title: "Custom Fabrication",
                  text: "Project-specific steel components and structures.",
                },
                {
                  number: "04",
                  title: "Erection Work",
                  text: "On-site assembly, installation and structural erection.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-slate-50 p-7 transition hover:bg-white sm:p-8"
                >
                  <p className="text-sm font-black text-orange-500">
                    {item.number}
                  </p>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Start Your Project
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                Have a fabrication or erection project in mind?
              </h2>

              <p className="mt-4 max-w-xl text-black/70">
                Share your requirement with SANDEEP ENTERPRISES and
                let's discuss the work.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-black/80"
              >
                <MessageCircle className="h-4 w-4" />
                Discuss on WhatsApp
              </a>

              <a
                href="tel:+919822193954"
                className="rounded-full border border-black/25 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-black/10"
              >
                Call 9822193954
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