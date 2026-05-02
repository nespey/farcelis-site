import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
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
        asideTitle="Best Fit"
        asideItems={product.useCases}
      />

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
                  className={`grid gap-4 py-6 lg:grid-cols-[78px_minmax(0,1fr)] ${index === 1 ? "lg:translate-x-8" : ""}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </div>
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
    </>
  );
}
