import Link from "next/link";

import { GeneralStrategyIntake } from "@/components/GeneralStrategyIntake";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, site } from "@/lib/site-data";

export const metadata = buildMetadata(seo.contact);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell Farcelis what you want to build, grow, or stabilize."
        description="Start with the outcome in plain language. Farcelis can route the conversation into Build, Grow, or Operate after the first signal is clear."
        actions={[{ href: "#strategy-form", label: "Start the Conversation" }]}
        asideTitle="Bring Into The Conversation"
        asideItems={[
          "What you want to create",
          "What needs more visibility",
          "What needs to stay controlled",
        ]}
        compact
        className="!pt-10 !pb-4 lg:!pt-12 lg:!pb-5"
      />

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-dark !py-4 lg:!py-5">
          <div className="section-inner grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
            <GeneralStrategyIntake />

            <aside className="surface-dark self-start rounded-[24px] px-5 py-4 text-white">
              <p className="eyebrow text-[color:var(--color-accent)]">Contact Details</p>
              <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                Start wherever the need is clearest.
              </h2>
              <p className="mt-3 text-xs leading-6 text-slate-300">
                Select the work areas that fit, add whatever context you have, and Farcelis can route the next conversation from there.
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${site.contact.founderEmail}`}
                  className="hover-lift block rounded-[18px] border border-white/10 bg-white/6 px-4 py-3"
                >
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">Founder Contact</div>
                  <div className="mt-1.5 text-base font-semibold">{site.contact.founderEmail}</div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover-lift block rounded-[18px] border border-white/10 bg-white/6 px-4 py-3"
                >
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">General Contact</div>
                  <div className="mt-1.5 text-base font-semibold">{site.contact.email}</div>
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="hover-lift block rounded-[18px] border border-white/10 bg-white/6 px-4 py-3"
                >
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">Phone</div>
                  <div className="mt-1.5 text-base font-semibold">{site.contact.phone}</div>
                </a>
              </div>
              <Link
                href="#strategy-form"
                className="site-cta mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
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
