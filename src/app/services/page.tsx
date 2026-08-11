import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { capabilityGroups } from "@/lib/service-catalog";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.services);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Websites, quote tools, automations, ads, and operations support for businesses that need clearer systems."
        description="Choose what you need built, promoted, or managed. Farcelis helps with the website, the follow-up, and the tools behind the work."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
        compact
        className="services-page-intro"
        asideTitle="How to read this page"
        asideItems={[
          "Build when you need a website, quote builder, app, portal, dashboard, automation, or launch support.",
          "Grow when you need more people to find you, understand you, and become leads.",
          "Operate when you need the work organized, tracked, supported, and maintained after launch.",
        ]}
      />

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-dark services-lanes-section">
          <div className="section-inner">
            <div className="max-w-[880px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Service Lanes</p>
              <h2 className="section-title mt-3 text-white">
                Start with what you need done.
              </h2>
              <p className="mt-3 max-w-[760px] text-sm leading-6 text-slate-300">
                Build, Grow, and Operate keep the first conversation simple. Choose a service or start with the lane that fits the problem.
              </p>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {capabilityGroups.map((group) => (
                <article
                  key={group.label}
                  id={group.label.toLowerCase()}
                  className="rounded-[18px] border border-cyan-100/12 bg-[#1c3c4d] p-2.5 text-center shadow-[0_24px_70px_rgba(3,8,16,0.22)]"
                >
                  <div
                    className={`relative isolate flex min-h-12 items-center justify-center overflow-hidden rounded-[12px] border px-4 py-2.5 text-lg font-black uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
                      group.label === "Build"
                        ? "border-cyan-100/16 bg-[#285869]"
                        : group.label === "Grow"
                          ? "border-emerald-100/16 bg-[#315f55]"
                          : "border-indigo-100/16 bg-[#3e506c]"
                    }`}
                  >
                    <span className="relative z-10 text-white">
                      {group.label}
                    </span>
                  </div>

                  <h3 className="mx-auto mt-3 max-w-[360px] text-xl font-semibold tracking-[-0.035em] text-white">
                    {group.headline}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[380px] text-xs leading-5 text-slate-200">
                    {group.buyerPrompt}
                  </p>
                  <div className="mt-3 grid gap-1.5 rounded-[14px] border border-cyan-100/10 bg-[#173343] p-2">
                    {group.links.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="rounded-[10px] border border-cyan-100/10 bg-[#1c3c4d] px-2.5 py-2 text-center transition hover:-translate-y-0.5 hover:border-cyan-100/24 hover:bg-[#24495c]"
                      >
                        <span className="block text-[0.78rem] font-semibold leading-4 text-white">
                          {service.label}
                        </span>
                        <span className="mx-auto mt-1 block max-w-[20rem] text-[0.66rem] leading-4 text-slate-300">
                          {service.detail}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={group.actionHref}
                    className="mt-3 inline-flex min-h-10 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
                  >
                    {group.primaryCta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
