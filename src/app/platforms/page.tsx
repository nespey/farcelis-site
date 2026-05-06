import Image from "next/image";

import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.platforms);

const platformBands = [
  "AI agents",
  "CRM and revenue systems",
  "Workflow platforms",
  "Marketing and content systems",
  "Reporting environments",
];

const stackCapabilities = [
  {
    title: "AI agents and assistants",
    platform: "Role-specific assistants for intake, follow-up, documentation, research, customer support, marketing, and operational execution.",
    assistant: "Meeting, document, revenue, and operations pulse assistants work inside the stack with a defined job, bounded data context, review path, and destination for the output.",
  },
  {
    title: "CRM and revenue platforms",
    platform: "HubSpot, Salesforce, pipeline workflows, lead routing, customer handoffs, and revenue visibility structured around how the business actually sells and serves.",
    assistant: "Revenue assistants support account research, lifecycle notes, sales preparation, and handoff quality without separating AI output from CRM reality.",
  },
  {
    title: "Workflow and project systems",
    platform: "ClickUp, Monday, Asana, Jira, Smartsheet, and related work systems configured around ownership, priority, routing, and reporting.",
    assistant: "Follow-through assistants capture decisions, extract next actions, assign owners, and push updates into the system where the work actually lives.",
  },
  {
    title: "Microsoft and Google workspaces",
    platform: "Teams, SharePoint, Outlook, Gmail, Drive, Docs, Sheets, and collaboration environments connected into cleaner execution paths.",
    assistant: "Knowledge assistants turn SOPs, policies, project notes, and recurring documentation into reusable support for teams that need consistent execution.",
  },
  {
    title: "Content, SEO, and social platforms",
    platform: "Publishing, social media management, blog systems, search optimization, content calendars, and campaign reporting connected to measurable outcomes.",
    assistant: "Content assistants help with briefs, repurposing, campaign coordination, and review-ready drafts while the calendar, approvals, and reporting stay connected.",
  },
  {
    title: "Dashboards and decision systems",
    platform: "Reporting layers turn operational signals into leadership-ready views for decisions, intervention, and accountability.",
    assistant: "Operations pulse assistants watch status, blockers, priority movement, and stale work so leaders can intervene before execution becomes invisible.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Platforms and Integrations"
        title="Farcelis connects the tools already carrying the work into one cleaner operating environment."
        description="AI agents, CRM systems, workflow tools, collaboration platforms, marketing systems, and reporting layers become stronger when they are arranged around ownership, routing, visibility, and action."
        actions={[
          { href: "/contact", label: "Map Your Stack" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Connected Stack</p>
              <h2 className="section-title mt-5 text-white">
                The point is not more software. The point is a stack that behaves like a system.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                Farcelis works across the platforms teams already use, then adds structure around how signals enter, move, get assigned, and get reported.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] px-5 py-6 shadow-[0_24px_70px_rgba(3,8,16,0.22)]">
              <IntegrationLogoLane />
              <div className="my-5 grid gap-3 sm:grid-cols-2">
                {platformBands.map((band) => (
                  <div
                    key={band}
                    className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-200"
                  >
                    {band}
                  </div>
                ))}
              </div>
              <IntegrationLogoLane reverse />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="platform-stack-header">
              <div className="max-w-[820px]">
                <p className="eyebrow text-[#9f412c]">Platform Capabilities</p>
                <h2 className="section-title mt-5 text-slate-950">
                  Platforms, assistants, and reporting should behave like one operating system.
                </h2>
                <p className="mt-6 max-w-[760px] text-base leading-8 text-slate-600">
                  Farcelis connects the stack around the actual path of work: where requests enter, who owns the next move, what an assistant can safely support, and how leaders see progress before pressure compounds.
                </p>
              </div>

              <aside className="platform-quote-card">
                <div className="platform-quote-image">
                  <Image
                    src="/images/team/katalin-platforms-quote.jpeg"
                    alt="Katalin Espey"
                    width={420}
                    height={420}
                    sizes="(max-width: 768px) 35vw, 180px"
                  />
                </div>
                <div>
                  <blockquote>
                    “Our services are not more software. The point is a stack that behaves like a system.”
                  </blockquote>
                  <p>Katalin Espey</p>
                  <span>Chief Services Officer</span>
                </div>
              </aside>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {stackCapabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`platform-stack-card enterprise-card ${
                    index % 2 === 1 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="h-1 w-12 rounded-full bg-[#9f412c]/80" aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{capability.platform}</p>
                  <div className="platform-assistant-note">
                    <span>Assistant layer</span>
                    <p>{capability.assistant}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
