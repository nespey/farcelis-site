import { TimeLeakReview } from "@/components/TimeLeakReview";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Workflow Handoff Review | Farcelis AI Consulting",
  description: "Request a fixed-price Workflow Handoff Review and trace the process that is taking your team's time.",
  path: "/time-leak-review",
});

export default function TimeLeakReviewPage() {
  return <TimeLeakReview />;
}
