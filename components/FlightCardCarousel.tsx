"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FlightCardCarouselProps {
  images: string[];
  alt: string;
  sizes?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function FlightCardCarousel({
  images,
  alt,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  imageClassName = "",
  priority = false,
}: FlightCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Si el cursor está sobre la tarjeta o hay solo 1 imagen, no iniciar el temporizador
    if (isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia automáticamente cada 4 segundos

    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={`${src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={`${alt} - Foto ${index + 1}`}
              fill
              priority={priority && index === 0}
              sizes={sizes}
              className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName}`}
            />
          </div>
        );
      })}

      {/* ── Indicadores minimalistas inferiores ── */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-xs pointer-events-none">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-5 bg-white shadow-sm"
                  : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
