import type { Metadata } from "next";

import { TimeLeakTest } from "@/components/TimeLeakTest";

export const metadata: Metadata = {
  title: "Time Leak Test | Farcelis AI Consulting",
  description:
    "Take the free Time Leak Test. Use your last 10 requests to estimate time spent on follow-up and duplicate entry. No email required.",
  alternates: { canonical: "/time-leak-test" },
  openGraph: {
    title: "Free Time Leak Test | Farcelis AI Consulting",
    description: "Use your last 10 requests to see how much time goes into follow-up and duplicate entry.",
    url: "/time-leak-test",
  },
};

export default function TimeLeakTestPage() {
  return <TimeLeakTest />;
}
