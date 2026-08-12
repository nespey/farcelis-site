import { site } from "@/lib/site-data";

const organizationId = `${site.domain}/#organization`;
const websiteId = `${site.domain}/#website`;

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": organizationId,
        name: site.name,
        alternateName: site.shortName,
        url: site.domain,
        logo: `${site.domain}/logos/farcelis-ai-logo.png`,
        image: `${site.domain}/images/hero-control-layer-preview.png`,
        description: site.summary,
        telephone: site.contact.phone,
        email: site.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.contact.addressLines[0],
          addressLocality: "Lutz",
          addressRegion: "FL",
          postalCode: "33549",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "AdministrativeArea", name: "Florida" },
        ],
        sameAs: site.social.map((item) => item.href),
        knowsAbout: [
          "AI consulting",
          "workflow architecture",
          "AI governance",
          "operational systems",
          "CRM operations",
          "workflow automation",
          "growth systems",
          "managed operations",
          "AI adoption",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.domain,
        name: site.shortName,
        description: site.tagline,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
