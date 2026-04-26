import { LogoMarquee } from "@/components/LogoMarquee";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { approvedLogos, seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.results);

const proofFrames = [
  "Executive visibility holds under pressure.",
  "Workflow control survives complexity, handoffs, and change.",
  "Delivery governance stays credible without inflated claims or vague metrics.",
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Results and Proof"
        title="Farcelis frames proof around execution that actually holds."
        description="Proof stays anchored to visibility, control, and governance so the signal remains credible to serious operators."
        asideTitle="Proof Posture"
        asideItems={[
          "No inflated metrics",
          "No implied product usage",
          "Only confirmed relationship language",
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner divide-y divide-white/8 border-y border-white/8">
            {proofFrames.map((item, index) => (
              <div
                key={item}
                className={`grid gap-4 py-7 lg:grid-cols-[88px_minmax(0,1fr)] ${index === 1 ? "lg:translate-x-8" : ""}`}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  0{index + 1}
                </div>
                <div className="text-[2rem] font-semibold tracking-[-0.05em] text-white lg:text-[2.6rem]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <p className="eyebrow text-[#9f412c]">Selected environments and engagements</p>
            <h2 className="section-title mt-5 text-slate-950">
              Organizations that have worked with Farcelis AI Consulting LLC.
            </h2>
            <p className="mt-6 max-w-[720px] text-lg leading-8 text-slate-600">
              Execution systems deployed across cybersecurity, operations, and AI environments.
            </p>
            <div className="mt-10">
              <LogoMarquee logos={approvedLogos} dark={false} />
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
