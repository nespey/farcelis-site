import type { Metadata } from "next";

import { CapabilityPathPage } from "@/components/CapabilityPathPage";
import { buildMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = buildMetadata({
  path: "/services/build",
  title: "Build Path | Farcelis",
  description:
    "Build is the Farcelis path for websites, apps, portals, dashboards, automations, code cleanup, deployment, and launch support.",
});

export default function BuildPathPage() {
  return <CapabilityPathPage slug="build" />;
}
