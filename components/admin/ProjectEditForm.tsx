"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string | null;
  year: number | null;
  description: string | null;
}

interface ProjectEditFormProps {
  project: Project;
}

export default function ProjectEditForm({
  project,
}: ProjectEditFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState(project.title);
  const [category, setCategory] = useState(project.category);
  const [location, setLocation] = useState(project.location || "");
  const [year, setYear] = useState(
    project.year ? String(project.year) : ""
  );
  const [description, setDescription] = useState(
    project.description || ""
  );

  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSaving(true);
    setSuccess("");
    setError("");

    const { error: updateError } = await supabase
      .from("projects")
      .update({
        title: title.trim(),
        category: category.trim(),
        location: location.trim() || null,
        year: year ? Number(year) : null,
        description: description.trim() || null,
      })
      .eq("id", project.id);

    if (updateError) {
      console.error("Project update error:", updateError);

      setError("Unable to update the project.");
      setSaving(false);
      return;
    }

    setSuccess("Project updated successfully.");
    setSaving(false);

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
            Project Name
          </label>

          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-3 w-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
            Work Type
          </label>

          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-3 w-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
          >
            <option value="Structural Steel Fabrication">
              Structural Steel Fabrication
            </option>

            <option value="Industrial Shed">
              Industrial Shed
            </option>

            <option value="Steel Erection">
              Steel Erection
            </option>

            <option value="MS Fabrication">
              MS Fabrication
            </option>

            <option value="Staircases & Handrails">
              Staircases & Handrails
            </option>

            <option value="Platforms & Structures">
              Platforms & Structures
            </option>

            <option value="Machinery Structures">
              Machinery Structures
            </option>

            <option value="Repair & Modification">
              Repair & Modification
            </option>

            <option value="Custom Work">
              Custom Work
            </option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
            Location
          </label>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-3 w-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
            Year
          </label>

          <input
            type="number"
            min="2000"
            max="2100"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-3 w-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
          Description
        </label>

        <textarea
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-3 w-full resize-none border border-white/10 bg-black px-4 py-3 text-sm leading-7 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-orange-400 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes →"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-white/20 hover:text-white"
        >
          Cancel
        </button>
      </div>

      {success && (
        <p className="mt-4 border border-green-500/20 bg-green-500/5 p-4 text-sm text-green-400">
          {success}
        </p>
      )}

      {error && (
        <p className="mt-4 border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}