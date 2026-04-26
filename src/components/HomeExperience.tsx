"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { approvedLogos, services } from "@/lib/site-data";

const capabilities = [
  "AI consulting",
  "Operational systems design",
  "Workflow architecture",
  "Execution environments",
  "Control Layer deployment",
  "Cross-domain operating models",
];

const audiences = [
  {
    label: "Founders and CEOs",
    text: "When growth outruns structure and every answer still depends on chasing updates.",
  },
  {
    label: "Enterprises",
    text: "When workflows sprawl across teams, tools, and reporting lines that no longer hold.",
  },
  {
    label: "Government and education",
    text: "When coordination, accountability, and visibility have to survive under pressure.",
  },
  {
    label: "Personal systems",
    text: "When fragmented priorities turn daily execution into drag instead of forward motion.",
  },
];

const proofSignals = [
  "Executive visibility",
  "Workflow control",
  "Delivery governance",
];

const flowSteps = ["Input", "Intake", "Assignment", "Execution", "Tracking", "Completion"];

export function HomeExperience() {
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    const onScroll = () => {
      const offset = Math.min(window.scrollY * 0.045, 24);
      node.style.setProperty("--visual-offset", `${offset}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#07111d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(115,164,214,0.18),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(214,140,106,0.12),transparent_24%),linear-gradient(180deg,rgba(7,17,29,0.88),rgba(5,11,20,1))]" />

      <section className="relative overflow-hidden pb-22 pt-16 lg:pb-32 lg:pt-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:px-8">
          <Reveal className="lg:pr-8" delayMs={40}>
            <div className="relative">
              <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(196,227,255,0.18),transparent_68%)] blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                Farcelis AI Consulting
              </p>
              <h1 className="mt-6 max-w-[620px] text-balance text-[4rem] font-semibold tracking-[-0.08em] text-white sm:text-[5.1rem] lg:text-[6.9rem] lg:leading-[0.95]">
                Build the system behind execution.
              </h1>
              <p className="mt-6 max-w-[540px] text-lg leading-8 text-slate-300">
                Farcelis designs AI consulting, workflow architecture, and operational systems
                that keep priorities, decisions, and delivery aligned under real pressure.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_18px_36px_rgba(159,65,44,0.28)]"
                >
                  Work With Farcelis
                </Link>
                <Link
                  href="/control-layer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:border-white/24 hover:bg-white/8 hover:shadow-[0_14px_30px_rgba(15,23,42,0.24)]"
                >
                  Explore the Control Layer
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:pl-10" delayMs={140}>
            <div
              ref={visualRef}
              className="relative"
              style={{ transform: "translate3d(0, calc(var(--visual-offset, 0px) * 0.45), 0)" }}
            >
              <div className="pointer-events-none absolute inset-y-8 left-[12%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.24),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute right-[8%] top-[8%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(214,140,106,0.14),transparent_70%)] blur-3xl" />
              <div className="space-y-5">
                {[
                  ["Signal intake", "Requests, updates, and pressure points move into one controlled queue."],
                  ["Control layer", "Routing, ownership, and priority logic hold the operation together."],
                  ["Execution view", "Leadership sees what is moving, what is blocked, and where to intervene."],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className={`system-slab relative ${
                      index === 1 ? "ml-10 max-w-[92%]" : index === 2 ? "ml-20 max-w-[88%]" : "max-w-[84%]"
                    } rounded-[28px] border border-white/10 px-6 py-6 backdrop-blur-md`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d68c6a]">
                      {title}
                    </div>
                    <div className="mt-3 max-w-[420px] text-lg leading-7 text-slate-200">{text}</div>
                    <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.18),rgba(214,140,106,0.5),rgba(255,255,255,0))]" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="relative py-18 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-[980px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                Problem Interruption
              </p>
              <h2 className="mt-5 text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-white sm:text-[3.6rem] lg:text-[4.6rem] lg:leading-[1.02]">
                Most organizations do not fail because they lack people. They fail because the system behind execution never got built.
              </h2>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="relative overflow-hidden bg-[#f2f5f8] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                System Reveal
              </p>
              <h2 className="mt-5 max-w-[560px] text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[3.6rem] lg:text-[4.4rem] lg:leading-[1.02]">
                The Control Layer is the core system that makes execution visible.
              </h2>
              <p className="mt-6 max-w-[520px] text-lg leading-8 text-slate-600">
                It is the flagship Farcelis implementation inside a broader operating model
                built for AI consulting, workflow control, and execution systems.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[30px] border border-slate-200 bg-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:grid-cols-3">
              {[
                ["Capture", "All inputs move into one controlled intake layer."],
                ["Structure", "Ownership, routing, and priorities stay defined."],
                ["Execute", "Teams move with visibility, accountability, and pace."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className={`${index === 1 ? "bg-slate-950 text-white" : "bg-white text-slate-950"} px-6 py-8`}
                >
                  <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${index === 1 ? "text-[#d68c6a]" : "text-slate-500"}`}>
                    {title}
                  </div>
                  <div className={`mt-4 text-xl font-semibold tracking-[-0.03em] ${index === 1 ? "text-white" : "text-slate-950"}`}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[700px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                Visual System Flow
              </p>
              <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-white sm:text-[3.4rem] lg:text-[4rem] lg:leading-[1.04]">
                A controlled path from intake to completion.
              </h2>
            </div>
            <SystemFlowRail steps={flowSteps} />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={180}>
        <section className="relative overflow-hidden bg-[#eef2f6] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                  What Farcelis Does
                </p>
                <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-slate-950 sm:text-[3.4rem] lg:text-[4rem] lg:leading-[1.04]">
                  More than a product. A capability system.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {capabilities.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[24px] border border-slate-200 px-5 py-5 text-lg font-medium leading-7 text-slate-800 ${
                      index % 3 === 1 ? "bg-slate-950 text-white" : "bg-white"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={220}>
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                Who This Is For
              </p>
              <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-white sm:text-[3.4rem] lg:text-[4rem] lg:leading-[1.04]">
                Farcelis works where complexity keeps outrunning structure.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {audiences.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-[28px] border px-6 py-6 ${
                    index === 1
                      ? "border-white/12 bg-white/8"
                      : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d68c6a]">
                    {item.label}
                  </div>
                  <div className="mt-4 text-lg leading-7 text-slate-200">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={260}>
        <section className="relative overflow-hidden bg-[#f3f5f7] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[720px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                Services
              </p>
              <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-slate-950 sm:text-[3.4rem] lg:text-[4rem] lg:leading-[1.04]">
                The service model is built around system design, not disconnected deliverables.
              </h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {services.map((service) => (
                <div key={service.title} className="grid gap-4 py-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {service.title}
                  </h3>
                  <p className="max-w-[720px] text-lg leading-8 text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={300}>
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                  Proof
                </p>
                <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-white sm:text-[3.4rem] lg:text-[4rem] lg:leading-[1.04]">
                  Selected environments and engagements.
                </h2>
                <div className="mt-8 grid gap-3">
                  {proofSignals.map((item) => (
                    <div key={item} className="text-lg font-medium text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <LogoMarquee logos={approvedLogos} dark />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={340}>
        <section className="relative overflow-hidden bg-[#f2f5f8] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                Next Step
              </p>
              <h2 className="mt-5 text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[3.6rem] lg:text-[4.4rem] lg:leading-[1.02]">
                Bring structure to the operation before more complexity compounds it.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_18px_36px_rgba(159,65,44,0.28)]"
              >
                Work With Farcelis
              </Link>
              <Link
                href="/control-layer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:translate-y-[-2px] hover:border-slate-950 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
              >
                See How the System Works
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
