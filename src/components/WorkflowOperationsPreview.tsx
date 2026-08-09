"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type PreviewMode = "current" | "optimized";

type WorkflowPreview = {
  id: string;
  button: string;
  title: string;
  goal: string;
  endState: string;
  outcome: string;
  tension: string;
  primaryCta: string;
  secondaryCta: string;
  techniques: string[];
  nodes: string[];
  failures: string[];
  actions: string[];
  metrics: [string, string][];
};

const previews: WorkflowPreview[] = [
  {
    id: "workflow-map",
    button: "Open Workflow Map",
    title: "Workflow and Handoff Map",
    goal: "Expose where work disappears between teams, tools, approvals, and platforms.",
    endState: "A visible operating path with every handoff, owner, approval, and exception route mapped before automation is added.",
    outcome: "The visitor should see where work leaves visibility and what needs to be redesigned so requests stop disappearing between teams.",
    tension:
      "Most organizations are not slow because people are failing. They are slow because work movement is invisible.",
    primaryCta: "Map Our Workflow Failures",
    secondaryCta: "See Our Operating Path",
    techniques: [
      "BPMN workflow architecture",
      "cross-functional routing logic",
      "intake normalization",
      "workflow state management",
      "SLA timing windows",
      "exception routing",
    ],
    nodes: [
      "Request intake",
      "Approval queue",
      "Owner handoff",
      "CRM update",
      "Slack / Teams notice",
      "Escalation branch",
    ],
    failures: ["Missed handoff", "Stalled approval", "Hidden dependency"],
    actions: [
      "Click stalled node",
      "Reveal dependencies",
      "Compare current vs optimized",
      "Simulate heavier load",
    ],
    metrics: [
      ["27%", "handoff leakage"],
      ["14h", "approval latency"],
      ["5", "hidden dependencies"],
    ],
  },
  {
    id: "escalation-structure",
    button: "View Escalation Structure",
    title: "Ownership and Escalation Model",
    goal: "Show who owns the next move when pressure hits, and what happens when ownership is absent.",
    endState: "A clear escalation model showing who owns the next move, when intervention triggers, and where unresolved work routes next.",
    outcome: "The visitor should recognize whether pressure has a real owner or whether leadership is carrying invisible accountability debt.",
    tension:
      "When ownership is unclear, pressure compounds silently until leadership feels it all at once.",
    primaryCta: "See Where Ownership Breaks",
    secondaryCta: "Build an Escalation Model",
    techniques: [
      "RACI frameworks",
      "escalation matrix architecture",
      "exception management logic",
      "intervention sequencing",
      "incident response modeling",
      "command hierarchy",
    ],
    nodes: [
      "Issue detected",
      "Primary owner",
      "Approval authority",
      "Escalation timer",
      "Executive visibility",
      "Resolution path",
    ],
    failures: ["Absent owner", "Delayed response", "Approval bottleneck"],
    actions: [
      "Trigger stalled workflow",
      "Simulate absent owner",
      "Escalate unresolved issue",
      "Reroute accountability",
    ],
    metrics: [
      ["3", "owner gaps"],
      ["42m", "threshold breach"],
      ["2", "executive escalations"],
    ],
  },
  {
    id: "operating-cadence",
    button: "Explore Operating Cadence",
    title: "Operating Cadence Design",
    goal: "Separate meetings from true operating rhythm so leadership can stop reacting constantly.",
    endState: "A structured operating rhythm with review cycles, intervention windows, leadership checkpoints, and escalation timing.",
    outcome: "The visitor should see the difference between having meetings and having a cadence that keeps execution from drifting.",
    tension:
      "Without cadence, organizations default to reacting instead of operating.",
    primaryCta: "Design Our Operating Rhythm",
    secondaryCta: "See a Structured Cadence Model",
    techniques: [
      "governance rhythms",
      "review cycle architecture",
      "KPI intervention timing",
      "leadership checkpoint design",
      "continuous oversight",
      "cadence layering",
    ],
    nodes: [
      "Weekly review",
      "KPI checkpoint",
      "Decision window",
      "Escalation review",
      "Leadership sync",
      "Strategic layer",
    ],
    failures: [
      "Cadence drift",
      "Delayed decision loop",
      "Overloaded review cycle",
    ],
    actions: [
      "Miss review cycle",
      "Overload leadership bandwidth",
      "Trigger delayed escalation",
      "Compare rhythm models",
    ],
    metrics: [
      ["4", "missed checkpoints"],
      ["6d", "decision delay"],
      ["38%", "reactive work"],
    ],
  },
  {
    id: "visibility-layer",
    button: "Open Visibility Layer",
    title: "Visibility and Reporting Requirements",
    goal: "Reveal operational pressure before it becomes expensive.",
    endState: "A leadership visibility layer that connects workflow health, bottlenecks, SLA risk, ownership gaps, and reporting latency.",
    outcome: "The visitor should understand what leadership cannot currently see and why activity reports are not the same as operational visibility.",
    tension:
      "The most dangerous operational failures are usually visible somewhere, but never connected.",
    primaryCta: "See What Leadership Cannot Currently See",
    secondaryCta: "Map Our Visibility Gaps",
    techniques: [
      "operational telemetry",
      "workflow observability",
      "executive reporting systems",
      "KPI visibility architecture",
      "data normalization layers",
      "reporting latency detection",
    ],
    nodes: [
      "Workflow health",
      "Backlog pressure",
      "SLA risk",
      "Escalation status",
      "Data source sync",
      "Executive view",
    ],
    failures: ["Reporting delay", "Blind ownership", "Fragmented source data"],
    actions: [
      "Click bottleneck",
      "Reveal hidden pressure",
      "Simulate reporting delay",
      "Compare unified visibility",
    ],
    metrics: [
      ["18", "unresolved signals"],
      ["3", "blind spots"],
      ["9h", "reporting latency"],
    ],
  },
  {
    id: "automation-logic",
    button: "Test Workflow Automation Logic",
    title: "Automation-Ready Workflow Logic",
    goal: "Demonstrate why automation needs structure before it can safely scale.",
    endState: "A governed automation path with triggers, conditions, exception handling, fallback routing, and human review points.",
    outcome: "The visitor should see why automation is not the first step. It only works when the operating logic can survive real exceptions.",
    tension:
      "Automation scales structure. If the structure is broken, automation scales the damage.",
    primaryCta: "See If Our Workflow Is Automation-Ready",
    secondaryCta: "Test Our Operational Logic",
    techniques: [
      "workflow orchestration",
      "trigger-condition-action logic",
      "API event routing",
      "human-in-the-loop architecture",
      "retry logic frameworks",
      "automation safeguards",
    ],
    nodes: [
      "Trigger event",
      "Logic condition",
      "AI assist",
      "Human review",
      "Retry path",
      "Exception route",
    ],
    failures: ["Edge-case failure", "Missing fallback", "Ungoverned trigger"],
    actions: [
      "Break automation logic",
      "Trigger edge case",
      "Reveal dependencies",
      "Compare governed automation",
    ],
    metrics: [
      ["7", "logic gaps"],
      ["2", "missing fallbacks"],
      ["41%", "unsafe automation risk"],
    ],
  },
  {
    id: "control-layer",
    button: "Preview the Control Layer",
    title: "Control Layer Deployment Path",
    goal: "Enter a centralized operating command system above the existing stack.",
    endState: "A centralized command layer that coordinates intake, routing, escalation, telemetry, executive visibility, and intervention.",
    outcome: "The visitor should see the difference between a software stack and an operating system for controlling work across the stack.",
    tension:
      "Most organizations have software stacks. Very few have operational command systems.",
    primaryCta: "See the Control Layer in Our Environment",
    secondaryCta: "Schedule a Control Layer Walkthrough",
    techniques: [
      "control plane architecture",
      "event-driven infrastructure",
      "multi-platform synchronization",
      "operational telemetry",
      "AI-assisted intervention",
      "workflow observability",
    ],
    nodes: [
      "Unified intake",
      "Routing engine",
      "Pressure monitor",
      "AI intervention",
      "Executive oversight",
      "Command visibility",
    ],
    failures: [
      "System dependency",
      "Incident escalation",
      "Fragmented control",
    ],
    actions: [
      "Trigger incident",
      "Watch intervention",
      "Reveal dependencies",
      "Compare centralized control",
    ],
    metrics: [
      ["1", "command surface"],
      ["6", "synced systems"],
      ["82%", "visibility restored"],
    ],
  },
];

