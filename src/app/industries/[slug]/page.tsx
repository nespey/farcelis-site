import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getIndustryBySlug, industryFocus, site } from "@/lib/site-data";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryFocus.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return buildMetadata({
    path: `/industries/${industry.slug}`,
    title: `${industry.seoTitle} | ${site.shortName}`,
    description: industry.seoDescription,
    image: industry.image,
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <section className="service-detail-hero section-shell section-shell-dark">
        <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.68fr)] lg:items-center">
          <div className="service-detail-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">{industry.eyebrow}</p>
            <h1 className="mt-4 max-w-[900px] text-[clamp(2.1rem,3.55vw,3.85rem)] font-medium leading-[1.03] tracking-[-0.055em] text-white [text-wrap:balance]">
              {industry.seoTitle}
            </h1>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              {industry.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                Discuss This Environment
              </Link>
              <Link
                href="/services"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8 hover:shadow-[0_18px_34px_rgba(46,125,164,0.24)]"
              >
                See Service Paths
              </Link>
            </div>
          </div>

          <figure className="service-detail-image-wrap relative overflow-hidden rounded-[22px] border border-cyan-100/14 bg-[#102d3a] shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
            <Image
              src={industry.image}
              alt={industry.imageAlt}
              width={1200}
              height={820}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-full min-h-[310px] w-full object-cover"
              priority
            />
          </figure>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="service-detail-capabilities section-shell section-shell-dark">
          <div className="section-inner">
            <div className="service-detail-coverage-prototype">
              <p className="service-detail-coverage-label text-[color:var(--color-accent)]">
                What Usually Shows Up
              </p>
              <div className="service-detail-coverage-body">
                <span className="service-detail-coverage-rule" aria-hidden="true" />
                <div className="service-detail-coverage-items">
                  {industry.signals.map((item) => (
                    <span key={item} className="service-detail-coverage-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="section-shell section-shell-light !py-[clamp(1.75rem,3.5vw,3rem)]">
          <div className="section-inner grid gap-6 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-start">
            <div>
              <p className="eyebrow text-[#9f412c]">Farcelis Focus</p>
              <h2 className="mt-4 text-[clamp(1.75rem,2.75vw,2.7rem)] font-medium leading-[1.06] tracking-[-0.055em] text-slate-950 [text-wrap:balance]">
                The work is industry-aware, but the fix is operational.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {industry.offers.map((offer) => (
                <div
                  key={offer}
                  className="rounded-[16px] border border-slate-200 bg-white px-5 py-4 text-base font-semibold leading-6 tracking-[-0.03em] text-slate-950 shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                >
                  {offer}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={130}>
        <section className="section-shell section-shell-dark !py-[clamp(1.75rem,3.5vw,3rem)]">
          <div className="section-inner">
            <div className="service-detail-related-header">
              <p className="service-detail-related-label text-[color:var(--color-accent)]">
                Related Service Crosswalk
              </p>
              <span className="service-detail-related-rule" aria-hidden="true" />
              <Link
                href="/industries"
                className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-5 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                All industries
              </Link>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {industry.serviceCrosswalk.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-[118px] flex-col items-center justify-center rounded-[14px] border border-cyan-100/12 bg-white/[0.045] px-5 py-4 text-center transition hover:border-cyan-100/24 hover:bg-white/[0.07]"
                >
                  <h3 className="mx-auto max-w-[23rem] text-center text-base font-semibold leading-5 tracking-[-0.03em] text-white [text-wrap:balance]">
                    {item.label}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[21rem] text-center text-sm leading-5 text-slate-300 [text-wrap:balance]">
                    {item.detail}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={160}>
        <section className="section-shell section-shell-dark !pt-0">
          <div className="section-inner grid gap-3 md:grid-cols-3">
            {industry.proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-[16px] border border-cyan-100/12 bg-white/[0.04] px-5 py-4 text-sm font-semibold leading-6 text-slate-100"
              >
                {point}
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
