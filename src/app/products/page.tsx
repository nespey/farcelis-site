import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { products, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.products);

const toolLanes = [
  {
    title: "Build Support",
    description: "Use these when the work needs to become a real website, app, workflow, launch plan, or documented operating path.",
    serviceHref: "/services/build",
    tools: ["rapidramp-generator", "blueprint-readiness-snapshot"],
    inquiryHref: "/contact?request=tool-assessment&work=website-development,app-portal-development,platform-connections#strategy-form",
  },
  {
    title: "Grow Support",
    description: "Use these when the offer exists, but the market, content, search, campaign, and revenue motion need structure.",
    serviceHref: "/services/grow",
    tools: ["ai-marketing-blueprint-generator"],
    inquiryHref: "/contact?request=tool-assessment&work=seo-search-visibility,content-revenue-systems,crm-revenue-operations#strategy-form",
  },
  {
    title: "Operate Support",
    description: "Use these when follow-through, enablement, ownership, decisions, and operating rhythm need to hold after launch.",
    serviceHref: "/services/operate",
    tools: ["pulse-thread-coaching-assistant", "intent-adaptive-learning-engine"],
    inquiryHref: "/contact?request=tool-assessment&work=workflow-managed-operations,ai-strategy-governance,reporting-decision-systems#strategy-form",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tools & Assessments"
        title="Use the tools only when they clarify the service path."
        description="Tools and assessments are not a separate offer lane. They support Build, Grow, and Operate by clarifying scope, speeding up decisions, and making the next step easier to understand."
        compact
        className="product-suite-intro"
        actions={[
          { href: "#tool-map", label: "See Where They Fit" },
          { href: "/services", label: "See Services", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={60}>
        <section id="tool-map" className="section-shell section-shell-light product-suite-list-section scroll-mt-24">
          <div className="section-inner">
            <div className="max-w-[840px]">
              <p className="eyebrow text-[#9f412c]">Service Support Map</p>
              <h2 className="mt-4 max-w-[780px] text-[clamp(1.45rem,2vw,2rem)] font-medium leading-[1.16] tracking-[-0.035em] text-slate-950">
                Start with the service path first. Use the tool only when it helps explain, assess, or accelerate that path.
              </h2>
            </div>

            <div className="mt-7 grid items-stretch gap-4 lg:grid-cols-3">
              {toolLanes.map((lane) => {
                const laneTools = lane.tools
                  .map((slug) => products.find((product) => product.slug === slug))
                  .filter(Boolean);

                return (
                  <div
                    key={lane.title}
                    className="enterprise-card flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.055] px-5 py-6 text-center shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                      {lane.title}
                    </div>
                    <p className="mx-auto mt-4 max-w-[24rem] text-base leading-7 text-slate-600">
                      {lane.description}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {laneTools.map((tool) =>
                        tool ? (
                          <a
                            key={tool.slug}
                            href={`/products/${tool.slug}`}
                            className="rounded-[18px] border border-slate-200 bg-white px-4 py-4 text-center transition hover:-translate-y-0.5 hover:border-[#9f412c]/28"
                          >
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9f412c]">
                              {tool.eyebrow.replace(" Product", "").replace(" System", "")}
                            </div>
                            <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                              {tool.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
                          </a>
                        ) : null,
                      )}
                    </div>

                    <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <a
                        href={lane.serviceHref}
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-800 transition hover:border-[#9f412c]/40 hover:text-[#9f412c]"
                      >
                        See {lane.title.replace(" Support", "")}
                      </a>
                      <a
                        href={lane.inquiryHref}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f19a6b] px-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(159,65,44,0.16)] transition hover:brightness-105"
                      >
                        Add to Inquiry
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
