"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "../../lib/supabase/client";

interface ProjectImageDeleteButtonProps {
  imageId: number;
  storagePath: string;
}

export default function ProjectImageDeleteButton({
  imageId,
  storagePath,
}: ProjectImageDeleteButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [deleting, setDeleting] =
    useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project photo?"
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);

    // ==========================================================
    // DELETE FROM STORAGE
    // ==========================================================

    const { error: storageError } =
      await supabase.storage
        .from("project-images")
        .remove([storagePath]);

    if (storageError) {
      console.error(
        "Storage delete error:",
        storageError
      );

      window.alert(
        "Unable to delete the image."
      );

      setDeleting(false);
      return;
    }

    // ==========================================================
    // DELETE DATABASE RECORD
    // ==========================================================

    const { error: databaseError } =
      await supabase
        .from("project_images")
        .delete()
        .eq("id", imageId);

    if (databaseError) {
      console.error(
        "Database delete error:",
        databaseError
      );

      window.alert(
        "Image file was deleted, but the database record could not be deleted."
      );

      setDeleting(false);
      return;
    }

    // Refresh page
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-500 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Trash2
        className="h-3.5 w-3.5"
        strokeWidth={2}
      />

      {deleting
        ? "Deleting..."
        : "Delete Photo"}
    </button>
  );
}