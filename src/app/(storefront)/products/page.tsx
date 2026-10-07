import type { Metadata } from "next";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { getProducts } from "@/lib/data/products";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = generateSeoMetadata({
  title: "Gourmet Popsicles & Treats",
  description: "Browse our complete catalog of handcrafted popsicles made from real fruits.",
  canonical: "/products",
});

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Products</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Made fresh daily with 100% natural ingredients and real fruit juices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-6 bg-white dark:bg-zinc-900 dark:border-zinc-800 flex flex-col justify-between"
          >
            <div>
              <div className="h-40 bg-rose-50 dark:bg-rose-950/30 rounded-xl flex items-center justify-center text-4xl mb-4">
                🍧
              </div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                {product.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-bold text-rose-600">
                {formatCurrency(product.price)}
              </span>
              <Link
                href={`/products/${product.slug}`}
                className="px-4 py-2 bg-rose-600 text-white text-xs font-semibold rounded-full hover:bg-rose-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
