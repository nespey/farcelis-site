"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Diagnostic = {
  id: string;
  label: string;
  symptoms: string[];
  means: string;
  consequence: string;
};

type Symptom = {
  text: string;
  hidden: string;
};

const diagnostics: Diagnostic[] = [
  {
    id: "rhythm",
    label: "Workflow Rhythm",
    symptoms: ["late handoffs", "unplanned status chasing", "stalled approval paths"],
    means: "Operating cadence is not connected to how work actually moves across teams.",
    consequence: "Work feels busy but movement becomes inconsistent, delayed, and hard to govern.",
  },
  {
    id: "reporting",
    label: "Reporting Confidence",
    symptoms: ["conflicting reports", "spreadsheet reconciliation", "delayed executive visibility"],
    means: "Data ownership is fragmented and unofficial systems of record are competing.",
    consequence: "Leadership decisions slow down because nobody fully trusts the numbers.",
  },
  {
    id: "integration",
    label: "Integration Stability",
    symptoms: ["sync errors", "duplicate entries", "manual transfers between tools"],
    means: "The stack technically connects, but the operational handoffs are not stable.",
    consequence: "Teams build workarounds that quietly become the real operating system.",
  },
  {
    id: "automation",
    label: "Automation Readiness",
    symptoms: ["brittle triggers", "missing exceptions", "unclear fallback ownership"],
    means: "Automation is being added before routing, ownership, and exception logic are mature.",
    consequence: "Automation scales confusion faster than people can catch it.",
  },
  {
    id: "ownership",
    label: "Ownership Clarity",
    symptoms: ["unclear next move", "approval ambiguity", "leadership absorbing unresolved work"],
    means: "Responsibilities exist informally, but accountability is not designed into the workflow.",
    consequence: "Pressure compounds silently until leadership feels it all at once.",
  },
  {
    id: "oversight",
    label: "AI Oversight Risk",
    symptoms: ["untracked AI usage", "unclear review paths", "outputs no one governs"],
    means: "AI capability is entering workflows without operational controls around quality and use.",
    consequence: "Teams may move faster while leadership loses visibility into how decisions are formed.",
  },
  {
    id: "redundancy",
    label: "Data Redundancy",
    symptoms: ["same data in multiple places", "conflicting customer records", "manual cleanup cycles"],
    means: "The organization lacks a trusted source structure for critical operating information.",
    consequence: "Execution slows because teams keep verifying reality before acting.",
  },
  {
    id: "bottlenecks",
    label: "Operational Bottlenecks",
    symptoms: ["work queues swell", "decisions bunch upstream", "teams wait without visibility"],
    means: "Constraints are hidden inside approvals, dependencies, tooling, or unclear authority.",
    consequence: "Delays become normal before anyone can locate the actual failure point.",
  },
];

const scanPhases = [
  ["Signal Collection", "Capture workflow rhythm, reporting patterns, dependencies, ownership structures, and automation behavior."],
  ["System Mapping", "Identify how operational systems actually connect, overlap, or conflict in practice."],
  ["Friction Detection", "Surface delays, redundancies, governance gaps, weak integrations, and manual workarounds."],
  ["Risk Exposure", "Reveal where instability expands under growth, automation, or AI adoption."],
  ["Stabilization Priorities", "Deliver the highest-impact corrective actions for operational alignment."],
  ["Oversight Path", "Define where governance, visibility, or managed oversight may be required."],
];

const symptoms: Symptom[] = [
  {
    text: "Different departments report different numbers.",
    hidden: "Multiple systems of record are competing for operational truth.",
  },
  {
    text: "Nobody can explain where delays actually begin.",
    hidden: "Workflow state is not visible at the handoff and approval layer.",
  },
  {
    text: "Automation exists, but trust in the outputs does not.",
    hidden: "Exception handling and review ownership were never structurally defined.",
  },
  {
    text: "Teams create side processes outside the system.",
    hidden: "The official workflow does not match how work actually gets done.",
  },
  {
    text: "Leadership visibility arrives too late.",
    hidden: "Reporting is lagging behind operational pressure instead of detecting it.",
  },
  {
    text: "The stack technically works, but operations still feel chaotic.",
    hidden: "Tools are connected, but ownership, cadence, and governance are not.",
  },
];

const packageItems = [
  "Workflow Harmony Report",
  "Risk concentration map",
  "Integration conflict analysis",
  "Stabilization priorities",
  "Oversight recommendations",
  "Operational alignment score",
  "System trust indicators",
];

