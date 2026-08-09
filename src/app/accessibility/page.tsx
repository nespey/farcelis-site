import { LegalPage } from "@/components/LegalPage";

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility and Accommodations"
      title="Accessibility, Accommodations & E-Verify"
      intro="Farcelis AI Consulting LLC is committed to a professional and accessible digital experience and supports reasonable communication accommodations where needed."
      sections={[
        {
          heading: "Accessibility",
          body: "If you experience difficulty accessing any part of this site or need information in another format, Farcelis AI Consulting LLC welcomes direct outreach so the issue can be addressed promptly.",
        },
        {
          heading: "Accommodations",
          body: "Reasonable accommodations may be discussed for service conversations, scheduling, and engagement-related communication whenever appropriate.",
        },
        {
          heading: "E-Verify",
          body: "Where employment or contractor requirements call for identity or work-authorization verification processes, Farcelis AI Consulting LLC follows the applicable procedural requirements for those contexts.",
        },
      ]}
    />
  );
}
