import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { industryFocus, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.industries);

const fitSignals = [
  "The website, CRM, workflow, and reporting do not agree.",
  "Work is moving, but leaders cannot see enough soon enough.",
  "AI, automation, or growth tools need a clearer operating model.",
];

export default function IndustriesPage() {
  return (
    <>
      <section className="section-shell section-shell-dark !py-[clamp(2.25rem,5vw,4.5rem)]">
        <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.62fr)] lg:items-end">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Industries</p>
            <h1 className="mt-4 max-w-[920px] text-[clamp(2.35rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.06em] text-white [text-wrap:balance]">
              Operating systems for teams where growth, delivery, and follow-up have become harder to control.
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              Farcelis works across industries by starting with the same practical questions: where does work enter, who owns it, what tools carry it, and what does leadership need to see before momentum turns into drift?
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                Discuss Your Environment
              </Link>
              <Link
                href="/services"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                See Service Paths
              </Link>
            </div>
          </div>

          <div className="rounded-[18px] border border-cyan-100/14 bg-white/[0.045] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
              Best Fit Signals
            </p>
            <div className="mt-4 grid gap-3">
              {fitSignals.map((signal) => (
                <div key={signal} className="border-l border-[color:var(--color-accent)]/35 pl-4 text-sm leading-6 text-slate-200">
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light !py-[clamp(2rem,4vw,3.75rem)]">
          <div className="section-inner">
            <div className="max-w-[760px]">
              <p className="eyebrow text-[#9f412c]">Industry Crosswalk</p>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.055em] text-slate-950 [text-wrap:balance]">
                Choose the closest environment, then follow the services that usually fit.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {industryFocus.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="enterprise-card group overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_18px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,23,42,0.1)]"
                >
                  <div className="relative aspect-[1.62/1] overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={900}
                      height={560}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                      {item.cardKicker}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-6 tracking-[-0.04em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    <div className="mt-5 text-sm font-semibold text-[#9f412c]">View industry services</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
