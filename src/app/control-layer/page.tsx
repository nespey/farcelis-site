import { LogoMarquee } from "@/components/LogoMarquee";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { approvedLogos, capabilityPoints, flowSteps, seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.controlLayer);

const systemLayers = [
  "Intake layer",
  "Workflow engine",
  "Priority system",
  "Execution layer",
  "Visibility layer",
];

export default function ControlLayerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Flagship System"
        title="The Farcelis Control Layer is the flagship execution environment inside the broader Farcelis operating model."
        description="It brings intake, routing, visibility, ownership, and intervention into one controlled frame without pretending to be the whole company."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/services", label: "See Service Paths", variant: "secondary" },
        ]}
        asideTitle="Operating Logic"
        asideItems={[
          "Built on top of current tools",
          "Structured for visibility and control",
          "Designed to hold under live pressure",
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">What It Is</p>
              <h2 className="section-title mt-5 text-white">
                One layer that keeps people, workflows, and decisions moving inside the same system.
              </h2>
            </div>

            <div className="divide-y divide-white/8 border-y border-white/8">
              {[
                "Creates one controlled intake path instead of scattered requests.",
                "Holds ownership and routing logic in a visible operating frame.",
                "Gives leadership one live view into movement, blockage, and intervention.",
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

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-dark pt-0">
          <div className="section-inner">
            <WorkspacePreview compact />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[760px]">
              <p className="eyebrow text-[#9f412c]">System Flow</p>
              <h2 className="section-title mt-5 text-slate-950">
                Work moves through one controlled path from signal to completion.
              </h2>
            </div>
            <div className="surface-light mt-12 rounded-[30px] px-6 py-8">
              <SystemFlowRail steps={flowSteps} light />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={160}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">System Layers</p>
              <h2 className="section-title mt-5 text-white">
                The Control Layer is structured as an operating stack, not another surface.
              </h2>
            </div>

            <div className="divide-y divide-white/8 border-y border-white/8">
              {systemLayers.map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 py-6 lg:grid-cols-[78px_minmax(0,1fr)] ${index % 2 === 1 ? "lg:translate-x-6" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <div className="text-2xl font-medium tracking-[-0.04em] text-slate-200">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={220}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <p className="eyebrow text-[#9f412c]">What Changes</p>
              <h2 className="section-title mt-5 text-slate-950">
                Visibility, ownership, and more reliable execution without more operational noise.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[20px] border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={260}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-end">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Organizations</p>
              <h2 className="section-title mt-5 text-white">
                Organizations that have worked with Farcelis AI Consulting LLC.
              </h2>
            </div>
            <LogoMarquee logos={approvedLogos} dark />
          </div>
        </section>
      </Reveal>
    </>
  );
}
