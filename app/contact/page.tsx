"use client";

import { FormEvent, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const whatsappNumber = "919822193954";

const services = [
  "Structural Steel Fabrication",
  "Industrial Shed Fabrication",
  "Steel Erection",
  "Mild Steel Fabrication",
  "Staircases & Handrails",
  "Platforms & Walkways",
  "Machinery Structures",
  "Repair & Modification",
  "Custom Fabrication",
  "On-Site Fabrication",
  "Welding & Assembly",
  "Installation & Support",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `Hello SANDEEP ENTERPRISES,

I would like to enquire about your fabrication/erection services.

Name: ${name}
Phone: ${phone}
Service: ${service || "General Enquiry"}

Requirement:
${message}`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="border-b border-black/10 bg-gray-50 pt-32">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-orange-500">
              CONTACT US
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              LET&apos;S
              <span className="text-orange-500"> TALK.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Have a fabrication, structural steel or erection requirement?
              Tell us what you need and our team will get in touch with you.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT CONTENT */}
      {/* ========================================================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            
            {/* ===================================================== */}
            {/* LEFT SIDE */}
            {/* ===================================================== */}

            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-orange-500">
                GET IN TOUCH
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Let&apos;s discuss your project.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-gray-600">
                Whether you need structural fabrication, industrial shed work,
                steel erection or a custom fabrication solution, you can
                contact us directly.
              </p>

              <div className="mt-10 space-y-4">

                {/* ================================================= */}
                {/* PHONE */}
                {/* ================================================= */}

                <a
                  href="tel:+919822193954"
                  className="group block rounded-2xl border border-black/10 bg-gray-50 p-5 transition hover:border-orange-500/40 hover:bg-orange-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg">
                      ☎
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] text-gray-500">
                        CALL US
                      </p>

                      <p className="mt-1 text-lg font-bold text-[#111111] group-hover:text-orange-500">
                        9822193954
                      </p>
                    </div>
                  </div>
                </a>

                {/* ================================================= */}
                {/* WHATSAPP */}
                {/* ================================================= */}

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-black/10 bg-gray-50 p-5 transition hover:border-orange-500/40 hover:bg-orange-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg">
                      💬
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] text-gray-500">
                        WHATSAPP
                      </p>

                      <p className="mt-1 text-lg font-bold text-[#111111] group-hover:text-orange-500">
                        Chat with us
                      </p>
                    </div>
                  </div>
                </a>

                {/* ================================================= */}
                {/* EMAIL */}
                {/* ================================================= */}

                <a
                  href="mailto:sandeepenterprises4851@gmail.com"
                  className="group block rounded-2xl border border-black/10 bg-gray-50 p-5 transition hover:border-orange-500/40 hover:bg-orange-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg">
                      ✉
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold tracking-[0.15em] text-gray-500">
                        EMAIL
                      </p>

                      <p className="mt-1 break-all text-base font-bold text-[#111111] group-hover:text-orange-500">
                        sandeepenterprises4851@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* ================================================= */}
                {/* LOCATION + GOOGLE MAP */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-2xl border border-black/10 bg-gray-50">

                  {/* LOCATION DETAILS */}

                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg">
                        📍
                      </div>

                      <div>
                        <p className="text-xs font-bold tracking-[0.15em] text-gray-500">
                          LOCATION
                        </p>

                        <p className="mt-1 text-base font-bold leading-7 text-[#111111]">
                          Sanaswadi, Pune
                          <br />
                          Tal. Shirur, Maharashtra
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* GOOGLE MAP */}

                  <div className="h-[280px] w-full border-t border-black/10 bg-gray-200">
                    <iframe
                      title="Sandeep Enterprises Location"
                      src="https://www.google.com/maps?q=Sanaswadi,+Pune,+Maharashtra&output=embed"
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* VIEW ON GOOGLE MAPS */}

                  <div className="border-t border-black/10 bg-white p-4">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Sanaswadi,+Pune,+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm font-bold text-[#111111] transition hover:text-orange-500"
                    >
                      <span>View on Google Maps</span>

                      <span className="text-lg">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* RIGHT SIDE - ENQUIRY FORM */}
            {/* ===================================================== */}

            <div className="rounded-3xl border border-black/10 bg-gray-50 p-6 sm:p-8 lg:p-10">
              
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-orange-500">
                  SEND AN ENQUIRY
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Tell us about your requirement.
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Fill in the details below. Your enquiry will open directly
                  in WhatsApp.
                </p>
              </div>

              {/* ================================================= */}
              {/* FORM */}
              {/* ================================================= */}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                {/* SERVICE */}

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  >
                    <option value="">Select a service</option>

                    {services.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Requirement
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project or requirement..."
                    className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-black text-black transition hover:bg-orange-400"
                >
                  Send Enquiry on WhatsApp →
                </button>

                <p className="text-center text-xs text-gray-500">
                  You will be redirected to WhatsApp to send your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="bg-[#111111] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          
          <p className="text-sm font-bold tracking-[0.25em] text-orange-500">
            SANDEEP ENTERPRISES
          </p>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            READY TO BUILD?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Contact us to discuss your fabrication and erection requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-black text-black transition hover:bg-orange-400"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+919822193954"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              Call 9822193954
            </a>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <Footer />

      {/* FLOATING WHATSAPP */}

      <WhatsAppButton />
    </main>
  );
}