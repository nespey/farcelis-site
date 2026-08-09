import type { Metadata } from "next";

import { CapabilityPathPage } from "@/components/CapabilityPathPage";
import { buildMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = buildMetadata({
  path: "/services/operate",
  title: "Operate Path | Farcelis",
  description:
    "Operate is the Farcelis path for workflow control, AI governance, reporting, managed operations, deployment continuity, and support rhythm.",
});

export default function OperatePathPage() {
  return <CapabilityPathPage slug="operate" />;
}
