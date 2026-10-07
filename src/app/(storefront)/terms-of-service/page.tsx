import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Terms of Service | Popsmagic Foods",
  description: "Read the Terms of Service governing the use of Popsmagic online storefront and purchases.",
  canonical: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="border-b pb-8 mb-8 border-zinc-200 dark:border-zinc-800">
          <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full uppercase tracking-wider">
            Legal Agreement
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
            Terms of Service
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
            Last Updated: October 2026 • Popsmagic Foods Private Limited
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or purchasing from <strong>Popsmagic Foods Private Limited</strong> ("Popsmagic", "we", "us", or "our") website (https://popsmagic.store), you agree to be bound by these Terms of Service. If you do not agree to all terms, please refrain from using our storefront.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              2. Products & Pricing
            </h2>
            <p>
              We strive to display our Makhana products, pack sizes (100g, 250g, 500g), ingredients, and nutritional specifications as accurately as possible. All prices are stated in Indian Rupees (INR) and are inclusive of applicable taxes unless specified otherwise. We reserve the right to modify prices or discontinue items without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              3. Orders & Payment
            </h2>
            <p>
              When placing an order, you agree to provide complete, accurate shipping and contact information. Payments are processed securely via authorized third-party payment gateways. Popsmagic does not store raw credit/debit card credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content on this site, including logos, trademarks, designs, graphics, images, product descriptions, and code, is the property of Popsmagic Foods Private Limited and protected by intellectual property laws in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              5. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Darbhanga, Bihar.
            </p>
          </section>

          <section className="bg-[#FAF6EE] dark:bg-zinc-900 p-6 rounded-2xl border border-amber-200/60 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-[#05382b] dark:text-emerald-400 mb-1">
              Have questions regarding our Terms?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Reach out to our customer support team at{" "}
              <a href="mailto:hello@popsmagic.store" className="text-[#05382b] font-semibold underline">
                hello@popsmagic.store
              </a>{" "}
              or call us at <strong>+91 8076306373</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
