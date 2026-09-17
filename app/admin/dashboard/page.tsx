import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import {
  Inbox,
  Bell,
  Clock3,
  CheckCircle2,
  Search,
  Phone,
  MessageCircle,
  ArrowRight,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import StatusSelect from "../../../components/admin/StatusSelect";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import EnquirySearch from "../../../components/admin/EnquirySearch";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";

interface AdminDashboardPageProps {
  searchParams: Promise<{
    status?: string;
    search?: string;
  }>;
}

export default async function AdminDashboardPage({
  searchParams,
}: AdminDashboardPageProps) {
  const supabase = await createClient();
  const params = await searchParams;

  const selectedStatus = params.status;
  const search = params.search?.trim() || "";

  // ============================================================
  // AUTHENTICATION
  // ============================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // ============================================================
  // GET ENQUIRIES
  // ============================================================

  let enquiryQuery = supabase
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  // ============================================================
  // STATUS FILTER
  // ============================================================

  if (
    selectedStatus === "new" ||
    selectedStatus === "contacted" ||
    selectedStatus === "in_progress" ||
    selectedStatus === "completed"
  ) {
    enquiryQuery = enquiryQuery.eq("status", selectedStatus);
  }

  // ============================================================
  // SEARCH
  // ============================================================

  if (search) {
    const escapedSearch = search.replace(/[%_]/g, "\\$&");

    enquiryQuery = enquiryQuery.or(
      `name.ilike.%${escapedSearch}%,phone.ilike.%${escapedSearch}%,work_type.ilike.%${escapedSearch}%,project_location.ilike.%${escapedSearch}%`
    );
  }

  const { data: enquiries, error } = await enquiryQuery;

  // ============================================================
  // STATISTICS
  // ============================================================

  const totalEnquiries = enquiries?.length ?? 0;

  const newEnquiries =
    enquiries?.filter((item) => item.status === "new").length ?? 0;

  const contactedEnquiries =
    enquiries?.filter((item) => item.status === "contacted").length ?? 0;

  const inProgressEnquiries =
    enquiries?.filter((item) => item.status === "in_progress").length ?? 0;

  const completedEnquiries =
    enquiries?.filter((item) => item.status === "completed").length ?? 0;

  // ============================================================
  // PAGE TITLE
  // ============================================================

  let pageTitle = "All Enquiries";

  if (selectedStatus === "new") {
    pageTitle = "New Enquiries";
  }

  if (selectedStatus === "contacted") {
    pageTitle = "Contacted Enquiries";
  }

  if (selectedStatus === "in_progress") {
    pageTitle = "In Progress Enquiries";
  }

  if (selectedStatus === "completed") {
    pageTitle = "Completed Enquiries";
  }

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
          MAIN AREA
      ======================================================== */}

      <div className="min-w-0 flex-1">
        {/* MOBILE NAV */}
        <AdminMobileNav />

        {/* ======================================================
            HEADER
        ====================================================== */}

        <header className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500">
                Sandeep Enterprises
              </p>

              <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Admin Dashboard
              </h1>
            </div>

            {/* ADMIN INFO */}
            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                A
              </div>

              <div className="text-right">
                <p className="text-xs font-medium text-slate-400">
                  Logged in as
                </p>

                <p className="mt-0.5 max-w-[240px] truncate text-sm font-semibold text-slate-800">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ======================================================
            MAIN CONTENT
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* ====================================================
              WELCOME / PAGE TITLE
          ==================================================== */}

          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500">
                Overview
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {pageTitle}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Manage customer requirements and enquiries submitted through
                your website.
              </p>
            </div>

            {/* TOTAL RESULTS */}
            <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm lg:self-auto">
              <Inbox className="h-4 w-4 text-orange-500" />

              <span className="text-sm font-semibold text-slate-700">
                {totalEnquiries}{" "}
                {totalEnquiries === 1 ? "Enquiry" : "Enquiries"}
              </span>
            </div>
          </div>

          {/* ====================================================
              STATISTICS
          ==================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* TOTAL */}

            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Enquiries
                  </p>

                  <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    {totalEnquiries}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    All customer enquiries
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <Users className="h-5 w-5 text-slate-600" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* NEW */}

            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    New Enquiries
                  </p>

                  <p className="mt-3 text-3xl font-black tracking-tight text-orange-500">
                    {newEnquiries}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Require your attention
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
                  <Bell
                    className="h-5 w-5 text-orange-500"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* IN PROGRESS */}

            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    In Progress
                  </p>

                  <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    {inProgressEnquiries}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Currently being handled
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                  <Clock3
                    className="h-5 w-5 text-amber-500"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* COMPLETED */}

            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Completed
                  </p>

                  <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    {completedEnquiries}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Successfully completed
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                  <CheckCircle2
                    className="h-5 w-5 text-green-600"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              QUICK SUMMARY
          ==================================================== */}

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {/* CONTACTED */}

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <MessageCircle
                    className="h-4 w-4 text-blue-600"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Contacted
                  </p>

                  <p className="mt-0.5 text-lg font-bold text-slate-900">
                    {contactedEnquiries}
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIVE */}

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50">
                  <BriefcaseBusiness
                    className="h-4 w-4 text-purple-600"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Active Enquiries
                  </p>

                  <p className="mt-0.5 text-lg font-bold text-slate-900">
                    {newEnquiries + contactedEnquiries + inProgressEnquiries}
                  </p>
                </div>
              </div>
            </div>

            {/* COMPLETION RATE */}

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                  <CheckCircle2
                    className="h-4 w-4 text-green-600"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Completion Rate
                  </p>

                  <p className="mt-0.5 text-lg font-bold text-slate-900">
                    {totalEnquiries > 0
                      ? `${Math.round(
                          (completedEnquiries / totalEnquiries) * 100
                        )}%`
                      : "0%"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              ENQUIRIES SECTION
          ==================================================== */}

          <div className="mt-10">
            <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              {/* TITLE */}

              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-950">
                  Recent Enquiries
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  View and manage customer enquiries.
                </p>

                {search && (
                  <p className="mt-2 text-sm text-slate-500">
                    Search results for:{" "}
                    <span className="font-semibold text-slate-900">
                      &quot;{search}&quot;
                    </span>
                  </p>
                )}
              </div>

              {/* SEARCH */}

              <div
                className="
                  w-full
                  lg:max-w-xl

                  [&_input]:!rounded-xl
                  [&_input]:!border-slate-200
                  [&_input]:!bg-white
                  [&_input]:!px-4
                  [&_input]:!py-3
                  [&_input]:!text-slate-900
                  [&_input]:!shadow-sm

                  [&_input]:placeholder:text-slate-400

                  [&_input]:focus:!border-orange-500
                  [&_input]:focus:!outline-none
                  [&_input]:focus:!ring-2
                  [&_input]:focus:!ring-orange-500/10
                "
              >
                <EnquirySearch />
              </div>
            </div>

            {/* ====================================================
                ERROR
            ==================================================== */}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600">
                <p className="font-bold">
                  Unable to load enquiries.
                </p>

                <p className="mt-1 text-sm">
                  {error.message}
                </p>
              </div>
            )}

            {/* ====================================================
                EMPTY STATE
            ==================================================== */}

            {!error &&
              (!enquiries || enquiries.length === 0) && (
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                    <Inbox
                      className="h-6 w-6 text-slate-400"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    No enquiries found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    There are no enquiries matching your current filters or
                    search.
                  </p>
                </div>
              )}

            {/* ====================================================
                TABLE
            ==================================================== */}

            {enquiries && enquiries.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    <Inbox className="h-4 w-4 text-orange-500" />

                    <p className="text-sm font-bold text-slate-900">
                      Enquiry List
                    </p>
                  </div>

                  <p className="text-xs font-medium text-slate-400">
                    {enquiries.length}{" "}
                    {enquiries.length === 1 ? "record" : "records"}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[980px] text-left">
                    <thead className="border-b border-slate-100 bg-slate-50/70">
                      <tr>
                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Customer
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Phone
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Work Type
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Location
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Status
                        </th>

                        <th className="px-5 py-4 text-right text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {enquiries.map((enquiry) => (
                        <tr
                          key={enquiry.id}
                          className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/70"
                        >
                          {/* CUSTOMER */}

                          <td className="px-5 py-5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                                {enquiry.name
                                  ?.charAt(0)
                                  ?.toUpperCase() || "?"}
                              </div>

                              <div className="min-w-0">
                                <p className="truncate text-sm font-bold text-slate-900">
                                  {enquiry.name}
                                </p>

                                <p className="mt-0.5 text-[11px] text-slate-400">
                                  Enquiry #{enquiry.id}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* PHONE */}

                          <td className="px-5 py-5">
                            <p className="text-sm text-slate-600">
                              {enquiry.phone}
                            </p>
                          </td>

                          {/* WORK TYPE */}

                          <td className="px-5 py-5">
                            <p className="max-w-[190px] truncate text-sm font-medium text-slate-700">
                              {enquiry.work_type}
                            </p>
                          </td>

                          {/* LOCATION */}

                          <td className="px-5 py-5">
                            <p className="max-w-[170px] truncate text-sm text-slate-600">
                              {enquiry.project_location || "—"}
                            </p>
                          </td>

                          {/* STATUS */}

                          <td className="px-5 py-5">
                            <StatusSelect
                              enquiryId={enquiry.id}
                              initialStatus={enquiry.status}
                            />
                          </td>

                          {/* ACTIONS */}

                          <td className="px-5 py-5">
                            <div className="flex items-center justify-end gap-2">
                              {/* VIEW */}

                              <a
                                href={`/admin/enquiries/${enquiry.id}`}
                                className="group flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition-colors hover:border-orange-300 hover:text-orange-600"
                              >
                                View

                                <ArrowRight
                                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                  strokeWidth={2}
                                />
                              </a>

                              {/* CALL */}

                              <a
                                href={`tel:+91${enquiry.phone.replace(
                                  /\D/g,
                                  ""
                                )}`}
                                title="Call customer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-200 bg-orange-50 text-orange-600 transition-colors hover:bg-orange-500 hover:text-black"
                              >
                                <Phone
                                  className="h-4 w-4"
                                  strokeWidth={2}
                                />
                              </a>

                              {/* WHATSAPP */}

                              <a
                                href={`https://wa.me/91${enquiry.phone.replace(
                                  /\D/g,
                                  ""
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp customer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-green-200 bg-green-50 text-green-600 transition-colors hover:bg-green-500 hover:text-white"
                              >
                                <MessageCircle
                                  className="h-4 w-4"
                                  strokeWidth={2}
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ====================================================
              FOOTER NOTE
          ==================================================== */}

          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
            <Search className="h-3.5 w-3.5" />

            <span>
              Use the search bar or sidebar filters to quickly find an
              enquiry.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}