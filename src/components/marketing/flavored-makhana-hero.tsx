"use client";

import React from "react";
import Image from "next/image";

export function FlavoredMakhanaHero() {
  return (
    <section className="relative w-full bg-[#FAF5EE] dark:bg-[#121c18] overflow-hidden">
      
      {/* MOBILE HERO BANNER (Portrait view matching attached mobile screenshot) */}
      <div className="w-full relative sm:hidden">
        <Image
          src="/images/flavored-makhana-hero-mobile-banner.jpg"
          alt="What's Your Mood Munch Today? - Popsmagic Flavoured Makhana Mobile Hero Banner"
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
          src="/images/flavored_makhana_hero_banner.png"
          alt="What's Your Mood Munch Today? - Popsmagic Flavoured Makhana Hero Banner"
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
