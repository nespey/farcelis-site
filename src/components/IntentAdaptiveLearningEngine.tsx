"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

type IntentScenario = {
  id: string;
  label: string;
  context: string;
  failingPattern: string;
  structuralShift: string;
  signals: string[];
};

const adoptionStages = [
  {
    label: "Role",
    detail: "Define who needs AI capability and what decisions they actually make.",
  },
  {
    label: "Workflow",
    detail: "Attach learning to CRM, support, operations, governance, or intake work.",
  },
  {
    label: "Practice",
    detail: "Use guided prompt drills and scenario work against real operating tasks.",
  },
  {
    label: "Reinforcement",
    detail: "Repeat behavior through checkpoints, coaching prompts, and manager visibility.",
  },
  {
    label: "Adoption Tracking",
    detail: "Measure whether the behavior is showing up in the workflow after rollout.",
  },
  {
    label: "Operational Capability",
    detail: "Convert training into repeatable team behavior that holds under pressure.",
  },
];

const failureSignals = [
  "One-time workshop",
  "Generic prompts",
  "No reinforcement",
  "No workflow integration",
  "No accountability",
  "Knowledge disappears",
];

const intentSignals = [
  "Role-specific learning",
  "Workflow-based exercises",
  "Reinforcement loops",
  "Guided prompt practice",
  "Behavioral adoption tracking",
  "Capability growth over time",
];

const scenarios: IntentScenario[] = [
  {
    id: "sales",
    label: "Sales Teams",
    context: "CRM workflow adoption",
    failingPattern: "Reps learn prompts in a workshop, then return to scattered notes and uneven CRM updates.",
    structuralShift:
      "INTENT+ reinforces account research, call prep, objection handling, and follow-up inside the CRM operating path.",
    signals: ["Prompt usage by deal stage", "Manager review checkpoints", "CRM field completion quality"],
  },
  {
    id: "operations",
    label: "Operations Teams",
    context: "Execution systems",
    failingPattern: "Operators test AI once, then abandon it when requests, exceptions, and ownership pressure rise.",
    structuralShift:
      "INTENT+ trains role-specific judgment around intake, routing, status updates, blocker language, and exception handling.",
    signals: ["Workflow practice completion", "Escalation quality", "Repeatable routing behavior"],
  },
  {
    id: "support",
    label: "Support Teams",
    context: "Response workflows",
    failingPattern: "Support gets a list of AI tips, but response quality stays inconsistent across cases and channels.",
    structuralShift:
      "INTENT+ turns AI practice into response triage, tone calibration, knowledge lookup, and escalation discipline.",
    signals: ["Response consistency", "Knowledge-base usage", "Escalation clarity"],
  },
  {
    id: "leadership",
    label: "Leadership Teams",
    context: "Governance and visibility",
    failingPattern: "Executives sponsor AI rollout but cannot see whether teams are adopting the right behaviors.",
    structuralShift:
      "INTENT+ gives leadership adoption signals tied to governance, decision visibility, and operating accountability.",
    signals: ["Adoption quality", "Governance checkpoints", "Capability heat map"],
  },
  {
    id: "onboarding",
    label: "Cross-Functional Onboarding",
    context: "AI-enabled operations",
    failingPattern: "New users receive training content, but do not know how AI fits into the way work actually moves.",
    structuralShift:
      "INTENT+ maps onboarding to role, workflow, practice, reinforcement, and measurable behavior in the operating system.",
    signals: ["Time to useful practice", "Role readiness", "Sustained usage after rollout"],
  },
];

