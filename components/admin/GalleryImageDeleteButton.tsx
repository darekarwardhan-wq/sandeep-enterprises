"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "../../lib/supabase/client";

interface GalleryImageDeleteButtonProps {
  imageId: number;
  storagePath: string;
}

export default function GalleryImageDeleteButton({
  imageId,
  storagePath,
}: GalleryImageDeleteButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this gallery photo?\n\nThis will permanently remove the photo from the gallery."
    );

    if (!confirmed) return;

    setDeleting(true);

    try {
      // ============================================================
      // 1. CHECK AUTHENTICATION
      // ============================================================

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error("Gallery delete authentication error:", authError);

        window.alert(
          "Your admin session has expired. Please log in again."
        );

        setDeleting(false);
        return;
      }

      // ============================================================
      // 2. DELETE DATABASE RECORD FIRST
      // ============================================================

      const { data: deletedRows, error: databaseError } = await supabase
        .from("gallery_images")
        .delete()
        .eq("id", imageId)
        .select("id");

      if (databaseError) {
        console.error("Gallery database delete error:", databaseError);

        window.alert(
          `Unable to delete the gallery database record.\n\n${databaseError.message}`
        );

        setDeleting(false);
        return;
      }

      // ============================================================
      // 3. VERIFY DATABASE DELETE
      // ============================================================

      if (!deletedRows || deletedRows.length === 0) {
        console.error(
          "Gallery database delete returned zero deleted rows."
        );

        window.alert(
          "The gallery record was not deleted. Please check your admin session and Supabase permissions."
        );

        setDeleting(false);
        return;
      }

      console.log(
        "Gallery database record deleted successfully:",
        deletedRows
      );

      // ============================================================
      // 4. DELETE IMAGE FROM STORAGE
      // ============================================================

      const { error: storageError } = await supabase.storage
        .from("gallery-images")
        .remove([storagePath]);

      if (storageError) {
        console.error("Gallery storage delete error:", storageError);

        window.alert(
          `The gallery record was deleted, but the image file could not be removed from Storage.\n\n${storageError.message}`
        );

        setDeleting(false);

        // Refresh so the deleted gallery record disappears.
        router.refresh();

        return;
      }

      // ============================================================
      // 5. SUCCESS
      // ============================================================

      console.log("Gallery image deleted successfully:", {
        imageId,
        storagePath,
      });

      router.refresh();
    } catch (error) {
      console.error("Gallery delete error:", error);

      window.alert(
        "Something went wrong while deleting the gallery photo."
      );

      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-500 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Trash2
        className={`h-3.5 w-3.5 ${
          deleting ? "animate-pulse" : ""
        }`}
        strokeWidth={2}
      />

      {deleting ? "Deleting..." : "Delete Photo"}
    </button>
  );
}