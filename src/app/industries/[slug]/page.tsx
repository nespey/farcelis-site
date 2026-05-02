import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getIndustryBySlug, industryFocus, site } from "@/lib/site-data";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryFocus.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return buildMetadata({
    path: `/industries/${industry.slug}`,
    title: `${industry.title} | ${site.shortName}`,
    description: industry.description,
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow="Industry Focus"
        title={industry.title}
        description={industry.description}
        actions={[
          { href: "/contact", label: "Discuss This Environment" },
          { href: "/industries", label: "All Industries", variant: "secondary" },
        ]}
        asideTitle="Fit Signals"
        asideItems={industry.signals}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">Farcelis Offer</p>
              <h2 className="section-title mt-5 text-slate-950">
                The vertical page should show what Farcelis would actually bring into this operating environment.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.offers.map((offer) => (
                <div
                  key={offer}
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-5 text-lg font-semibold tracking-[-0.03em] text-slate-950 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  {offer}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Operating Pattern</p>
              <h2 className="section-title mt-5 text-white">
                Farcelis starts with how work moves, then chooses the right AI and platform support.
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                "Map the current intake, ownership, handoff, and reporting paths.",
                "Identify where AI, automation, CRM, content systems, or dashboards should support the work.",
                "Package the resulting model into a Control Layer, product deployment, or managed operations path.",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 lg:grid-cols-[78px_minmax(0,1fr)] ${index === 1 ? "lg:translate-x-8" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <div className="text-2xl font-medium tracking-[-0.04em] text-slate-200">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
