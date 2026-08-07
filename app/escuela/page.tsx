import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import FlightCardCarousel from "@/components/FlightCardCarousel";

export const metadata: Metadata = {
  title: "Escuela de Parapente | PQE Vuelos en Parapente",
  description:
    "Aprende a volar con seguridad y confianza. Inicia tu formación en nuestra escuela con pilotos certificados y desarrolla autonomía con nuestros cursos Introductorio y Progresivo en Quito, Ecuador.",
};

/* ─── DATA ─── */

const cursoIntroductorio = {
  title: "Curso Introductorio",
  tag: "ETAPA 1 · INICIACIÓN",
  tagColor: "bg-brand-green",
  images: [
    "/images/hero/Hero(1).png",
    "/images/gallery/img1.jpg",
    "/images/gallery/img7.jpg",
    "/images/gallery/img14.jpg",
  ],
  objective:
    "Conoce los fundamentos del parapente y vive tus primeras experiencias de vuelo en un entorno seguro y controlado.",
  aprenderas: [
    "Principios básicos del parapente.",
    "Conocimiento del equipo.",
    "Seguridad en tierra.",
    "Preparación para el vuelo.",
    "Técnicas básicas de control de la vela (Ground Handling).",
    "Procedimientos de despegue y aterrizaje.",
    "Primeros vuelos supervisados.",
  ],
  incluye: [
    "Equipo completo de parapente.",
    "Instructor certificado.",
    "Comunicación por radio durante los vuelos.",
    "Material de apoyo.",
    "Seguro durante la actividad.",
    "Certificado de participación.",
  ],
  botonText: "Quiero iniciar mi formación",
  waText:
    "¡Hola PQE! 🪂 Me gustaría obtener más información e inscribirme en el *Curso Introductorio* de la Escuela de Parapente.",
};

const cursoProgresivo = {
  title: "Curso Progresivo",
  tag: "ETAPA 2 · AUTONOMÍA",
  tagColor: "bg-brand-turquoise",
  images: [
    "/images/hero-principal.png",
    "/images/hero/Hero(4).png",
    "/images/gallery/img4.jpg",
    "/images/gallery/img9.jpg",
  ],
  objective:
    "Desarrolla las habilidades necesarias para ganar autonomía, mejorar tu técnica y realizar vuelos con mayor confianza y seguridad.",
  aprenderas: [
    "Perfeccionamiento del control de la vela.",
    "Despegues y aterrizajes en diferentes condiciones.",
    "Técnicas de vuelo más avanzadas.",
    "Interpretación básica de la meteorología.",
    "Gestión del espacio aéreo.",
    "Planificación del vuelo.",
    "Introducción al aprovechamiento de térmicas.",
    "Toma de decisiones en vuelo.",
  ],
  incluye: [
    "Equipo completo.",
    "Instructor especializado.",
    "Coaching personalizado.",
    "Radio durante las prácticas.",
    "Evaluación continua.",
    "Registro de progresión.",
    "Certificado de finalización.",
  ],
  botonText: "Continuar mi formación",
  waText:
    "¡Hola PQE! 🪂 Quiero dar el siguiente paso y matricularme en el *Curso Progresivo* de la Escuela de Parapente.",
};

const comparativaData = [
  {
    carateristica: "Nivel",
    intro: "Principiante",
    progresivo: "Intermedio",
  },
  {
    carateristica: "Experiencia previa",
    intro: "No requerida",
    progresivo:
      "Haber realizado el curso introductorio o contar con conocimientos equivalentes",
  },
  {
    carateristica: "Objetivo",
    intro: "Primer contacto con el parapente",
    progresivo: "Desarrollo de habilidades y mayor autonomía",
  },
  {
    carateristica: "Enfoque",
    intro: "Fundamentos y primeros vuelos",
    progresivo: "Técnica, seguridad y progresión",
  },
  { carateristica: "Instructor", intro: "✔", progresivo: "✔" },
  { carateristica: "Equipo incluido", intro: "✔", progresivo: "✔" },
  { carateristica: "Prácticas supervisadas", intro: "✔", progresivo: "✔" },
  { carateristica: "Certificado", intro: "✔", progresivo: "✔" },
];

