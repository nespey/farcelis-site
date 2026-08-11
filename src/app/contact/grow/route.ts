import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL(
      "/contact?work=seo-search-visibility,aeo-ai-search-visibility,google-ads-paid-search,meta-ads-paid-social,crm-revenue-operations,content-revenue-systems",
      request.url,
    ),
  );
}
