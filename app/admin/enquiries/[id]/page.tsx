import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";

import { createClient } from "../../../../lib/supabase/server";
import StatusSelect from "../../../../components/admin/StatusSelect";
import AdminSidebar from "../../../../components/admin/AdminSidebar";
import AdminMobileNav from "../../../../components/admin/AdminMobileNav";

interface EnquiryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EnquiryDetailsPage({
  params,
}: EnquiryPageProps) {
  const { id } = await params;

  const enquiryId = Number(id);

  if (!Number.isInteger(enquiryId)) {
    notFound();
  }

  const supabase = await createClient();

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
  // GET ENQUIRY
  // ============================================================

  const { data: enquiry, error } = await supabase
    .from("enquiries")
    .select("*")
    .eq("id", enquiryId)
    .single();

  if (error || !enquiry) {
    notFound();
  }

  // ============================================================
  // PHONE / WHATSAPP
  // ============================================================

  const cleanPhone = enquiry.phone.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hello ${enquiry.name},

This is SANDEEP ENTERPRISES regarding your fabrication/erection enquiry.

Work Type: ${enquiry.work_type}
Project Location: ${enquiry.project_location || "Not provided"}

Your Requirement:
${enquiry.message}

Please let us know a convenient time to discuss the project.`
  );

  const whatsappLink = `https://wa.me/91${cleanPhone}?text=${whatsappMessage}`;

  // ============================================================
  // DATE
  // ============================================================

  const createdDate = new Date(enquiry.created_at);

  const formattedDate = createdDate.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
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
          MAIN AREA
      ======================================================== */}

      <div className="min-w-0 flex-1">
        {/* MOBILE NAV */}

        <AdminMobileNav />

        {/* ======================================================
            HEADER
        ====================================================== */}

        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500">
                Sandeep Enterprises
              </p>

              <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Enquiry Details
              </h1>
            </div>

            {/* BACK BUTTON */}

            <Link
              href="/admin/dashboard"
              className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-orange-300 hover:text-orange-600 sm:flex"
            >
              <ArrowLeft
                className="h-4 w-4"
                strokeWidth={2}
              />

              Back to Enquiries
            </Link>
          </div>
        </header>

        {/* ======================================================
            CONTENT
        ====================================================== */}

        <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* ====================================================
              PAGE INTRO
          ==================================================== */}

          <div className="mb-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              {/* CUSTOMER TITLE */}

              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />

                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500">
                    Customer Enquiry
                  </p>
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  {enquiry.name}
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ClipboardList className="h-4 w-4" />

                    Enquiry #{enquiry.id}
                  </span>

                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4" />

                    {formattedDate}
                  </span>
                </div>
              </div>

              {/* STATUS */}

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:w-auto sm:min-w-[190px]">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Enquiry Status
                  </p>
                </div>

                <StatusSelect
                  enquiryId={enquiry.id}
                  initialStatus={enquiry.status}
                />
              </div>
            </div>
          </div>

          {/* ====================================================
              CUSTOMER INFORMATION
          ==================================================== */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* SECTION HEADER */}

            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <UserRound
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                    Customer Information
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Contact and project information submitted through the
                    website.
                  </p>
                </div>
              </div>
            </div>

            {/* INFORMATION GRID */}

            <div className="grid md:grid-cols-2">
              {/* CUSTOMER */}

              <div className="border-b border-slate-100 p-6 md:border-r sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                    <UserRound
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Customer
                    </p>

                    <p className="mt-2 text-lg font-bold text-slate-900">
                      {enquiry.name || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

              {/* PHONE */}

              <div className="border-b border-slate-100 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Phone
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Phone
                    </p>

                    <a
                      href={`tel:+91${cleanPhone}`}
                      className="mt-2 block text-lg font-bold text-slate-900 transition hover:text-orange-500"
                    >
                      {enquiry.phone || "Not provided"}
                    </a>

                    <p className="mt-1 text-xs text-slate-400">
                      Click to call customer
                    </p>
                  </div>
                </div>
              </div>

              {/* WORK TYPE */}

              <div className="border-b border-slate-100 p-6 md:border-r sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FileText
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Work Type
                    </p>

                    <p className="mt-2 text-lg font-bold text-slate-900">
                      {enquiry.work_type || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

              {/* LOCATION */}

              <div className="border-b border-slate-100 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <MapPin
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Project Location
                    </p>

                    <p className="mt-2 text-lg font-bold text-slate-900">
                      {enquiry.project_location || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              REQUIREMENT DETAILS
          ==================================================== */}

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* HEADER */}

            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <ClipboardList
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                    Requirement Details
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Customer's project requirement.
                  </p>
                </div>
              </div>
            </div>

            {/* MESSAGE */}

            <div className="px-6 py-7 sm:px-8 sm:py-9">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 sm:p-6">
                <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                  {enquiry.message ||
                    "No requirement details provided."}
                </p>
              </div>
            </div>
          </div>

          {/* ====================================================
              SUBMITTED DETAILS
          ==================================================== */}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2">
              {/* SUBMITTED */}

              <div className="border-b border-slate-100 p-6 sm:border-b-0 sm:border-r sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                    <CalendarDays
                      className="h-5 w-5"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Submitted
                    </p>

                    <p className="mt-2 text-base font-bold text-slate-900">
                      {formattedDate}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Enquiry received through website
                    </p>
                  </div>
                </div>
              </div>

              {/* ENQUIRY ID */}

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <ClipboardList
                      className="h-5 w-5"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Enquiry ID
                    </p>

                    <p className="mt-2 text-base font-bold text-slate-900">
                      #{enquiry.id}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Internal reference number
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              ACTIONS
          ==================================================== */}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* CALL CUSTOMER */}

            <a
              href={`tel:+91${cleanPhone}`}
              className="group flex min-h-[60px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 text-sm font-bold text-black shadow-sm transition-all hover:bg-orange-400 hover:shadow-md active:scale-[0.99]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/10">
                <Phone
                  className="h-4 w-4"
                  strokeWidth={2.5}
                />
              </span>

              Call Customer

              <ArrowUpRight
                className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>

            {/* WHATSAPP */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[60px] items-center justify-center gap-3 rounded-xl bg-green-500 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-green-600 hover:shadow-md active:scale-[0.99]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <MessageCircle
                  className="h-4 w-4"
                  strokeWidth={2.5}
                />
              </span>

              WhatsApp Customer

              <ArrowUpRight
                className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>

          {/* ====================================================
              MOBILE BACK BUTTON
          ==================================================== */}

          <div className="mt-6 sm:hidden">
            <Link
              href="/admin/dashboard"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-orange-300 hover:text-orange-600"
            >
              <ArrowLeft
                className="h-4 w-4"
                strokeWidth={2}
              />

              Back to Enquiries
            </Link>
          </div>

          {/* ====================================================
              BOTTOM NOTE
          ==================================================== */}

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="h-3.5 w-3.5" />

            <span>
              Manage the enquiry status from the status control above.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}