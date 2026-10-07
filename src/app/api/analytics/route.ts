import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const event = await request.json();
    return NextResponse.json({ success: true, event });
  } catch {
    return NextResponse.json(
      { success: false, error: "Analytics tracking failed" },
      { status: 400 }
    );
  }
}