const nodeNotes: Record<string, string[]> = {
  "workflow-map": [
    "Normalize request",
    "Decision waits",
    "Owner changes",
    "System record",
    "Team signal",
    "Exception route",
  ],
  "escalation-structure": [
    "Issue enters",
    "Owner assigned",
    "Authority check",
    "Timer starts",
    "Leader sees risk",
    "Resolution owned",
  ],
  "operating-cadence": [
    "Weekly pulse",
    "Metric review",
    "Decision slot",
    "Escalation window",
    "Leader sync",
    "Strategic reset",
  ],
  "visibility-layer": [
    "Health signal",
    "Backlog heat",
    "SLA exposure",
    "Open escalations",
    "Source merge",
    "Executive view",
  ],
  "automation-logic": [
    "Event fires",
    "Condition tested",
    "Assist proposed",
    "Human validates",
    "Retry governed",
    "Fallback path",
  ],
  "control-layer": [
    "Single intake",
    "Route command",
    "Pressure sensed",
    "Assist intervenes",
    "Exec oversight",
    "Command surface",
  ],
};

const visualModels: Record<string, string> = {
  "workflow-map": "Handoff Blueprint",
  "escalation-structure": "Accountability Chain",
  "operating-cadence": "Cadence Timeline",
  "visibility-layer": "Visibility Radar",
  "automation-logic": "Logic Test Path",
  "control-layer": "Command Layer",
};

