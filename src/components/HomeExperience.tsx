"use client";

import Link from "next/link";

import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos, businessSignals, services } from "@/lib/site-data";

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
      <section className="section-shell section-shell-dark mesh-gold overflow-hidden pt-18 lg:min-h-[92svh] lg:pt-22">
        <div className="pointer-events-none absolute inset-0 subtle-grid" />
        <div className="pointer-events-none absolute left-[8%] top-[14%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,214,160,0.16),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(106,181,214,0.14),transparent_72%)] blur-3xl" />
        <div className="section-inner relative grid gap-10 lg:min-h-[76svh] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal delayMs={30}>
            <div className="max-w-[560px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Farcelis AI Consulting LLC</p>
              <h1 className="display-hero mt-6 text-white">
                Farcelis structures execution before complexity takes control.
              </h1>
              <p className="lede mt-5 max-w-[540px]">
                AI consulting, workflow architecture, execution systems, and the flagship Control
                Layer all sit inside one operating model built to stabilize complexity before it compounds.
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
              <div className="mt-7 flex flex-wrap gap-2.5 text-[0.84rem] text-slate-300">
                {businessSignals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 font-medium"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={110}>
            <div className="relative hidden min-h-[460px] lg:block">
              <div className="absolute inset-[10%_6%_12%_14%] rounded-[40px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(97,192,215,0.08),transparent_44%)] shadow-[0_28px_80px_rgba(3,8,16,0.28)]" />
              <div className="absolute left-[18%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,214,160,0.22),transparent_68%)] blur-3xl" />
              <div className="absolute right-[18%] top-[24%] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(106,181,214,0.22),transparent_72%)] blur-3xl" />
              <div className="absolute bottom-[18%] left-[22%] h-px w-[42%] bg-gradient-to-r from-transparent via-[rgba(255,214,160,0.55)] to-transparent" />
              <div className="absolute bottom-[28%] right-[16%] h-px w-[36%] bg-gradient-to-r from-transparent via-[rgba(106,181,214,0.55)] to-transparent" />
              <div className="absolute left-[24%] top-[22%] h-2.5 w-2.5 rounded-full bg-[rgba(255,214,160,0.9)] shadow-[0_0_20px_rgba(255,214,160,0.45)]" />
              <div className="absolute left-[36%] top-[44%] h-2 w-2 rounded-full bg-[rgba(106,181,214,0.9)] shadow-[0_0_18px_rgba(106,181,214,0.4)]" />
              <div className="absolute right-[26%] top-[32%] h-2.5 w-2.5 rounded-full bg-[rgba(106,181,214,0.9)] shadow-[0_0_20px_rgba(106,181,214,0.45)]" />
              <div className="absolute right-[34%] bottom-[22%] h-2 w-2 rounded-full bg-[rgba(255,214,160,0.9)] shadow-[0_0_18px_rgba(255,214,160,0.4)]" />
            </div>
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
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {businessSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold tracking-[0.04em] text-slate-700"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell section-shell-dark section-bridge-light">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1.42fr)] lg:items-center">
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

            <div className="space-y-5">
              <IntegrationLogoLane />

              <div className="surface-dark rounded-[28px] px-4 py-4">
                <WorkspacePreview compact />
              </div>

              <IntegrationLogoLane reverse />

              <div className="surface-dark rounded-[24px] px-6 py-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Control flow
                </div>
                <div className="mt-5">
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
