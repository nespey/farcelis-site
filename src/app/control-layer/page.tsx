import Image from "next/image";

import { CTASection } from "@/components/CTASection";
import { ControlLayerCards } from "@/components/ControlLayerCards";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/metadata";
import { capabilityPoints, flowSteps, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.controlLayer);

const fixes = [
  "Fragmented workflows across multiple platforms",
  "Lack of visibility into active work",
  "Unclear ownership and accountability",
  "Delayed or reactive decision-making",
  "Inefficient handoffs between teams",
];

const systemComponents = [
  {
    title: "Intake Layer",
    body: "Captures all incoming work and data so requests stop disappearing into inboxes, calls, and fragmented tools.",
  },
  {
    title: "Workflow Engine",
    body: "Defines how work moves through the system with clear logic for handoffs, stages, routing, and accountability.",
  },
  {
    title: "Priority System",
    body: "Surfaces what matters most so leadership attention, team capacity, and escalation energy go where they should.",
  },
  {
    title: "Execution Layer",
    body: "Supports the teams and operators doing the work with structure that keeps movement visible and predictable.",
  },
  {
    title: "Visibility Layer",
    body: "Provides real-time operational insight into what is active, what is blocked, and where intervention is required.",
  },
];

const outcomes = [
  "Clear operational visibility",
  "Faster execution cycles",
  "Improved team coordination",
  "Reduced manual oversight",
  "Scalable operational structure",
];

export default function ControlLayerPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
              Product Page
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
              The Farcelis Control Layer
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
              The Farcelis Control Layer is the flagship system inside the
              broader Farcelis operating model. It gives organizations a
              structured environment for workflows, decisions, visibility, and
              execution when the operating system itself needs to be rebuilt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:nespey@farcelis.io?subject=Request%20a%20Farcelis%20Control%20Layer%20Demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(126,31,13,0.28)] transition hover:translate-y-[-1px]"
              >
                Request a Demo
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
              >
                Work With Farcelis
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_28px_70px_rgba(15,23,42,0.10)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
              <Image
                src="/images/hero-control-layer-preview.png"
                alt="Farcelis Control Layer preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What It Is"
            title="What the Control Layer actually is."
            description="The Farcelis Control Layer is a flagship Farcelis implementation. It is a structured system that sits above your existing tools and organizes how work flows through the business."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
              <p className="text-base leading-7 text-slate-600">
                Instead of adding more software, it creates clarity across what
                already exists. For teams exploring AI consulting, workflow
                automation, and AI-driven decision systems, the Control Layer
                creates the structure that makes those investments usable in a
                real operating environment.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
              <p className="text-base leading-7 text-slate-200">
                Farcelis focuses on live operating environments, not theory
                decks. The Control Layer is designed to work alongside the
                systems an organization already uses while introducing a
                stronger operational spine for coordination, visibility, and
                execution control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What It Fixes"
            title="Most organizations do not fail because they lack software."
            description="They struggle because priorities are fragmented, workflows are inconsistent, reporting is delayed, and ownership breaks down across teams."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {fixes.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-white p-5 text-base font-medium leading-7 text-slate-700 shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="System Flow"
            title="How work moves through the Control Layer."
            description="Intake → Structuring → Assignment → Execution → Tracking → Completion"
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {flowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Step {index + 1}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-950">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core System Components"
            title="The Farcelis Control Layer is built as one connected operating system."
            description="These components work together to make execution visible, accountable, and scalable without exposing live client data."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {systemComponents.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[28px] border p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] ${
                  index === 2
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 2 ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <SectionHeader
              eyebrow="Inside the Platform"
              title="A system view that leaders can actually work from."
              description="The Control Layer gives leadership a live view of execution so work is visible, ownership is clear, and decision-making is anchored in what is actually happening."
            />
            <div className="mt-8 grid gap-3">
              {capabilityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
          <ControlLayerCards />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Outcomes"
            title="What changes after implementation."
            description="Automation without structure creates more chaos. The Control Layer makes everything happening inside the business organized, visible, and aligned."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-white p-5 text-base font-medium text-slate-700 shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Build a stronger operating environment before complexity compounds."
        description="If your organization is buried in noise, disconnected workflows, or execution drag, Farcelis can help determine whether the Control Layer is the right flagship implementation inside a broader systems strategy."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
        secondaryLabel="Start a Strategy Call"
        secondaryHref="/contact"
      />
    </>
  );
}
