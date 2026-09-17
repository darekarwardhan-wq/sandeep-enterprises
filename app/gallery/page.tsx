import {
  ArrowRight,
  Image as ImageIcon,
  Images,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { createClient } from "@/lib/supabase/server";

interface GalleryImage {
  id: number;
  storage_path: string;
  created_at: string;
}

export default async function GalleryPage() {
  const supabase = await createClient();

  const { data: galleryImages, error } = await supabase
    .from("gallery_images")
    .select("id, storage_path, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gallery fetch error:", error);
  }

  const images: GalleryImage[] = galleryImages ?? [];

  const imagesWithUrls = images.map((image) => {
    const { data } = supabase.storage
      .from("gallery-images")
      .getPublicUrl(image.storage_path);

    return {
      ...image,
      publicUrl: data.publicUrl,
    };
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-slate-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-600">
                Our Work
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Industrial Work
              <span className="text-orange-500"> Gallery</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Explore photographs from our fabrication, erection, workshop
              and industrial site work.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* GALLERY SECTION */}
      {/* ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                Behind The Work
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Fabrication & Erection
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              A look at our ongoing and completed industrial work.
            </p>
          </div>

          {images.length > 0 && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
              <Images className="h-4 w-4 text-orange-500" />
              <span className="text-xs font-bold text-slate-600">
                {images.length}{" "}
                {images.length === 1 ? "Photo" : "Photos"}
              </span>
            </div>
          )}
        </div>

        {/* ================================================= */}
        {/* EMPTY STATE */}
        {/* ================================================= */}

        {imagesWithUrls.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/60 px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-300 shadow-sm ring-1 ring-slate-100">
              <ImageIcon className="h-7 w-7" />
            </div>

            <h3 className="mt-6 text-xl font-black text-slate-900">
              Gallery coming soon
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
              We are currently updating our gallery with photographs of our
              fabrication, erection and industrial work.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* ================================================= */}
        {/* IMAGE GRID */}
        {/* ================================================= */}

        {imagesWithUrls.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {imagesWithUrls.map((image, index) => (
              <figure
                key={image.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={image.publicUrl}
                    alt={`Sandeep Enterprises industrial work ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image number */}
                  <div className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-600 shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Caption */}
                <figcaption className="flex items-center gap-3 border-t border-slate-100 px-4 py-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                    <ImageIcon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">
                      Sandeep Enterprises
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Industrial Work
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative flex flex-col items-start gap-8 border-t border-slate-100 pt-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
              <MessageCircle className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Looking for reliable industrial fabrication?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Discuss your fabrication and erection requirements with
              Sandeep Enterprises.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
