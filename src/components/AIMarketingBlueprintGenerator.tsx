"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type GrowthSignal = {
  id: string;
  label: string;
  creates: string[];
  feeds: string[];
  effect: string;
};

type Symptom = {
  text: string;
  cause: string;
};

const growthSignals: GrowthSignal[] = [
  {
    id: "seo",
    label: "SEO",
    creates: ["discovery momentum", "search authority", "inbound intent capture"],
    feeds: ["content amplification", "campaign targeting", "CRM enrichment"],
    effect: "Compounding organic visibility and higher-intent lead flow.",
  },
  {
    id: "content",
    label: "Content",
    creates: ["audience education", "trust repetition", "positioning clarity"],
    feeds: ["SEO clusters", "social proof", "email nurture"],
    effect: "Repeated market contact without forcing every touchpoint into a sales motion.",
  },
  {
    id: "crm",
    label: "CRM",
    creates: ["lead stage intelligence", "follow-up memory", "pipeline visibility"],
    feeds: ["campaign refinement", "sales routing", "reporting loops"],
    effect: "Signals stop disappearing after attention turns into interest.",
  },
  {
    id: "social",
    label: "Social",
    creates: ["attention velocity", "message testing", "engagement clusters"],
    feeds: ["content angles", "campaign timing", "audience segmentation"],
    effect: "Momentum becomes observable instead of treated as surface activity.",
  },
  {
    id: "campaigns",
    label: "Campaigns",
    creates: ["offer movement", "conversion pressure", "timed audience activation"],
    feeds: ["CRM actions", "email paths", "reporting signals"],
    effect: "Growth activity gains a controlled path from visibility to response.",
  },
  {
    id: "email",
    label: "Email",
    creates: ["nurture rhythm", "trust reinforcement", "next-step prompts"],
    feeds: ["CRM stage movement", "content reuse", "conversion recovery"],
    effect: "Attention is kept alive after the first moment of interest.",
  },
  {
    id: "reporting",
    label: "Reporting",
    creates: ["optimization evidence", "channel confidence", "message feedback"],
    feeds: ["budget decisions", "content priority", "campaign adjustments"],
    effect: "Marketing stops feeling busy and starts showing which signals deserve more pressure.",
  },
  {
    id: "automation",
    label: "Automation",
    creates: ["timely routing", "behavior triggers", "repeatable follow-through"],
    feeds: ["lead handling", "sales alerts", "nurture sequences"],
    effect: "Signal movement continues without relying on memory or manual chasing.",
  },
];

const symptoms: Symptom[] = [
  {
    text: "Traffic exists, but conversion quality is weak.",
    cause: "Visibility is not connected to audience intent, offer clarity, and CRM qualification.",
  },
  {
    text: "Content is being produced, but momentum never compounds.",
    cause: "Content lacks a search cluster, reuse path, cadence, and downstream campaign logic.",
  },
  {
    text: "Social engagement does not connect to pipeline movement.",
    cause: "Engagement signals are not being routed into CRM intelligence or follow-up actions.",
  },
  {
    text: "CRM data exists, but nobody operationalizes it.",
    cause: "Lead stage, source, behavior, and follow-up signals are not shaping campaign decisions.",
  },
  {
    text: "Campaigns generate activity, but visibility breaks down.",
    cause: "Campaign logic is disconnected from reporting, attribution, and sales handoff rules.",
  },
  {
    text: "Marketing feels busy, but growth still feels unpredictable.",
    cause: "The functions are active, but the system is not reinforcing itself.",
  },
];

const fragments = ["SEO", "Blogs", "Email", "CRM", "Campaigns", "Social", "Reporting", "Lead Gen", "Analytics", "Automation"];

