import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.managedOperations);

const managedSupport = [
  {
    id: "operating-cadence",
    title: "Operating cadence",
    body:
      "Set the weekly rhythm for priorities, decisions, open loops, follow-up, and escalation so work does not depend on memory or heroic effort.",
    result: "Leaders know what is moving, what is stuck, and who owns the next action.",
    deliverables: [
      "Weekly priority review",
      "Decision and open-loop register",
      "Escalation path for stalled work",
      "Leadership-ready status summary",
    ],
    layout: [
      "Capture priorities and pressure points.",
      "Confirm owner, next action, decision need, and deadline.",
      "Review movement weekly and escalate the work that is drifting.",
    ],
    request: "Request an operating cadence setup",
  },
  {
    id: "workflow-triage",
    title: "Workflow triage",
    body:
      "Step into messy requests, scattered tasks, broken handoffs, and unclear ownership so the operating path gets cleaned while work keeps moving.",
    result: "Teams get fewer loose ends, cleaner handoffs, and less rework.",
    deliverables: [
      "Request intake cleanup",
      "Handoff and ownership map",
      "Broken-path inventory",
      "Near-term cleanup sprint",
    ],
    layout: [
      "Find where work is entering, pausing, duplicating, or disappearing.",
      "Separate process issues from platform issues.",
      "Clean the path before adding automation or another dashboard.",
    ],
    request: "Request workflow triage",
  },
  {
    id: "executive-follow-through",
    title: "Executive follow-through",
    body:
      "Turn leadership decisions into tracked action, vendor coordination, meeting notes, task ownership, and practical next steps.",
    result: "Important work stops living only in conversations and inboxes.",
    deliverables: [
      "Decision-to-action tracking",
      "Meeting capture and next steps",
      "Vendor and stakeholder coordination",
      "Follow-through summary for leadership",
    ],
    layout: [
      "Capture the decision and what it requires next.",
      "Assign owners, due dates, dependencies, and communication needs.",
      "Keep leadership updated without making them chase the work.",
    ],
    request: "Request executive follow-through",
  },
  {
    id: "ai-enablement",
    title: "AI enablement in live work",
    body:
      "Use AI where it helps the operating rhythm: summaries, drafts, documentation, research, SOP support, action capture, and decision prep.",
    result: "AI becomes a working support layer, not another disconnected experiment.",
    deliverables: [
      "Role-based AI use cases",
      "Prompt and workflow templates",
      "Documentation and SOP support",
      "Review rules for AI-assisted work",
    ],
    layout: [
      "Identify the work where AI can reduce drag without removing judgment.",
      "Build repeatable prompts and review habits around real tasks.",
      "Use AI to support decisions, documentation, and follow-through.",
    ],
    request: "Request AI enablement support",
  },
];

const operatingRhythm = [
  "A weekly priority and pressure review",
  "A tracked action list with owners and next moves",
  "Workflow cleanup where requests, handoffs, or data are drifting",
  "Leadership-ready summaries for decisions and follow-through",
  "AI support built into the actual work instead of parked in a separate tool",
];

