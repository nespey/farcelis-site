import Link from "next/link";

import { GeneralStrategyIntake } from "@/components/GeneralStrategyIntake";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, site } from "@/lib/site-data";

export const metadata = buildMetadata(seo.contact);

export default function ContactPage() {
  return (
    <>
      <section className="section-shell section-shell-dark !pt-6 !pb-3 lg:!pt-8 lg:!pb-4">
        <div className="section-inner">
          <p className="eyebrow text-[color:var(--color-accent)]">Contact</p>
          <h1 className="mt-3 max-w-[980px] text-[clamp(1.7rem,2.3vw,2.2rem)] font-medium leading-[1.08] tracking-[-0.025em] text-white">
            Tell Farcelis what you want to build, grow, or stabilize.
          </h1>
          <p className="mt-3 max-w-[980px] text-sm leading-6 text-slate-300">
            Start with the outcome in plain language. Farcelis can route the conversation into Build, Grow, or Operate after the first signal is clear.
          </p>
          <Link
            href="#strategy-form"
            className="site-cta mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-2.5 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-dark !py-3 lg:!py-4">
          <div className="section-inner grid gap-5 lg:grid-cols-[minmax(0,1fr)_310px]">
            <GeneralStrategyIntake />

            <aside className="surface-dark self-start rounded-[22px] px-4 py-3.5 text-white">
              <p className="eyebrow text-[color:var(--color-accent)]">Contact Details</p>
              <h2 className="mt-2.5 text-[1.45rem] font-semibold leading-tight tracking-[-0.025em] text-white">
                Start wherever the need is clearest.
              </h2>
              <p className="mt-2.5 text-xs leading-5 text-slate-300">
                Select the work areas that fit, add whatever context you have, and Farcelis can route the next conversation from there.
              </p>
              <div className="mt-3 space-y-2.5">
                <a
                  href={`mailto:${site.contact.founderEmail}`}
                  className="hover-lift block rounded-[16px] border border-white/10 bg-white/6 px-3.5 py-2.5"
                >
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">Founder Contact</div>
                  <div className="mt-1 text-[0.95rem] font-semibold">{site.contact.founderEmail}</div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover-lift block rounded-[16px] border border-white/10 bg-white/6 px-3.5 py-2.5"
                >
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">General Contact</div>
                  <div className="mt-1 text-[0.95rem] font-semibold">{site.contact.email}</div>
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="hover-lift block rounded-[16px] border border-white/10 bg-white/6 px-3.5 py-2.5"
                >
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">Phone</div>
                  <div className="mt-1 text-[0.95rem] font-semibold">{site.contact.phone}</div>
                </a>
              </div>
              <Link
                href="#strategy-form"
                className="site-cta mt-3 inline-flex min-h-9 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-4 py-2 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                Schedule a Strategy Call
              </Link>
            </aside>
          </div>
        </section>
      </Reveal>
    </>
  );
}
