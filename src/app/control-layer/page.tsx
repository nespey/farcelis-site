import { LogoMarquee } from "@/components/LogoMarquee";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SystemFlowRail } from "@/components/SystemFlowRail";
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
        title="The Farcelis Control Layer."
        description="The Control Layer is the flagship Farcelis implementation when an organization needs one operating frame for workflow, visibility, decisions, and execution."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/services", label: "See Service Paths", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={60}>
        <section className="py-18 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                What It Does
              </p>
              <h2 className="mt-5 text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-white sm:text-[3.8rem] lg:text-[4.6rem] lg:leading-[1.02]">
                One system layer that holds the work together.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                The Control Layer sits above existing tools and creates one controlled operating
                environment for intake, routing, ownership, reporting, and intervention.
              </p>
              <p>
                It is not more software for its own sake. It is the structure that keeps AI,
                automation, workflows, and people moving in one visible direction.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="overflow-hidden bg-[#f2f5f8] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[740px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                System Flow
              </p>
              <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-slate-950 sm:text-[3.4rem] lg:text-[4rem]">
                Work moves through one controlled path.
              </h2>
            </div>
            <SystemFlowRail steps={flowSteps} light />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-5">
              {systemLayers.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[26px] border px-5 py-6 ${
                    index === 2 ? "border-white/16 bg-white/8 text-white" : "border-white/8 bg-white/[0.03] text-slate-200"
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d68c6a]">
                    Layer
                  </div>
                  <div className="mt-4 text-xl font-semibold tracking-[-0.03em]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={180}>
        <section className="overflow-hidden bg-[#f5f7f9] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                What Changes
              </p>
              <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-slate-950 sm:text-[3.4rem] lg:text-[4rem]">
                Visibility, ownership, and cleaner execution.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {capabilityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={220}>
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d68c6a]">
                Organizations
              </p>
              <h2 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.065em] text-white sm:text-[3.4rem] lg:text-[4rem]">
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
