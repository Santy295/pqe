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
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/80 px-5 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="PQE Inicio">
            <Image
              src="/logo-pqe.jpg"
              alt="PQE Logo"
              width={40}
              height={40}
              className="rounded-lg object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-foreground">
                PQE
              </span>
              <span className="hidden sm:block text-sm font-semibold tracking-wider text-brand-blue">
                Parapente Quito Ecuador
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === l.href
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 transition hover:bg-brand-blue-dark"
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
                        ? "bg-brand-blue/10 text-brand-blue"
                        : "text-foreground/70 hover:bg-brand-blue/5 hover:text-brand-blue"
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
              className="mt-3 flex w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 transition hover:bg-brand-blue-dark"
            >
              Reserva ahora
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
