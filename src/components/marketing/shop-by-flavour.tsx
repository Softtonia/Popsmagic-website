import React from "react";
import { TwoStageAddToCart } from "@/components/cart/two-stage-add-to-cart";

export interface FlavorCard {
  id: string;
  name: string;
  highlightWord?: string;
  subtitle: string;
  description: string;
  price: string;
  numericPrice: number;
  weight: string;
  badges: { icon: string; text: string }[];
  bgClass: string;
  btnClass: string;
  emoji: string;
}

export const HOMEPAGE_FLAVORS: FlavorCard[] = [
  {
    id: "cheese-burst",
    name: "Cheese Burst Makhana",
    highlightWord: "Burst",
    subtitle: "Creamy Cheese extraordinary crunch.",
    description:
      "Popsmagic Cheese Burst Makhana offers a perfectly roasted, crunchy snack coated in a rich and creamy cheese seasoning.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🧀", text: "Real Cheese" },
      { icon: "🍁", text: "Italian Herbs" },
      { icon: "🧡", text: "Rich in Taste" },
    ],
    bgClass: "bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white",
    btnClass: "bg-[#E67E22] hover:bg-[#D35400] text-white font-bold border-none",
    emoji: "🧀",
  },
  {
    id: "peri-peri",
    name: "Peri - Peri Makhana",
    subtitle: "Bold Flavour. Clean snacking.",
    description:
      "Popsmagic Peri-Peri Makhana is expertly roasted and seasoned with mint herbs and spices to deliver a perfect balance of flavor and nutrition.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🔥", text: "Fiery Flavour" },
      { icon: "🌶️", text: "Crunch & Taste" },
      { icon: "❤️", text: "Perfect Snack" },
    ],
    bgClass: "bg-[#590a0a] text-white",
    btnClass: "border border-white/40 hover:bg-white/10 text-white font-bold",
    emoji: "🌶️",
  },
  {
    id: "pudhina-magic",
    name: "Pudhina Magic Makhana",
    highlightWord: "Magic",
    subtitle: "Minty Fresh, Naturally Chrunchy.",
    description:
      "Popsmagic Peri-Peri Makhana is expertly roasted and coated in a bold spice blend to deliver the perfect balance of heat, crunch, and flavor.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🌿", text: "Cool Minty" },
      { icon: "🍃", text: "Light & Healthy" },
      { icon: "💚", text: "Tasty Crunch" },
    ],
    bgClass: "bg-[#0a402d] text-white",
    btnClass: "border border-white/40 hover:bg-white/10 text-white font-bold",
    emoji: "🌿",
  },
  {
    id: "tangy-tomato",
    name: "Tangy Tomato Makhana",
    highlightWord: "Tomato",
    subtitle: "Zesty tomato. Bold Flavour. Guilt Free Snacking.",
    description:
      "Popsmagic Tangy Tomato Makhana delivers a roasted, crunchy bite loaded with zesty tomato flavor and nutrition.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🍅", text: "Real Taste" },
      { icon: "🌶️", text: "Crunch, Flavour" },
      { icon: "❤️", text: "Kids Favourite" },
    ],
    bgClass: "bg-[#a61313] text-white",
    btnClass: "border border-white/40 hover:bg-white/10 text-white font-bold",
    emoji: "🍅",
  },
  {
    id: "caramel-bliss",
    name: "Caramel Bliss Makhana",
    subtitle: "Rich Caramel. Perfect Crunch.",
    description:
      "Popsmagic Caramel Bliss Makhana combines roasted crunch with rich, buttery caramel for a sweet and nutritious bite.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🍫", text: "Rich Caramel" },
      { icon: "🥜", text: "Crsip & Crunch" },
      { icon: "🤍", text: "Perfect Treat" },
    ],
    bgClass: "bg-[#4a2311] text-white",
    btnClass: "border border-white/40 hover:bg-white/10 text-white font-bold",
    emoji: "🍯",
  },
  {
    id: "classic-roasted",
    name: "Classic Roasted Makhana",
    subtitle: "Simple Ingredients. Extraordinary Taste.",
    description:
      "Popsmagic Classic Roasted Makhana is a crunchy, nutritious snack seasoned with rock salt and black pepper.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🌿", text: "100% Natural" },
      { icon: "🌾", text: "Roasted not fried" },
      { icon: "💚", text: "Low Calorie" },
    ],
    bgClass: "bg-[#2a4d23] text-white",
    btnClass: "border border-white/40 hover:bg-white/10 text-white font-bold",
    emoji: "🍿",
  },
  {
    id: "cream-onion",
    name: "Cream & Onion Makhana",
    subtitle: "Crunchy cream and zesty onion bliss.",
    description:
      "Popsmagic Cream and Onion Makhana is a crunchy, nutritious snack seasoned with rich cream and zesty onion flavors.",
    price: "₹149",
    numericPrice: 149,
    weight: "100 g",
    badges: [
      { icon: "🌿", text: "100% Natural" },
      { icon: "🌾", text: "Roasted not fried" },
      { icon: "💚", text: "Low Calorie" },
    ],
    bgClass: "bg-[#547e33] text-white",
    btnClass: "border border-white/40 hover:bg-white/10 text-white font-bold",
    emoji: "🧅",
  },
];

export function ShopByFlavourSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#faf6ee] dark:bg-[#121c18] border-b border-[#e8dfce]/60 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <span className="text-xs font-extrabold text-[#05382b] dark:text-emerald-400 uppercase tracking-widest">
              EXPLORE OUR PAGE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#05382b] dark:text-zinc-50 font-playfair mt-1">
              Shop by Flavour
            </h2>
            <p className="text-sm sm:text-base text-[#05382b]/80 dark:text-zinc-300 font-medium mt-2">
              Bold flavours. Same wholesome goodness.
            </p>
          </div>

          {/* Top Right Decorative Leaf */}
          <div className="hidden sm:block text-[#05382b]/60 dark:text-emerald-400">
            <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5 16 3 22c5-1 11-4 13-9 .5 2-1 5-4 8 7-2 9-8 9-13-1-1-3-1-4 0z" />
            </svg>
          </div>
        </div>

        {/* 2-Column Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HOMEPAGE_FLAVORS.map((card) => (
            <div
              key={card.id}
              className={`rounded-3xl p-6 sm:p-8 ${card.bgClass} shadow-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
            >
              {/* Product Visual Container (Left) */}
              <div className="w-full sm:w-5/12 h-56 sm:h-full bg-white/10 rounded-2xl flex items-center justify-center text-7xl sm:text-8xl backdrop-blur-xs shrink-0 shadow-inner">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {card.emoji}
                </span>
              </div>

              {/* Product Info & Controls (Right) */}
              <div className="w-full sm:w-7/12 space-y-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-playfair tracking-tight leading-tight">
                    {card.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold opacity-90 mt-1">
                    {card.subtitle}
                  </p>
                  <p className="text-xs opacity-80 mt-3 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>

                  {/* 3 Badges */}
                  <div className="flex items-center gap-3 pt-4 flex-wrap">
                    {card.badges.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold"
                      >
                        <span>{b.icon}</span>
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price, Weight & Two-Stage Add To Cart Controls */}
                <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-white text-zinc-900 font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                      {card.weight}
                    </span>
                    <span className="text-2xl font-black tracking-tight">
                      {card.price}
                    </span>
                  </div>

                  {/* Two Stage Interactive Add To Cart */}
                  <TwoStageAddToCart
                    productId={card.id}
                    productName={card.name}
                    price={card.numericPrice}
                    btnClass={card.btnClass}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
