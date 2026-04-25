import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#07101d_52%,#0c1420_100%)] px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-18 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42vw] bg-[radial-gradient(circle_at_50%_30%,rgba(20,74,106,0.28),transparent_56%)] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(390px,0.98fr)] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:#d9a08b]">
            Farcelis AI Consulting
          </p>
          <h1 className="max-w-5xl text-balance text-[4.2rem] font-semibold tracking-[-0.12em] text-white sm:text-[5.25rem] lg:text-[7.5rem] lg:leading-[0.8]">
            Execution breaks long before it scales.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-[1.05rem] leading-8 text-white/72 sm:text-[1.12rem]">
            Farcelis builds the operational systems that keep workflows,
            decisions, and teams aligned under real pressure.
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
            This is not software. It is the structure behind execution.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(126,31,13,0.34)] transition hover:translate-y-[-1px]"
            >
              Work With Farcelis
            </Link>
            <Link
              href="/control-layer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/8"
            >
              Explore the Control Layer
            </Link>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="border border-white/10 bg-black/26 p-4 shadow-[0_40px_120px_rgba(2,6,23,0.48)] backdrop-blur-sm sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  System State
                </p>
                <p className="mt-2 text-sm font-medium text-white/82">
                  Control Layer Environment
                </p>
              </div>
              <div className="text-right text-[11px] uppercase tracking-[0.2em] text-white/40">
                Live Structure
              </div>
            </div>

            <div className="mt-4 grid gap-4">
              <div className="grid gap-4 border border-white/10 bg-slate-950/72 p-4 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/42">
                    Intake Layer
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-white/72">
                    <div>New request routed</div>
                    <div>Ownership assigned</div>
                    <div>Priority state confirmed</div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-4 md:pt-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/42">
                    Decision Layer
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-white/72">
                    <div>Visibility active</div>
                    <div>Escalation path set</div>
                    <div>Execution stable</div>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Control Core
                </p>
                <div className="mt-4 flex items-center gap-3 overflow-x-auto text-sm font-medium text-slate-900">
                  <span className="whitespace-nowrap border border-slate-200 px-3 py-2">
                    Inputs
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="whitespace-nowrap border border-slate-950 bg-slate-950 px-3 py-2 text-white">
                    Control Layer
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="whitespace-nowrap border border-slate-200 px-3 py-2">
                    Execution
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="whitespace-nowrap border border-slate-200 px-3 py-2">
                    Visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
