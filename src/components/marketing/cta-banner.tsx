import Link from "next/link";

export function CtaBannerSection() {
  return (
    <section className="w-full bg-[#05382b] text-white relative overflow-hidden my-8 sm:my-12">
      {/* Background Deep Green Gradient & Subtle Leaf Shadows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03241b] via-[#05382b] to-[#043326] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 sm:py-16 lg:py-20">
          
          {/* Left Column - Text Content & CTA Button */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Tagline */}
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-200/90 uppercase mb-3">
              CRUNCHY • FLAVOURFUL • BETTER SNACKING
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-[1.15] mb-4">
              Ready to Make <br className="hidden sm:inline" />
              Snacking Magical ?
            </h2>

            {/* Body Description */}
            <p className="text-emerald-50/85 text-sm sm:text-base max-w-lg leading-relaxed mb-8 font-sans">
              Discover your next favourite crunch. Packed with goodness, full of flavour and made for every mood.
            </p>

            {/* CTA Button */}
            <Link
              href="/flavored-makhana"
              className="inline-flex items-center gap-3 bg-[#FAF6EE] text-[#05382b] font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition duration-200 group"
            >
              <span className="tracking-wider uppercase">SHOP FLAVOURS</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Visual Presentation matching reference image */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
            {/* Simulated Wood Shelf Baseline */}
            <div className="absolute bottom-0 inset-x-0 h-10 bg-[#dfd4c0]/30 rounded-t-xl backdrop-blur-xs border-t border-[#dfd4c0]/40" />

            {/* Graphic Illustration of Popping Makhana Bowl & Spices */}
            <div className="relative w-full max-w-md flex flex-col items-center justify-center">
              {/* Floating Popped Makhana Seeds in the Air */}
              <div className="absolute -top-12 inset-x-0 flex justify-around pointer-events-none opacity-90 animate-bounce duration-1000">
                <span className="text-3xl rotate-12 drop-shadow-md">🍿</span>
                <span className="text-4xl -rotate-12 drop-shadow-md">✨</span>
                <span className="text-3xl rotate-45 drop-shadow-md">🍿</span>
                <span className="text-2xl -rotate-6 drop-shadow-md">🌿</span>
              </div>

              {/* Main Wooden Bowl Graphic */}
              <div className="relative bg-gradient-to-b from-[#8B4513] to-[#5C2E0B] p-6 rounded-[40%] shadow-2xl border-4 border-[#A0522D]/60 flex items-center justify-center text-center w-64 h-48 sm:w-72 sm:h-56 transform -rotate-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl transform -translate-y-4 filter drop-shadow-lg">
                    🍿
                  </span>
                </div>
                <div className="absolute bottom-2 text-[11px] font-bold text-amber-200 uppercase tracking-widest bg-black/40 px-3 py-0.5 rounded-full">
                  100% Handcrafted
                </div>
              </div>

              {/* Accompanying Spice & Himalayan Salt Bowls */}
              <div className="flex justify-between w-full px-4 -mt-8 z-10">
                {/* Himalayan Pink Salt Bowl */}
                <div className="bg-[#D27D7D]/90 p-3 rounded-full shadow-lg border border-pink-200/50 flex items-center justify-center text-xl" title="Himalayan Pink Salt">
                  🧂
                </div>

                {/* Roasted Spices & Herbs Bowl */}
                <div className="bg-[#B22222]/90 p-3 rounded-full shadow-lg border border-red-200/50 flex items-center justify-center text-xl" title="Chatpata Spices & Herbs">
                  🌶️
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
