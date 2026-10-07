import type { Metadata } from "next";
import { generateSeoMetadata, generateOrganizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo";
import {
  HeroSection,
  ShopByFlavourSection,
  PlainAndPremiumMakhanaSliderSection,
  MakhanaMagicVideosSection,
  AvailableOnSection,
  CtaBannerSection,
} from "@/components/marketing";

// Server Component Metadata
export const metadata: Metadata = generateSeoMetadata({
  title: "Popsmagic - Premium Makhana Snacks & Gourmet Treats",
  description: "Wholesome, protein-rich makhana with bold flavours for your everyday snacking moments.",
  canonical: "/",
});

// Server Component Homepage
export default function HomePage() {
  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <main>
      <JsonLd data={orgJsonLd} />
      {/* 1. Storefront Hero Section */}
      <HeroSection />

      {/* 2. Shop by Flavour Product Section */}
      <ShopByFlavourSection />

      {/* 3. Plain & Super Premium Makhana Slider Section (directly after Shop by Flavour) */}
      <PlainAndPremiumMakhanaSliderSection />

      {/* 4. Testimonial Video Carousel Section */}
      <MakhanaMagicVideosSection />

      {/* 5. AVAILABLE ON Horizontal Marquee Section (directly after Testimonial Videos) */}
      <AvailableOnSection />

      {/* 6. CTA Banner Section (directly after Scroller Section) */}
      <CtaBannerSection />
    </main>
  );
}




