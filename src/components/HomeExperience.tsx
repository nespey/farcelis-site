"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { approvedLogos, services } from "@/lib/site-data";

const capabilities = [
  "AI consulting for live operational environments",
  "Workflow architecture that holds under pressure",
  "Execution systems for founders, teams, and organizations",
  "Flagship Control Layer implementations",
  "Decision environments built for visibility and intervention",
  "Cross-domain systems from enterprise to personal operations",
];

const audiences = [
  {
    label: "Founders and CEOs",
    text: "When growth, urgency, and visibility are no longer staying in the same frame.",
  },
  {
    label: "Operating teams",
    text: "When handoffs, priorities, and reporting start breaking faster than people can patch them.",
  },
  {
    label: "Organizations with complexity",
    text: "When more tools, stakeholders, and volume are creating noise instead of controlled execution.",
  },
  {
    label: "Personal systems",
    text: "When daily life needs stronger structure, continuity, and less drag from fragmented priorities.",
  },
];

const proofSignals = [
  "Executive visibility stays intact.",
  "Workflow control survives complexity.",
  "Delivery governance holds under pressure.",
];

const flagshipPoints = [
  "Capture every input into one structured intake layer.",
  "Hold ownership, routing, and accountability inside one frame.",
  "Give leadership a live view of what is moving, blocked, or drifting.",
];

const servicePillars = [
  "Control Layer design and deployment",
  "Custom AI consulting and agent architecture",
  "Workflow automation aligned to execution logic",
  "AI enablement built around operating discipline",
];

