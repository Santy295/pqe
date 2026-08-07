import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extras | PQE Vuelos en Parapente",
  description: "Próximamente incorporaremos información adicional.",
};

export default function ExtrasPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-footer-bg to-brand-turquoise-darker/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--brand-turquoise)_0%,transparent_60%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Extras</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Próximamente incorporaremos información adicional.
          </p>
        </div>
      </section>
    </>
  );
}
