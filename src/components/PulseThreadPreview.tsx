"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type PulseAction =
  | "extract"
  | "decisions"
  | "owners"
  | "follow-up"
  | "workflow"
  | "pulse";

const pulseActions: { id: PulseAction; label: string }[] = [
  { id: "extract", label: "Extract Action Items" },
  { id: "decisions", label: "Clarify Decisions" },
  { id: "owners", label: "Assign Owners" },
  { id: "follow-up", label: "Generate Follow-Up" },
  { id: "workflow", label: "Send to Workflow" },
  { id: "pulse", label: "Create Status Pulse" },
];

const extractionLayers: Record<PulseAction, string[]> = {
  extract: [
    "Action item detected: Finish onboarding checklist",
    "Action item detected: Provision CRM access",
    "Follow-up needed: Friday leadership update",
    "Risk identified: onboarding delay may push launch",
  ],
  decisions: [
    "Decision detected: onboarding launch remains active",
    "Decision clarified: CRM access is a blocker, not a nice-to-have",
    "Decision recap created for leadership review",
    "Unclear item flagged: final checklist owner needs confirmation",
  ],
  owners: [
    "Owner assigned: Sarah owns onboarding checklist",
    "Owner assigned: Marcus owns CRM access request",
    "Leader visibility: Friday update assigned to operations lead",
    "Adoption support required: team needs follow-up behavior reinforced",
  ],
  "follow-up": [
    "Follow-up email drafted for Sarah, Marcus, and leadership",
    "Tone set: operational, concise, owner-specific",
    "Question added: confirm CRM access by Thursday 2 PM",
    "Coaching prompt added: acknowledge blockers before the next meeting",
  ],
  workflow: [
    "Task card created: Client onboarding checklist",
    "CRM access request routed to systems owner",
    "Meeting notes updated with decision recap",
    "Control Layer signal created for onboarding delay",
  ],
  pulse: [
    "Status pulse generated: onboarding at risk",
    "Leadership view updated for Friday",
    "Escalation flag active until CRM access is confirmed",
    "Next checkpoint scheduled before launch risk compounds",
  ],
};

const outputs: Record<PulseAction, { title: string; rows: string[] }> = {
  extract: {
    title: "Action List",
    rows: [
      "Sarah: complete onboarding checklist",
      "Marcus: secure CRM access",
      "Ops lead: prepare Friday update",
    ],
  },
  decisions: {
    title: "Decision Recap",
    rows: [
      "Launch path continues, but onboarding is delayed",
      "CRM access is the active blocker",
      "Leadership needs a written Friday status",
    ],
  },
  owners: {
    title: "Owner Map",
    rows: [
      "Sarah owns checklist completion",
      "Marcus owns systems access",
      "Ops lead owns leadership visibility",
    ],
  },
  "follow-up": {
    title: "Follow-Up Draft",
    rows: [
      "Subject: Onboarding next steps and Friday status",
      "Sarah to confirm checklist status by Thursday",
      "Marcus to confirm CRM access path today",
    ],
  },
  workflow: {
    title: "Workflow Landing Zone",
    rows: [
      "Email draft ready",
      "Task board cards created",
      "CRM access item routed",
      "Control Layer risk signal opened",
    ],
  },
  pulse: {
    title: "Status Pulse",
    rows: [
      "Status: At risk, recoverable",
      "Blocker: CRM access",
      "Next checkpoint: Friday leadership update",
    ],
  },
};

const landingZones = ["Email", "Task board", "CRM", "Meeting notes", "Control Layer", "Leadership status"];

