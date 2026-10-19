import type { Metadata } from "next";
import { PursuitWorkspace } from "@/components/PursuitWorkspace";

export const metadata: Metadata = {
  title: "Pursuit Desk Demo | Farcelis",
  description: "Interactive sample pursuit workspace for Farcelis Pursuit Desk.",
  robots: { index: false, follow: false },
};

export default function PursuitDeskDemoPage() {
  return <PursuitWorkspace />;
}
