"use client";

import Link from "next/link";

import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos } from "@/lib/site-data";

const systemModules = [
  {
    label: "Workflow",
    text: "Intake, routing, and handoffs move through one operating path.",
  },
  {
    label: "Execution",
    text: "Owners, priorities, and next actions stay visible as work moves.",
  },
  {
    label: "Control",
    text: "Leaders see drift early enough to intervene before it spreads.",
  },
  {
    label: "Alignment",
    text: "Teams, tools, and decisions stay connected to the same operating logic.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Control Layer Design",
    description: "Map intake, routing, ownership, and visibility into one operating structure.",
  },
  {
    number: "02",
    title: "Systems & Agents",
    description: "Deploy AI support where the work needs decisions, handoffs, and context preserved.",
  },
  {
    number: "03",
    title: "Workflow Automation",
    description: "Connect tools and tasks so execution moves without creating new coordination drag.",
  },
  {
    number: "04",
    title: "Enablement",
    description: "Train the operating rhythm so the structure holds under real pressure.",
  },
];

export function HomeExperience() {
  return (
    <div className="relative overflow-hidden">
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Farcelis AI Consulting LLC</div>

          <h1 className="hero-title">
            If your systems can&apos;t hold,
            <br />
            nothing else matters.
          </h1>

          <p className="hero-subtext">
            Farcelis builds AI-driven execution infrastructure that brings order to complexity,
            aligns workflows, and gives companies control before growth turns unstable.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Start Building Structure
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore the System
            </Link>
          </div>
        </div>
      </section>

      <Reveal delayMs={70}>
        <section className="structured-section section-shell-light">
          <div className="layout-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
              <div>
                <p className="section-kicker text-[#9f412c]">Implementation Path</p>
                <h2 className="mt-5 max-w-[18ch] text-[clamp(1.75rem,3vw,2.7rem)] font-medium leading-[1.12] tracking-[-0.04em] text-slate-950">
                  Structure doesn&apos;t get installed all at once. It gets built, layered, and enforced over time.
                </h2>
                <p className="mt-6 max-w-[460px] text-lg leading-8 text-slate-600">
                  These are the paths that move operations from chaos into control.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-[1.42rem] top-7 hidden h-[calc(100%-3.5rem)] w-px bg-slate-300/80 sm:block" />
                <div className="space-y-9">
                  {implementationSteps.map((step) => (
                    <div
                      key={step.number}
                      className="relative grid gap-5 border-b border-slate-300/70 pb-9 last:border-b-0 last:pb-0 sm:grid-cols-[3.2rem_minmax(0,1fr)]"
                    >
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-[#f5f0e8] text-sm font-semibold tracking-[0.12em] text-[#9f412c]">
                        {step.number}
                      </div>
                      <div className="pt-1">
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-2 max-w-[620px] text-base leading-8 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="structured-section structured-section--showcase section-shell-dark dashboard-showcase">
          <div className="showcase-container">
            <div className="mx-auto max-w-[1380px]">
              <h2 className="text-[clamp(2.1rem,3.55vw,3.7rem)] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                The Farcelis Control Layer<span className="align-super text-[0.28em] tracking-normal">TM</span> turns scattered execution
                <br />
                into a live operating workspace.
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-slate-300">
                It is the operating frame Farcelis deploys when a business, team, or environment
                needs one place for intake, routing, accountability, and intervention.
              </p>
            </div>
          </div>

          <div className="showcase-container mt-16 lg:mt-20">
              <div className="dashboard-preview-glow">
                <WorkspacePreview />
              </div>

              <div className="mt-7 space-y-2">
                <IntegrationLogoLane reverse />
                <div className="surface-dark px-1 py-0">
                  <SystemFlowRail steps={["Input", "Intake", "Route", "Execute", "Track", "Close"]} />
                </div>
                <IntegrationLogoLane />
              </div>
            </div>
        </section>
      </Reveal>

      <Reveal delayMs={230}>
        <section className="structured-section section-shell-dark systems-fail-section">
          <div className="layout-container">
            <div className="grid gap-16 lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:gap-[112px]">
              <div className="lg:py-6">
                <p className="section-kicker text-[#f28b5b]">Why Systems Fail</p>
                <h2 className="mt-8 max-w-[19ch] text-[clamp(2.75rem,4.9vw,5.05rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white">
                  Operating problems are rarely people problems.
                  <br />
                  <br />
                  They are system failures hiding in plain sight.
                </h2>
                <p className="mt-10 max-w-[470px] text-[clamp(1.12rem,1.32vw,1.35rem)] leading-8 text-slate-300">
                  When structure breaks, everything downstream pays for it.
                </p>
              </div>

              <div className="space-y-6 lg:pt-10">
                {systemModules.map((item, index) => {
                  const isWorkflow = index === 0;
                  const offsets = ["", "lg:ml-[16%]", "lg:ml-[30%]", "lg:ml-[6%]"];

                  return (
                    <div
                      key={item.label}
                      className={`border-l pl-6 ${offsets[index]} ${
                        isWorkflow
                          ? "border-[#f28b5b]/70 pb-10 pl-8"
                          : "border-cyan-100/14 opacity-88"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-semibold uppercase tracking-[0.2em] text-[#f28b5b] ${
                            isWorkflow ? "text-base" : "text-xs"
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className={`font-semibold uppercase tracking-[0.22em] text-slate-400 ${
                            isWorkflow ? "text-sm text-slate-300" : "text-xs"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <div
                        className={`mt-4 max-w-[42rem] font-medium tracking-[-0.04em] text-slate-100 ${
                          isWorkflow
                            ? "text-[clamp(1.7rem,2.35vw,2.35rem)] leading-[1.18]"
                            : "text-[clamp(1rem,1.12vw,1.15rem)] leading-7"
                        }`}
                      >
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="mt-16 max-w-none border-t border-cyan-100/16 pt-10 text-[clamp(2.25rem,4vw,4.1rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white">
              Fix the structure.
              <br />
              The problems stop compounding.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={250}>
        <section className="structured-section section-shell-light validation-section">
          <div className="showcase-container">
            <div className="validation-inner">
              <h2 className="text-[clamp(1.45rem,2.15vw,1.95rem)] font-[550] leading-[1.18] tracking-[-0.04em] text-slate-950">
                Validation comes from environments where structure has to hold.
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Working inside real operations sharpens both sides. Systems get tested. Assumptions get broken. What holds becomes repeatable.
              </p>
            </div>
            <div className="logo-row opacity-80">
              <LogoMarquee logos={approvedLogos} dark={false} bare />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={270}>
        <section className="structured-section structured-section--closing closing-cta-section">
          <div className="w-full px-6 lg:px-12">
            <div className="w-full">
              <h2 className="mx-auto max-w-none text-center text-[clamp(1.5rem,2.1vw,2.05rem)] font-medium leading-[1.12] tracking-[-0.04em] text-white">
                If execution keeps slipping, the next move is not more software.
                <br />
                It is a stronger system.
              </h2>
              <p className="mx-auto mt-5 max-w-none text-center text-[clamp(0.98rem,1.08vw,1.08rem)] leading-7 text-slate-300">
                Farcelis builds the operating structure that keeps ownership, routing, and execution intact when the pressure increases.
              </p>
              <div className="closing-cta-actions mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f19a6b,#c75d33)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(199,93,51,0.3)]"
                >
                  Work With Farcelis
                </Link>
                <Link
                  href="/contact"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-100/6 px-6 py-3 text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/9"
                >
                  Schedule a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
