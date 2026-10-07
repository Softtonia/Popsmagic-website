"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface VariantInfo {
  weight: "100g" | "250g" | "500g";
  subtitleMobile: string[];
  subtitleDesktop: string;
  price: number;
  formattedPrice: string;
  bgImage: string;
  packetBadgeColor: string;
  packetNetWeightText: string;
  badgeAccent: string;
}

export interface MakhanaSliderData {
  id: "plain-makhana" | "super-premium-makhana";
  badgeTag: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  subTextLine1: string;
  subTextLine2: string;
  variants: VariantInfo[];
}

const SLIDER_DATA: MakhanaSliderData[] = [
  {
    id: "plain-makhana",
    badgeTag: "PURE  •  NUTRITIOUS  •  DELICIOUS",
    titleLine1: "Plain",
    titleLine2: "Makhana",
    tagline: "Simple. Pure. Powerful",
    subTextLine1: "The pure goodness of nature,",
    subTextLine2: "in every crunchy bite!",
    variants: [
      {
        weight: "100g",
        subtitleMobile: ["Perfect for", "everyday", "snacking"],
        subtitleDesktop: "Perfect for everyday snacking",
        price: 149,
        formattedPrice: "₹149",
        bgImage: "/images/plain_makhana_100g_bg.jpg",
        packetBadgeColor: "bg-[#d81b60]",
        packetNetWeightText: "100g",
        badgeAccent: "#d81b60",
      },
      {
        weight: "250g",
        subtitleMobile: ["More Crunch,", "more good-", "ness"],
        subtitleDesktop: "More Crunch, more goodness",
        price: 329,
        formattedPrice: "₹329",
        bgImage: "/images/plain_makhana_250g_bg.jpg",
        packetBadgeColor: "bg-[#ad1457]",
        packetNetWeightText: "250g",
        badgeAccent: "#ad1457",
      },
      {
        weight: "500g",
        subtitleMobile: ["Bigger pack,", "more smiles"],
        subtitleDesktop: "Bigger pack, more smiles",
        price: 599,
        formattedPrice: "₹599",
        bgImage: "/images/plain_makhana_500g_bg.jpg",
        packetBadgeColor: "bg-[#880e4f]",
        packetNetWeightText: "500g",
        badgeAccent: "#880e4f",
      },
    ],
  },
  {
    id: "super-premium-makhana",
    badgeTag: "PURE  •  NUTRITIOUS  •  DELICIOUS",
    titleLine1: "Super Premium",
    titleLine2: "Makhana",
    tagline: "Rich. Crunch. Royal",
    subTextLine1: "Selected extra-large jumbo foxnuts,",
    subTextLine2: "handpicked for ultimate crunch!",
    variants: [
      {
        weight: "100g",
        subtitleMobile: ["Perfect for", "everyday", "snacking"],
        subtitleDesktop: "Perfect for everyday snacking",
        price: 189,
        formattedPrice: "₹189",
        bgImage: "/images/plain_makhana_100g_bg.jpg",
        packetBadgeColor: "bg-[#4a148c]",
        packetNetWeightText: "100g",
        badgeAccent: "#4a148c",
      },
      {
        weight: "250g",
        subtitleMobile: ["More Crunch,", "more good-", "ness"],
        subtitleDesktop: "More Crunch, more goodness",
        price: 399,
        formattedPrice: "₹399",
        bgImage: "/images/plain_makhana_250g_bg.jpg",
        packetBadgeColor: "bg-[#311b92]",
        packetNetWeightText: "250g",
        badgeAccent: "#311b92",
      },
      {
        weight: "500g",
        subtitleMobile: ["Bigger pack,", "more smiles"],
        subtitleDesktop: "Bigger pack, more smiles",
        price: 699,
        formattedPrice: "₹699",
        bgImage: "/images/plain_makhana_500g_bg.jpg",
        packetBadgeColor: "bg-[#1a237e]",
        packetNetWeightText: "500g",
        badgeAccent: "#1a237e",
      },
    ],
  },
];

