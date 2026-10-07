"use client";

import { useState } from "react";
import { QuantitySelector } from "./quantity-selector";
import { addToCart } from "@/actions/cart";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  price: number;
}

export function AddToCartButton({ productId, productName, price }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await addToCart(productId, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    } catch {
      // handle error
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          Quantity:
        </span>
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full py-3.5 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 disabled:opacity-50 transition shadow-md flex items-center justify-center gap-2"
      >
        {isAdding ? (
          <span>Adding...</span>
        ) : added ? (
          <span>✓ Added to Cart!</span>
        ) : (
          <span>Add to Cart • ${(price * quantity).toFixed(2)}</span>
        )}
      </button>
    </div>
  );
}
