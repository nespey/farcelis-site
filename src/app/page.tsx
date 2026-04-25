import { CTASection } from "@/components/CTASection";
import { ControlLayerCards } from "@/components/ControlLayerCards";
import { Hero } from "@/components/Hero";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { ProofCards } from "@/components/ProofCards";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCards } from "@/components/ServiceCards";
import { TrustBar } from "@/components/TrustBar";
import { buildMetadata } from "@/lib/metadata";
import {
  capabilityPoints,
  controlLayerIntro,
  flowSteps,
  problemPoints,
  seo,
} from "@/lib/site-data";

export const metadata = buildMetadata(seo.home);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Problem"
            title="Most businesses are running without a control system."
            description="Work is scattered across tools, teams, and conversations. Execution breaks down without structure."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {problemPoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Solution"
            title="The Farcelis Control Layer"
            description="A centralized system that brings structure to operational chaos."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {controlLayerIntro.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[28px] border p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] ${
                  index === 1
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[inherit] opacity-70">
                  {item.title}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title} everything that matters.
                </h3>
                <p
                  className={`mt-4 text-base leading-7 ${
                    index === 1 ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="System Flow"
            title="How It Works"
            description="Input → Intake → Assignment → Execution → Tracking → Completion"
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {flowSteps.map((step, index) => (
              <div key={step} className="grid gap-4">
                <div className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {index + 1}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">{step}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-600 sm:text-lg">
            Every piece of work enters a structured system. Nothing gets lost.
            Nothing moves without visibility. The result is a controlled
            operational environment where execution is predictable and scalable.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Inside the System"
              title="Inside the Farcelis Control Layer"
              description="Sterilized, generic interface cards show how one connected system handles intake, structure, priority, execution, and tracking without exposing client data."
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
            eyebrow="Services"
            title="Services built around operational control, not generic AI activity."
            description="Farcelis combines AI consulting, workflow automation, and operational systems design so execution actually improves once tools are layered in."
          />
          <div className="mt-10">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating Proof"
            title="Executive visibility, workflow control, and delivery governance."
            description="Real work shaped by live client environments, governance needs, and execution pressure."
          />
          <div className="mt-10">
            <ProofCards />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Organizations"
            title="Organizations that have worked with Farcelis AI Consulting LLC."
            description="Farcelis AI Consulting LLC has supported organizations across operations, automation, and system design. This is relationship context only, not a product adoption claim."
          />
          <div className="mt-10">
            <PartnerLogoGrid />
          </div>
        </div>
      </section>

      <CTASection
        title="If You Don't Control the System, You Can't Scale It."
        description="The Farcelis Control Layer gives you the structure to operate with clarity, speed, and confidence."
        primaryLabel="Build Your Control Layer"
        primaryHref="/contact"
        secondaryLabel="Schedule a Strategy Call"
        secondaryHref="/contact"
      />
    </>
  );
}

