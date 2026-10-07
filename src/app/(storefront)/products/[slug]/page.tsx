import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProducts } from "@/lib/data/products";
import { generateSeoMetadata, generateProductJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo";
import { formatCurrency } from "@/lib/utils";
import { AddToCartButton, WishlistButton, ProductGallery } from "@/components/product";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return generateSeoMetadata({
      title: "Product Not Found",
      description: "The requested popsicle could not be found.",
    });
  }

  return generateSeoMetadata({
    title: product.name,
    description: product.description,
    canonical: `/products/${product.slug}`,
    image: product.image,
  });
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = generateProductJsonLd({
    name: product.name,
    description: product.description,
    image: product.image,
    price: product.price,
    sku: product.id,
    inStock: product.inStock,
    slug: product.slug,
  });

  return (
    <main className="container mx-auto py-12 px-4 max-w-5xl">
      <JsonLd data={productJsonLd} />

      <nav className="text-sm text-zinc-500 mb-8 flex items-center gap-2">
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-medium">
          {product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Interactive Client Gallery */}
        <ProductGallery
          images={[
            { id: "1", url: product.image, alt: product.name },
            { id: "2", url: product.image, alt: `${product.name} detail` },
          ]}
        />

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight mt-2">{product.name}</h1>
            </div>
            {/* Interactive Client Wishlist Button */}
            <WishlistButton productId={product.id} />
          </div>

          <p className="text-3xl font-extrabold text-rose-600">
            {formatCurrency(product.price)}
          </p>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-4 space-y-4 border-t dark:border-zinc-800">
            <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              <span>✓ In Stock</span>
              <span>• Ready for local delivery</span>
            </div>

            {/* Interactive Client Add to Cart & Quantity Selector */}
            <AddToCartButton
              productId={product.id}
              productName={product.name}
              price={product.price}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
