import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to discuss a fabrication or erection requirement."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const projects = [
  {
    number: "01",
    title: "Industrial Shed Fabrication",
    category: "Fabrication & Erection",
    location: "Pune, Maharashtra",
    description:
      "Industrial structural fabrication and erection work carried out according to project and site requirements.",
  },
  {
    number: "02",
    title: "Structural Steel Work",
    category: "Structural Fabrication",
    location: "Pune, Maharashtra",
    description:
      "Structural steel fabrication involving customized components, frames, supports and related steel work.",
  },
  {
    number: "03",
    title: "Industrial Structure",
    category: "Fabrication & Erection",
    location: "Maharashtra",
    description:
      "Fabrication and on-site erection of steel structures for industrial applications.",
  },
  {
    number: "04",
    title: "Custom Fabrication Work",
    category: "Custom Fabrication",
    location: "Pune, Maharashtra",
    description:
      "Customized fabrication work based on project requirements, measurements and site conditions.",
  },
  {
    number: "05",
    title: "Machinery Support Structure",
    category: "Industrial Fabrication",
    location: "Maharashtra",
    description:
      "Fabrication of customized steel supports and structures for machinery and equipment requirements.",
  },
  {
    number: "06",
    title: "Steel Erection Work",
    category: "Erection",
    location: "Pune, Maharashtra",
    description:
      "On-site steel erection and installation work using practical site execution and experienced manpower.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-32 sm:pt-36">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.13),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
                Our Portfolio
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-8xl">
              WORK THAT
              <br />
              <span className="text-orange-500">SPEAKS.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              A portfolio of fabrication, structural and erection work
              completed by SANDEEP ENTERPRISES.
            </p>

            <p className="mt-4 text-sm text-gray-600">
              Actual project photographs will be added as the portfolio is
              developed.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden border border-white/10 bg-[#0d0d0d]"
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.14),transparent_45%)]" />

                  <div className="absolute inset-8 border border-white/10" />

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-4xl font-black text-orange-500/70">
                      {project.number}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-600">
                      Project Image
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <span className="border border-orange-500/30 bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold text-orange-500">
                        PROJECT {project.number}
                      </p>

                      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                        {project.title}
                      </h2>
                    </div>

                    <span className="text-2xl text-gray-700 transition group-hover:text-orange-500">
                      ↗
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-5 border-y border-white/10 py-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        Work Type
                      </p>

                      <p className="mt-2 text-sm text-gray-300">
                        {project.category}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        Location
                      </p>

                      <p className="mt-2 text-sm text-gray-300">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT CTA */}
      <section className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Have a Similar Requirement?
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
                Tell us about your project and let's discuss the work.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                Fabrication, erection, structural steel, industrial sheds or
                customized requirements — contact us directly.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-7 py-3.5 text-center text-sm font-bold text-black transition hover:bg-orange-400"
            >
              Discuss on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}