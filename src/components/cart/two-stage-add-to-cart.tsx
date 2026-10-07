"use client";

import React from "react";
import { useCart } from "@/hooks/useCart";

export interface TwoStageAddToCartProps {
  productId: string;
  productName: string;
  price: number;
  btnClass?: string;
  label?: string;
}

export function TwoStageAddToCart({
  productId,
  productName,
  price,
  btnClass = "bg-[#E67E22] hover:bg-[#D35400] text-white font-bold",
  label = "ADD TO CART",
}: TwoStageAddToCartProps) {
  const { getItemQuantity, addItem, updateQuantity } = useCart();
  const currentQuantity = getItemQuantity(productId);

  const handleInitialAddToCart = () => {
    addItem({ id: productId, name: productName, price }, 1);
  };

  const handleIncrement = () => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(productId, currentQuantity - 1);
  };

  // Stage 1: Initial Button
  if (currentQuantity <= 0) {
    return (
      <button
        type="button"
        onClick={handleInitialAddToCart}
        className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 ${btnClass}`}
      >
        <span>{label}</span>
      </button>
    );
  }

  // Stage 2: Quantity Controls (− Quantity +)
  return (
    <div className="flex items-center justify-between bg-black/20 backdrop-blur-xs rounded-full px-2 py-1 border border-white/30 text-white min-w-[130px] shadow-md animate-in fade-in duration-150">
      {/* Minus Button */}
      <button
        type="button"
        onClick={handleDecrement}
        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-black text-base transition-all active:scale-90"
        aria-label="Decrease quantity"
      >
        −
      </button>

      {/* Live Quantity Display */}
      <span className="font-black text-sm px-2 text-center min-w-[24px]">
        {currentQuantity}
      </span>

      {/* Plus Button */}
      <button
        type="button"
        onClick={handleIncrement}
        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-black text-base transition-all active:scale-90"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