export function HomeExperience() {
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    const onScroll = () => {
      const offset = Math.min(window.scrollY * 0.035, 20);
      node.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <section className="section-shell section-shell-dark overflow-hidden pt-20 lg:min-h-[88svh] lg:pt-24">
        <div className="pointer-events-none absolute inset-0 subtle-grid" />
        <div className="section-inner relative grid gap-12 lg:min-h-[72svh] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
          <Reveal delayMs={40}>
            <div className="max-w-[600px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Farcelis AI Consulting</p>
              <h1 className="display-hero mt-6 text-white">
                Build the operating system behind execution.
              </h1>
              <p className="lede mt-6 max-w-[560px]">
                Farcelis is an AI operational systems firm. We structure workflows, decisions,
                and execution environments so leaders can move with clarity before complexity
                outruns control.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(159,65,44,0.32)]"
                >
                  Work With Farcelis
                </Link>
                <Link
                  href="/control-layer"
                  className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white hover:border-white/24 hover:bg-white/8"
                >
                  Explore the Control Layer
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="signal-pill rounded-full px-4 py-2">AI consulting</span>
                <span className="signal-pill rounded-full px-4 py-2">Operational systems</span>
                <span className="signal-pill rounded-full px-4 py-2">Workflow architecture</span>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120} className="hero-visual relative lg:pl-4">
            <div ref={visualRef} className="relative">
              <div className="surface-dark overflow-hidden rounded-[34px] px-6 py-6">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                      Farcelis Control Layer
                    </div>
                    <div className="mt-2 text-base font-medium text-white">
                      Operating view for live execution environments
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    Live Structure
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-4">
                    {[
                      ["Signal intake", "Requests, updates, and operating pressure flow into one controlled queue."],
                      ["Routing logic", "Priority, ownership, and intervention paths stay visible instead of tribal."],
                      ["Leadership view", "Decision-makers see motion, blockage, and responsibility in one frame."],
                    ].map(([title, text]) => (
                      <div
                        key={title}
                        className="hero-signal hover-lift rounded-[24px] border border-white/8 bg-white/[0.04] px-5 py-5"
                      >
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                          {title}
                        </div>
                        <div className="mt-3 text-base leading-7 text-slate-200">{text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="hero-signal system-line rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-6">
                    <div className="pl-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Execution Path
                      </div>
                      <div className="mt-5 space-y-5">
                        {[
                          "Input",
                          "Intake",
                          "Assignment",
                          "Execution",
                          "Tracking",
                          "Completion",
                        ].map((step, index) => (
                          <div
                            key={step}
                            className={`flex items-center gap-4 ${index === 1 ? "flow-active" : ""}`}
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm font-semibold text-white">
                              {index + 1}
                            </div>
                            <div className="text-sm font-medium tracking-[0.02em] text-slate-200">{step}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal delayMs={80}>
        <section className="section-shell section-shell-dark pt-0">
          <div className="section-inner">
            <div className="mb-6 flex items-center justify-between gap-6">
              <div>
                <p className="eyebrow text-[color:var(--color-accent)]">Selected environments and engagements</p>
                <p className="mt-3 max-w-[620px] text-base leading-7 text-slate-400">
                  Organizations that have worked with Farcelis AI Consulting LLC.
                </p>
              </div>
            </div>
            <LogoMarquee logos={approvedLogos} dark />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <p className="eyebrow text-[color:var(--color-accent)]">Problem Interruption</p>
            <h2 className="section-title mt-5 max-w-[1050px] text-white">
              Most organizations do not fail because they lack people. They fail because the
              system behind execution never got built.
            </h2>
            <p className="mt-6 max-w-[700px] text-xl leading-9 text-slate-300">
              Farcelis builds the layer that keeps operating pressure from turning into drag,
              delay, and decision blindness.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[#9f412c]">Flagship System</p>
              <h2 className="section-title mt-5 text-slate-950">
                The Control Layer is the flagship Farcelis system when execution needs one frame.
              </h2>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-600">
                It sits inside a broader Farcelis operating model for workflow architecture,
                AI consulting, and execution design.
              </p>
              <div className="mt-8 grid gap-3">
                {flagshipPoints.map((point) => (
                  <div
                    key={point}
                    className="border-l border-slate-300 pl-5 text-base leading-8 text-slate-700"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-light rounded-[30px] px-6 py-8">
              <SystemFlowRail steps={["Input", "Intake", "Route", "Execute", "Track", "Close"]} light />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={180}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">What Farcelis Does</p>
              <h2 className="section-title mt-5 text-white">
                Farcelis is the operating partner behind cleaner execution.
              </h2>
            </div>
            <div className="divide-y divide-white/8 border-y border-white/8">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 lg:grid-cols-[72px_minmax(0,1fr)] ${index % 2 === 1 ? "lg:translate-x-8" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <div className="text-xl font-medium leading-8 text-slate-200">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={220}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">Who This Is For</p>
              <h2 className="section-title mt-5 text-slate-950">
                Farcelis works anywhere complexity keeps outrunning structure.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {audiences.map((item) => (
                <div key={item.label} className="border-t border-slate-200 pt-5">
                  <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {item.label}
                  </div>
                  <div className="mt-3 text-base leading-8 text-slate-600">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={260}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div className="max-w-[760px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Services</p>
              <h2 className="section-title mt-5 text-white">
                Service paths built around system design instead of disconnected deliverables.
              </h2>
            </div>
            <div className="mt-10 divide-y divide-white/8 border-y border-white/8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid gap-5 py-8 lg:grid-cols-[92px_320px_minmax(0,1fr)] ${index % 2 === 1 ? "lg:translate-x-6" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.045em] text-white">
                    {service.title}
                  </h3>
                  <div>
                    <p className="max-w-[760px] text-base leading-8 text-slate-300">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {(service.points.length > 0 ? service.points : servicePillars).map((point) => (
                        <span
                          key={point}
                          className="signal-pill rounded-full px-4 py-2 text-sm"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={300}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">Proof</p>
              <h2 className="section-title mt-5 text-slate-950">
                Credibility anchored to execution, not inflated outcomes.
              </h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {proofSignals.map((item) => (
                <div key={item} className="py-6 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                  {item}
                </div>
              ))}
              <div className="py-6 text-base leading-8 text-slate-600">
                Execution systems deployed across cybersecurity, operations, and AI environments.
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={340}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Decision Point</p>
              <h2 className="section-title mt-5 text-white">
                Bring structure to the operation before more complexity compounds it.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(159,65,44,0.28)]"
              >
                Work With Farcelis
              </Link>
              <Link
                href="/contact"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white hover:border-white/24 hover:bg-white/8"
              >
                Schedule a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
