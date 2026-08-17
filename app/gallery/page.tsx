import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to discuss a fabrication or erection requirement."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const galleryItems = [
  {
    number: "01",
    title: "Industrial Shed",
    category: "Fabrication & Erection",
  },
  {
    number: "02",
    title: "Structural Steel Work",
    category: "Structural Fabrication",
  },
  {
    number: "03",
    title: "Steel Erection",
    category: "On-Site Work",
  },
  {
    number: "04",
    title: "Industrial Structure",
    category: "Fabrication",
  },
  {
    number: "05",
    title: "Machinery Structure",
    category: "Industrial Work",
  },
  {
    number: "06",
    title: "Custom Fabrication",
    category: "Custom Work",
  },
];

export default function GalleryPage() {
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
                Gallery
              </p>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-8xl">
              SEE THE
              <br />
              <span className="text-orange-500">WORK.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              A visual showcase of fabrication, structural and erection work
              carried out by SANDEEP ENTERPRISES.
            </p>

            <p className="mt-4 text-sm text-gray-600">
              Project photographs will be added as the company portfolio is
              developed.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden border border-white/10 bg-[#0d0d0d]"
              >
                {/* IMAGE AREA */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.15),transparent_45%)] transition duration-500 group-hover:scale-110" />

                  {/* Decorative steel elements */}
                  <div className="absolute left-1/2 top-1/2 h-48 w-7 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-orange-500/20" />

                  <div className="absolute left-20 right-20 top-1/2 h-5 -translate-y-1/2 rotate-12 bg-orange-500/10" />

                  <div className="absolute inset-8 border border-white/10" />

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-4xl font-black text-orange-500/60">
                      {item.number}
                    </p>

                    <p className="mt-2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
                      Photo Coming Soon
                    </p>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="border border-orange-500/30 bg-black/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* INFO */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Project {item.number}
                    </p>

                    <h2 className="mt-2 text-lg font-bold">
                      {item.title}
                    </h2>
                  </div>

                  <span className="text-xl text-gray-700 transition group-hover:text-orange-500">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO REQUEST */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Our Work
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
                Real project photographs will make this portfolio come alive.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                Once we collect photographs of completed projects, we will
                organize them by project and type of work.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-7 py-3.5 text-center text-sm font-bold text-black transition hover:bg-orange-400"
            >
              Discuss Your Work →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}