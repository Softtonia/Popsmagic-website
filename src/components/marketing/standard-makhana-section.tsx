"use client";

import React, { useState } from "react";
import { TwoStageAddToCart } from "@/components/cart/two-stage-add-to-cart";

export interface StandardMakhanaItem {
  id: string;
  suta: "4 SUTA" | "5 SUTA" | "6 SUTA";
  title: string;
  description: string;
  weights: {
    weight: "100g" | "250g" | "500g";
    price: number;
    formattedPrice: string;
  }[];
}

const STANDARD_MAKHANA_DATA: StandardMakhanaItem[] = [
  {
    id: "4-suta-makhana",
    suta: "4 SUTA",
    title: "4 Suta Makhana",
    description: "Crispy, light and naturally wholesome makhana, carefully selected for everyday snacking.",
    weights: [
      { weight: "100g", price: 149, formattedPrice: "₹149" },
      { weight: "250g", price: 329, formattedPrice: "₹329" },
      { weight: "500g", price: 599, formattedPrice: "₹599" },
    ],
  },
  {
    id: "5-suta-makhana",
    suta: "5 SUTA",
    title: "5 Suta Makhana",
    description: "Crispy, light and naturally wholesome makhana, carefully selected for everyday snacking.",
    weights: [
      { weight: "100g", price: 149, formattedPrice: "₹149" },
      { weight: "250g", price: 329, formattedPrice: "₹329" },
      { weight: "500g", price: 599, formattedPrice: "₹599" },
    ],
  },
  {
    id: "6-suta-makhana",
    suta: "6 SUTA",
    title: "6 Suta Makhana",
    description: "Crispy, light and naturally wholesome makhana, carefully selected for everyday snacking.",
    weights: [
      { weight: "100g", price: 149, formattedPrice: "₹149" },
      { weight: "250g", price: 329, formattedPrice: "₹329" },
      { weight: "500g", price: 599, formattedPrice: "₹599" },
    ],
  },
];