export function WorkflowOperationsPreview() {
  const [activeId, setActiveId] = useState(previews[0].id);
  const [mode, setMode] = useState<PreviewMode>("current");
  const [selectedNode, setSelectedNode] = useState(2);
  const [load, setLoad] = useState(2);

  const active = useMemo(
    () => previews.find((preview) => preview.id === activeId) ?? previews[0],
    [activeId],
  );

  const pressureLabel = ["Normal", "Elevated", "Stressed", "Critical"][load];
  const selectedFailure = active.failures[selectedNode % active.failures.length];
  const selectedWorkflowNode = active.nodes[selectedNode];
  const operatingScore =
    mode === "optimized"
      ? Math.min(94, 70 + load * 4)
      : Math.max(22, 74 - load * 11 - selectedNode * 2);
  const leakageRate =
    mode === "optimized" ? Math.max(4, 13 - load * 2) : 18 + load * 7;
  const responseWindow =
    mode === "optimized" ? Math.max(2, 8 - load) : 10 + load * 6 + selectedNode;
  const visibleRisk =
    mode === "optimized"
      ? Math.max(2, 8 - selectedNode)
      : 9 + load * 4 + selectedNode;
  const outcome =
    mode === "optimized"
      ? "The system normalizes intake, assigns ownership, routes exceptions, and gives leadership a cleaner intervention path before work disappears."
      : "The system shows pressure building around the selected handoff, with unclear ownership, slower response timing, and risk that leadership sees too late.";
  const comparisonRows = [
    ["Operating score", `${operatingScore}/100`],
    ["Work leakage", `${leakageRate}%`],
    ["Response window", `${responseWindow}h`],
    ["Unresolved risk", `${visibleRisk}`],
  ];
  const activeNodeNotes = nodeNotes[active.id] ?? active.nodes;
  const visualModel = visualModels[active.id] ?? "Operating Model";

  return (
    <div className="workflow-preview-shell">
      <div
        className="workflow-preview-selector"
        aria-label="Workflow preview choices"
      >
        {previews.map((preview) => (
          <button
            key={preview.id}
            type="button"
            className={preview.id === active.id ? "is-active" : ""}
            onClick={() => {
              setActiveId(preview.id);
              setSelectedNode(2);
              setLoad(2);
            }}
          >
            <span>{preview.button}</span>
            <small>{preview.title}</small>
          </button>
        ))}
      </div>

      <div className="workflow-preview-console">
        <div className="workflow-console-header">
          <div>
            <p>Live Operational Preview</p>
            <h3>{active.title}</h3>
          </div>
          <div className="workflow-mode-toggle" aria-label="Preview mode">
            <button
              type="button"
              className={mode === "current" ? "is-active" : ""}
              onClick={() => setMode("current")}
            >
              Current state
            </button>
            <button
              type="button"
              className={mode === "optimized" ? "is-active" : ""}
              onClick={() => setMode("optimized")}
            >
              Optimized state
            </button>
          </div>
        </div>

        <div className="workflow-preview-builder-note">
          <p>{active.goal}</p>
          <span>
            Scenario input: {pressureLabel.toLowerCase()} load,{" "}
            {selectedFailure.toLowerCase()}, {mode.replace("-", " ")} model.
          </span>
        </div>

        <div className="workflow-end-state-panel">
          <span>End state</span>
          <strong>{active.endState}</strong>
          <p>{active.outcome}</p>
        </div>

        <div className="workflow-system-surface">
          <div
            className={`workflow-map workflow-map--${mode} workflow-map--${active.id}`}
          >
            <div className="workflow-map-label">{visualModel}</div>
            {active.nodes.map((node, index) => {
              const isSelected = index === selectedNode;
              const isDelayed =
                mode === "current" &&
                (index === 2 || index === 3 || (load > 2 && index === 4));

              return (
                <button
                  key={node}
                  type="button"
                  className={`${isSelected ? "is-selected" : ""} ${isDelayed ? "is-delayed" : ""}`}
                  onClick={() => setSelectedNode(index)}
                >
                  <span>{index + 1}</span>
                  <strong>{node}</strong>
                  <em>{activeNodeNotes[index]}</em>
                  <small>
                    {isDelayed
                      ? "Pressure visible"
                      : mode === "optimized"
                        ? "Routed"
                        : "In motion"}
                  </small>
                </button>
              );
            })}
          </div>

          <aside className="workflow-diagnostic-panel">
            <div className="workflow-builder-score">
              <span>Operating Score</span>
              <strong>{operatingScore}</strong>
              <div>
                <i style={{ width: `${operatingScore}%` }} />
              </div>
            </div>

            <div className="workflow-diagnostic-status">
              <span>Operational load</span>
              <strong>{pressureLabel}</strong>
              <input
                aria-label="Simulate operational load"
                type="range"
                min="0"
                max="3"
                value={load}
                onChange={(event) => setLoad(Number(event.target.value))}
              />
            </div>

            <div className="workflow-metric-grid">
              {comparisonRows.map(([label, value]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="workflow-failure-list">
              <span>Exposed friction</span>
              {active.failures.map((failure, index) => (
                <button
                  key={failure}
                  type="button"
                  onClick={() =>
                    setSelectedNode((index + 2) % active.nodes.length)
                  }
                >
                  {failure}
                </button>
              ))}
            </div>
          </aside>
        </div>

        <div className="workflow-builder-readout">
          <div>
            <span>{mode === "optimized" ? "Optimized path" : "Current path"}</span>
            <strong>{selectedWorkflowNode}</strong>
          </div>
          <p>{outcome}</p>
        </div>

        <div className="workflow-action-row">
          {active.actions.map((action, index) => (
            <button
              type="button"
              key={action}
              onClick={() => {
                const normalizedAction = action.toLowerCase();

                if (
                  normalizedAction.includes("compare") ||
                  normalizedAction.includes("reroute") ||
                  normalizedAction.includes("watch") ||
                  normalizedAction.includes("structured")
                ) {
                  setMode("optimized");
                }

                if (
                  normalizedAction.includes("break") ||
                  normalizedAction.includes("miss") ||
                  normalizedAction.includes("overload") ||
                  normalizedAction.includes("heavier") ||
                  normalizedAction.includes("trigger")
                ) {
                  setMode("current");
                }

                setSelectedNode(
                  (selectedNode + index + 1) % active.nodes.length,
                );
                setLoad(Math.min(3, Math.max(1, index)));
              }}
            >
              {action}
            </button>
          ))}
        </div>

        <div className="workflow-intelligence-row">
          <blockquote>{active.tension}</blockquote>
          <div>
            {active.techniques.slice(0, 6).map((technique) => (
              <span key={technique}>{technique}</span>
            ))}
          </div>
        </div>

        <div className="workflow-preview-cta">
          <Link href="/contact">{active.primaryCta}</Link>
          <Link href="/control-layer">{active.secondaryCta}</Link>
        </div>
      </div>
    </div>
  );
}
