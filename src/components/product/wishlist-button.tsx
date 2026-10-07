"use client";

import { useState } from "react";

interface WishlistButtonProps {
  productId: string;
  initialSaved?: boolean;
}

export function WishlistButton({
  productId,
  initialSaved = false,
}: WishlistButtonProps) {
  const [isSaved, setIsSaved] = useState(initialSaved);

  const toggleWishlist = () => {
    setIsSaved((prev) => !prev);
    // Client-side state handling / storage update
  };

  return (
    <button
      type="button"
      onClick={toggleWishlist}
      className={`p-2.5 rounded-full border transition ${
        isSaved
          ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/60 dark:border-rose-900"
          : "border-zinc-300 dark:border-zinc-700 text-zinc-400 hover:text-rose-500"
      }`}
      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}
