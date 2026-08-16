/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DashboardActivityDriver } from "@/components/DashboardActivityDriver";
import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.controlLayer);

function ParagonMockDashboard() {
  const tabs = ["Command", "Pipeline", "Delivery", "Compliance", "Executive", "Decisions", "Continuity", "Documents"];
  const metrics = [
    ["12", "Open actions", "Active execution items"],
    ["4", "Open decisions", "Governance closure"],
    ["6", "Active engagements", "Live delivery work"],
    ["5", "Deliverables at risk", "Due inside 7 days"],
    ["1", "Proposals out", "Awaiting response"],
    ["6", "Control gaps", "Compliance alignment"],
    ["3", "Continuity items", "Continuity work"],
  ];
  const queue = [
    ["Resolve certification status", "Critical", "Open"],
    ["Stabilize contract health", "Escalate", "Due"],
    ["Update readiness evidence", "Execute", "Today"],
    ["Route funding posture", "Decision", "Review"],
    ["Package continuity file", "Docs", "Next"],
  ];
  const spotlight = [
    ["Security readiness", "Certification status is red", "Red"],
    ["Contract health", "Portfolio health needs executive review", "Amber"],
    ["Governance issue", "Decision path requires owner closure", "Open"],
  ];

  return (
    <div className="case-dashboard gov-dashboard">
      <div className="gov-ribbon">
        <div className="gov-brand-mark" />
        <strong>Control Layer</strong>
        <div className="gov-tabs">
          {tabs.map((tab, index) => (
            <span className={index === 0 ? "active" : ""} style={{ animationDelay: `${index * 0.18}s` }} key={tab}>{tab}</span>
          ))}
        </div>
      </div>
      <div className="gov-hero-strip">
        <strong>Operational Command Grid</strong>
        <span>CMMC readiness • Executive visibility • Contract delivery • Governed documentation</span>
      </div>
      <div className="gov-metrics">
        {metrics.map(([value, label, detail], index) => (
          <div className="gov-metric-card" style={{ animationDelay: `${index * 0.18}s` }} key={label}>
            <b>{label}</b>
            <strong>{value}</strong>
            <span>{detail}</span>
          </div>
        ))}
      </div>
      <div className="gov-toolbar">
        <span>Owner</span>
        <span>Priority</span>
        <span>Status</span>
        <b>Search clients, controls, decisions, deliverables</b>
        <button type="button">Reset cleared items</button>
      </div>
      <div className="gov-workspace">
        <div className="gov-panel gov-panel-wide gov-execution-panel">
          <div className="gov-panel-title">Daily command view</div>
          <h3>Execution Queue</h3>
          <div className="gov-record-scroll">
            {[...queue, ...queue].map(([item, type, status], index) => (
              <div className="gov-record" style={{ animationDelay: `${index * 0.24}s` }} key={`${item}-${index}`}>
                <em>{type}</em>
                <span>{item}</span>
                <i>{status}</i>
              </div>
            ))}
          </div>
        </div>
        <div className="gov-panel gov-spotlight-panel">
          <div className="gov-panel-title">CEO visibility board</div>
          <h3>Executive Spotlight</h3>
          {spotlight.map(([type, item, status], index) => (
            <div className="gov-spotlight-card" style={{ animationDelay: `${index * 0.32}s` }} key={item}>
              <em>{type}</em>
              <span>{item}</span>
              <i>{status}</i>
            </div>
          ))}
        </div>
        <div className="gov-panel gov-contract-panel">
          <div className="gov-panel-title">Contract health</div>
          <h3>Portfolio movement</h3>
          {["Prime delivery", "Subcontract risk", "Funding posture", "Security deliverable"].map((item, index) => (
            <div className="gov-lane" style={{ animationDelay: `${index * 0.25}s` }} key={item}>
              <span>{item}</span>
              <b />
            </div>
          ))}
        </div>
        <div className="gov-panel gov-doc-panel">
          <div className="gov-panel-title">Decision queue</div>
          {["Approve", "Escalate", "Assign", "Archive", "Package docs"].map((item, index) => (
            <span className="gov-button" style={{ animationDelay: `${index * 0.28}s` }} key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="gov-cursor-trace">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} />
        ))}
      </div>
      <div className="gov-live-toast">
        <b>Routing update</b>
        <span>Risk item moved to executive spotlight</span>
      </div>
    </div>
  );
}

