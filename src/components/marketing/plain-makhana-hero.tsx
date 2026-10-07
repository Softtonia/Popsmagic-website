"use client";

import React from "react";
import Image from "next/image";

export function PlainMakhanaHero() {
  return (
    <section className="relative w-full bg-[#d6ebd2] dark:bg-[#0f1d15] overflow-hidden">
      
      {/* MOBILE HERO BANNER (Portrait view matching attached mobile screenshot) */}
      <div className="w-full relative sm:hidden">
        <Image
          src="/images/plain-makhana-hero-mobile-banner.jpg"
          alt="Plain Makhana Mobile Hero Banner - Gluten Free, Low Fat, Protein Rich, High Fiber - Popsmagic"
          width={1080}
          height={1600}
          priority
          sizes="100vw"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* DESKTOP & TABLET HERO BANNER (Landscape full-width banner) */}
      <div className="w-full relative hidden sm:block">
        <Image
          src="/images/plain-makhana-hero-banner.png"
          alt="Plain Makhana Desktop Hero Banner - Popsmagic"
          width={5760}
          height={2400}
          priority
          sizes="100vw"
          className="w-full h-auto object-cover block"
        />
      </div>

    </section>
  );
}
