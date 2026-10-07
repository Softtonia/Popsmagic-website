import type { Metadata } from "next";

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function generateSeoMetadata({
  title,
  description,
  image = "/og-image.png",
  canonical,
  noIndex = false,
}: SeoProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://popsmagic.com";
  const fullTitle = `${title} | Popsmagic`;

  return {
    title: fullTitle,
    description,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: canonical
      ? { canonical: `${baseUrl}${canonical}` }
      : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: "Popsmagic",
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${baseUrl}${image}`],
    },
  };
}

// JSON-LD Structured Data Generators
export function generateProductJsonLd(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  sku: string;
  inStock: boolean;
  slug: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://popsmagic.com";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.image.startsWith("http") ? product.image : `${baseUrl}${product.image}`],
    sku: product.sku,
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/products/${product.slug}`,
      priceCurrency: product.currency || "USD",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };
}

export function generateOrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://popsmagic.com";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Popsmagic",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      "https://instagram.com/popsmagic",
      "https://facebook.com/popsmagic",
    ],
  };
}

export function generateBlogPostJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  authorName: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://popsmagic.com";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
  };
}