export default function ManagedOperationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Managed Operations"
        title="Hands-on operating support for leaders who need the work to keep moving."
        description="Farcelis helps manage cadence, triage, follow-through, workflow cleanup, and AI-enabled execution while the larger operating system matures."
        actions={[
          { href: "/contact", label: "Discuss Managed Support" },
          { href: "/services/workflow-operations", label: "See Workflow Design", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[900px]">
              <p className="eyebrow text-[#9f412c]">What You Get</p>
              <h2 className="section-title mt-5 text-slate-950">
                This is not advisory theater. It is practical operating help inside the work.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {managedSupport.map((item) => (
                <Link
                  key={item.title}
                  href={`#${item.id}`}
                  className="enterprise-card group rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[#9f412c]/30 hover:shadow-[0_24px_52px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {item.title}
                    </h3>
                    <span className="mt-1 text-sm font-semibold text-[#9f412c] transition group-hover:translate-x-1">
                      Open →
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                  <p className="mt-6 border-l border-[#9f412c]/28 pl-4 text-base font-semibold leading-7 text-slate-800">
                    {item.result}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-light managed-detail-section">
          <div className="section-inner">
            <div className="grid gap-6">
              {managedSupport.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)] md:px-8"
                >
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
                    <div>
                      <p className="eyebrow text-[#9f412c]">Detailed Layout</p>
                      <h2 className="mt-4 text-[clamp(1.75rem,2.4vw,2.4rem)] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
                        {item.title}
                      </h2>
                      <p className="mt-5 text-base leading-8 text-slate-600">{item.body}</p>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link href="/contact" className="managed-action-primary">
                          {item.request}
                        </Link>
                        <Link
                          href="#pathfinder"
                          className="managed-action-secondary"
                        >
                          Use Pathfinder
                        </Link>
                      </div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="managed-info-panel">
                        <h3 className="managed-info-heading">
                          What Farcelis Builds
                        </h3>
                        <ul className="mt-5 grid gap-3">
                          {item.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="managed-info-line"
                            >
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="managed-info-panel">
                        <h3 className="managed-info-heading">
                          How It Works
                        </h3>
                        <ol className="mt-5 grid gap-3">
                          {item.layout.map((step, index) => (
                            <li key={step} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                              <span className="managed-step-badge">
                                {index + 1}
                              </span>
                              <span className="pt-1 text-sm font-semibold leading-6 text-slate-100">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">How It Runs</p>
              <h2 className="section-title mt-5 text-white">
                The engagement creates a working operating rhythm, then keeps pressure visible.
              </h2>
              <p className="mt-6 max-w-[600px] text-base leading-8 text-slate-300">
                Managed Operations is for the period when the business needs execution help now, while workflows, platforms, and AI support are being clarified.
              </p>
            </div>

            <div className="rounded-[28px] border border-cyan-100/12 bg-white/[0.045] px-6 py-7">
              <ul className="grid gap-5">
                {operatingRhythm.map((item) => (
                  <li
                    key={item}
                    className="border-l border-[color:var(--color-accent)]/34 pl-4 text-base font-semibold leading-7 text-slate-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                <p className="eyebrow text-[#9f412c]">Best Fit</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  Use this when leadership needs relief without losing control.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  The best fit is a team with real work already in motion: requests are scattered, follow-up is uneven, vendors or internal teams need coordination, and leaders need cleaner visibility before adding more tools.
                </p>
              </article>

              <article className="rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                <p className="eyebrow text-[#9f412c]">Not This</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  It is not passive coaching or a dashboard handoff.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  The point is to enter the operating layer: clarify the rhythm, clean up the work path, support decisions, and leave the team with a sturdier way to execute.
                </p>
              </article>
            </div>

            <div
              id="managed-fit-builder"
              className="mt-8 rounded-[28px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)] md:px-8"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <div>
                  <p className="eyebrow text-[#9f412c]">Fit Builder</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    A good managed operations fit shows active pressure, unclear ownership, and work that still has to move.
                  </h2>
                </div>
                <div className="grid gap-3">
                  {[
                    "Requests, decisions, or vendor threads are scattered across inboxes, meetings, and tools.",
                    "Leadership is still the backup system for follow-up, status, and escalation.",
                    "AI could help, but the team needs practical use cases, review rules, and templates tied to real work.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="managed-fit-item"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="#pathfinder" className="managed-action-primary">
                  Use Pathfinder
                </Link>
                <Link
                  href="/contact"
                  className="managed-action-secondary"
                >
                  Request Managed Operations
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="managed-action-primary">
                Talk Through Managed Support
              </Link>
              <Link
                href="/control-layer"
                className="managed-action-secondary"
              >
                Explore the Control Layer
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
