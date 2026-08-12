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
  const problemTiles = [
    {
      title: "The site feels behind.",
      detail: "Rebuild the message, page flow, mobile experience, and search foundation so visitors know what to do next.",
      accent: "from-[#ff7f50] to-[#e346dc]",
    },
    {
      title: "Traffic is not turning into action.",
      detail: "Add clearer service pages, landing pages, forms, quote paths, and follow-up routes for serious inquiries.",
      accent: "from-[#20d59b] to-[#44c7f4]",
    },
    {
      title: "The website is hard to own.",
      detail: "Clean up structure, speed, platform decisions, tracking, and launch support so the site can keep working.",
      accent: "from-[#8b6df6] to-[#46d7ee]",
    },
  ];

  return (
    <Reveal delayMs={40}>
      <section className="section-shell section-shell-light !py-10 lg:!py-12">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div className="self-center">
              <p className="eyebrow text-[color:var(--color-accent)]">Problems We Fix</p>
              <h2 className="section-title mt-4 max-w-[680px] text-white">
                Websites that stop making buyers work so hard.
              </h2>
              <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-300">
                If the site is old, unclear, slow, hard to update, or not producing real inquiries,
                Farcelis can rebuild the path from visit to follow-up.
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-cyan-100/12 bg-[#061824] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(68,199,244,0.22),transparent_26%),radial-gradient(circle_at_78%_24%,rgba(227,70,220,0.18),transparent_25%),linear-gradient(135deg,rgba(255,127,80,0.12),transparent_42%)]" />
              <div className="relative grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[22px] border border-cyan-100/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035))] p-4">
                  <div className="overflow-hidden rounded-[16px] border border-cyan-100/10 bg-[#081521]">
                    <div className="flex items-center justify-between border-b border-cyan-100/10 bg-[#0b1324] px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff7f50]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#f1b84b]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#38b59f]" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Your Site
                      </span>
                    </div>
                    <div className="bg-[radial-gradient(circle_at_82%_12%,rgba(68,199,244,0.22),transparent_30%),linear-gradient(145deg,#0b2a38,#071621)] px-5 py-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9a68]">Build / Rebuild / Refresh</p>
                      <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white">
                        Tell us what you need.
                        <br />
                        We build the path.
                      </h3>
                      <div className="mt-5 grid gap-2">
                        <div className="h-2.5 w-full rounded-full bg-white/22" />
                        <div className="h-2.5 w-5/6 rounded-full bg-white/18" />
                        <div className="h-2.5 w-3/5 rounded-full bg-white/14" />
                      </div>
                      <div className="mt-6 h-11 w-40 rounded-full bg-[linear-gradient(120deg,#ff7f50,#e346dc)] shadow-[0_14px_32px_rgba(227,70,220,0.26)]" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  {problemTiles.map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-[18px] border border-cyan-100/12 bg-white/[0.055] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.16)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 h-9 w-9 shrink-0 rounded-full bg-gradient-to-br ${item.accent} shadow-[0_12px_26px_rgba(0,0,0,0.22)]`} />
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
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
