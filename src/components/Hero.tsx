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
    <div className="rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,245,239,0.92))] p-5 shadow-[0_28px_70px_rgba(15,23,42,0.10)] sm:p-6">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Farcelis Control Layer Interface Preview
      </p>
      <div className="grid gap-3">
        {nodes.map((node, index) => (
          <div key={node.title} className="grid gap-3">
            <div
              className={`rounded-2xl border px-4 py-4 ${
                node.accent
                  ? "border-slate-950 bg-slate-950 text-white shadow-[0_18px_48px_rgba(15,23,42,0.24)]"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <div className="text-sm font-semibold tracking-[0.03em]">{node.title}</div>
              <div
                className={`mt-1 text-sm leading-6 ${
                  node.accent ? "text-slate-100/86" : "text-slate-600"
                }`}
              >
                {node.body}
              </div>
            </div>
            {index < nodes.length - 1 ? (
              <div className="mx-auto h-6 w-px bg-gradient-to-b from-slate-300 to-transparent" />
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
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
        <div className="text-sm font-semibold text-slate-900">Intake Queue</div>
        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <div>Client Request — Pending</div>
          <div>Internal Task — Needs Review</div>
          <div>Leadership Note — Routed</div>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
        <div className="text-sm font-semibold text-slate-900">Workflow Engine</div>
        <div className="mt-3 text-sm leading-7 text-slate-600">
          Intake → Structuring → Assignment → Execution
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,rgba(20,74,106,0.06),rgba(159,65,44,0.08))] p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
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
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(243,238,230,0.98))] px-6 py-8 shadow-[0_36px_100px_rgba(15,23,42,0.14)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,0.98fr)] lg:items-center lg:px-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
            Farcelis AI Consulting
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-5xl lg:text-[4.5rem] lg:leading-[0.92]">
            This is how serious operators run modern execution.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
            Farcelis defines the systems behind visibility, workflow control,
            and decision precision. The Control Layer stands as the flagship
            system inside a broader execution model built for operators under
            real pressure.
          </p>

          <ul className="mt-8 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-2">
            {[
              "Operational systems built for real execution pressure",
              "Workflow architecture with command-level visibility",
              "Flagship Control Layer deployment for critical environments",
              "Decision systems that keep leadership anchored in reality",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_14px_32px_rgba(15,23,42,0.07)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(126,31,13,0.28)] transition hover:translate-y-[-1px]"
            >
              Work With Farcelis
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
            >
              Schedule a Strategy Call
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="/control-layer"
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 transition hover:text-slate-950"
            >
              Explore the Control Layer
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-10 -z-10 h-72 rounded-full bg-[radial-gradient(circle,rgba(20,74,106,0.18),transparent_65%)] blur-3xl" />
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
