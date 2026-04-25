import Link from "next/link";

function HeroDiagram() {
  const nodes = [
    {
      title: "Inputs",
      body: "Tasks, requests, data, communication",
    },
    {
      title: "Intake Layer",
      body: "All work captured and organized",
    },
    {
      title: "Control Layer",
      body: "Central structure and visibility",
      accent: true,
    },
    {
      title: "Execution",
      body: "Teams, workflows, actions",
    },
    {
      title: "Outcomes",
      body: "Completed work, decisions, results",
    },
  ];

  return (
    <div className="rounded-[18px] border border-white/10 bg-slate-900 p-5 shadow-[0_28px_70px_rgba(2,6,23,0.32)] sm:p-6">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Farcelis Control Layer Interface Preview
      </p>
      <div className="grid gap-3">
        {nodes.map((node, index) => (
          <div key={node.title} className="grid gap-3">
            <div
              className={`rounded-2xl border px-4 py-4 ${
                node.accent
                  ? "border-white bg-white text-slate-950 shadow-[0_18px_48px_rgba(15,23,42,0.24)]"
                  : "border-white/10 bg-slate-950 text-white"
              }`}
            >
              <div className="text-sm font-semibold tracking-[0.03em]">{node.title}</div>
              <div
                className={`mt-1 text-sm leading-6 ${
                  node.accent ? "text-slate-700" : "text-white/64"
                }`}
              >
                {node.body}
              </div>
            </div>
            {index < nodes.length - 1 ? (
              <div className="mx-auto h-6 w-px bg-gradient-to-b from-white/30 to-transparent" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroCards() {
  return (
    <div className="grid gap-4">
      <div className="rounded-[18px] border border-white/10 bg-slate-900 p-5 shadow-[0_14px_36px_rgba(2,6,23,0.28)]">
        <div className="text-sm font-semibold text-white">Intake Queue</div>
        <div className="mt-3 space-y-2 text-sm text-white/64">
          <div>Client Request — Pending</div>
          <div>Internal Task — Needs Review</div>
          <div>Leadership Note — Routed</div>
        </div>
      </div>
      <div className="rounded-[18px] border border-white/10 bg-slate-900 p-5 shadow-[0_14px_36px_rgba(2,6,23,0.28)]">
        <div className="text-sm font-semibold text-white">Workflow Engine</div>
        <div className="mt-3 text-sm leading-7 text-white/64">
          Intake → Structuring → Assignment → Execution
        </div>
      </div>
      <div className="rounded-[18px] border border-white/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
        <div className="text-sm font-semibold text-slate-900">System Tracking</div>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-700">
          <div>Active Workflows: 12</div>
          <div>Completed Tasks: 48</div>
          <div>Pending Items: 7</div>
          <div>Status: Operational</div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#020617,#0f172a)] px-6 py-10 shadow-[0_52px_140px_rgba(2,6,23,0.5)] sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,0.98fr)] lg:items-center lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#d9a08b]">
            Farcelis AI Consulting
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-[5.2rem] lg:leading-[0.9]">
            Execution breaks long before it scales.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/72">
            Farcelis builds the operational systems that keep workflows,
            decisions, and teams aligned under real pressure.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-white/48">
            This is not software. It is the structure behind execution.
          </p>

          <ul className="mt-8 grid gap-3 text-sm font-medium text-white/88 sm:grid-cols-2">
            {[
              "Operational systems built for real execution pressure",
              "Workflow architecture with command-level visibility",
              "Flagship Control Layer deployment for critical environments",
              "Decision systems that keep leadership anchored in reality",
            ].map((item) => (
              <li
                key={item}
                className="border-l border-white/16 pl-4"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(126,31,13,0.32)] transition hover:translate-y-[-1px]"
            >
              Work With Farcelis
            </Link>
            <Link
              href="/control-layer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/8"
            >
              See How the System Works
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-10 -z-10 h-72 rounded-full bg-[radial-gradient(circle,rgba(20,74,106,0.32),transparent_65%)] blur-3xl" />
          <div className="grid gap-4 lg:hidden">
            <HeroCards />
          </div>
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-5">
            <HeroDiagram />
            <HeroCards />
          </div>
        </div>
      </div>
    </section>
  );
}
