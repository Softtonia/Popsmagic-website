"use client";

import { useState } from "react";

interface FilterOption {
  id: string;
  name: string;
}

interface ProductFiltersProps {
  categories: FilterOption[];
  onFilterChange?: (selectedCategory: string, sortBy: string) => void;
}

export function ProductFilters({
  categories,
  onFilterChange,
}: ProductFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    if (onFilterChange) onFilterChange(id, sortBy);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSortBy(val);
    if (onFilterChange) onFilterChange(selectedCategory, val);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b dark:border-zinc-800 mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategorySelect("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
            selectedCategory === "all"
              ? "bg-rose-600 text-white"
              : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-200"
          }`}
        >
          All Pops
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedCategory === cat.id
                ? "bg-rose-600 text-white"
                : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs font-medium">
        <label htmlFor="sort-by" className="text-zinc-500">
          Sort by:
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={handleSortChange}
          className="bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-rose-500"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}
