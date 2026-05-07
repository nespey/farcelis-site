/* eslint-disable @next/next/no-img-element */

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { DashboardActivityDriver } from "@/components/DashboardActivityDriver";
import { seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.controlLayer);

const cyberLogos = [
  { name: "Booz Allen", logo: "/logos/control-layer/cyber/booz-allen.png" },
  { name: "Leidos", logo: "/logos/control-layer/cyber/leidos.png" },
  { name: "General Dynamics", logo: "/logos/control-layer/cyber/general-dynamics.png" },
  { name: "Lockheed Martin", logo: "/logos/control-layer/cyber/lockheed-martin.png" },
  { name: "Northrop Grumman", logo: "/logos/control-layer/cyber/northrop-grumman.png" },
  { name: "Peraton", logo: "/logos/control-layer/cyber/peraton.png" },
  { name: "CACI", logo: "/logos/control-layer/cyber/caci.png" },
  { name: "RTX", logo: "/logos/control-layer/cyber/rtx.png" },
  { name: "BAE Systems", logo: "/logos/control-layer/cyber/bae-systems.png" },
  { name: "Accenture Federal", logo: "/logos/control-layer/cyber/accenture-federal.png" },
  { name: "Microsoft", logo: "/logos/control-layer/cyber/microsoft.png" },
  { name: "Cisco", logo: "/logos/control-layer/cyber/cisco.png" },
  { name: "Fortinet", logo: "/logos/control-layer/cyber/fortinet.png" },
  { name: "CrowdStrike", logo: "/logos/control-layer/cyber/crowdstrike.png" },
  { name: "Cloudflare", logo: "/logos/control-layer/cyber/cloudflare.png" },
];

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

function LogoScroll({
  logos,
  reverse = false,
  variant = "cyber",
}: {
  logos: typeof cyberLogos;
  reverse?: boolean;
  variant?: "cyber" | "household";
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
  const possibilityCards = [
    {
      title: "Any operating surface",
      body: "If the work is scattered, the Control Layer gives it a command surface. Revenue, delivery, cash, compliance, hiring, household logistics, and executive pressure all become visible enough to move.",
    },
    {
      title: "Any signal source",
      body: "The system does not wait for perfect data. It pulls signal from email, calendars, spreadsheets, CRMs, forms, documents, finance tools, task systems, and human check-ins, then turns noise into routed work.",
    },
    {
      title: "Any decision rhythm",
      body: "Daily triage, weekly reviews, contract calls, cash planning, family planning, pursuit tracking, and escalation loops stop floating. Each rhythm gets a place, an owner, and a next move.",
    },
    {
      title: "Any visual language",
      body: "The board can feel like a secure command post, a bright household cockpit, a founder's cockpit, a sales war room, or a mission board built for one exact team. The environment bends to the client.",
    },
  ];

  return (
    <>
      <DashboardActivityDriver />
      <PageIntro
        className="control-intro-section control-hero"
        eyebrow="Custom Execution Systems"
        title="A Control Layer can become whatever operating surface your work, household, or organization needs."
        description="The two builds below are not the limits of the product. They are proof that the same architecture can be tailored into radically different command environments, each with its own data, rhythm, integrations, visual language, and decision logic."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/services", label: "See Service Paths", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell control-showcase-section">
          <div className="section-inner">
            <LogoScroll logos={cyberLogos} variant="cyber" />
            <div className="control-case-grid">
              <div className="dashboard-mini-frame dashboard-mini-frame--cyber">
                <ParagonMockDashboard />
              </div>
              <div className="control-case-copy">
                <p className="eyebrow text-[color:var(--color-accent)]">Cyber / GovCon Control Layer</p>
                <h2 className="section-title mt-5 text-white">
                  A mission-ready command surface for contracts, evidence, delivery risk, and leadership decisions.
                </h2>
                <p className="mt-6 max-w-[780px] text-lg leading-8 text-slate-300">
                  This is one possible operating view for a compliance-driven cybersecurity company: contract lanes, CMMC evidence, deliverables,
                  burn trackers, ownership, and executive stoplights moving in one governed frame. The board keeps scanning, clearing,
                  re-ranking, and surfacing the next intervention so the team is not hunting through email, folder systems, and stale
                  status calls to understand what matters.
                </p>
                <div className="case-proof-grid">
                  {["Evidence readiness", "Contract closeout", "Owner accountability", "Decision queue"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <LogoScroll logos={cyberLogos} reverse variant="cyber" />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
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
                  Every organization eventually needs a command system built around how it actually moves. The Control Layer should
                  adapt to the work, learn from its signals, and reduce pressure instead of forcing people to bend around another tool.
                </blockquote>
                <p className="founder-quote-name">Nathan Espey</p>
                <p className="founder-quote-role">Founder, Farcelis AI Consulting LLC</p>
              </figcaption>
            </figure>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell control-showcase-section control-showcase-section--home">
          <div className="section-inner">
            <LogoScroll logos={householdLogos} variant="household" />
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
                  This is a different kind of Control Layer: a live command center for finances, calendars, appointments, embedded email, job-finder
                  activity, shared lists, follow-ups, and family logistics stay visible together. It keeps moving in the background,
                  turning new signals into tasks, updating priorities, and showing what needs attention before it becomes another
                  open loop.
                </p>
                <div className="case-proof-grid">
                  {["Bills and cash flow", "Appointments", "Family tasks", "Career pipeline"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <LogoScroll logos={householdLogos} reverse variant="household" />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={210}>
        <section className="section-shell section-shell-dark infinite-control-section">
          <div className="section-inner">
            <div className="endless-anchor-layout">
              <div className="possibility-stack">
                {possibilityCards.slice(0, 2).map((point) => (
                  <div key={point.title} className="possibility-card">
                    <strong>{point.title}</strong>
                    <p>{point.body}</p>
                  </div>
                ))}
              </div>

              <div className="infinite-copy">
                <p className="eyebrow endless-kicker text-[#9f412c]">Endless System Shapes</p>
                <h2 className="section-title mt-5 text-white">
                  The real product is a Control Layer shaped around whatever needs to be commanded.
                </h2>
                <p className="mt-6 max-w-[760px] text-lg leading-8 text-slate-300">
                  A founder can command revenue, delivery, cash, and content. A contractor can command compliance, obligations,
                  evidence, and risk. A household can command calendars, bills, email, appointments, and career movement. The
                  architecture adapts to the environment instead of forcing the environment into a template.
                </p>
              </div>

              <div className="possibility-stack">
                {possibilityCards.slice(2).map((point) => (
                  <div key={point.title} className="possibility-card">
                    <strong>{point.title}</strong>
                    <p>{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
