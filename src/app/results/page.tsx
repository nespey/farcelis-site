import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.results);

const proofFrames = [
  "Third-party recognition makes the signal visible.",
  "Recommendations show how the work feels to real operators.",
  "Proof stays client-safe, specific, and grounded in execution.",
];

const recommendationCards = [
  {
    source: "Operating leader recommendation",
    context: "CityGov roundtable on AI literacy for educational and organizational leaders",
    quote:
      "The work translated complex AI concepts into actionable guidance, with a clear command of ethical implementation, strategic adoption, and responsible AI leadership.",
    tags: ["Ethical AI", "Strategic adoption", "Thought leadership"],
  },
  {
    source: "Startup operations engagement",
    context: "CRM organization, research, enrichment, and outreach preparation",
    quote:
      "The engagement brought structure to a significant amount of CRM and research work, with clear communication, accuracy, and quality throughout the process.",
    tags: ["CRM operations", "Detail oriented", "Clear communicator"],
  },
  {
    source: "Executive support engagement",
    context: "Vendor sourcing, urgency, and operational follow-through",
    quote:
      "The support was dependable, urgent, and mission-focused, with strong attention to detail and a clear commitment to the work.",
    tags: ["Operational support", "Sense of urgency", "Mission focus"],
  },
  {
    source: "Senior operations recommendation",
    context: "Organizational assessment and implementation",
    quote:
      "The work showed strong problem-solving, organizational assessment, implementation discipline, and team-building ability under pressure.",
    tags: ["Problem solving", "Assessment", "Implementation"],
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
    title: "CityGov thought leadership",
    label: "AI literacy in public-service workflows",
    body:
      "Published AI literacy work connects artificial intelligence to civic decision-making, public trust, ethical discernment, governance, and practical local-government workflows.",
    href: "https://www.citygov.com/article/ai-literacy-for-all-from-city-halls-to-classrooms-to-kitchen-tables",
  },
];

const proofSignals = [
  {
    value: "5.0",
    label: "Rated project feedback",
    body: "Proof can show quality without inventing performance metrics or overstating claims.",
  },
  {
    value: "4",
    label: "Recommendation patterns",
    body: "Recurring themes include clarity, quality, detail, urgency, and operational judgment.",
  },
  {
    value: "0",
    label: "Client details exposed",
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

const proofPrinciples = [
  "Use anonymized testimonials when public names are not necessary.",
  "Lead with recognized credibility, then support it with specific proof themes.",
  "Separate proof from product mockups so the page does not feel like another feature demo.",
  "Avoid inflated percentages unless they are verified and safe to publish.",
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Results and Proof"
        title="Proof should make Farcelis feel credible before the first conversation."
        description="This page frames recognition, recommendations, operating evidence, and client-safe trust signals without exposing private names, sensitive work, or inflated claims."
        asideTitle="Proof Posture"
        asideItems={[
          "Recognition first",
          "Anonymized testimonials",
          "Specific proof themes",
          "No repeated dashboard mockups",
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-3">
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

      <Reveal delayMs={100}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[#9f412c]">Public Recognition</p>
              <h2 className="section-title mt-5 text-slate-950">
                External proof belongs at the top of the story.
              </h2>
              <p className="mt-6 max-w-[680px] text-lg leading-8 text-slate-600">
                Digital Reference, FOX 13 Tampa Bay, and CityGov provide public credibility signals around AI consulting, workforce relevance, AI literacy, and ethical implementation. Those signals should lead the page before private recommendations appear.
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

            <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#fff7ee,#ffffff)] p-5 shadow-[0_28px_64px_rgba(15,23,42,0.1)]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] border border-slate-200 bg-white">
                <Image
                  src="/images/proof/digital-reference-tampa-2025.png"
                  alt="Digital Reference AI and ML Consultants recognition"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-5">
                <p className="eyebrow text-[#9f412c]">Featured Recognition</p>
                <h3 className="mt-3 text-[1.65rem] font-semibold tracking-[-0.05em] text-slate-950">
                  Featured by Digital Reference in AI &amp; ML Consultants Making Things Happen in Tampa.
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Digital Reference highlighted practical AI adoption, customized AI systems, operational precision, process optimization, automation frameworks, and ethical deployment as part of the Farcelis signal.
                </p>
                <a
                  href="https://www.digitalreference.co/insights/engineering-professionals/best-ai-ml-consultants-in-tampa"
                  className="mt-5 inline-flex text-sm font-semibold text-[#9f412c]"
                >
                  View recognition
                </a>
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
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {item.title}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                  <div className="mt-6 text-sm font-semibold text-[#9f412c]">Open source</div>
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
                Testimonials belong here when they are anonymized, specific, and tied to operating behavior.
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
                This section replaces the dashboard with a cleaner proof ledger: what Farcelis has been trusted to support, and what patterns clients repeatedly point back to.
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

      <Reveal delayMs={240}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Proof Standards</p>
              <h2 className="section-title mt-5 text-white">
                The results page should feel trustworthy because it is disciplined.
              </h2>
            </div>
            <div className="grid gap-3">
              {proofPrinciples.map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 lg:grid-cols-[78px_minmax(0,1fr)] ${index === 1 ? "lg:translate-x-8" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <div className="text-2xl font-medium tracking-[-0.04em] text-slate-200">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
