import type { Metadata } from "next";

import { CapabilityActionPage } from "@/components/CapabilityActionPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contact/grow",
  title: "Grow With Farcelis | Farcelis",
  description:
    "Tell Farcelis what visibility, campaign, content, CRM, or revenue movement you want to create.",
});

export default function GrowActionPage() {
  return <CapabilityActionPage slug="grow" />;
}
