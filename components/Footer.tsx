export default function Footer() {
  return (
    <footer className="bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-black tracking-[0.12em]">
              SANDEEP <span className="text-orange-500">ENTERPRISES</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
              Fabrication and erection solutions backed by more than 25 years
              of experience.
            </p>
          </div>

          <div>
            <p className="font-bold text-white">Contact</p>

            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <p>
                <a
                  href="tel:+919822193954"
                  className="transition hover:text-orange-500"
                >
                  9822193954
                </a>
              </p>

              <p>
                <a
                  href="mailto:sandeepenterprises4851@gmail.com"
                  className="break-all transition hover:text-orange-500"
                >
                  sandeepenterprises4851@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold text-white">Location</p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Sanaswadi, Pune
              <br />
              Tal. Shirur, Maharashtra
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-700">
          © {new Date().getFullYear()} SANDEEP ENTERPRISES. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}