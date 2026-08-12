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

function WebsiteDevelopmentShowcase({ service }: { service: NonNullable<ReturnType<typeof getDirectService>> }) {
  const primaryCapabilities = service.capabilities.slice(0, 4);
  const supportingCapabilities = service.capabilities.slice(4);
  const previewSteps = [
    "Clear offer",
    "Service pages",
    "Quote or contact path",
    "Follow-up handoff",
  ];

  return (
    <Reveal delayMs={40}>
      <section className="section-shell section-shell-light !py-10 lg:!py-12">
        <div className="section-inner">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">{service.buildKicker ?? "Website Development"}</p>
              <h2 className="section-title mt-4 max-w-[680px] text-slate-950">
                {service.buildTitle ?? "Make the website do its job."}
              </h2>
              <p className="mt-4 max-w-[620px] text-base leading-7 text-slate-600">
                {service.buildSummary ?? "Build new, rebuild what exists, or add the pages and forms that turn interest into follow-up."}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {primaryCapabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-slate-200 bg-white px-4 py-4 shadow-[0_16px_28px_rgba(15,23,42,0.055)]"
                  >
                    <p className="text-base font-semibold text-slate-950">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {supportingCapabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-cyan-100/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="overflow-hidden rounded-[18px] border border-cyan-100/12 bg-[#071621]">
                <div className="flex items-center justify-between border-b border-cyan-100/10 bg-[#0b1324] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff7f50]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f1b84b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#38b59f]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Website Build Preview
                  </span>
                </div>

                <div className="grid gap-0 md:grid-cols-[0.76fr_1fr]">
                  <div className="bg-[radial-gradient(circle_at_25%_10%,rgba(255,127,80,0.16),transparent_32%),linear-gradient(145deg,#082a35,#071722)] px-5 py-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9a68]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff7f50]" />
                      Offer
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white lg:text-4xl">
                      Say what you do.
                      <br />
                      Make it easy to act.
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      A stronger site should explain the offer, answer the obvious questions,
                      and move the right person to the next step.
                    </p>
                    <div className="mt-6 inline-flex rounded-full bg-[linear-gradient(120deg,#ff7f50,#e346dc)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(227,70,220,0.24)]">
                      Request follow-up
                    </div>
                  </div>

                  <div className="bg-[#edf4f7] p-5">
                    <div className="rounded-[16px] border border-slate-200 bg-white p-4 shadow-[0_18px_34px_rgba(15,23,42,0.12)]">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-slate-950" />
                          <div>
                            <div className="h-2.5 w-20 rounded-full bg-slate-900" />
                            <div className="mt-1.5 h-2 w-14 rounded-full bg-slate-200" />
                          </div>
                        </div>
                        <div className="h-8 w-24 rounded-full bg-[linear-gradient(120deg,#ff7f50,#e346dc)]" />
                      </div>

                      <div className="grid gap-4 py-5 md:grid-cols-[1fr_0.78fr]">
                        <div>
                          <div className="h-4 w-28 rounded-full bg-[#ff7f50]" />
                          <div className="mt-3 h-7 w-full max-w-[250px] rounded-full bg-slate-950" />
                          <div className="mt-2 h-7 w-4/5 rounded-full bg-slate-950" />
                          <div className="mt-4 grid gap-2">
                            <div className="h-2.5 w-full rounded-full bg-slate-200" />
                            <div className="h-2.5 w-5/6 rounded-full bg-slate-200" />
                            <div className="h-2.5 w-3/5 rounded-full bg-slate-200" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          {previewSteps.map((item, index) => (
                            <div key={item} className="flex items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 px-3 py-2">
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] font-semibold text-white">
                                {index + 1}
                              </span>
                              <span className="text-xs font-semibold text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-3">
                        {["Mobile ready", "Search ready", "Lead ready"].map((item) => (
                          <div key={item} className="rounded-[10px] bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[22px] border border-cyan-100/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.032))] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-[color:var(--color-accent)]">{service.processKicker ?? "How We Build"}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                  {service.processTitle ?? "A practical path from idea to launch."}
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {service.process.map((item, index) => (
                <div key={item} className="relative rounded-[14px] border border-cyan-100/12 bg-[#071d2a] px-4 py-4">
                  <div className="absolute left-0 top-4 h-8 w-1 rounded-r-full bg-[linear-gradient(180deg,#ff7f50,#e346dc)]" />
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9a68]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-5 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
