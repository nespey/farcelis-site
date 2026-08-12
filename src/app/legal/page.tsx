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
        {
          heading: "Third-Party Logos and Trademarks",
          body: "This site may display third-party names, logos, trademarks, service marks, platform marks, client marks, partner marks, or other brand identifiers for informational, relationship, integration, portfolio, or reference purposes. All third-party logos and trademarks are the property of their respective owners. Their inclusion does not imply ownership by Farcelis AI Consulting LLC, and does not imply sponsorship, endorsement, approval, certification, partnership, or affiliation unless expressly stated.",
        },
        {
          heading: "Relationship and Platform References",
          body: "References to organizations, platforms, technologies, tools, certifications, integrations, prior work, or business relationships are intended to describe relevant experience, capabilities, supported systems, or factual relationship context. Farcelis AI Consulting LLC does not claim that any third-party organization uses, endorses, sponsors, or has adopted any Farcelis product, service, Control Layer, or operating system unless that claim is expressly stated and authorized.",
        },
      ]}
    />
  );
}
