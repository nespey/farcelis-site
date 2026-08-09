import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { capabilityGroups } from "@/lib/service-catalog";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.services);

const operatingPrinciples = [
  {
    title: "System before tooling",
    body: "We identify how work should enter, move, get owned, and get measured before recommending another platform or AI layer.",
  },
  {
    title: "Execution before automation",
    body: "Automation only helps when the underlying workflow is clear enough to automate without hiding accountability.",
  },
  {
    title: "Governance before scale",
    body: "AI adoption needs usage rules, decision rights, risk boundaries, and review habits before it expands across a team.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="Farcelis helps leaders build, grow, and operate systems that can actually be owned."
        description="Some clients arrive with code, tools, and deployment problems. Others arrive with an idea and no technical map. Farcelis turns both starting points into clean websites, apps, portals, dashboards, automations, growth systems, and operating environments."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
        asideTitle="How to read this page"
        asideItems={[
          "Build when the business needs a website, app, portal, automation, Control Layer, or deployment path.",
          "Grow when visibility, content, campaigns, CRM, and revenue follow-through need to operate together.",
          "Operate when systems, workflows, reporting, AI use, and execution cadence need sustained control.",
        ]}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Service Model</p>
              <h2 className="section-title mt-5 text-white">
                The model is simple: build the right thing, connect it to growth, then keep it operating.
              </h2>
            </div>

            <div className="grid gap-4">
              {operatingPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[24px] border border-cyan-100/12 bg-white/[0.045] px-6 py-6"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[880px]">
              <p className="eyebrow text-[#9f412c]">Capability Lanes</p>
              <h2 className="section-title mt-5 text-slate-950">
                Build, Grow, and Operate are the buyer-facing paths into Farcelis.
              </h2>
              <p className="mt-5 max-w-[760px] text-base leading-8 text-slate-600">
                The grouped model keeps Farcelis understandable without muting the Control Layer. It gives buyers a practical way to find the right entry point whether they need something created, demand stabilized, or an operating system managed.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {capabilityGroups.map((group) => (
                <article
                  key={group.label}
                  id={group.label.toLowerCase()}
                  className="enterprise-card rounded-[28px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {group.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {group.label === "Build"
                      ? "Create the website, app, portal, automation, or deployment path."
                      : group.label === "Grow"
                        ? "Make visibility, campaigns, content, and CRM move together."
                        : "Keep systems, workflows, reporting, and support under control."}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{group.detail}</p>
                  <div className="mt-6 grid gap-3">
                    {group.links.map((item) => (
                      <Link
                        key={`${group.label}-${item.label}`}
                        href={item.href}
                        className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-[#9f412c]/28 hover:bg-white"
                      >
                        <span className="block text-sm font-semibold leading-6 text-slate-950">{item.label}</span>
                        <span className="mt-1 block text-sm leading-6 text-slate-600">{item.detail}</span>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
