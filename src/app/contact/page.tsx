import Link from "next/link";

import { CapabilityInquiryForm } from "@/components/CapabilityInquiryForm";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, site } from "@/lib/site-data";

export const metadata = buildMetadata(seo.contact);

const prompts = [
  "What are you trying to build, grow, or stabilize?",
  "What already exists, and what is missing, messy, stuck, or hard to manage?",
  "What would make the next conversation useful?",
];

const pathCards = [
  {
    label: "Build",
    href: "/contact/build",
    title: "I need something created, rebuilt, connected, or launched.",
    body: "Use this when the work is a website, app, portal, dashboard, automation, code cleanup, or deployment path.",
  },
  {
    label: "Grow",
    href: "/contact/grow",
    title: "I need more people to find, trust, click, ask, or buy.",
    body: "Use this when the pressure is search, AEO, content, campaigns, CRM, offers, or lead handoff.",
  },
  {
    label: "Operate",
    href: "/contact/operate",
    title: "I need the work managed, owned, reported, and kept moving.",
    body: "Use this when the pressure is workflow, AI rules, reporting, support, maintenance, or Control Layer structure.",
  },
];

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
      />

      <Reveal delayMs={70}>
        <section id="strategy-form" className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_380px]">
            <div className="grid gap-6">
              <div className="rounded-[30px] border border-cyan-100/12 bg-[#1c3c4d] px-6 py-7 text-white">
                <p className="eyebrow text-[color:var(--color-accent)]">Choose A Starting Lane</p>
                <div className="mt-6 grid gap-3">
                  {pathCards.map((card) => (
                    <Link
                      key={card.label}
                      href={card.href}
                      className="block rounded-[18px] border border-cyan-100/12 bg-[#173343] px-5 py-4 text-center transition hover:border-cyan-100/24 hover:bg-[#24495c]"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                        {card.label}
                      </div>
                      <div className="mt-2 text-base font-semibold text-white">{card.title}</div>
                      <div className="mx-auto mt-2 max-w-[48rem] text-sm leading-6 text-slate-300">{card.body}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <CapabilityInquiryForm label="General Strategy" prompts={prompts} />
            </div>

            <aside className="surface-dark rounded-[30px] px-6 py-7 text-white">
              <p className="eyebrow text-[color:var(--color-accent)]">Contact Details</p>
              <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.05em] text-white">
                Start wherever the need is clearest.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Use the form for a quick signal, choose a Build/Grow/Operate lane, or contact Farcelis directly.
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
