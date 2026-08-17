"use client";

import { FormEvent, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const whatsappNumber = "919822193954";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const work = formData.get("work")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const whatsappMessage = encodeURIComponent(
      `Hello SANDEEP ENTERPRISES,

I would like to discuss a fabrication/erection requirement.

Name: ${name}
Phone: ${phone}
Type of Work: ${work}
Project Location: ${location}

Requirement:
${message}`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    setSubmitted(true);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-32 sm:pt-36">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.14),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
                Contact Us
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-8xl">
              LET'S BUILD
              <br />
              <span className="text-orange-500">TOGETHER.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Have a fabrication, erection or customized steel work
              requirement? Tell us about your project.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {/* PHONE */}
            <a
              href="tel:+919822193954"
              className="group bg-[#0d0d0d] p-7 transition hover:bg-[#111]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                01
              </p>

              <h2 className="mt-8 text-xl font-bold">Call Us</h2>

              <p className="mt-3 text-sm text-gray-500">
                9822193954
              </p>

              <p className="mt-7 text-sm font-semibold text-white group-hover:text-orange-500">
                Call Now →
              </p>
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0d0d0d] p-7 transition hover:bg-[#111]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                02
              </p>

              <h2 className="mt-8 text-xl font-bold">WhatsApp</h2>

              <p className="mt-3 text-sm text-gray-500">
                Quick project discussion
              </p>

              <p className="mt-7 text-sm font-semibold text-white group-hover:text-orange-500">
                Message Us →
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:sandeepenterprises4851@gmail.com"
              className="group bg-[#0d0d0d] p-7 transition hover:bg-[#111]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                03
              </p>

              <h2 className="mt-8 text-xl font-bold">Email</h2>

              <p className="mt-3 break-all text-sm text-gray-500">
                sandeepenterprises4851@gmail.com
              </p>

              <p className="mt-7 text-sm font-semibold text-white group-hover:text-orange-500">
                Send Email →
              </p>
            </a>

            {/* LOCATION */}
            <div className="bg-[#0d0d0d] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                04
              </p>

              <h2 className="mt-8 text-xl font-bold">Location</h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Sanaswadi, Pune
                <br />
                Tal. Shirur, Maharashtra
              </p>

              <p className="mt-7 text-sm font-semibold text-white">
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          {/* LEFT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Request a Quote
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Tell us
              <br />
              what you need.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
              Give us some basic information about your project. After
              submitting the form, your enquiry will open directly in
              WhatsApp so you can continue the discussion.
            </p>

            <div className="mt-10 border-l-2 border-orange-500 pl-5">
              <p className="text-sm font-semibold text-white">
                25+ years of practical experience
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Fabrication • Erection • Structural Steel • Custom Work
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-[#080808] p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="mt-3 w-full border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  className="mt-3 w-full border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="work"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Type of Work
                </label>

                <select
                  id="work"
                  name="work"
                  required
                  defaultValue=""
                  className="mt-3 w-full border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500"
                >
                  <option value="" disabled>
                    Select work type
                  </option>

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

                  <option value="Staircase / Handrails">
                    Staircase / Handrails
                  </option>

                  <option value="Platforms / Structures">
                    Platforms / Structures
                  </option>

                  <option value="Machinery Structure">
                    Machinery Structure
                  </option>

                  <option value="Repair / Modification">
                    Repair / Modification
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Project Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City / Site location"
                  className="mt-3 w-full border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
              >
                Requirement Details
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project, approximate requirement, site work, etc."
                className="mt-3 w-full resize-none border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-700 focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-black transition hover:bg-orange-400"
            >
              Send Requirement on WhatsApp →
            </button>

            {submitted && (
              <p className="mt-4 border border-orange-500/20 bg-orange-500/5 p-4 text-center text-sm text-orange-400">
                Your WhatsApp message has been prepared. Continue the
                conversation there.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* MAP */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Find Us
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Based in Sanaswadi, Pune.
            </h2>
          </div>

          <div className="overflow-hidden border border-white/10">
            <iframe
              title="SANDEEP ENTERPRISES Location"
              src="https://www.google.com/maps?q=Sanaswadi%2C%20Pune%2C%20Maharashtra&output=embed"
              className="h-[400px] w-full border-0 grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                SANDEEP ENTERPRISES
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                Ready to discuss your requirement?
              </h2>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-black/80"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}