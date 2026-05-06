"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type InputMap = {
  id: string;
  input: string;
  detail: string;
  output: string;
  outputDetail: string;
};

type OutputAsset = {
  id: string;
  label: string;
  input: string;
  produces: string;
  use: string;
  value: string;
};

const inputMaps: InputMap[] = [
  {
    id: "sop",
    input: "Client SOP",
    detail: "Dense process instructions, exceptions, roles, and handoff rules.",
    output: "Onboarding Module",
    outputDetail: "A sequenced learning asset with overview, steps, examples, and practical checks.",
  },
  {
    id: "workflow",
    input: "Workflow Notes",
    detail: "Scattered notes about routing, tools, timing, ownership, and dependencies.",
    output: "System Map",
    outputDetail: "A clean operating map showing intake, movement, owner transitions, and launch path.",
  },
  {
    id: "objectives",
    input: "Learning Objectives",
    detail: "Two or three outcomes the team must understand before rollout.",
    output: "Microlearning Path",
    outputDetail: "Short sections that turn objectives into practical operating lessons.",
  },
  {
    id: "role",
    input: "Role Context",
    detail: "Audience, responsibility, operating pressure, internal language, and workflow exposure.",
    output: "Role-Based Rollout Plan",
    outputDetail: "A launch sequence that tells each role what changes, what to practice, and what to own.",
  },
  {
    id: "requirements",
    input: "Client Requirements",
    detail: "Implementation constraints, approvals, dependencies, deadlines, and launch expectations.",
    output: "Implementation Playbook",
    outputDetail: "A structured plan with rollout phases, assets, checkpoints, and reusable documentation.",
  },
];

const pipelineStages = [
  ["Source Material", "Upload or paste SOPs, process docs, workflow notes, and client requirements."],
  ["Context Mapping", "Define audience, role, learning objective, tone, operating environment, and rollout need."],
  ["Module Drafting", "Generate onboarding modules with headers, steps, examples, and plain-language explanations."],
  ["Knowledge Checks", "Create practical checks that confirm people understand what to do next."],
  ["Rollout Assets", "Produce launch documentation, implementation plans, workflow maps, and enablement materials."],
  ["Reusable Library", "Save refined prompts, templates, and asset structures for future deployments."],
];

const outputAssets: OutputAsset[] = [
  {
    id: "module",
    label: "Onboarding Module",
    input: "Client SOP, role context, and 2 to 3 learning objectives.",
    produces:
      "A structured onboarding module with overview, microlearning sections, practical examples, and knowledge checks.",
    use: "Use when a team needs to learn a process quickly without reading a dense SOP.",
    value: "Turns documentation into usable training.",
  },
  {
    id: "rollout",
    label: "Rollout Plan",
    input: "Client requirements, launch constraints, owners, dependencies, and timing.",
    produces: "A phased rollout sequence with checkpoints, asset needs, owner prompts, and launch readiness signals.",
    use: "Use when implementation needs a path before the build or change rollout begins.",
    value: "Stops the team from inventing launch structure from scratch.",
  },
  {
    id: "map",
    label: "System Map",
    input: "Workflow notes, tool stack details, handoffs, approvals, and exception paths.",
    produces: "A visual operating map showing how work enters, routes, changes hands, and lands.",
    use: "Use when the process is known but not visible enough to train or launch cleanly.",
    value: "Turns scattered process knowledge into an implementation blueprint.",
  },
  {
    id: "check",
    label: "Knowledge Check",
    input: "Module objective, expected behavior, common mistakes, and role responsibilities.",
    produces: "Practical questions, suggested answers, and next-step checks tied to real workflow behavior.",
    use: "Use when leaders need to know whether people understand what to do next.",
    value: "Creates reinforcement instead of passive content completion.",
  },
  {
    id: "path",
    label: "Microlearning Path",
    input: "Audience, process complexity, learning objectives, and rollout urgency.",
    produces: "A short sequence of lessons that breaks dense operating material into usable sections.",
    use: "Use when the source document is too large for effective onboarding.",
    value: "Makes implementation learning lighter without stripping out operating detail.",
  },
  {
    id: "docs",
    label: "Launch Documentation",
    input: "SOPs, requirements, stakeholder notes, system constraints, and operating language.",
    produces: "Launch brief, enablement notes, process summary, workflow references, and implementation next steps.",
    use: "Use when the client needs the rollout to feel organized and repeatable.",
    value: "Creates a launch kit from knowledge the client already has.",
  },
  {
    id: "template",
    label: "Reusable Template",
    input: "Refined output, approved language, process pattern, and asset type.",
    produces: "Reusable prompt structure and asset framework for future client deployments.",
    use: "Use when a successful implementation pattern should become repeatable.",
    value: "Compounds value after each project instead of throwing the draft away.",
  },
];

const beforeItems = [
  "Dense SOPs nobody reads",
  "Notes scattered across docs",
  "Rollout plans built manually",
  "Training assets created from scratch",
  "Implementation starts slowly",
  "Knowledge disappears after launch",
];

const afterItems = [
  "Structured onboarding modules",
  "Clear rollout sequencing",
  "Practical knowledge checks",
  "Reusable implementation assets",
  "Faster first drafts",
  "Cleaner launch readiness",
];

