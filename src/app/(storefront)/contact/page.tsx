import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { ContactUsHero, ContactSection } from "@/components/marketing";

export const metadata: Metadata = generateSeoMetadata({
  title: "Contact Us - Lets Talk Makhana | Popsmagic",
  description: "Have a question, feedback or simply want to say hello? We'd love to hear from you.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Full-Width Contact Us Hero Banner */}
      <ContactUsHero />

      {/* 2. Contact Section (Info Card & Send us a Message Form) */}
      <ContactSection />
    </main>
  );
}



