import Link from "next/link";

import { Hero } from "@/components/Hero";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { buildMetadata } from "@/lib/metadata";
import {
  audienceSignals,
  controlLayerIntro,
  flowSteps,
  seo,
  services,
} from "@/lib/site-data";

export const metadata = buildMetadata(seo.home);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#030712,#08111d)] px-4 py-24 sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(20,74,106,0.22),transparent_22%)]" />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/36">
            Hard Truth
          </p>
          <p className="mt-5 max-w-[1100px] text-balance text-[3.5rem] font-semibold tracking-[-0.1em] text-white sm:text-[4.8rem] lg:text-[6.4rem] lg:leading-[0.86]">
            Most organizations do not fail because of people. They fail because
            their systems cannot carry execution at scale.
          </p>
          <p className="mt-7 max-w-xl text-[17px] leading-8 text-white/56">
            Farcelis is the layer that fixes that.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1421,#102237)] px-4 py-24 text-white sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(159,65,44,0.18),transparent_20%),radial-gradient(circle_at_78%_42%,rgba(84,170,224,0.16),transparent_26%)]" />
        <div className="relative grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(500px,1.2fr)] lg:items-center">
          <div className="max-w-2xl lg:pr-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#d9a08b]">
              The Control Layer
            </p>
            <h2 className="mt-4 text-balance text-[3rem] font-semibold tracking-[-0.09em] text-white sm:text-[3.9rem] lg:text-[4.9rem] lg:leading-[0.9]">
              The Farcelis Control Layer is the execution system behind
              operational control.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-8 text-white/62">
              It captures inflow, structures ownership, and keeps active work
              visible before execution starts to drift.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(84,170,224,0.2),transparent_36%),radial-gradient(circle_at_35%_60%,rgba(159,65,44,0.18),transparent_30%)] blur-3xl" />
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 shadow-[0_40px_110px_rgba(2,6,23,0.38)] md:grid-cols-3">
              {controlLayerIntro.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-7 ${
                    index === 1
                      ? "bg-[linear-gradient(180deg,#ffffff,#e7eff7)] text-slate-950"
                      : "bg-[rgba(5,10,18,0.8)] text-white"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      index === 1 ? "text-slate-400" : "text-white/36"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`mt-6 text-xl font-semibold tracking-[-0.04em] ${
                      index === 1 ? "text-slate-950" : "text-white"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-white/10 bg-black/24 px-5 py-5 text-sm leading-7 text-white/58 backdrop-blur-sm">
              One operating environment. One structure for decisions,
              priorities, and movement.
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#06111d,#0f1e31)] px-4 py-24 text-white sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(159,65,44,0.16),transparent_18%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,120px_120px]" />
        <div className="relative">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#d9a08b]">
              System Flow
            </p>
            <h2 className="mt-4 text-balance text-[3rem] font-semibold tracking-[-0.09em] text-white sm:text-[3.8rem] lg:text-[4.7rem] lg:leading-[0.9]">
              Structure work before it starts to break apart.
            </h2>
          </div>

          <div className="mt-14 overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-4 lg:gap-7">
              {flowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 lg:gap-7">
                  <div className="bg-white/6 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-sm">
                    {step}
                  </div>
                  {index < flowSteps.length - 1 ? (
                    <div className="h-px w-10 bg-gradient-to-r from-white/10 via-[color:#d9a08b] to-white/10 lg:w-20" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/62">
            Work enters one structure, moves through one defined path, and stays
            visible while execution is live.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdf9,#eff4fb)] px-4 py-24 sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_24%,rgba(20,74,106,0.08),transparent_20%),radial-gradient(circle_at_82%_72%,rgba(159,65,44,0.1),transparent_18%)]" />
        <div className="relative">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#9f412c]">
              Who This Is For
            </p>
            <h2 className="mt-4 text-balance text-[3rem] font-semibold tracking-[-0.09em] text-slate-950 sm:text-[3.8rem] lg:text-[4.7rem] lg:leading-[0.9]">
              Built for people carrying execution pressure inside complex systems.
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-slate-300 lg:grid-cols-2">
            {audienceSignals.map((item) => (
              <div key={item.title} className="bg-transparent px-0 py-0">
                <div className="bg-[color:var(--color-paper)] px-0 py-8 lg:px-10">
                  <h3 className="max-w-md text-[1.8rem] font-semibold tracking-[-0.06em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[16px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-transparent px-0 py-0">
              <div className="bg-[color:var(--color-paper)] px-0 py-8 lg:px-10">
                <h3 className="max-w-md text-[1.8rem] font-semibold tracking-[-0.06em] text-slate-950">
                  For overloaded personal systems
                </h3>
                <p className="mt-4 max-w-md text-[16px] leading-7 text-slate-600">
                  If fragmented tools and disconnected priorities are taking over
                  your personal operating environment, this is for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#08111d,#0d1726)] px-4 py-24 text-white sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(20,74,106,0.22),transparent_20%),radial-gradient(circle_at_18%_78%,rgba(159,65,44,0.14),transparent_20%)]" />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
            Services
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-[3rem] font-semibold tracking-[-0.09em] text-white sm:text-[3.8rem] lg:text-[4.7rem] lg:leading-[0.9]">
            Farcelis operates across strategy, structure, automation, and
            execution control.
          </h2>

          <div className="mt-12 border-t border-white/10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid gap-4 border-b border-white/10 py-10 lg:grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/36">
                  0{index + 1}
                </div>
                <h3 className="max-w-xl text-[2rem] font-semibold tracking-[-0.06em] text-white">
                  {service.title}
                </h3>
                <p className="max-w-xl text-[16px] leading-7 text-white/62">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020617,#09111d)] px-4 py-24 sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(159,65,44,0.18),transparent_18%),radial-gradient(circle_at_85%_74%,rgba(20,74,106,0.22),transparent_22%)]" />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
            Proof
          </p>
          <h2 className="mt-4 max-w-5xl text-balance text-[3rem] font-semibold tracking-[-0.09em] text-white sm:text-[3.8rem] lg:text-[4.8rem] lg:leading-[0.9]">
            Organizations that have worked with Farcelis AI Consulting LLC.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/56">
            Supported across operations, automation, and system design.
          </p>

          <div className="mt-12">
            <PartnerLogoGrid />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1421,#102237)] px-4 py-24 text-white sm:px-6 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(159,65,44,0.18),transparent_18%),radial-gradient(circle_at_78%_68%,rgba(20,74,106,0.22),transparent_20%)]" />
        <div className="relative max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#d9a08b]">
            Decision Point
          </p>
          <h2 className="mt-4 text-balance text-[3.2rem] font-semibold tracking-[-0.1em] text-white sm:text-[4rem] lg:text-[5rem] lg:leading-[0.88]">
            If you do not control the system, you do not control execution.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/62">
            Work with Farcelis to put real structure behind the way your
            operation runs.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(126,31,13,0.28)] transition hover:translate-y-[-1px]"
            >
              Work With Farcelis
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/8"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
