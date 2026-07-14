import Image from "next/image";
import type { Metadata } from "next";

// Static imports automatically get width/height and blurDataURL from Next.js
import img1 from "@/public/images/gallery/img1.jpg";
import img2 from "@/public/images/gallery/img2.jpg";
import img3 from "@/public/images/gallery/img3.jpg";
import img4 from "@/public/images/gallery/img4.jpg";
import img5 from "@/public/images/gallery/img5.jpg";
import img6 from "@/public/images/gallery/img6.jpg";
import img7 from "@/public/images/gallery/img7.jpg";
import img8 from "@/public/images/gallery/img8.jpg";
import img9 from "@/public/images/gallery/img9.jpg";
import img10 from "@/public/images/gallery/img10.jpg";
import img11 from "@/public/images/gallery/img11.jpg";
import img12 from "@/public/images/gallery/img12.jpg";
import img13 from "@/public/images/gallery/img13.jpg";
import img14 from "@/public/images/gallery/img14.jpg";
import img15 from "@/public/images/gallery/img15.jpg";
import img16 from "@/public/images/gallery/img16.jpg";
import img17 from "@/public/images/gallery/img17.jpg";

export const metadata: Metadata = {
  title: "Galería | PQE Vuelos en Parapente",
  description:
    "Explora fotos y momentos increíbles de los vuelos en parapente de PQE sobre los cielos de Quito, Ecuador.",
};

const images = [
  { src: img1, alt: "Celebración especial de cumpleaños", category: "Eventos" },
  { src: img10, alt: "Vuelo en pareja con cielo despejado", category: "En vuelo" },
  { src: img15, alt: "Vuelo sobre el bosque y la ciudad", category: "En vuelo" },
  { src: img6, alt: "Propuesta Cásate Conmigo en la montaña", category: "Eventos" },
  { src: img11, alt: "Selfie en parapente sobre la ciudad", category: "En vuelo" },
  { src: img2, alt: "Preparación antes del despegue", category: "Despegue" },
  { src: img16, alt: "Vuelo divertido sobre las nubes", category: "En vuelo" },
  { src: img12, alt: "Atardecer majestuoso con la bandera", category: "Despegue" },
  { src: img7, alt: "Mar de nubes al amanecer", category: "Naturaleza" },
  { src: img3, alt: "Vuelo panorámico sobre la ciudad", category: "Vistas aéreas" },
  { src: img17, alt: "Revelación de género desde el aire", category: "Eventos" },
  { src: img13, alt: "Terapia de vuelo en familia", category: "Despegue" },
  { src: img8, alt: "Vuelo en parapente sobre Quito", category: "En vuelo" },
  { src: img4, alt: "Festejo en la montaña", category: "Eventos" },
  { src: img14, alt: "Aproximación para un aterrizaje suave", category: "Aterrizaje" },
  { src: img9, alt: "Atardecer majestuoso en parapente", category: "Vistas aéreas" },
  { src: img5, alt: "Relajación y vista increíble", category: "Naturaleza" },
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

      {/* ── Gallery Masonry Grid ── */}
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
                  placeholder="blur"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
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
