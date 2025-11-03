import { NextResponse } from "next/server";

// Cache for 2 minutes
export const revalidate = 120;

// Expected Google Sheet columns (case-insensitive):
// id, title, preview, author, date, url
export async function GET() {
  try {
    const SHEET_ID = process.env.GOOGLE_SHEET_ID || process.env.SHEET_ID;
    const SHEET_TAB =
      process.env.GOOGLE_SHEET_TAB || process.env.SHEET_TAB || "Posts";
    const SHEET_JSON_URL = process.env.SHEET_JSON_URL;

    const url = SHEET_JSON_URL
      ? SHEET_JSON_URL
      : SHEET_ID
      ? `https://opensheet.elk.sh/${SHEET_ID}/${encodeURIComponent(SHEET_TAB)}`
      : null;

    if (!url) {
      return NextResponse.json(
        {
          items: [],
          message:
            "LinkedIn sheet source not configured. Set GOOGLE_SHEET_ID (+ GOOGLE_SHEET_TAB) or SHEET_JSON_URL.",
        },
        { status: 200 }
      );
    }

    const res = await fetch(url, { next: { revalidate } });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Sheet fetch error ${res.status}: ${text}`);
    }
    const rows: any[] = await res.json();

    const items = (rows || [])
      .map((row, idx) => {
        const id = String(row.id || row.ID || row.Id || idx + 1);
        const title = row.title || row.Title || undefined;
        const preview = row.preview || row.Preview || undefined;
        const author = row.author || row.Author || undefined;
        const date = row.date || row.Date || undefined;
        const url: string | undefined =
          row.url || row.URL || row.Link || undefined;
        if (!url) return null;
        return { id, title, preview, author, date, url };
      })
      .filter(Boolean);

    return NextResponse.json({ items });
  } catch (err: any) {
    console.error("/api/linkedin-sheet error:", err?.message || err);
    return NextResponse.json(
      { items: [], error: "Unable to load sheet" },
      { status: 200 }
    );
  }
}
