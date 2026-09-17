"use client";

import { Check, Star, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

interface ProjectCoverButtonProps {
  projectId: number;
  imageId: number;
  isCover: boolean;
}

export default function ProjectCoverButton({
  projectId,
  imageId,
  isCover,
}: ProjectCoverButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  async function handleSetCover() {
    setLoading(true);

    const { error } = await supabase
      .from("projects")
      .update({
        cover_image_id: imageId,
      })
      .eq("id", projectId);

    if (error) {
      console.error("Cover image update error:", error);
      window.alert("Unable to set cover image.");
      setLoading(false);
      return;
    }

    setLoading(false);
    router.refresh();
  }

  async function handleRemoveCover() {
    const confirmed = window.confirm(
      "Remove this image as the project cover?\n\nThe photo will not be deleted."
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("projects")
      .update({
        cover_image_id: null,
      })
      .eq("id", projectId)
      .eq("cover_image_id", imageId);

    if (error) {
      console.error("Remove cover image error:", {
  message: error.message,
  details: error.details,
  hint: error.hint,
  code: error.code,
});
      window.alert(
  `Unable to remove the cover image.\n\n${error.message}`
);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.refresh();
  }

  return (
    <div className="mt-2 space-y-2">
      {isCover ? (
        <>
          {/* Current Cover */}
          <div className="flex items-center justify-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
              <Check
                className="h-3 w-3 text-white"
                strokeWidth={3}
              />
            </div>

            <span className="text-xs font-bold text-orange-700">
              Current Cover Photo
            </span>
          </div>

          {/* Remove Cover */}
          <button
            type="button"
            onClick={handleRemoveCover}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-500 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X
              className="h-3.5 w-3.5"
              strokeWidth={2}
            />

            {loading ? "Removing..." : "Remove Cover"}
          </button>
        </>
      ) : (
        /* Set as Cover */
        <button
          type="button"
          onClick={handleSetCover}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-orange-200 bg-white px-3 py-2 text-xs font-semibold text-orange-600 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Star
            className="h-3.5 w-3.5"
            strokeWidth={2}
          />

          {loading ? "Setting..." : "Set as Cover"}
        </button>
      )}
    </div>
  );
}