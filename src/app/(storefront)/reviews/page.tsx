import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Customer Reviews & Ratings | Popsmagic Makhana",
  description: "Read real verified customer reviews, ratings, and feedback for Popsmagic gourmet Makhana snacks.",
  canonical: "/reviews",
});

const REVIEWS = [
  {
    id: "rev-1",
    name: "Ananya Sharma",
    location: "Mumbai",
    rating: 5,
    date: "October 2, 2026",
    product: "Plain Makhana (500g Jumbo Value Pack)",
    headline: "Extremely crunchy & zero bad seeds!",
    comment:
      "I roast these at home with pure A2 cow ghee and sea salt. The phool size is genuinely huge and super crisp. Ordering my 3rd 500g pack today!",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Vikram Malhotra",
    location: "Bengaluru",
    rating: 5,
    date: "September 29, 2026",
    product: "Peri Peri Roasted Makhana (100g)",
    headline: "Perfect spicy crunch for evening tea time!",
    comment:
      "The Peri Peri seasoning is spot on! It gives just the right kick without being overly salty. Keeps me away from junk fried chips.",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Pooja Verma",
    location: "Delhi NCR",
    rating: 5,
    date: "September 21, 2026",
    product: "Cream & Onion Roasted Makhana (250g)",
    headline: "Kids love it in their school tiffins!",
    comment:
      "Subtle herb flavor, fresh crunch, and clean ingredients. My kids ask for Popsmagic Cream & Onion every afternoon. Highly recommended.",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Rahul Nair",
    location: "Hyderabad",
    rating: 5,
    date: "September 18, 2026",
    product: "Super Premium Makhana (250g)",
    headline: "Consistently top-notch quality.",
    comment:
      "Fast 2-day delivery to Hyderabad. Packaging keeps the makhana completely fresh and crisp even after opening. Great job Popsmagic!",
    verified: true,
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header Summary Banner */}
        <div className="bg-[#FAF6EE] dark:bg-zinc-900 border border-amber-200/80 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full uppercase tracking-wider">
              Verified Feedback
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
              Customer Reviews
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm max-w-lg">
              See what thousands of healthy snack lovers across India have to say about Popsmagic gourmet makhana.
            </p>
          </div>
          <div className="text-center md:text-right bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-700 min-w-[200px]">
            <div className="text-4xl font-black text-[#05382b] dark:text-emerald-400">4.9 / 5.0</div>
            <div className="text-amber-500 text-lg my-1">★★★★★</div>
            <div className="text-xs text-zinc-500 font-medium">Based on 1,480+ Ratings</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-amber-500 text-sm font-bold">
                    {"★".repeat(rev.rating)}
                  </div>
                  <span className="text-xs text-zinc-400">{rev.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#05382b] dark:text-zinc-100 font-serif">
                  "{rev.headline}"
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
                  {rev.comment}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-end text-xs">
                <div>
                  <div className="font-bold text-[#05382b] dark:text-emerald-400 text-sm">{rev.name}</div>
                  <div className="text-zinc-500">{rev.location}</div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-0.5 rounded-full font-semibold">
                    ✓ Verified Buyer
                  </span>
                  <div className="text-[11px] text-zinc-400 mt-1">{rev.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
