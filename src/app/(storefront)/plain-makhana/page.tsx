import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { 
  PlainMakhanaHero, 
  StandardMakhanaSection,
  PremiumHandpickMakhanaSection 
} from "@/components/marketing";

export const metadata: Metadata = generateSeoMetadata({
  title: "Plain Makhana (Raw & Slow Roasted) - Simple. Pure. Powerful",
  description: "Premium jumbo grade raw and Himalayan pink salt roasted lotus seeds available in 100g, 250g, and 500g packs.",
  canonical: "/plain-makhana",
});

export default function PlainMakhanaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section matching exact reference image */}
      <PlainMakhanaHero />

      {/* 2. Standard Makhana Section (4 Suta, 5 Suta, 6 Suta Cards) */}
      <StandardMakhanaSection />

      {/* 3. Premium Handpick Makhana Section (positioned immediately after Standard Makhana) */}
      <PremiumHandpickMakhanaSection />
    </main>
  );
}
