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

const benefits = [
  "Shows buyers a realistic estimate or price range.",
  "Captures the details your team needs for follow-up.",
  "Turns pricing interest into a cleaner sales conversation.",
  "Connects quote requests to email, CRM, or reporting when needed.",
];

const examples = [
  {
    title: "Construction & Contractors",
    body: "Estimate project type, size, materials, timing, and service area before the first call.",
  },
  {
    title: "Home Services",
    body: "Let customers price repairs, installations, inspections, cleanings, or service packages.",
  },
  {
    title: "Professional Services",
    body: "Help buyers scope consulting, marketing, design, accounting, legal intake, or advisory work.",
  },
  {
    title: "Events & Venues",
    body: "Build estimates for guest count, packages, add-ons, staffing, rooms, dates, and deposits.",
  },
  {
    title: "Manufacturing & Custom Orders",
    body: "Collect specifications, quantities, options, delivery needs, and review notes.",
  },
  {
    title: "Digital Services",
    body: "Let buyers compare website, ads, content, automation, hosting, or support packages.",
  },
];

const toolTypes = [
  "Quote builder",
  "Pricing calculator",
  "Package selector",
  "Estimate request form",
  "Service configurator",
  "Add-on calculator",
];

export const metadata = buildMetadata({
  path: "/services/quote-pricing-tools",
  title: "Quote & Pricing Tools | Farcelis",
  description:
    "Farcelis builds quote builders, pricing calculators, package selectors, and estimate request tools for service businesses.",
});

export default function QuotePricingToolsPage() {
  return (
    <>
      <section className="section-shell section-shell-dark !pt-8 !pb-5 lg:!pt-10 lg:!pb-6">
        <div className="section-inner grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.42fr)] lg:items-end">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Build / Quote & Pricing Tools</p>
            <h1 className="mt-4 max-w-[920px] text-[clamp(1.9rem,3vw,3.15rem)] font-medium leading-[1.06] tracking-[-0.035em] text-white">
              Give buyers a quote path before they call.
            </h1>
            <p className="mt-4 max-w-[820px] text-base leading-7 text-slate-300">
              Farcelis builds website quote builders, pricing calculators, and estimate request tools for companies that need better pricing intake.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.22)] transition hover:brightness-110"
              >
                Build a Quote Tool
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/32 hover:bg-cyan-100/10"
              >
                Review Services
              </Link>
            </div>
          </div>

          <aside className="rounded-[18px] border border-cyan-100/12 bg-[#173343] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Tool Types
            </p>
            <div className="mt-3 grid gap-2">
              {toolTypes.map((item) => (
                <div key={item} className="rounded-[12px] border border-cyan-100/10 bg-[#1c3c4d] px-3 py-2 text-sm font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell section-shell-dark !py-5 lg:!py-6">
        <div className="section-inner grid gap-4 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">What We Are Offering</p>
            <h2 className="mt-3 max-w-[560px] text-[clamp(1.45rem,2.2vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
              A website feature that helps visitors price, choose, and request follow-up.
            </h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {benefits.map((item) => (
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

      <section className="section-shell section-shell-dark !py-5 lg:!py-6">
        <div className="section-inner">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Who Can Use This</p>
              <h2 className="mt-3 max-w-[760px] text-[clamp(1.45rem,2.2vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white">
                Companies that quote, estimate, package, or customize what they sell.
              </h2>
            </div>
            <p className="max-w-[520px] text-sm leading-6 text-slate-300">
              The tool does not need to give a final price. It can show a range, collect the right details, and route the request to a person.
            </p>
          </div>

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

      <section className="section-shell section-shell-dark !pt-5 !pb-10 lg:!pt-6 lg:!pb-12">
        <div className="section-inner grid gap-4 rounded-[20px] border border-cyan-100/12 bg-[#173343] p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Next Step</p>
            <h2 className="mt-3 max-w-[760px] text-[clamp(1.35rem,2vw,1.95rem)] font-medium leading-[1.14] tracking-[-0.03em] text-white">
              If pricing questions slow down your first conversation, Farcelis can build the quote path.
            </h2>
          </div>
          <Link
            href={contactHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.22)] transition hover:brightness-110"
          >
            Build a Quote Tool
          </Link>
        </div>
      </section>
    </>
  );
}
