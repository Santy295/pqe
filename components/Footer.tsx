import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "../lib/constants";
import { SocialIcon } from "./SocialIcon";

const navColumns = [
  {
    title: "Navegación",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/vuelos", label: "Vuelos" },
      { href: "/galeria", label: "Galería" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Vuelos",
    links: [
      { href: "/vuelos", label: "Ruta El Auqui" },
      { href: "/vuelos", label: "Ruta Pichincha" },
      { href: "/vuelos", label: "Cásate Conmigo" },
      { href: "/vuelos", label: "Vuelo de 15 Años" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-block">
              <Image
                src="/images/logoMarlon.png"
                alt="PQE Logo"
                width={300}
                height={100}
                className="object-contain h-12 w-auto sm:h-14 mr-2 sm:mr-4 transform scale-125 sm:scale-[2.0] origin-left"
              />
            </div> 
            <p className="text-sm text-white/60 leading-relaxed">
              Vive la libertad.<br />Siente el cielo.
            </p>
            {/* Social icons */}
           <div className="mt-5 flex items-center gap-2 sm:gap-2.5">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-turquoise hover:text-white"
              >
                <SocialIcon name="instagram" size={20} />
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-turquoise hover:text-white"
              >
                <SocialIcon name="tiktok" size={20} />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-turquoise hover:text-white"
              >
                <SocialIcon name="facebook" size={20} />
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-turquoise hover:text-white"
              >
                <SocialIcon name="youtube" size={20} />
              </a>

              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-turquoise hover:text-white"
              >
                <SocialIcon name="x" size={20} />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition hover:text-brand-turquoise"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5"><PhoneIcon /></span>
                <span>+593 99 800 3003</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5"><MailIcon /></span>
                <span>vuelaquitoparapente@gmail.com</span>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Parapente+Quito+Ecuador/@-0.2192882,-78.5247212,22867m/data=!3m1!1e3!4m6!3m5!1s0x91d5bd884479c16d:0x6313317c10c84dca!8m2!3d-0.2172447!4d-78.4714489!16s%2Fg%2F11h0y9ft1q?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 transition hover:text-brand-turquoise"
                >
                  <span className="text-brand-green mt-0.5 transition group-hover:text-brand-turquoise"><MapPinIcon /></span>
                  <span>Quito, Ecuador</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5"><ClockIcon /></span>
                <span>Lun – Dom: 7:00 AM – 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PQE Vuelos en Parapente. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politicas-de-uso-y-terminos-del-servicio" className="hover:text-white transition">
              Políticas de Uso y Términos del Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Inline SVG Icons ---------- */

function PhoneIcon() {
  return (
    <svg className="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
