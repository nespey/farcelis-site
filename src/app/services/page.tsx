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
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div className="max-w-[880px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Capability Lanes</p>
              <h2 className="section-title mt-5 text-white">
                Choose the path that matches what the buyer is trying to do.
              </h2>
              <p className="mt-5 max-w-[760px] text-base leading-8 text-slate-300">
                Build, Grow, and Operate keep Farcelis simple in the first conversation. The details still exist underneath, but the buyer does not have to sort through every service before they understand where to start.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {capabilityGroups.map((group) => (
                <article
                  key={group.label}
                  id={group.label.toLowerCase()}
                  className="rounded-[24px] border border-cyan-100/12 bg-[#1c3c4d] p-3 text-center shadow-[0_24px_70px_rgba(3,8,16,0.22)]"
                >
                  <div
                    className={`relative isolate flex min-h-12 items-center justify-center overflow-hidden rounded-[12px] border px-4 py-2.5 text-lg font-black uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
                      group.label === "Build"
                        ? "border-cyan-100/16 bg-[#285869]"
                        : group.label === "Grow"
                          ? "border-emerald-100/16 bg-[#315f55]"
                          : "border-indigo-100/16 bg-[#3e506c]"
                    }`}
                  >
                    <span className="relative z-10 text-[color:var(--color-accent)] [text-shadow:0_1px_10px_rgba(3,8,16,1),0_0_18px_rgba(3,8,16,0.9)]">
                      {group.label}
                    </span>
                  </div>

                  <h3 className="mx-auto mt-5 max-w-[330px] text-2xl font-semibold tracking-[-0.04em] text-white">
                    {group.headline}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[340px] text-sm leading-6 text-slate-200">
                    {group.buyerPrompt}
                  </p>
                  <div className="mt-6 grid gap-2.5 rounded-[16px] border border-cyan-100/10 bg-[#173343] p-3 text-left">
                    {group.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex gap-3 px-2 py-2 text-sm font-semibold leading-6 text-white"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={group.actionHref}
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
                  >
                    {group.primaryCta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
