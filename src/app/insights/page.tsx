import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { insightCards, resourceTypes, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.insights);

const insightTracks = [
  "AI adoption",
  "Workflow architecture",
  "Governance",
  "Growth systems",
  "Executive visibility",
];

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Practical thinking for leaders building AI-enabled operating systems."
        description="Farcelis insights focus on AI adoption, workflow architecture, governance, CRM and revenue operations, marketing systems, and the Control Layer model behind reliable execution."
        actions={[
          { href: "/contact", label: "Talk Through a Use Case" },
          { href: "/services", label: "Explore Capabilities", variant: "secondary" },
        ]}
        asideTitle="Insight Tracks"
        asideItems={insightTracks}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Field Notes</p>
              <h2 className="section-title mt-5 text-slate-950">
                The ideas Farcelis publishes should make the buying conversation smarter before the first call.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {insightCards.map((item, index) => (
                <article
                  key={item.title}
                  className={`enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] ${
                    index === 1 || index === 4 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    Insight 0{index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light pt-0">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Resource Library</p>
              <h2 className="section-title mt-5 text-slate-950">
                Build the resource surface around decisions buyers are already trying to make.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resourceTypes.map((item) => (
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

      <Reveal delayMs={160}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Publishing Direction</p>
              <h2 className="section-title mt-5 text-white">
                Insights become a trust surface when they are specific, operational, and tied to business action.
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                "Explain what breaks in real operating environments.",
                "Show how AI, automation, and platforms fit into practical control systems.",
                "Make Farcelis visible as a serious builder of structured execution, not a generic AI agency.",
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
    </>
  );
}
