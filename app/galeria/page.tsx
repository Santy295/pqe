import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería | PQE Vuelos en Parapente",
  description:
    "Explora fotos y momentos increíbles de los vuelos en parapente de PQE sobre los cielos de Quito, Ecuador.",
};

const images = [
  { src: "/hero.jpg", alt: "Vuelo panorámico sobre los valles andinos", category: "Vistas aéreas" },
  { src: "/route-auqui.jpg", alt: "Despegue desde el cerro El Auqui", category: "Despegue" },
  { src: "/route-teleferico.jpg", alt: "Vuelo sobre Quito desde el Teleférico", category: "Vistas aéreas" },
  { src: "/plan-casate.jpg", alt: "Propuesta de matrimonio en parapente", category: "Eventos" },
  { src: "/plan-quince.jpg", alt: "Celebración de 15 años en parapente", category: "Eventos" },
  { src: "/gallery-1.jpg", alt: "Vista aérea de los Andes ecuatorianos", category: "Vistas aéreas" },
  { src: "/gallery-2.jpg", alt: "Pasajero disfrutando el vuelo biplaza", category: "En vuelo" },
  { src: "/gallery-3.jpg", alt: "Piloto preparando el despegue", category: "Despegue" },
  { src: "/gallery-4.jpg", alt: "Parapente al atardecer sobre los Andes", category: "Vistas aéreas" },
  { src: "/gallery-5.jpg", alt: "Aterrizaje suave en el parque", category: "Aterrizaje" },
];

export default function GaleriaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0B132B] to-brand-blue/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-blue)_0%,transparent_70%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Galería
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Momentos Inolvidables
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Cada vuelo es una historia. Revive los mejores momentos capturados en el cielo de Quito.
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="inline-block rounded-full bg-brand-blue/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                      {img.category}
                    </span>
                    <p className="text-sm font-medium text-white">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            ¿Quieres ser parte de nuestra galería?
          </h2>
          <p className="mt-2 text-foreground/60">
            Reserva tu vuelo y crea tus propios momentos inolvidables.
          </p>
          <a
            href="https://wa.me/593998003003"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-green-dark"
          >
            Reservar mi vuelo
          </a>
        </div>
      </section>
    </>
  );
}
