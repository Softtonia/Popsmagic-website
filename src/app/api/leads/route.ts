import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true, message: "Lead captured", data: body });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 400 }
    );
  }
}
