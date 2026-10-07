import { Product, Category } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    slug: "mango-passion-pop",
    name: "Mango Passion Magic",
    description: "Tropical Alphonso mangoes blended with passion fruit puree.",
    price: 4.99,
    image: "/images/mango-pop.jpg",
    category: "fruit-pops",
    inStock: true,
  },
  {
    id: "prod_2",
    slug: "strawberry-basil-pop",
    name: "Strawberry Basil Bliss",
    description: "Fresh organic strawberries infused with fresh sweet basil leaves.",
    price: 4.99,
    image: "/images/strawberry-pop.jpg",
    category: "fruit-pops",
    inStock: true,
  },
  {
    id: "prod_3",
    slug: "dark-chocolate-fudge",
    name: "Dark Chocolate Velvet",
    description: "Rich 70% dark Belgian chocolate cream pop.",
    price: 5.49,
    image: "/images/chocolate-pop.jpg",
    category: "cream-pops",
    inStock: true,
  },
];

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat_1",
    slug: "fruit-pops",
    name: "Fruit Pops",
    description: "100% natural fruit popsicles with no added refined sugars.",
  },
  {
    id: "cat_2",
    slug: "cream-pops",
    name: "Cream & Fudge Pops",
    description: "Indulgent artisanal dairy and coconut cream pops.",
  },
];

// Server-side data fetching functions (Server Components default)
export async function getProducts(): Promise<Product[]> {
  // Simulating async DB fetch
  return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
  return product || null;
}

export async function getCategories(): Promise<Category[]> {
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const category = MOCK_CATEGORIES.find((c) => c.slug === slug);
  return category || null;
}
