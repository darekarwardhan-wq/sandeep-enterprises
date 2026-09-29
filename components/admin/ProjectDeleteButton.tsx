"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

interface ProjectDeleteButtonProps {
  projectId: number;
}

export default function ProjectDeleteButton({
  projectId,
}: ProjectDeleteButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?\n\nThis will permanently delete the project and all of its photos."
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    try {
      // ============================================================
      // 1. GET ALL IMAGES BELONGING TO THIS PROJECT
      // ============================================================

      const { data: images, error: imagesFetchError } = await supabase
        .from("project_images")
        .select("id, storage_path")
        .eq("project_id", projectId);

      if (imagesFetchError) {
        console.error(
          "Project images fetch error:",
          imagesFetchError
        );

        window.alert(
          "Unable to find the project images. The project was not deleted."
        );

        setLoading(false);
        return;
      }

      // ============================================================
      // 2. DELETE ALL PROJECT IMAGES FROM STORAGE
      // ============================================================

      if (images && images.length > 0) {
        const storagePaths = images
          .map((image) => image.storage_path)
          .filter(Boolean);

        if (storagePaths.length > 0) {
          const { error: storageDeleteError } =
            await supabase.storage
              .from("project-images")
              .remove(storagePaths);

          if (storageDeleteError) {
            console.error(
              "Project images storage delete error:",
              storageDeleteError
            );

            window.alert(
              "Unable to delete the project photos from storage. The project was not deleted."
            );

            setLoading(false);
            return;
          }
        }
      }

      // ============================================================
      // 3. DELETE PROJECT IMAGE RECORDS FROM DATABASE
      // ============================================================

      const { error: imageDatabaseError } = await supabase
        .from("project_images")
        .delete()
        .eq("project_id", projectId);

      if (imageDatabaseError) {
        console.error(
          "Project images database delete error:",
          imageDatabaseError
        );

        window.alert(
          "The project photos were removed from storage, but their database records could not be deleted."
        );

        setLoading(false);
        return;
      }

      // ============================================================
      // 4. DELETE THE PROJECT
      // ============================================================

      const { error: projectDeleteError } = await supabase
        .from("projects")
        .delete()
        .eq("id", projectId);

      if (projectDeleteError) {
        console.error(
          "Project delete error:",
          projectDeleteError
        );

        window.alert(
          "Unable to delete the project."
        );

        setLoading(false);
        return;
      }

      // ============================================================
      // 5. REFRESH PROJECT MANAGEMENT PAGE
      // ============================================================

      router.refresh();
    } catch (error) {
      console.error(
        "Unexpected project deletion error:",
        error
      );

      window.alert(
        "Something went wrong while deleting the project."
      );

      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="border border-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}