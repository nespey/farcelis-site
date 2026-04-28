"use client";

import Link from "next/link";

import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos, services } from "@/lib/site-data";

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

export function HomeExperience() {
  return (
    <div className="relative overflow-hidden">
      <section className="section-shell section-shell-dark overflow-hidden pt-18 lg:min-h-[92svh] lg:pt-22">
        <div className="pointer-events-none absolute left-[8%] top-[14%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,214,160,0.16),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(106,181,214,0.14),transparent_72%)] blur-3xl" />
        <div className="section-inner relative grid gap-10 lg:min-h-[76svh] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal delayMs={30}>
            <div className="home-hero-copy max-w-[700px] text-left lg:col-start-2 lg:justify-self-end">
              <p className="hero-brand-type eyebrow mx-0 text-left text-[0.9rem] tracking-[0.2em] text-[color:var(--color-accent)]">
                Farcelis AI Consulting LLC
              </p>
              <h1 className="mt-8 max-w-[680px] text-left font-medium text-white">
                <span className="block text-[clamp(2.85rem,5vw,4rem)] leading-[1.08] tracking-[-0.05em]">
                  If your systems can&apos;t hold,
                </span>
                <span className="mt-2 block text-[clamp(2.5rem,4.4vw,3.65rem)] leading-[1.08] tracking-[-0.05em]">
                  nothing else matters.
                </span>
              </h1>
              <p className="mt-10 max-w-[660px] text-left text-[clamp(1.14rem,1.35vw,1.28rem)] leading-[1.6] text-white/74">
                Farcelis builds AI-driven execution infrastructure that brings order to complexity,
                aligns workflows, and gives companies control before growth turns unstable.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f19a6b,#c75d33)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(199,93,51,0.32)]"
                >
                  Start Building Structure
                </Link>
                <Link
                  href="/services"
                  className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
                >
                  Explore the System
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={110}>
            <div className="hidden min-h-[460px] lg:block" />
          </Reveal>
        </div>
      </section>

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-light pt-0">
          <div className="section-inner">
            <div>
              <p className="eyebrow text-[#9f412c]">Selected environments and engagements</p>
              <h2 className="mt-4 max-w-[16ch] text-[clamp(1.75rem,2.7vw,2.5rem)] font-[550] tracking-[-0.06em] text-slate-950">
                Proud to have worked with strong clients who sharpened our systems as we strengthened theirs.
              </h2>
              <p className="mt-4 max-w-[760px] text-[0.98rem] leading-7 text-slate-600">
                Real operating environments across cybersecurity, operations, intelligence, and execution design.
              </p>
            </div>
            <div className="mt-10">
              <LogoMarquee logos={approvedLogos} dark={false} bare />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell section-shell-light section-bridge-light">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div>
            <p className="eyebrow text-[#9f412c]">Why Farcelis Exists</p>
            <h2 className="section-title mt-5 max-w-[14ch] text-slate-950">
              Most operating problems are not people problems. They are system failures hiding in plain sight.
            </h2>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-600">
                When work is scattered across conversations, tools, and owners, leaders see the problem after it has already moved. Farcelis exists to create the layer where signals become action before execution breaks.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
              <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#fff7ef,#ffffff)] p-6 shadow-[0_20px_46px_rgba(15,23,42,0.08)]">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                  Pressure points
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "Work scatters across conversations, tools, and owners.",
                    "Leadership sees the problem after it has already moved.",
                    "More software increases motion without increasing control.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-slate-200 bg-white px-4 py-4 text-base font-medium leading-7 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_46px_rgba(15,23,42,0.08)]">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                  Outside recognition
                </div>
                <div className="mt-4 text-[1.25rem] font-semibold tracking-[-0.04em] text-slate-950">
                  Featured by Digital Reference among AI &amp; ML consultants making things happen in Tampa.
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Farcelis is showing up in the AI and operational systems conversation with a real signal base, not a placeholder brand story.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell section-shell-dark section-bridge-light">
          <div className="section-inner">
            <div className="mx-auto max-w-[1080px] text-center">
              <p className="eyebrow text-[color:var(--color-accent)]">One Flagship Pillar</p>
              <h2 className="mx-auto mt-5 max-w-[18ch] text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                The Control Layer is one flagship Farcelis implementation, not the whole company.
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-slate-300">
                It is the operating frame Farcelis deploys when a business, team, or environment
                needs one place for intake, routing, accountability, and intervention.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

            <div className="mx-auto mt-10 w-full max-w-[1120px] space-y-5">
              <IntegrationLogoLane />

              <div className="surface-dark rounded-[28px] px-4 py-4">
                <WorkspacePreview compact />
              </div>

              <IntegrationLogoLane reverse />

              <div className="surface-dark rounded-[24px] px-6 py-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Control flow
                </div>
                <div className="mx-auto mt-4 max-w-[900px]">
                  <SystemFlowRail steps={["Input", "Intake", "Route", "Execute", "Track", "Close"]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={190}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">What Farcelis Does</p>
              <h2 className="section-title mt-5 text-slate-950">
                One company model across strategy, systems, execution, and where the work has to hold.
              </h2>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[26px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              {[
                "AI consulting for operating environments that cannot tolerate blind spots.",
                "Workflow architecture that keeps handoffs, reporting, and decision paths intact.",
                "Execution systems that align people, priorities, and action under one structure.",
                "Control Layer deployments when the organization needs a flagship operating frame.",
              ].map((item, index) => (
                <div
                  key={item}
                    className={`grid gap-4 py-5 ${index !== 3 ? "border-b border-slate-200" : ""} lg:grid-cols-[minmax(0,1fr)_280px]`}
                >
                    <div className="text-2xl font-medium tracking-[-0.04em] text-slate-900">{item}</div>
                    <div className="text-sm leading-7 text-slate-500">
                      {index === 0 && "Advisory, strategy, and implementation grounded in how execution really behaves."}
                      {index === 1 && "Operational architecture that keeps routing, handoffs, and reporting from collapsing."}
                      {index === 2 && "The structures, controls, and decision systems that keep teams moving cleanly."}
                      {index === 3 && "Flagship deployments when the business needs a visible command layer."}
                    </div>
                </div>
              ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {companyContexts.map((item, index) => (
                  <div
                    key={item.label}
                    className={`rounded-[22px] border px-5 py-5 ${
                      index === 0 || index === 3
                        ? "border-cyan-200/60 bg-cyan-50/80"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                      {item.label}
                    </div>
                    <div className="mt-3 text-base leading-7 text-slate-600">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={230}>
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

      <Reveal delayMs={270}>
        <section className="section-shell py-10">
          <div className="section-inner">
            <div className="mx-auto max-w-[1200px] text-center">
              <h2 className="mx-auto max-w-[1100px] text-[clamp(1.8rem,3vw,3.05rem)] font-medium leading-[1.12] tracking-[-0.045em] text-white">
                If execution keeps slipping, the next move is not more software. It is a stronger system.
              </h2>
              <p className="mx-auto mt-4 max-w-[1100px] text-[1.02rem] leading-8 text-slate-300">
                Farcelis builds the operating structure that keeps ownership, routing, and execution intact when the pressure increases.
              </p>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
