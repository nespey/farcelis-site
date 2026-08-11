import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";
import { contactPathFor } from "@/lib/service-catalog";

const contactHref = contactPathFor([
  "website-development",
  "app-portal-development",
  "platform-connections",
  "dashboards-decision-views",
  "crm-revenue-operations",
]);

const whatItDoes = [
  "Helps visitors understand cost before they call.",
  "Collects the project details your team needs.",
  "Sends the request to email or CRM.",
  "Shows which services people ask about most.",
];

const bestFor = [
  "Contractors and builders",
  "Home service companies",
  "Event venues and caterers",
  "Medical and wellness offices",
  "Custom product businesses",
  "Consultants and service firms",
];

const examples = [
  {
    title: "Roofing or construction",
    body: "Ask project type, size, material, timing, and city before the first call.",
  },
  {
    title: "Plumbing, HVAC, or repairs",
    body: "Ask service type, issue, location, urgency, and photos if needed.",
  },
  {
    title: "Events and venues",
    body: "Ask date, guest count, room, package, food, drinks, and add-ons.",
  },
  {
    title: "Custom orders",
    body: "Ask quantity, options, delivery needs, budget range, and review notes.",
  },
  {
    title: "Professional services",
    body: "Ask what help they need, company size, timing, budget, and contact details.",
  },
  {
    title: "Service packages",
    body: "Let buyers compare good, better, and best options before they reach out.",
  },
];

const commonUses = [
  "Roofing estimate",
  "Home repair quote",
  "Event package price",
  "Service package selector",
  "Custom order estimate",
  "Website package calculator",
];

export const metadata = buildMetadata({
  path: "/services/quote-pricing-tools",
  title: "Quote & Pricing Tools | Farcelis",
  description:
    "Farcelis builds website quote builders and pricing calculators that help visitors get an estimate and request follow-up.",
});

export default function QuotePricingToolsPage() {
  return (
    <>
      <section className="section-shell section-shell-dark !pt-8 !pb-4 lg:!pt-9 lg:!pb-5">
        <div className="section-inner grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.42fr)] lg:items-end">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Build / Quote & Pricing Tools</p>
            <h1 className="mt-4 max-w-[920px] text-[clamp(1.9rem,3vw,3.15rem)] font-medium leading-[1.06] tracking-[-0.035em] text-white">
              Add a quote builder to your website.
            </h1>
            <p className="mt-4 max-w-[820px] text-base leading-7 text-slate-300">
              Visitors answer a few questions, see an estimated price or range, and send the request to your team.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.22)] transition hover:brightness-110"
              >
                Ask About a Quote Builder
              </Link>
              <Link
                href="/services/website-development"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/32 hover:bg-cyan-100/10"
              >
                See Website Services
              </Link>
            </div>
          </div>

          <aside className="rounded-[18px] border border-cyan-100/12 bg-[#173343] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Common Uses
            </p>
            <div className="mt-3 grid gap-2">
              {commonUses.map((item) => (
                <div key={item} className="rounded-[12px] border border-cyan-100/10 bg-[#1c3c4d] px-3 py-2 text-sm font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell section-shell-dark !py-4 lg:!py-5">
        <div className="section-inner grid gap-4 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">What It Does</p>
            <h2 className="mt-3 max-w-[560px] text-[clamp(1.45rem,2.2vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
              It turns pricing questions into a clear request.
            </h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {whatItDoes.map((item) => (
              <div
                key={item}
                className="rounded-[16px] border border-cyan-100/12 bg-[#173343] px-4 py-3 text-sm font-semibold leading-6 text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell-dark !py-4 lg:!py-5">
        <div className="section-inner">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Best For</p>
              <h2 className="mt-3 max-w-[760px] text-[clamp(1.45rem,2.2vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
                Businesses that quote, estimate, package, or customize what they sell.
              </h2>
            </div>
            <p className="max-w-[520px] text-sm leading-6 text-slate-300">
              It does not have to give a final price. It can show a range and send the details to a person.
            </p>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {bestFor.map((item) => (
              <div key={item} className="rounded-[14px] border border-cyan-100/12 bg-[#173343] px-4 py-3 text-sm font-semibold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell-dark !py-4 lg:!py-5">
        <div className="section-inner">
          <p className="eyebrow text-[color:var(--color-accent)]">Examples</p>
          <h2 className="mt-3 max-w-[760px] text-[clamp(1.45rem,2.2vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
            The questions match the business.
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {examples.map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] border border-cyan-100/12 bg-[#173343] px-4 py-4"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell-dark !pt-4 !pb-10 lg:!pt-5 lg:!pb-12">
        <div className="section-inner grid gap-4 rounded-[20px] border border-cyan-100/12 bg-[#173343] p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Next Step</p>
            <h2 className="mt-3 max-w-[760px] text-[clamp(1.35rem,2vw,1.95rem)] font-medium leading-[1.14] tracking-[-0.03em] text-white">
              If people ask &quot;what will this cost?&quot; before they call, Farcelis can build the quote builder.
            </h2>
          </div>
          <Link
            href={contactHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.22)] transition hover:brightness-110"
          >
            Build a Quote Builder
          </Link>
        </div>
      </section>
    </>
  );
}
