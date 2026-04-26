"use client";

import { useEffect, useState } from "react";

type PreviewMode = "household" | "project";

const modes: {
  id: PreviewMode;
  label: string;
  title: string;
  subtitle: string;
  summary: string;
  stats: { label: string; value: string; tone: string }[];
  queue: { title: string; meta: string; tone: string }[];
  rail: string[];
}[] = [
  {
    id: "household",
    label: "Household / Personal",
    title: "Operations command view",
    subtitle: "Where household, business, and opportunity stay aligned.",
    summary: "Command strip, inbox control, action center, bills, and follow-up lanes in one environment.",
    stats: [
      { label: "Open actions", value: "19", tone: "from-rose-400/25 to-rose-400/5" },
      { label: "Due this week", value: "15", tone: "from-amber-400/25 to-amber-400/5" },
      { label: "Bills due", value: "2", tone: "from-cyan-400/25 to-cyan-400/5" },
      { label: "Pipelines", value: "2", tone: "from-violet-400/25 to-violet-400/5" },
    ],
    queue: [
      { title: "Immediate execution", meta: "Tasks, replies, and due-now actions", tone: "border-rose-400/30" },
      { title: "Action center", meta: "Filter, assign, complete, and defer live work", tone: "border-cyan-400/30" },
      { title: "Finance + follow-ups", meta: "Bills, obligations, and upcoming deadlines", tone: "border-amber-400/30" },
    ],
    rail: ["Dashboard", "Personal Ops", "Job Search", "Farcelis", "Finance", "Email Actions"],
  },
  {
    id: "project",
    label: "Client / Project Ops",
    title: "Executive project workspace",
    subtitle: "Projects, partners, and execution activity across one operating frame.",
    summary: "Owner filters, project controls, outreach actions, and source-system links brought into one command layer.",
    stats: [
      { label: "Projects", value: "104", tone: "from-emerald-400/25 to-emerald-400/5" },
      { label: "Contacts", value: "330", tone: "from-sky-400/25 to-sky-400/5" },
      { label: "Urgent flags", value: "8", tone: "from-orange-400/25 to-orange-400/5" },
      { label: "Source systems", value: "3", tone: "from-fuchsia-400/25 to-fuchsia-400/5" },
    ],
    queue: [
      { title: "Control strip", meta: "Search, owner filters, status filters, export, sync", tone: "border-emerald-400/30" },
      { title: "Project queue", meta: "Cards with status, owner, stage, county, and system links", tone: "border-sky-400/30" },
      { title: "Executive view", meta: "Operations, executive, and PM frames toggled in place", tone: "border-fuchsia-400/30" },
    ],
    rail: ["Operations", "Executive", "PM", "Projects", "Outreach", "Sync"],
  },
];

type WorkspacePreviewProps = {
  compact?: boolean;
};

export function WorkspacePreview({ compact = false }: WorkspacePreviewProps) {
  const [active, setActive] = useState<PreviewMode>("household");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current === "household" ? "project" : "household"));
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const current = modes.find((mode) => mode.id === active)!;

  return (
    <div className={`surface-dark overflow-hidden rounded-[34px] ${compact ? "px-5 py-5" : "px-6 py-6"}`}>
      <div className="flex flex-col gap-4 border-b border-white/8 pb-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Farcelis Control Layer
          </div>
          <div className="mt-2 text-lg font-medium text-white">{current.title}</div>
          <div className="mt-1 max-w-[540px] text-sm leading-7 text-slate-300">{current.summary}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActive(mode.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                mode.id === active
                  ? "border-white/22 bg-white/10 text-white"
                  : "border-white/8 bg-white/[0.03] text-slate-400 hover:border-white/14 hover:text-white"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`mt-5 grid gap-5 ${compact ? "lg:grid-cols-[210px_minmax(0,1fr)]" : "lg:grid-cols-[220px_minmax(0,1fr)]"}`}>
        <aside className="rounded-[26px] border border-white/8 bg-[#0e1826] px-4 py-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Workspace
          </div>
          <div className="mt-4 grid gap-2">
            {current.rail.map((item, index) => (
              <div
                key={item}
                className={`rounded-[16px] border px-4 py-3 text-sm font-medium transition ${
                  index === 0
                    ? "border-white/10 bg-white/8 text-white"
                    : "border-white/6 bg-white/[0.02] text-slate-400"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,248,236,0.88),rgba(201,226,255,0.6))] px-5 py-5 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f412c]">
              {current.label}
            </div>
            <div className="mt-3 text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.05em]">
              {current.subtitle}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {current.stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[22px] border border-white/8 bg-gradient-to-br ${stat.tone} px-4 py-4`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {stat.label}
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
              <div className="flex flex-wrap gap-3 border-b border-white/8 pb-4">
                {["Search board", "Quick add", "Flag", "Sync"].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                      index === 0
                        ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                        : "border-white/8 bg-white/[0.03] text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  { title: "Open queue", detail: "Priority-first execution lane" },
                  { title: "Inbox control", detail: "Signals converted into action records" },
                  { title: "Recent activity", detail: "Operational movement and updates" },
                  { title: "Upcoming pressure", detail: "Deadlines, obligations, follow-ups" },
                ].map((block) => (
                  <div
                    key={block.title}
                    className="rounded-[18px] border border-white/8 bg-[#101b2a] px-4 py-4"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {block.title}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">{block.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {current.queue.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[22px] border bg-white/[0.03] px-4 py-4 ${item.tone}`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-200">{item.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
