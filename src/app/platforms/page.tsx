import { IntegrationLogoLane } from "@/components/IntegrationLogoLane";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { buildMetadata } from "@/lib/metadata";
import { platformCapabilities, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.platforms);

const platformBands = [
  "AI agents",
  "CRM and revenue systems",
  "Workflow platforms",
  "Marketing and content systems",
  "Reporting environments",
];

export default function PlatformsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Platforms and Integrations"
        title="Farcelis connects the tools already carrying the work into one cleaner operating environment."
        description="AI agents, CRM systems, workflow tools, collaboration platforms, marketing systems, and reporting layers become stronger when they are arranged around ownership, routing, visibility, and action."
        actions={[
          { href: "/contact", label: "Map Your Stack" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
        asideTitle="Platform Logic"
        asideItems={platformBands}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Connected Stack</p>
              <h2 className="section-title mt-5 text-white">
                The point is not more software. The point is a stack that behaves like a system.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                Farcelis works across the platforms teams already use, then adds structure around how signals enter, move, get assigned, and get reported.
              </p>
            </div>

            <div className="space-y-4">
              <IntegrationLogoLane />
              <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-4">
                <WorkspacePreview compact />
              </div>
              <IntegrationLogoLane reverse />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Platform Capabilities</p>
              <h2 className="section-title mt-5 text-slate-950">
                Every platform decision ties back to workflow control, decision clarity, and measurable execution.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {platformCapabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] ${
                    index % 2 === 1 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="h-1 w-12 rounded-full bg-[#9f412c]/80" aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
