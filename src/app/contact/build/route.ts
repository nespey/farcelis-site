import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL(
      "/contact?work=website-development,app-portal-development,ai-agents-automations,platform-connections,dashboards-decision-views",
      request.url,
    ),
  );
}
