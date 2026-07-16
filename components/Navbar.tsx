"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/vuelos", label: "Vuelos" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/80 px-6 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-xl">
          {/* Logo and Text */}
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center gap-8" aria-label="PQE Inicio">
              <Image
                src="/images/logo.png"
                alt="PQE Logo"
                width={200}
                height={56}
                className="object-contain h-14 w-auto sm:h-16 transform scale-150 sm:scale-[1.6] origin-left -translate-x-2 sm:-translate-x-4 mr-4 sm:mr-3"
                priority
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl sm:text-[1.75rem] font-extrabold text-[#0C323A] leading-none tracking-tight">PQE</span>
                <span className="text-sm sm:text-[15px] font-bold text-[#049CB6] leading-tight mt-1">Parapente Quito Ecuador</span>
              </div>
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-lg px-4 py-2 text-[15px] font-semibold transition-colors ${
                    pathname === l.href
                      ? "bg-brand-turquoise/10 text-brand-turquoise"
                      : "text-foreground/70 hover:text-brand-turquoise hover:bg-brand-turquoise/5"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="/contacto"
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-2 text-[15px] font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-dark"
            >
              Reserva ahora
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-black/5 transition"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
              aria-expanded={open}
            >
              <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground mt-1 transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground mt-1 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-xl">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      pathname === l.href
                        ? "bg-brand-turquoise/10 text-brand-turquoise"
                        : "text-foreground/70 hover:bg-brand-turquoise/5 hover:text-brand-turquoise"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-dark"
            >
              Reserva ahora
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
