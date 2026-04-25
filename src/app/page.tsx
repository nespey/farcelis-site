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

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/36">
            Hard Truth
          </p>
          <p className="mt-5 max-w-5xl text-balance text-[3.2rem] font-semibold tracking-[-0.09em] text-white sm:text-[4.3rem] lg:text-[5.6rem] lg:leading-[0.9]">
            Most organizations do not fail because of people. They fail because
            their systems cannot carry execution at scale.
          </p>
          <p className="mt-7 max-w-2xl text-[17px] leading-8 text-white/58">
            Farcelis is the layer that fixes that.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--color-paper)] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#9f412c]">
              The Control Layer
            </p>
            <h2 className="mt-4 text-balance text-[2.8rem] font-semibold tracking-[-0.08em] text-slate-950 sm:text-[3.6rem] lg:text-[4.4rem] lg:leading-[0.92]">
              The Farcelis Control Layer is the execution system behind
              operational control.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-600">
              It captures inflow, structures ownership, and keeps active work
              visible before execution starts to drift.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <div className="grid gap-px overflow-hidden bg-slate-200 md:grid-cols-3">
              {controlLayerIntro.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-5 ${
                    index === 1 ? "bg-slate-950 text-white" : "bg-white text-slate-950"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      index === 1 ? "text-white/48" : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`mt-6 text-xl font-semibold tracking-[-0.04em] ${
                      index === 1 ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
              One operating environment. One structure for decisions,
              priorities, and movement.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#9f412c]">
              System Flow
            </p>
            <h2 className="mt-4 text-balance text-[2.5rem] font-semibold tracking-[-0.08em] text-slate-950 sm:text-[3.1rem] lg:text-[3.8rem] lg:leading-[0.94]">
              Structure work before it starts to break apart.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-3 lg:gap-5">
              {flowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 lg:gap-5">
                  <div className="border border-slate-300 px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700">
                    {step}
                  </div>
                  {index < flowSteps.length - 1 ? (
                    <div className="h-px w-8 bg-slate-300 lg:w-14" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600">
            Work enters one structure, moves through one defined path, and stays
            visible while execution is live.
          </p>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#06111d,#0a1726)] px-4 py-22 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
            Who This Is For
          </p>
          <div className="mt-8 grid gap-px bg-white/10 lg:grid-cols-3">
            {audienceSignals.map((item) => (
              <div key={item.title} className="bg-transparent px-0 py-6 lg:px-6">
                <h3 className="max-w-sm text-[1.6rem] font-semibold tracking-[-0.05em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-[16px] leading-7 text-white/68">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="bg-transparent px-0 py-6 lg:px-6">
              <h3 className="max-w-sm text-[1.6rem] font-semibold tracking-[-0.05em] text-white">
                For overloaded personal systems
              </h3>
              <p className="mt-4 max-w-sm text-[16px] leading-7 text-white/68">
                If fragmented tools and disconnected priorities are taking over
                your personal operating environment, this is for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-paper)] px-4 py-22 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#9f412c]">
            Services
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-[2.5rem] font-semibold tracking-[-0.08em] text-slate-950 sm:text-[3.2rem] lg:text-[4rem] lg:leading-[0.92]">
            Farcelis operates across strategy, structure, automation, and
            execution control.
          </h2>

          <div className="mt-12 border-t border-slate-300">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid gap-4 border-b border-slate-300 py-8 lg:grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-8"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  0{index + 1}
                </div>
                <h3 className="max-w-xl text-[1.7rem] font-semibold tracking-[-0.05em] text-slate-950">
                  {service.title}
                </h3>
                <p className="max-w-xl text-[16px] leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-22 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
            Proof
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-[2.6rem] font-semibold tracking-[-0.08em] text-white sm:text-[3.4rem] lg:text-[4.2rem] lg:leading-[0.92]">
            Organizations that have worked with Farcelis AI Consulting LLC.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/58">
            Supported across operations, automation, and system design.
          </p>

          <div className="mt-12">
            <PartnerLogoGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[color:var(--color-paper)] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:#9f412c]">
            Decision Point
          </p>
          <h2 className="mt-4 text-balance text-[2.8rem] font-semibold tracking-[-0.09em] text-slate-950 sm:text-[3.6rem] lg:text-[4.6rem] lg:leading-[0.9]">
            If you do not control the system, you do not control execution.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-600">
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
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
