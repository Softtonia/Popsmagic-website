import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { BulkOrderHero } from "@/components/marketing";
import { BulkOrderStepForm } from "@/components/forms";

export const metadata: Metadata = generateSeoMetadata({
  title: "Bulk Order & Business Partnership - Popsmagic",
  description: "High-quality makhana for your business. Get the best bulk pricing, custom packaging, and reliable delivery.",
  canonical: "/bulk-order",
});

export default function BulkOrderPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Full-Width Bulk Order Hero Banner */}
      <BulkOrderHero />

      {/* 2. Bulk Order B2B Step Form */}
      <BulkOrderStepForm />
    </main>
  );
}
