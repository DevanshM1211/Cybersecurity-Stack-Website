import { NextResponse } from "next/server";
import data from "@/data/linkedin-posts.json" assert { type: "json" };

export const revalidate = 60; // 1 minute (static manual list)

export async function GET() {
  const items = Array.isArray((data as any).items) ? (data as any).items : [];
  return NextResponse.json({ items });
}
