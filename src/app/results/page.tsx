import { CTASection } from "@/components/CTASection";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { ProofCards } from "@/components/ProofCards";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.results);

const proofStandards = [
  "Relationship language stays accurate: organizations that have worked with Farcelis AI Consulting LLC.",
  "No statement here implies that a partner or client uses the Farcelis Control Layer unless explicitly confirmed.",
  "Proof is framed around operating pressure, workflow structure, executive visibility, and delivery governance.",
];

export default function ResultsPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
            Results & Proof
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Operating proof built from live environments, not inflated claims.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            Farcelis focuses on how visibility, workflow control, and delivery
            governance hold up under real business conditions. This page keeps
            that signal credible and properly framed.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating Proof"
            title="Three proof signals that matter before larger AI rollout decisions."
            description="Farcelis measures whether leaders can see work, whether workflows hold under pressure, and whether delivery stays governed as complexity increases."
          />
          <div className="mt-10">
            <ProofCards />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Organizations"
            title="Organizations that have worked with Farcelis AI Consulting LLC."
            description="Relationship context is presented carefully. The logo grid below does not claim product usage or depth beyond confirmed work with Farcelis AI Consulting LLC."
          />
          <div className="mt-10">
            <PartnerLogoGrid />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Proof Standard"
            title="Credibility is stronger when the framing stays accurate."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofStandards.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-white p-6 text-base leading-7 text-slate-600 shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring structure to the work before more complexity compounds it."
        description="Farcelis creates visibility, accountability, and cleaner execution systems before additional AI automation layers increase operational noise."
        primaryLabel="Work With Farcelis"
        primaryHref="/contact"
        secondaryLabel="Explore the Control Layer"
        secondaryHref="/control-layer"
      />
    </>
  );
}
