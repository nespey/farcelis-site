import { notFound } from "next/navigation";

import { BlueprintReadinessSnapshot } from "@/components/BlueprintReadinessSnapshot";
import { IntentAdaptiveLearningEngine } from "@/components/IntentAdaptiveLearningEngine";
import { PageIntro } from "@/components/PageIntro";
import { PulseThreadPreview } from "@/components/PulseThreadPreview";
import { RapidRampGenerator } from "@/components/RapidRampGenerator";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug, products, site } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products
    .filter((product) => product.slug !== "control-layer")
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.slug === "control-layer") {
    return {};
  }

  return buildMetadata({
    path: `/products/${product.slug}`,
    title: `${product.title} | ${site.shortName}`,
    description: product.description,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.slug === "control-layer") {
    notFound();
  }

  const isPulseThread = product.slug === "pulse-thread-coaching-assistant";
  const isIntentEngine = product.slug === "intent-adaptive-learning-engine";
  const isRapidRamp = product.slug === "rapidramp-generator";
  const isBlueprintSnapshot = product.slug === "blueprint-readiness-snapshot";

  if (isBlueprintSnapshot) {
    return <BlueprintReadinessSnapshot />;
  }

  if (isIntentEngine) {
    return <IntentAdaptiveLearningEngine />;
  }

  if (isRapidRamp) {
    return <RapidRampGenerator />;
  }

  return (
    <>
      <PageIntro
        eyebrow={product.eyebrow}
        title={product.title}
        description={product.description}
        actions={[
          { href: "/contact", label: "Request Product Review" },
          { href: "/products", label: "View Product Suite", variant: "secondary" },
        ]}
      />

      {isPulseThread ? (
        <Reveal delayMs={40}>
          <PulseThreadPreview />
        </Reveal>
      ) : null}

      {!isPulseThread ? (
        <>
          <Reveal delayMs={60}>
            <section className="section-shell section-shell-dark">
              <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
                <div>
                  <p className="eyebrow text-[color:var(--color-accent)]">Outcomes</p>
                  <h2 className="section-title mt-5 text-white">
                    This product exists to convert ambiguity into a working operating path.
                  </h2>
                </div>
                <div className="grid gap-3">
                  {product.outcomes.map((outcome, index) => (
                    <div
                      key={outcome}
                      className={`border-l border-[color:var(--color-accent)]/24 py-6 pl-6 ${index === 1 ? "lg:translate-x-8" : ""}`}
                    >
                      <div className="text-2xl font-medium tracking-[-0.04em] text-slate-200">
                        {outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delayMs={120}>
            <section className="section-shell section-shell-light">
              <div className="section-inner">
                <div className="max-w-[820px]">
                  <p className="eyebrow text-[#9f412c]">Modules</p>
                  <h2 className="section-title mt-5 text-slate-950">
                    The product is packaged as a system of reusable building blocks.
                  </h2>
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {product.modules.map((module) => (
                    <div
                      key={module}
                      className="enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-5 text-lg font-semibold tracking-[-0.03em] text-slate-950 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                    >
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delayMs={160}>
            <section className="section-shell section-shell-light pt-0">
              <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]">
                <div>
                  <p className="eyebrow text-[#9f412c]">Best Fit</p>
                  <h2 className="section-title mt-5 text-slate-950">
                    Where this product earns its place in the suite.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {product.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="enterprise-card rounded-[22px] border border-slate-200 bg-white px-6 py-5 text-lg font-semibold tracking-[-0.03em] text-slate-950 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delayMs={180}>
            <section className="section-shell section-shell-light pt-0">
              <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
                <div>
                  <p className="eyebrow text-[#9f412c]">Research Base</p>
                  <h2 className="section-title mt-5 text-slate-950">
                    Product claims have to connect to real Farcelis operating evidence.
                  </h2>
                  <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-600">
                    This is the practical support behind the product surface: internal operating artifacts,
                    published thinking, certification assets, and patterns from actual workflow design.
                  </p>
                </div>
                <div className="grid gap-4">
                  {product.proof.map((item) => (
                    <div
                      key={item}
                      className="enterprise-card rounded-[22px] border border-slate-200 bg-white px-6 py-5 text-base leading-8 text-slate-700 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delayMs={220}>
            <section className="section-shell section-shell-dark">
              <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                <div>
                  <p className="eyebrow text-[color:var(--color-accent)]">How It Gets Built</p>
                  <h2 className="section-title mt-5 text-white">
                    The product becomes real through a defined delivery path.
                  </h2>
                </div>
                <div className="grid gap-3">
                  {product.delivery.map((item, index) => (
                    <div
                      key={item}
                      className={`border-l border-[color:var(--color-accent)]/24 py-6 pl-6 ${index === 1 ? "lg:translate-x-8" : ""}`}
                    >
                      <div className="text-2xl font-medium tracking-[-0.04em] text-slate-200">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delayMs={260}>
            <section className="section-shell section-shell-light">
              <div className="section-inner">
                <div className="max-w-[820px]">
                  <p className="eyebrow text-[#9f412c]">Operator Notes</p>
                  <h2 className="section-title mt-5 text-slate-950">
                    What matters when this product is evaluated seriously.
                  </h2>
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {product.researchNotes.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-slate-200 bg-white px-6 py-6 text-base leading-8 text-slate-600 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        </>
      ) : null}
    </>
  );
}
