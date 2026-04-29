"use client";

import Link from "next/link";

import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos } from "@/lib/site-data";

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

      <section className="system-hook-section">
        <div className="system-anchor">
          <h2>
            Operating problems
            <br />
            aren’t people problems.
            <br />
            <br />
            They’re system failures
            <br />
            hiding in plain sight.
          </h2>
          <p>When structure breaks, everything downstream pays for it.</p>
          <p className="system-payoff">
            Execution starts moving
            <br />
            <span>without friction.</span>
          </p>
        </div>

        <div className="system-timeline">
          <div className="timeline-line timeline-line-chaos" aria-hidden="true" />
          <div className="timeline-line timeline-line-stable" aria-hidden="true" />

          <div className="timeline-row timeline-row-a">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">Work doesn’t move cleanly.</span>
          </div>
          <div className="timeline-row timeline-row-b">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">Ownership drifts.</span>
          </div>
          <div className="timeline-row timeline-row-c">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">Problems show up too late.</span>
          </div>
          <div className="timeline-row timeline-row-d">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">Teams fall out of sync.</span>
          </div>

          <div className="timeline-pivot">
            <span className="timeline-pivot-rule" aria-hidden="true" />
            <span className="timeline-node timeline-node-pivot" aria-hidden="true" />
            <span className="timeline-pivot-text">This isn’t random.</span>
          </div>

          <div className="timeline-row timeline-row-intervene">
            <span className="timeline-node timeline-node-white" aria-hidden="true" />
            <span className="timeline-text timeline-text-strong">
              Leadership intervenes.
              <br />
              Partners with Farcelis.
            </span>
          </div>
          <div className="timeline-row timeline-row-build-a">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Structure gets rebuilt.</span>
          </div>
          <div className="timeline-row timeline-row-build-b">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Define how work flows.</span>
          </div>
          <div className="timeline-row timeline-row-build-c">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Stabilize decisions and handoffs.</span>
          </div>
          <div className="timeline-row timeline-row-build-d">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Remove coordination drag.</span>
          </div>
          <div className="timeline-row timeline-row-build-e">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Make it hold under pressure.</span>
          </div>
          <span className="timeline-arrow" aria-hidden="true">↓</span>
        </div>
      </section>

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

      <section className="execution-transition section-shell-dark">
        <div className="execution-transition-inner">
          <p className="section-kicker text-[#f28b5b]">Execution Layer</p>
          <p className="execution-transition-headline">
            Work stops resetting. It <span>starts compounding</span>.
          </p>
          <p>
            Execution starts moving <span>without friction</span>.
          </p>
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