export function RapidRampGenerator() {
  const [activeInputId, setActiveInputId] = useState(inputMaps[0].id);
  const [activeAssetId, setActiveAssetId] = useState(outputAssets[0].id);

  const activeInput = useMemo(
    () => inputMaps.find((item) => item.id === activeInputId) ?? inputMaps[0],
    [activeInputId]
  );
  const activeAsset = useMemo(
    () => outputAssets.find((item) => item.id === activeAssetId) ?? outputAssets[0],
    [activeAssetId]
  );

  return (
    <main className="rapid-page">
      <section className="rapid-hero">
        <div className="section-inner">
          <div className="rapid-hero-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">RapidRamp Generator</p>
            <h1>Your process knowledge is not missing. It is trapped.</h1>
            <p>
              SOPs, notes, client documents, and implementation requirements usually contain what teams
              need, but not in a form anyone can onboard from, train with, or launch against.
            </p>
          </div>

          <div className="rapid-transform-console">
            <article className="rapid-input-stack">
              <div className="rapid-console-heading">
                <span>Scattered Inputs</span>
                <strong>{activeInput.input}</strong>
              </div>
              <div className="rapid-input-buttons">
                {inputMaps.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === activeInput.id ? "is-active" : ""}
                    onClick={() => setActiveInputId(item.id)}
                  >
                    {item.input}
                  </button>
                ))}
              </div>
              <p>{activeInput.detail}</p>
            </article>

            <article className="rapid-engine">
              <span>RapidRamp Generator</span>
              <div className="rapid-ramp-lines">
                <i />
                <i />
                <i />
              </div>
              <ul>
                <li>Structures source material</li>
                <li>Extracts the operating path</li>
                <li>Drafts launch assets</li>
                <li>Prepares reusable documentation</li>
              </ul>
            </article>

            <article className="rapid-output-stack">
              <div className="rapid-console-heading">
                <span>Launch-Ready Output</span>
                <strong>{activeInput.output}</strong>
              </div>
              <p>{activeInput.outputDetail}</p>
              <div className="rapid-output-kit">
                <div className="is-highlighted">{activeInput.output}</div>
                <div>Knowledge Check</div>
                <div>Rollout Sequence</div>
                <div>Reusable Template</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="rapid-problem-section">
        <div className="section-inner rapid-problem-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">The Real Problem</p>
            <h2>Most implementations do not stall because teams lack information. They stall because the information is unusable.</h2>
          </div>
          <div className="rapid-problem-copy">
            <p>
              SOPs are too dense for onboarding. Process notes are not sequenced for rollout. Client
              requirements are scattered across documents, and every project loses time turning knowledge
              into usable training and implementation material.
            </p>
            <p>
              RapidRamp turns existing knowledge into structured first-draft implementation assets so the
              team can refine, launch, and reuse instead of starting over.
            </p>
          </div>
        </div>
      </section>

      <section className="rapid-pipeline-section">
        <div className="section-inner">
          <div className="rapid-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">How RapidRamp Works</p>
            <h2>Source knowledge becomes an implementation assembly line.</h2>
          </div>
          <div className="rapid-pipeline">
            {pipelineStages.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rapid-builder-section">
        <div className="section-inner">
          <div className="rapid-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">Output Builder</p>
            <h2>What can RapidRamp generate?</h2>
          </div>
          <div className="rapid-builder-console">
            <div className="rapid-asset-tabs">
              {outputAssets.map((asset) => (
                <button
                  key={asset.id}
                  type="button"
                  className={asset.id === activeAsset.id ? "is-active" : ""}
                  onClick={() => setActiveAssetId(asset.id)}
                >
                  {asset.label}
                </button>
              ))}
            </div>
            <div className="rapid-asset-output">
              <h3>{activeAsset.label}</h3>
              <div className="rapid-asset-grid">
                <article>
                  <span>Input needed</span>
                  <p>{activeAsset.input}</p>
                </article>
                <article>
                  <span>Output</span>
                  <p>{activeAsset.produces}</p>
                </article>
                <article>
                  <span>Use when</span>
                  <p>{activeAsset.use}</p>
                </article>
                <article>
                  <span>Why it matters</span>
                  <p>{activeAsset.value}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rapid-before-after-section">
        <div className="section-inner rapid-before-after">
          <article>
            <span>Before RapidRamp</span>
            {beforeItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </article>
          <article>
            <span>After RapidRamp</span>
            {afterItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </article>
        </div>
      </section>

      <section className="rapid-refinement-section">
        <div className="section-inner rapid-refinement-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Human Refinement Matters</p>
            <h2>AI drafts the structure. Operators make it real.</h2>
          </div>
          <div className="rapid-refinement-card">
            <p>
              RapidRamp creates the first structured version from source material. Farcelis then refines
              it for client nuance, brand voice, operating reality, internal language, and actual
              implementation steps.
            </p>
            <p>
              That refinement protects against generic output and keeps the system grounded in real
              client work, so the final asset is launch-ready instead of merely generated.
            </p>
            <Link href="/contact">Turn Our Documents Into Launch Structure</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
