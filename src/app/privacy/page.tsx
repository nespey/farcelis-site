import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="Farcelis AI Consulting LLC respects the privacy of visitors, clients, and prospective clients. This page explains how contact and site interaction information may be handled."
      sections={[
        {
          heading: "Information Collected",
          body: "Information submitted through forms, email, scheduling flows, or direct outreach may include names, company details, contact information, and business context needed to respond to inquiries or discuss services.",
        },
        {
          heading: "How Information Is Used",
          body: "Information may be used to respond to inquiries, evaluate service fit, coordinate calls, deliver requested materials, or communicate about potential or active engagements.",
        },
        {
          heading: "Data Handling",
          body: "Farcelis AI Consulting LLC does not present client-confidential operational data publicly and treats engagement-sensitive information with appropriate care, access control, and discretion.",
        },
      ]}
    />
  );
}
