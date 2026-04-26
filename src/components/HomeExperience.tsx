"use client";

import Link from "next/link";

import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos, services } from "@/lib/site-data";

const capabilityPillars = [
  "AI consulting",
  "Operational systems design",
  "Workflow architecture",
  "Execution systems",
];

const companyContexts = [
  {
    label: "Founders and CEOs",
    text: "When growth, visibility, and urgency stop fitting into the same operating frame.",
  },
  {
    label: "Businesses and enterprises",
    text: "When tools multiply, handoffs break, and execution needs one controlled operating layer.",
  },
  {
    label: "Government and education",
    text: "When structure, accountability, and coordination have to hold under pressure.",
  },
  {
    label: "Personal systems",
    text: "When daily operations, finances, communication, and priorities need the same discipline as business systems.",
  },
];

const serviceFrames = [
  "Flagship Control Layer implementations",
  "Custom AI consulting and agents",
  "Workflow automation grounded in operating logic",
  "Enablement built for adoption and execution",
];

const proofSignals = [
  "Selected environments and engagements",
  "Execution systems deployed across cybersecurity, operations, and AI environments",
];

export function HomeExperience() {
  return (
    <div className="relative overflow-hidden">
      <section className="section-shell section-shell-dark overflow-hidden pt-18 lg:min-h-[92svh] lg:pt-22">
        <div className="pointer-events-none absolute inset-0 subtle-grid" />
        <div className="pointer-events-none absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(106,181,214,0.16),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[8%] top-[16%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(214,140,106,0.15),transparent_72%)] blur-3xl" />
        <div className="section-inner relative grid gap-12 lg:min-h-[76svh] lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
          <Reveal delayMs={30}>
            <div className="max-w-[620px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Farcelis AI Consulting LLC</p>
              <h1 className="display-hero mt-6 text-white">
                Structure execution before complexity takes control.
              </h1>
              <p className="lede mt-6 max-w-[580px]">
                Farcelis is an AI operational systems firm for founders, operators, and
                organizations that need workflow architecture, execution control, and clearer
                decision environments before more tooling makes the problem worse.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f19a6b,#c75d33)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(199,93,51,0.32)]"
                >
                  Work With Farcelis
                </Link>
                <Link
                  href="/services"
                  className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
                >
                  See What Farcelis Builds
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {capabilityPillars.map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      index % 2 === 0
                        ? "border border-white/10 bg-white/[0.05] text-slate-200"
                        : "border border-cyan-200/12 bg-cyan-200/6 text-cyan-50"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={110}>
            <WorkspacePreview />
          </Reveal>
        </div>
      </section>

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-dark pt-0">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:items-end">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Proof</p>
              <h2 className="section-title mt-5 max-w-[10ch] text-white">
                Real companies. Real environments. Precise language.
              </h2>
              <p className="mt-5 max-w-[520px] text-base leading-8 text-slate-400">
                Organizations that have worked with Farcelis AI Consulting LLC.
              </p>
            </div>
            <div>
              <LogoMarquee logos={approvedLogos} dark />
              <p className="mt-5 text-sm leading-7 text-slate-400">{proofSignals[1]}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <p className="eyebrow text-[#9f412c]">Why Farcelis Exists</p>
            <h2 className="section-title mt-5 max-w-[14ch] text-slate-950">
              Most operating problems are not people problems. They are system failures hiding in plain sight.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Work scatters across conversations, tools, and owners.",
                "Leadership sees the problem after it has already moved.",
                "More software increases motion without increasing control.",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[24px] border px-5 py-5 text-lg font-medium leading-8 ${
                    index === 1
                      ? "border-[#9f412c]/18 bg-[#fff5ef] text-slate-900"
                      : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">One Flagship Pillar</p>
              <h2 className="section-title mt-5 text-white">
                The Control Layer is one flagship Farcelis implementation, not the whole company.
              </h2>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-300">
                It is the operating frame Farcelis deploys when a business, team, or environment
                needs one place for intake, routing, accountability, and intervention.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/control-layer"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#61c0d7,#2e7da4)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(46,125,164,0.28)]"
                >
                  Explore the Control Layer
                </Link>
                <Link
                  href="/contact"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white hover:border-white/24 hover:bg-white/8"
                >
                  Start a Strategy Call
                </Link>
              </div>
            </div>

            <div className="surface-dark rounded-[32px] px-6 py-7">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Control flow
              </div>
              <div className="mt-6">
                <SystemFlowRail steps={["Input", "Intake", "Route", "Execute", "Track", "Close"]} />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={190}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">What Farcelis Actually Does</p>
              <h2 className="section-title mt-5 text-slate-950">
                Farcelis builds capability layers across the full operating environment.
              </h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                "AI consulting for operating environments that cannot tolerate blind spots.",
                "Workflow architecture that keeps handoffs, reporting, and decision paths intact.",
                "Execution systems that align people, priorities, and action under one structure.",
                "Control Layer deployments when the organization needs a flagship operating frame.",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 lg:grid-cols-[82px_minmax(0,1fr)] ${index % 2 === 1 ? "lg:translate-x-8" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    0{index + 1}
                  </div>
                  <div className="text-2xl font-medium tracking-[-0.04em] text-slate-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={230}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Where Farcelis Works</p>
              <h2 className="section-title mt-5 text-white">
                The same operating discipline applies across business, government, and personal systems.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {companyContexts.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-[24px] border px-5 py-5 ${
                    index === 0 || index === 3
                      ? "border-cyan-300/12 bg-cyan-200/[0.05]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {item.label}
                  </div>
                  <div className="mt-3 text-base leading-8 text-slate-300">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={270}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
              <div>
                <p className="eyebrow text-[#9f412c]">Service Paths</p>
                <h2 className="section-title mt-5 text-slate-950">
                  Service paths designed to move an operation from chaos into controlled execution.
                </h2>
              </div>
              <div className="space-y-5">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`rounded-[26px] border px-6 py-6 ${
                      index === 1
                        ? "border-[#2e7da4]/20 bg-[#eef7fb]"
                        : index === 2
                          ? "border-[#c75d33]/16 bg-[#fff5ef]"
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

      <Reveal delayMs={310}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Decision Point</p>
              <h2 className="section-title mt-5 text-white">
                If execution keeps slipping, the next move is not more software. It is a stronger system.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
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
        </section>
      </Reveal>
    </div>
  );
}
