import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to enquire about fabrication and erection work."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const services = [
  {
    number: "01",
    title: "Structural Steel Fabrication",
    description:
      "Fabrication of structural steel components for industrial, commercial and infrastructure requirements.",
  },
  {
    number: "02",
    title: "Industrial Shed Fabrication",
    description:
      "Complete fabrication solutions for industrial sheds, warehouses and large structural applications.",
  },
  {
    number: "03",
    title: "Steel Erection",
    description:
      "On-site erection and installation of fabricated steel structures with experienced manpower.",
  },
  {
    number: "04",
    title: "MS Fabrication",
    description:
      "Mild steel fabrication for custom industrial, commercial and structural requirements.",
  },
  {
    number: "05",
    title: "Staircases & Handrails",
    description:
      "Fabrication and installation of steel staircases, handrails, ladders and access structures.",
  },
  {
    number: "06",
    title: "Platforms & Structures",
    description:
      "Industrial platforms, walkways, supporting structures and customized steel solutions.",
  },
  {
    number: "07",
    title: "Machinery Structures",
    description:
      "Custom steel frames, supports and structures designed around machinery and equipment requirements.",
  },
  {
    number: "08",
    title: "Repair & Modification",
    description:
      "Structural repair, modification, strengthening and alteration work for existing installations.",
  },
];

const stats = [
  {
    value: "25+",
    label: "Years of Experience",
  },
  {
    value: "100%",
    label: "Project Commitment",
  },
  {
    value: "Pune",
    label: "Based in Maharashtra",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.13),transparent_32%)]" />

        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <div className="absolute right-20 top-40 h-80 w-20 rotate-12 border-l-4 border-orange-500" />

          <div className="absolute right-40 top-32 h-96 w-10 -rotate-12 border-l-2 border-white" />

          <div className="absolute right-10 top-72 h-5 w-96 rotate-12 bg-orange-500/30" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-36">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500 sm:w-14" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Fabrication & Erection
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              BUILT
              <br />
              <span className="text-orange-500">STRONG.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Reliable fabrication and erection solutions backed by more than
              25 years of hands-on industry experience.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              From structural steel and industrial sheds to customized
              fabrication and on-site erection work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/services"
                className="rounded-full bg-orange-500 px-7 py-3.5 text-center text-sm font-bold text-black transition hover:bg-orange-400"
              >
                Explore Our Services
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-bold transition hover:border-orange-500 hover:text-orange-500"
              >
                Request a Quote →
              </a>
            </div>

            {/* STATS */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-black sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 max-w-24 text-[10px] leading-4 text-gray-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative hidden min-h-[550px] lg:block">
            <div className="absolute right-0 top-1/2 h-[520px] w-[410px] -translate-y-1/2 border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-transparent to-white/[0.03]">
              <div className="absolute inset-8 border border-white/10" />

              <div className="absolute left-1/2 top-1/2 h-80 w-10 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-orange-500/60" />

              <div className="absolute left-16 right-16 top-1/2 h-7 -translate-y-1/2 rotate-12 bg-orange-500/30" />

              <div className="absolute bottom-10 left-10">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-600">
                  Steel
                </p>

                <p className="mt-1 text-lg font-bold text-gray-400">
                  STRUCTURE
                </p>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 border border-white/10 bg-[#111]/90 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Established Experience
              </p>

              <p className="mt-2 text-3xl font-black text-orange-500">
                25+ Years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#0d0d0d]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              About Sandeep Enterprises
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Experience that
              <br />
              <span className="text-orange-500">speaks through work.</span>
            </h2>
          </div>

          <div className="text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              SANDEEP ENTERPRISES is a fabrication and erection business based
              in Sanaswadi, Pune, operated by{" "}
              <span className="font-semibold text-white">
                Sandip Mahadev Darekar
              </span>
              .
            </p>

            <p className="mt-5">
              With more than 25 years of experience, the business undertakes a
              wide range of fabrication and erection requirements for
              industrial, commercial and other projects.
            </p>

            <p className="mt-5">
              Our focus is on practical execution, quality workmanship,
              dependable service and completing work according to project and
              site requirements.
            </p>

            <div className="mt-8 border-l-2 border-orange-500 pl-5 text-white">
              25+ years of experience in the fabrication and erection field.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              What We Do
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              A broad range of fabrication and erection services for
              industrial and commercial requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group min-h-72 bg-[#080808] p-7 transition duration-300 hover:bg-[#111]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-orange-500">
                    {service.number}
                  </span>

                  <span className="text-xl text-gray-700 transition group-hover:text-orange-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-bold leading-7">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need something different?
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-semibold text-orange-500 hover:text-orange-400"
              >
                Discuss your requirement with us →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Built on
                <br />
                <span className="text-orange-500">experience.</span>
              </h2>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                [
                  "25+",
                  "Years of practical experience in fabrication and erection.",
                ],
                [
                  "01",
                  "Direct communication with the business owner.",
                ],
                [
                  "02",
                  "Flexible solutions based on project requirements.",
                ],
                [
                  "03",
                  "Fabrication and erection capabilities under one business.",
                ],
              ].map(([number, text]) => (
                <div key={number} className="bg-[#0d0d0d] p-7">
                  <p className="text-2xl font-black text-orange-500">
                    {number}
                  </p>

                  <p className="mt-4 leading-7 text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Portfolio
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Our Work
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Project photographs will be added here as we build the company
              portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#101010]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.08),transparent_50%)] transition group-hover:scale-105" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                    Project {String(item).padStart(2, "0")}
                  </p>

                  <p className="mt-2 font-bold text-gray-300">
                    Project photographs coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Have a Project?
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Let's discuss your fabrication requirement.
              </h2>

              <p className="mt-5 max-w-xl text-black/70">
                Contact SANDEEP ENTERPRISES directly for fabrication, erection,
                structural and customized work requirements.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-black/80"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+919822193954"
                className="rounded-full border border-black/25 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-black/10"
              >
                Call 9822193954
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}