import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Return, Refund & Cancellation Policy | Popsmagic Foods",
  description: "Understand our return criteria, cancellation timeline, and refund process for Popsmagic Makhana snacks.",
  canonical: "/return-cancellation-policy",
});

export default function ReturnCancellationPolicyPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="border-b pb-8 mb-8 border-zinc-200 dark:border-zinc-800">
          <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full uppercase tracking-wider">
            Customer Guarantee
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
            Return, Refund & Cancellation Policy
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
            Popsmagic Foods Private Limited • Freshness Commitment
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              1. Order Cancellation Policy
            </h2>
            <p>
              You can cancel your order free of charge anytime <strong>before it is dispatched</strong> from our warehouse. Once an order is dispatched and a tracking number is generated, cancellations cannot be processed. To cancel, please contact customer support immediately at <strong>+91 8076306373</strong> or email <strong>hello@popsmagic.store</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              2. Return & Replacement Eligibility
            </h2>
            <p className="mb-3">
              Because Makhana is an edible food item, we cannot accept returns once the food pouch seal has been broken, unless:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The package arrives damaged, crushed, or tampered with during transit.</li>
              <li>An incorrect flavor or pack size was delivered.</li>
              <li>The product has expired prior to receipt.</li>
            </ul>
            <p className="mt-3">
              Please notify us within <strong>48 hours of delivery</strong> with clear photo/video proof of the damage or issue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              3. Refund Processing Timeline
            </h2>
            <p>
              Once your return/refund request is inspected and approved by our quality control team, refunds are initiated back to your original payment method (UPI, Debit/Credit Card, Net Banking) within <strong>5 to 7 business days</strong>.
            </p>
          </section>

          <section className="bg-[#FAF6EE] dark:bg-zinc-900 p-6 rounded-2xl border border-amber-200/60 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-[#05382b] dark:text-emerald-400 mb-1">
              Need Help With a Recent Order?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Share your order number and photo proof with us via WhatsApp at <strong>+91 8076306373</strong> or email{" "}
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