export function PlainAndPremiumMakhanaSliderSection() {
  const [activeSliderIdx, setActiveSliderIdx] = useState<number>(0);
  const [selectedVariantIndices, setSelectedVariantIndices] = useState<Record<number, number>>({
    0: 0, // Plain Makhana default 100g
    1: 0, // Super Premium Makhana default 100g
  });

  const currentSlider = SLIDER_DATA[activeSliderIdx];
  const activeVariantIdx = selectedVariantIndices[activeSliderIdx] ?? 0;
  const activeVariant = currentSlider.variants[activeVariantIdx];

  const handlePrevSlider = () => {
    setActiveSliderIdx((prev) => (prev === 0 ? SLIDER_DATA.length - 1 : prev - 1));
  };

  const handleNextSlider = () => {
    setActiveSliderIdx((prev) => (prev === SLIDER_DATA.length - 1 ? 0 : prev + 1));
  };

  const handleSelectVariant = (variantIdx: number) => {
    setSelectedVariantIndices((prev) => ({
      ...prev,
      [activeSliderIdx]: variantIdx,
    }));
  };

  return (
    <section className="relative w-full bg-[#FAF5EC] dark:bg-[#0f1915] text-[#0A392B] dark:text-zinc-100 overflow-hidden py-6 sm:py-12 lg:py-16 border-b border-[#e8dfce]/80 dark:border-zinc-800 transition-colors duration-500">
      
      {/* Background Image Layer per active Variant & Slider */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 opacity-20 dark:opacity-30">
        <Image
          src={activeVariant.bgImage}
          alt={`${currentSlider.titleLine1} ${currentSlider.titleLine2} ${activeVariant.weight} background`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EC] via-[#FAF5EC]/85 to-transparent dark:from-[#0f1915] dark:via-[#0f1915]/90 dark:to-transparent" />
      </div>

      {/* Dappled Sunlight Leaf Shadows Effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(10,57,43,0.08) 0%, transparent 70%), 
                            radial-gradient(ellipse at 80% 70%, rgba(10,57,43,0.05) 0%, transparent 60%)`,
        }}
      />

      {/* Main Container */}
      <div className="container relative z-10 mx-auto px-3 sm:px-8 lg:px-12">
        
        {/* Slider Nav Arrows */}
        <button
          type="button"
          onClick={handlePrevSlider}
          className="absolute left-1 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-zinc-800/90 text-[#0A392B] dark:text-emerald-400 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 border border-black/5 dark:border-zinc-700"
          aria-label="Previous Makhana Category"
        >
          <svg className="w-5 h-5 sm:w-7 sm:h-7 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNextSlider}
          className="absolute right-1 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-zinc-800/90 text-[#0A392B] dark:text-emerald-400 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 border border-black/5 dark:border-zinc-700"
          aria-label="Next Makhana Category"
        >
          <svg className="w-5 h-5 sm:w-7 sm:h-7 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* HEADER BLOCK: Tagline, Main Title, Gold Script & Description */}
        <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-6 pl-1 sm:pl-0">
          
          {/* Top Category Tagline */}
          <div>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#0A392B] dark:text-emerald-400 uppercase">
              {currentSlider.badgeTag}
            </span>
          </div>

          {/* Main Title Header (Serif) */}
          <div className="space-y-0 sm:space-y-0.5">
            <h1 className="text-3xl sm:text-6xl lg:text-[70px] font-bold font-playfair tracking-tight text-[#0A392B] dark:text-white leading-[1.08]">
              {currentSlider.titleLine1}
            </h1>
            <h1 className="text-3xl sm:text-6xl lg:text-[70px] font-bold font-playfair tracking-tight text-[#0A392B] dark:text-white leading-[1.08]">
              {currentSlider.titleLine2}
            </h1>
            
            {/* Gold Script Tagline */}
            <p className="font-script text-2xl sm:text-4xl lg:text-[44px] text-[#D79B49] dark:text-amber-400 pt-0.5 font-semibold leading-tight">
              {currentSlider.tagline}
            </p>
          </div>

          {/* Sub-description paragraph */}
          <div className="text-xs sm:text-base font-medium text-[#0A392B]/90 dark:text-zinc-300 space-y-0.5 max-w-lg leading-snug sm:leading-relaxed">
            <p>{currentSlider.subTextLine1}</p>
            <p>{currentSlider.subTextLine2}</p>
          </div>

        </div>

        {/* 2-COLUMN STAGGERED GRID ON MOBILE (Icons + CTA on Left, Packet + Scene on Right) */}
        <div className="grid grid-cols-12 gap-2 sm:gap-8 items-end">
          
          {/* LEFT COLUMN: 2x2 Feature Icons + SHOP NOW Button */}
          <div className="col-span-5 sm:col-span-6 space-y-4 sm:space-y-6 pt-1">
            
            {/* 4 Feature Circular Badges: 2x2 Grid on Mobile, Flex Row on Desktop */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:flex sm:items-center sm:gap-6 lg:gap-8 max-w-[200px] sm:max-w-none">
              
              {/* 1. 100% Natural */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#0A392B] dark:border-emerald-500/80 flex items-center justify-center text-[#0A392B] dark:text-emerald-400 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-xs shadow-xs group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 2 6.5 5 8 1.5-3.5 4-6 7.5-6.5C18 13 21 9 22 4c-4.5 0-8.5 2.5-10 6-1-1.5-2.5-2.5-4-3" />
                    <path d="M12 12v9" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0A392B] dark:text-zinc-200 mt-1 sm:mt-2 leading-tight">
                  100%<br />Natural
                </span>
              </div>

              {/* 2. Gluten Free */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#0A392B] dark:border-emerald-500/80 flex items-center justify-center text-[#0A392B] dark:text-emerald-400 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-xs shadow-xs group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <path d="M12 2v20M8 6l4-2 4 2M7 10l5-2 5 2M6 14l6-2 6 2M7 18l5-2 5 2" />
                    <line x1="3" y1="3" x2="21" y2="21" className="stroke-[2.5]" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0A392B] dark:text-zinc-200 mt-1 sm:mt-2 leading-tight">
                  Gluten<br />Free
                </span>
              </div>

              {/* 3. High in Protein */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#0A392B] dark:border-emerald-500/80 flex items-center justify-center text-[#0A392B] dark:text-emerald-400 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-xs shadow-xs group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <path d="M6.5 6.5h11M6.5 17.5h11M4 9h16v6H4zM2 10.5h2v3H2zM20 10.5h2v3h-2z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0A392B] dark:text-zinc-200 mt-1 sm:mt-2 leading-tight">
                  High in<br />Protein
                </span>
              </div>

              {/* 4. Low in Calories */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#0A392B] dark:border-emerald-500/80 flex items-center justify-center text-[#0A392B] dark:text-emerald-400 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-xs shadow-xs group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0A392B] dark:text-zinc-200 mt-1 sm:mt-2 leading-tight">
                  Low in<br />Calories
                </span>
              </div>

            </div>

            {/* SHOP NOW Button */}
            <div className="pt-2 sm:pt-3">
              <Link
                href="#shop"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#0A392B] hover:bg-[#06291e] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold text-[10px] sm:text-sm tracking-wider uppercase px-4 sm:px-8 py-2.5 sm:py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              >
                <span>SHOP NOW</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Product Packet Visual & Floating Cloud Badge */}
          <div className="col-span-7 sm:col-span-6 relative flex flex-col items-center justify-end min-h-[260px] sm:min-h-[440px]">
            
            {/* Green Cloud Callout Badge ("Available in 100g/250g/500g") */}
            <div className="absolute top-0 right-1 sm:right-12 z-20">
              <div className="relative">
                
                {/* Cloud Shape Container */}
                <div className="bg-[#0A392B] dark:bg-emerald-900 text-white px-3 sm:px-5 py-1.5 sm:py-3 rounded-[1.6rem] sm:rounded-[2.2rem] shadow-xl border border-emerald-700/50 flex flex-col items-center justify-center rotate-[-4deg] transform hover:scale-105 transition-transform">
                  <span className="text-[9px] sm:text-xs font-medium tracking-wide text-white/90">
                    Available in
                  </span>
                  <span className="text-base sm:text-2xl font-black tracking-tight leading-none mt-0.5">
                    {activeVariant.weight}
                  </span>
                </div>

                {/* Hand-drawn Arrow SVG pointing from Cloud Badge to Packet */}
                <svg 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-7 h-7 sm:w-10 sm:h-10 text-[#0A392B] dark:text-emerald-400 stroke-current fill-none stroke-[2]" 
                  viewBox="0 0 40 40"
                >
                  <path d="M30 5 Q 15 15, 8 30" strokeDasharray="3 3" />
                  <path d="M5 24 L 8 30 L 14 27" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            </div>

            {/* Central Product Scene Container */}
            <div className="relative w-full max-w-xs sm:max-w-lg aspect-4/3 flex items-center justify-center pt-6 sm:pt-0">
              
              {/* Product Foil Pouch Art Component */}
              <div className="relative z-10 w-36 sm:w-64 lg:w-72 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                
                {/* Pouch Header Pattern */}
                <div className={`${activeVariant.packetBadgeColor} p-2 sm:p-3 text-white flex items-center justify-between`}>
                  <span className="text-[7px] sm:text-[9px] font-black uppercase tracking-widest bg-yellow-400 text-black px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs">
                    PREMIUM QUALITY
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-extrabold tracking-wider bg-black/30 px-1.5 sm:px-2 py-0.5 rounded-full">
                    Net Wt. {activeVariant.packetNetWeightText}
                  </span>
                </div>

                {/* Main Packet Body */}
                <div className="bg-white dark:bg-zinc-900 p-2.5 sm:p-5 text-center flex flex-col items-center border-x-2 border-b-2 border-pink-600/30">
                  
                  {/* Brand Header */}
                  <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-amber-500 text-white font-black text-[8px] sm:text-[10px] flex items-center justify-center border border-white shadow-xs">
                      👳
                    </div>
                    <span className="text-base sm:text-2xl font-black font-serif tracking-tight text-[#0A392B] dark:text-emerald-400">
                      popsmagic
                    </span>
                  </div>

                  {/* Product Title */}
                  <div className="my-0.5 sm:my-1">
                    <span className="text-[8px] sm:text-[10px] font-extrabold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase block">
                      Superfood
                    </span>
                    <h3 className="text-lg sm:text-3xl font-black font-playfair tracking-tight text-zinc-900 dark:text-white leading-none">
                      Makhana
                    </h3>
                    <span className="inline-block bg-zinc-900 text-white text-[7px] sm:text-[9px] font-extrabold tracking-widest px-1.5 sm:px-2 py-0.5 rounded-full uppercase mt-0.5 sm:mt-1">
                      FOXNUTS
                    </span>
                  </div>

                  {/* Makhana Window Visual */}
                  <div className="w-24 h-18 sm:w-44 sm:h-32 my-1.5 sm:my-3 rounded-full bg-amber-50 dark:bg-zinc-800 border sm:border-2 border-amber-200 dark:border-zinc-700 flex items-center justify-center overflow-hidden relative shadow-inner p-1 sm:p-2">
                    <div className="text-2xl sm:text-5xl transform group-hover:scale-110 transition-transform">
                      🍿
                    </div>
                    <div className="absolute bottom-0.5 left-1 text-[9px] sm:text-xs">🪷</div>
                    <div className="absolute bottom-0.5 right-1 text-[9px] sm:text-xs">🪷</div>
                  </div>

                  {/* Packet Feature Pills */}
                  <div className="flex items-center justify-center gap-1 flex-wrap w-full pt-0.5">
                    <span className="text-[7px] sm:text-[9px] font-bold bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 px-1.5 sm:px-2 py-0.5 rounded-full">
                      Low Fat
                    </span>
                    <span className="text-[7px] sm:text-[9px] font-bold bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 px-1.5 sm:px-2 py-0.5 rounded-full">
                      Gluten Free
                    </span>
                    <span className="text-[7px] sm:text-[9px] font-bold bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 px-1.5 sm:px-2 py-0.5 rounded-full">
                      High Fiber
                    </span>
                  </div>

                </div>
              </div>

              {/* Wooden Bowl of Popped Makhana Graphic */}
              <div className="absolute -right-3 sm:-right-8 bottom-0 z-10 w-28 sm:w-52 h-24 sm:h-48 rounded-full bg-amber-900/10 dark:bg-amber-950/20 backdrop-blur-xs flex items-center justify-center">
                <div className="text-4xl sm:text-7xl filter drop-shadow-xl transform translate-y-1 sm:translate-y-2">
                  🥣
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FLOATING CARD: Variant Selector (100g | 250g | 500g) */}
        <div className="mt-5 sm:mt-12 flex justify-center">
          <div className="bg-[#F4ECE1]/95 dark:bg-[#15241d]/95 backdrop-blur-md rounded-[1.6rem] sm:rounded-[2.5rem] border border-[#E5DAC8] dark:border-emerald-950/60 p-1.5 sm:p-2.5 shadow-2xl z-30 max-w-2xl w-full grid grid-cols-3 gap-1 sm:flex sm:items-center sm:gap-2">
            
            {currentSlider.variants.map((variant, idx) => {
              const isActive = activeVariantIdx === idx;

              return (
                <button
                  key={variant.weight}
                  type="button"
                  onClick={() => handleSelectVariant(idx)}
                  className={`flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-3 rounded-[1.4rem] sm:rounded-full transition-all duration-300 text-left ${
                    isActive
                      ? "bg-[#0A392B] dark:bg-emerald-600 text-white shadow-lg scale-[1.02]"
                      : "hover:bg-[#EAE0CF] dark:hover:bg-zinc-800 text-[#0A392B] dark:text-zinc-200"
                  }`}
                >
                  {/* Thumbnail Packet Visual */}
                  <div className="w-6 h-8 sm:w-10 sm:h-12 rounded-md sm:rounded-lg bg-pink-600/90 text-white flex flex-col items-center justify-center shadow-xs shrink-0 overflow-hidden border border-white/40">
                    <span className="text-[6px] sm:text-[7px] font-black uppercase tracking-tighter">
                      POPS
                    </span>
                    <span className="text-[10px] sm:text-xs">🍿</span>
                  </div>

                  {/* Weight Title & Description */}
                  <div className="min-w-0 pr-0.5">
                    <h4 className="text-xs sm:text-base font-black tracking-tight leading-tight">
                      {variant.weight}
                    </h4>
                    
                    {/* Mobile 3-line wrapped subtitle matching mobile reference image */}
                    <div className={`text-[9px] sm:text-[11px] font-medium leading-tight sm:hidden ${
                      isActive ? "text-white/90" : "text-[#0A392B]/80 dark:text-zinc-400"
                    }`}>
                      {variant.subtitleMobile.map((line, i) => (
                        <span key={i} className="block whitespace-nowrap">
                          {line}
                        </span>
                      ))}
                    </div>

                    {/* Desktop single line subtitle */}
                    <p className={`hidden sm:block text-[11px] font-medium leading-tight truncate ${
                      isActive ? "text-white/90" : "text-[#0A392B]/80 dark:text-zinc-400"
                    }`}>
                      {variant.subtitleDesktop}
                    </p>
                  </div>
                </button>
              );
            })}

          </div>
        </div>

      </div>

    </section>
  );
}
