import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.aiStrategyGovernance);

const strategyBlocks = [
  {
    title: "AI readiness",
    body: "Identify where AI can create value, where the organization is not ready, and which workflows need structure before adoption expands.",
  },
  {
    title: "Governance and usage rules",
    body: "Define what teams can use AI for, what requires review, what must be documented, and where human judgment remains required.",
  },
  {
    title: "Adoption roadmap",
    body: "Sequence AI use cases by value, risk, operational fit, and leadership capacity so rollout is deliberate instead of scattered.",
  },
  {
    title: "Decision structure",
    body: "Clarify ownership, escalation, approval, review, and accountability around AI-supported work.",
  },
];

const engagementFlow = [
  "Map the current operating environment and existing AI/tool usage.",
  "Identify high-value use cases and the risks attached to them.",
  "Define governance rules, adoption priorities, and review expectations.",
  "Package the roadmap into practical next steps leaders can execute.",
];

export default function AiStrategyGovernancePage() {
  return (
    <>
      <PageIntro
        eyebrow="AI Strategy & Governance"
        title="AI adoption needs an operating model before it needs another tool."
        description="Farcelis helps leaders decide where AI belongs, how it should be governed, what teams should use first, and what controls must exist before adoption scales."
        actions={[
          { href: "/contact", label: "Plan AI Adoption" },
          { href: "/resources", label: "View Field Library", variant: "secondary" },
        ]}
        asideTitle="Best fit"
        asideItems={[
          "You need a clear AI roadmap before teams start using disconnected tools.",
          "You want governance that explains what people should actually do, not a policy that sits unused.",
          "You need leadership confidence around AI risk, adoption, and practical value.",
        ]}
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[840px]">
              <p className="eyebrow text-[#9f412c]">What This Covers</p>
              <h2 className="section-title mt-5 text-slate-950">
                Strategy and governance turn AI interest into controlled operating capability.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {strategyBlocks.map((block) => (
                <article
                  key={block.title}
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{block.body}</p>
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
              <p className="eyebrow text-[color:var(--color-accent)]">Engagement Shape</p>
              <h2 className="section-title mt-5 text-white">
                The outcome is not a slide deck. It is a decision-ready adoption model.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                Farcelis turns AI uncertainty into a practical set of priorities, rules, owners, and next moves.
              </p>
            </div>

            <div className="grid gap-3">
              {engagementFlow.map((item, index) => (
                <div key={item} className="rounded-[22px] border border-cyan-100/12 bg-white/[0.045] px-5 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    Step {index + 1}
                  </div>
                  <p className="mt-2 text-lg leading-7 text-slate-100">{item}</p>
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
                When the strategy is clear, Farcelis can help deploy the workflows, agents, reporting, and Control Layer that make it real.
              </h2>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/services/workflow-operations" className="btn-primary">
                  Explore Workflow & Operations
                </Link>
                <Link
                  href="/control-layer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore Control Layer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