export function IntentAdaptiveLearningEngine() {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);

  const activeScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === activeScenarioId) ?? scenarios[0],
    [activeScenarioId]
  );

  return (
    <div className="intent-page">
      <section className="intent-hero">
        <div className="section-inner">
          <div className="intent-hero-grid">
            <div className="intent-hero-copy">
              <p className="eyebrow text-[color:var(--color-accent)]">INTENT+ Adaptive Learning Engine</p>
              <h1>Most AI training fails within days.</h1>
              <p>
                People forget what they learned, teams revert to old habits, and leadership never gets
                real adoption visibility.
              </p>
              <div className="intent-hero-actions">
                <Link href="/contact">Build Adoption Structure</Link>
                <Link href="/products">View Product Suite</Link>
              </div>
            </div>

            <div className="intent-comparison" aria-label="Traditional AI training compared with INTENT+">
              <article className="intent-compare-panel intent-panel-fragmented">
                <div className="intent-panel-topline">
                  <span>Traditional AI Training</span>
                  <strong>Temporary lift</strong>
                </div>
                <div className="intent-decay-visual">
                  {failureSignals.map((signal, index) => (
                    <div key={signal} style={{ "--offset": `${index * 7}px` } as CSSProperties}>
                      {signal}
                    </div>
                  ))}
                </div>
              </article>

              <article className="intent-compare-panel intent-panel-structured">
                <div className="intent-panel-topline">
                  <span>INTENT+</span>
                  <strong>Repeatable behavior</strong>
                </div>
                <div className="intent-structure-visual">
                  {intentSignals.map((signal, index) => (
                    <div key={signal}>
                      <i>{index + 1}</i>
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="intent-architecture-section">
        <div className="section-inner">
          <div className="intent-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">How The System Works</p>
            <h2>Learning is embedded into the way work moves.</h2>
          </div>

          <div className="intent-architecture-flow">
            {adoptionStages.map((stage, index) => (
              <article key={stage.label} className="intent-stage">
                <div className="intent-stage-index">{String(index + 1).padStart(2, "0")}</div>
                <h3>{stage.label}</h3>
                <p>{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intent-problem-section">
        <div className="section-inner intent-problem-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">The Real Problem</p>
            <h2>Most companies treat AI training like a presentation instead of a behavior system.</h2>
          </div>
          <div className="intent-problem-copy">
            <p>
              Workshops create temporary excitement. Retention collapses without reinforcement. Teams
              return to old workflows because the learning never gets tied to responsibility, cadence,
              visibility, and the actual places where work happens.
            </p>
            <p>
              INTENT+ changes the operating structure around adoption. It connects role-specific practice
              to workflow behavior, gives managers reinforcement signals, and shows leadership whether AI
              capability is becoming real execution.
            </p>
          </div>
        </div>
      </section>

      <section className="intent-use-section">
        <div className="section-inner">
          <div className="intent-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">Operational Use Cases</p>
            <h2>AI adoption has to land inside real team behavior.</h2>
          </div>

          <div className="intent-use-console">
            <div className="intent-use-selector">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  className={scenario.id === activeScenario.id ? "is-active" : ""}
                  onClick={() => setActiveScenarioId(scenario.id)}
                >
                  <span>{scenario.label}</span>
                  <small>{scenario.context}</small>
                </button>
              ))}
            </div>

            <div className="intent-use-output">
              <div className="intent-output-header">
                <span>Recognition Pattern</span>
                <strong>{activeScenario.label}</strong>
              </div>
              <div className="intent-before-after">
                <article>
                  <span>What breaks after training</span>
                  <p>{activeScenario.failingPattern}</p>
                </article>
                <article>
                  <span>What INTENT+ reinforces</span>
                  <p>{activeScenario.structuralShift}</p>
                </article>
              </div>
              <div className="intent-signal-row">
                {activeScenario.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intent-final-section">
        <div className="section-inner intent-final-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">The Structural Difference</p>
            <h2>INTENT+ does not ask teams to remember training. It gives adoption a system to live inside.</h2>
          </div>
          <div className="intent-final-diagram">
            <div>Role clarity</div>
            <div>Workflow practice</div>
            <div>Reinforcement loop</div>
            <div>Adoption signal</div>
            <div>Operational behavior</div>
          </div>
        </div>
      </section>
    </div>
  );
}
