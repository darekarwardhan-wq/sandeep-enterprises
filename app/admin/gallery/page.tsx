import { redirect } from "next/navigation";
import {
  Image as ImageIcon,
  Images,
  Upload,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import GalleryImageUpload from "@/components/admin/GalleryImageUpload";
import GalleryImageDeleteButton from "@/components/admin/GalleryImageDeleteButton";

import { createClient } from "@/lib/supabase/server";

interface GalleryImage {
  id: number;
  storage_path: string;
  created_at: string;
}

export default async function AdminGalleryPage() {
  const supabase = await createClient();

  // ============================================================
  // CHECK ADMIN LOGIN
  // ============================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // ============================================================
  // GET GALLERY IMAGES
  // ============================================================

  const { data: galleryImages, error } = await supabase
    .from("gallery_images")
    .select("id, storage_path, created_at")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Gallery fetch error:", error);
  }

  const images: GalleryImage[] = galleryImages ?? [];

  // ============================================================
  // CREATE PUBLIC IMAGE URLS
  // ============================================================

  const imagesWithUrls = images.map((image) => {
    const { data: publicUrlData } = supabase.storage
      .from("gallery-images")
      .getPublicUrl(image.storage_path);

    return {
      ...image,
      publicUrl: publicUrlData.publicUrl,
    };
  });

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

        <AdminMobileNav />

        {/* ======================================================
            HEADER
        ====================================================== */}

        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                SANDEEP ENTERPRISES
              </p>

              <h1 className="mt-1 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                Gallery Management
              </h1>
            </div>

            {/* ADMIN */}

            <div className="hidden items-center gap-4 sm:flex">
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Administrator
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {user.email}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-sm font-black text-orange-500">
                {user.email?.charAt(0).toUpperCase() || "A"}
              </div>
            </div>

          </div>
        </header>

        {/* ======================================================
            CONTENT
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">

          {/* ====================================================
              PAGE INTRO
          ==================================================== */}

          <div className="mb-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-orange-500" />

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                    General Work Photos
                  </p>
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Manage Gallery
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Upload general fabrication, erection, workshop and site
                  photos that will appear in the public website gallery.
                </p>
              </div>

              {/* PHOTO COUNT */}

              <div className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <Images className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-lg font-black text-slate-900">
                    {images.length}
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Photos
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* ====================================================
              UPLOAD CARD
          ==================================================== */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* CARD HEADER */}

            <div className="border-b border-slate-100 px-6 py-5 sm:px-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Upload className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">
                    Upload Gallery Photos
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-400">
                    These images are independent of your projects.
                  </p>
                </div>

              </div>

            </div>

            {/* UPLOAD COMPONENT */}

            <div className="p-5 sm:p-7">
              <GalleryImageUpload />
            </div>

          </div>

          {/* ====================================================
              GALLERY PHOTOS
          ==================================================== */}

          <div className="mt-8">

            <div className="mb-5 flex items-end justify-between gap-4">

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Uploaded Images
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Gallery Photos
                </h3>
              </div>

              {images.length > 0 && (
                <p className="text-xs font-semibold text-slate-400">
                  {images.length}{" "}
                  {images.length === 1
                    ? "image"
                    : "images"}
                </p>
              )}

            </div>

            {/* =================================================
                EMPTY STATE
            ================================================= */}

            {imagesWithUrls.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-300">
                  <ImageIcon className="h-6 w-6" />
                </div>

                <h4 className="mt-5 text-lg font-bold text-slate-800">
                  No gallery photos yet
                </h4>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Upload your general work photos above. They will appear
                  here and later on the public Gallery page.
                </p>

              </div>
            )}

            {/* =================================================
                IMAGE GRID
            ================================================= */}

            {imagesWithUrls.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {imagesWithUrls.map((image) => (
                  <div
                    key={image.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >

                    {/* IMAGE */}

                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                      <img
                        src={image.publicUrl}
                        alt="SANDEEP ENTERPRISES gallery photo"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* GALLERY LABEL */}

                      <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                        Gallery
                      </div>

                    </div>

                    {/* =================================================
                        CARD FOOTER
                    ================================================= */}

                    <div className="px-4 py-3">

                      <div className="mb-3 flex items-center justify-between gap-3">

                        <div className="min-w-0">

                          <p className="text-xs font-bold text-slate-700">
                            Gallery Image
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-400">
                            ID #{image.id}
                          </p>

                        </div>

                        <span className="shrink-0 text-[10px] font-semibold text-slate-400">
                          Uploaded
                        </span>

                      </div>

                      {/* DELETE BUTTON */}

                      <GalleryImageDeleteButton
                        imageId={image.id}
                        storagePath={image.storage_path}
                      />

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* ====================================================
              INFORMATION NOTE
          ==================================================== */}

          <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/60 p-5">

            <div className="flex gap-3">

              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-black text-orange-500 shadow-sm">
                !
              </div>

              <div>

                <h4 className="text-sm font-bold text-slate-900">
                  Gallery vs Projects
                </h4>

                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                  Gallery photos are general work images and are not
                  connected to any specific project. Project photos should
                  continue to be uploaded from Manage Projects.
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}