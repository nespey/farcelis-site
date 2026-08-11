import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { contactPathFor, directServices, getDirectService } from "@/lib/service-catalog";
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
    description: service.summary,
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
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    areaServed: "United States",
    serviceType: service.eyebrow,
    url: `${site.domain}/services/${service.slug}`,
  };

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
        actions={[
          { href: `${contactPathFor(service.slug)}#contact-top`, label: service.primaryCta },
          service.secondaryCta
            ? { href: service.secondaryCta.href, label: service.secondaryCta.label, variant: "secondary" }
            : { href: "/services", label: "View all services", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-light !py-10 lg:!py-12">
          <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">{service.buildKicker ?? "What Farcelis Builds"}</p>
              <h2 className="section-title mt-4 text-slate-950">
                {service.buildTitle ?? "Clear work you can point to and use."}
              </h2>
              <p className="mt-4 max-w-[620px] text-base leading-7 text-slate-600">
                {service.buildSummary ?? "Tell us what needs to work better. We help turn that into the right website, tool, workflow, or follow-up path."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-5 text-slate-800 shadow-[0_14px_24px_rgba(15,23,42,0.045)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="section-shell section-shell-dark !py-10 lg:!py-12">
          <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">{service.processKicker ?? "Engagement Path"}</p>
              <h2 className="section-title mt-4 text-white">
                {service.processTitle ?? "How the work moves."}
              </h2>
            </div>

            <div className="grid gap-3">
              {service.process.map((item, index) => (
                <div key={item} className="rounded-[12px] border border-cyan-100/12 bg-white/[0.045] px-4 py-3.5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    Step {index + 1}
                  </div>
                  <p className="mt-1.5 text-base leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light !py-10 lg:!py-12">
          <div className="section-inner grid gap-5 lg:grid-cols-2">
            <article className="rounded-[18px] border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_30px_rgba(15,23,42,0.05)]">
              <p className="eyebrow text-[#9f412c]">{service.signalsKicker ?? "Good Fit"}</p>
              <ul className="mt-4 grid gap-3">
                {service.signals.map((item) => (
                  <li key={item} className="border-l border-[#9f412c]/28 pl-4 text-base font-semibold leading-7 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[18px] border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_30px_rgba(15,23,42,0.05)]">
              <p className="eyebrow text-[#9f412c]">{service.exclusionsKicker ?? "Not a Fit"}</p>
              <ul className="mt-4 grid gap-3">
                {service.exclusions.map((item) => (
                  <li key={item} className="border-l border-[#9f412c]/28 pl-4 text-base font-semibold leading-7 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell section-shell-dark !py-10 lg:!py-12">
          <div className="section-inner">
            <div className="max-w-[900px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Related Services</p>
              <h2 className="section-title mt-4 text-white">
                {service.relatedTitle ?? "Other services that often go with this."}
              </h2>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {service.related.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[14px] border border-cyan-100/12 bg-white/[0.045] px-4 py-4 transition hover:border-cyan-100/24 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{item.detail}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
