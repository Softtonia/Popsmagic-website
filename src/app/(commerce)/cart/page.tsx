import Link from "next/link";

export default function CartPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Review your items before heading to checkout.
      </p>
      <div className="border rounded-lg p-6 bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 text-center">
        <p className="text-zinc-500">Your cart is currently empty.</p>
        <Link
          href="/shop"
          className="inline-block mt-4 px-6 py-2.5 bg-rose-600 text-white rounded-md text-sm font-medium hover:bg-rose-700 transition"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
