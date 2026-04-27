import { LegalPage } from "@/components/LegalPage";

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal Notice"
      title="Legal Notice"
      intro="This website is operated by Farcelis AI Consulting LLC. The information provided throughout this site is intended for general business, service, and contact purposes."
      sections={[
        {
          heading: "Company Information",
          body: "Farcelis AI Consulting LLC operates as a Florida-based business providing AI consulting, operational systems design, workflow architecture, execution systems, and related strategic services.",
        },
        {
          heading: "Website Use",
          body: "Use of this site does not create a client relationship by itself. A formal engagement begins only after both parties agree to the scope, terms, and any required contractual documents.",
        },
        {
          heading: "Accuracy of Information",
          body: "Farcelis AI Consulting LLC works to keep website information current and accurate, but reserves the right to update, revise, or remove materials at any time without advance notice.",
        },
      ]}
    />
  );
}
