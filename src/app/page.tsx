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
  audienceSignals,
  capabilityPoints,
  controlLayerIntro,
  flowSteps,
  operatingContexts,
  problemPoints,
  seo,
  urgencyPoints,
  whatFarcelisDoes,
} from "@/lib/site-data";

export const metadata = buildMetadata(seo.home);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10">
          <p className="text-balance text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl lg:text-[2.7rem] lg:leading-[1.02]">
            Farcelis is the system behind how modern operations actually run.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/70 bg-[rgba(255,255,255,0.78)] px-6 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10 lg:py-10">
          <SectionHeader
            eyebrow="Capability Layer"
            title="Farcelis defines the capability layer behind operational control."
            description="Operational system design, execution architecture, workflow control environments, decision systems, and flagship Control Layer implementation operate together as one model."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whatFarcelisDoes.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
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

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-950 bg-slate-950 px-6 py-8 shadow-[0_32px_90px_rgba(15,23,42,0.2)] sm:px-8 lg:px-10 lg:py-12">
          <SectionHeader
            eyebrow="Why This Matters"
            title="Execution failure is usually a system failure."
            description="Without structure, work stalls at handoffs, priorities drift, and leadership reacts late. Most organizations do not break because effort disappears. They break because the operating system beneath execution cannot carry scale."
            variant="inverse"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {urgencyPoints.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[24px] border p-6 shadow-[0_20px_48px_rgba(15,23,42,0.18)] ${
                  index === 3
                    ? "border-white bg-white text-slate-950"
                    : "border-white/12 bg-white/6 text-white backdrop-blur-sm"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-base leading-7 ${
                    index === 3 ? "text-slate-700" : "text-white/72"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.16)] sm:px-8 lg:px-10 lg:py-10">
          <SectionHeader
            eyebrow="Flagship System"
            title="The Farcelis Control Layer is a flagship system inside the broader Farcelis operating model."
            description="It is one of the primary ways Farcelis turns fragmented work, inconsistent workflows, and poor visibility into a structured execution environment."
            variant="inverse"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {controlLayerIntro.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[28px] border p-6 shadow-[0_20px_48px_rgba(15,23,42,0.16)] ${
                  index === 1
                    ? "border-white/20 bg-white text-slate-950"
                    : "border-white/12 bg-white/6 text-white backdrop-blur-sm"
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
                    index === 1 ? "text-slate-700" : "text-white/72"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating Contexts"
            title="Farcelis builds structured environments across multiple contexts."
            description="The same systems discipline applies across enterprise operations, government environments, startup execution, and personal system management."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operatingContexts.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/70 bg-[rgba(255,255,255,0.82)] px-6 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10 lg:py-10">
          <SectionHeader
            eyebrow="This Is For You"
            title="If complexity keeps rising while control keeps slipping, this is for you."
            description="Farcelis is for the people carrying execution pressure inside systems that are no longer holding."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {audienceSignals.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/70 bg-[rgba(255,255,255,0.72)] px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 lg:px-10 lg:py-10">
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

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.07)] sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:px-10 lg:py-10">
          <div>
            <SectionHeader
              eyebrow="Inside the System"
              title="Inside the Farcelis Control Layer"
              description="Sterilized interface cards show how one connected system handles intake, structure, priority, execution, and tracking without exposing client data."
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

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Services built for operational control, not loose AI activity."
            description="Farcelis combines AI consulting, workflow automation, and system design so execution actually improves once more tools are layered in."
          />
          <div className="mt-10">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/70 bg-[rgba(255,255,255,0.78)] px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 lg:px-10 lg:py-10">
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

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
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
        description="Farcelis builds the operational structure, execution visibility, and flagship systems leaders need to scale with more confidence."
        primaryLabel="Work With Farcelis"
        primaryHref="/contact"
        secondaryLabel="Schedule a Strategy Call"
        secondaryHref="/contact"
      />
    </>
  );
}
