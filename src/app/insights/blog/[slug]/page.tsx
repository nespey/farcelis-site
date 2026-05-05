import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts, getBlogPostBySlug, site } from "@/lib/site-data";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    path: `/insights/blog/${post.slug}`,
    title: `${post.title} | ${site.shortName} Blog`,
    description: post.description,
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fbff] px-5 pb-16 pt-32 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(234,247,250,0.88)),radial-gradient(circle_at_16%_22%,rgba(242,139,91,0.2),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(97,192,215,0.18),transparent_28%)]" />
        <div className="section-inner relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(340px,0.4fr)]">
          <div>
            <div className="flex flex-wrap gap-3">
              {[post.label, post.date, post.author].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#9f412c]/18 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9f412c] shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <h1 className="mt-7 text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.08em] text-slate-950">
              {post.title}
            </h1>
            <p className="mt-7 max-w-[760px] text-xl leading-9 text-slate-600">{post.description}</p>
          </div>

          <div className="grid gap-5">
            <div className="relative aspect-square overflow-hidden rounded-[34px] border border-white bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/blog/julian-candid-photo.jpeg"
                alt="Julian Mercer candid portrait from the Farcelis blog files"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <article className="section-shell bg-[#f8fbff]">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(240px,0.28fr)_minmax(0,0.72fr)]">
            <aside>
              <div className="sticky top-28 rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                  Blog Lane
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Julian&apos;s posts sit apart from the article library so his content-strategy voice has its own space.
                </p>
              </div>
            </aside>

            <div className="max-w-[900px] rounded-[34px] border border-slate-200 bg-white px-6 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-10 sm:py-8">
              {post.body.map((section) => (
                <section
                  key={section.heading}
                  className="border-b border-slate-200 py-10 first:pt-4 last:border-b-0 last:pb-4"
                >
                  <h2 className="text-[clamp(1.9rem,3vw,2.85rem)] font-semibold leading-tight tracking-[-0.055em] text-slate-950">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-[1.08rem] leading-9 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="my-10 rounded-[28px] border border-[#9f412c]/16 bg-[linear-gradient(135deg,#fff7ef,#eef8fb)] px-6 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                  Farcelis Connection
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] text-slate-950">
                  Content systems still need human judgment.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  The Farcelis model treats AI content as an operating system: audience intelligence, voice,
                  cadence, review, publishing, CRM handoff, and performance feedback all have to connect before
                  automation becomes useful.
                </p>
              </section>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/insights#blog"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-950"
                >
                  Back to Blog
                </Link>
                <Link
                  href="/contact"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f19a6b,#c75d33)] px-6 py-3 text-sm font-semibold text-white"
                >
                  Discuss Content Systems
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </>
  );
}