export function AIMarketingBlueprintGenerator() {
  const [activeSignalId, setActiveSignalId] = useState(growthSignals[0].id);
  const [activeSymptomIndex, setActiveSymptomIndex] = useState(0);
  const activeSignal = useMemo(
    () => growthSignals.find((signal) => signal.id === activeSignalId) ?? growthSignals[0],
    [activeSignalId]
  );

  return (
    <main className="growth-page">
      <section className="growth-hero">
        <div className="section-inner growth-hero-grid">
          <div className="growth-hero-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">AI Marketing Blueprint Generator</p>
            <h1>Attention is not random. Growth is not accidental.</h1>
            <p>
              Most organizations create content. Few build systems that compound visibility, audience
              trust, search momentum, CRM intelligence, and revenue movement together.
            </p>
            <Link href="/contact">Architect Our Growth System</Link>
          </div>

          <div className="growth-ecosystem" aria-label="Living growth signal ecosystem">
            <svg className="growth-hero-traces" viewBox="0 0 720 560" aria-hidden="true">
              <path d="M80 260 C190 80 310 120 380 220 S530 370 650 185" />
              <path d="M90 365 C210 270 310 330 420 285 S555 160 655 330" />
              <path d="M150 145 C260 250 360 235 480 205 S590 245 640 415" />
              <path d="M170 430 C270 405 330 315 420 350 S565 465 645 390" />
            </svg>
            {["SEO", "Content", "Social", "CRM", "Campaigns", "Reporting", "Email", "Automation"].map((node, index) => (
              <button
                key={node}
                type="button"
                className={`growth-node node-${index + 1} ${node.toLowerCase() === activeSignal.id ? "is-active" : ""}`}
                onMouseEnter={() => setActiveSignalId(node.toLowerCase() === "content" ? "content" : node.toLowerCase())}
                onFocus={() => setActiveSignalId(node.toLowerCase() === "content" ? "content" : node.toLowerCase())}
              >
                {node}
              </button>
            ))}
            <div className="growth-hero-readout">
              <span>Live Signal</span>
              <strong>{activeSignal.label}</strong>
              <small>{activeSignal.effect}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-fragment-section">
        <div className="section-inner growth-fragment-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">The Real Problem</p>
            <h2>Most marketing systems are operationally disconnected.</h2>
          </div>
          <div className="growth-fragment-console">
            <div className="growth-fragments">
              {fragments.map((fragment) => (
                <span key={fragment}>{fragment}</span>
              ))}
            </div>
            <div className="growth-system-line">
              <strong>The Farcelis Growth System</strong>
              <p>Messaging, search, content, campaigns, CRM, reporting, and follow-through become one operating loop.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-engine-section">
        <div className="section-inner">
          <div className="growth-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">Build A Live Signal Engine</p>
            <h2>How growth compounds.</h2>
          </div>
          <div className="growth-signal-console">
            <div className="growth-signal-tabs">
              {growthSignals.map((signal) => (
                <button
                  key={signal.id}
                  type="button"
                  className={signal.id === activeSignal.id ? "is-active" : ""}
                  onClick={() => setActiveSignalId(signal.id)}
                >
                  {signal.label}
                </button>
              ))}
            </div>
            <div className="growth-signal-output">
              <div className="growth-output-core">
                <span>Selected Signal</span>
                <strong>{activeSignal.label}</strong>
              </div>
              <article>
                <span>Creates</span>
                {activeSignal.creates.map((item) => <p key={item}>{item}</p>)}
              </article>
              <article>
                <span>Feeds</span>
                {activeSignal.feeds.map((item) => <p key={item}>{item}</p>)}
              </article>
              <article>
                <span>Business effect</span>
                <p>{activeSignal.effect}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-psychology-section">
        <div className="section-inner growth-psychology-grid">
          <div className="growth-attention-map">
            <div className="attention-wave wave-a" />
            <div className="attention-wave wave-b" />
            <div className="attention-wave wave-c" />
            {["Attention spike", "Engagement decay", "Trust reinforcement", "Content resonance", "Signal saturation", "Conversion timing"].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Audience Psychology Layer</p>
            <h2>Growth systems fail when they ignore human attention behavior.</h2>
            <p>
              People scroll emotionally before logically. Trust compounds through consistency, search
              intent reveals timing, and engagement signals expose positioning gaps. Content velocity
              without structure creates noise.
            </p>
          </div>
        </div>
      </section>

      <section className="growth-quote-section">
        <div className="section-inner growth-quote-card">
          <div className="growth-quote-image">
              <Image
                src="/images/team/celeste-growth-signal-quote.jpeg"
                alt="Celeste Hartley, Chief Marketing Officer"
                width={896}
                height={1088}
                priority
              />
          </div>
          <div>
            <span>Growth Architecture Perspective</span>
            <blockquote>
              “A blueprint becomes real when audience, offer, channel behavior, content inventory, and CRM handoffs are mapped into one delivery path.”
            </blockquote>
            <p>Celeste Hartley</p>
            <small>Chief Marketing Officer</small>
          </div>
        </div>
      </section>

      <section className="growth-architecture-section">
        <div className="section-inner">
          <div className="growth-section-heading">
            <p className="eyebrow text-[color:var(--color-accent)]">Visualize The Operating System</p>
            <h2>The Farcelis Growth Architecture reinforces itself.</h2>
          </div>
          <div className="growth-orbit-system">
            <div className="growth-orbit-core">Audience Intelligence</div>
            {["SEO", "Content", "Social", "Campaigns", "CRM", "Reporting", "Automation", "Optimization", "Follow-through"].map((item, index) => (
              <span key={item} className={`orbit-${index + 1}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-recognition-section">
        <div className="section-inner growth-recognition-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Executive Recognition</p>
            <h2>You may already be seeing the symptoms.</h2>
          </div>
          <div className="growth-symptom-console">
            <div className="growth-symptom-list">
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
            <div className="growth-hidden-cause">
              <span>Hidden operational cause</span>
              <p>{symptoms[activeSymptomIndex].cause}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-final-quote-section">
        <div className="section-inner growth-final-grid">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">From Signal To Follow-Through</p>
            <h2>Marketing becomes an operating system when the lead can move without friction.</h2>
          </div>
          <aside className="growth-quote-card is-compact">
            <div className="growth-quote-image">
              <Image
                src="/images/team/celeste-growth-ops-quote.jpeg"
                alt="Celeste Hartley, Chief Marketing Officer"
                width={896}
                height={1088}
                priority
              />
            </div>
            <div>
              <span>Operator Note</span>
              <blockquote>
                “Serious growth evaluation starts with the inspection points: site speed, indexing, responsive paths, metadata, campaign logic, measurement loops, and the rules that move a lead to the next action.”
              </blockquote>
              <p>Celeste Hartley</p>
              <small>Chief Marketing Officer</small>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
