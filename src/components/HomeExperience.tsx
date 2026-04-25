"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

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

const proofLogos = [
  { name: "4Throws", logo: "/logos/approved/4throws.png" },
  { name: "K2 Renew", logo: "/logos/approved/k2-renew.png" },
  { name: "Paragon Cyber Solutions", logo: "/logos/approved/paragon.png" },
  { name: "NexAlign", logo: "/logos/approved/nexalign.jpeg" },
  { name: "CityGov", logo: "/logos/approved/citygov-light.png" },
  { name: "Eagle", logo: "/logos/approved/eagle-light.svg" },
];

export function HomeExperience() {
  const logoTrackRef = useRef<HTMLDivElement | null>(null);
  const heroPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = logoTrackRef.current;
    if (!el) return;

    let raf = 0;
    let paused = false;
    const speed = 0.35;

    const tick = () => {
      if (!paused) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollLeft = el.scrollLeft >= maxScroll - 1 ? 0 : el.scrollLeft + speed;
      }
      raf = window.requestAnimationFrame(tick);
    };

    const onEnter = () => {
      paused = true;
    };

    const onLeave = () => {
      paused = false;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const el = heroPanelRef.current;
    if (!el) return;

    const onScroll = () => {
      const offset = Math.min(window.scrollY * 0.05, 18);
      el.style.setProperty("--panel-parallax", `${offset}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#040a12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_34%,rgba(86,120,156,0.07),transparent_24%),linear-gradient(90deg,rgba(2,6,12,0.46),rgba(9,18,30,0.12)_40%,rgba(3,7,13,0.66)),linear-gradient(180deg,rgba(10,18,30,0.22),rgba(5,10,16,0.18)_22%,rgba(8,16,28,0.26)_70%,rgba(3,7,13,0.42))]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"180\\" height=\\"180\\" viewBox=\\"0 0 180 180\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"1.1\\" numOctaves=\\"2\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"180\\" height=\\"180\\" filter=\\"url(%23n)\\" opacity=\\"1\\"/></svg>")',
        }}
      />

      <Reveal>
        <section className="relative overflow-hidden hero-grid">
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid min-h-[100svh] items-center gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(760px,1.22fr)] lg:gap-6">
              <div className="max-w-[600px]">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[color:#d9a08b]">
                  Farcelis AI Consulting
                </p>
                <div className="pointer-events-none absolute -left-8 top-24 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(196,227,255,0.18),transparent_66%)] blur-3xl" />
                <h1 className="max-w-[600px] text-balance text-[4.9rem] font-semibold tracking-[-0.085em] text-white sm:text-[6.2rem] lg:text-[8.35rem] lg:leading-[1.06]">
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

              <div className="relative lg:-ml-14">
                <div className="hero-glow pointer-events-none absolute left-[-10%] top-8 -z-10 h-[62%] w-[28%] bg-[radial-gradient(circle_at_50%_35%,rgba(196,227,255,0.18),transparent_42%),radial-gradient(circle_at_58%_28%,rgba(217,160,139,0.1),transparent_58%)] blur-3xl" />
                <div
                  ref={heroPanelRef}
                  className="hero-panel hero-panel-float hero-panel-sequence border border-white/12 bg-[#172940]/98 p-6 backdrop-blur-sm sm:p-7 lg:scale-[1.08] lg:p-9"
                >
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
                    <div className="system-ui-tile bg-[#111d2d] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                        Intake State
                      </p>
                      <div className="mt-5 space-y-3 text-base leading-[1.6] text-white/72">
                        <div>Requests captured</div>
                        <div>Ownership defined</div>
                        <div>Priority locked</div>
                      </div>
                    </div>
                    <div className="system-ui-tile bg-[#fbf7f1] p-6 text-slate-950">
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
                    <div className="system-ui-tile bg-[#111d2d] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                        Execution
                      </p>
                      <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                        Teams stay aligned under pressure.
                      </p>
                    </div>
                    <div className="system-ui-tile bg-[#102034] p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                        Visibility
                      </p>
                      <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                        Leadership sees movement in real time.
                      </p>
                    </div>
                    <div className="system-ui-tile bg-[linear-gradient(180deg,#142b41,#102237)] p-6">
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
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,28,44,0.46),rgba(7,13,22,0.18)),radial-gradient(circle_at_78%_18%,rgba(111,152,196,0.08),transparent_28%)]" />
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative border-t border-white/6 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                Hard Truth
              </p>
              <h2 className="mt-5 max-w-[900px] text-balance text-[3.2rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                Most organizations do not fail because of people. They fail
                because their systems cannot carry execution at scale.
              </h2>
              <p className="mt-6 max-w-[620px] text-[1.25rem] leading-[1.6] text-white/62">
                Farcelis is the layer that fixes that.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden bg-[#eef1f5] text-[#0f1724]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#07111d] via-[#6c7f920d] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] via-[#9db3c500] to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(91,121,153,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(233,238,244,0.9))]" />
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative grid gap-10 border-t border-slate-900/8 pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
              <div className="lg:-ml-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                  System Flow
                </p>
                <h2 className="mt-5 max-w-[560px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-[#0f1724] lg:text-[4rem] lg:leading-[1.08]">
                  The Control Layer turns work into one controlled path.
                </h2>
              </div>
              <div className="flow-list grid gap-4 lg:pl-8">
                {flowSteps.map((step, index) => (
                  <div key={step} className="grid gap-4 md:grid-cols-[140px_minmax(0,1fr)] md:items-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                      0{index + 1}
                    </div>
                    <div className="border-l border-slate-300 pl-4 text-[1.25rem] font-semibold tracking-[-0.03em] text-[#0f1724]">
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
        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#eef1f5] via-[#cfd9e208] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#eef1f5] via-[#eef1f500] to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,26,40,0.18),rgba(8,14,24,0.05)),radial-gradient(circle_at_80%_24%,rgba(217,160,139,0.05),transparent_20%)]" />
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative grid gap-10 border-t border-white/6 pt-8 lg:grid-cols-2">
              <div className="lg:pl-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                  Who This Is For
                </p>
                <h2 className="mt-5 max-w-[560px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                  Built for people carrying execution pressure inside complex systems.
                </h2>
              </div>
              <div className="side-list grid gap-5">
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
        <section className="relative overflow-hidden bg-[#f4f6f8] text-[#0f1724]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#08131f] via-[#7d8d9d0a] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08131f] via-[#f4f6f800] to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(217,160,139,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.74),rgba(238,242,246,0.94))]" />
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative border-t border-slate-900/8 pt-8 lg:pl-3">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                Services
              </p>
              <h2 className="mt-5 max-w-[760px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-[#0f1724] lg:text-[4rem] lg:leading-[1.08]">
                Farcelis operates across structure, automation, and execution control.
              </h2>
            </div>
            <div className="mt-10 grid gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="grid gap-4 border-t border-slate-900/8 pt-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                    0{index + 1}
                  </div>
                  <h3 className="text-[1.6rem] font-semibold tracking-[-0.04em] text-[#0f1724]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-[1.6] text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,42,0.42),rgba(5,10,16,0.18)),radial-gradient(circle_at_14%_30%,rgba(98,138,183,0.08),transparent_22%)]" />
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative border-t border-white/6 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:#d9a08b]">
                Selected environments and engagements
              </p>
              <h2 className="mt-5 max-w-[760px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-white lg:text-[4rem] lg:leading-[1.08]">
                Organizations that have worked with Farcelis AI Consulting LLC.
              </h2>
            </div>
            <div ref={logoTrackRef} className="logo-carousel group relative mt-12 overflow-x-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050b14] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050b14] to-transparent" />
              <div className="logo-carousel-track mx-auto flex w-max gap-14">
                {proofLogos.map((partner, index) => (
                  <div
                    key={partner.name}
                    className={`proof-logo-tile flex min-h-36 min-w-[320px] items-center justify-center border border-white/12 px-10 py-9 ${
                      index % 2 === 0 ? "bg-white/[0.03]" : "bg-white/[0.055]"
                    } ${index < 2 ? "proof-logo-primary" : "proof-logo-secondary"}`}
                  >
                    {partner.logo ? (
                      <div
                        className={`relative w-full ${
                          index === 0
                            ? "h-[76px]"
                            : index === 1
                              ? "h-[74px]"
                              : index > 3
                                ? "h-[62px]"
                                : "h-[68px]"
                        }`}
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          sizes="320px"
                          className={`object-contain opacity-100 transition duration-150 ${
                            index < 2 ? "brightness-110 saturate-90" : "brightness-95 saturate-75"
                          }`}
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
        <section className="relative overflow-hidden bg-[#eff2f5] text-[#0f1724]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#09131f] via-[#73869b0a] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#09131f] via-[#eff2f500] to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(236,241,245,0.96)),radial-gradient(circle_at_82%_24%,rgba(217,160,139,0.06),transparent_18%)]" />
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative border-t border-slate-900/8 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                Decision Point
              </p>
              <h2 className="mt-5 max-w-[760px] text-balance text-[3rem] font-semibold tracking-[-0.08em] text-[#0f1724] lg:text-[4rem] lg:leading-[1.08]">
                If you do not control the system, you do not control execution.
              </h2>
              <p className="mt-6 max-w-[620px] text-[1.25rem] leading-[1.6] text-slate-600">
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