export function BlueprintReadinessSnapshot() {
  const [activeDiagnosticId, setActiveDiagnosticId] = useState(diagnostics[1].id);
  const [activeSymptomIndex, setActiveSymptomIndex] = useState(0);

  const activeDiagnostic = useMemo(
    () => diagnostics.find((item) => item.id === activeDiagnosticId) ?? diagnostics[0],
    [activeDiagnosticId]
  );

  return (
    <div className="blueprint-page">
      <section className="blueprint-hero">
        <div className="section-inner blueprint-hero-grid">
          <div className="blueprint-hero-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">Blueprint Readiness Snapshot</p>
            <h1>Your operations are speaking. Most organizations just cannot hear the signal.</h1>
            <p>
              Workflow delays, duplicate data, reporting inconsistencies, unclear ownership, and broken
              automation patterns rarely happen in isolation. They are symptoms of structural misalignment.
            </p>
            <Link href="/contact">Expose Our Operating Fractures</Link>
          </div>

          <div className="blueprint-xray" aria-label="Layered operational visibility map">
            <div className="blueprint-scan-line" />
            <div className="blueprint-node is-stable node-a"><span>CRM</span></div>
            <div className="blueprint-node is-warning node-b"><span>Reporting</span></div>
            <div className="blueprint-node is-fractured node-c"><span>Ownership</span></div>
            <div className="blueprint-node is-stable node-d"><span>Workflow</span></div>
            <div className="blueprint-node is-warning node-e"><span>Automation</span></div>
            <div className="blueprint-node is-fractured node-f"><span>Data</span></div>
            <svg className="blueprint-traces" viewBox="0 0 700 520" aria-hidden="true">
              <path d="M120 130 C220 70 310 120 390 165 S540 260 600 120" />
              <path d="M118 358 C230 295 320 330 420 390 S535 420 615 330" />
              <path d="M245 235 C320 190 405 205 475 255 S570 310 620 282" />
              <path className="is-weak" d="M150 150 C170 260 260 320 405 305 S570 220 615 330" />
              <path className="is-broken" d="M246 236 C330 276 395 292 492 276" />
            </svg>
            <div className="blueprint-xray-readout">
              <span>Operational Signal Trace</span>
              <strong>Fractures visible</strong>
              <small>Reporting confidence weakening across ownership and data pathways.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-diagnostic-section">
        <div className="section-inner">
          <div className="blueprint-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">What This Actually Detects</p>
            <h2>What operational pressure points become visible?</h2>
          </div>

          <div className="blueprint-diagnostic-console">
            <div className="blueprint-diagnostic-list">
              {diagnostics.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === activeDiagnostic.id ? "is-active" : ""}
                  onClick={() => setActiveDiagnosticId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="blueprint-diagnostic-output">
              <div className="blueprint-output-top">
                <span>Diagnostic Field</span>
                <strong>{activeDiagnostic.label}</strong>
              </div>
              <div className="blueprint-output-grid">
                <article>
                  <span>Symptoms</span>
                  {activeDiagnostic.symptoms.map((symptom) => (
                    <p key={symptom}>{symptom}</p>
                  ))}
                </article>
                <article>
                  <span>What it usually means</span>
                  <p>{activeDiagnostic.means}</p>
                </article>
                <article>
                  <span>Operational consequence</span>
                  <p>{activeDiagnostic.consequence}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-problem-section">
        <div className="section-inner blueprint-problem-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">The Real Problem</p>
            <h2>Most organizations try to automate broken operational structure instead of identifying where the structure is already failing.</h2>
          </div>
          <div className="blueprint-problem-copy">
            <p>
              Disconnected systems create hidden drag. Teams build workarounds nobody documents.
              Reporting confidence degrades over time, and automation amplifies bad structure when the
              foundation is unstable.
            </p>
            <p>
              The Blueprint Readiness Snapshot exposes structural instability before it compounds into
              operational failure.
            </p>
          </div>
        </div>
      </section>

      <section className="blueprint-scan-section">
        <div className="section-inner">
          <div className="blueprint-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">The Snapshot Experience</p>
            <h2>An operational scan moving deeper into organizational structure.</h2>
          </div>
          <div className="blueprint-scan-flow">
            {scanPhases.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-recognition-section">
        <div className="section-inner blueprint-recognition-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Executive Recognition Moments</p>
            <h2>You may already be seeing the symptoms.</h2>
          </div>
          <div className="blueprint-symptom-console">
            <div className="blueprint-symptom-list">
              {symptoms.map((symptom, index) => (
                <button
                  key={symptom.text}
                  type="button"
                  className={index === activeSymptomIndex ? "is-active" : ""}
                  onMouseEnter={() => setActiveSymptomIndex(index)}
                  onFocus={() => setActiveSymptomIndex(index)}
                  onClick={() => setActiveSymptomIndex(index)}
                >
                  {symptom.text}
                </button>
              ))}
            </div>
            <div className="blueprint-hidden-issue">
              <span>Hidden structural issue</span>
              <p>{symptoms[activeSymptomIndex].hidden}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-package-section">
        <div className="section-inner blueprint-package-grid">
          <div className="blueprint-package">
            <div className="blueprint-package-core">
              <span>Operational Visibility Package</span>
              <strong>System reality made visible</strong>
            </div>
            {packageItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
          <aside className="blueprint-founder-quote">
            <div className="blueprint-founder-image">
              <Image
                src="/images/team/nathan-blueprint-quote.png"
                alt="Nathan Espey, CEO and Founder"
                width={500}
                height={500}
                priority
              />
            </div>
            <div>
              <span>Diagnostic Perspective</span>
              <blockquote>
                “Blueprint exists for the moment a leader knows the stack is messy, but needs a clean
                way to locate the operating path before committing to a full Control Layer build.”
              </blockquote>
              <p>Nathan Espey</p>
              <small>CEO & Founder, developer of the R.A.P.I.D. diagnostic</small>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
