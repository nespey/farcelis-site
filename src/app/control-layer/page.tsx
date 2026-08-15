/* eslint-disable @next/next/no-img-element */

import { Reveal } from "@/components/Reveal";
import { DashboardActivityDriver } from "@/components/DashboardActivityDriver";
import { seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.controlLayer);

const householdLogos = [
  { name: "Maple", logo: "/logos/control-layer/household/maple.png" },
  { name: "Familymind", logo: "/logos/control-layer/household/familymind.png" },
  { name: "Skylight", logo: "/logos/control-layer/household/skylight.png" },
  { name: "Cozyla", logo: "/logos/control-layer/household/cozyla.png" },
  { name: "Cozi", logo: "/logos/control-layer/household/cozi.png" },
  { name: "TimeTree", logo: "/logos/control-layer/household/timetree.png" },
  { name: "Google Calendar", logo: "/logos/control-layer/household/google-calendar.svg" },
  { name: "FamCal", logo: "/logos/control-layer/household/famcal.jpg" },
  { name: "Calendara", logo: "/logos/control-layer/household/calendara.png" },
  { name: "Reclaim AI", logo: "/logos/control-layer/household/reclaim-ai.png" },
  { name: "Motion", logo: "/logos/control-layer/household/motion.png" },
  { name: "Gemini", logo: "/logos/control-layer/household/gemini.png" },
  { name: "ChatGPT", logo: "/logos/control-layer/household/chatgpt.png" },
  { name: "Any.do", logo: "/logos/control-layer/household/anydo.png" },
  { name: "Todoist", logo: "/logos/control-layer/household/todoist.svg" },
  { name: "TickTick", logo: "/logos/control-layer/household/ticktick.svg" },
  { name: "Notion", logo: "/logos/control-layer/household/notion.svg" },
  { name: "ClickUp", logo: "/logos/control-layer/household/clickup.png" },
  { name: "Sunsama", logo: "/logos/control-layer/household/sunsama.png" },
];

type ControlLayerLogo = (typeof householdLogos)[number];

function LogoScroll({
  logos,
  reverse = false,
  variant = "household",
}: {
  logos: ControlLayerLogo[];
  reverse?: boolean;
  variant?: "household";
}) {
  const lane = [...logos, ...logos];

  return (
    <div className={`case-logo-lane ${reverse ? "case-logo-lane--reverse" : ""} case-logo-lane--${variant}`}>
      <div className="case-logo-track">
        {lane.map((logo, index) => (
          <div className="case-logo-pill" key={`${logo.name}-${index}`}>
            <span className="case-logo-mark">
              <img src={logo.logo} alt="" loading="lazy" />
            </span>
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
            <h1 className="mt-4 text-[clamp(2.05rem,3.4vw,3.55rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white [text-wrap:balance]">
              One operating view for scattered work, owners, status, and next moves.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              The Farcelis Control Layer sits above the tools you already use and turns requests, deadlines, documents, reports, approvals, and follow-up into routed work with a clear owner, status, and next action.
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Pull signals from tools and people",
                "Route work into accountable next steps",
                "Show leaders what is stuck or moving",
                "Shape the view around the operation",
              ].map((item) => (
                <span key={item} className="control-layer-signal-pill">{item}</span>
              ))}
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
            <div className="dashboard-mini-frame dashboard-mini-frame--cyber dashboard-mini-frame--hero">
              <ParagonMockDashboard />
            </div>
            <div className="dashboard-mini-frame dashboard-mini-frame--home dashboard-mini-frame--hero">
              <HouseholdMockDashboard />
            </div>
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="section-shell control-integration-section">
          <div className="section-inner">
            <div className="control-integration-header">
              <p className="eyebrow text-[color:var(--color-accent)]">Integration Layer</p>
              <h2>Connect the tools already carrying the work.</h2>
              <p>
                Calendars, inboxes, task systems, notes, AI assistants, and shared planning tools can feed the Control Layer instead of living as separate places to check.
              </p>
            </div>
            <LogoScroll logos={householdLogos} />
            <div className="control-flow-line" aria-label="Control Layer operating flow">
              {["Input", "Intake", "Route", "Execute", "Track", "Close"].map((stage, index) => (
                <span className={index === 2 ? "active" : ""} key={stage}>{stage}</span>
              ))}
            </div>
            <LogoScroll logos={householdLogos} reverse />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell control-showcase-section">
          <div className="section-inner">
            <div className="control-case-grid">
              <div className="dashboard-mini-frame dashboard-mini-frame--cyber">
                <ParagonMockDashboard />
              </div>
              <div className="control-case-copy">
                <p className="eyebrow text-[color:var(--color-accent)]">Business Control Layer</p>
                <h2 className="section-title mt-5 text-white">
                  A shared operating dashboard for delivery, risk, reporting, and leadership decisions.
                </h2>
                <p className="mt-6 max-w-[780px] text-lg leading-8 text-slate-300">
                  Contract work, evidence, delivery risks, owners, approvals, and decisions can live in one view so the team sees what needs attention without hunting through email, folders, and status calls.
                </p>
                <div className="case-proof-grid">
                  {["Intake", "Routing", "Owner accountability", "Decision queue"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell control-bridge-section">
          <div className="section-inner">
            <figure className="founder-quote-card">
              <div className="founder-quote-image">
                <img
                  src="/images/nathan-headshot-library-2026.png"
                  alt="Nathan Espey"
                />
              </div>
              <figcaption className="founder-quote-copy">
                <p className="eyebrow text-[#ff7f4f]">Same Architecture, Different Life</p>
                <blockquote>
                  The Control Layer should reduce pressure instead of forcing people to bend around another tool.
                </blockquote>
                <p className="founder-quote-name">Nathan Espey</p>
                <p className="founder-quote-role">Founder, Farcelis AI Consulting LLC</p>
              </figcaption>
            </figure>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={190}>
        <section className="section-shell control-showcase-section control-showcase-section--home">
          <div className="section-inner">
            <div className="control-case-grid">
              <div className="dashboard-mini-frame dashboard-mini-frame--home">
                <HouseholdMockDashboard />
              </div>
              <div className="control-case-copy">
                <p className="eyebrow text-[color:var(--color-accent)]">Household / Daily Life Control Layer</p>
                <h2 className="section-title mt-5 text-white">
                  A personal operating system for the work that normally lives in your head.
                </h2>
                <p className="mt-6 max-w-[780px] text-lg leading-8 text-slate-300">
                  This is a different kind of Control Layer: finances, calendars, appointments, email, job-finder activity, shared lists,
                  follow-ups, and family logistics stay visible together. It turns new signals into tasks and shows what needs attention
                  before it becomes another open loop.
                </p>
                <div className="case-proof-grid">
                  {["Bills and cash flow", "Appointments", "Family tasks", "Career pipeline"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
