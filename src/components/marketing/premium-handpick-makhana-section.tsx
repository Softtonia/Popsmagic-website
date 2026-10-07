"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TwoStageAddToCart } from "@/components/cart/two-stage-add-to-cart";

export interface PremiumMakhanaProduct {
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

const PREMIUM_MAKHANA_DATA: PremiumMakhanaProduct[] = [
  {
    id: "premium-5-suta-makhana",
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
    id: "premium-6-suta-makhana",
    suta: "6 SUTA",
    title: "6 Suta Makhana",
    description: "Crispy, light and naturally wholesome makhana, carefully selected for everyday snacking.",
    weights: [
      { weight: "100g", price: 149, formattedPrice: "₹149" },
      { weight: "250g", price: 329, formattedPrice: "₹329" },
      { weight: "500g", price: 599, formattedPrice: "₹599" },
    ],
  },
  {
    id: "premium-4-suta-makhana",
    suta: "4 SUTA",
    title: "4 Suta Makhana",
    description: "Crispy, light and naturally wholesome makhana, carefully selected for everyday snacking.",
    weights: [
      { weight: "100g", price: 149, formattedPrice: "₹149" },
      { weight: "250g", price: 329, formattedPrice: "₹329" },
      { weight: "500g", price: 599, formattedPrice: "₹599" },
    ],
  },
];

export function PremiumHandpickMakhanaSection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedWeightIndices, setSelectedWeightIndices] = useState<Record<string, number>>({
    "premium-5-suta-makhana": 0,
    "premium-6-suta-makhana": 0,
    "premium-4-suta-makhana": 0,
  });

  const handleWeightSelect = (productId: string, weightIdx: number) => {
    setSelectedWeightIndices((prev) => ({
      ...prev,
      [productId]: weightIdx,
    }));
  };

  const filteredProducts = PREMIUM_MAKHANA_DATA.filter((item) => {
    if (activeFilter === "ALL") return true;
    return item.suta === activeFilter;
  });

  return (
    <section className="relative w-full bg-[#FAF1E4] dark:bg-[#13100c] text-[#3D1804] dark:text-amber-100 py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#ebdcca] dark:border-amber-950/40">
      
      {/* Decorative Organic Wave & Dappled Background Graphics */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(243, 226, 207, 0.9) 0%, transparent 50%),
                            radial-gradient(circle at 90% 80%, rgba(240, 220, 195, 0.8) 0%, transparent 60%)`,
        }}
      />

      {/* Floating Background Makhana Seeds Visuals */}
      <div className="absolute top-8 left-4 sm:left-12 text-3xl sm:text-5xl opacity-80 pointer-events-none transform -rotate-12 animate-pulse">
        🍿
      </div>
      <div className="absolute top-12 right-6 sm:right-16 text-4xl sm:text-6xl opacity-80 pointer-events-none transform rotate-12">
        🍿
      </div>
      <div className="absolute bottom-16 left-6 text-3xl sm:text-5xl opacity-70 pointer-events-none transform rotate-45">
        🍿
      </div>
      <div className="absolute bottom-8 right-8 text-4xl sm:text-5xl opacity-70 pointer-events-none transform -rotate-12">
        🍿
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          
          {/* Subheader Brand Tag */}
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#3D1804] dark:text-amber-300 uppercase block">
            POPSMAGIC
          </span>

          {/* Main Title Header */}
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold font-playfair tracking-tight text-[#3D1804] dark:text-white uppercase leading-tight">
            PREMIUM HANDPICK MAKHANA
          </h2>

          {/* Filter Pills Row (4 SUTA | 5 SUTA | 6 SUTA) */}
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
                      ? "bg-[#3D1804] text-white dark:bg-amber-400 dark:text-zinc-950 scale-105"
                      : "bg-white text-[#3D1804] hover:bg-amber-50 dark:bg-zinc-800 dark:text-amber-200 border border-[#e8d7c4] dark:border-zinc-700"
                  }`}
                >
                  {sutaGrade}
                </button>
              );
            })}
          </div>

        </div>

        {/* 3-COLUMN PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product) => {
            const currentWeightIdx = selectedWeightIndices[product.id] ?? 0;
            const currentWeightObj = product.weights[currentWeightIdx];

            return (
              <div
                key={product.id}
                className="rounded-[2.2rem] bg-[#F7ECD9] dark:bg-[#1a1510] border border-[#ebd7c1] dark:border-amber-950/60 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                
                {/* Image Display Box */}
                <div className="relative w-full h-60 sm:h-64 rounded-2xl bg-[#EFE0CB] dark:bg-[#221b14] flex items-center justify-center overflow-hidden border border-[#e2d0ba] dark:border-zinc-800 p-4">
                  
                  {/* Floating Makhana Details in Background */}
                  <div className="absolute top-2 left-2 text-sm opacity-40">🍿</div>
                  <div className="absolute bottom-2 right-2 text-sm opacity-40">🍿</div>

                  {/* Packet Artwork Visual */}
                  <div className="relative w-40 h-52 sm:w-44 sm:h-56 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xl flex flex-col justify-between rounded-xl overflow-hidden bg-pink-700 text-white p-3 text-center border-2 border-white/60">
                    
                    {/* Header */}
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

                    {/* Footer badge */}
                    <div className="bg-black/30 py-0.5 rounded-md text-[9px] font-extrabold tracking-wider">
                      <span>{currentWeightObj.weight} PACK</span>
                    </div>

                  </div>

                </div>

                {/* Card Info & Controls */}
                <div className="mt-5 space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#3D1804] dark:text-amber-100 tracking-tight">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm font-medium text-[#5C3217] dark:text-amber-200/80 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Weight Selector Pills (100g, 250g, 500g) */}
                  <div className="space-y-4 pt-1">
                    
                    <div className="flex items-center gap-2">
                      {product.weights.map((w, idx) => {
                        const isWeightActive = currentWeightIdx === idx;

                        return (
                          <button
                            key={w.weight}
                            type="button"
                            onClick={() => handleWeightSelect(product.id, idx)}
                            className={`px-4 py-1.5 rounded-full text-xs font-black transition-all duration-200 ${
                              isWeightActive
                                ? "bg-[#3D1804] text-white shadow-sm scale-105"
                                : "bg-white text-[#3D1804] hover:bg-amber-100 border border-[#e5d4c1] dark:bg-zinc-800 dark:text-amber-200 dark:border-zinc-700"
                            }`}
                          >
                            {w.weight}
                          </button>
                        );
                      })}
                    </div>

                    {/* Price Display */}
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-[#3D1804] dark:text-amber-100 tracking-tight">
                        {currentWeightObj.formattedPrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="pt-1">
                      <TwoStageAddToCart
                        productId={`${product.id}-${currentWeightObj.weight}`}
                        productName={`${product.title} (${currentWeightObj.weight})`}
                        price={currentWeightObj.price}
                        label="Add to Cart"
                        btnClass="w-full bg-[#3D1804] hover:bg-[#2B1003] text-white font-black text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                      />
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
