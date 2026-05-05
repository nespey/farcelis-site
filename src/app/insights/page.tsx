import Image from "next/image";
import Link from "next/link";

import { InsightVisual } from "@/components/InsightVisual";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { blogDispatches, insightArticles, mediaLanes, rawIntelBriefs, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.insights);

const insightTracks = [
  "AI adoption",
  "Workflow architecture",
  "Governance",
  "Growth systems",
  "Executive visibility",
];

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Practical thinking for leaders building AI-enabled operating systems."
        description="Farcelis insights focus on AI adoption, workflow architecture, governance, CRM and revenue operations, marketing systems, and the Control Layer model behind reliable execution."
        actions={[
          { href: "/contact", label: "Talk Through a Use Case" },
          { href: "/services", label: "Explore Capabilities", variant: "secondary" },
        ]}
        asideTitle="Insight Tracks"
        asideItems={insightTracks}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
              <div>
                <p className="eyebrow text-[#9f412c]">Content Home</p>
                <h2 className="section-title mt-5 text-slate-950">
                  The library has lanes now. Articles, Raw Intel, and blog notes do different jobs.
                </h2>
                <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-600">
                  Insights is the home for public thinking. Results proves credibility. Resources holds gated briefings and whitepapers. That keeps the site lean and keeps each content type from blurring into the next.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {mediaLanes.map((lane) => (
                  <a
                    key={lane.title}
                    href={lane.home}
                    className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[#9f412c]/28"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                      {lane.label}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.055em] text-slate-950">
                      {lane.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{lane.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section id="articles" className="section-shell section-shell-light pt-0">
          <div className="section-inner">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-[820px]">
                <p className="eyebrow text-[#9f412c]">Article Library</p>
                <h2 className="section-title mt-5 text-slate-950">
                  Full essays get room to breathe, with reader pages built for depth.
                </h2>
              </div>
              <p className="max-w-[360px] text-sm font-semibold leading-7 text-slate-500">
                These are the long-form pieces. They should feel editorial, complete, and materially different from podcasts or short blog notes.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {insightArticles.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className={`enterprise-card group grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#9f412c]/24 lg:grid-cols-[220px_minmax(0,1fr)] ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <InsightVisual
                    kind={item.visualKind}
                    label={item.visualLabel}
                    metrics={item.visualMetrics}
                    compact
                  />
                  <div className="px-6 py-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                      Article · {item.category} · {item.readTime}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.055em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">{item.dek}</p>
                    <div className="mt-6 text-sm font-semibold text-[#9f412c]">Open full reader</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section id="raw-intel" className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]">
            <div>
              <div className="relative aspect-square max-w-[260px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.04] shadow-[0_28px_80px_rgba(3,8,16,0.42)]">
                <Image
                  src="/images/media/raw-intel-mark.png"
                  alt="Raw Intel podcast artwork with a mouth speaking from a microphone"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <p className="eyebrow mt-8 text-[color:var(--color-accent)]">Raw Intel</p>
              <h2 className="section-title mt-5 text-white">
                The podcast lane should sound and look like a signal room, not a document shelf.
              </h2>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-300">
                Raw Intel lives here inside Insights as the voice channel for pressure, judgment, adoption, and operating truth. The original mouth-and-microphone artwork gives it a distinct identity without borrowing the article system.
              </p>
            </div>

            <div className="grid gap-4">
              {rawIntelBriefs.map((brief, index) => (
                <div
                  key={brief.title}
                  className={`rounded-[28px] border px-6 py-6 ${
                    index === 0
                      ? "border-[#f19a6b]/26 bg-[linear-gradient(135deg,rgba(241,154,107,0.16),rgba(97,192,215,0.08))]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="grid gap-5 sm:grid-cols-[120px_minmax(0,1fr)]">
                    <div className="relative aspect-square overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.04]">
                      <Image
                        src={brief.image}
                        alt={`${brief.title} Raw Intel artwork`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                        {brief.signal}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-slate-300">{brief.runtime}</div>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.06em] text-white">
                        {brief.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-slate-300">{brief.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={180}>
        <section id="blog-notes" className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
              <div>
                <p className="eyebrow text-[#9f412c]">Blog Notes</p>
                <h2 className="section-title mt-5 text-slate-950">
                  Blog notes are short dispatches, not mini articles.
                </h2>
                <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-600">
                  This lane gives the site a place for tactical commentary without weakening the full article library. It is faster, narrower, and visibly different.
                </p>
              </div>
              <div className="grid gap-3">
                {blogDispatches.map((note) => (
                  <article
                    key={note.title}
                    className="border-l-4 border-[#9f412c] bg-white px-6 py-5 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                      {note.label}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.055em] text-slate-950">
                      {note.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">{note.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={220}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Publishing Direction</p>
              <h2 className="section-title mt-5 text-white">
                Every content type has a role. No more scattered proof, media, and resources.
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                "Articles live in Insights and open into complete reader pages.",
                "Raw Intel lives in Insights as the podcast and voice brief lane.",
                "Resources stay focused on requestable guides, reports, and whitepapers.",
                "Results stays focused on proof, recognition, recommendations, and credibility signals.",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`border-l border-[color:var(--color-accent)]/24 py-6 pl-6 ${index === 1 ? "lg:translate-x-8" : ""}`}
                >
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
