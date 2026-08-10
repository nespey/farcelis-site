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
        className="!pb-7 lg:!pb-8"
      />

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-dark !py-6 lg:!py-8">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_380px]">
            <GeneralStrategyIntake />

            <aside className="surface-dark self-start rounded-[30px] px-6 py-6 text-white">
              <p className="eyebrow text-[color:var(--color-accent)]">Contact Details</p>
              <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.05em] text-white">
                Start wherever the need is clearest.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Select one or as many work areas as apply, add whatever context you have, and Farcelis can route the next conversation from there.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${site.contact.founderEmail}`}
                  className="hover-lift block rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Founder Contact</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.founderEmail}</div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover-lift block rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">General Contact</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.email}</div>
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="hover-lift block rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Phone</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.phone}</div>
                </a>
              </div>
              <Link
                href="#strategy-form"
                className="site-cta mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
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
