import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import Image from "next/image";
import { seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.results);

const proofFrames = [
  "Executive visibility holds under pressure.",
  "Workflow control survives complexity, handoffs, and change.",
  "Delivery governance stays credible without inflated claims or vague metrics.",
];

const credibilitySignals = [
  "Sanitized operating views",
  "Execution-centered proof",
  "Governance under pressure",
  "Client-safe visibility",
];

const sanitizedProofNotes = [
  "Sterilized workspace views show the operating intent without exposing client data.",
  "Results are framed through visibility, routing, and intervention rather than inflated performance claims.",
  "Proof surfaces stay grounded in how the system behaves while work is moving.",
];

const trustQuotes = [
  "Farcelis builds structure where execution used to depend on chasing updates.",
  "Visibility improves when intake, ownership, and follow-through sit inside the same frame.",
  "The signal is disciplined operating control, not inflated automation theater.",
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Results and Proof"
        title="Farcelis frames proof around execution that actually holds."
        description="Proof stays anchored to visibility, control, and governance so the signal remains credible to serious operators."
        asideTitle="Proof Posture"
        asideItems={[
          "No inflated metrics",
          "No implied product usage",
          "Only confirmed relationship language",
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner divide-y divide-white/8 border-y border-white/8">
            {proofFrames.map((item, index) => (
              <div
                key={item}
                className={`grid gap-4 py-7 lg:grid-cols-[88px_minmax(0,1fr)] ${index === 1 ? "lg:translate-x-8" : ""}`}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  0{index + 1}
                </div>
                <div className="text-[2rem] font-semibold tracking-[-0.05em] text-white lg:text-[2.6rem]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[#9f412c]">Sanitized Proof Surface</p>
              <h2 className="section-title mt-5 text-slate-950">
                Proof should show how the work holds, not just who appeared in the room.
              </h2>
              <p className="mt-6 max-w-[680px] text-lg leading-8 text-slate-600">
                Farcelis uses sanitized operating views, decision paths, and workflow control surfaces to explain what stronger execution actually looks like.
              </p>
              <div className="accent-tabs mt-8">
              {credibilitySignals.map((signal) => (
                <div key={signal} className="accent-tab accent-tab-light">
                  {signal}
                </div>
              ))}
            </div>
              <div className="mt-8 space-y-4">
                {sanitizedProofNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-base leading-7 text-slate-700 shadow-[0_16px_34px_rgba(15,23,42,0.06)]"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_24px_52px_rgba(15,23,42,0.1)]">
                <WorkspacePreview compact />
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#fff7ee,#ffffff)] p-5 shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="relative h-[150px] w-[110px] shrink-0 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
                    <Image
                      src="/images/proof/digital-reference-tampa-2025.png"
                      alt="Digital Reference AI and ML Consultants Making Things Happen in Tampa 2025"
                      fill
                      sizes="110px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="eyebrow text-[#9f412c]">Recognition</p>
                    <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.04em] text-slate-950">
                      Featured by Digital Reference in AI &amp; ML Consultants Making Things Happen in Tampa.
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      External recognition belongs in the proof conversation because it reinforces that Farcelis is showing up in the AI and operational systems space with real signal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={180}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <p className="eyebrow text-[color:var(--color-accent)]">Engagement Signals</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {trustQuotes.map((quote, index) => (
                <div
                  key={quote}
                  className={`rounded-[26px] border px-6 py-6 ${
                    index === 1
                      ? "border-[color:var(--color-accent)]/18 bg-[linear-gradient(180deg,rgba(242,139,91,0.14),rgba(255,255,255,0.03))]"
                      : "border-white/8 bg-white/[0.04]"
                  }`}
                >
                  <div className="text-lg leading-8 text-slate-200">{quote}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
