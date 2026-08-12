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

  return (
    <>
      <section className="service-detail-hero section-shell section-shell-dark">
        <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.7fr)] lg:items-center">
          <div className="service-detail-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">{service.eyebrow}</p>
            <h1 className="mt-4 max-w-[840px] text-[clamp(2.15rem,4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white">
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
              className="h-full min-h-[310px] w-full object-cover"
              priority
            />
          </figure>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="service-detail-capabilities section-shell section-shell-dark">
          <div className="section-inner">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-start">
              <div>
                <p className="eyebrow text-[color:var(--color-accent)]">What This Covers</p>
                <h2 className="mt-3 max-w-[520px] text-[clamp(1.7rem,2.8vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white">
                  Clear pieces, connected to the next step.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {service.capabilities.slice(0, 6).map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[76px] items-center justify-center rounded-[14px] border border-cyan-100/12 bg-white/[0.045] px-4 py-3 text-center text-sm font-semibold leading-5 text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="service-detail-related section-shell section-shell-dark">
          <div className="section-inner">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow text-[color:var(--color-accent)]">Related Services</p>
                <h2 className="mt-3 max-w-[760px] text-[clamp(1.7rem,2.8vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white">
                  Services that usually connect to this work.
                </h2>
              </div>
              <Link
                href={`${contactPathFor(service.slug)}#contact-top`}
                className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-5 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                Ask about this service
              </Link>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {service.related.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex min-h-[82px] flex-col items-center justify-center rounded-[14px] border border-cyan-100/12 bg-white/[0.045] px-4 py-3 text-center transition hover:border-cyan-100/24 hover:bg-white/[0.07]"
                >
                  <h3 className="text-base font-semibold tracking-[-0.03em] text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-5 text-slate-300">{item.detail}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
