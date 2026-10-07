import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Shipping & Delivery Policy | Popsmagic Foods",
  description: "Learn about Popsmagic shipping coverage across India, delivery timelines, and order tracking.",
  canonical: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="border-b pb-8 mb-8 border-zinc-200 dark:border-zinc-800">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-semibold rounded-full uppercase tracking-wider">
            Fast Delivery
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
            Shipping & Delivery Policy
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
            Popsmagic Foods Private Limited • Fresh & Crunchy Delivered Nationwide
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              1. Delivery Coverage
            </h2>
            <p>
              Popsmagic delivers gourmet Makhana snacks across 27,000+ pin codes in India through top logistics express partners including BlueDart, Delhivery, Shadowfax, and Xpressbees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              2. Shipping Charges & Free Shipping
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>FREE Shipping:</strong> Applicable on all prepaid and COD orders above <strong>₹499</strong> nationwide.</li>
              <li>Standard nominal delivery fee of ₹49 applies to orders below ₹499.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              3. Dispatch & Delivery Timelines
            </h2>
            <p className="mb-2">
              Orders placed before 2:00 PM IST are dispatched on the <strong>same working day</strong> from our fulfillment centers. Standard delivery timelines:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Metro Cities:</strong> 2 to 3 business days.</li>
              <li><strong>Rest of India:</strong> 3 to 5 business days.</li>
              <li><strong>Remote/Tier 3 Locations:</strong> Up to 7 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              4. Real-Time Tracking
            </h2>
            <p>
              Once your order is handed over to the courier, an AWB tracking link is sent directly via SMS and WhatsApp so you can monitor your package journey live.
            </p>
          </section>

          <section className="bg-[#FAF6EE] dark:bg-zinc-900 p-6 rounded-2xl border border-emerald-200/60 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-[#05382b] dark:text-emerald-400 mb-1">
              Tracking Issue or Delayed Shipment?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Get instant updates by WhatsApping us at <strong>+91 8076306373</strong> or sending your order ID to{" "}
              <a href="mailto:hello@popsmagic.store" className="text-[#05382b] font-semibold underline">
                hello@popsmagic.store
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
