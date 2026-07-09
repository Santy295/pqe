"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const routeOptions = [
  "Ruta El Auqui – Lumbisí",
  "Ruta Teleférico – La Carolina",
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0B132B] to-brand-green/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--brand-green)_0%,transparent_60%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-green uppercase">
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
                      <a href="https://wa.me/593998003003" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-medium hover:underline">
                        haz clic aquí
                      </a>.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-4 text-sm font-medium text-brand-blue hover:underline"
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
                          className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
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
                          className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
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
                          className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
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
                          className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
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
                        className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 resize-none"
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
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

              {/* WhatsApp card */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-whatsapp to-emerald-600 p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold">¿Prefieres escribirnos directo?</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  Contáctanos por WhatsApp y te responderemos en minutos.
                </p>
                <a
                  href="https://wa.me/593998003003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow transition hover:shadow-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brand-whatsapp">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
