"use client";

import React from "react";
import Image from "next/image";

export function BulkOrderHero() {
  return (
    <section className="relative w-full bg-[#d6ebd2] dark:bg-[#0f1d15] overflow-hidden">
      
      {/* MOBILE HERO BANNER (Portrait view matching attached mobile screenshot) */}
      <div className="w-full relative sm:hidden">
        <Image
          src="/images/bulk-order-hero-mobile-banner.jpg"
          alt="Bulk Order Partner with us Mobile Hero Banner - Popsmagic"
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
          src="/images/bulk_order_hero_banner.png"
          alt="Bulk Order Partner with us Desktop Hero Banner - Popsmagic"
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
