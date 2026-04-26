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

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Service Model</p>
              <h2 className="section-title mt-5 text-white">
                Each engagement is built around how execution actually needs to hold.
              </h2>
            </div>

            <div className="divide-y divide-white/8 border-y border-white/8">
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
            <div className="max-w-[780px]">
              <p className="eyebrow text-[#9f412c]">Capabilities</p>
              <h2 className="section-title mt-5 text-slate-950">
                Farcelis service paths are distinct, but they all feed the same operating logic.
              </h2>
            </div>

            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid gap-5 py-8 lg:grid-cols-[88px_320px_minmax(0,1fr)] ${index % 2 === 1 ? "lg:translate-x-6" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {service.title}
                  </h3>
                  <div>
                    <p className="max-w-[760px] text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
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
