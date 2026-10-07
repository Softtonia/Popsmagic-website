"use server";

export async function updateAccountProfile(formData: FormData) {
  const name = formData.get("name") as string;
  return { success: true, name };
}
