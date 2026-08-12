import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { buildMetadata } from "@/lib/metadata";
import { getDirectService } from "@/lib/service-catalog";
import { getServicePageContent } from "@/lib/service-page-content";

const service = getDirectService("deployment-operations");

export const metadata = buildMetadata({
  path: "/services/deployment-operations",
  title: "Deployment Operations | Farcelis",
  description: getServicePageContent("deployment-operations").seoIntro,
});

export default function DeploymentOperationsPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
