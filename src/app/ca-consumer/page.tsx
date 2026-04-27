import { LegalPage } from "@/components/LegalPage";

export default function CAConsumerPage() {
  return (
    <LegalPage
      eyebrow="California Consumer Notice"
      title="California Consumer Policy"
      intro="If you are a California resident and believe a state-specific consumer request applies to your interaction with Farcelis AI Consulting LLC, you may contact the company directly for assistance."
      sections={[
        {
          heading: "Consumer Requests",
          body: "Requests related to access, correction, or deletion of consumer information can be submitted through the contact methods listed on this site. Farcelis AI Consulting LLC will review and respond according to applicable law and the nature of the relationship involved.",
        },
        {
          heading: "Business Context",
          body: "Farcelis primarily operates in a business-to-business and professional services context. Certain information collected or maintained exclusively for those purposes may be handled differently under applicable regulations.",
        },
      ]}
    />
  );
}
