"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const links = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Projects", href: "/admin/projects" },
  { name: "Public Website", href: "/" },
];

export default function AdminMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 bg-[#070707] lg:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-sm font-black tracking-[0.18em]">
            SANDEEP <span className="text-orange-500">ENTERPRISES</span>
          </p>
          <p className="mt-1 text-[9px] tracking-[0.25em] text-gray-600">
            ADMIN PANEL
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="border border-white/10 px-3 py-2 text-xl"
          aria-label="Toggle admin menu"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 py-4">
          <div className="space-y-1">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm ${
                    active
                      ? "bg-orange-500/10 text-orange-400"
                      : "text-gray-400 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-4">
            <LogoutButton />
          </div>
        </nav>
      )}
    </div>
  );
}