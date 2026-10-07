export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  authorName: string;
}

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "post_1",
    slug: "making-of-gourmet-popsicles",
    title: "The Art of Handcrafted Gourmet Popsicles",
    description: "Discover how we select organic fruits and slow-churn natural bases for our pops.",
    content: "Crafting popsicles requires balance, temperature control, and premium real ingredients...",
    publishedAt: "2026-10-01",
    authorName: "Chef Pops",
  },
  {
    id: "post_2",
    slug: "top-summer-flavors",
    title: "Top 5 Refreshing Summer Flavors of 2026",
    description: "From Mango Passion to Strawberry Basil, see what our customers loved most this season.",
    content: "Summer calls for crisp, cold, and refreshing treats that transport you to paradise...",
    publishedAt: "2026-09-15",
    authorName: "Magic Team",
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  return MOCK_BLOG_POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug);
  return post || null;
}
