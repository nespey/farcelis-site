import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { buildMetadata } from "@/lib/metadata";
import { getDirectService } from "@/lib/service-catalog";
import { getServicePageContent } from "@/lib/service-page-content";

const service = getDirectService("ai-strategy-governance");

export const metadata = buildMetadata({
  path: "/services/ai-strategy-governance",
  title: "AI Strategy & Governance | Farcelis",
  description: getServicePageContent("ai-strategy-governance").seoIntro,
});

export default function AiStrategyGovernancePage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
