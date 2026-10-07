import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/data/blog";
import { generateSeoMetadata, generateBlogPostJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return generateSeoMetadata({
      title: "Article Not Found",
      description: "The requested blog post could not be found.",
    });
  }

  return generateSeoMetadata({
    title: post.title,
    description: post.description,
    canonical: `/blog/${post.slug}`,
  });
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostJsonLd = generateBlogPostJsonLd({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    authorName: post.authorName,
  });

  return (
    <article className="container mx-auto py-12 px-4 max-w-3xl">
      <JsonLd data={blogPostJsonLd} />

      <nav className="text-sm text-zinc-500 mb-8 flex items-center gap-2">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-medium truncate">
          {post.title}
        </span>
      </nav>

      <header className="mb-8 space-y-3">
        <span className="text-xs text-rose-600 font-semibold uppercase tracking-wider">
          {post.publishedAt} • By {post.authorName}
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none py-6 border-t dark:border-zinc-800">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
