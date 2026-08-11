import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { resourceOffers, resourceTypes, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.resources);

const resourceWorkTags = [
  ["ai-strategy-governance"],
  ["workflow-managed-operations", "reporting-decision-systems"],
  ["farcelis-control-layer", "workflow-managed-operations"],
  ["crm-revenue-operations", "content-revenue-systems"],
  ["seo-search-visibility", "aeo-ai-search-visibility", "content-revenue-systems"],
  ["ai-agents-automations", "workflow-managed-operations"],
];

const contactHref = (tags: string[]) => `/contact?work=${encodeURIComponent(tags.join(","))}`;

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title="Farcelis resources package the thinking buyers need before they commit to a build."
        description="Executive briefings, reports, whitepapers, playbooks, and diagnostic guides help leaders understand AI readiness, workflow architecture, Control Layer design, CRM operations, and growth systems."
        actions={[
          { href: "/services", label: "Review Services" },
          { href: "/insights", label: "Read Insights", variant: "secondary" },
        ]}
        asideTitle="Resource Types"
        asideItems={resourceTypes.map((item) => item.title)}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Gated Library</p>
              <h2 className="section-title mt-5 text-slate-950">
                Farcelis resources give buyers a serious enterprise library without pretending every asset belongs in public view.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resourceOffers.map((resource, index) => (
                <Link
                  key={resource.title}
                  href={contactHref(resourceWorkTags[index] ?? [])}
                  className={`enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] ${
                    index === 1 || index === 4 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {resource.type}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{resource.description}</p>
                  <p className="mt-5 text-sm font-semibold text-slate-500">{resource.audience}</p>
                  <div className="mt-6 text-sm font-semibold text-[#9f412c]">Discuss the related service path</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Access Request</p>
              <h2 className="section-title mt-5 text-white">
                Use resources to clarify the service conversation.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                Farcelis resources are designed to help buyers understand Build, Grow, and Operate before a project starts. When you are ready to talk through the work, start with the service path that fits.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Build with Farcelis", href: contactHref(resourceWorkTags[0]) },
                { label: "Grow with Farcelis", href: contactHref(resourceWorkTags[4]) },
                { label: "Operate with Farcelis", href: contactHref(resourceWorkTags[2]) },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
