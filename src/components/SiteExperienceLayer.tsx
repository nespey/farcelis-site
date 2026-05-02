"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const scanQuestions = [
  {
    label: "Where is the pressure showing up first?",
    options: [
      { label: "Too many scattered requests", score: 3 },
      { label: "Teams need clearer AI direction", score: 2 },
      { label: "Growth work is hard to track", score: 2 },
    ],
  },
  {
    label: "What breaks most often?",
    options: [
      { label: "Ownership and follow-through", score: 3 },
      { label: "Reporting and visibility", score: 3 },
      { label: "Content, CRM, and lead handoffs", score: 2 },
    ],
  },
  {
    label: "How urgent is the operating pain?",
    options: [
      { label: "It is active now", score: 3 },
      { label: "It is getting worse", score: 2 },
      { label: "We are planning ahead", score: 1 },
    ],
  },
  {
    label: "What would help most?",
    options: [
      { label: "A Control Layer", score: 3 },
      { label: "A readiness snapshot", score: 2 },
      { label: "A growth or platform rebuild", score: 2 },
    ],
  },
];

const recommendations = [
  {
    min: 10,
    title: "Control Layer candidate",
    body: "Your answers point to an operating-system problem: intake, ownership, visibility, and intervention should be structured before more tools are added.",
    href: "/control-layer",
    label: "Explore Control Layer",
  },
  {
    min: 7,
    title: "Readiness and workflow assessment",
    body: "The strongest next step is a structured diagnostic across workflows, tools, data visibility, and AI readiness.",
    href: "/products/blueprint-readiness-snapshot",
    label: "View Readiness Snapshot",
  },
  {
    min: 0,
    title: "Capability mapping",
    body: "Start by mapping the highest-value service path across AI strategy, workflow automation, CRM operations, growth systems, and platform integration.",
    href: "/services",
    label: "Review Capabilities",
  },
];

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

  const score = useMemo(
    () => Object.entries(answers).reduce((total, [questionIndex, optionIndex]) => {
      const option = scanQuestions[Number(questionIndex)]?.options[optionIndex];
      return total + (option?.score ?? 0);
    }, 0),
    [answers],
  );

  const recommendation = recommendations.find((item) => score >= item.min) ?? recommendations[2];
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
        System Scan
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
              <p className="eyebrow text-[color:var(--color-accent)]">Farcelis System Scan</p>
              <h2 id="system-scan-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                Find the right operating path.
              </h2>
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
                href="/contact"
                onClick={() => setOpen(false)}
                className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-sm font-semibold text-cyan-50"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