export function PulseThreadPreview() {
  const [activeAction, setActiveAction] = useState<PulseAction>("extract");
  const [sentZones, setSentZones] = useState<string[]>(["Meeting notes"]);

  const activeOutput = outputs[activeAction];
  const activeExtraction = extractionLayers[activeAction];

  const status = useMemo(() => {
    if (activeAction === "pulse") {
      return "Follow-through visible";
    }

    if (activeAction === "workflow") {
      return "Output routed";
    }

    if (activeAction === "follow-up") {
      return "Draft ready";
    }

    return "Meeting captured";
  }, [activeAction]);

  function runAction(action: PulseAction) {
    setActiveAction(action);

    if (action === "workflow") {
      setSentZones(["Email", "Task board", "CRM", "Meeting notes", "Control Layer"]);
    } else if (action === "pulse") {
      setSentZones(["Email", "Task board", "CRM", "Meeting notes", "Control Layer", "Leadership status"]);
    } else if (action === "follow-up") {
      setSentZones(["Email", "Meeting notes"]);
    } else {
      setSentZones(["Meeting notes"]);
    }
  }

  return (
    <section className="pulse-preview-section">
      <div className="section-inner">
        <div className="pulse-preview-intro">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Pulse Thread Preview</p>
            <h2>Meetings create motion. Pulse Thread turns motion into follow-through.</h2>
            <p>
              Decisions should not disappear into notes, memory, or scattered follow-up. Pulse Thread
              captures what matters and gives it a place to move.
            </p>
          </div>
          <div className="pulse-preview-status">
            <span>Assistant state</span>
            <strong>{status}</strong>
            <small>Not a generic chatbot. An operating assistant for after the meeting ends.</small>
          </div>
        </div>

        <div className="pulse-preview-console">
          <div className="pulse-preview-panels">
            <article className="pulse-panel pulse-panel-conversation">
              <div className="pulse-panel-header">
                <span>Panel 1</span>
                <strong>Conversation</strong>
              </div>
              <div className="pulse-transcript">
                <p>
                  <strong>Meeting ended:</strong> Client onboarding is delayed. Sarah owns the
                  checklist. Marcus needs CRM access. Leadership needs a Friday update.
                </p>
                <p>
                  The team agreed the checklist cannot move until CRM access is resolved, but no one
                  confirmed who will send the follow-up.
                </p>
                <p>
                  Pulse Thread listens for the operational thread: decision, owner, blocker, status,
                  and next checkpoint.
                </p>
              </div>
            </article>

            <article className="pulse-panel pulse-panel-assistant">
              <div className="pulse-panel-header">
                <span>Panel 2</span>
                <strong>Pulse Thread Assistant</strong>
              </div>
              <div className="pulse-detection-stack">
                {activeExtraction.map((item) => (
                  <div key={item}>
                    <i />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="pulse-panel pulse-panel-output">
              <div className="pulse-panel-header">
                <span>Panel 3</span>
                <strong>Operating Output</strong>
              </div>
              <div className="pulse-output-card">
                <span>{activeOutput.title}</span>
                {activeOutput.rows.map((row) => (
                  <p key={row}>{row}</p>
                ))}
              </div>
              <div className="pulse-escalation-flag">
                <span>Escalation flag</span>
                <strong>{activeAction === "pulse" || activeAction === "workflow" ? "Active until CRM access clears" : "Pending clarification"}</strong>
              </div>
            </article>
          </div>

          <div className="pulse-action-row">
            {pulseActions.map((action) => (
              <button
                key={action.id}
                type="button"
                className={activeAction === action.id ? "is-active" : ""}
                onClick={() => runAction(action.id)}
              >
                {action.label}
              </button>
            ))}
          </div>

          <div className="pulse-landing-zone">
            <div>
              <span>Workflow landing zone</span>
              <strong>Where the meeting output moves next</strong>
            </div>
            <div className="pulse-zone-grid">
              {landingZones.map((zone) => (
                <span key={zone} className={sentZones.includes(zone) ? "is-active" : ""}>
                  {zone}
                </span>
              ))}
            </div>
          </div>

          <div className="pulse-preview-cta">
            <div>
              <strong>Show us where decisions currently disappear.</strong>
              <span>We will show you what the assistant should catch.</span>
            </div>
            <Link href="/contact">See Pulse Thread For Our Team</Link>
            <Link href="/contact">Map Our Follow-Up Drag</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
