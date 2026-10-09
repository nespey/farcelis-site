import type { Metadata } from "next";

import { TimeLeakTest } from "@/components/TimeLeakTest";

export const metadata: Metadata = {
  title: "15-Minute Time Leak Test | Farcelis AI Consulting",
  description:
    "Find where one recurring workflow is costing your team time. Use your own last 10 requests to estimate the weekly effort spent on follow-up and duplicate entry.",
  alternates: { canonical: "/time-leak-test" },
  openGraph: {
    title: "Where is your time going? | Farcelis AI Consulting",
    description: "A practical, free test for the handoffs and repeat work hiding in your day.",
    url: "/time-leak-test",
  },
};

export default function TimeLeakTestPage() {
  return <TimeLeakTest />;
}
