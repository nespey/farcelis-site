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
    <div className="border border-white/10 bg-black/30 p-5 shadow-[0_28px_70px_rgba(2,6,23,0.32)] sm:p-6">
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
                  : "border-white/10 bg-slate-950/70 text-white"
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
      <div className="border border-white/10 bg-slate-950/70 p-5 shadow-[0_14px_36px_rgba(2,6,23,0.28)]">
        <div className="text-sm font-semibold text-white">Workflow State</div>
        <div className="mt-3 space-y-2 text-sm text-white/64">
          <div>Inputs captured</div>
          <div>Ownership assigned</div>
          <div>Execution aligned</div>
        </div>
      </div>
      <div className="border border-white/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
        <div className="text-sm font-semibold text-slate-900">Decision Alignment</div>
        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <div>Priority structure active</div>
          <div>Leadership visibility live</div>
          <div>System state stable</div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#08111f_56%,#0b1421_100%)] px-4 pb-24 pt-16 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--color-cream)] to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#d9a08b]">
            Farcelis AI Consulting
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.09em] text-white sm:text-6xl lg:text-[6rem] lg:leading-[0.88]">
            Execution breaks long before it scales.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-8 text-white/72">
            Farcelis builds the operational systems that keep workflows,
            decisions, and teams aligned under real pressure.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-white/48">
            This is not software. It is the structure behind execution.
          </p>

          <ul className="mt-10 grid gap-3 text-sm font-medium text-white/84 sm:grid-cols-2">
            {[
              "Operational systems under pressure",
              "Workflow structure with visibility",
              "Control Layer deployment",
              "Decision systems for leadership",
            ].map((item) => (
              <li key={item} className="border-l border-white/16 pl-4">
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
          <div className="absolute inset-x-10 top-10 -z-10 h-72 bg-[radial-gradient(circle,rgba(20,74,106,0.32),transparent_65%)] blur-3xl" />
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
