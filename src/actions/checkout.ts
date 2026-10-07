"use server";

export async function processCheckout(formData: FormData) {
  // Server action logic to process checkout
  const email = formData.get("email") as string;
  return { success: true, message: "Order processed successfully", email };
}
