import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.managedOperations);

const managedSupport = [
  {
    title: "Operating cadence",
    body:
      "Set the weekly rhythm for priorities, decisions, open loops, follow-up, and escalation so work does not depend on memory or heroic effort.",
    result: "Leaders know what is moving, what is stuck, and who owns the next action.",
  },
  {
    title: "Workflow triage",
    body:
      "Step into messy requests, scattered tasks, broken handoffs, and unclear ownership so the operating path gets cleaned while work keeps moving.",
    result: "Teams get fewer loose ends, cleaner handoffs, and less rework.",
  },
  {
    title: "Executive follow-through",
    body:
      "Turn leadership decisions into tracked action, vendor coordination, meeting notes, task ownership, and practical next steps.",
    result: "Important work stops living only in conversations and inboxes.",
  },
  {
    title: "AI enablement in live work",
    body:
      "Use AI where it helps the operating rhythm: summaries, drafts, documentation, research, SOP support, action capture, and decision prep.",
    result: "AI becomes a working support layer, not another disconnected experiment.",
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
                <article
                  key={item.title}
                  className="enterprise-card rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                  <p className="mt-6 border-l border-[#9f412c]/28 pl-4 text-base font-semibold leading-7 text-slate-800">
                    {item.result}
                  </p>
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Talk Through Managed Support
              </Link>
              <Link
                href="/control-layer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
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
