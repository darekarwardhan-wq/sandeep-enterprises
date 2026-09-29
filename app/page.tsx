import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to enquire about industrial maintenance, fabrication, erection or manpower services."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const services = [
  {
    number: "01",
    title: "Structural Steel Fabrication",
    image: "/images/service-01.png",
    description:
      "Structural steel fabrication for industrial, commercial and infrastructure requirements.",
  },
  {
    number: "02",
    title: "Industrial Shed & Roofing",
    image: "/images/service-02.png",
    description:
      "Industrial shed fabrication, roofing and structural solutions for industrial facilities.",
  },
  {
    number: "03",
    title: "Steel Erection",
    image: "/images/service-03.jpeg",
    description:
      "On-site erection and installation of fabricated steel structures with experienced manpower.",
  },
  {
    number: "04",
    title: "Plant Maintenance",
    image: "/images/service-04.jpeg",
    description:
      "Industrial plant maintenance support for ongoing operational and maintenance requirements.",
  },
  {
    number: "05",
    title: "Crane Maintenance",
    image: "/images/service-05.jpeg",
    description:
      "Crane maintenance support along with skilled technicians for industrial maintenance requirements.",
  },
  {
    number: "06",
    title: "Piping Fabrication & Erection",
    image: "/images/service-06.jpeg",
    description:
      "Industrial piping fabrication and erection work for plant and infrastructure requirements.",
  },
  {
    number: "07",
    title: "Technical Manpower Supply",
    image: "/images/service-07.jpeg",
    description:
      "Supply of skilled technicians, fitters, helpers and industrial manpower for project and maintenance requirements.",
  },
  {
    number: "08",
    title: "Industrial Cleaning & Support",
    image: "/images/service-08.jpeg",
    description:
      "Dust collector cleaning, powder cell cleaning and other industrial maintenance support services.",
  },
];

const additionalServices = [
  "Structural Fabrication & Erection",
  "Industrial Shed Work",
  "Piping Fabrication & Erection",
  "Plant Maintenance",
  "Crane Maintenance",
  "Crane Maintenance Technicians",
  "Painting & Coating",
  "Roofing Work",
  "Dust Collector Cleaning",
  "Powder Cell Cleaning",
  "Technical Manpower Supply",
  "Fitters & Helpers Supply",
  "CGL-1 & CSD Manpower Support",
  "ARP Technical Manpower Support",
  "Telecommunication Tower Work",
  "General Labour Supply",
];

const stats = [
  {
    value: "25+",
    label: "Years of Experience",
  },
  {
    value: "360°",
    label: "Industrial Support",
  },
  {
    value: "Pune",
    label: "Based in Maharashtra",
  },
];

const projects = [
  "/images/service-01.png",
  "/images/service-02.png",
  "/images/service-03.jpeg",
];

