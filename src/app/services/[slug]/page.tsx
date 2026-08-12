import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { buildMetadata } from "@/lib/metadata";
import { contactPathFor, directServices, getDirectService } from "@/lib/service-catalog";
import { getServicePageContent } from "@/lib/service-page-content";
import { site } from "@/lib/site-data";

const staticServiceSlugs = new Set([
  "ai-strategy-governance",
  "workflow-operations",
  "managed-operations",
  "deployment-operations",
  "quote-pricing-tools",
]);

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return directServices
    .filter((service) => !staticServiceSlugs.has(service.slug))
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDirectService(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    path: `/services/${service.slug}`,
    title: `${service.navLabel} | Farcelis`,
    description: getServicePageContent(service.slug).seoIntro,
  });
}

export default async function DirectServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getDirectService(slug);

  if (!service || staticServiceSlugs.has(slug)) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navLabel,
    description: getServicePageContent(service.slug).seoIntro,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    areaServed: "United States",
    serviceType: service.eyebrow,
    url: `${site.domain}/services/${service.slug}`,
  };
  const isWebsiteDevelopment = service.slug === "website-development";

  if (!isWebsiteDevelopment) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ServiceDetailPage service={service} />
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageIntro
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
        compact={isWebsiteDevelopment}
        className={isWebsiteDevelopment ? "website-dev-page-intro" : ""}
        actions={[
          { href: `${contactPathFor(service.slug)}#contact-top`, label: service.primaryCta },
          service.secondaryCta
            ? { href: service.secondaryCta.href, label: service.secondaryCta.label, variant: "secondary" }
            : { href: "/services", label: "View all services", variant: "secondary" },
        ]}
      />

      <WebsiteDevelopmentShowcase />

      <Reveal delayMs={150}>
        <section
          className={`section-shell section-shell-dark ${
            isWebsiteDevelopment ? "!pt-0 !pb-8 lg:!pt-1 lg:!pb-10" : "!py-10 lg:!py-12"
          } ${isWebsiteDevelopment ? "website-dev-related-section" : ""}`}
        >
          <div className="section-inner">
            <div className="max-w-[900px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Related Services</p>
              <h2 className="section-title mt-4 text-white">
                {service.relatedTitle ?? "Other services that often go with this."}
              </h2>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {service.related.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex min-h-[84px] flex-col items-center justify-center rounded-[14px] border border-cyan-100/12 bg-white/[0.045] px-4 py-3 text-center transition hover:border-cyan-100/24 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">{item.label}</h3>
                  <p className="mt-1.5 max-w-full text-sm leading-5 text-slate-300">{item.detail}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

function WebsiteDevelopmentShowcase() {
  return (
    <Reveal delayMs={40}>
      <section className="website-dev-showcase section-shell section-shell-light !pt-0 !pb-0 lg:!pt-0 lg:!pb-0">
        <div className="section-inner">
          <div className="website-dev-visual relative hidden overflow-hidden px-6 py-8 md:block lg:min-h-[440px] lg:px-8 lg:py-10">
            <Image
              src="/images/services/website-development-lightflow-hero.png"
              alt="High-speed light flow and floating digital windows representing fast connected website development"
              fill
              sizes="100vw"
              className="website-dev-visual-image absolute inset-0 object-cover object-center brightness-[1.28] contrast-[1.12] saturate-[1.55]"
              priority={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#061824_0%,rgba(6,24,36,0.86)_24%,rgba(6,24,36,0.42)_50%,rgba(6,24,36,0)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_43%,rgba(38,196,255,0.22),transparent_36%),radial-gradient(circle_at_36%_68%,rgba(255,126,70,0.2),transparent_34%)] mix-blend-screen" />
            <div className="website-dev-copy relative z-10 flex max-w-[600px] -translate-x-8 flex-col items-center text-center md:-translate-x-12 lg:-translate-x-14">
              <h2 className="website-dev-stack-heading inline-flex max-w-[600px] flex-col items-center text-center text-[28px] font-semibold leading-[1.06] tracking-[-0.055em] text-white md:text-[31px] lg:text-[32px]">
                <span className="block whitespace-nowrap">Build it new. Rebuild what is there.</span>
                <span className="mt-2 block">Add what is missing.</span>
              </h2>
              <p className="website-dev-stack-copy mt-4 inline-flex max-w-[500px] flex-col items-center text-center text-base leading-7 text-slate-300">
                <span className="block">The site should make the offer clear and earn trust quickly.</span>
                <span className="block">Then move the right person to the next step.</span>
              </p>
              <div className="website-dev-stack-options mt-12 inline-flex flex-col items-center gap-5 text-center text-lg font-semibold uppercase tracking-[-0.04em] text-white">
                <span>NEW BUILD</span>
                <span>REBUILD OR CLEANUP</span>
                <span>FEATURE ADD-ON</span>
              </div>
            </div>
          </div>
          <div className="website-dev-mobile-panel relative overflow-hidden px-5 py-7 md:hidden">
            <Image
              src="/images/services/website-development-lightflow-hero.png"
              alt=""
              fill
              sizes="100vw"
              className="absolute inset-0 object-cover object-center brightness-[1.18] contrast-[1.08] saturate-[1.45]"
              priority={false}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,28,0.92)_0%,rgba(3,18,28,0.84)_46%,rgba(3,18,28,0.94)_100%)]" />
            <div className="website-dev-mobile-copy relative z-10 mx-auto flex flex-col items-center text-center">
              <h2 className="website-dev-mobile-heading font-semibold leading-[1.08] tracking-[-0.055em] text-white">
                <span className="block whitespace-nowrap">Build it new. Rebuild what is there.</span>
                <span className="mt-2 block">Add what is missing.</span>
              </h2>
              <p className="website-dev-mobile-subcopy mt-4 flex flex-col items-center text-slate-200">
                <span>The site should make the offer clear and earn trust quickly.</span>
                <span>Then move the right person to the next step.</span>
              </p>
              <div className="website-dev-mobile-options mt-7 flex flex-col items-center gap-3 text-[0.88rem] font-semibold uppercase tracking-[0.04em] text-white">
                <span>NEW BUILD</span>
                <span>REBUILD OR CLEANUP</span>
                <span>FEATURE ADD-ON</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
