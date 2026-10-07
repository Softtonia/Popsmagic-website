import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-lg text-center">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        ✓
      </div>
      <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Thank you for your purchase. We&apos;ve sent a confirmation email with tracking details.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2.5 bg-rose-600 text-white rounded-md text-sm font-medium hover:bg-rose-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
