import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.results);

const recommendationCards = [
  {
    source: "CityGov AI literacy roundtable",
    context: "AI Literacy for the Next Generation roundtable with public-sector and education leaders",
    quote:
      "Nathan brought AI down from the cloud and into the room: what leaders can say yes to, where judgment has to stay human, and how teams can adopt AI without losing trust.",
    result:
      "The roundtable gave leaders practical language for AI literacy, ethical use, classroom and workplace readiness, and responsible adoption.",
    tags: ["CityGov roundtable", "AI literacy", "Responsible adoption"],
  },
  {
    source: "Startup operations engagement",
    context: "CRM organization, research, enrichment, and outreach preparation",
    quote:
      "The engagement turned a messy CRM and research backlog into a cleaner operating base for outreach, segmentation, and account follow-through.",
    result:
      "The team moved from scattered records to usable account intelligence, stronger list quality, and a more dependable research-to-outreach path.",
    tags: ["CRM cleanup", "Research enrichment", "Outbound readiness"],
  },
  {
    source: "Executive support engagement",
    context: "Vendor sourcing, urgent coordination, and executive follow-through",
    quote:
      "The support removed time-sensitive vendor and coordination pressure from the executive desk while keeping urgency, detail, and accountability intact.",
    result:
      "Leadership had faster options, cleaner follow-up, and fewer loose ends during a compressed decision window.",
    tags: ["Vendor sourcing", "Executive support", "Follow-through"],
  },
  {
    source: "Senior operations recommendation",
    context: "Organizational assessment and implementation",
    quote:
      "The work did not stop at observation. It diagnosed the operating gaps, shaped the team response, and helped the organization move under pressure.",
    result:
      "Leadership got a clearer view of where coordination was breaking down and a practical route back to execution discipline.",
    tags: ["Operating assessment", "Team response", "Implementation discipline"],
  },
];

const publicProof = [
  {
    title: "Ranked Signal",
    label: "Named among Tampa AI and ML consultants",
    body:
      "A third-party Tampa roundup recognized Farcelis leadership for practical AI adoption, customized systems, operational precision, and ethical scaling.",
    href: "https://www.digitalreference.co/insights/engineering-professionals/best-ai-ml-consultants-in-tampa",
  },
  {
    title: "Media Proof",
    label: "FOX 13 Tampa Bay AI workforce interview",
    body:
      "Local news coverage brought Farcelis into the public conversation on AI, workforce relevance, better questions, responsible tool use, ethics, and judgment.",
    href: "https://www.fox13news.com/news/career-coach-ai-consultants-tips-relevant-age/",
  },
  {
    title: "Roundtable Proof",
    label: "CityGov AI Literacy for the Next Generation",
    body:
      "Nathan contributed to a CityGov roundtable on AI literacy for public-sector, education, and organizational leaders, translating AI risk into practical adoption guidance.",
    href: "https://www.linkedin.com/in/nathan-espey-350310192/details/recommendations/",
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
        title="Proof that Farcelis brings order, judgment, and traction to complex work."
        description="External recognition, public media, roundtable participation, and client-safe recommendations show where the work has already earned trust."
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-[760px]">
              <p className="eyebrow text-[#9f412c]">Public Recognition</p>
              <h2 className="section-title mt-5 text-slate-950">
                  External proof comes first because it is visible, verifiable, and harder to fake.
              </h2>
              </div>
              <p className="max-w-[420px] text-base leading-8 text-slate-600">
                Recognition is not the work. It is the signal that the work is showing up in public places with real stakes.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-light pt-0">
          <div className="section-inner">
            <div className="grid gap-4 lg:grid-cols-3">
              {publicProof.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="enterprise-card flex min-h-[300px] flex-col rounded-[24px] border border-white/10 bg-white/[0.055] px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {item.title}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-950">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                  <div className="mt-auto pt-6 text-sm font-semibold text-[#f19a6b]">Open source in new tab</div>
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
                Recommendations matter when they show the before, the work, and what changed after.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {recommendationCards.map((card, index) => (
                <article
                  key={card.source}
                  className={`flex min-h-[420px] flex-col rounded-[28px] border px-6 py-6 ${
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
                  <div className="mt-6 grid gap-3 rounded-[22px] border border-white/10 bg-white/[0.045] px-5 py-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                        Engagement
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{card.context}</p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                        What changed
                      </p>
                      <p className="mt-2 text-base leading-7 text-slate-100">{card.result}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
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
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(320px,0.45fr)_minmax(0,0.55fr)] lg:items-center">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] shadow-[0_28px_80px_rgba(3,8,16,0.35)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/proof/seated-closer.jpg"
                  alt="Nathan Espey seated in a suit"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow text-[#9f412c]">Proof Ledger</p>
              <h2 className="section-title mt-5 text-slate-950">
                Results are not decorations. They are the evidence that the system held.
              </h2>
              <p className="mt-6 max-w-[620px] text-xl italic leading-9 text-slate-200">
                “The point of proof is not to sound impressive. It is to show that pressure entered the system, the work got organized, and leaders had something clearer to act on.”
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Nathan Espey, Founder & CEO
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
          </div>
        </section>
      </Reveal>
    </>
  );
}
