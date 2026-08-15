import { NextResponse } from "next/server";

const ownerEmail = "nespey@farcelis.io";
const phone = "(813) 999-5775";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  goal?: string;
  context?: string;
  selectedWork?: string[];
};

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const sendResendEmail = async ({
  to,
  bcc,
  subject,
  text,
}: {
  to: string;
  bcc?: string;
  subject: string;
  text: string;
}) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FARCELIS_EMAIL_FROM ?? "Farcelis <no-reply@farcelis.io>";

  if (!apiKey) {
    throw new Error("Email delivery is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      ...(bcc ? { bcc } : {}),
      subject,
      text,
      reply_to: ownerEmail,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Email delivery failed.");
  }

  return { ok: true };
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid inquiry payload." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const goal = clean(payload.goal);
  const context = clean(payload.context);
  const selectedWork = Array.isArray(payload.selectedWork)
    ? payload.selectedWork.map(clean).filter(Boolean)
    : [];

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const selectedWorkText =
    selectedWork.length > 0 ? selectedWork.map((item) => `- ${item}`).join("\n") : "None selected";

  const ownerMessage = [
    "New Farcelis website inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Selected service, industry, and resource context:",
    selectedWorkText,
    "",
    "What they want to build, grow, or stabilize:",
    goal || "Not provided",
    "",
    "What already exists / useful context:",
    context || "Not provided",
  ].join("\n");

  const visitorMessage = [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to Farcelis. Your inquiry has been received, and I will review it directly.",
    "",
    "Selected service, industry, and resource context:",
    selectedWorkText,
    "",
    "What you shared:",
    goal || "No additional project note was provided.",
    "",
    "Useful context:",
    context || "No additional context was provided.",
    "",
    "Nathan Espey",
    "Founder & CEO",
    "Farcelis AI Consulting",
    ownerEmail,
    phone,
  ].join("\n");

  try {
    await sendResendEmail({
      to: email,
      bcc: ownerEmail,
      subject: "Farcelis inquiry received",
      text: visitorMessage,
    });

    await sendResendEmail({
      to: ownerEmail,
      subject: "New Farcelis website inquiry",
      text: ownerMessage,
    });
  } catch (error) {
    console.error("Farcelis contact email failed.", error);
    return NextResponse.json(
      { error: "The inquiry could not be sent from the page." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
