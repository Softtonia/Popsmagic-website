"use client";

import React from "react";
import Image from "next/image";

export function ContactUsHero() {
  return (
    <section className="relative w-full bg-[#d6ebd2] dark:bg-[#0f1d15] overflow-hidden">
      {/* MOBILE HERO BANNER (Portrait view matching attached mobile screenshot) */}
      <div className="w-full relative sm:hidden">
        <Image
          src="/images/contact_us_hero_mobile.png"
          alt="Let's Talk Makhana Mobile Hero Banner - Have a question, feedback or simply want to say hello? We'd love to hear from you."
          width={1024}
          height={918}
          priority
          sizes="100vw"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* DESKTOP & TABLET HERO BANNER (Landscape full-width banner) */}
      <div className="w-full relative hidden sm:block">
        <Image
          src="/images/contact_us_hero_banner.png"
          alt="Let's Talk Makhana Desktop Hero Banner - Have a question, feedback or simply want to say hello? We'd love to hear from you."
          width={2880}
          height={1200}
          priority
          sizes="100vw"
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
}
