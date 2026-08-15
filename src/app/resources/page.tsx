import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.resources);

const resourceCategories = [
  {
    href: "/resources/library",
    eyebrow: "Gated Library",
    title: "Resource Library",
    description: "Briefings, reports, guides, and playbooks for deeper evaluation.",
    cta: "Open library",
    image: "/images/resources/adobe-stock/resource-library.jpeg",
    imageAlt: "Business team reviewing analytics on a digital tablet.",
  },
  {
    href: "/insights",
    eyebrow: "Public Thinking",
    title: "Insights & Playbooks",
    description: "Plain-language strategy notes for websites, growth, workflow, and AI.",
    cta: "Read insights",
    image: "/images/resources/adobe-stock/insights-playbooks.jpeg",
    imageAlt: "Dark strategy notebook and planning tools on a desk.",
  },
  {
    href: "/events",
    eyebrow: "Briefing Sessions",
    title: "Webinars & Briefings",
    description: "Short sessions for practical business and technology decisions.",
    cta: "View briefings",
    image: "/images/resources/adobe-stock/webinars-briefings.jpeg",
    imageAlt: "Professional watching a virtual briefing on a laptop.",
  },
  {
    href: "/products",
    eyebrow: "Decision Tools",
    title: "Tools & Assessments",
    description: "Diagnostic tools that clarify what to build, grow, or manage.",
    cta: "Use tools",
    image: "/images/resources/adobe-stock/tools-assessments.jpeg",
    imageAlt: "Digital audit checklist dashboard on a laptop.",
  },
];

const resourceFit = [
  "Use the library when leaders need a briefing, guide, or gated asset before buying.",
  "Use insights when the question needs public explanation, examples, or strategic context.",
  "Use webinars and tools when the next step needs education, assessment, or product fit.",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section-shell section-shell-dark !pb-[clamp(1rem,2vw,1.75rem)] !pt-[clamp(1rem,2vw,1.75rem)]">
        <div className="section-inner">
          <p className="eyebrow text-[color:var(--color-accent)]">Resources</p>
          <h1 className="mt-4 max-w-[720px] text-[clamp(2.15rem,3.35vw,3.45rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white [text-wrap:balance]">
            Explore Resources
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
            Choose the resource lane closest to the decision in front of you, then open the library, insights, briefings, or tools that fit.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/resources/library"
              className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
            >
              Open Resource Library
            </Link>
            <Link
              href="/services"
              className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
            >
              See Service Paths
            </Link>
          </div>
        </div>
      </section>

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light !pb-[clamp(2rem,4vw,3.75rem)] !pt-[clamp(1rem,2vw,1.875rem)]">
          <div className="section-inner">
            <div className="max-w-[780px]">
              <p className="eyebrow text-[#9f412c]">Resource Pathways</p>
              <h2 className="mt-4 max-w-none whitespace-normal text-[clamp(1.7rem,2.45vw,2.45rem)] font-medium leading-[1.05] tracking-[-0.055em] text-slate-950 lg:whitespace-nowrap">
                Choose the resource lane that fits the decision.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {resourceCategories.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="enterprise-card group flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_18px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,23,42,0.1)]"
                >
                  <div className="relative aspect-[1.52/1] overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={900}
                      height={590}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-6 tracking-[-0.04em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    <div className="mt-auto pt-4 text-sm font-semibold text-[#9f412c]">{item.cta}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-dark !pt-[clamp(2rem,4vw,3.5rem)]">
          <div className="section-inner">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <p className="eyebrow shrink-0 text-[color:var(--color-accent)]">
                What Usually Fits
              </p>
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

            <div className="mt-8 grid gap-3 lg:grid-cols-3">
              {resourceFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-cyan-100/12 bg-cyan-100/5 px-5 py-5 text-center text-sm font-semibold leading-6 text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
