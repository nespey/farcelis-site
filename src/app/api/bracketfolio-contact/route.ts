import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

type Inquiry = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  service?: unknown;
  timeline?: unknown;
  message?: unknown;
  website?: unknown;
};

const serviceNames: Record<string, string> = {
  grants: "Grants & proposals",
  books: "Books & reporting",
  both: "Grants, proposals & bookkeeping",
};

const clean = (value: unknown, length: number) =>
  typeof value === "string" ? value.trim().slice(0, length) : "";

export async function POST(request: Request) {
  const expected = process.env.BRACKETFOLIO_CONTACT_SECRET;
  const provided = request.headers.get("x-bracketfolio-secret") ?? "";
  if (!expected || provided.length !== expected.length ||
      !timingSafeEqual(Buffer.from(provided), Buffer.from(expected))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: Inquiry;
  try {
    payload = (await request.json()) as Inquiry;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (clean(payload.website, 100)) return NextResponse.json({ ok: true });

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254);
  const organization = clean(payload.organization, 160);
  const service = clean(payload.service, 20);
  const timeline = clean(payload.timeline, 120);
  const message = clean(payload.message, 3000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !serviceNames[service] || !message) {
    return NextResponse.json({ error: "Missing inquiry details" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Mail unavailable" }, { status: 503 });

  const text = [
    "New BracketFolio website inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "Not provided"}`,
    `Service: ${serviceNames[service]}`,
    `Timing: ${timeline || "Not provided"}`,
    "",
    "What they need:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.FARCELIS_EMAIL_FROM ?? "Farcelis <no-reply@farcelis.io>",
        to: "info@bracketfolio.io",
        reply_to: email,
        subject: `BracketFolio inquiry: ${serviceNames[service]}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("BracketFolio mail delivery failed", response.status);
      return NextResponse.json({ error: "Mail delivery failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("BracketFolio mail delivery failed", error);
    return NextResponse.json({ error: "Mail delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
