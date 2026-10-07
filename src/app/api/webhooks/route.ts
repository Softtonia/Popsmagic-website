import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.text();
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Webhook error" },
      { status: 400 }
    );
  }
}
