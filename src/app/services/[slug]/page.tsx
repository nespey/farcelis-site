import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { directServices, getDirectService } from "@/lib/service-catalog";
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
          { href: "/contact", label: service.primaryCta },
          service.secondaryCta
            ? { href: service.secondaryCta.href, label: service.secondaryCta.label, variant: "secondary" }
            : { href: "/services", label: "View all services", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">What Farcelis Builds</p>
              <h2 className="section-title mt-5 text-slate-950">
                The work is defined around a business outcome first, then shaped into the right system.
              </h2>
              <p className="mt-5 max-w-[620px] text-base leading-8 text-slate-600">
                Farcelis keeps the technical path clear without forcing buyers to translate their idea into platform language before the work can start.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-slate-200 bg-white px-5 py-5 text-sm font-semibold leading-6 text-slate-800 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Engagement Path</p>
              <h2 className="section-title mt-5 text-white">
                From the first conversation to a working, owned, and manageable system.
              </h2>
            </div>

            <div className="grid gap-3">
              {service.process.map((item, index) => (
                <div key={item} className="rounded-[22px] border border-cyan-100/12 bg-white/[0.045] px-5 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    Step {index + 1}
                  </div>
                  <p className="mt-2 text-lg leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-5 lg:grid-cols-2">
            <article className="rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
              <p className="eyebrow text-[#9f412c]">Good Fit Signals</p>
              <ul className="mt-5 grid gap-4">
                {service.signals.map((item) => (
                  <li key={item} className="border-l border-[#9f412c]/28 pl-4 text-base font-semibold leading-7 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
              <p className="eyebrow text-[#9f412c]">Boundary</p>
              <ul className="mt-5 grid gap-4">
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
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div className="max-w-[900px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Related Services</p>
              <h2 className="section-title mt-5 text-white">
                This service connects back into the larger Build, Grow, and Operate model.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {service.related.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[24px] border border-cyan-100/12 bg-white/[0.045] px-5 py-6 transition hover:border-cyan-100/24 hover:bg-white/[0.07]"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
