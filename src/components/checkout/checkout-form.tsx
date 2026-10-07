"use client";

import { useState } from "react";
import { processCheckout } from "@/actions/checkout";

export function CheckoutForm() {
  const [step, setStep] = useState<"shipping" | "payment">("shipping");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "cod">("card");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await processCheckout(formData);
      window.location.href = "/order-success";
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-zinc-900 border dark:border-zinc-800 p-8 rounded-2xl">
      {/* Navigation tabs */}
      <div className="flex border-b dark:border-zinc-800 pb-4 gap-6">
        <button
          type="button"
          onClick={() => setStep("shipping")}
          className={`font-semibold text-sm pb-2 border-b-2 transition ${
            step === "shipping"
              ? "border-rose-600 text-rose-600"
              : "border-transparent text-zinc-400 hover:text-zinc-600"
          }`}
        >
          1. Shipping Details
        </button>
        <button
          type="button"
          onClick={() => setStep("payment")}
          className={`font-semibold text-sm pb-2 border-b-2 transition ${
            step === "payment"
              ? "border-rose-600 text-rose-600"
              : "border-transparent text-zinc-400 hover:text-zinc-600"
          }`}
        >
          2. Payment Method
        </button>
      </div>

      {step === "shipping" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-500 mb-1">First Name</label>
              <input
                name="firstName"
                required
                className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-500 mb-1">Last Name</label>
              <input
                name="lastName"
                required
                className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-500 mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-500 mb-1">Delivery Address</label>
            <input
              name="address"
              required
              className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="123 Popsicle Street, Suite 4"
            />
          </div>

          <button
            type="button"
            onClick={() => setStep("payment")}
            className="w-full py-3.5 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition"
          >
            Continue to Payment →
          </button>
        </div>
      )}

      {step === "payment" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-zinc-500">Select Payment Option</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "card", label: "Credit Card" },
                { id: "upi", label: "UPI / NetBanking" },
                { id: "cod", label: "Cash on Delivery" },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id as "card" | "upi" | "cod")}
                  className={`py-3 px-3 rounded-xl border text-xs font-semibold transition ${
                    paymentMethod === m.id
                      ? "border-rose-600 bg-rose-50 dark:bg-rose-950/40 text-rose-600"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-3 pt-2">
              <input
                name="cardNumber"
                placeholder="Card Number (4242 ...)"
                className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm"
                />
                <input
                  name="cvv"
                  placeholder="CVC"
                  className="w-full px-4 py-2.5 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 text-sm"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setStep("shipping")}
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 disabled:opacity-50 transition"
            >
              {isSubmitting ? "Processing Order..." : "Complete Order"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
