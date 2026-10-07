import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Frequently Asked Questions (FAQs) | Popsmagic",
  description: "Find quick answers to common questions about Popsmagic makhana products, shipping, returns, and wholesale ordering.",
  canonical: "/faqs",
});

const FAQ_CATEGORIES = [
  {
    category: "Product & Ingredients",
    questions: [
      {
        q: "What makes Popsmagic Makhana different from regular lotus seeds?",
        a: "Popsmagic source 100% hand-harvested jumbo size (6+ phool) lotus seeds directly from Bihar. We slow-roast them in pure A2 cow ghee with natural, non-GMO herb seasonings without artificial preservatives or palm oil.",
      },
      {
        q: "Are Popsmagic Makhana snacks gluten-free and vegan?",
        a: "Yes! Plain Makhana packs are naturally gluten-free, vegan, and keto-friendly. For flavoured varieties, please check individual pack ingredients for milk/cheese solids.",
      },
      {
        q: "What is the shelf life of Popsmagic Makhana?",
        a: "Our airtight, nitrogen-flushed pouch packaging maintains peak crispness and freshness for 6 months from the date of manufacturing.",
      },
    ],
  },
  {
    category: "Ordering & Delivery",
    questions: [
      {
        q: "How long does shipping take across India?",
        a: "Metro cities receive orders within 2 to 3 business days, while rest of India receives delivery in 3 to 5 business days.",
      },
      {
        q: "Is there a minimum order value for Free Shipping?",
        a: "Yes! All prepaid and COD orders above ₹499 qualify for 100% FREE delivery nationwide.",
      },
    ],
  },
  {
    category: "Returns & Payments",
    questions: [
      {
        q: "What payment options are accepted?",
        a: "We accept all major UPI apps (GPay, PhonePe, Paytm, BHIM), Credit/Debit Cards, Net Banking, and Cash on Delivery (COD).",
      },
      {
        q: "What if my package arrives damaged?",
        a: "Please share photo proof with us on WhatsApp (+91 8076306373) or email within 48 hours of delivery for a instant hassle-free replacement.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full uppercase tracking-wider">
            Help Center
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
            Everything you need to know about our gourmet makhana snacks, delivery, and orders.
          </p>
        </div>

        <div className="space-y-10">
          {FAQ_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-[#FAF6EE] dark:bg-zinc-900 p-8 rounded-3xl border border-amber-200/60 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-6">
                {cat.category}
              </h2>
              <div className="space-y-6">
                {cat.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border-b border-zinc-200/80 dark:border-zinc-800 pb-5 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-bold text-[#05382b] dark:text-zinc-100 mb-2">
                      {item.q}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-white dark:bg-zinc-900 border rounded-3xl">
          <h3 className="text-xl font-bold text-[#05382b] dark:text-emerald-400 font-serif">
            Still have a question?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
            Our support team is here to help you 7 days a week.
          </p>
          <a
            href="mailto:hello@popsmagic.store"
            className="inline-block mt-4 px-6 py-2.5 bg-[#05382b] text-white font-bold text-sm rounded-full hover:bg-opacity-90 transition"
          >
            Contact Customer Support →
          </a>
        </div>
      </div>
    </main>
  );
}
