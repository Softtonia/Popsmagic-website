"use client";

import React, { useState } from "react";
import { TwoStageAddToCart } from "@/components/cart/two-stage-add-to-cart";

export interface MoodProductCard {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  price: number;
  weight: string;
  mood: "Spicy" | "Cheesy" | "Herby" | "Sweet";
  bgClass: string;
  btnClass: string;
  emoji: string;
}

export const MOOD_PRODUCTS: MoodProductCard[] = [
  {
    id: "cheese-burst",
    name: "Cheese Burst",
    tagline: "CHEESY VIBES",
    subtitle: "Bold, Cheesy, Crunchy.",
    price: 149,
    weight: "100g",
    mood: "Cheesy",
    bgClass: "bg-[#e6a817]",
    btnClass: "bg-[#05382b] text-white hover:bg-[#03241b]",
    emoji: "🧀",
  },
  {
    id: "tangy-tomato",
    name: "Tangy Tomato",
    tagline: "TOMATO VIBES",
    subtitle: "Real, crunch, kids favourite",
    price: 149,
    weight: "100g",
    mood: "Spicy",
    bgClass: "bg-[#c81e1e]",
    btnClass: "bg-[#FAF6EE] text-[#05382b] hover:bg-white font-bold",
    emoji: "🍅",
  },
  {
    id: "pudina-magic",
    name: "Pudina Magic",
    tagline: "PUDINA VIBES",
    subtitle: "Mint, light, Crunch",
    price: 149,
    weight: "100g",
    mood: "Herby",
    bgClass: "bg-[#0a4633]",
    btnClass: "bg-[#bef264] text-[#05382b] hover:bg-[#a3e635] font-bold",
    emoji: "🌿",
  },
  {
    id: "peri-peri",
    name: "Peri Peri",
    tagline: "SPICY VIBES",
    subtitle: "Bold, Fiery Flavour, Clean snacking.",
    price: 149,
    weight: "100g",
    mood: "Spicy",
    bgClass: "bg-[#5c0606]",
    btnClass: "bg-[#FAF6EE] text-[#05382b] hover:bg-white font-bold",
    emoji: "🌶️",
  },
  {
    id: "roasted-classic",
    name: "Classic Roasted",
    tagline: "ROASTED VIBES",
    subtitle: "100% Natural, roasted, low calorie.",
    price: 149,
    weight: "100g",
    mood: "Herby",
    bgClass: "bg-[#365e1b]",
    btnClass: "bg-[#d9f99d] text-[#05382b] hover:bg-[#bef264] font-bold",
    emoji: "🍿",
  },
  {
    id: "caramel-bliss",
    name: "Caramel Bliss",
    tagline: "CARAMEL VIBES",
    subtitle: "Crisp, Crunch, Rich caramel.",
    price: 149,
    weight: "100g",
    mood: "Sweet",
    bgClass: "bg-[#4a1d06]",
    btnClass: "bg-[#FAF6EE] text-[#05382b] hover:bg-white font-bold",
    emoji: "🍯",
  },
  {
    id: "cream-onion",
    name: "Cream & Onion",
    tagline: "CREAMY VIBES",
    subtitle: "Crunch, 100% natural, Roasted.",
    price: 149,
    weight: "100g",
    mood: "Herby",
    bgClass: "bg-[#4d7c2a]",
    btnClass: "bg-[#bef264] text-[#05382b] hover:bg-[#a3e635] font-bold",
    emoji: "🧅",
  },
];

