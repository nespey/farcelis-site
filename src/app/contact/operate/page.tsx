import type { Metadata } from "next";

import { CapabilityActionPage } from "@/components/CapabilityActionPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contact/operate",
  title: "Operate With Farcelis | Farcelis",
  description:
    "Tell Farcelis what system, workflow, reporting path, deployment, or support rhythm needs to be stabilized.",
});

export default function OperateActionPage() {
  return <CapabilityActionPage slug="operate" />;
}
