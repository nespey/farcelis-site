import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL(
      "/contact?work=ai-strategy-governance,workflow-managed-operations,farcelis-control-layer,reporting-decision-systems,deployment-operations",
      request.url,
    ),
  );
}
