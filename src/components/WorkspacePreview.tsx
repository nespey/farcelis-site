"use client";

import { useEffect, useState } from "react";

const sources = [
  "Inbox",
  "CRM",
  "PM Board",
  "Contracts",
  "Calendar",
  "Field Notes",
];

const outputs = [
  "Owner routing",
  "Inbox reply",
  "Task update",
  "Leadership note",
  "Project status",
  "Follow-up queue",
];

const stages = [
  {
    label: "Capture",
    summary: "Signals enter through inboxes, boards, forms, and source systems.",
    activeSource: 0,
    activeOutput: 0,
  },
  {
    label: "Stabilize",
    summary: "The Control Layer normalizes requests, ownership, and pressure points.",
    activeSource: 2,
    activeOutput: 2,
  },
  {
    label: "Route",
    summary: "Priorities, inbox actions, and executive visibility stay aligned in one frame.",
    activeSource: 3,
    activeOutput: 4,
  },
];

type WorkspacePreviewProps = {
  compact?: boolean;
};

export function WorkspacePreview({ compact = false }: WorkspacePreviewProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((current) => (current + 1) % stages.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const current = stages[step]!;

  return (
    <div className={`hero-panel-shell ${compact ? "" : "hero-panel-float"} relative`}>
      <div
        className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)),linear-gradient(135deg,rgba(22,33,47,0.96),rgba(10,18,28,0.96))] shadow-[0_38px_90px_rgba(3,8,16,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] ${
          compact ? "px-4 py-4" : "px-5 py-5"
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/8 pb-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Farcelis Control Layer
            </div>
            <div className="mt-2 text-[1.05rem] font-semibold tracking-[-0.03em] text-white">
              Live operating workspace
            </div>
            <div className="mt-1 max-w-[36ch] text-sm leading-6 text-slate-300">
              {current.summary}
            </div>
          </div>

          <div className="hidden gap-2 md:flex">
            {["Household", "Project Ops", "Leadership"].map((item, index) => (
              <div
                key={item}
                className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                  index === step
                    ? "border-white/18 bg-white/10 text-white"
                    : "border-white/8 bg-white/[0.03] text-slate-500"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[180px_minmax(0,1fr)_170px]">
          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Inputs
            </div>
            {sources.map((source, index) => (
              <div
                key={source}
                className={`rounded-[16px] border px-3 py-3 text-sm transition ${
                  index === current.activeSource
                    ? "border-cyan-300/26 bg-cyan-300/10 text-cyan-50 shadow-[0_12px_28px_rgba(97,192,215,0.15)]"
                    : "border-white/7 bg-white/[0.03] text-slate-400"
                }`}
              >
                {source}
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-white/8 bg-[#0e1825]/96 p-4">
            <div className="flex flex-wrap items-center gap-2 border-b border-white/8 pb-4">
              {["Search", "Filters", "Inbox", "Export", "Sync"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    index === 2
                      ? "border-[color:var(--color-accent)]/28 bg-[color:var(--color-accent)]/10 text-orange-50"
                      : "border-white/8 bg-white/[0.03] text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[18px] border border-white/7 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Intake queue
                  </div>
                  <div className="rounded-full border border-white/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Active
                  </div>
                </div>
                <div className="mt-4 space-y-2.5">
                  {[
                    "Client request routed to owner",
                    "Inbox message converted to task",
                    "Project action flagged for review",
                    "Executive update prepared",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-[14px] border px-3 py-3 text-sm leading-6 transition ${
                        index === step + 1
                          ? "border-white/14 bg-white/8 text-white"
                          : "border-white/6 bg-[#111e2d] text-slate-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,rgba(97,192,215,0.12),rgba(97,192,215,0.04))] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    Executive view
                  </div>
                  <div className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">
                    Visibility holds.
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-200">
                    Priority, ownership, and movement stay visible in one frame.
                  </div>
                </div>

                <div className="hero-flow-line rounded-[18px] border border-white/7 bg-white/[0.03] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Control flow
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {stages.map((stage, index) => (
                      <div
                        key={stage.label}
                        className={`rounded-[14px] border px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] transition ${
                          index === step
                            ? "border-[color:var(--color-accent)]/24 bg-[color:var(--color-accent)]/12 text-orange-50"
                            : "border-white/6 bg-[#111e2d] text-slate-500"
                        }`}
                      >
                        {stage.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outputs
            </div>
            {outputs.map((output, index) => (
              <div
                key={output}
                className={`rounded-[16px] border px-3 py-3 text-sm transition ${
                  index === current.activeOutput
                    ? "border-[color:var(--color-accent)]/24 bg-[color:var(--color-accent)]/10 text-orange-50 shadow-[0_12px_28px_rgba(242,139,91,0.12)]"
                    : "border-white/7 bg-white/[0.03] text-slate-400"
                }`}
              >
                {output}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
