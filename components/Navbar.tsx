"use client";

import { useState } from "react";

const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to enquire about fabrication and erection work."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <a href="/" className="group" onClick={closeMenu}>
          <div className="text-lg font-black tracking-[0.12em] text-[#111111] sm:text-xl">
            SANDEEP
            <span className="text-orange-500"> ENTERPRISES</span>
          </div>

          <div className="mt-0.5 text-[8px] font-medium tracking-[0.35em] text-gray-500 sm:text-[9px]">
            FABRICATION • ERECTION
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 text-sm text-gray-700 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP WHATSAPP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-orange-400 lg:block"
        >
          WhatsApp Us
        </a>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-4 py-2.5 text-xs font-bold text-black transition hover:bg-orange-400"
          >
            WhatsApp
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#111111] transition hover:border-orange-500 hover:text-orange-500"
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium text-gray-700 transition hover:text-orange-500"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="tel:+919822193954"
              className="mt-4 block rounded-full border border-orange-500/30 px-5 py-3 text-center text-sm font-bold text-orange-500 transition hover:bg-orange-50"
              onClick={closeMenu}
            >
              Call 9822193954
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}