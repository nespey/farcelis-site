import { LegalPage } from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Terms of Service"
      intro="By accessing this website, visitors agree to use it for lawful and professional purposes only."
      sections={[
        {
          heading: "Use of Materials",
          body: "Website copy, visuals, trademarks, logos, and original materials associated with Farcelis AI Consulting LLC may not be copied, redistributed, or misrepresented without permission.",
        },
        {
          heading: "No Guarantee of Outcome",
          body: "Website content describes service direction, operating philosophy, and capability areas, but does not guarantee specific client outcomes outside of a formal engagement agreement.",
        },
        {
          heading: "Changes",
          body: "Farcelis AI Consulting LLC may update these terms or related site policies as the business, legal requirements, or service structure evolves.",
        },
      ]}
    />
  );
}
