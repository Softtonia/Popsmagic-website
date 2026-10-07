"use client";

import { useState, useRef } from "react";

export interface VideoTestimonial {
  id: string;
  title: string;
  user: string;
  role: string;
  rating: number;
  thumbnailBg: string;
  videoUrl: string;
  accentEmoji: string;
  quote: string;
}

const TESTIMONIAL_VIDEOS: VideoTestimonial[] = [
  {
    id: "reel-1",
    title: "Unbelievable Jumbo Crunch & Zero Bad Seeds!",
    user: "Ananya Sharma",
    role: "Verified Buyer",
    rating: 5,
    thumbnailBg: "from-amber-900/40 via-amber-950/60 to-black/80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bowl-of-nuts-and-healthy-snacks-41584-large.mp4",
    accentEmoji: "🍿",
    quote: "I roast these at home in pure ghee. The phool size is huge!",
  },
  {
    id: "reel-[#reel-2]",
    title: "My Go-To Healthy Evening Tea Snack! ☕",
    user: "Priya Rastogi",
    role: "Nutritionist",
    rating: 5,
    thumbnailBg: "from-emerald-950/40 via-amber-950/60 to-black/80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-eating-healthy-salad-in-the-kitchen-41221-large.mp4",
    accentEmoji: "✨",
    quote: "Keeps me full for hours without empty calories.",
  },
  {
    id: "reel-3",
    title: "Popsmagic Superfood Pack Unboxing!",
    user: "Rohan Gupta",
    role: "Food Blogger",
    rating: 5,
    thumbnailBg: "from-rose-950/40 via-purple-950/60 to-black/80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-healthy-snack-bowl-41585-large.mp4",
    accentEmoji: "📦",
    quote: "The packaging keeps it super crisp even after 2 weeks.",
  },
  {
    id: "reel-4",
    title: "Peri Peri & Chatpata Crunch Review 🔥",
    user: "Chef Kavita",
    role: "Culinary Expert",
    rating: 5,
    thumbnailBg: "from-red-950/40 via-amber-950/60 to-black/80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-preparing-a-spicy-dish-with-herbs-41222-large.mp4",
    accentEmoji: "🌶️",
    quote: "The spice coating is perfectly balanced and addicting!",
  },
  {
    id: "reel-5",
    title: "Cream & Onion Makhana Kid Approved!",
    user: "Meera Patel",
    role: "Super Mom",
    rating: 5,
    thumbnailBg: "from-teal-950/40 via-emerald-950/60 to-black/80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fresh-ingredients-for-cooking-41586-large.mp4",
    accentEmoji: "🧅",
    quote: "Replaced processed chips in my kids' tiffin box!",
  },
  {
    id: "reel-6",
    title: "Roasted in Pure A2 Cow Ghee 🧈",
    user: "Dr. Siddharth",
    role: "Holistic Health Coach",
    rating: 5,
    thumbnailBg: "from-amber-950/50 via-yellow-950/60 to-black/80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-pouring-ghee-into-a-bowl-41223-large.mp4",
    accentEmoji: "🥛",
    quote: "Rich in calcium and magnesium with healthy fats.",
  },
];

