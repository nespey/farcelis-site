import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.results);

const proofFrames = [
  "Public recognition confirms the signal.",
  "Recommendations show how the work lands with operators.",
  "Published thinking shows depth beyond the engagement.",
];

const recommendationCards = [
  {
    source: "Operating leader recommendation",
    context: "AI literacy roundtable for education and organizational leadership teams",
    quote:
      "The session turned AI from an abstract risk into a practical leadership conversation: what teams can use, where judgment belongs, and how adoption can stay ethical.",
    result:
      "Leaders left with a clearer shared vocabulary for AI use, implementation risk, and responsible adoption inside their organizations.",
    tags: ["AI literacy", "Ethical rollout", "Leadership alignment"],
  },
  {
    source: "Startup operations engagement",
    context: "CRM organization, research, enrichment, and outreach preparation",
    quote:
      "The engagement cleaned up a high-volume CRM and research workload so outreach could move from scattered records into usable, segmented action.",
    result:
      "The team gained cleaner account intelligence, better list quality, and a more dependable path from research to outreach execution.",
    tags: ["CRM cleanup", "Research enrichment", "Outbound readiness"],
  },
  {
    source: "Executive support engagement",
    context: "Vendor sourcing, urgent coordination, and executive follow-through",
    quote:
      "The support took time-sensitive vendor and coordination work off the executive desk without losing urgency, detail, or accountability.",
    result:
      "The organization had faster options, cleaner follow-up, and fewer loose ends during a compressed decision window.",
    tags: ["Vendor sourcing", "Executive support", "Follow-through"],
  },
  {
    source: "Senior operations recommendation",
    context: "Organizational assessment and implementation",
    quote:
      "The work moved beyond observation into implementation: diagnosing operating gaps, shaping the team response, and helping the organization act under pressure.",
    result:
      "Leadership had a clearer view of where coordination was breaking down and a more practical path for rebuilding execution discipline.",
    tags: ["Operating assessment", "Team response", "Implementation discipline"],
  },
];

const publicProof = [
  {
    title: "Digital Reference recognition",
    label: "Best AI & ML Consultants in Tampa",
    body:
      "Farcelis leadership was featured in a Tampa-area AI and machine learning consultant roundup focused on practical AI adoption, customized AI systems, operational precision, and ethical scaling.",
    href: "https://www.digitalreference.co/insights/engineering-professionals/best-ai-ml-consultants-in-tampa",
  },
  {
    title: "FOX 13 Tampa Bay interview",
    label: "AI and workforce relevance",
    body:
      "Local news coverage positioned Farcelis in the public AI conversation around workforce change, better questions, responsible tool use, judgment, ethics, and context.",
    href: "https://www.fox13news.com/news/career-coach-ai-consultants-tips-relevant-age/",
  },
  {
    title: "Public-sector AI publishing",
    label: "AI literacy in public-service workflows",
    body:
      "Published AI literacy work connects artificial intelligence to civic decision-making, public trust, ethical discernment, governance, and practical local-government workflows.",
    href: "https://www.citygov.com/article/ai-literacy-for-all-from-city-halls-to-classrooms-to-kitchen-tables",
  },
];

const proofSignals = [
  {
    value: "Rated",
    label: "Project feedback",
    body: "Quality signals come from recommendation patterns, not invented performance claims.",
  },
  {
    value: "Clear",
    label: "Recommendation patterns",
    body: "Recurring themes include clarity, quality, detail, urgency, and operational judgment.",
  },
  {
    value: "Clean",
    label: "Client-safe proof",
    body: "Specific names, organizations, and sensitive project details stay out of the public proof layer.",
  },
];

const engagementProof = [
  "AI literacy and adoption guidance",
  "CRM organization and enrichment",
  "Operational documentation systems",
  "Vendor sourcing and executive support",
  "Organizational assessment",
  "Implementation discipline under pressure",
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Results and Proof"
        title="Proof that Farcelis can bring structure to complex work."
        description="This page frames recognition, recommendations, operating evidence, and client-safe trust signals without exposing private names, sensitive work, or inflated claims."
        asideTitle="Proof Posture"
        asideItems={[
          "Recognition first",
          "Client-safe testimonials",
          "Public-source links",
          "Published AI thinking",
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-3">
            {proofFrames.map((item) => (
              <div
                key={item}
                className="grid gap-4 border-l border-[color:var(--color-accent)]/24 py-7 pl-6 lg:grid-cols-[minmax(0,1fr)]"
              >
                <div className="text-[2rem] font-semibold tracking-[-0.05em] text-white lg:text-[2.6rem]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div>
              <p className="eyebrow text-[#9f412c]">Public Recognition</p>
              <h2 className="section-title mt-5 text-slate-950">
                External proof belongs at the top of the story.
              </h2>
              <p className="mt-6 max-w-[680px] text-lg leading-8 text-slate-600">
                Independent recognition, local media coverage, and public-sector AI publishing give Farcelis a credible proof base before private recommendations appear.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {proofSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                  >
                    <div className="text-3xl font-semibold tracking-[-0.06em] text-slate-950">
                      {signal.value}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-[#9f412c]">{signal.label}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{signal.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light pt-0">
          <div className="section-inner">
            <div className="grid gap-4 lg:grid-cols-3">
              {publicProof.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {item.title}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                  <div className="mt-6 text-sm font-semibold text-[#9f412c]">Open source in new tab</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={160}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div className="max-w-[880px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Recommendation Themes</p>
              <h2 className="section-title mt-5 text-white">
                Recommendations belong here because they reveal how the work feels in practice.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {recommendationCards.map((card, index) => (
                <article
                  key={card.source}
                  className={`rounded-[28px] border px-6 py-6 ${
                    index === 0
                      ? "border-[color:var(--color-accent)]/22 bg-[linear-gradient(180deg,rgba(242,139,91,0.15),rgba(255,255,255,0.035))]"
                      : "border-white/8 bg-white/[0.04]"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                      {card.source}
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-semibold text-slate-200">
                      5.0 signal
                    </div>
                  </div>
                  <p className="mt-5 text-2xl font-medium italic leading-[1.55] tracking-[-0.035em] text-slate-100">
                    “{card.quote}”
                  </p>
                  <p className="mt-5 text-sm leading-6 text-slate-400">{card.context}</p>
                  <p className="mt-4 rounded-[18px] border border-cyan-100/10 bg-cyan-100/6 px-4 py-4 text-sm leading-7 text-slate-200">
                    {card.result}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-100/12 bg-cyan-100/6 px-3 py-1.5 text-sm font-semibold text-cyan-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={200}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">Proof Ledger</p>
              <h2 className="section-title mt-5 text-slate-950">
                Show the kinds of work that have produced trust without exposing client details.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-600">
                Proof is strongest when it shows what Farcelis has been trusted to support and what clients repeatedly point back to.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {engagementProof.map((item) => (
                <div
                  key={item}
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-5 py-5 text-lg font-semibold tracking-[-0.035em] text-slate-950 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
