import type { Metadata } from "next";

import { CapabilityActionPage } from "@/components/CapabilityActionPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contact/build",
  title: "Build With Farcelis | Farcelis",
  description:
    "Tell Farcelis what you want to build, fix, connect, or launch across websites, apps, portals, dashboards, automations, and deployment paths.",
});

export default function BuildActionPage() {
  return <CapabilityActionPage slug="build" />;
}
