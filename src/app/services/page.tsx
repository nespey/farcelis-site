import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, services } from "@/lib/site-data";

export const metadata = buildMetadata(seo.services);

const pathways = [
  "Control Layer strategy and design",
  "Workflow and agent implementation",
  "Execution adoption and enablement",
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Farcelis builds the system before the complexity."
        description="AI consulting, workflow architecture, execution design, and Control Layer deployment all sit inside one operating approach."
        actions={[
          { href: "/contact", label: "Work With Farcelis" },
          { href: "/control-layer", label: "Explore the Control Layer", variant: "secondary" },
        ]}
      />

      <Reveal delayMs={60}>
        <section className="py-18 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {pathways.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[26px] border px-5 py-6 ${
                    index === 1 ? "border-white/14 bg-white/8 text-white" : "border-white/8 bg-white/[0.03] text-slate-200"
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d68c6a]">
                    Path
                  </div>
                  <div className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="overflow-hidden bg-[#f3f6f8] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                Service Model
              </p>
              <h2 className="mt-5 text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[3.6rem] lg:text-[4.4rem]">
                Each engagement is built around execution, not disconnected deliverables.
              </h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid gap-5 py-8 lg:grid-cols-[110px_minmax(0,0.9fr)_minmax(0,1.1fr)] ${
                    index % 2 === 1 ? "lg:translate-x-6" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    0{index + 1}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {service.title}
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg leading-8 text-slate-600">{service.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
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
