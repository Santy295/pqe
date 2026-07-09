import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | PQE Vuelos en Parapente",
  description:
    "Conoce al equipo de PQE, nuestra misión, visión y los protocolos de seguridad que nos convierten en referente del parapente en Ecuador.",
};

const team = [
  {
    name: "Carlos Mendoza",
    role: "Piloto Fundador",
    exp: "+8 años de experiencia",
    desc: "Piloto certificado APPI con más de 2.000 vuelos biplaza realizados sobre los cielos de Quito.",
  },
  {
    name: "Diego Paredes",
    role: "Piloto Instructor",
    exp: "+5 años de experiencia",
    desc: "Especialista en vuelos tándem y acrobáticos. Certificación USHPA y entrenamiento en competiciones internacionales.",
  },
  {
    name: "Valentina Ruiz",
    role: "Coordinadora de Experiencias",
    exp: "+3 años en turismo de aventura",
    desc: "Encargada de diseñar cada paquete experiencial, desde propuestas de matrimonio hasta celebraciones de 15 años.",
  },
];

const safety = [
  {
    icon: "check-circle",
    title: "Equipos Certificados EN / LTF",
    desc: "Todos nuestros parapentes, arneses y cascos cumplen con las normas europeas de seguridad.",
  },
  {
    icon: "wind",
    title: "Análisis Meteorológico",
    desc: "Evaluamos las condiciones de viento, visibilidad y temperatura antes de cada vuelo.",
  },
  {
    icon: "radio",
    title: "Comunicación en Vuelo",
    desc: "Cada piloto lleva radio comunicación para coordinación constante con el equipo en tierra.",
  },
  {
    icon: "refresh",
    title: "Mantenimiento Periódico",
    desc: "Inspecciones rigurosas cada 100 horas de vuelo y revisión completa cada año.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0B132B] to-brand-blue/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-blue)_0%,transparent_60%)] opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Conócenos
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Sobre Nosotros</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Somos un equipo apasionado por el vuelo libre, comprometidos con brindarte la mejor
            experiencia de parapente en Ecuador.
          </p>
        </div>
      </section>

      {/* ── Misión y Visión ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Misión */}
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Nuestra Misión</h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Brindar experiencias de vuelo libre seguras, inolvidables y personalizadas,
                conectando a las personas con la libertad del cielo andino mediante los más
                altos estándares profesionales.
              </p>
            </div>
            {/* Visión */}
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Nuestra Visión</h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Ser el referente líder de turismo de aventura y vuelos en parapente en el
                Ecuador, reconocidos por nuestra excelencia en seguridad, innovación en
                paquetes experienciales y pasión por el vuelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Nuestro Equipo
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Pilotos y Profesionales
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-2xl font-bold text-white mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-brand-blue">{member.role}</p>
                <p className="mt-1 text-xs text-brand-green font-semibold">{member.exp}</p>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seguridad ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-green uppercase">
              Tu seguridad es nuestra prioridad
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Protocolos de Seguridad
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safety.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-4">
                  <SafetyIcon name={item.icon} />
                </div>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── SVG Helpers ── */
function SafetyIcon({ name }: { name: string }) {
  switch (name) {
    case "check-circle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
      );
    case "wind":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
        </svg>
      );
    case "radio":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.72 11.06A10.94 10.94 0 0119 12.55" />
          <path d="M13.06 7.9a14.88 14.88 0 018.33 5.54" />
          <path d="M2 16.1A5 5 0 012.5 10a10 10 0 0110-5.5" />
          <line x1="2" y1="12" x2="2.01" y2="12" />
        </svg>
      );
    case "refresh":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23,4 23,10 17,10" />
          <polyline points="1,20 1,14 7,14" />
          <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
        </svg>
      );
    default:
      return null;
  }
}
