import type { Metadata } from "next";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { getCategories } from "@/lib/data/products";

export const metadata: Metadata = generateSeoMetadata({
  title: "Popsicle Categories",
  description: "Explore popsicles by flavor profile and dietary preferences.",
  canonical: "/categories",
});

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Categories</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Find your perfect treat categorized by flavor profiles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group p-8 border rounded-2xl bg-white dark:bg-zinc-900 dark:border-zinc-800 hover:border-rose-500 transition shadow-sm"
          >
            <h2 className="text-2xl font-bold group-hover:text-rose-600 transition">
              {category.name}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              {category.description}
            </p>
            <span className="inline-block mt-4 text-sm font-semibold text-rose-600 group-hover:translate-x-1 transition-transform">
              View Products →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