export default function EscuelaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-footer-bg to-brand-turquoise-darker/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--brand-turquoise)_0%,transparent_60%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Vuela con seguridad y confianza
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Inicia tu formación con pilotos certificados y avanza paso a paso hasta desarrollar
            las habilidades necesarias para volar de forma independiente.
          </p>
        </div>
      </section>

      {/* ── TU CAMINO PARA CONVERTIRTE EN PILOTO ── */}
      <section id="camino-de-formacion" className="py-20 bg-background-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
              Progresión Paso a Paso
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Tu camino para convertirte en piloto
            </h2>
            <p className="mt-4 text-foreground/70 text-base leading-relaxed">
              Diseñamos un programa de aprendizaje progresivo y estructurado. El Curso Introductorio es tu
              primer paso para dominar las bases, y el Curso Progresivo representa la continuación natural de
              tu proceso formativo hacia la libertad en el cielo.
            </p>
          </div>

          {/* Diagrama Visual de las Dos Etapas */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 relative z-10">
              {/* Etapa 1: Curso Introductorio */}
              <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 flex flex-col justify-between border-t-4 border-brand-green relative overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <span className="absolute top-4 right-4 text-5xl font-extrabold text-foreground/5 pointer-events-none">
                  01
                </span>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10">
                    Etapa 1 · El Primer Paso
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">Curso Introductorio</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    Diseñado para quienes nunca han volado solos. Conocerás la aerodinámica básica, la
                    seguridad y vivirás tus primeros despegues en un entorno 100% supervisado.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-semibold text-foreground/60 flex items-center gap-1">
                  <span>Pasa directamente al Curso Progresivo al finalizar</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              {/* Conector Visual entre tarjetas en Desktop */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-turquoise text-white items-center justify-center shadow-lg border-4 border-background-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              {/* Conector Visual en Mobile */}
              <div className="md:hidden flex justify-center -my-3 z-20">
                <div className="w-10 h-10 rounded-full bg-brand-turquoise text-white flex items-center justify-center shadow-md border-2 border-background-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              </div>

              {/* Etapa 2: Curso Progresivo */}
              <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 flex flex-col justify-between border-t-4 border-brand-turquoise relative overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <span className="absolute top-4 right-4 text-5xl font-extrabold text-foreground/5 pointer-events-none">
                  02
                </span>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-turquoise bg-brand-turquoise/10">
                    Etapa 2 · La Continuación Natural
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">Curso Progresivo</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    Para alumnos iniciados que buscan autonomía y perfección técnica. Aprende meteorología,
                    toma de decisiones y técnicas avanzadas de vuelo en diversas condiciones.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-semibold text-brand-turquoise flex items-center gap-1">
                  <span>Obtén tu autonomía e independencia en el cielo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURSOS DETALLE ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28">
          
          {/* ── 1. Curso Introductorio ── */}
          <div id="curso-introductorio" className="flex flex-col lg:flex-row gap-10 items-stretch scroll-mt-28">
            {/* Carrusel del curso */}
            <div className="group relative w-full lg:w-1/2 min-h-[360px] sm:min-h-[440px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <FlightCardCarousel
                images={cursoIntroductorio.images}
                alt={cursoIntroductorio.title}
                priority={true}
              />
              <span className={`absolute top-4 left-4 z-20 rounded-lg ${cursoIntroductorio.tagColor} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md`}>
                {cursoIntroductorio.tag}
              </span>
            </div>

            {/* Contenido Completo y Visible */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-foreground">{cursoIntroductorio.title}</h3>
                
                {/* Objetivo */}
                <div className="mt-4 p-4 rounded-xl bg-brand-turquoise-soft/60 border-l-4 border-brand-green">
                  <p className="text-xs uppercase tracking-wider font-bold text-brand-green">Objetivo del curso</p>
                  <p className="mt-1 text-base font-medium text-foreground/90 leading-relaxed">
                    {cursoIntroductorio.objective}
                  </p>
                </div>

                {/* ¿Qué aprenderás? */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green inline-block" />
                    ¿Qué aprenderás?
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cursoIntroductorio.aprenderas.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 leading-snug">
                        <svg className="mt-1 shrink-0 text-brand-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Incluye */}
                <div className="mt-6">
                  <h4 className="text-base font-bold text-foreground">El curso incluye:</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cursoIntroductorio.incluye.map((inc, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-foreground/5 text-foreground/80 ring-1 ring-black/5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-green shrink-0">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <div className="mt-8 pt-4 border-t border-foreground/10">
                <a
                  href={`https://wa.me/593998003003?text=${encodeURIComponent(cursoIntroductorio.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-brand-green px-7 py-3.5 text-base font-bold text-white shadow-md shadow-brand-green/25 transition-all duration-300 hover:bg-brand-green-dark hover:-translate-y-0.5"
                >
                  <WhatsAppIcon />
                  {cursoIntroductorio.botonText}
                </a>
              </div>
            </div>
          </div>

          {/* ── 2. Curso Progresivo ── */}
          <div id="curso-progresivo" className="flex flex-col lg:flex-row-reverse gap-10 items-stretch scroll-mt-28">
            {/* Carrusel del curso */}
            <div className="group relative w-full lg:w-1/2 min-h-[360px] sm:min-h-[440px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <FlightCardCarousel
                images={cursoProgresivo.images}
                alt={cursoProgresivo.title}
                priority={false}
              />
              <span className={`absolute top-4 left-4 z-20 rounded-lg ${cursoProgresivo.tagColor} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md`}>
                {cursoProgresivo.tag}
              </span>
            </div>

            {/* Contenido Completo y Visible */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-foreground">{cursoProgresivo.title}</h3>
                
                {/* Objetivo */}
                <div className="mt-4 p-4 rounded-xl bg-brand-turquoise-soft/60 border-l-4 border-brand-turquoise">
                  <p className="text-xs uppercase tracking-wider font-bold text-brand-turquoise">Objetivo del curso</p>
                  <p className="mt-1 text-base font-medium text-foreground/90 leading-relaxed">
                    {cursoProgresivo.objective}
                  </p>
                </div>

                {/* ¿Qué aprenderás? */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-turquoise inline-block" />
                    ¿Qué aprenderás?
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cursoProgresivo.aprenderas.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 leading-snug">
                        <svg className="mt-1 shrink-0 text-brand-turquoise" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Incluye */}
                <div className="mt-6">
                  <h4 className="text-base font-bold text-foreground">El curso incluye:</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cursoProgresivo.incluye.map((inc, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-foreground/5 text-foreground/80 ring-1 ring-black/5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-turquoise shrink-0">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <div className="mt-8 pt-4 border-t border-foreground/10">
                <a
                  href={`https://wa.me/593998003003?text=${encodeURIComponent(cursoProgresivo.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-brand-turquoise-dark px-7 py-3.5 text-base font-bold text-white shadow-md shadow-brand-turquoise-dark/25 transition-all duration-300 hover:bg-brand-turquoise-darker hover:-translate-y-0.5"
                >
                  <WhatsAppIcon />
                  {cursoProgresivo.botonText}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── COMPARATIVA DE CURSOS ── */}
      <section className="py-20 bg-brand-turquoise-soft/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
              Comparativa detallada
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              ¿Qué curso es ideal para ti?
            </h2>
            <p className="mt-3 text-foreground/70 text-base">
              Revisa frente a frente las características y alcances de cada etapa de formación.
            </p>
          </div>

          {/* Tabla Comparativa */}
          <div className="max-w-5xl mx-auto rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0C323A] text-white">
                    <th className="py-5 px-6 font-bold text-base w-1/3">Característica</th>
                    <th className="py-5 px-6 font-bold text-base w-1/3 text-brand-green-light border-l border-white/10">
                      Curso Introductorio
                    </th>
                    <th className="py-5 px-6 font-bold text-base w-1/3 text-brand-turquoise-light border-l border-white/10">
                      Curso Progresivo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/10 text-sm">
                  {comparativaData.map((item, index) => {
                    const isCheck = item.intro === "✔" && item.progresivo === "✔";
                    return (
                      <tr
                        key={item.carateristica}
                        className={`transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                        } hover:bg-brand-turquoise-soft/30`}
                      >
                        <td className="py-4 px-6 font-bold text-foreground">
                          {item.carateristica}
                        </td>
                        <td className="py-4 px-6 text-foreground/80 border-l border-foreground/5 leading-relaxed">
                          {isCheck ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-green/15 text-brand-green font-extrabold text-sm">
                              ✔
                            </span>
                          ) : (
                            item.intro
                          )}
                        </td>
                        <td className="py-4 px-6 text-foreground/80 border-l border-foreground/5 leading-relaxed font-medium">
                          {isCheck ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-turquoise/15 text-brand-turquoise font-extrabold text-sm">
                              ✔
                            </span>
                          ) : (
                            item.progresivo
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-footer-bg py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-footer-bg via-footer-bg/80 to-brand-turquoise-darker/50 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            ¿Tienes dudas sobre tu formación en vuelo?
          </h2>
          <p className="mt-4 text-white/70 max-w-md mx-auto text-base">
            Habla directamente con nuestros instructores certificados y comienza tu aventura en el cielo.
          </p>
          <a
            href="https://wa.me/593998003003?text=%c2%a1Hola%20PQE!%20%f0%9f%a9%82%20Tengo%20algunas%20dudas%20sobre%20la%20Escuela%20de%20Parapente%20y%20los%20cursos%20de%20formaci%c3%b3n."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-green-dark hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Hablar con un instructor por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
