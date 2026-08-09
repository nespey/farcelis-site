import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { ArticleCover } from "@/components/ArticleCover";
import { InsightVisual } from "@/components/InsightVisual";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getInsightArticleBySlug, insightArticles, site } from "@/lib/site-data";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightArticles
    .filter((article) => article.slug !== "funnel-broken-foundation")
    .map((article) => ({ slug: article.slug }));
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
    image: article.coverImage,
  });
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;

  if (slug === "funnel-broken-foundation") {
    redirect("/insights/blog/funnel-broken-foundation");
  }

  const article = getInsightArticleBySlug(slug);

  if (!article) {
    notFound();
  }
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${site.domain}/insights/${article.slug}#article`,
    headline: article.title,
    description: article.dek,
    image: article.coverImage ? `${site.domain}${article.coverImage}` : `${site.domain}/images/hero-control-layer-preview.png`,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.domain}/#organization`,
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.domain}/logos/farcelis-ai-logo.png`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${site.domain}/insights/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <section className="relative overflow-hidden bg-[#f7fbff] px-5 pb-14 pt-32 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(97,192,215,0.2),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(242,139,91,0.16),transparent_24%),linear-gradient(180deg,#ffffff,#eef7fb)]" />
        <div className="section-inner relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)]">
          <div className="max-w-[900px]">
            <div className="flex flex-wrap gap-3">
              {[article.category, article.readTime, article.date].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#9f412c]/18 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9f412c] shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <h1 className="mt-7 max-w-[920px] text-[clamp(2.4rem,4.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950">
              {article.title}
            </h1>
            <p className="mt-7 max-w-[820px] text-xl leading-9 text-slate-600">{article.dek}</p>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              By {article.author}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[42px] bg-[linear-gradient(135deg,rgba(97,192,215,0.24),rgba(242,139,91,0.2))] blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white bg-white shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
              {article.coverImage ? (
                <ArticleCover article={article} />
              ) : (
                <InsightVisual
                  kind={article.visualKind}
                  label={article.visualLabel}
                  metrics={article.visualMetrics}
                />
              )}
              <div className="border-t border-slate-200 bg-white px-6 py-5">
                <p className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-slate-950">
                  “{article.pullQuote}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <article className="section-shell bg-[#f7fbff]">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(260px,0.28fr)_minmax(0,0.72fr)]">
            <aside>
              <div className="sticky top-28 grid gap-4">
                <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">Executive Takeaways</p>
                  <div className="mt-5 grid gap-3">
                    {article.takeaways.map((item) => (
                      <div key={item} className="rounded-[16px] border border-slate-200 bg-[#f7fbff] px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[26px] border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">Source</p>
                  <p className="mt-3">{article.sourceLabel}</p>
                </div>
              </div>
            </aside>

            <div className="max-w-[900px] rounded-[34px] border border-slate-200 bg-white px-6 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-10 sm:py-8">
              {article.body.map((section) => (
                <section key={section.heading} className="border-b border-slate-200 py-10 first:pt-4 last:border-b-0 last:pb-4">
                  <h2 className="text-[clamp(1.9rem,3vw,2.85rem)] font-semibold leading-tight tracking-[-0.055em] text-slate-950">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-[1.08rem] leading-9 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="whitespace-pre-line">{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <div className="mt-7 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-[18px] border border-slate-200 bg-[#f8fbff] px-5 py-4 text-base font-semibold leading-7 text-slate-800 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}

              <section className="my-10 rounded-[28px] border border-[#9f412c]/16 bg-[linear-gradient(135deg,#fff7ef,#eef8fb)] px-6 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">Farcelis Connection</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] text-slate-950">
                  {article.bridgeTitle}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{article.bridgeBody}</p>
              </section>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row">
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
