/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { DashboardActivityDriver } from "@/components/DashboardActivityDriver";
import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.controlLayer);

export default function ControlLayerPage() {
  const controlContactPath =
    "/contact?work=farcelis-control-layer,workflow-managed-operations,reporting-decision-systems,platform-connections,dashboards-decision-views,ai-strategy-governance&industry=operations-heavy-teams,professional-services-consulting,small-mid-market-businesses&resource=tools-assessments#contact-top";

  return (
    <>
      <DashboardActivityDriver />
      <section className="section-shell section-shell-dark control-layer-hero">
        <div className="section-inner control-layer-hero-grid">
          <div className="control-layer-hero-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">Farcelis Control Layer</p>
            <h1 className="mt-4 text-[clamp(2rem,3.05vw,3.2rem)] font-medium leading-[1.03] tracking-[-0.055em] text-white [text-wrap:balance]">
              The operating layer above scattered tools.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              It gives teams one place to capture intake, route work, assign owners, track decisions, and see what needs attention before momentum turns into drift.
            </p>
            <div className="control-layer-proof-list">
              <p><strong>Signals in:</strong> email, forms, meetings, documents, dashboards, CRMs, calendars, and task systems.</p>
              <p><strong>Control in the middle:</strong> routing, ownership, status, escalation, and decision cadence.</p>
              <p><strong>Execution out:</strong> clearer follow-up, reporting, handoffs, and leadership visibility.</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={controlContactPath}
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                Work With Farcelis
              </a>
              <Link
                href="/services"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                See Service Paths
              </Link>
            </div>
            <div className="control-compact-quote control-compact-quote--hero">
              <img src="/images/nathan-headshot-library-2026.png" alt="Nathan Espey" />
              <div>
                <p className="eyebrow text-[#ff7f4f]">Founder Note</p>
                <blockquote>The Control Layer should reduce pressure instead of forcing people to bend around another tool.</blockquote>
                <p>Nathan Espey · Founder, Farcelis AI Consulting LLC</p>
              </div>
            </div>
          </div>
          <div className="control-layer-hero-visual">
            <div className="control-layer-hero-image">
              <Image
                src="/images/control-layer/adobe-stock/control-layer-hero.jpeg"
                alt="Dark integrated operations center with live signal waves and connected data surfaces"
                width={1344}
                height={1800}
                priority
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="section-shell control-integration-section">
          <div className="section-inner">
            <div className="control-homepage-flow">
              <IntegrationLogoLane reverse />
              <div className="surface-dark px-1 py-0">
                <SystemFlowRail steps={["Input", "Intake", "Route", "Execute", "Track", "Close"]} />
              </div>
              <IntegrationLogoLane />
            </div>
            <div className="control-operating-brief">
              <div className="control-brief-copy">
                <p className="eyebrow text-[color:var(--color-accent)]">Integration Layer</p>
                <h2>Pull useful signals out of the tools already in play.</h2>
                <p>
                  The Control Layer does not replace every tool. It connects the pieces that matter, then makes the work visible enough to manage.
                </p>
              </div>
              <div className="control-operating-board" aria-label="Farcelis Control Layer live operating workspace example">
                <div className="control-homepage-board-frame">
                  <WorkspacePreview compact />
                </div>
              </div>
              <div className="control-brief-copy">
                <p className="eyebrow text-[color:var(--color-accent)]">Managed Visibility</p>
                <h2>Manage intake, owners, status, and exceptions in one operating frame.</h2>
                <p>
                  The board gives live work a place to land, a route to follow, an owner to answer for it, and a clear next move before follow-up disappears.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell section-shell-dark control-crosswalk-section">
          <div className="section-inner">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <p className="eyebrow shrink-0 text-[color:var(--color-accent)]">Connected Paths</p>
              <div className="hidden h-px flex-1 bg-[color:var(--color-accent)]/70 lg:block" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={controlContactPath} className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-center text-sm font-semibold text-white hover:brightness-110">
                  Start Control Layer Review
                </a>
                <Link href="/services" className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8">
                  See Service Paths
                </Link>
              </div>
            </div>

            <div className="control-crosswalk-grid">
              {[
                { href: "/services/workflow-managed-operations", title: "Workflow & Managed Operations", body: "Routing, ownership, cadence, support, and escalation once work is moving." },
                { href: "/services/reporting-decision-systems", title: "Reporting & Decision Systems", body: "Leadership-ready views for what is working, stuck, overdue, or ready." },
                { href: "/services/platform-connections", title: "Platform Connections", body: "Website, CRM, forms, documents, dashboards, and work tools connected cleanly." },
                { href: "/services/dashboards-decision-views", title: "Dashboards and Decision Views", body: "Focused views that show status, risk, owners, and next action." },
                { href: "/industries/operations-heavy-teams", title: "Operations-Heavy Teams", body: "Best fit when requests arrive from everywhere and daily work needs clearer routing." },
                { href: "/resources", title: "Tools & Assessments", body: "Use assessments to decide whether a Control Layer is the right next move." },
              ].map((item) => (
                <a key={item.href} href={item.href} className="control-crosswalk-card">
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
