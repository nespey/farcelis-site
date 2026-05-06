import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { WorkflowOperationsPreview } from "@/components/WorkflowOperationsPreview";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.workflowOperations);

export default function WorkflowOperationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Workflow & Operations"
        title="When work does not move cleanly, the problem is usually the operating path."
        description="Farcelis designs the routing, handoffs, ownership, reporting, and cadence that keep execution from drifting across people, tools, and teams."
        actions={[
          { href: "/contact", label: "Map Your Workflow" },
          {
            href: "/control-layer",
            label: "Explore the Control Layer",
            variant: "secondary",
          },
        ]}
        asideTitle="Best fit"
        asideItems={[
          "Requests enter through too many doors and no one trusts the current status.",
          "Handoffs create rework, missed context, or unclear ownership.",
          "Leaders need visibility before work becomes urgent or expensive.",
        ]}
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div className="workflow-showcase-header">
              <div>
                <p className="eyebrow text-[color:var(--color-accent)]">
                  What Farcelis Builds
                </p>
                <h2 className="section-title mt-5 max-w-[900px] text-white">
                  The work becomes clearer before automation or AI gets added.
                </h2>
                <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-300">
                  Each preview below shows a different operating asset, the
                  failure it exposes, and the end state Farcelis designs toward.
                </p>
              </div>

              <figure className="workflow-operator-quote">
                <div className="workflow-operator-image">
                  <Image
                    src="/images/team/dominic-workflow-quote.jpeg"
                    alt="Dominic Chase, Chief Operating Officer"
                    width={896}
                    height={1088}
                    priority={false}
                  />
                </div>
                <figcaption className="workflow-operator-copy">
                  <p className="eyebrow text-[color:var(--color-accent)]">
                    COO Perspective
                  </p>
                  <blockquote>
                    “Workflow is where strategy becomes movement. If routing,
                    ownership, escalation, and reporting are not designed
                    together, work drifts until leaders are forced to react.”
                  </blockquote>
                  <p className="workflow-operator-name">Dominic Chase</p>
                  <p className="workflow-operator-role">
                    Chief Operating Officer
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="mt-10">
              <WorkflowOperationsPreview />
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
                Once the workflow is clear, Farcelis can connect platforms, AI
                agents, dashboards, and the Control Layer around the operating
                path.
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
