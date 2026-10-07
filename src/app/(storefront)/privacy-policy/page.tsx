import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Privacy Policy | Popsmagic Foods",
  description: "Learn how Popsmagic protects your personal information and handles your data securely.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="border-b pb-8 mb-8 border-zinc-200 dark:border-zinc-800">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-semibold rounded-full uppercase tracking-wider">
            Data Protection
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
            Privacy Policy
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
            Effective Date: October 2026 • Popsmagic Foods Private Limited
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you visit or place an order on <strong>Popsmagic Foods</strong>, we collect personal information necessary to fulfill your purchases, including your full name, shipping address, contact phone number, email address, and order history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process, dispatch, and track your Makhana snack orders.</li>
              <li>Send real-time order updates via SMS, Email, or WhatsApp.</li>
              <li>Improve our storefront browsing experience and product offerings.</li>
              <li>Communicate promotional offers, discounts, and new flavor launches (you may opt out anytime).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              3. Data Sharing & Security
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We share data strictly with trusted service partners, such as courier logistics partners (e.g. BlueDart, Delhivery) and secure payment processing gateways, solely for order fulfillment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              4. Cookies & Analytics
            </h2>
            <p>
              We use functional cookies to save your cart items, remember active sessions, and analyze website traffic to enhance overall performance. You can choose to disable cookies through your browser settings, though some storefront features may be affected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#05382b] dark:text-emerald-300 font-serif mb-3">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your account information by contacting us directly.
            </p>
          </section>

          <section className="bg-[#FAF6EE] dark:bg-zinc-900 p-6 rounded-2xl border border-emerald-200/60 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-[#05382b] dark:text-emerald-400 mb-1">
              Data Protection Inquiry?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              For any privacy concerns or data requests, write to our Data Protection Officer at{" "}
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
