"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { SOCIAL_LINKS } from "../../lib/constants";
import { SocialIcon } from "../../components/SocialIcon";

const routeOptions = [
  "Ruta El Auqui – Lumbisí",
  "Ruta Pichincha – La Carolina",
  "Plan Cásate Conmigo",
  "Plan Quince Años",
  "Otro / No estoy seguro",
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const route = data.get("route") as string;
    const message = data.get("message") as string;

    // Build WhatsApp message
    const waMessage = encodeURIComponent(
      `¡Hola PQE! 🪂\n\nMe llamo ${name}.\nMe interesa: ${route}\n\n${message}`
    );
    window.open(`https://wa.me/593998003003?text=${waMessage}`, "_blank");
    setSent(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-footer-bg to-brand-turquoise-darker/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--brand-turquoise)_0%,transparent_60%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
            Contáctanos
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            ¿Listo para Volar?
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Completa el formulario o escríbenos directamente por WhatsApp. ¡Estamos listos para
            hacerte volar!
          </p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
                <h2 className="text-2xl font-bold text-foreground">Formulario de Contacto</h2>
                <p className="mt-2 text-sm text-foreground/60">
                  Llena tus datos y te redirigiremos a WhatsApp con tu mensaje listo.
                </p>

                {sent ? (
                  <div className="mt-8 rounded-xl bg-brand-green/10 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/20 text-brand-green mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">¡Mensaje enviado!</h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      Te hemos redirigido a WhatsApp. Si la ventana no se abrió,{" "}
                      <a href="https://wa.me/593998003003" target="_blank" rel="noopener noreferrer" className="text-brand-turquoise font-medium hover:underline">
                        haz clic aquí
                      </a>.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-4 text-sm font-medium text-brand-turquoise hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Tu nombre"
                          className="w-full rounded-xl border border-black/10 bg-background-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="tu@correo.com"
                          className="w-full rounded-xl border border-black/10 bg-background-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="route" className="block text-sm font-medium text-foreground mb-1.5">
                          Ruta o plan de interés *
                        </label>
                        <select
                          id="route"
                          name="route"
                          required
                          className="w-full rounded-xl border border-black/10 bg-background-secondary px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/20"
                        >
                          <option value="">Selecciona una opción</option>
                          {routeOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1.5">
                          Fecha preferida
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className="w-full rounded-xl border border-black/10 bg-background-secondary px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Cuéntanos más sobre lo que buscas..."
                        className="w-full rounded-xl border border-black/10 bg-background-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/20 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-green-dark"
                    >
                      Enviar por WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
                <h3 className="text-lg font-bold text-foreground mb-4">Información de Contacto</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-turquoise/10 text-brand-turquoise">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50">Teléfono</p>
                      <p className="text-sm font-medium text-foreground">+593 99 800 3003</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-turquoise/10 text-brand-turquoise">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50">Email</p>
                      <p className="text-sm font-medium text-foreground">rene1robertonavarro@hotmail.com</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-turquoise/10 text-brand-turquoise">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50">Ubicación</p>
                      <p className="text-sm font-medium text-foreground">Quito, Ecuador</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-turquoise/10 text-brand-turquoise">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50">Horario</p>
                      <p className="text-sm font-medium text-foreground">Lun – Dom: 8:00 AM – 6:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Media Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 flex flex-col items-center text-center">
                <h3 className="text-lg font-bold text-foreground mb-6">Síguenos en redes sociales</h3>
                <div className="flex items-center justify-center gap-5 sm:gap-8">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 text-foreground/60 transition-all duration-300 hover:scale-110 hover:bg-[#E1306C] hover:text-white hover:shadow-md"
                  >
                    <SocialIcon name="instagram" size={32} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 text-foreground/60 transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white hover:shadow-md"
                  >
                    <SocialIcon name="tiktok" size={32} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 text-foreground/60 transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] hover:text-white hover:shadow-md"
                  >
                    <SocialIcon name="facebook" size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
