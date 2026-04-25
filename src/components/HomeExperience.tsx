"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { partners } from "@/lib/site-data";

type Stage = {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  accent?: string;
};

const stages: Stage[] = [
  {
    key: "entry",
    eyebrow: "System Entry",
    title: "Execution breaks long before it scales.",
    body: "Farcelis builds the operational systems that keep workflows, decisions, and teams aligned under real pressure.",
    accent: "This is not software. It is the structure behind execution.",
  },
  {
    key: "failure",
    eyebrow: "Failure State",
    title: "Most organizations fail when their systems stop carrying execution.",
    body: "Work fragments. Ownership blurs. Leadership reacts late. The pressure shows up long before anyone calls it a system problem.",
  },
  {
    key: "control-layer",
    eyebrow: "Control Layer",
    title: "The Control Layer brings inflow, ownership, and visibility into one operational frame.",
    body: "The system captures work, structures responsibility, and keeps movement visible while execution is live.",
  },
  {
    key: "flow",
    eyebrow: "System Flow",
    title: "Input becomes execution through one controlled path.",
    body: "Intake, assignment, execution, and visibility move inside one structure instead of scattering across disconnected tools and teams.",
  },
  {
    key: "audience",
    eyebrow: "Who It Serves",
    title: "Built for operators carrying complexity.",
    body: "Founders, enterprises, government teams, and overloaded personal systems all break the same way when structure disappears.",
  },
  {
    key: "services",
    eyebrow: "Operating Range",
    title: "Farcelis operates across system design, workflow control, automation, and execution architecture.",
    body: "The platform experience stays the same: establish structure, activate ownership, and hold execution under pressure.",
  },
  {
    key: "proof",
    eyebrow: "Trusted Context",
    title: "Organizations that have worked with Farcelis AI Consulting LLC.",
    body: "Supported across operations, automation, and system design in environments where visibility and follow-through matter.",
  },
  {
    key: "decision",
    eyebrow: "Decision Point",
    title: "If you do not control the system, you do not control execution.",
    body: "Work with Farcelis to put a real operational structure behind the way your organization runs.",
  },
];

const flowSteps = ["Input", "Intake", "Assignment", "Execution", "Tracking", "Completion"];

const audienceItems = [
  "Founders scaling faster than structure",
  "Enterprises losing control across teams",
  "Government environments under pressure",
  "Personal systems overloaded by fragmentation",
];

const serviceItems = [
  "Operational system design",
  "Workflow control environments",
  "Automation architecture",
  "Execution visibility layers",
];

