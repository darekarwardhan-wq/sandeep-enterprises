import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

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
    <main className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      {/* ========================================================= */}
      {/* PAGE HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-black/10 pt-32 sm:pt-36">
        {/* Orange background glow */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.10),transparent_42%)]" />

        {/* Decorative industrial lines */}
        <div className="absolute right-20 top-28 hidden h-80 w-px rotate-12 bg-orange-500/20 lg:block" />

        <div className="absolute right-40 top-40 hidden h-64 w-px -rotate-12 bg-black/10 lg:block" />

        <div className="absolute right-10 top-72 hidden h-1 w-72 rotate-12 bg-orange-500/20 lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
                Our Capabilities
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              FABRICATION.
              <br />
              <span className="text-orange-500">ERECTION.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Comprehensive fabrication and erection solutions for industrial,
              commercial and customized requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="border border-black/10 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                25+ Years Experience
              </span>

              <span className="border border-black/10 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Sanaswadi, Pune
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES INTRO */}
      {/* ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Services built around your requirement.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              From structural fabrication to on-site erection and
              modifications, our services cover a broad range of steel work.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES LIST */}
      {/* ========================================================= */}

      <section className="bg-[#F7F7F5]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-lg sm:p-8"
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-black text-orange-500">
                    {service.number}
                  </span>

                  <span className="text-2xl text-gray-300 transition duration-300 group-hover:text-orange-500">
                    ↗
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="mt-10 text-2xl font-black leading-tight sm:text-3xl">
                  {service.title}
                </h2>

                {/* SHORT DESCRIPTION */}
                <p className="mt-4 text-base font-semibold leading-7 text-gray-800">
                  {service.short}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* APPLICATIONS */}
                <div className="mt-7 border-t border-black/10 pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Typical Applications
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.applications.map((application) => (
                      <span
                        key={application}
                        className="border border-black/10 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition group-hover:border-orange-500/20 group-hover:bg-orange-50"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ENQUIRY */}
                <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="text-xs text-gray-400">
                    Discuss this service
                  </span>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-orange-500 transition hover:text-orange-600"
                  >
                    Enquire →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROCESS */}
      {/* ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                How We Work
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                From requirement
                <br />
                <span className="text-orange-500">to execution.</span>
              </h2>

              <p className="mt-5 max-w-md leading-7 text-gray-600">
                Every project can have different requirements. We discuss the
                work, understand the site and then plan the fabrication or
                erection scope accordingly.
              </p>
            </div>

            <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Discuss the project, requirements, dimensions and site conditions.",
                },
                {
                  number: "02",
                  title: "Plan",
                  text: "Determine the appropriate fabrication, assembly and erection requirements.",
                },
                {
                  number: "03",
                  title: "Fabricate",
                  text: "Carry out the required structural or customized fabrication work.",
                },
                {
                  number: "04",
                  title: "Execute",
                  text: "Complete erection, installation or site work according to the project scope.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="bg-[#F7F7F5] p-7 transition hover:bg-white sm:p-8"
                >
                  <p className="text-sm font-black text-orange-500">
                    {step.number}
                  </p>

                  <h3 className="mt-8 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Have a Requirement?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                Tell us what you need. We'll discuss the work with you.
              </h2>

              <p className="mt-4 max-w-xl text-black/70">
                Contact SANDEEP ENTERPRISES directly for fabrication,
                erection, structural and customized work requirements.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-black/80"
              >
                Discuss on WhatsApp →
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