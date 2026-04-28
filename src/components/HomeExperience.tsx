"use client";

import Link from "next/link";

import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos, services } from "@/lib/site-data";

const systemResponseCards = [
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

const serviceFrames = [
  "Flagship Control Layer implementations",
  "Custom AI consulting and agents",
  "Workflow automation grounded in operating logic",
  "Enablement built for adoption and execution",
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
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
              <div>
                <p className="section-kicker text-[#9f412c]">Service Paths</p>
                <h2 className="mt-5 max-w-[13ch] text-[clamp(1.75rem,3vw,2.7rem)] font-medium leading-[1.12] tracking-[-0.04em] text-slate-950">
                  Service paths designed to move an operation from chaos into controlled execution.
                </h2>
              </div>
              <div className="space-y-5">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`rounded-[26px] border px-6 py-6 ${
                      index === 1
                        ? "border-[#2e7da4]/22 bg-[linear-gradient(180deg,#eef7fb,#f8fcff)]"
                        : index === 2
                          ? "border-[#c75d33]/18 bg-[linear-gradient(180deg,#fff5ef,#fffaf7)]"
                          : index === 3
                            ? "border-[#8d77ff]/18 bg-[linear-gradient(180deg,#f6f3ff,#fcfbff)]"
                            : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                      {serviceFrames[index] ?? "Service path"}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="structured-section structured-section--showcase section-shell-dark dashboard-showcase">
          <div className="showcase-container">
            <div className="mx-auto max-w-[1080px]">
              <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.05em] text-white">
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
        <section className="structured-section section-shell-light">
          <div className="layout-container grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-[72px]">
            <div>
              <p className="section-kicker text-[#9f412c]">Problem to system response</p>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(2rem,3vw,2.85rem)] font-medium leading-[1.08] tracking-[-0.045em] text-slate-950">
                Operating problems are usually system failures hiding in plain sight.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {systemResponseCards.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {item.label}
                  </div>
                  <div className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-slate-950">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={250}>
        <section className="structured-section section-shell-light">
          <div className="showcase-container">
            <div className="max-w-[760px]">
              <p className="section-kicker text-[#9f412c]">Selected environments and engagements</p>
              <h2 className="mt-4 max-w-[24ch] text-[clamp(1.35rem,2vw,1.75rem)] font-[550] leading-[1.18] tracking-[-0.04em] text-slate-950">
                Validation from operating environments where structure has to hold.
              </h2>
              <p className="mt-4 max-w-[680px] text-[0.95rem] leading-7 text-slate-600">
                Real work across cybersecurity, operations, intelligence, and execution design.
              </p>
            </div>
            <div className="mt-8 opacity-80">
              <LogoMarquee logos={approvedLogos} dark={false} bare />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={270}>
        <section className="structured-section structured-section--closing closing-cta-section">
          <div className="w-full px-6 lg:px-12">
            <div className="w-full">
              <h2 className="mx-auto max-w-[1040px] text-center text-[clamp(1.65rem,2.45vw,2.45rem)] font-medium leading-[1.14] tracking-[-0.04em] text-white">
                If execution keeps slipping, the next move is not more software. It is a stronger system.
              </h2>
              <p className="mx-auto mt-5 max-w-[940px] text-center text-[clamp(1.08rem,1.35vw,1.25rem)] leading-8 text-slate-300">
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
