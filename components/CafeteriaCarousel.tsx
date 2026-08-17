"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/instalaciones/inst-1.jpg",
  "/images/instalaciones/inst-1.jpg",
  "/images/instalaciones/inst-1.jpg",
  "/images/instalaciones/inst-1.jpg",
];

export default function CafeteriaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX = e.targetTouches[0].clientX;
    touchEndX = e.targetTouches[0].clientX;
    setIsPaused(true);
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX = e.targetTouches[0].clientX;
  }

  function handleTouchEnd() {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    if (touchStartX - touchEndX > 50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (touchEndX - touchStartX > 50) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }

  return (
    <div 
      className="relative w-full h-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[400px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Cafetería PQE ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={idx === 0}
          />
        </div>
      ))}
      
      {/* Indicadores discretos */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
