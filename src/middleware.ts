import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const legacyContactRedirects: Record<string, string> = {
  "/contact/build":
    "/contact?work=website-development,app-portal-development,ai-agents-automations,platform-connections,dashboards-decision-views",
  "/contact/grow":
    "/contact?work=seo-search-visibility,aeo-ai-search-visibility,google-ads-paid-search,meta-ads-paid-social,crm-revenue-operations,content-revenue-systems",
  "/contact/operate":
    "/contact?work=ai-strategy-governance,workflow-managed-operations,farcelis-control-layer,reporting-decision-systems,deployment-operations",
};

export function middleware(request: NextRequest) {
  const target = legacyContactRedirects[request.nextUrl.pathname];

  if (!target) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(target, request.url));
}

export const config = {
  matcher: ["/contact/build", "/contact/grow", "/contact/operate"],
};
