"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { Reveal } from "@/components/Reveal";
import { partners, services } from "@/lib/site-data";

const flowSteps = [
  "Input",
  "Intake",
  "Assignment",
  "Execution",
  "Tracking",
  "Completion",
];

const audienceItems = [
  {
    title: "Founders & CEOs",
    body: "For leaders scaling faster than their operating structure can support.",
  },
  {
    title: "Enterprises",
    body: "For organizations losing execution control across teams, systems, and priorities.",
  },
  {
    title: "Government",
    body: "For environments where coordination, visibility, and accountability cannot break.",
  },
  {
    title: "Personal Systems",
    body: "For overloaded personal operating environments where fragmentation takes over.",
  },
];

export function HomeExperience() {
  const marqueePartners = useMemo(() => {
    const visible = partners.slice(0, 3);
    return [...visible, ...visible];
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#050b14] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <Reveal>
        <section className="relative overflow-hidden hero-grid">
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid min-h-[100svh] items-center gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(640px,1.14fr)] lg:gap-10">
              <div className="max-w-[600px]">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[color:#d9a08b]">
                  Farcelis AI Consulting
                </p>
                <h1 className="max-w-[600px] text-balance text-[3.5rem] font-semibold tracking-[-0.08em] text-white sm:text-[4.25rem] lg:text-[5rem] lg:leading-[1.02]">
                  Execution breaks long before it scales.
                </h1>
                <p className="mt-5 max-w-[560px] text-[1.25rem] leading-[1.6] text-white/76">
                  Farcelis builds the operational systems that keep workflows,
                  decisions, and teams aligned under real pressure.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:#9f412c] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[color:#7e1f0d]"
                  >
                    Work With Farcelis
                  </Link>
                  <Link
                    href="/control-layer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-white/8"
                  >
                    Explore the Control Layer
                  </Link>
                </div>
              </div>

              <div className="relative lg:pl-2">
                <div className="hero-glow pointer-events-none absolute inset-x-4 top-8 -z-10 h-[84%] bg-[radial-gradient(circle_at_50%_35%,rgba(217,160,139,0.22),transparent_50%)] blur-3xl" />
                <div className="hero-panel hero-panel-sequence border border-white/10 bg-[#08111d]/94 p-5 shadow-[0_28px_90px_rgba(2,6,23,0.42)] backdrop-blur-sm sm:p-6 lg:p-8">
                  <div className="hero-panel-row flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                        Farcelis Control Layer
                      </p>
                      <p className="mt-2 text-base leading-[1.6] text-white/68">
                        Operational System Interface
                      </p>
                    </div>
                    <div className="hero-progress-track h-[3px] w-28 overflow-hidden rounded-full bg-white/10">
                      <div className="hero-progress-bar h-full w-full bg-[color:#d9a08b]" />
                    </div>
                  </div>

                  <div className="hero-panel-row mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="system-ui-tile bg-[#09111d] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                        Intake State
                      </p>
                      <div className="mt-5 space-y-3 text-base leading-[1.6] text-white/72">
                        <div>Requests captured</div>
                        <div>Ownership defined</div>
                        <div>Priority locked</div>
                      </div>
                    </div>
                    <div className="system-ui-tile bg-white p-6 text-slate-950">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Control Core
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-3 text-base font-medium leading-[1.6]">
                        <span className="border border-slate-200 px-3 py-2">Inputs</span>
                        <span className="text-slate-300">→</span>
                        <span className="hero-control-stage border border-slate-950 bg-slate-950 px-3 py-2 text-white">
                          Control Layer
                        </span>
                        <span className="text-slate-300">→</span>
                        <span className="border border-slate-200 px-3 py-2">Execution</span>
                      </div>
                    </div>
                  </div>

                  <div className="hero-panel-row mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
                    <div className="system-ui-tile bg-[#09111d] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                        Execution
                      </p>
                      <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                        Teams stay aligned under pressure.
                      </p>
                    </div>
                    <div className="system-ui-tile bg-[#0d1a2c] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                        Visibility
                      </p>
                      <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                        Leadership sees movement in real time.
                      </p>
                    </div>
                    <div className="system-ui-tile bg-[linear-gradient(180deg,#12273a,#102237)] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/48">
                        System State
                      </p>
                      <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                        Structure remains intact while scale increases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
              Hard Truth
            </p>
            <h2 className="mt-5 max-w-[900px] text-balance text-[3.2rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
              Most organizations do not fail because of people. They fail
              because their systems cannot carry execution at scale.
            </h2>
            <p className="mt-6 max-w-[620px] text-[1.25rem] leading-[1.6] text-white/68">
              Farcelis is the layer that fixes that.
            </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                  System Flow
                </p>
                <h2 className="mt-5 max-w-[560px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                  The Control Layer turns work into one controlled path.
                </h2>
              </div>
              <div className="grid gap-4">
                {flowSteps.map((step, index) => (
                  <div key={step} className="grid gap-4 md:grid-cols-[140px_minmax(0,1fr)] md:items-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/36">
                      0{index + 1}
                    </div>
                    <div className="border-l border-white/12 pl-4 text-[1.25rem] font-semibold tracking-[-0.03em] text-white">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                  Who This Is For
                </p>
                <h2 className="mt-5 max-w-[560px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                  Built for people carrying execution pressure inside complex systems.
                </h2>
              </div>
              <div className="grid gap-5">
                {audienceItems.map((item) => (
                  <div key={item.title} className="border-l border-white/12 pl-5">
                    <h3 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-[1.6] text-white/68">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                Services
              </p>
              <h2 className="mt-5 max-w-[760px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                Farcelis operates across structure, automation, and execution control.
              </h2>
            </div>
            <div className="mt-10 grid gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="grid gap-4 border-t border-white/10 pt-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/36">
                    0{index + 1}
                  </div>
                  <h3 className="text-[1.6rem] font-semibold tracking-[-0.04em] text-white">
                    {service.title}
                  </h3>
                  <p className="text-base leading-[1.6] text-white/68">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                Selected environments and engagements
              </p>
              <h2 className="mt-5 max-w-[760px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                Organizations that have worked with Farcelis AI Consulting LLC.
              </h2>
            </div>
            <div className="logo-carousel group relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050b14] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050b14] to-transparent" />
              <div className="logo-carousel-track flex w-max gap-8 group-hover:[animation-play-state:paused]">
                {marqueePartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="proof-logo-tile flex min-h-32 min-w-[300px] items-center justify-center border border-white/10 bg-black/20 px-10 py-8"
                  >
                    {partner.logo ? (
                      <div className="relative h-16 w-full">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          sizes="300px"
                          className="object-contain opacity-100 grayscale transition duration-150 hover:grayscale-0"
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 max-w-[720px] text-base leading-[1.6] text-white/62">
              Execution systems deployed across cybersecurity, operations, and AI environments
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                Decision Point
              </p>
              <h2 className="mt-5 max-w-[760px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                If you do not control the system, you do not control execution.
              </h2>
              <p className="mt-6 max-w-[620px] text-[1.25rem] leading-[1.6] text-white/68">
                Work with Farcelis to put a real operational structure behind the way your organization runs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:#9f412c] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[color:#7e1f0d]"
                >
                  Work With Farcelis
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/8"
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
