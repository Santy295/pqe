"use client";

import React, { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "../lib/constants";
import { SocialIcon } from "./SocialIcon";

export default function FloatingSocialBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide smoothly as soon as the user starts scrolling down
      if (window.scrollY > 30) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[90px] sm:top-[96px] left-0 right-0 z-40 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-end">
        <div
          className={`pointer-events-auto flex items-center gap-1.5 sm:gap-2 rounded-2xl bg-white/85 p-2 sm:p-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition-all duration-500 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
          }`}
        >
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-all duration-300 hover:scale-105 hover:bg-brand-turquoise hover:text-white hover:shadow-sm"
          >
            <SocialIcon name="instagram" size={20} />
          </a>

          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-all duration-300 hover:scale-105 hover:bg-brand-turquoise hover:text-white hover:shadow-sm"
          >
            <SocialIcon name="tiktok" size={20} />
          </a>

          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-all duration-300 hover:scale-105 hover:bg-brand-turquoise hover:text-white hover:shadow-sm"
          >
            <SocialIcon name="facebook" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
