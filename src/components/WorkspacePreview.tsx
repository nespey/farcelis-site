"use client";

import { useEffect, useMemo, useState } from "react";

const views = [
  {
    id: "inbox",
    label: "Inbox Control",
    summary: "Convert inbound signals into owned work without losing visibility.",
    accent: "orange",
    counters: [
      { label: "Open actions", value: "19" },
      { label: "Due this week", value: "15" },
      { label: "Live inboxes", value: "2" },
      { label: "Ready to route", value: "6" },
      { label: "Owner gaps", value: "3" },
      { label: "SLA risk", value: "4" },
    ],
    actions: ["Search board", "Quick add", "Route owner", "Sync inboxes", "Details"],
    panels: {
      leftTitle: "Live inboxes",
      leftCards: [
        {
          title: "Mailbox Alpha",
          meta: "Recruiting, client, and system intake",
          footer: "2 converted • 4 queued",
        },
        {
          title: "Mailbox Beta",
          meta: "Family, setup, and operations intake",
          footer: "1 converted • 3 queued",
        },
        {
          title: "Ops intake",
          meta: "SLA, finance, and routing exceptions",
          footer: "3 flagged • 1 blocked",
        },
      ],
      centerTitle: "Action center",
      centerRows: [
        "Client request assigned to owner",
        "Inbox message converted into task",
        "Follow-up queued for same-day response",
        "Executive update prepared for review",
        "Missing attachment routed for review",
        "Exception log synced to leadership",
      ],
      lowerGroups: [
        {
          title: "Routing fields",
          rows: ["Owner locked", "Context attached", "Follow-up window"],
        },
        {
          title: "Output controls",
          rows: ["Reply staged", "Packet linked", "Close criteria"],
        },
      ],
      rightTitle: "Immediate execution",
      rightRows: ["Finalize packet", "Confirm owner", "Issue reply", "Close loop", "Escalate blocker"],
    },
  },
  {
    id: "projects",
    label: "Project Ops",
    summary: "Run multi-source project operations inside one visible command frame.",
    accent: "cyan",
    counters: [
      { label: "Projects", value: "104" },
      { label: "Contacts", value: "330" },
      { label: "Actions queued", value: "14" },
      { label: "Sync status", value: "Live" },
      { label: "Blocked", value: "7" },
      { label: "Reports", value: "11" },
    ],
    actions: ["All owners", "Project status", "Generate report", "Refresh view", "Details"],
    panels: {
      leftTitle: "Filters and commands",
      leftCards: [
        {
          title: "Operations",
          meta: "Owner scope • status • category",
          footer: "Search and route",
        },
        {
          title: "Executive",
          meta: "Visibility frame for active work",
          footer: "Live status",
        },
        {
          title: "Exceptions",
          meta: "Blocked work, approvals, and stale paths",
          footer: "7 surfaced",
        },
      ],
      centerTitle: "Project workspace",
      centerRows: [
        "Accepted by owner • on radar",
        "Outreach path aligned to status",
        "Action report queued for export",
        "Source system refreshed into frame",
        "Blocked dependency attached to owner",
        "Weekly view rebuilt for leadership",
      ],
      lowerGroups: [
        {
          title: "Live fields",
          rows: ["Owner status", "Next checkpoint", "Dependency state"],
        },
        {
          title: "Report controls",
          rows: ["Export scope", "Source freshness", "Review cadence"],
        },
      ],
      rightTitle: "Action routes",
      rightRows: ["ClickUp", "Outreach", "Sync data", "Escalate", "Archive output"],
    },
  },
  {
    id: "leadership",
    label: "Leadership View",
    summary: "Hold ownership, routing, and movement in one executive operating layer.",
    accent: "violet",
    counters: [
      { label: "Priority threads", value: "8" },
      { label: "Owners active", value: "5" },
      { label: "Decision points", value: "3" },
      { label: "Outputs live", value: "12" },
      { label: "At risk", value: "2" },
      { label: "Closed today", value: "9" },
    ],
    actions: ["Executive frame", "Visibility", "Leadership note", "Close loop", "Details"],
    panels: {
      leftTitle: "Signals entering frame",
      leftCards: [
        {
          title: "Client request",
          meta: "Visible before it becomes pressure",
          footer: "Captured",
        },
        {
          title: "Project update",
          meta: "Flagged, routed, and tracked",
          footer: "Visible",
        },
        {
          title: "Decision request",
          meta: "Context bundled before review",
          footer: "Ready",
        },
      ],
      centerTitle: "Control Layer response",
      centerRows: [
        "Ownership assigned with context",
        "Priority pressure surfaced for review",
        "Inbox and project motion stabilized",
        "Leadership output prepared and closed",
        "Risk note added to executive queue",
        "Owner confirmation attached",
      ],
      lowerGroups: [
        {
          title: "Decision fields",
          rows: ["Sponsor ready", "Risk posture", "Escalation path"],
        },
        {
          title: "Closure controls",
          rows: ["Decision memo", "Owner proof", "Next rhythm"],
        },
      ],
      rightTitle: "Outputs leaving frame",
      rightRows: ["Owner routing", "Inbox reply", "Project status", "Leadership note", "Board update"],
    },
  },
] as const;

