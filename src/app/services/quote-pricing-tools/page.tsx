import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { buildMetadata } from "@/lib/metadata";
import { getDirectService } from "@/lib/service-catalog";
import { getServicePageContent } from "@/lib/service-page-content";

const service = getDirectService("quote-pricing-tools");

export const metadata = buildMetadata({
  path: "/services/quote-pricing-tools",
  title: "Quote & Pricing Tools | Farcelis",
  description: getServicePageContent("quote-pricing-tools").seoIntro,
});

export default function QuotePricingToolsPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
