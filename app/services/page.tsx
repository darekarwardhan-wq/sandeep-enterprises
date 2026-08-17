const services = [
  {
    number: "01",
    title: "Structural Steel Fabrication",
    short: "Structural steel solutions built around your project requirements.",
    description:
      "We undertake structural steel fabrication for industrial, commercial and other applications. Fabrication is carried out according to project requirements, dimensions and site conditions.",
    applications: [
      "Industrial structures",
      "Structural frames",
      "Steel supports",
      "Columns and beams",
      "Custom structural components",
    ],
  },
  {
    number: "02",
    title: "Industrial Shed Fabrication",
    short: "Fabrication solutions for industrial sheds and warehouses.",
    description:
      "Complete fabrication work for industrial sheds, warehouse structures and similar steel buildings, from individual components to complete structural requirements.",
    applications: [
      "Industrial sheds",
      "Warehouse structures",
      "Roof structures",
      "Supporting frames",
      "Custom shed requirements",
    ],
  },
  {
    number: "03",
    title: "Steel Erection",
    short: "On-site erection and installation of fabricated structures.",
    description:
      "We provide on-site steel erection services for fabricated structures, with experienced manpower and practical execution based on site conditions.",
    applications: [
      "Structural erection",
      "Industrial shed erection",
      "Steel frame installation",
      "Equipment support erection",
      "On-site assembly",
    ],
  },
  {
    number: "04",
    title: "Mild Steel Fabrication",
    short: "Custom MS fabrication for industrial and commercial requirements.",
    description:
      "Mild steel fabrication work for customized requirements, including structural components, frames, supports and other fabricated products.",
    applications: [
      "MS frames",
      "MS supports",
      "Custom structures",
      "Industrial components",
      "Commercial fabrication",
    ],
  },
  {
    number: "05",
    title: "Staircases & Handrails",
    short: "Steel staircases, ladders, handrails and access structures.",
    description:
      "Fabrication and installation of steel staircases, handrails, ladders and access structures designed according to project and site requirements.",
    applications: [
      "Industrial staircases",
      "Steel ladders",
      "Handrails",
      "Safety railings",
      "Access structures",
    ],
  },
  {
    number: "06",
    title: "Platforms & Walkways",
    short: "Industrial platforms, walkways and supporting structures.",
    description:
      "Fabrication of platforms, walkways and supporting structures used in industrial environments and customized applications.",
    applications: [
      "Industrial platforms",
      "Walkways",
      "Maintenance platforms",
      "Equipment platforms",
      "Supporting structures",
    ],
  },
  {
    number: "07",
    title: "Machinery Structures",
    short: "Steel structures and supports for machinery and equipment.",
    description:
      "Customized steel structures, frames and supports designed around machinery, equipment and industrial installation requirements.",
    applications: [
      "Machine supports",
      "Equipment frames",
      "Machine platforms",
      "Structural supports",
      "Custom steel frames",
    ],
  },
  {
    number: "08",
    title: "Repair & Modification",
    short: "Repair, modification and strengthening of existing structures.",
    description:
      "We undertake structural repair, modification, alteration and strengthening work for existing steel structures according to site requirements.",
    applications: [
      "Structural repairs",
      "Steel modifications",
      "Strengthening work",
      "Alteration work",
      "Replacement components",
    ],
  },
  {
    number: "09",
    title: "Custom Fabrication",
    short: "Fabrication for requirements that need a customized solution.",
    description:
      "Every project can have different requirements. We undertake customized fabrication work based on drawings, measurements, designs and site conditions.",
    applications: [
      "Custom steel work",
      "Special structures",
      "Fabricated components",
      "Project-specific solutions",
      "Site-based requirements",
    ],
  },
  {
    number: "10",
    title: "On-Site Fabrication",
    short: "Fabrication and modification work at the project site.",
    description:
      "For projects where fabrication needs to be carried out at the site, we can undertake on-site fabrication and associated work according to project requirements.",
    applications: [
      "Site fabrication",
      "Modification work",
      "Assembly work",
      "On-site structural work",
      "Project-specific fabrication",
    ],
  },
  {
    number: "11",
    title: "Welding & Assembly",
    short: "Welding, joining and assembly for fabricated structures.",
    description:
      "Welding and assembly work as part of fabrication and structural projects, carried out according to the requirements of the particular application.",
    applications: [
      "Structural welding",
      "Component assembly",
      "Steel joining",
      "Fabricated assemblies",
      "Site assembly",
    ],
  },
  {
    number: "12",
    title: "Installation & Support",
    short: "Practical installation support from fabrication to completion.",
    description:
      "We can support projects through fabrication, transportation coordination, erection and installation requirements depending on the scope of work.",
    applications: [
      "Installation support",
      "Erection assistance",
      "Site coordination",
      "Assembly support",
      "Project completion work",
    ],
  },
];

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to discuss a fabrication or erection requirement."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="group">
            <div className="text-lg font-black tracking-[0.12em] sm:text-xl">
              SANDEEP
              <span className="text-orange-500"> ENTERPRISES</span>
            </div>

            <div className="mt-0.5 text-[8px] font-medium tracking-[0.35em] text-gray-500 sm:text-[9px]">
              FABRICATION • ERECTION
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-gray-300 lg:flex">
            <a href="/" className="transition hover:text-orange-500">
              Home
            </a>

            <a href="/#about" className="transition hover:text-orange-500">
              About
            </a>

            <a href="/services" className="text-orange-500">
              Services
            </a>

            <a href="/#projects" className="transition hover:text-orange-500">
              Projects
            </a>

            <a href="/#contact" className="transition hover:text-orange-500">
              Contact
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-4 py-2.5 text-xs font-bold text-black transition hover:bg-orange-400 sm:px-5 sm:text-sm"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-32 sm:pt-36">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
                Our Capabilities
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-8xl">
              FABRICATION.
              <br />
              <span className="text-orange-500">ERECTION.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Comprehensive fabrication and erection solutions for industrial,
              commercial and customized requirements.
            </p>

            <p className="mt-4 text-sm text-gray-600">
              25+ years of experience • Sanaswadi, Pune
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border border-white/10 bg-[#0d0d0d] p-7 transition duration-300 hover:border-orange-500/40 hover:bg-[#111]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-orange-500">
                    {service.number}
                  </span>

                  <span className="text-2xl text-gray-700 transition group-hover:text-orange-500">
                    ↗
                  </span>
                </div>

                <h2 className="mt-10 text-2xl font-bold sm:text-3xl">
                  {service.title}
                </h2>

                <p className="mt-3 text-base font-medium text-gray-300">
                  {service.short}
                </p>

                <p className="mt-5 leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                    Typical Applications
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.applications.map((application) => (
                      <span
                        key={application}
                        className="border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Have a Requirement?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                Tell us what you need. We'll discuss the work with you.
              </h2>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-black/80"
            >
              Discuss on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row">
            <div>
              <div className="font-black tracking-[0.12em]">
                SANDEEP <span className="text-orange-500">ENTERPRISES</span>
              </div>

              <p className="mt-2 text-xs text-gray-600">
                Fabrication • Erection • Structural Work
              </p>
            </div>

            <div className="text-sm text-gray-500">
              <p>9822193954</p>
              <p className="mt-1">Sanaswadi, Pune, Tal. Shirur</p>
            </div>
          </div>

          <p className="pt-6 text-xs text-gray-700">
            © {new Date().getFullYear()} SANDEEP ENTERPRISES. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact SANDEEP ENTERPRISES on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white shadow-2xl transition hover:scale-105 hover:bg-green-400"
      >
        W
      </a>
    </main>
  );
}