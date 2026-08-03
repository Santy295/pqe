import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Uso y Términos del Servicio | PQE Vuelos en Parapente",
  description:
    "En esta sección encontrarás las políticas, condiciones y términos que regulan la prestación de nuestros servicios de vuelo en parapente en Quito, Ecuador.",
};

export default function PoliticasYTerminosPage() {
  return (
    <>
      {/* ── Encabezado (Hero) ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-footer-bg to-brand-turquoise-darker/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-turquoise)_0%,transparent_70%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
            Información Legal
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Políticas de Uso y Términos del Servicio
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/70 leading-relaxed text-base sm:text-lg">
            En esta sección encontrarás las políticas, condiciones y términos que regulan la prestación de nuestros servicios de vuelo en parapente.
          </p>
        </div>
      </section>

      {/* ── Contenedor Preparado para el Futuro ── */}
      {/* 
        Contenedor amplio con ancho de lectura limitado (max-w-4xl) y generosos márgenes laterales.
        Estructura óptima para incluir extensos bloques de texto, títulos, subtítulos, listas numeradas y enlaces 
        sin necesidad de rediseñar o cambiar las clases contenedoras en el futuro.
      */}
      <section className="py-20 bg-background-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 sm:p-12 lg:p-16 shadow-md ring-1 ring-black/5">
            
            {/* Contenedor con texto temporal centrado */}
            <div className="min-h-[300px] flex flex-col items-center justify-center text-center">
              <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                Próximamente publicaremos nuestras Políticas de Uso y Términos del Servicio.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
