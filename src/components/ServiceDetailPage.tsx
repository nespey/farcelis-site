import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { contactPathFor, getDirectService } from "@/lib/service-catalog";
import { getServicePageContent } from "@/lib/service-page-content";

type Service = NonNullable<ReturnType<typeof getDirectService>>;

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const content = getServicePageContent(service.slug);
  const coverageItems =
    content.clientNeeds ?? service.capabilities.slice(0, service.capabilities.length >= 6 ? 6 : 3);
  const relatedGridClass =
    service.related.length === 3
      ? "md:grid-cols-3"
      : service.related.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 xl:grid-cols-4";
  const imageObjectPosition = "object-center";

  return (
    <>
      <section className="service-detail-hero section-shell section-shell-dark">
        <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.7fr)] lg:items-center">
          <div className="service-detail-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">{service.eyebrow}</p>
            <h1 className="mt-4 max-w-[880px] text-[clamp(2.1rem,3.55vw,3.85rem)] font-medium leading-[1.03] tracking-[-0.055em] text-white [text-wrap:balance]">
              {service.title}
            </h1>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              {content.seoIntro}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${contactPathFor(service.slug)}#contact-top`}
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                {service.primaryCta}
              </Link>
              {service.secondaryCta ? (
                <Link
                  href={service.secondaryCta.href}
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8 hover:shadow-[0_18px_34px_rgba(46,125,164,0.24)]"
                >
                  {service.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <figure className="service-detail-image-wrap relative overflow-hidden rounded-[22px] border border-cyan-100/14 bg-[#102d3a] shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              width={1200}
              height={820}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className={`h-full min-h-[310px] w-full object-cover ${imageObjectPosition}`}
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
                What Clients Usually Need Here
              </p>
              <div className="service-detail-coverage-body">
                <span className="service-detail-coverage-rule" aria-hidden="true" />
                <div className="service-detail-coverage-items">
                  {coverageItems.map((item) => (
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
        <section className="service-detail-related section-shell section-shell-dark">
          <div className="section-inner">
            <div className="service-detail-related-header">
              <p className="service-detail-related-label text-[color:var(--color-accent)]">
                Related Services
              </p>
              <span className="service-detail-related-rule" aria-hidden="true" />
              <Link
                href={`${contactPathFor(service.slug)}#contact-top`}
                className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-5 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                Ask about this service
              </Link>
            </div>

            <div className={`mt-5 grid gap-3 ${relatedGridClass}`}>
              {service.related.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex min-h-[82px] flex-col items-center justify-center rounded-[14px] border border-cyan-100/12 bg-white/[0.045] px-5 py-3 text-center transition hover:border-cyan-100/24 hover:bg-white/[0.07]"
                >
                  <h3 className="mx-auto max-w-[23rem] text-center text-base font-semibold leading-5 tracking-[-0.03em] text-white [text-wrap:balance]">
                    {item.label}
                  </h3>
                  <p className="mx-auto mt-1.5 max-w-[21rem] text-center text-sm leading-5 text-slate-300 [text-wrap:balance]">
                    {item.detail}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