export function MakhanaMagicVideosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FAF6EE] dark:bg-[#121c18] py-16 sm:py-20 relative overflow-hidden text-[#05382b] dark:text-zinc-100">
      {/* Top-Left Olive Branch Flourish */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 pointer-events-none opacity-80 z-0">
        <svg className="w-14 h-14 sm:w-20 sm:h-20 text-[#6b8e64] dark:text-emerald-600 fill-current" viewBox="0 0 100 100">
          <path d="M20,80 C30,50 60,30 90,20 C70,40 50,70 20,80 Z M35,45 C25,40 15,45 10,55 C20,55 30,50 35,45 Z M55,35 C50,25 40,20 30,22 C35,32 45,35 55,35 Z" />
        </svg>
      </div>

      {/* Bottom-Right Olive Branch Flourish */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 pointer-events-none opacity-80 z-0 rotate-180">
        <svg className="w-14 h-14 sm:w-20 sm:h-20 text-[#6b8e64] dark:text-emerald-600 fill-current" viewBox="0 0 100 100">
          <path d="M20,80 C30,50 60,30 90,20 C70,40 50,70 20,80 Z M35,45 C25,40 15,45 10,55 C20,55 30,50 35,45 Z M55,35 C50,25 40,20 30,22 C35,32 45,35 55,35 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching exact reference */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#d48b17] dark:text-amber-400 font-medium">
            Follow our
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#05382b] dark:text-emerald-400 tracking-tight mt-1">
            Makhana Magic
          </h2>
        </div>

        {/* Carousel Slider Controls Container */}
        <div className="relative group/carousel">
          {/* Navigation Arrow Left */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous Videos"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 dark:bg-zinc-800/90 text-[#05382b] dark:text-white shadow-xl flex items-center justify-center hover:bg-[#05382b] hover:text-white dark:hover:bg-emerald-500 transition duration-200 border border-amber-900/10"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next Videos"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 dark:bg-zinc-800/90 text-[#05382b] dark:text-white shadow-xl flex items-center justify-center hover:bg-[#05382b] hover:text-white dark:hover:bg-emerald-500 transition duration-200 border border-amber-900/10"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Horizontal Reel Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-2 sm:px-4 snap-x snap-mandatory scroll-smooth"
          >
            {TESTIMONIAL_VIDEOS.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className="relative min-w-[250px] sm:min-w-[285px] lg:min-w-[305px] h-[370px] sm:h-[430px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-amber-900/10 dark:border-zinc-800 group cursor-pointer snap-start transition duration-300 transform hover:-translate-y-1.5 flex-shrink-0"
              >
                {/* Visual Thumbnail Representation */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.thumbnailBg} flex flex-col items-center justify-center p-6 text-center`}>
                  <span className="text-6xl mb-4 group-hover:scale-110 transition duration-300 drop-shadow-md">
                    {item.accentEmoji}
                  </span>
                  <p className="text-xs text-amber-200 font-semibold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                    Watch Reel
                  </p>
                </div>

                {/* Top Right Instagram Reels Badge */}
                <div className="absolute top-4 right-4 z-10 bg-black/35 backdrop-blur-md p-1.5 rounded-full text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>

                {/* Center Animated Play Circle */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/60 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#05382b] transition duration-300">
                    <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Gradient Shadow Overlay for Readable Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-0" />

                {/* Bottom Card Information */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 text-left">
                  <div className="text-amber-400 text-xs font-bold mb-1">
                    {"★".repeat(item.rating)}
                  </div>
                  <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug drop-shadow-xs font-serif">
                    "{item.title}"
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-300">
                    <span className="font-semibold text-white">{item.user}</span>
                    <span className="text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-full">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Instagram Handle Tag */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#05382b] dark:text-emerald-400 hover:underline group"
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center p-1 text-xs">
              📷
            </span>
            <span>@popsmagic_</span>
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-zinc-900 rounded-3xl overflow-hidden max-w-sm w-full border border-zinc-700 shadow-2xl text-white">
            {/* Close Modal Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center font-bold text-lg hover:bg-white hover:text-black transition"
            >
              ✕
            </button>

            {/* Reel Header */}
            <div className="p-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10 flex items-center gap-3">
              <span className="text-3xl">{activeVideo.accentEmoji}</span>
              <div>
                <h4 className="text-sm font-bold text-white">{activeVideo.user}</h4>
                <p className="text-xs text-amber-400">{activeVideo.role} • Verified Review</p>
              </div>
            </div>

            {/* Video Player Box */}
            <div className="relative aspect-[9/16] bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            {/* Reel Caption */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800">
              <div className="text-amber-400 text-xs font-bold">★★★★★</div>
              <p className="text-sm font-semibold mt-1">"{activeVideo.title}"</p>
              <p className="text-xs text-zinc-400 mt-1">{activeVideo.quote}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
