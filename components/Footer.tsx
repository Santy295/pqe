import Link from "next/link";
import Image from "next/image";

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
      { href: "/vuelos", label: "Ruta Teleférico" },
      { href: "/vuelos", label: "Cásate Conmigo" },
      { href: "/vuelos", label: "Vuelo de 15 Años" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-pqe.jpg"
                alt="PQE Logo"
                width={36}
                height={36}
                className="rounded-lg object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">
                  PQE
                </span>
                <span className="text-sm font-semibold tracking-wider text-brand-blue">
                  Parapente Quito Ecuador
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Vive la libertad.<br />Siente el cielo.
            </p>
            {/* Social icons */}
           <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/parapente_quito_ecuador?igsh=MTd3Zzl0bDh4a2U2Ng=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-blue hover:text-white"
              >
                <SocialIcon name="instagram" />
              </a>

              <a
                href="https://www.facebook.com/share/1D1LwLLZ12/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-blue hover:text-white"
              >
                <SocialIcon name="facebook" />
              </a>

              <a
                href="https://www.tiktok.com/@_parapente_quito_ecuador?_r=1&_t=ZS-97semZzxZnJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-blue hover:text-white"
              >
                <SocialIcon name="tiktok" />
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
                      className="text-sm text-white/60 transition hover:text-brand-blue"
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
                <PhoneIcon />
                <span>+593 99 800 3003</span>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon />
                <span>rene1robertonavarro@hotmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon />
                <span>Quito, Ecuador</span>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon />
                <span>Lun – Dom: 8:00 AM – 6:00 PM</span>
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
            <a href="#" className="hover:text-white transition">Política de privacidad</a>
            <a href="#" className="hover:text-white transition">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Inline SVG Icons ---------- */

function SocialIcon({ name }: { name: string }) {
  const size = 16;
  switch (name) {
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2 29 29 0 00-.46 5.25 29 29 0 00.46 5.25 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.25z" />
          <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.77 1.52V6.8a4.84 4.84 0 01-1.01-.11z" />
        </svg>
      );
    default:
      return null;
  }
}

function PhoneIcon() {
  return (
    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