type WorkspacePreviewProps = {
  compact?: boolean;
};

export function WorkspacePreview({ compact = false }: WorkspacePreviewProps) {
  const [viewIndex, setViewIndex] = useState(0);
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const viewInterval = window.setInterval(() => {
      setViewIndex((current) => (current + 1) % views.length);
    }, 3600);

    return () => window.clearInterval(viewInterval);
  }, []);

  useEffect(() => {
    const rowInterval = window.setInterval(() => {
      setActiveRow((current) => (current + 1) % 6);
    }, 1300);

    return () => window.clearInterval(rowInterval);
  }, []);

  const current = views[viewIndex]!;
  const accentClasses = useMemo(() => {
    if (current.accent === "cyan") {
      return {
        badge: "border-cyan-300/26 bg-cyan-300/12 text-cyan-50",
        panel: "border-cyan-300/14 bg-[linear-gradient(180deg,rgba(97,192,215,0.14),rgba(97,192,215,0.03))]",
        active: "border-cyan-300/24 bg-cyan-300/12 text-cyan-50 shadow-[0_18px_32px_rgba(97,192,215,0.14)]",
      };
    }

    if (current.accent === "violet") {
      return {
        badge: "border-violet-300/26 bg-violet-300/12 text-violet-50",
        panel: "border-violet-300/14 bg-[linear-gradient(180deg,rgba(141,119,255,0.14),rgba(141,119,255,0.03))]",
        active: "border-violet-300/24 bg-violet-300/12 text-violet-50 shadow-[0_18px_32px_rgba(141,119,255,0.14)]",
      };
    }

    return {
      badge: "border-[color:var(--color-accent)]/26 bg-[color:var(--color-accent)]/12 text-orange-50",
      panel: "border-[color:var(--color-accent)]/14 bg-[linear-gradient(180deg,rgba(242,139,91,0.12),rgba(242,139,91,0.03))]",
      active:
        "border-[color:var(--color-accent)]/24 bg-[color:var(--color-accent)]/12 text-orange-50 shadow-[0_18px_32px_rgba(242,139,91,0.14)]",
    };
  }, [current.accent]);

  return (
    <div className={`hero-panel-shell relative mx-auto w-full ${compact ? "max-w-[1040px]" : "max-w-none"}`}>
      <div
        className={`workspace-preview relative overflow-hidden rounded-[32px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035)),linear-gradient(135deg,rgba(27,40,56,0.99),rgba(7,13,22,0.99))] shadow-[0_56px_150px_rgba(3,8,16,0.68),0_0_84px_rgba(97,192,215,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ${
          compact
            ? "min-h-[820px] px-5 py-5 md:min-h-[720px] md:px-7 md:py-7 xl:min-h-[650px]"
            : "min-h-[900px] px-6 py-6 md:min-h-[780px] md:px-8 md:py-8 xl:min-h-[720px]"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
        <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(97,192,215,0.14),transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(242,139,91,0.14),transparent_72%)] blur-3xl" />

        <div className="relative">
          <div className="mb-5 flex flex-col gap-5 border-b border-white/8 pb-5">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="text-center lg:text-left">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent)]">
                  Farcelis Control Layer
                </div>
                <div className="mt-2 text-[1rem] font-semibold tracking-[-0.03em] text-white md:text-[1.08rem]">
                  Live operating workspace
                </div>
                <div className="mt-2 min-h-[2.6rem] max-w-[58ch] text-xs leading-6 text-slate-300">
                  {current.summary}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {views.map((view, index) => (
                  <div
                    key={view.id}
                    className={`min-h-8 rounded-full border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition ${
                      index === viewIndex
                        ? accentClasses.badge
                        : "border-white/8 bg-white/[0.03] text-slate-500"
                    }`}
                  >
                    {view.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {current.counters.map((counter, index) => (
                <div
                  key={counter.label}
                  className={`hero-signal min-h-[88px] rounded-[16px] border px-3 py-3 text-left ${
                    index === activeRow ? accentClasses.panel : "border-white/7 bg-white/[0.04]"
                  }`}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {counter.label}
                  </div>
                  <div className="mt-2 text-[1.28rem] font-semibold tracking-[-0.05em] text-white">
                    {counter.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[240px_minmax(0,1fr)]">
            <div className="space-y-4">
              <div className="rounded-[20px] border border-white/7 bg-white/[0.04] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Workspace channels
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    "Dashboard",
                    "Inbox control",
                    "Documents",
                    "Action center",
                    "Executive frame",
                    "Exception log",
                    "Detail view",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`min-h-[38px] rounded-[12px] border px-3 py-2 text-xs transition ${
                        index === viewIndex + 1
                          ? accentClasses.active
                          : "border-white/6 bg-[#111d2c] text-slate-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] border border-white/7 bg-white/[0.04] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Action strip
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.actions.map((item, index) => (
                    <div
                      key={item}
                      className={`min-h-8 rounded-full border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                        index === activeRow
                          ? accentClasses.badge
                          : "border-white/8 bg-white/[0.03] text-slate-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#0d1724]/92 p-3 md:p-4">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="space-y-4">
                  <div className="rounded-[18px] border border-white/7 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {current.panels.leftTitle}
                      </div>
                      <div className="rounded-full border border-white/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Live
                      </div>
                    </div>
                    <div className="mt-3 grid gap-3 md:grid-cols-3">
                      {current.panels.leftCards.map((card, index) => (
                        <div
                          key={card.title}
                          className={`min-h-[132px] rounded-[16px] border px-3 py-3 transition ${
                            index === activeRow % 2
                              ? accentClasses.panel
                              : "border-white/6 bg-[#111d2c]"
                          }`}
                        >
                          <div className="text-xs font-semibold tracking-[-0.02em] text-white">
                            {card.title}
                          </div>
                          <div className="mt-2 text-xs leading-5 text-slate-300">{card.meta}</div>
                          <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {card.footer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/7 bg-white/[0.03] p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {current.panels.centerTitle}
                    </div>
                    <div className="mt-3 grid gap-2 md:grid-cols-2">
                      {current.panels.centerRows.map((item, index) => (
                        <div
                          key={item}
                          className={`min-h-[44px] rounded-[13px] border px-3 py-2 text-xs leading-5 transition ${
                            index === activeRow
                              ? accentClasses.active
                              : "border-white/6 bg-[#111d2c] text-slate-400"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {current.panels.lowerGroups.map((group, groupIndex) => (
                      <div
                        key={group.title}
                        className="rounded-[18px] border border-white/7 bg-white/[0.03] p-3"
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {group.title}
                        </div>
                        <div className="mt-3 grid gap-2">
                          {group.rows.map((item, index) => {
                            const isActive = (activeRow + groupIndex) % group.rows.length === index;

                            return (
                              <div
                                key={item}
                                className={`grid min-h-[38px] grid-cols-[minmax(0,1fr)_64px] items-center gap-3 rounded-[12px] border px-3 py-2 text-[11px] transition ${
                                  isActive
                                    ? accentClasses.active
                                    : "border-white/6 bg-[#111d2c] text-slate-400"
                                }`}
                              >
                                <span>{item}</span>
                                <span className="text-right font-semibold uppercase tracking-[0.12em] text-slate-500">
                                  {isActive ? "Live" : "Queued"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,rgba(97,192,215,0.12),rgba(97,192,215,0.04))] p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      Executive view
                    </div>
                    <div className="mt-2 text-[1.15rem] font-semibold tracking-[-0.05em] text-white">
                      Visibility stays intact.
                    </div>
                    <div className="mt-2 text-xs leading-6 text-slate-200">
                      Intake, routing, ownership, and outputs remain in one operating frame.
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/7 bg-white/[0.03] p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {current.panels.rightTitle}
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                      {current.panels.rightRows.map((item, index) => (
                        <div
                          key={item}
                          className={`min-h-[40px] rounded-[13px] border px-3 py-2 text-xs transition ${
                            index === (activeRow + 1) % current.panels.rightRows.length
                              ? accentClasses.active
                              : "border-white/6 bg-[#111d2c] text-slate-400"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(97,192,215,0.08),rgba(17,29,44,0.96))] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Selected work detail
                      </div>
                      <div className={accentClasses.badge + " rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"}>
                        Expanded
                      </div>
                    </div>
                    <div className="mt-2 text-xs leading-5 text-slate-300">
                      A clicked row opens a contextual detail panel with the fields needed to close the loop.
                    </div>
                    <div className="mt-3 grid gap-2">
                      {["Owner", "Priority", "SLA", "Source"].map((item, index) => (
                        <div
                          key={item}
                          className="grid grid-cols-[82px_minmax(0,1fr)_18px] items-center gap-2 rounded-[12px] border border-white/6 bg-[#0b1421] px-3 py-2 text-[11px] text-slate-300"
                        >
                          <span className="text-slate-500">{item}</span>
                          <span>{["Assigned", "High", "Today", "Synced"][index]}</span>
                          <span className="text-slate-500">⌄</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