export function ChooseYourMoodSection() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const filteredProducts = selectedMood
    ? MOOD_PRODUCTS.filter((p) => p.mood === selectedMood)
    : MOOD_PRODUCTS;

  return (
    <section className="py-14 sm:py-20 bg-[#faf6ee] dark:bg-[#121c18] border-b border-[#e8dfce]/60 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact reference */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#d48b17] uppercase mb-1">
            CHOOSE YOUR MOOD
          </p>
          <h2 className="text-3xl sm:text-5xl font-black font-serif text-[#05382b] dark:text-emerald-400 tracking-tight">
            Choose Your Mood
          </h2>
        </div>

        {/* 4 Mood Icons Filter Bar matching screenshot */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12 flex-wrap">
          {/* Spicy */}
          <button
            onClick={() => setSelectedMood(selectedMood === "Spicy" ? null : "Spicy")}
            className={`flex flex-col items-center gap-1 group transition ${
              selectedMood === "Spicy" ? "scale-110" : "hover:scale-105"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#c81e1e] text-white flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition">
              🌶️
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#c81e1e] dark:text-red-400">
              Spicy
            </span>
          </button>

          {/* Cheesy */}
          <button
            onClick={() => setSelectedMood(selectedMood === "Cheesy" ? null : "Cheesy")}
            className={`flex flex-col items-center gap-1 group transition ${
              selectedMood === "Cheesy" ? "scale-110" : "hover:scale-105"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e6a817] text-white flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition">
              🧀
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#d48b17] dark:text-amber-400">
              Cheesy
            </span>
          </button>

          {/* Herby */}
          <button
            onClick={() => setSelectedMood(selectedMood === "Herby" ? null : "Herby")}
            className={`flex flex-col items-center gap-1 group transition ${
              selectedMood === "Herby" ? "scale-110" : "hover:scale-105"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#2d5016] text-white flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition">
              🌿
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2d5016] dark:text-emerald-400">
              Herby
            </span>
          </button>

          {/* Sweet */}
          <button
            onClick={() => setSelectedMood(selectedMood === "Sweet" ? null : "Sweet")}
            className={`flex flex-col items-center gap-1 group transition ${
              selectedMood === "Sweet" ? "scale-110" : "hover:scale-105"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#4a1d06] text-white flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition">
              🍯
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#4a1d06] dark:text-amber-600">
              Sweet
            </span>
          </button>
        </div>

        {/* 7 Horizontal Banner Product Cards matching reference screenshot */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProducts.map((card) => (
            <div
              key={card.id}
              className={`w-full rounded-3xl p-6 sm:p-10 ${card.bgClass} text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:scale-[1.008] transition-all duration-300`}
            >
              {/* Left Column: Product Information & Two-Stage SHOP NOW Button */}
              <div className="w-full md:w-6/12 z-10 flex flex-col justify-between items-start h-full space-y-4">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] opacity-90 uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
                    {card.tagline}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-black font-serif tracking-tight mt-3 mb-1">
                    {card.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold opacity-90">
                    {card.subtitle}
                  </p>
                </div>

                {/* Two-Stage Add To Cart Button initialized with "SHOP NOW →" */}
                <div className="pt-4 flex items-center gap-4">
                  <TwoStageAddToCart
                    productId={card.id}
                    productName={`${card.name} Makhana`}
                    price={card.price}
                    btnClass={card.btnClass}
                    label="SHOP NOW →"
                  />
                  <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30">
                    {card.weight} • ₹{card.price}
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Presentation matching screenshot */}
              <div className="w-full md:w-6/12 flex items-center justify-center relative min-h-[200px] sm:min-h-[240px]">
                {/* Popping Makhana Balls & Wooden Bowl Presentation */}
                <div className="relative w-full max-w-md flex items-center justify-center">
                  {/* Floating Makhana balls */}
                  <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-85">
                    <span className="text-3xl sm:text-4xl animate-bounce delay-100">🍿</span>
                    <span className="text-2xl sm:text-3xl animate-bounce delay-300">✨</span>
                    <span className="text-3xl sm:text-4xl animate-bounce delay-200">🍿</span>
                  </div>

                  {/* Product Pack / Jar Simulation */}
                  <div className="relative z-10 bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl group-hover:scale-105 transition duration-300">
                    <span className="text-6xl sm:text-7xl mb-2">{card.emoji}</span>
                    <div className="text-xs font-black uppercase tracking-wider text-white bg-black/30 px-3 py-1 rounded-full">
                      Popsmagic {card.name}
                    </div>
                  </div>

                  {/* Overflowing Bowl Graphic */}
                  <div className="absolute -right-2 bottom-0 text-5xl sm:text-6xl opacity-90 drop-shadow-md">
                    🥣
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
