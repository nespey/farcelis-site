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
        <video
          className="hero-architecture-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/farcelis_architectural_hold_hero_loop.mp4" type="video/mp4" />
        </video>

        <div className="hero-inner">
          <div className="eyebrow">Farcelis AI Consulting LLC</div>

          <h1 className="hero-title">
            <span className="hero-title-line">Websites, tools, and follow-up</span>
            <br />
            <span className="hero-title-line">that keep work moving.</span>
          </h1>

          <p className="hero-subtext">
            Farcelis builds websites, quote tools, apps, dashboards, automations,
            and support paths for businesses that need clearer systems.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Work With Farcelis
            </Link>
            <Link href="/services" className="btn-secondary">
              Review Services
            </Link>
          </div>
        </div>
      </section>

      <section className="system-hook-section">
        <div className="system-anchor">
          <h2>
            Scattered websites,
            <br />
            forms, tools, and follow-up
            <br />
            <br />
            make customers wait
            <br />
            and teams guess.
          </h2>
          <p>Farcelis helps make the next step clear.</p>
          <p className="system-payoff">
            The work gets captured,
            <br />
            <span>owned, and followed up.</span>
          </p>
        </div>

        <div className="system-timeline">
          <div className="timeline-line timeline-line-chaos" aria-hidden="true" />
          <div className="timeline-line timeline-line-stable" aria-hidden="true" />

          <div className="timeline-row timeline-row-a">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">A visitor has a question.</span>
          </div>
          <div className="timeline-row timeline-row-b">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">The form is too vague.</span>
          </div>
          <div className="timeline-row timeline-row-c">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">The quote details are missing.</span>
          </div>
          <div className="timeline-row timeline-row-d">
            <span className="timeline-node timeline-node-orange" aria-hidden="true" />
            <span className="timeline-text">Follow-up depends on memory.</span>
          </div>

          <div className="timeline-pivot">
            <span className="timeline-pivot-rule" aria-hidden="true" />
            <span className="timeline-node timeline-node-pivot" data-system-pivot aria-hidden="true" />
            <span className="timeline-pivot-text">This can be fixed.</span>
          </div>

          <div className="timeline-row timeline-row-intervene">
            <span className="timeline-node timeline-node-white" aria-hidden="true" />
            <span className="timeline-text timeline-text-strong">
              Farcelis maps the path.
              <br />
              Then builds it.
            </span>
          </div>
          <div className="timeline-row timeline-row-build-a">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Service pages get clearer.</span>
          </div>
          <div className="timeline-row timeline-row-build-b">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Forms ask better questions.</span>
          </div>
          <div className="timeline-row timeline-row-build-c">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Quote requests carry the right details.</span>
          </div>
          <div className="timeline-row timeline-row-build-d">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">Leads go to the right follow-up.</span>
          </div>
          <div className="timeline-row timeline-row-build-e">
            <span className="timeline-node timeline-node-green" aria-hidden="true" />
            <span className="timeline-text">The team can see what happened.</span>
          </div>
          <span className="timeline-arrow" aria-hidden="true">↓</span>
        </div>
      </section>

      <Reveal delayMs={230}>
        <section className="structured-section structured-section--showcase section-shell-dark dashboard-showcase">
          <div className="showcase-container">
            <div className="mx-auto max-w-[1380px]">
              <h2 className="text-[clamp(2rem,2.65vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.045em] text-white">
                The Farcelis Control Layer<span className="align-super text-[0.28em] tracking-normal">TM</span> gives teams one place
                <br />
                to see requests, owners, status, and next actions.
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-slate-300">
                Use it when forms, tasks, dashboards, approvals, and follow-up need to stop living in separate places.
              </p>
            </div>
          </div>

          <div className="showcase-container mt-16 lg:mt-20">
              <div className="dashboard-preview-glow scroll-zoom">
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

      <Reveal delayMs={270}>
        <section className="structured-section section-shell-light validation-section">
          <div className="showcase-container">
            <div className="validation-inner">
              <h2 className="text-[clamp(1.45rem,2.15vw,1.95rem)] font-[550] leading-[1.18] tracking-[-0.04em] text-slate-950">
                Built for real teams, real requests, and real follow-up.
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Farcelis work is shaped around practical use: what the customer sees, what the team receives, and what has to happen next.
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
                Need the website, quote path, dashboard, or follow-up cleaned up?
                <br />
                Start with the service that matches the problem.
              </h2>
              <p className="mx-auto mt-5 max-w-none text-center text-[clamp(1rem,1.08vw,1.08rem)] leading-7 text-slate-300">
                Farcelis can build what is missing, grow what needs attention, or keep the work organized after launch.
              </p>
              <div className="closing-cta-actions mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f19a6b,#c75d33)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(199,93,51,0.3)]"
                >
                  Work With Farcelis
                </Link>
                <Link
                  href="/resources"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-100/6 px-6 py-3 text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/9"
                >
                  Review Executive Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
