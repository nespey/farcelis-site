import { HomeExperience } from "@/components/HomeExperience";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.home);

export default function HomePage() {
  return <HomeExperience />;
}
