import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { FlavoredMakhanaHero, ChooseYourMoodSection } from "@/components/marketing";

export const metadata: Metadata = generateSeoMetadata({
  title: "Flavoured Makhana - What's Your Mood Munch Today?",
  description: "Discover all 7 gourmet roasted makhana flavors: Cheese Burst, Tangy Tomato, Pudina Magic, Peri Peri, Classic Roasted, Caramel Bliss, Cream & Onion.",
  canonical: "/flavored-makhana",
});

export default function FlavoredMakhanaPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Flavoured Makhana Hero Banner */}
      <FlavoredMakhanaHero />

      {/* 2. Choose Your Mood Product Cards Section (Second Product Card Style) */}
      <ChooseYourMoodSection />
    </main>
  );
}
