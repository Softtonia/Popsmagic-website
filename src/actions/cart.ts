"use server";

export async function addToCart(productId: string, quantity: number = 1) {
  // Server action logic to add item to cart
  return { success: true, productId, quantity };
}

export async function removeFromCart(productId: string) {
  // Server action logic to remove item from cart
  return { success: true, productId };
}

export async function updateCartItemQuantity(productId: string, quantity: number) {
  // Server action logic to update item quantity
  return { success: true, productId, quantity };
}
