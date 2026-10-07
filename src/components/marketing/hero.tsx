import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#faf6ee] dark:bg-[#121c18] overflow-hidden py-10 sm:py-14 lg:py-16 border-b border-[#e8dfce]/60 dark:border-zinc-800">
      {/* Background ambient lighting pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#d5c4a1_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Column: Typography, Badges & CTAs */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-left">
            {/* Top Tagline */}
            <div>
              <span className="text-[#05382b] dark:text-emerald-400 font-extrabold tracking-[0.18em] text-xs sm:text-[13px] uppercase">
                PREMIUM MAKHANA SNACKS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-[#05382b] dark:text-zinc-50 leading-[1.12] font-playfair">
              Makhana <br />
              That Makes <br />
              You Go{" "}
              <span className="font-playfair italic font-medium text-[#D99F26] text-4xl sm:text-5xl lg:text-[66px] ml-1">
                MUMM!
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-[#05382b]/80 dark:text-zinc-300 text-sm sm:text-base leading-[1.55] max-w-md font-medium">
              Wholesome, protein-rich makhana with bold <br className="hidden sm:inline" />
              flavours for your everyday snacking <br className="hidden sm:inline" />
              moments.
            </p>

            {/* 3 Feature Badges */}
            <div className="flex items-center gap-5 sm:gap-7 pt-1">
              {/* Badge 1: High Protein */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 shrink-0">
                  <svg
                    className="w-4.5 h-4.5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A9 9 0 0 0 20 11V3h-8a9 9 0 0 0-9 9 9 9 0 0 0 8 8z" />
                    <path d="M11 20c-3 0-6-3-6-6" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13px] font-extrabold text-[#05382b] dark:text-zinc-200 leading-tight">
                  High <br /> Protein
                </span>
              </div>

              {/* Badge 2: Gluten Free */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 shrink-0">
                  <svg
                    className="w-4.5 h-4.5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13px] font-extrabold text-[#05382b] dark:text-zinc-200 leading-tight">
                  Gluten <br /> Free
                </span>
              </div>

              {/* Badge 3: 100% Natural */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#05382b] dark:border-emerald-400 flex items-center justify-center text-[#05382b] dark:text-emerald-400 shrink-0">
                  <svg
                    className="w-4.5 h-4.5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13px] font-extrabold text-[#05382b] dark:text-zinc-200 leading-tight">
                  100% <br /> Natural
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              {/* Primary CTA: SHOP FLAVOURS → */}
              <Link
                href="/flavored-makhana"
                className="bg-[#05382b] hover:bg-[#074737] text-white font-extrabold text-[12px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>SHOP FLAVOURS</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              {/* Secondary CTA: EXPLORE MAKHANA */}
              <Link
                href="/plain-makhana"
                className="border border-[#05382b] dark:border-emerald-400 text-[#05382b] dark:text-emerald-400 hover:bg-[#05382b]/5 dark:hover:bg-emerald-400/10 font-extrabold text-[12px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center"
              >
                EXPLORE MAKHANA
              </Link>
            </div>
          </div>

          {/* Right Column: Reference Product Banner Showcase */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#e8dfce] dark:border-zinc-800 bg-white/50 backdrop-blur-xs">
              <Image
                src="/images/hero_makhana_banner.jpg"
                alt="Popsmagic Gourmet Makhana Jars Showcase"
                width={1200}
                height={675}
                priority
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