export function StandardMakhanaSection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({
    "4-suta-makhana": 0,
    "5-suta-makhana": 0,
    "6-suta-makhana": 0,
  });

  const handleWeightChange = (itemId: string, weightIndex: number) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [itemId]: weightIndex,
    }));
  };

  const filteredItems = STANDARD_MAKHANA_DATA.filter((item) => {
    if (activeFilter === "ALL") return true;
    return item.suta === activeFilter;
  });

  return (
    <section className="relative w-full bg-[#FAF6EE] dark:bg-[#0b1410] py-10 sm:py-16 lg:py-20 overflow-hidden border-b border-[#e8dfce]/80 dark:border-zinc-800">
      
      {/* Full-width Organic Pale Green Backdrop Canvas */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8 relative">
        
        <div className="relative rounded-[2.5rem] bg-[#EAF2E4] dark:bg-[#13231a] p-5 sm:p-10 lg:p-12 border border-[#d6e5cc] dark:border-emerald-950/80 shadow-xs overflow-hidden">
          
          {/* Organic Wave Radial Backdrop Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply dark:mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 15%, rgba(214, 232, 204, 0.9) 0%, transparent 55%),
                                radial-gradient(circle at 85% 85%, rgba(200, 224, 188, 0.8) 0%, transparent 55%)`,
            }}
          />

          {/* Floating Makhana Pops & Leaf Accents - Positioned to match reference image */}
          {/* Top-Left Floating Makhana Pop */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-6 text-4xl sm:text-6xl opacity-95 pointer-events-none transform -rotate-12 filter drop-shadow-md animate-pulse">
            🍿
          </div>

          {/* Top-Right Floating Makhana Pop with Leaf */}
          <div className="absolute top-5 right-4 sm:top-8 sm:right-10 text-4xl sm:text-6xl opacity-95 pointer-events-none transform rotate-12 filter drop-shadow-md">
            🍿
          </div>
          <div className="absolute top-2 right-2 text-2xl opacity-80 pointer-events-none transform rotate-45">
            🍃
          </div>

          {/* Right Edge Mid-Height Accents */}
          <div className="absolute top-1/2 -right-3 text-3xl opacity-70 pointer-events-none transform rotate-45">
            🍃
          </div>
          <div className="absolute top-1/2 right-4 text-2xl opacity-60 pointer-events-none">
            🍿
          </div>

          {/* Left Edge Mid-Height Accent */}
          <div className="absolute top-1/2 left-2 text-2xl opacity-60 pointer-events-none">
            🍿
          </div>

          {/* Bottom Floating Accents */}
          <div className="absolute bottom-6 left-4 sm:left-8 text-3xl sm:text-4xl opacity-80 pointer-events-none transform -rotate-45">
            🍿
          </div>
          <div className="absolute bottom-4 right-6 sm:right-12 text-4xl sm:text-5xl opacity-90 pointer-events-none transform rotate-12 filter drop-shadow-sm">
            🍿
          </div>
          <div className="absolute bottom-2 left-10 text-2xl opacity-70 pointer-events-none">
            🍃
          </div>

          {/* HEADER BLOCK */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12 relative z-10">
            
            {/* Subheader Tag */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.25em] text-[#05382B] dark:text-emerald-400 uppercase block">
              POPSMAGIC
            </span>

            {/* Main Header */}
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold font-playfair tracking-tight text-[#05382B] dark:text-white uppercase leading-tight">
              STANDARD MAKHANA
            </h2>

            {/* Filter Tabs: 4 SUTA | 5 SUTA | 6 SUTA */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 pt-4 flex-wrap">
              {["4 SUTA", "5 SUTA", "6 SUTA"].map((sutaGrade) => {
                const isActive = activeFilter === sutaGrade;

                return (
                  <button
                    key={sutaGrade}
                    type="button"
                    onClick={() => setActiveFilter(activeFilter === sutaGrade ? "ALL" : sutaGrade)}
                    className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-200 shadow-md ${
                      isActive
                        ? "bg-[#05382B] text-white dark:bg-emerald-400 dark:text-zinc-950 scale-105"
                        : "bg-white text-[#05382B] hover:bg-emerald-50 dark:bg-zinc-800 dark:text-emerald-200 border border-[#d2e2c7] dark:border-zinc-700"
                    }`}
                  >
                    {sutaGrade}
                  </button>
                );
              })}
            </div>

          </div>

          {/* 3-COLUMN PRODUCT CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 max-w-7xl mx-auto">
            {filteredItems.map((item) => {
              const currentWeightIdx = selectedWeights[item.id] ?? 0;
              const currentWeightObj = item.weights[currentWeightIdx];

              return (
                <div
                  key={item.id}
                  className="rounded-[2.2rem] bg-[#F4F8EE] dark:bg-[#16271e] border border-[#dce8d3] dark:border-zinc-800 p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                >
                  
                  {/* Card Product Visual Box */}
                  <div className="relative w-full h-60 sm:h-68 rounded-2xl bg-[#E6EFE0] dark:bg-[#122018] flex items-center justify-center overflow-hidden border border-[#d4e4cb] dark:border-zinc-800 p-4 shadow-inner">
                    
                    {/* Background Seeds */}
                    <div className="absolute top-2 left-2 text-sm opacity-40">🍿</div>
                    <div className="absolute bottom-2 right-2 text-sm opacity-40">🍿</div>

                    {/* Product Foil Pouch Visual */}
                    <div className="relative w-40 h-52 sm:w-44 sm:h-56 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xl flex flex-col justify-between rounded-xl overflow-hidden bg-pink-700 text-white p-3 text-center border-2 border-white/60">
                      
                      {/* Pouch Header */}
                      <div className="space-y-0.5">
                        <span className="text-[8px] font-black uppercase tracking-widest bg-yellow-400 text-black px-1.5 py-0.5 rounded-full inline-block">
                          PREMIUM QUALITY
                        </span>
                        <h4 className="text-sm font-black font-serif tracking-tight mt-0.5 leading-tight">
                          popsmagic <br /> Superfood Makhana
                        </h4>
                        <span className="text-[8px] uppercase font-bold tracking-wider bg-black/30 px-2 py-0.5 rounded-full inline-block mt-0.5">
                          FOXNUTS
                        </span>
                      </div>

                      {/* Window Visual */}
                      <div className="w-20 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center text-3xl shadow-inner my-1">
                        🍿
                      </div>

                      {/* Footer Badge */}
                      <div className="bg-black/30 py-0.5 rounded-md text-[9px] font-extrabold tracking-wider">
                        <span>{currentWeightObj.weight} PACK</span>
                      </div>

                    </div>
                  </div>

                  {/* Card Details & Add to Cart Controls */}
                  <div className="mt-5 space-y-4 flex-1 flex flex-col justify-between">
                    
                    <div>
                      {/* Product Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#05382B] dark:text-zinc-100 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Product Description */}
                      <p className="text-xs sm:text-sm font-medium text-[#05382B]/85 dark:text-zinc-300 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Weight Selection Pills (100g, 250g, 500g) */}
                    <div className="space-y-4 pt-1">
                      
                      <div className="flex items-center gap-2">
                        {item.weights.map((w, idx) => {
                          const isWeightActive = currentWeightIdx === idx;

                          return (
                            <button
                              key={w.weight}
                              type="button"
                              onClick={() => handleWeightChange(item.id, idx)}
                              className={`px-4 py-1.5 rounded-full text-xs font-black transition-all duration-200 ${
                                isWeightActive
                                  ? "bg-[#05382B] text-white shadow-sm scale-105"
                                  : "bg-white text-[#05382B] hover:bg-emerald-50 border border-[#d5e4cc] dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700"
                              }`}
                            >
                              {w.weight}
                            </button>
                          );
                        })}
                      </div>

                      {/* Price Display */}
                      <div>
                        <span className="text-2xl sm:text-3xl font-black text-[#05382B] dark:text-zinc-100 tracking-tight">
                          {currentWeightObj.formattedPrice}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <div className="pt-1">
                        <TwoStageAddToCart
                          productId={`${item.id}-${currentWeightObj.weight}`}
                          productName={`${item.title} (${currentWeightObj.weight})`}
                          price={currentWeightObj.price}
                          label="Add to Cart"
                          btnClass="w-full bg-[#05382B] hover:bg-[#03281f] text-white font-black text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                        />
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
