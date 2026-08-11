import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { contactPathFor } from "@/lib/service-catalog";

const contactHref = contactPathFor([
  "website-development",
  "app-portal-development",
  "platform-connections",
  "dashboards-decision-views",
  "crm-revenue-operations",
]);

const examples = [
  {
    title: "Quote Builder",
    body: "A visitor chooses what they need, answers a few questions, sees a practical estimate, and can ask for follow-up.",
  },
  {
    title: "Pricing Calculator",
    body: "A simple tool that changes the price range as the buyer selects services, quantities, add-ons, timing, or package level.",
  },
  {
    title: "Estimate Request Flow",
    body: "A guided intake path for work that still needs review, such as construction, custom services, consulting, repairs, or installations.",
  },
  {
    title: "Package Selector",
    body: "A clearer way for buyers to compare good, better, and best options before they contact the company.",
  },
];

const buildPieces = [
  "Questions that match how the business actually quotes work.",
  "Clear price ranges, package options, add-ons, and review rules.",
  "A polished website experience that works on desktop and mobile.",
  "A follow-up button that sends the quote details to the right person.",
  "Optional CRM, email, and reporting connections after launch.",
];

const fitSignals = [
  "Your buyers ask, \"What will this cost?\" before they are ready for a call.",
  "Your team keeps building similar quotes by hand.",
  "Your service has enough patterns to estimate, but still needs human review before final pricing.",
  "You want a website feature that helps serious buyers raise their hand.",
];

export const metadata = buildMetadata({
  path: "/services/quote-pricing-tools",
  title: "Quote & Pricing Tools | Farcelis",
  description:
    "Farcelis builds website quote builders, pricing calculators, estimate request flows, and package selectors that help buyers understand scope and request follow-up.",
});

export default function QuotePricingToolsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Build / Quote & Pricing Tools"
        title="Let buyers build a quote before they ask for a call."
        description="Farcelis builds website tools that help visitors choose what they need, see an estimate or price range, and send the details to your team for follow-up."
        actions={[
          { href: contactHref, label: "Build a Quote Tool" },
          { href: "/services", label: "Review Services", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[860px]">
              <p className="eyebrow text-[#9f412c]">What It Can Become</p>
              <h2 className="section-title mt-5 text-slate-950">
                A clear pricing experience for companies that quote, estimate, or package their work.
              </h2>
              <p className="mt-5 max-w-[760px] text-base leading-8 text-slate-600">
                This is not a generic form. It is a small website tool built around how the company sells. The goal is to help a buyer understand the range, then make it easy to request the next conversation.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {examples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.035em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">What Farcelis Builds</p>
              <h2 className="section-title mt-5 text-white">
                The front-end tool, the quote logic, and the handoff after someone is interested.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                The buyer sees a simple experience. Behind it, the business gets a cleaner intake path and better follow-up information.
              </p>
            </div>

            <div className="grid gap-3">
              {buildPieces.map((item, index) => (
                <div key={item} className="rounded-[20px] border border-cyan-100/12 bg-white/[0.045] px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    Part {index + 1}
                  </div>
                  <p className="mt-2 text-base font-semibold leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.45fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">Good Fit</p>
              <h2 className="section-title mt-5 text-slate-950">
                Useful when pricing questions slow down the first step.
              </h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {fitSignals.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-slate-200 bg-white px-5 py-5 text-sm font-semibold leading-6 text-slate-700 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
              <p className="eyebrow text-[#9f412c]">Connects To</p>
              <div className="mt-5 grid gap-3">
                {[
                  "Website Development",
                  "App & Portal Development",
                  "Platform Connections",
                  "Dashboards and Decision Views",
                  "CRM & Revenue Operations",
                ].map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner flex flex-col gap-5 text-center">
            <p className="eyebrow text-[color:var(--color-accent)]">Next Step</p>
            <h2 className="section-title mx-auto max-w-[840px] text-white">
              If a quote tool would help your buyers make the first move, Farcelis can build the first version.
            </h2>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
              >
                Build a Quote Tool
              </Link>
              <Link
                href="/services/website-development"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-6 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/32 hover:bg-cyan-100/10"
              >
                See Website Development
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
