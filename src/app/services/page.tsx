import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.services);

const operatingPrinciples = [
  {
    title: "System before tooling",
    body: "We identify how work should enter, move, get owned, and get measured before recommending another platform or AI layer.",
  },
  {
    title: "Execution before automation",
    body: "Automation only helps when the underlying workflow is clear enough to automate without hiding accountability.",
  },
  {
    title: "Governance before scale",
    body: "AI adoption needs usage rules, decision rights, risk boundaries, and review habits before it expands across a team.",
  },
];

const capabilityLanes = [
  {
    id: "ai-strategy-governance",
    eyebrow: "Capability Lane",
    title: "AI Strategy & Governance",
    description:
      "For leaders deciding where AI belongs, what should be governed, how teams should use it, and what adoption should look like before tools multiply.",
    builds: [
      "AI readiness assessment",
      "Use-case and risk prioritization",
      "Governance and usage policy",
      "Leadership adoption roadmap",
    ],
    href: "/services/ai-strategy-governance",
    cta: "Explore AI governance",
  },
  {
    id: "workflow-operations",
    eyebrow: "Capability Lane",
    title: "Workflow & Operations",
    description:
      "For teams where routing, handoffs, ownership, reporting, cadence, or follow-through have become too informal to hold under pressure.",
    builds: [
      "Workflow and handoff mapping",
      "Ownership and escalation structure",
      "Operating cadence design",
      "Execution visibility model",
    ],
    href: "/services/workflow-operations",
    cta: "Explore workflow operations",
  },
  {
    id: "control-layer",
    eyebrow: "Flagship System",
    title: "Control Layer Design & Deployment",
    description:
      "For organizations that need one operating environment above existing tools so intake, ownership, visibility, and intervention live in a controlled frame.",
    builds: [
      "Control Layer architecture",
      "Reporting and visibility design",
      "Priority and workflow mapping",
      "Implementation support",
    ],
    href: "/control-layer",
    cta: "Explore the Control Layer",
  },
  {
    id: "platforms-integrations",
    eyebrow: "Connected Stack",
    title: "Platforms, Agents & Integrations",
    description:
      "For companies that need AI agents, CRM, work management, collaboration, and reporting tools connected around real responsibilities.",
    builds: [
      "AI assistants and agents",
      "CRM and revenue workflows",
      "Platform integration logic",
      "Operational dashboards",
    ],
    href: "/platforms",
    cta: "Explore platforms",
  },
  {
    id: "growth-systems",
    eyebrow: "Growth Operations",
    title: "Marketing, SEO, Content & Revenue Systems",
    description:
      "For teams that need social, blogs, SEO, campaigns, lead capture, CRM follow-through, and reporting to behave like one operating system.",
    builds: [
      "SEO and content systems",
      "Social media management",
      "Campaign and lead workflows",
      "Revenue operations visibility",
    ],
    href: "/contact",
    cta: "Discuss growth systems",
  },
  {
    id: "managed-operations",
    eyebrow: "Execution Support",
    title: "Managed Operations & Enablement",
    description:
      "For leaders who need director-of-operations style support, workflow intervention, AI enablement, and practical execution cadence while the system matures.",
    builds: [
      "Fractional operations support",
      "Workflow intervention",
      "Team AI enablement",
      "Operating rhythm design",
    ],
    href: "/contact",
    cta: "Discuss managed support",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="Farcelis organizes AI, workflow, platforms, growth, and execution into clear service lanes."
        description="This page is the map. Each lane below explains what problem it solves, what Farcelis builds, and where to go next."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
        asideTitle="How to read this page"
        asideItems={[
          "Choose AI Strategy when the question is what AI should do, how it should be governed, and how adoption should happen.",
          "Choose Workflow & Operations when work is already moving but routing, ownership, cadence, or visibility are breaking down.",
          "Choose Control Layer when the business needs a single operating environment above the tools already in place.",
        ]}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Service Model</p>
              <h2 className="section-title mt-5 text-white">
                The model is simple: stabilize the operating logic, then apply AI and automation where they can actually hold.
              </h2>
            </div>

            <div className="grid gap-4">
              {operatingPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[24px] border border-cyan-100/12 bg-white/[0.045] px-6 py-6"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[880px]">
              <p className="eyebrow text-[#9f412c]">Capability Lanes</p>
              <h2 className="section-title mt-5 text-slate-950">
                Distinct paths, clear jobs, one operating system underneath.
              </h2>
              <p className="mt-5 max-w-[760px] text-base leading-8 text-slate-600">
                The lanes are not meant to be a long menu of disconnected services. They are the major ways Farcelis enters a business depending on the problem a leader is trying to solve.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {capabilityLanes.map((lane) => (
                <article
                  key={lane.id}
                  id={lane.id}
                  className="enterprise-card rounded-[28px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {lane.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {lane.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{lane.description}</p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {lane.builds.map((item) => (
                      <div
                        key={item}
                        className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={lane.href}
                    className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-[#9f412c]/20 px-5 py-2.5 text-sm font-semibold text-[#9f412c] transition hover:border-[#9f412c]/40 hover:bg-[#9f412c]/5"
                  >
                    {lane.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
