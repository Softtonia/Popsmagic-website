import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, getCategories, getProducts } from "@/lib/data/products";
import { generateSeoMetadata } from "@/lib/seo";
import { formatCurrency } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return generateSeoMetadata({
      title: "Category Not Found",
      description: "The requested category could not be found.",
    });
  }

  return generateSeoMetadata({
    title: category.name,
    description: category.description || `Browse ${category.name} popsicles`,
    canonical: `/categories/${category.slug}`,
  });
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const allProducts = await getProducts();
  const categoryProducts = allProducts.filter((p) => p.category === slug);

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <nav className="text-sm text-zinc-500 mb-8 flex items-center gap-2">
        <Link href="/categories" className="hover:underline">
          Categories
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-medium">
          {category.name}
        </span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">{category.name}</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
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
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