function HouseholdMockDashboard() {
  const nav = [
    ["Dashboard", "Main command center"],
    ["Personal Ops", "Tasks, routines, household"],
    ["Job Search", "Two active pipelines"],
    ["Finance", "Bills, accounts, budget"],
    ["Email Actions", "Inbox-derived follow-ups"],
    ["Documents", "Working references"],
    ["Shared Tools", "Scripts and automations"],
  ];
  const metrics = [
    ["48", "Open actions", "Live action queue"],
    ["23", "Due this week", "Upcoming deadlines"],
    ["5", "Bills due", "Financial pressure"],
    ["5", "Job applications", "Across pipelines"],
  ];
  const inboxes = [
    ["Primary mailbox", "Recruiting, business, personal", "10"],
    ["Shared mailbox", "Family, setup, intake", "3"],
  ];
  const actions = [
    ["Finalize assistance packet", "1 day overdue", "Act now"],
    ["Send recruiter follow-up", "Today", "Draft"],
    ["Confirm appointment documents", "Tomorrow", "Prep"],
    ["Reconcile card charge", "Open", "Review"],
  ];
  const upcoming = ["Car insurance", "Utility payment", "Dental follow-up", "Application check-in", "School form"];

  return (
    <div className="case-dashboard home-dashboard">
      <aside className="home-sidebar">
        <div className="home-brand-lockup">
          <div className="home-brand-dot" />
          <span>Control Layer</span>
        </div>
        <p>Workspace</p>
        {nav.map(([item, detail], index) => (
          <div className={`home-nav-card ${index === 0 ? "active" : ""}`} style={{ animationDelay: `${index * 0.22}s` }} key={item}>
            <b>{item}</b>
            <span>{detail}</span>
            <i>{index === 0 ? "Live" : "Open"}</i>
          </div>
        ))}
      </aside>
      <div className="home-main">
        <header className="home-hero-banner">
          <div>
            <strong>Household Operations Command</strong>
            <span>Where household, business, and opportunity stay aligned.</span>
            <em>Precision across what moves</em>
          </div>
        </header>
        <div className="home-metrics">
          {metrics.map(([value, label, detail], index) => (
            <div className="home-metric" style={{ animationDelay: `${index * 0.2}s` }} key={label}>
              <b>{label}</b>
              <strong>{value}</strong>
              <span>{detail}</span>
            </div>
          ))}
          <div className="home-control-card">
            <b>View</b>
            <div>
              {["All", "A", "B"].map((item, index) => (
                <span className="home-control-pill" style={{ animationDelay: `${index * 0.24}s` }} key={item}>{item}</span>
              ))}
            </div>
            <span>User scope</span>
          </div>
          <div className="home-control-card">
            <b>Search</b>
            <span className="home-control-pill">Search board</span>
            <span className="home-control-pill">Quick add</span>
          </div>
        </div>
        <section className="home-inboxes">
          <div className="home-panel-kicker"><i /> Live inboxes</div>
          <h3>Inbox control</h3>
          <div className="home-inbox-grid">
            {inboxes.map(([label, detail, count], index) => (
              <div className="home-inbox-card" style={{ animationDelay: `${index * 0.35}s` }} key={label}>
                <div className="home-inbox-top">
                  <span>{count} messages</span>
                  <b>Open</b>
                </div>
                <div className="home-avatar">{index === 0 ? "A" : "B"}</div>
                <strong>{label}</strong>
                <p>{detail}</p>
                <div className="home-inbox-stats">
                  <span><b>{count}</b> loaded</span>
                  <span><b>0</b> converted</span>
                  <span><b>Live</b> status</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="home-lower-grid">
          <section className="home-action-center">
            <div className="home-panel-kicker"><i /> Immediate execution</div>
            <h3>Now</h3>
            <div className="home-action-list">
              {actions.map(([item, date, status], index) => (
                <div className="home-action-row" style={{ animationDelay: `${index * 0.38}s` }} key={item}>
                  <span>{item}</span>
                  <i>{date}</i>
                  <b>{status}</b>
                </div>
              ))}
            </div>
          </section>
          <section className="home-upcoming-card">
            <div className="home-panel-kicker"><i /> Today + upcoming</div>
            <h3>Bills, follow-ups, and scheduled actions</h3>
            <div className="home-upcoming-scroll">
              {[...upcoming, ...upcoming].map((item, index) => (
                <div className="home-upcoming-row" key={`${item}-${index}`}>
                  <b>{item}</b>
                  <span>{index % 2 === 0 ? "Due today" : "Scheduled"}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="home-snapshot-grid">
          {["Finance", "Appointments", "Tasks", "Jobs", "Inbox", "Documents"].map((item, index) => (
            <span style={{ animationDelay: `${index * 0.2}s` }} key={item}>
              {item}
              <i />
            </span>
          ))}
        </div>
        <div className="home-cursor-trace">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} />
          ))}
        </div>
        <div className="home-live-toast">
          <b>Auto-routing</b>
          <span>Email converted to follow-up</span>
        </div>
      </div>
    </div>
  );
}

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
              <a
                href="/services"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                See Service Paths
              </a>
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
            <div className="control-integration-header">
              <p className="eyebrow text-[color:var(--color-accent)]">Integration Layer</p>
              <h2>Pull useful signals out of the tools already in play.</h2>
              <p>
                The Control Layer does not replace every tool. It connects the pieces that matter, then makes the work visible enough to manage.
              </p>
            </div>
            <div className="control-homepage-flow">
              <IntegrationLogoLane reverse />
              <div className="surface-dark px-1 py-0">
                <SystemFlowRail steps={["Input", "Intake", "Route", "Execute", "Track", "Close"]} />
              </div>
              <IntegrationLogoLane />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell control-showcase-section control-showcase-section--home">
          <div className="section-inner">
            <div className="control-case-grid">
              <div className="dashboard-mini-frame dashboard-mini-frame--home">
                <HouseholdMockDashboard />
              </div>
              <div className="control-case-copy">
                <p className="eyebrow text-[color:var(--color-accent)]">Example Operating Surface</p>
                <h2 className="section-title mt-5 text-white">
                  One structure can support business, household, delivery, or leadership work.
                </h2>
                <p className="mt-6 max-w-[780px] text-lg leading-8 text-slate-300">
                  The visual layer changes with the environment. The operating logic stays the same: capture the signal, route the work, name the owner, track status, and close the loop.
                </p>
                <div className="case-proof-grid">
                  {["Signal capture", "Owner routing", "Status visibility", "Close-loop follow-up"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={190}>
        <section className="section-shell section-shell-dark control-crosswalk-section">
          <div className="section-inner">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <p className="eyebrow shrink-0 text-[color:var(--color-accent)]">Connected Paths</p>
              <div className="hidden h-px flex-1 bg-[color:var(--color-accent)]/70 lg:block" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={controlContactPath} className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-center text-sm font-semibold text-white hover:brightness-110">
                  Start Control Layer Review
                </a>
                <a href="/services" className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8">
                  See Service Paths
                </a>
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

            <div className="control-compact-quote">
              <img src="/images/nathan-headshot-library-2026.png" alt="Nathan Espey" />
              <div>
                <p className="eyebrow text-[#ff7f4f]">Founder Note</p>
                <blockquote>The Control Layer should reduce pressure instead of forcing people to bend around another tool.</blockquote>
                <p>Nathan Espey · Founder, Farcelis AI Consulting LLC</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
