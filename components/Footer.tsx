import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Footer() {
  // Exact Sandeep Enterprises location
  const location = "18.6720544,74.0921258";

  // Google Maps directions URL
  // "Current Location" will be used as the starting point
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location}&travelmode=driving`;

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* COMPANY */}
          <div>
            {/* COMPANY LOGO */}
            <a href="/" className="inline-block">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Sandeep Enterprises Logo"
                  width={180}
                  height={180}
                  className="h-auto w-[150px] object-contain"
                />
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Fabrication and erection solutions backed by more than 25 years
              of experience.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="font-bold text-white">Contact</p>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              {/* PHONE */}
              <p>
                <a
                  href="tel:+919822193954"
                  className="transition hover:text-orange-500"
                >
                  9822193954
                </a>
              </p>

              {/* EMAIL */}
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

          {/* LOCATION */}
          <div>
            <p className="font-bold text-white">Location</p>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Sanaswadi, Shirur
              <br />
              Pune, Maharashtra
            </p>

            {/* GET DIRECTIONS BUTTON */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-orange-400"
            >
              <MapPin size={17} strokeWidth={2.5} />
              Get Directions
            </a>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-10 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

            {/* COPYRIGHT */}
            <p>
              © {new Date().getFullYear()} Sandeep Enterprises. All Rights
              Reserved.
            </p>

            {/* DEVELOPER CREDIT */}
            <p>
              Designed &amp; Developed by{" "}
              <span className="font-semibold text-gray-300 transition hover:text-orange-500">
                Wardhan Darekar
              </span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}