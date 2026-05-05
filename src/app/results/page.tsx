import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.results);

const recommendationCards = [
  {
    source: "AI literacy roundtable",
    context: "Public-sector and education leadership session",
    quote: "AI moved from abstract risk into practical leadership judgment.",
    story:
      "The CityGov roundtable needed more than AI excitement. It needed language leaders could actually use: where teams can say yes, where judgment stays human, and how adoption can stay ethical across classrooms, workplaces, and public-service settings.",
    proofLine: "Practical AI literacy and responsible adoption",
    tags: ["AI literacy", "Responsible adoption"],
  },
  {
    source: "Startup operations engagement",
    context: "CRM organization, research, enrichment, and outreach preparation",
    quote: "The CRM work stopped feeling like cleanup and started behaving like an outreach engine.",
    story:
      "A high-volume research backlog and scattered account records were reorganized into cleaner intelligence, better list quality, and usable segmentation so outreach could move with more confidence and less rework.",
    proofLine: "Cleaner CRM intelligence and outbound readiness",
    tags: ["CRM cleanup", "Outbound readiness"],
  },
  {
    source: "Executive support engagement",
    context: "Vendor sourcing, urgent coordination, and executive follow-through",
    quote: "The pressure came off the executive desk without losing urgency.",
    story:
      "Time-sensitive vendor sourcing and coordination work was handled with enough structure that leadership had faster options, cleaner follow-up, and fewer loose ends during a compressed decision window.",
    proofLine: "Faster vendor options and cleaner follow-through",
    tags: ["Vendor sourcing", "Follow-through"],
  },
  {
    source: "Senior operations recommendation",
    context: "Organizational assessment and implementation",
    quote: "The work moved from diagnosis into disciplined action.",
    story:
      "The engagement surfaced where coordination was breaking down, shaped the team response, and gave leadership a more practical route back to execution discipline under pressure.",
    proofLine: "Clearer operating gaps and stronger execution discipline",
    tags: ["Operating assessment", "Execution discipline"],
  },
];

const publicProof = [
  {
    title: "Independent ranking",
    label: "Farcelis was named among Tampa AI and ML consultants.",
    body:
      "Click this if you want third-party proof that Farcelis is not just making claims on its own site. The roundup points to practical AI adoption, custom systems, operational precision, and ethical scaling.",
    cta: "See the outside ranking",
    href: "https://www.digitalreference.co/insights/engineering-professionals/best-ai-ml-consultants-in-tampa",
  },
  {
    title: "Local media",
    label: "FOX 13 put Farcelis in the AI workforce conversation.",
    body:
      "Click this for the public-facing proof that the Farcelis point of view travels outside a sales page: AI, work, better questions, responsible tool use, ethics, and judgment.",
    cta: "Watch the media proof",
    href: "https://www.fox13news.com/news/career-coach-ai-consultants-tips-relevant-age/",
  },
  {
    title: "Roundtable proof",
    label: "AI literacy moves from theory to real leadership decisions.",
    body:
      "Click this for the AI Literacy for the Next Generation roundtable: a practical conversation on responsible AI, education, public-sector readiness, and how leaders prepare people to use the technology with judgment.",
    cta: "Open the roundtable post",
    href: "https://www.linkedin.com/posts/nathanespey_ailiteracy-aiandeducation-responsibleai-activity-7389462062462074880-mgqo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAjtHQQBChV3m4U4Hv3fUUQ1fsKeZML4fxw",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow=""
        title="Proof that Farcelis brings order, judgment, and traction."
        description="Recognition, media, roundtable work, and client-safe recommendations show where the work held."
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light results-public-proof-section">
          <div className="section-inner">
            <div className="grid gap-4 lg:grid-cols-3">
              {publicProof.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="enterprise-card group flex min-h-[330px] flex-col rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.085),rgba(255,255,255,0.045))] px-6 py-6 shadow-[0_22px_54px_rgba(3,8,16,0.22)] transition hover:border-[#f19a6b]/50 hover:bg-[linear-gradient(180deg,rgba(241,154,107,0.14),rgba(255,255,255,0.05))]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9f73]">
                    {item.title}
                  </div>
                  <h3 className="mt-4 text-[clamp(1.6rem,2.05vw,2rem)] font-semibold leading-tight tracking-[-0.04em] text-white">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-300">{item.body}</p>
                  <div className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#ffb38f]">
                    <span>{item.cta}</span>
                    <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={160}>
        <section className="section-shell section-shell-dark results-recommendation-section">
          <div className="section-inner">
            <div className="grid w-full max-w-[860px] gap-6 rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_56px_rgba(3,8,16,0.22)] sm:grid-cols-[132px_minmax(0,1fr)] sm:items-center lg:p-7">
              <div className="relative mx-auto aspect-square w-full max-w-[132px] overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] shadow-[0_14px_34px_rgba(3,8,16,0.22)] sm:mx-0">
                <Image
                  src="/images/proof/seated-closer.jpg"
                  alt="Nathan Espey seated in a suit"
                  fill
                  sizes="132px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h2 className="max-w-[620px] text-[clamp(1.35rem,1.8vw,1.8rem)] font-semibold leading-tight tracking-[-0.025em] text-slate-100">
                  Results are not decorations. They are the evidence that the system held.
                </h2>
                <p className="mt-4 max-w-[620px] text-base italic leading-8 text-slate-300">
                  “The point of proof is not to sound impressive. It is to show that pressure entered the system, the work got organized, and leaders had something clearer to act on.”
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Nathan Espey, Founder & CEO
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {recommendationCards.map((card, index) => (
                <article
                  key={card.source}
                  className={`flex min-h-[360px] flex-col rounded-[28px] border px-7 py-7 ${
                    index === 0
                      ? "border-[color:var(--color-accent)]/22 bg-[linear-gradient(180deg,rgba(242,139,91,0.15),rgba(255,255,255,0.035))]"
                      : "border-white/8 bg-white/[0.04]"
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {card.source}
                  </div>
                  <p className="mt-5 text-[clamp(1.65rem,2.2vw,2.25rem)] font-medium italic leading-[1.28] tracking-[-0.04em] text-slate-100">
                    “{card.quote}”
                  </p>
                  <p className="mt-5 text-base leading-8 text-slate-300">{card.story}</p>
                  <div className="mt-auto border-t border-white/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {card.context}
                    </p>
                    <p className="mt-3 text-base font-semibold leading-7 text-slate-100">
                      {card.proofLine}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
