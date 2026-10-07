"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: { id: string; url: string; alt: string }[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="h-96 bg-rose-50 dark:bg-rose-950/40 rounded-3xl flex items-center justify-center text-8xl shadow-inner">
        🍧
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="h-96 bg-rose-50 dark:bg-rose-950/40 rounded-3xl flex items-center justify-center text-8xl shadow-inner transition-all overflow-hidden relative">
        <span className="animate-pulse">🍧</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`w-20 h-20 rounded-xl border-2 overflow-hidden flex items-center justify-center text-2xl transition ${
              selectedImageIndex === index
                ? "border-rose-600 ring-2 ring-rose-500/30"
                : "border-transparent bg-zinc-100 dark:bg-zinc-800 hover:border-zinc-300"
            }`}
          >
            🍧
          </button>
        ))}
      </div>
    </div>
  );
}
