import type { Metadata } from "next";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Popsmagic Makhana Blog & Snacking Stories",
  description: "Read about healthy makhana snacking, roasted recipes, nutrition benefits, and food stories from Popsmagic.",
  canonical: "/blog",
});

const BLOG_POSTS = [
  {
    id: "post-1",
    slug: "top-5-reasons-makhana-is-ultimate-superfood",
    title: "Top 5 Reasons Makhana is India's Ultimate Healthy Superfood",
    category: "Nutrition & Health",
    author: "Chef Popsmagic",
    date: "October 4, 2026",
    excerpt:
      "Packed with plant-based protein, antioxidants, and essential minerals, lotus seeds (makhana) provide sustained energy without empty calories or bloating.",
    readTime: "4 min read",
  },
  {
    id: "post-2",
    slug: "how-to-roast-jumbo-plain-makhana-at-home",
    title: "How to Perfectly Roast Jumbo Plain Makhana in Ghee & Spices at Home",
    category: "Recipes & DIY",
    author: "Popsmagic Kitchen",
    date: "September 28, 2026",
    excerpt:
      "Master the art of achieving maximum crunch with 6+ phool size raw makhana using pure A2 cow ghee, pink salt, and fresh ground spices in under 10 minutes.",
    readTime: "5 min read",
  },
  {
    id: "post-3",
    slug: "behind-the-magic-peri-peri-cheese-flavor-crafting",
    title: "Behind the Magic: How We Craft Our Signature Peri Peri & Cheese Flavours",
    category: "Flavor Stories",
    author: "Founder's Journal",
    date: "September 15, 2026",
    excerpt:
      "An insider look at how we combine small-batch slow roasting with real herb seasonings to create irresistible gourmet snacking moments.",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-zinc-950 text-[#05382b] dark:text-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-2xl mb-12">
          <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full uppercase tracking-wider">
            Popsmagic Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 font-serif text-[#05382b] dark:text-emerald-400">
            Makhana Stories & Recipes
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base leading-relaxed">
            Discover delicious recipes, health tips, and behind-the-scenes stories from the handcrafted kitchen of Popsmagic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between hover:shadow-xl hover:border-[#05382b]/30 transition duration-200"
            >
              <div>
                <div className="h-44 bg-[#FAF6EE] dark:bg-zinc-800/60 rounded-2xl flex items-center justify-center text-5xl mb-5 group-hover:scale-105 transition-transform duration-200">
                  🍿
                </div>
                <div className="flex justify-between items-center text-xs text-zinc-500 font-semibold mb-2">
                  <span className="text-amber-700 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-[#05382b] dark:text-zinc-100 group-hover:text-emerald-600 transition font-serif mt-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-3 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs text-zinc-500 font-medium">
                <span>By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#05382b] dark:text-emerald-400 font-bold hover:underline"
                >
                  Read Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
