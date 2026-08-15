import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { products, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.products);

const toolFitContactPath =
  "/contact?work=ai-strategy-governance,workflow-managed-operations,reporting-decision-systems,crm-revenue-operations&industry=growth-revenue-teams,operations-heavy-teams,small-mid-market-businesses&resource=tools-assessments";

const fitSignals = [
  {
    title: "Before a build gets scoped",
    description:
      "Use an assessment when the team knows something needs to change, but the right service path, operating model, or first build is still unclear.",
  },
  {
    title: "Before automation gets approved",
    description:
      "Use the tools to separate real automation opportunities from workflow problems that need ownership, routing, data, or governance first.",
  },
  {
    title: "Before growth work scales",
    description:
      "Use the fit review when leads, campaigns, CRM, reporting, or follow-up are active but leaders cannot see what is working cleanly enough.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="section-shell section-shell-dark !pb-[clamp(1rem,2vw,1.875rem)] !pt-[clamp(1rem,2vw,1.875rem)]">
        <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.7fr)] lg:items-start">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Tools & Assessments</p>
            <h1 className="mt-4 max-w-[760px] text-[clamp(2.05rem,3.2vw,3.35rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white [text-wrap:balance]">
              Assessments that turn messy signals into a clearer path.
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              Use the Control Layer, readiness snapshots, coaching assistants, adaptive learning, RapidRamp, and marketing blueprint tools to decide what needs structure, automation, enablement, or growth support next.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={toolFitContactPath}
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                Request Tool Fit Review
              </Link>
              <Link
                href="/resources"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                Explore Resources
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] border border-cyan-100/12 bg-[#142f3e] shadow-[0_26px_70px_rgba(2,10,18,0.25)]">
            <Image
              src="/images/resources/adobe-stock/tools-assessments.jpeg"
              alt="Digital audit checklist dashboard on a laptop."
              width={900}
              height={590}
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[1.55/1] h-full w-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light !pb-[clamp(1.75rem,3vw,3rem)] !pt-[clamp(0.75rem,1.6vw,1.5rem)]">
          <div className="section-inner">
            <div className="max-w-none">
              <p className="eyebrow text-[#9f412c]">Available Tools</p>
              <h2 className="mt-4 whitespace-normal text-[clamp(1.55rem,2.15vw,2.15rem)] font-medium leading-[1.05] tracking-[-0.045em] text-slate-950 lg:whitespace-nowrap">
                Pick the tool that matches the operating question.
              </h2>
            </div>

            <div className="mt-7 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={product.slug === "control-layer" ? "/control-layer" : `/products/${product.slug}`}
                  className="enterprise-card group flex h-full min-h-[320px] flex-col rounded-[18px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,23,42,0.1)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                    {product.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[1.35rem] font-semibold leading-7 tracking-[-0.04em] text-slate-950">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <div className="mt-5 grid gap-2 border-l border-[#f19a6b] pl-4">
                    {product.outcomes.slice(0, 2).map((outcome) => (
                      <p key={outcome} className="text-sm font-semibold leading-5 text-slate-700">
                        {outcome}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto pt-5 text-sm font-semibold text-[#9f412c]">Explore tool</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-dark !pb-[clamp(1.75rem,3vw,3rem)] !pt-[clamp(1.75rem,3vw,3rem)]">
          <div className="section-inner">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <p className="eyebrow shrink-0 text-[color:var(--color-accent)]">When This Fits</p>
              <div className="hidden h-px flex-1 bg-[color:var(--color-accent)]/70 lg:block" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
                >
                  Connect to Services
                </Link>
                <Link
                  href="/industries"
                  className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
                >
                  Connect to Industries
                </Link>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {fitSignals.map((item) => (
                <div key={item.title} className="border-l border-[color:var(--color-accent)]/70 pl-4">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={toolFitContactPath}
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.22)] hover:brightness-110"
              >
                Request Assessment Review
              </Link>
              <Link
                href="/resources"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
