import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { GetDistributionHero, DistributionEnquirySection } from "@/components/marketing";

export const metadata: Metadata = generateSeoMetadata({
  title: "Become a Popsmagic Distributor - Distribution & Wholesale Partnerships",
  description: "Bring Popsmagic Makhana to more customers in your city. Apply for distribution and join our retail network.",
  canonical: "/get-distribution",
});

export default function GetDistributionPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Full-Width Get Distribution Hero Banner */}
      <GetDistributionHero />

      {/* 2. Distribution Enquiry Section */}
      <DistributionEnquirySection />
    </main>
  );
}


