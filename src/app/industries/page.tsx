import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { industryFocus, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.industries);

const operatingSignals = [
  "High handoff volume",
  "Fragmented ownership",
  "Tool sprawl",
  "Leadership visibility gaps",
];

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries and Environments"
        title="Farcelis serves teams where complexity has started to outrun the operating structure."
        description="The same Control Layer discipline can support business operations, government-adjacent work, revenue systems, marketing execution, professional services, and enablement environments."
        actions={[
          { href: "/contact", label: "Discuss Your Environment" },
          { href: "/services", label: "See Service Paths", variant: "secondary" },
        ]}
        asideTitle="Best Fit Signals"
        asideItems={operatingSignals}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Operating Fit</p>
              <h2 className="section-title mt-5 text-white">
                Farcelis is industry-aware, but the core diagnosis is operational.
              </h2>
            </div>

            <div className="grid gap-3">
              {[
                "Work enters through too many doors.",
                "Ownership changes faster than the system can track.",
                "Leaders see problems after the downstream cost is already real.",
              ].map((item, index) => (
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

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Focus Areas</p>
              <h2 className="section-title mt-5 text-slate-950">
                Service lines, industries, and internal teams differ. The need for control does not.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {industryFocus.map((item) => (
                <div
                  key={item.title}
                  className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
