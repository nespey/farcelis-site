import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-surface relative min-h-[100svh] overflow-hidden bg-transparent px-4 pb-10 pt-20 sm:px-6 lg:px-12 lg:pb-12 lg:pt-24">
      <div className="hero-grid pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px,64px_64px]" />
      <div className="hero-glow pointer-events-none absolute inset-y-0 right-[-8vw] w-[52vw] bg-[radial-gradient(circle_at_50%_30%,rgba(64,142,197,0.22),transparent_58%)] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-8rem)] max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(560px,1fr)] lg:gap-8">
        <div className="max-w-[600px] lg:justify-self-center lg:pr-2">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[color:#d9a08b]">
            Farcelis AI Consulting
          </p>
          <h1 className="max-w-[600px] text-balance text-[3.2rem] font-semibold tracking-[-0.1em] text-white sm:text-[3.7rem] lg:text-[4rem] lg:leading-[1.05]">
            Execution breaks long before it scales.
          </h1>
          <p className="mt-6 max-w-[560px] text-pretty text-[1.25rem] leading-[1.6] text-white/72">
            Farcelis builds the operational systems that keep workflows,
            decisions, and teams aligned under real pressure.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/42">
            This is not software. It is the structure behind execution.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(126,31,13,0.34)] transition-colors duration-150"
            >
              Work With Farcelis
            </Link>
            <Link
              href="/control-layer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150"
            >
              Explore the Control Layer
            </Link>
          </div>
        </div>

        <div className="hero-panel relative lg:justify-self-end">
          <div className="absolute inset-x-2 top-6 -z-10 h-[90%] bg-[radial-gradient(circle_at_50%_28%,rgba(86,197,255,0.28),transparent_42%),radial-gradient(circle_at_64%_74%,rgba(159,65,44,0.22),transparent_30%)] blur-3xl" />
          <div className="grid gap-4 border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.78),rgba(15,23,42,0.68))] p-4 shadow-[0_48px_140px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-16px_40px_rgba(2,6,23,0.28)] backdrop-blur-md sm:p-5 lg:w-[720px] lg:p-6">
            <div className="hero-panel-row flex items-center justify-between border-b border-white/10 pb-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/34">
                System Activation
              </div>
              <div className="hero-progress-track h-[3px] w-28 overflow-hidden rounded-full bg-white/10">
                <div className="hero-progress-bar h-full w-full bg-[linear-gradient(90deg,#d9a08b,#56c5ff)]" />
              </div>
            </div>

            <div className="hero-panel-row grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-slate-950/82 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-150 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_36px_rgba(2,6,23,0.18)] hover:-translate-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/38">
                    Intake State
                  </p>
                <div className="mt-6 space-y-3 text-sm text-white/74">
                  <div>Requests captured</div>
                  <div>Ownership defined</div>
                  <div>Priority locked</div>
                </div>
              </div>
              <div className="bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_18px_36px_rgba(15,23,42,0.12)] hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Control Core
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-900">
                  <span className="border border-slate-200 px-3 py-2">Inputs</span>
                  <span className="text-slate-300">→</span>
                  <span className="hero-control-stage border border-slate-950 bg-slate-950 px-3 py-2 text-white">
                    Control Layer
                  </span>
                  <span className="text-slate-300">→</span>
                  <span className="border border-slate-200 px-3 py-2">Execution</span>
                  <span className="text-slate-300">→</span>
                  <span className="border border-slate-200 px-3 py-2">Visibility</span>
                </div>
              </div>
            </div>

            <div className="hero-panel-row grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              <div className="bg-[#09111d] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_36px_rgba(2,6,23,0.18)] hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/36">
                  Execution
                </p>
                <p className="mt-5 text-lg font-semibold tracking-[-0.04em] text-white">
                  Teams stay aligned under pressure.
                </p>
              </div>
              <div className="bg-[#0d1a2c] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_36px_rgba(2,6,23,0.18)] hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/36">
                  Decisions
                </p>
                <p className="mt-5 text-lg font-semibold tracking-[-0.04em] text-white">
                  Leadership sees movement in real time.
                </p>
              </div>
              <div className="bg-[linear-gradient(135deg,#9f412c,#144a6a)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_36px_rgba(2,6,23,0.2)] hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/54">
                  System State
                </p>
                <p className="mt-5 text-lg font-semibold tracking-[-0.04em] text-white">
                  Structure remains intact while scale increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
