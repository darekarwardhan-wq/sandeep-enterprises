"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EnquirySearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch =
    searchParams.get("search") || "";

  const [search, setSearch] =
    useState(currentSearch);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (search.trim()) {
      params.set(
        "search",
        search.trim()
      );
    } else {
      params.delete("search");
    }

    params.delete("page");

    const query = params.toString();

    router.push(
      query
        ? `/admin/dashboard?${query}`
        : "/admin/dashboard"
    );
  }

  function handleClear() {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.delete("search");
    params.delete("page");

    const query = params.toString();

    setSearch("");

    router.push(
      query
        ? `/admin/dashboard?${query}`
        : "/admin/dashboard"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2.5 sm:flex-row"
    >
      {/* ======================================================
          SEARCH INPUT
      ====================================================== */}

      <div className="min-w-0 flex-1">
        <input
          type="text"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search name, phone, work type or location..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
        />
      </div>

      {/* ======================================================
          SEARCH BUTTON
      ====================================================== */}

      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-bold text-black shadow-sm transition hover:bg-orange-400 active:scale-[0.98]"
      >
        <Search
          className="h-4 w-4"
          strokeWidth={2.5}
        />

        Search
      </button>

      {/* ======================================================
          CLEAR BUTTON
      ====================================================== */}

      {currentSearch && (
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-500 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 active:scale-[0.98]"
        >
          <X
            className="h-4 w-4"
            strokeWidth={2}
          />

          Clear
        </button>
      )}
    </form>
  );
}