export function HomeExperience() {
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const nodes = stageRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = Number(visible.target.getAttribute("data-stage-index"));
        if (!Number.isNaN(index)) {
          setActiveStage(index);
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -18% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const loopedPartners = useMemo(() => {
    const visible = partners.slice(0, 3);
    return [...visible, ...visible];
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_80%_22%,rgba(20,74,106,0.24),transparent_20%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-15vw] w-[42vw] bg-[radial-gradient(circle_at_50%_36%,rgba(84,170,224,0.18),transparent_56%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-[10%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(159,65,44,0.18),transparent_64%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] lg:grid lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-10">
        <div className="px-5 pb-[120px] pt-20 sm:px-8 lg:min-h-screen lg:px-0 lg:pb-[120px] lg:pt-24">
          <div className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
            <div className="system-viewport border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.76),rgba(15,23,42,0.66))] p-4 shadow-[0_40px_140px_rgba(2,6,23,0.52)] backdrop-blur-md sm:p-5 lg:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/36">
                    Farcelis Control Layer
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/72">
                    Operational System Interface
                  </p>
                </div>
                <div className="system-ping flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/38">
                  <span className="h-2 w-2 rounded-full bg-[color:#d9a08b]" />
                  Live
                </div>
              </div>

              <div
                className={`system-core mt-4 transition-all duration-700 ${
                  activeStage === 0 ? "lg:scale-[0.92] opacity-88" : "lg:scale-100 opacity-100"
                }`}
              >
                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="bg-[#08111d] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/34">
                      Intake State
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-white/72">
                      <div className={activeStage >= 1 ? "system-live-line" : ""}>Requests captured</div>
                      <div className={activeStage >= 2 ? "system-live-line" : ""}>Ownership defined</div>
                      <div className={activeStage >= 3 ? "system-live-line" : ""}>Priority locked</div>
                    </div>
                  </div>

                  <div className="bg-white p-5 text-slate-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      Control Core
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium">
                      {flowSteps.slice(0, 4).map((step, index) => (
                        <div key={step} className="flex items-center gap-3">
                          <span
                            className={`border px-3 py-2 transition-all duration-500 ${
                              index === Math.min(activeStage, 3)
                                ? "border-slate-950 bg-slate-950 text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)]"
                                : "border-slate-200 bg-white text-slate-900"
                            }`}
                          >
                            {step}
                          </span>
                          {index < 3 ? <span className="text-slate-300">→</span> : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
                  <div className="bg-[#09111d] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/34">
                      Execution
                    </p>
                    <p className={`mt-5 text-lg font-semibold tracking-[-0.04em] text-white transition duration-500 ${activeStage >= 3 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"}`}>
                      Teams stay aligned under pressure.
                    </p>
                  </div>
                  <div className="bg-[#0d1a2c] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/34">
                      Visibility
                    </p>
                    <p className={`mt-5 text-lg font-semibold tracking-[-0.04em] text-white transition duration-500 ${activeStage >= 4 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"}`}>
                      Leadership sees movement in real time.
                    </p>
                  </div>
                  <div className="bg-[linear-gradient(135deg,#9f412c,#144a6a)] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/54">
                      System State
                    </p>
                    <p className={`mt-5 text-lg font-semibold tracking-[-0.04em] text-white transition duration-500 ${activeStage >= 5 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-78"}`}>
                      Structure remains intact while scale increases.
                    </p>
                  </div>
                </div>
              </div>

              {activeStage === 6 ? (
                <div className="mt-5 border border-white/10 bg-[#06101b] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/34">
                    Trusted Context
                  </p>
                  <div className="logo-carousel group relative mt-4 overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#06101b] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#06101b] to-transparent" />
                    <div className="logo-carousel-track flex w-max gap-5 group-hover:[animation-play-state:paused]">
                      {loopedPartners.map((partner, index) => (
                        <div
                          key={`${partner.name}-${index}`}
                          className="logo-tile group/logo flex min-h-24 min-w-[220px] items-center justify-center border border-white/10 bg-black/20 px-6 py-6"
                        >
                          {partner.logo ? (
                            <div className="relative h-12 w-full">
                              <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                sizes="220px"
                                className="object-contain grayscale contrast-125 opacity-82 transition duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
                              />
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="relative px-5 pb-[120px] sm:px-8 lg:px-0">
          {stages.map((stage, index) => (
            <div
              key={stage.key}
              ref={(node) => {
                stageRefs.current[index] = node;
              }}
              data-stage-index={index}
              className="flex min-h-[88svh] items-center border-b border-white/8 py-[120px]"
            >
              <div className={`w-full max-w-[560px] transition-all duration-700 ${
                activeStage === index ? "opacity-100 translate-y-0" : "opacity-35 translate-y-6"
              }`}>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:#d9a08b]">
                  {stage.eyebrow}
                </p>
                <h1
                  className={`mt-5 text-balance font-semibold tracking-[-0.1em] text-white ${
                    index === 0
                      ? "text-[3.8rem] sm:text-[5rem] lg:text-[6.8rem] lg:leading-[0.82]"
                      : "text-[3rem] sm:text-[4rem] lg:text-[5rem] lg:leading-[0.88]"
                  }`}
                >
                  {stage.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
                  {stage.body}
                </p>

                {stage.accent ? (
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/40">
                    {stage.accent}
                  </p>
                ) : null}

                {stage.key === "entry" ? (
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="interactive-button inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(126,31,13,0.34)] transition"
                    >
                      Work With Farcelis
                    </Link>
                    <Link
                      href="/control-layer"
                      className="interactive-button inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition"
                    >
                      Explore the Control Layer
                    </Link>
                  </div>
                ) : null}

                {stage.key === "audience" ? (
                  <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {audienceItems.map((item) => (
                      <div key={item} className="border-l border-white/14 pl-4 text-base leading-7 text-white/72">
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}

                {stage.key === "services" ? (
                  <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {serviceItems.map((item, serviceIndex) => (
                      <div
                        key={item}
                        className="grid gap-2 border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-4"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/34">
                          0{serviceIndex + 1}
                        </span>
                        <span className="text-xl font-semibold tracking-[-0.04em] text-white">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {stage.key === "decision" ? (
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="interactive-button inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(126,31,13,0.28)] transition"
                    >
                      Work With Farcelis
                    </Link>
                    <Link
                      href="/contact"
                      className="interactive-button inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition"
                    >
                      Schedule a Strategy Call
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
