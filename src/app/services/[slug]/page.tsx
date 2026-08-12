import type { Metadata } from "next";
import Image from "next/image";
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
  const isWebsiteDevelopment = service.slug === "website-development";

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

      {isWebsiteDevelopment ? (
        <WebsiteDevelopmentShowcase service={service} />
      ) : (
        <>
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
        </>
      )}

      {!isWebsiteDevelopment && (
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
      )}

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

function WebsiteDevelopmentShowcase({ service }: { service: NonNullable<ReturnType<typeof getDirectService>> }) {
  return (
    <Reveal delayMs={40}>
      <section className="section-shell section-shell-light !py-6 lg:!py-8">
        <div className="section-inner">
          <div className="grid items-center gap-6 overflow-hidden rounded-[24px] border border-cyan-100/10 bg-[#061824] px-6 py-6 shadow-[0_26px_80px_rgba(0,0,0,0.2)] lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1.52fr)] lg:px-8">
            <div className="relative z-10">
              <p className="eyebrow text-[color:var(--color-accent)]">Website Work</p>
              <h2 className="max-w-[560px] text-4xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
                Build it new. Rebuild what is there. Add what is missing.
              </h2>
              <p className="mt-4 max-w-[520px] text-base leading-7 text-slate-300">
                The site should make the offer clear, earn trust quickly, and move the right person to the next step.
              </p>
            </div>

            <div className="relative -mr-8 min-h-[280px] lg:-mr-20 lg:min-h-[360px]">
              <Image
                src="/images/services/website-development-lightflow.png"
                alt="Abstract light flow with floating website panels representing fast website development and connected digital paths"
                width={739}
                height={415}
                className="absolute inset-y-0 right-0 h-full w-full object-cover object-center"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ["New build", "A new site built around the offer, audience, pages, and follow-up path."],
              ["Rebuild or cleanup", "A sharper site when the current one is outdated, confusing, slow, or hard to manage."],
              ["Feature add-on", "Quote tools, intake forms, landing pages, dashboards, and connections added where they fit."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-[16px] border border-cyan-100/12 bg-white/[0.045] px-5 py-4">
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
