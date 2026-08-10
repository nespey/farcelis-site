"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Pillar = "Build" | "Grow" | "Operate";

const scanQuestions = [
  {
    label: "What are you trying to do first?",
    options: [
      { label: "Create or rebuild a website, app, portal, or automation", pillar: "Build" },
      { label: "Get more people to find, trust, and act on what we offer", pillar: "Grow" },
      { label: "Keep systems, work, reporting, and follow-up under control", pillar: "Operate" },
    ],
  },
  {
    label: "What is missing or messy right now?",
    options: [
      { label: "The thing itself: site, app, portal, dashboard, code, or launch path", pillar: "Build" },
      { label: "The market path: search, content, ads, CRM, or lead handoff", pillar: "Grow" },
      { label: "The operating model: ownership, reporting, support, cadence, or rules", pillar: "Operate" },
    ],
  },
  {
    label: "What would help most this month?",
    options: [
      { label: "Turn an idea or messy asset into something usable", pillar: "Build" },
      { label: "Make an existing offer easier to find and act on", pillar: "Grow" },
      { label: "Put control around work that already exists", pillar: "Operate" },
    ],
  },
  {
    label: "Where should Farcelis route you?",
    options: [
      { label: "Build: create, connect, clean up, launch, document", pillar: "Build" },
      { label: "Grow: visibility, content, campaigns, CRM, follow-up", pillar: "Grow" },
      { label: "Operate: Control Layer, workflow, reporting, managed support", pillar: "Operate" },
    ],
  },
] satisfies {
  label: string;
  options: { label: string; pillar: Pillar }[];
}[];

const recommendations: Record<Pillar, {
  title: string;
  body: string;
  href: string;
  label: string;
  contactHref: string;
  contactLabel: string;
}> = {
  Build: {
    title: "Start with Build",
    body: "Your answers point to creating or repairing the thing itself: a site, app, portal, dashboard, automation, codebase, or launch path people can actually use.",
    href: "/services/build",
    label: "See the Build Path",
    contactHref: "/contact?request=build&work=website-development,app-portal-development,ai-agents-automations,platform-connections,dashboards-decision-views#strategy-form",
    contactLabel: "Talk Through a Build",
  },
  Grow: {
    title: "Start with Grow",
    body: "Your answers point to visibility and movement: search, AEO, content, campaigns, CRM, lead handling, and the follow-up path that turns attention into action.",
    href: "/services/grow",
    label: "See the Grow Path",
    contactHref: "/contact?request=grow&work=seo-search-visibility,aeo-ai-search-visibility,google-ads-paid-search,meta-ads-paid-social,crm-revenue-operations,content-revenue-systems#strategy-form",
    contactLabel: "Map a Growth Path",
  },
  Operate: {
    title: "Start with Operate",
    body: "Your answers point to control: ownership, workflow, AI rules, reporting, deployment continuity, managed operations, and the Farcelis Control Layer.",
    href: "/services/operate",
    label: "See the Operate Path",
    contactHref: "/contact?request=operate&work=ai-strategy-governance,workflow-managed-operations,farcelis-control-layer,reporting-decision-systems,deployment-operations-operate#strategy-form",
    contactLabel: "Stabilize Operations",
  },
};

export function SiteExperienceLayer() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.max(0, Math.min(1, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#pathfinder") {
        setOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const resultPillar = useMemo<Pillar>(
    () => {
      const scores: Record<Pillar, number> = { Build: 0, Grow: 0, Operate: 0 };

      Object.entries(answers).forEach(([questionIndex, optionIndex]) => {
        const option = scanQuestions[Number(questionIndex)]?.options[optionIndex];
        if (option) {
          scores[option.pillar] += 1;
        }
      });

      return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] as Pillar) ?? "Build";
    },
    [answers],
  );

  const recommendation = recommendations[resultPillar];
  const answeredCount = Object.keys(answers).length;

  return (
    <>
      <div className="site-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="system-scan-button"
      >
        <span className="system-scan-pulse" aria-hidden="true" />
        Pathfinder
      </button>

      <div className={`system-scan-shell ${open ? "system-scan-shell-open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="system-scan-backdrop"
          aria-label="Close system scan"
          onClick={() => setOpen(false)}
        />
        <aside
          className="system-scan-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="system-scan-title"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Farcelis Pathfinder</p>
              <h2 id="system-scan-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                Find your starting path.
              </h2>
              <p className="mt-3 max-w-[520px] text-sm leading-7 text-slate-300">
                Answer four quick signals and Pathfinder routes you toward Build, Grow,
                or Operate so the next click matches what you actually need.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-100/16 bg-white/[0.04] text-xl text-white transition hover:bg-white/[0.08]"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="mt-7 grid gap-5">
            {scanQuestions.map((question, questionIndex) => (
              <div key={question.label} className="rounded-[22px] border border-cyan-100/12 bg-white/[0.035] p-4">
                <div className="text-sm font-semibold text-slate-100">{question.label}</div>
                <div className="mt-3 grid gap-2">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[questionIndex] === optionIndex;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                        className={`min-h-11 rounded-full border px-4 text-left text-sm font-semibold transition ${
                          selected
                            ? "border-[color:var(--color-accent)] bg-[rgba(242,139,91,0.14)] text-white"
                            : "border-cyan-100/12 bg-white/[0.025] text-slate-300 hover:border-cyan-100/28 hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-[color:var(--color-accent)]/18 bg-[linear-gradient(135deg,rgba(242,139,91,0.14),rgba(97,192,215,0.08))] p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {answeredCount}/4 Signals Captured
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
              {recommendation.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-200">{recommendation.body}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={recommendation.href}
                onClick={() => setOpen(false)}
                className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {recommendation.label}
              </Link>
              <Link
                href={recommendation.contactHref}
                onClick={() => setOpen(false)}
                className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-sm font-semibold text-cyan-50"
              >
                {recommendation.contactLabel}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
