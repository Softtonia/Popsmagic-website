"use client";

import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden w-max">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="px-3 py-1.5 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 disabled:opacity-40 transition"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="px-4 py-1.5 text-sm font-semibold min-w-[40px] text-center">
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="px-3 py-1.5 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 disabled:opacity-40 transition"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
