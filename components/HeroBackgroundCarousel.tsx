"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/hero-principal.png",
    alt: "Vuelo en parapente sobre los valles andinos de Quito",
    position: "object-center",
  },
  {
    src: "/images/hero/Hero(1).png",
    alt: "Vuelo biplaza panorámico con vista al cielo y la ciudad",
    position: "object-[center_60%]",
  },
  {
    src: "/images/hero/Hero(4).png",
    alt: "Atardecer mágico en vuelo de parapente con el sol sobre las nubes",
    position: "object-[center_35%]",
  },
  {
    src: "/images/hero/Hero(3).png",
    alt: "Aventura de vuelo libre sobre el mar de nubes al amanecer",
    position: "object-[center_60%]",
  },
];

export default function HeroBackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Cambia cada 5 segundos aproximadamente

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Carrusel de Imágenes con efecto Ken Burns y Fade ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heroImages.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index <= 1} // Precargar las primeras dos imágenes para evitar parpadeo y optimizar LCP
                sizes="100vw"
                className={`object-cover transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                } ${image.position}`}
              />
            </div>
          );
        })}
      </div>

      {/* ── Tratamiento visual (Overlay oscuro con degradado y viñeta) ── */}
      <div className="absolute inset-0 bg-black/25 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_rgba(0,0,0,0.8)_100%)] z-0 pointer-events-none" />

      {/* ── Indicadores minimalistas inferiores ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-xs pointer-events-none">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-8 bg-brand-turquoise shadow-sm shadow-brand-turquoise/50"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </>
  );
}
