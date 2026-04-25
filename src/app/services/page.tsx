import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCards } from "@/components/ServiceCards";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.services);

const servicePathways = [
  {
    title: "Control Layer Strategy & Design",
    body: "Define the operating structure, workflow architecture, reporting pathways, and accountability system needed before more AI complexity gets layered in.",
  },
  {
    title: "Workflow & Agent Implementation",
    body: "Deploy automation, assistants, routing logic, and supporting workflows inside a business structure that already makes operational sense.",
  },
  {
    title: "Team Enablement & Operating Adoption",
    body: "Help leaders and teams adopt the system in real environments so the new structure improves execution instead of remaining theoretical.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
            Services
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            AI consulting and operational systems built for execution.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            Farcelis provides AI consulting, workflow automation, and Control
            Layer design for organizations that need better visibility, stronger
            execution systems, and more reliable decision support.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Paths"
            title="Farcelis helps organizations move from operational chaos to structured execution."
            description="The service model is designed to meet organizations at different stages of control, automation, and AI adoption."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicePathways.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[28px] border p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] ${
                  index === 1
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h2>
                <p
                  className={`mt-4 text-base leading-7 ${
                    index === 1 ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ServiceCards />
        </div>
      </section>

      <CTASection
        title="Choose the service path that gives your operations structure first."
        description="Farcelis combines strategic design, implementation, workflow automation, and AI enablement so the system behind execution is strong before more tooling gets added."
        primaryLabel="Build Your Control Layer"
        primaryHref="/contact"
        secondaryLabel="See How It Works"
        secondaryHref="/control-layer"
      />
    </>
  );
}

