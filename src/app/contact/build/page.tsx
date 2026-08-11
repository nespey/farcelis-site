import { redirect } from "next/navigation";

export default function BuildActionPage() {
  redirect(
    "/contact?work=website-development,app-portal-development,ai-agents-automations,platform-connections,dashboards-decision-views",
  );
}