const industryExperience = [
  {
    name: "Foseco India Limited",
    website: "https://www.foseco.com/",
  },
  {
    name: "ArcelorMittal Nippon Steel India",
    website: "https://www.amns.in/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.10),transparent_32%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36">
          {/* LEFT CONTENT */}

          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500 sm:w-14" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Fabrication • Erection • Maintenance
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              BUILT
              <br />
              <span className="text-orange-500">STRONG.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Reliable industrial fabrication, erection, maintenance and
              technical manpower solutions backed by more than 25 years of
              hands-on experience.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              From structural steel and industrial sheds to plant maintenance,
              crane maintenance, piping, technical manpower and customized
              industrial requirements.
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
                className="rounded-full border border-black/15 px-7 py-3.5 text-center text-sm font-bold text-[#111111] transition hover:border-orange-500 hover:text-orange-500"
              >
                Request a Quote →
              </a>
            </div>

            {/* STATS */}

            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-black/10 pt-7">
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

          {/* HERO IMAGE */}

          <div className="relative hidden min-h-[550px] lg:block">
            <div className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 overflow-hidden border border-orange-500/20 bg-[#F7F7F5] shadow-sm">
              <img
                src="/images/hero.png"
                alt="Sandeep Enterprises industrial fabrication work"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Experience Card */}

            <div className="absolute bottom-10 left-0 z-10 border border-black/10 bg-white/95 p-6 shadow-lg backdrop-blur">
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

      {/* ========================================================= */}
      {/* ABOUT */}
      {/* ========================================================= */}

      <section
        id="about"
        className="border-t border-black/10 bg-[#F7F7F5]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              About Sandeep Enterprises
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Experience that
              <br />
              <span className="text-orange-500">
                speaks through work.
              </span>
            </h2>
          </div>

          <div className="text-base leading-8 text-gray-600 sm:text-lg">
            <p>
              SANDEEP ENTERPRISES is an industrial fabrication, erection,
              maintenance and manpower services business based in Sanaswadi,
              Pune, operated by{" "}
              <span className="font-semibold text-[#111111]">
                Sandip Mahadev Darekar
              </span>
              .
            </p>

            <p className="mt-5">
              With more than 25 years of practical experience, the business
              undertakes a wide range of industrial requirements including
              structural fabrication and erection, plant maintenance, crane
              maintenance, piping, industrial sheds, roofing, painting and
              technical manpower supply.
            </p>

            <p className="mt-5">
              Our capabilities also include supply of technicians for crane
              maintenance, fitters and helpers, industrial cleaning work,
              dust collector and powder cell cleaning, telecommunication tower
              work and general labour requirements.
            </p>

            <div className="mt-8 border-l-2 border-orange-500 pl-5 text-[#111111]">
              Practical industrial experience backed by dependable execution
              and skilled manpower.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INDUSTRY EXPERIENCE */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#111111] text-white">
        {/* Subtle orange glow */}

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          {/* SECTION HEADER */}

          <div className="mx-auto max-w-5xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-orange-500 sm:w-14" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Industry Experience
              </p>

              <span className="h-px w-10 bg-orange-500 sm:w-14" />
            </div>

            <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              SANDEEP ENTERPRISES
              <span className="block text-orange-500">
                WORKS WITH REPUTED
              </span>
              AND WORLD-RENOWNED
              <span className="block">INDUSTRIAL COMPANIES.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              Our industrial experience includes working with established and
              globally recognized organizations.
            </p>
          </div>

          {/* COMPANY NAMES */}

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="border-y border-white/10">
              {industryExperience.map((company, index) => (
                <a
                  key={company.name}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${company.name} official website`}
                  className="group flex flex-col gap-5 border-b border-white/10 py-8 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:py-10"
                >
                  <div className="flex items-start gap-6 sm:items-center">
                    <span className="text-sm font-black text-orange-500">
                      0{index + 1}
                    </span>

                    <h3 className="text-2xl font-black leading-tight tracking-tight text-white transition duration-300 group-hover:text-orange-500 sm:text-3xl lg:text-4xl">
                      {company.name}
                    </h3>
                  </div>

                  <span className="text-2xl text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* BOTTOM STATEMENT */}

          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Industrial Capability
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
              From skilled manpower and maintenance support to fabrication,
              erection and site services, SANDEEP ENTERPRISES delivers
              practical industrial solutions based on project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Our Capabilities
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                What We Do
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Comprehensive industrial services covering fabrication,
                erection, maintenance, technical manpower and site support.
              </p>
            </div>

            <a
              href="/services"
              className="hidden text-xs font-bold uppercase tracking-[0.15em] text-orange-500 transition hover:text-orange-600 sm:block"
            >
              View All Services →
            </a>
          </div>

          {/* SERVICE GRID */}

          <div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden bg-white transition duration-300 hover:bg-[#F7F7F5]"
              >
                {/* IMAGE */}

                <div className="h-48 w-full overflow-hidden bg-[#F7F7F5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}

                <div className="min-h-[280px] p-7">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-orange-500">
                      {service.number}
                    </span>

                    <span className="text-xl text-gray-400 transition group-hover:text-orange-500">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-bold leading-7 text-[#111111]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* ADDITIONAL SERVICES */}

          <div className="mt-14 border-t border-black/10 pt-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                  Additional Services
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Industrial support
                  <br />
                  <span className="text-orange-500">
                    when you need it.
                  </span>
                </h3>
              </div>

              <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                {additionalServices.map((service) => (
                  <div
                    key={service}
                    className="bg-[#F7F7F5] px-5 py-4 text-sm font-medium text-gray-700 transition hover:bg-white hover:text-black"
                  >
                    <span className="mr-2 text-orange-500">+</span>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
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

      {/* ========================================================= */}
      {/* WHY CHOOSE US */}
      {/* ========================================================= */}

      <section className="border-y border-black/10 bg-[#F7F7F5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Built on
                <br />
                <span className="text-orange-500">
                  experience.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-gray-600">
                We combine practical industrial experience with skilled
                manpower and flexible execution to support a wide range of
                site requirements.
              </p>
            </div>

            <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
              {[
                [
                  "25+",
                  "Years of practical experience in industrial fabrication, erection and maintenance.",
                ],
                [
                  "01",
                  "Single point of coordination for fabrication, maintenance and manpower requirements.",
                ],
                [
                  "02",
                  "Skilled technicians, fitters, helpers and labour support based on project requirements.",
                ],
                [
                  "03",
                  "Flexible industrial solutions covering fabrication, erection, maintenance and site support.",
                ],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="bg-white p-7 transition hover:bg-gray-50"
                >
                  <p className="text-2xl font-black text-orange-500">
                    {number}
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROJECTS */}
      {/* ========================================================= */}

      <section id="projects" className="bg-white">
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

            <p className="max-w-md text-sm leading-6 text-gray-600">
              A glimpse of our fabrication, erection and industrial support
              work.
            </p>
          </div>

          {/* PROJECT IMAGES ONLY */}

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map((image, index) => (
              <div
                key={image}
                className="group aspect-[4/3] overflow-hidden border border-black/10 bg-[#F7F7F5]"
              >
                <img
                  src={image}
                  alt={`Sandeep Enterprises completed project ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500 transition hover:text-orange-600"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT CTA */}
      {/* ========================================================= */}

      <section id="contact" className="bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Have an Industrial Requirement?
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Let's discuss your fabrication, maintenance or manpower
                requirement.
              </h2>

              <p className="mt-5 max-w-xl text-black/70">
                Contact SANDEEP ENTERPRISES directly for fabrication, erection,
                industrial maintenance, technical manpower and customized work
                requirements.
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

      {/* FOOTER */}

      <Footer />

      {/* FLOATING WHATSAPP */}

      <WhatsAppButton />
    </main>
  );
}