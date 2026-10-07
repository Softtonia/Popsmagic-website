import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { CheckoutForm } from "@/components/checkout";

export const metadata: Metadata = generateSeoMetadata({
  title: "Checkout",
  description: "Complete your order securely on Popsmagic.",
  noIndex: true,
});

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Secure Checkout</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Review your delivery details and choose your preferred payment option.
      </p>
      <CheckoutForm />
    </div>
  );
}
