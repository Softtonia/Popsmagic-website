"use client";

import React from "react";

const PARTNER_LOGOS = [
  {
    id: "flipkart",
    name: "Flipkart",
    render: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition">
        <span className="text-2xl font-black italic tracking-tighter text-[#2874f0]">
          Flipkart
        </span>
        <div className="w-7 h-7 bg-[#ffe500] rounded-lg flex items-center justify-center p-1 shadow-xs">
          <svg className="w-5 h-5 text-[#2874f0] fill-current" viewBox="0 0 24 24">
            <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: "meesho",
    name: "Meesho",
    render: (
      <div className="flex items-center px-6 py-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition">
        <span className="text-2xl font-extrabold tracking-tight text-[#511342] dark:text-pink-400 font-sans">
          meesho
        </span>
      </div>
    ),
  },
  {
    id: "amazon",
    name: "Amazon",
    render: (
      <div className="flex flex-col items-center justify-center px-6 py-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition min-w-[130px]">
        <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none">
          amazon
        </span>
        <svg className="w-16 h-3 text-[#ff9900] mt-0.5" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M10 5 Q 50 20 90 5" strokeLinecap="round" />
          <path d="M82 2 L 92 6 L 86 14" fill="currentColor" stroke="none" />
        </svg>
      </div>
    ),
  },
  {
    id: "blinkit",
    name: "Blinkit",
    render: (
      <div className="flex items-center px-5 py-2.5 bg-[#f7c600] rounded-xl shadow-xs hover:shadow-md transition">
        <span className="text-2xl font-black tracking-tight text-black font-sans">
          blink<span className="text-[#0c831f]">it</span>
        </span>
      </div>
    ),
  },
  {
    id: "ondc",
    name: "ONDC",
    render: (
      <div className="flex items-center gap-1.5 px-6 py-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition">
        <span className="text-2xl font-extrabold tracking-tight text-[#0084c7]">
          ON
        </span>
        <div className="w-6 h-6 rounded-full border-2 border-[#0084c7] flex items-center justify-center p-0.5">
          <div className="w-2.5 h-2.5 bg-[#0084c7] rounded-full" />
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-[#0084c7]">
          DC
        </span>
      </div>
    ),
  },
];

export function AvailableOnSection() {
  // Multiply array to ensure seamless infinite looping
  const marqueeItems = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="w-full bg-[#faf6ee] dark:bg-[#121c18] py-14 sm:py-16 border-t border-b border-[#e8dfce]/60 dark:border-zinc-800/80 overflow-hidden text-[#05382b] dark:text-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Section Heading matching screenshot */}
        <h2 className="text-xl sm:text-2xl font-black tracking-[0.25em] text-[#05382b] dark:text-emerald-400 font-sans uppercase">
          AVAILABLE ON
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
          You&apos;re favourite makhana, now closer to you.
        </p>
      </div>

      {/* Marquee Wrapper with Edge Gradients & Hover Pause */}
      <div className="relative w-full overflow-hidden py-2 before:absolute before:top-0 before:left-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-[#faf6ee] dark:before:from-[#121c18] before:to-transparent before:z-10 after:absolute after:top-0 after:right-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-[#faf6ee] dark:after:from-[#121c18] after:to-transparent after:z-10">
        <div className="animate-marquee-ltr flex items-center gap-8 sm:gap-12 lg:gap-16 cursor-pointer">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 transition-transform duration-200 hover:scale-105"
            >
              {item.render}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
