import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to discuss a fabrication or erection requirement."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const capabilities = [
  "Structural steel fabrication",
  "Industrial shed fabrication",
  "Steel erection",
  "Mild steel fabrication",
  "Staircases and handrails",
  "Platforms and structures",
  "Machinery structures",
  "Repair and modification",
];

const experienceCards = [
  {
    number: "25+",
    title: "Years of Experience",
    description:
      "More than two decades of practical experience in fabrication and erection work.",
  },
  {
    number: "01",
    title: "Direct Communication",
    description:
      "Customers can directly contact the business to discuss their requirements.",
  },
  {
    number: "∞",
    title: "Custom Requirements",
    description:
      "Fabrication and erection work can be discussed according to individual project requirements.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      {/* ========================================================= */}
      {/* PAGE HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-black/10 pt-32 sm:pt-36">
        {/* Orange glow */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.10),transparent_45%)]" />

        {/* Decorative lines */}
        <div className="absolute right-10 top-24 hidden h-80 w-px rotate-12 bg-orange-500/20 lg:block" />

        <div className="absolute right-32 top-40 hidden h-56 w-px -rotate-12 bg-black/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
                About Us
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              EXPERIENCE
              <br />
              <span className="text-orange-500">THAT BUILDS.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              SANDEEP ENTERPRISES is a fabrication and erection business
              serving industrial, commercial and customized requirements.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span className="border border-black/10 bg-gray-50 px-4 py-2">
                25+ Years Experience
              </span>

              <span className="border border-black/10 bg-gray-50 px-4 py-2">
                Sanaswadi, Pune
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COMPANY INTRODUCTION */}
      {/* ========================================================= */}

      <section className="border-b border-black/10 bg-[#F7F7F5]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              SANDEEP ENTERPRISES
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              More than
              <br />
              <span className="text-orange-500">25 years</span> of experience.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="text-base leading-8 text-gray-600 sm:text-lg">
            <p>
              SANDEEP ENTERPRISES is operated by{" "}
              <span className="font-semibold text-[#111111]">
                Sandip Mahadev Darekar
              </span>{" "}
              and is based in Sanaswadi, Pune, Tal. Shirur.
            </p>

            <p className="mt-6">
              With more than 25 years of experience in fabrication and
              erection work, the business undertakes a wide range of
              requirements depending on the project and site conditions.
            </p>

            <p className="mt-6">
              Our work covers fabrication, structural work, erection,
              installation, modifications and customized requirements.
            </p>

            <div className="mt-8 border-l-2 border-orange-500 bg-white py-4 pl-5 pr-5 text-[#111111] shadow-sm">
              <p className="font-semibold">
                Practical experience. Direct communication. Work focused on
                project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXPERIENCE CARDS */}
      {/* ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Our Foundation
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Built through experience.
            </h2>
          </div>

          <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">
            {experienceCards.map((card) => (
              <div
                key={card.number}
                className="bg-white p-8 transition duration-300 hover:bg-[#F7F7F5] sm:p-10"
              >
                <p className="text-5xl font-black text-orange-500">
                  {card.number}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CAPABILITIES */}
      {/* ========================================================= */}

      <section className="border-y border-black/10 bg-[#F7F7F5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              What we can
              <br />
              <span className="text-orange-500">work on.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our capabilities cover a broad range of structural fabrication,
              erection and customized steel work.
            </p>
          </div>

          {/* CAPABILITY GRID */}
          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="group bg-white p-7 transition duration-300 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs font-bold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className="text-lg text-gray-300 transition group-hover:text-orange-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-bold">
                  {capability}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BUSINESS OWNER */}
      {/* ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          {/* LEFT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Business Contact
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Let's talk
              <br />
              <span className="text-orange-500">about your work.</span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-600">
              Have a fabrication, erection or structural requirement? Get in
              touch directly with SANDEEP ENTERPRISES.
            </p>
          </div>

          {/* CONTACT CARD */}
          <div className="border border-black/10 bg-[#F7F7F5] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Business Owner
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Sandip Mahadev Darekar
            </h3>

            <div className="mt-8 space-y-5 border-t border-black/10 pt-7 text-sm text-gray-600">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Location
                </p>

                <p className="mt-1 font-medium text-[#111111]">
                  Sanaswadi, Pune, Tal. Shirur
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Phone
                </p>

                <a
                  href="tel:+919822193954"
                  className="mt-1 inline-block font-medium text-[#111111] transition hover:text-orange-500"
                >
                  9822193954
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:sandeepenterprises4851@gmail.com"
                  className="mt-1 inline-block break-all font-medium text-[#111111] transition hover:text-orange-500"
                >
                  sandeepenterprises4851@gmail.com
                </a>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-orange-400"
            >
              Discuss Your Requirement →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                SANDEEP ENTERPRISES
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                Have a fabrication or erection requirement?
              </h2>

              <p className="mt-4 max-w-xl text-black/70">
                Let's discuss your requirement and understand the work
                involved.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-black/80"
            >
              Contact on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <Footer />

      {/* ========================================================= */}
      {/* FLOATING WHATSAPP */}
      {/* ========================================================= */}

      <WhatsAppButton />
    </main>
  );
}