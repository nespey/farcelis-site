import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, services } from "@/lib/site-data";

export const metadata = buildMetadata(seo.services);

const pathways = [
  "System before tooling",
  "Execution before automation",
  "Governance before scale",
];

const operatingBands = [
  "Executive system design",
  "Workflow control environments",
  "AI-enabled execution",
  "Flagship Control Layer deployment",
];

const serviceAnchors = [
  { href: "#control-layer-design-deployment", label: "Control Layer" },
  { href: "#custom-ai-consulting-agents", label: "AI Agents" },
  { href: "#ai-strategy-governance-readiness", label: "AI Governance" },
  { href: "#data-reporting-visibility-systems", label: "Data and Visibility" },
  { href: "#crm-revenue-customer-operations", label: "CRM and Revenue" },
  { href: "#ai-driven-marketing-seo-content-systems", label: "Growth Systems" },
  { href: "#managed-operations-fractional-execution-support", label: "Managed Ops" },
  { href: "#workflow-automation", label: "Automation" },
  { href: "#ai-enablement", label: "Enablement" },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Farcelis builds the operating structure before the complexity compounds."
        description="AI consulting, workflow architecture, execution design, and Control Layer deployment all sit inside one operational approach."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
        asideTitle="Operating Posture"
        asideItems={pathways}
      />

      <Reveal delayMs={30}>
        <section className="section-shell section-shell-dark py-10">
          <div className="section-inner">
            <nav className="anchor-tabs" aria-label="Service categories">
              {serviceAnchors.map((item) => (
                <a key={item.href} href={item.href} className="anchor-tab">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Service Model</p>
              <h2 className="section-title mt-5 text-white">
                Each engagement is built around how execution actually needs to hold.
              </h2>
              <div className="accent-tabs mt-8">
                {operatingBands.map((band) => (
                  <div key={band} className="accent-tab accent-tab-dark">
                    {band}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {pathways.map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 lg:grid-cols-[78px_minmax(0,1fr)] ${index === 1 ? "lg:translate-x-8" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <div className="text-2xl font-medium tracking-[-0.04em] text-slate-200">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[860px]">
              <p className="eyebrow text-[#9f412c]">Capabilities</p>
              <h2 className="section-title mt-5 text-slate-950">
                Farcelis service paths are distinct, but they all feed the same operating logic.
              </h2>
            </div>

            <div className="mt-12 space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  id={slugify(service.title)}
                  className={`feature-rail surface-light grid gap-6 overflow-hidden px-6 py-8 lg:grid-cols-[88px_300px_minmax(0,1fr)] lg:px-8 ${
                    index % 2 === 1 ? "lg:translate-x-5" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {service.points[0]}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-[760px] text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_18px_rgba(15,23,42,0.06)]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
