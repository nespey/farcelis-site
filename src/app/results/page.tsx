import { LogoMarquee } from "@/components/LogoMarquee";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { approvedLogos, seo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(seo.results);

const proofFrames = [
  "Executive visibility holds under pressure.",
  "Workflow control stays intact across teams and tools.",
  "Delivery governance survives complexity, deadlines, and competing priorities.",
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Results and Proof"
        title="Proof framed around live execution, not inflated claims."
        description="Farcelis keeps proof anchored to visibility, workflow control, and delivery governance so the signal stays credible."
      />

      <Reveal delayMs={60}>
        <section className="py-18 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {proofFrames.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[28px] border px-6 py-7 ${
                    index === 1 ? "border-white/14 bg-white/8 text-white" : "border-white/8 bg-white/[0.03] text-slate-200"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d68c6a]">
                    Proof Signal
                  </div>
                  <div className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="overflow-hidden bg-[#f2f5f8] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                Organizations
              </p>
              <h2 className="mt-5 text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[3.6rem] lg:text-[4.4rem]">
                Organizations that have worked with Farcelis AI Consulting LLC.
              </h2>
              <p className="mt-6 max-w-[640px] text-lg leading-8 text-slate-600">
                Relationship language stays precise. The grid below does not imply product usage or depth beyond confirmed work with Farcelis AI Consulting LLC.
              </p>
            </div>
            <LogoMarquee logos={approvedLogos} dark={false} />
          </div>
        </section>
      </Reveal>
    </>
  );
}
