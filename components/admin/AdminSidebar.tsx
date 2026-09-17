"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  CircleDot,
  MessageCircle,
  Clock,
  CheckCircle2,
  FolderKanban,
  Globe,
  Images,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import LogoutButton from "./LogoutButton";

const enquiryLinks = [
  {
    name: "All Enquiries",
    href: "/admin/dashboard",
    status: undefined,
    icon: Inbox,
  },
  {
    name: "New",
    href: "/admin/dashboard?status=new",
    status: "new",
    icon: CircleDot,
  },
  {
    name: "Contacted",
    href: "/admin/dashboard?status=contacted",
    status: "contacted",
    icon: MessageCircle,
  },
  {
    name: "In Progress",
    href: "/admin/dashboard?status=in_progress",
    status: "in_progress",
    icon: Clock,
  },
  {
    name: "Completed",
    href: "/admin/dashboard?status=completed",
    status: "completed",
    icon: CheckCircle2,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentStatus = searchParams.get("status");

  function isEnquiryActive(status?: string) {
    if (pathname !== "/admin/dashboard") {
      return false;
    }

    if (!status) {
      return !currentStatus;
    }

    return currentStatus === status;
  }

  const projectsActive = pathname.startsWith("/admin/projects");
  const galleryActive = pathname.startsWith("/admin/gallery");

  return (
    <aside className="sticky top-0 hidden h-screen w-[276px] shrink-0 border-r border-slate-200/80 bg-white lg:flex lg:flex-col">
      {/* ===================================================== */}
      {/* BRAND */}
      {/* ===================================================== */}

      <div className="border-b border-slate-200/80 px-6 py-6">
        <Link href="/admin/dashboard" className="group block">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-black tracking-tight text-white shadow-sm">
              SE
            </div>

            <div className="min-w-0 leading-tight">
              <div className="truncate text-[13.5px] font-bold tracking-tight text-slate-900">
                Sandeep Enterprises
              </div>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Admin Panel
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ===================================================== */}
      {/* NAVIGATION */}
      {/* ===================================================== */}

      <nav className="flex-1 overflow-y-auto px-3.5 py-6">
        {/* ------------------------------------------------- */}
        {/* MAIN */}
        {/* ------------------------------------------------- */}

        <div>
          <p className="px-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Main
          </p>

          <div className="mt-2.5">
            <Link
              href="/admin/dashboard"
              className={`group flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-sm font-semibold transition-colors ${
                isEnquiryActive()
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard
                className={`h-[18px] w-[18px] shrink-0 ${
                  isEnquiryActive()
                    ? "text-white"
                    : "text-slate-400 group-hover:text-slate-600"
                }`}
                strokeWidth={2}
              />

              <span>Dashboard</span>
            </Link>
          </div>
        </div>

        {/* ------------------------------------------------- */}
        {/* ENQUIRIES */}
        {/* ------------------------------------------------- */}

        <div className="mt-7">
          <p className="px-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Enquiries
          </p>

          <div className="mt-2.5 space-y-0.5">
            {enquiryLinks.map((link) => {
              const active = isEnquiryActive(link.status);
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-orange-50 text-orange-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-orange-500" />
                  )}

                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      active
                        ? "text-orange-500"
                        : "text-slate-400 group-hover:text-slate-500"
                    }`}
                    strokeWidth={2}
                  />

                  <span className="truncate">{link.name}</span>

                  {link.name === "All Enquiries" && (
                    <span className="ml-auto rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                      All
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------- */}
        {/* BUSINESS */}
        {/* ------------------------------------------------- */}

        <div className="mt-7">
          <p className="px-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Business
          </p>

          <div className="mt-2.5 space-y-0.5">
            {/* Manage Projects */}
            <Link
              href="/admin/projects"
              className={`group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                projectsActive
                  ? "bg-orange-50 text-orange-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <FolderKanban
                className={`h-4 w-4 shrink-0 ${
                  projectsActive
                    ? "text-orange-500"
                    : "text-slate-400 group-hover:text-slate-500"
                }`}
                strokeWidth={2}
              />

              <span>Manage Projects</span>
            </Link>

            {/* Manage Gallery */}
            <Link
              href="/admin/gallery"
              className={`group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                galleryActive
                  ? "bg-orange-50 text-orange-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Images
                className={`h-4 w-4 shrink-0 ${
                  galleryActive
                    ? "text-orange-500"
                    : "text-slate-400 group-hover:text-slate-500"
                }`}
                strokeWidth={2}
              />

              <span>Manage Gallery</span>
            </Link>

            {/* View Public Projects */}
            <Link
              href="/projects"
              target="_blank"
              className="group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <Globe
                className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-slate-500"
                strokeWidth={2}
              />

              <span className="truncate">View Public Projects</span>

              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-orange-500" />
            </Link>

            {/* View Gallery */}
            <Link
              href="/gallery"
              target="_blank"
              className="group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <Images
                className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-slate-500"
                strokeWidth={2}
              />

              <span className="truncate">View Gallery</span>

              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-orange-500" />
            </Link>
          </div>
        </div>

        {/* ------------------------------------------------- */}
        {/* WEBSITE */}
        {/* ------------------------------------------------- */}

        <div className="mt-7">
          <p className="px-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Website
          </p>

          <div className="mt-2.5">
            <Link
              href="/"
              target="_blank"
              className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 transition-colors hover:border-orange-200 hover:bg-orange-50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm ring-1 ring-slate-200/70 transition-colors group-hover:text-orange-500">
                <ExternalLink className="h-4 w-4" strokeWidth={2} />
              </span>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-700 group-hover:text-orange-700">
                  Visit Website
                </p>

                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                  Open public website
                </p>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* ===================================================== */}
      {/* ADMIN PROFILE / LOGOUT */}
      {/* ===================================================== */}

      <div className="border-t border-slate-200/80 p-3.5">
        <div className="mb-2 flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            A
          </div>

          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-slate-900">
              Administrator
            </p>

            <p className="mt-0.5 truncate text-[11px] text-slate-400">
              Sandeep Enterprises
            </p>
          </div>
        </div>

        <div className="rounded-lg transition-colors hover:bg-slate-50">
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}