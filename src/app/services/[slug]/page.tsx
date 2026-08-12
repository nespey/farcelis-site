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

            <div className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_26px_60px_rgba(15,23,42,0.14)]">
              <div className="overflow-hidden rounded-[16px] border border-slate-200 bg-slate-950">
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff7f50]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f1b84b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#38b59f]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Website Build Preview
                  </span>
                </div>

                <div className="grid gap-0 md:grid-cols-[0.72fr_1fr]">
                  <div className="bg-[linear-gradient(145deg,#082a35,#071722)] px-5 py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff7f50]">Offer</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                      Clear pages.
                      <br />
                      Simple next steps.
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      Visitors should know what you do, why it matters, and how to ask for help.
                    </p>
                    <div className="mt-5 inline-flex rounded-full bg-[linear-gradient(120deg,#ff7f50,#e346dc)] px-4 py-2 text-sm font-semibold text-white">
                      Request a quote
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5">
                    <div className="grid gap-3">
                      {[
                        ["1", "Explain the service"],
                        ["2", "Answer buyer questions"],
                        ["3", "Capture the request"],
                        ["4", "Send it to follow-up"],
                      ].map(([number, label]) => (
                        <div key={label} className="flex items-center gap-3 rounded-[12px] border border-slate-200 bg-white p-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                            {number}
                          </span>
                          <span className="text-sm font-semibold text-slate-800">{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-[12px] bg-[#f3f7fb] p-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Lead path</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950">Form to inbox</p>
                      </div>
                      <div className="rounded-[12px] bg-[#f3f7fb] p-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Search</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950">SEO ready</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-[#9f412c]">{service.processKicker ?? "How We Build"}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950 md:text-3xl">
                  {service.processTitle ?? "A practical path from idea to launch."}
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {service.process.map((item, index) => (
                <div key={item} className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    Step {index + 1}
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-5 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
