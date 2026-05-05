import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getInsightArticleBySlug, insightArticles, site } from "@/lib/site-data";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    path: `/insights/${article.slug}`,
    title: `${article.title} | ${site.shortName} Insights`,
    description: article.dek,
  });
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="section-shell section-shell-dark pt-36">
        <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.28fr)]">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">
              {article.category} · {article.readTime}
            </p>
            <h1 className="mt-6 text-[clamp(2.7rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
              {article.title}
            </h1>
            <p className="mt-7 max-w-[880px] text-xl leading-9 text-slate-200">{article.dek}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
              <span>{article.author}</span>
              <span aria-hidden="true">/</span>
              <span>{article.date}</span>
            </div>
          </div>

          <aside className="surface-dark h-fit rounded-[28px] border border-cyan-100/14 bg-white/[0.04] p-6">
            <p className="eyebrow text-[color:var(--color-accent)]">Executive Takeaways</p>
            <div className="mt-5 grid gap-3">
              {article.takeaways.map((item) => (
                <div key={item} className="rounded-[16px] border border-cyan-100/12 bg-cyan-100/6 px-4 py-3 text-sm leading-6 text-cyan-50">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Reveal delayMs={60}>
        <article className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.22fr)_minmax(0,0.78fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">Source</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.sourceLabel}</p>
              </div>
            </aside>

            <div className="max-w-[880px]">
              {article.body.map((section) => (
                <section key={section.heading} className="border-b border-slate-200 py-10 first:pt-0 last:border-b-0 last:pb-0">
                  <h2 className="text-[clamp(1.85rem,3vw,2.7rem)] font-semibold leading-tight tracking-[-0.055em] text-slate-950">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-lg leading-9 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-[16px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-800 shadow-[0_12px_24px_rgba(15,23,42,0.05)]">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Link href="/insights" className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-950">
                  Back to Insights
                </Link>
                <Link href="/contact" className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f19a6b,#c75d33)] px-6 py-3 text-sm font-semibold text-white">
                  Discuss This Pattern
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </>
  );
}
