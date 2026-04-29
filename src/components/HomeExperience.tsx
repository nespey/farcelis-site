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
    text: "Work doesn’t move cleanly.",
  },
  {
    label: "Execution",
    text: "Ownership and priorities drift.",
  },
  {
    label: "Control",
    text: "Problems show up too late.",
  },
  {
    label: "Alignment",
    text: "Teams and tools fall out of sync.",
  },
];

const implementationItems = [
  {
    label: "Design",
    text: "Define how work flows.",
  },
  {
    label: "Support",
    text: "Stabilize decisions and handoffs.",
  },
  {
    label: "Automation",
    text: "Remove coordination drag.",
  },
  {
    label: "Enablement",
    text: "Make it hold under pressure.",
  },
];

const executionOutputs = [
  {
    label: "Content",
    text: "Articles, blogs, resumes, and narratives that actually get used.",
  },
  {
    label: "Visibility",
    text: "Search, social, and distribution that compound instead of reset.",
  },
  {
    label: "Platforms",
    text: "Websites, systems, and code that support how work actually moves.",
  },
  {
    label: "Identity",
    text: "Portfolios and digital presence that reflect real capability.",
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
        <section className="structured-section system-compact-section section-shell-dark systems-fail-section">
          <div className="layout-container">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-[55%]">
                <p className="section-kicker text-[#f28b5b]">Why Systems Fail</p>
                <h2 className="mt-4 max-w-[680px] text-[clamp(2rem,2.35vw,2.25rem)] font-medium leading-[1.14] tracking-[-0.04em] text-white">
                  Operating problems aren’t people problems.
                  <br />
                  They’re system failures hiding in plain sight.
                </h2>
                <p className="mt-4 max-w-[480px] text-[clamp(1rem,1.15vw,1.125rem)] leading-7 text-slate-300">
                  When structure breaks, everything downstream pays for it.
                </p>
              </div>

              <div className="space-y-6 lg:w-[45%]">
                {systemModules.map((item) => (
                  <div key={item.label}>
                    <div className="text-[clamp(0.875rem,1vw,1rem)] font-semibold tracking-[0.08em] text-slate-400">
                      {item.label}
                    </div>
                    <p className="mt-1 text-[clamp(1rem,1.08vw,1.125rem)] leading-7 text-slate-100">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="structured-section system-compact-section section-shell-light">
          <div className="layout-container">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-[55%]">
                <p className="section-kicker text-[#9f412c]">Implementation Path</p>
                <h2 className="mt-4 max-w-[620px] text-[clamp(2rem,2.35vw,2.25rem)] font-medium leading-[1.14] tracking-[-0.04em] text-slate-950">
                  Structure gets built, not installed.
                </h2>
                <p className="mt-4 max-w-[460px] text-[clamp(1rem,1.15vw,1.125rem)] leading-7 text-slate-600">
                  Layered. Connected. Enforced over time.
                </p>
              </div>
              <div className="space-y-6 lg:w-[45%]">
                {implementationItems.map((item) => (
                  <div key={item.label}>
                    <div className="text-[clamp(0.875rem,1vw,1rem)] font-semibold tracking-[0.08em] text-slate-500">
                      {item.label}
                    </div>
                    <p className="mt-1 text-[clamp(1rem,1.08vw,1.125rem)] leading-7 text-slate-900">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-10 text-[clamp(1.2rem,1.55vw,1.45rem)] font-medium leading-[1.2] tracking-[-0.035em] text-slate-950">
              Execution starts moving without friction.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={230}>
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

      <section className="structured-section system-compact-section section-shell-dark execution-layer-section">
        <div className="mx-auto w-full max-w-[1200px] px-[clamp(24px,5vw,72px)]">
          <div className="max-w-[620px]">
            <p className="section-kicker text-[#f28b5b]">Execution Layer</p>
            <h2 className="mt-4 text-[clamp(1.75rem,2.05vw,2rem)] font-medium leading-[1.16] tracking-[-0.04em] text-white">
              Where structure shows up
            </h2>
            <p className="mt-3 text-[clamp(1rem,1.08vw,1.125rem)] leading-7 text-slate-300">
              Once the system is in place, execution becomes consistent across every surface.
            </p>
          </div>

          <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
            {executionOutputs.map((item) => (
              <div key={item.label}>
                <div className="text-[clamp(0.875rem,1vw,1rem)] font-semibold tracking-[0.08em] text-slate-400">
                  {item.label}
                </div>
                <p className="mt-1 max-w-[460px] text-[clamp(1rem,1.08vw,1.125rem)] leading-7 text-slate-100">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reveal delayMs={270}>
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

      <Reveal delayMs={290}>
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
