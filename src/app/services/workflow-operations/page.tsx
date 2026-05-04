import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.workflowOperations);

const operatingAreas = [
  {
    title: "Routing",
    body: "Define how work enters, where it should go, what information must travel with it, and what should happen when it does not fit the standard path.",
  },
  {
    title: "Handoffs",
    body: "Design the moment work changes hands so context, deadlines, owners, and next actions do not disappear between teams or platforms.",
  },
  {
    title: "Ownership",
    body: "Clarify who owns the next move, who approves it, who is informed, and who intervenes when the workflow stalls.",
  },
  {
    title: "Reporting",
    body: "Create visibility into status, pressure, risk, and movement so leaders do not discover operating problems after the cost is already real.",
  },
  {
    title: "Operating cadence",
    body: "Build the review rhythm, escalation habits, and leadership checkpoints that keep the system moving after the first redesign is complete.",
  },
];

const deliverables = [
  "Workflow and handoff map",
  "Ownership and escalation model",
  "Operating cadence design",
  "Visibility and reporting requirements",
  "Automation-ready workflow logic",
  "Control Layer deployment path",
];

export default function WorkflowOperationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Workflow & Operations"
        title="When work does not move cleanly, the problem is usually the operating path."
        description="Farcelis designs the routing, handoffs, ownership, reporting, and cadence that keep execution from drifting across people, tools, and teams."
        actions={[
          { href: "/contact", label: "Map Your Workflow" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
        asideTitle="Best fit"
        asideItems={[
          "Requests enter through too many doors and no one trusts the current status.",
          "Handoffs create rework, missed context, or unclear ownership.",
          "Leaders need visibility before work becomes urgent or expensive.",
        ]}
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[860px]">
              <p className="eyebrow text-[#9f412c]">Operating Path</p>
              <h2 className="section-title mt-5 text-slate-950">
                Workflow and operations work is about movement: how work enters, changes hands, gets owned, and gets reported.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {operatingAreas.map((area) => (
                <article
                  key={area.title}
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">What Farcelis Builds</p>
              <h2 className="section-title mt-5 text-white">
                The work becomes clearer before automation or AI gets added.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                A workflow engagement should leave the organization with practical operating assets, not just observations about what is broken.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-cyan-100/12 bg-white/[0.045] px-5 py-5 text-base font-semibold leading-7 text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_38px_rgba(15,23,42,0.06)] md:px-8">
              <p className="eyebrow text-[#9f412c]">Where This Leads</p>
              <h2 className="mt-4 max-w-[760px] text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                Once the workflow is clear, Farcelis can connect platforms, AI agents, dashboards, and the Control Layer around the operating path.
              </h2>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/platforms" className="btn-primary">
                  Explore Platforms
                </Link>
                <Link
                  href="/services/ai-strategy-governance"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore AI Strategy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
