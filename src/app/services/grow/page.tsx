import type { Metadata } from "next";

import { CapabilityPathPage } from "@/components/CapabilityPathPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/services/grow",
  title: "Grow Path | Farcelis",
  description:
    "Grow is the Farcelis path for search visibility, campaigns, content, CRM, revenue operations, and measurable market movement.",
});

export default function GrowPathPage() {
  return <CapabilityPathPage slug="grow" />;
}
