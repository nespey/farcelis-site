import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { products, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.products);

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Product Suite"
        title="Farcelis product surfaces turn consulting patterns into repeatable operating systems."
        description="The Farcelis suite packages Control Layer design, readiness diagnostics, AI assistants, adaptive learning, implementation acceleration, and AI-driven growth architecture into named systems leaders can understand and buy."
        actions={[
          { href: "/contact", label: "Request Product Fit Review" },
          { href: "/services", label: "See Services", variant: "secondary" },
        ]}
        asideTitle="Suite Logic"
        asideItems={[
          "Assess the operating environment",
          "Design the control system",
          "Deploy workflow and AI support",
          "Measure execution movement",
        ]}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[840px]">
              <p className="eyebrow text-[#9f412c]">Named Systems</p>
              <h2 className="section-title mt-5 text-slate-950">
                Product pages make the Farcelis model feel concrete without shrinking it into a generic software pitch.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <Link
                  key={product.slug}
                  href={product.slug === "control-layer" ? "/control-layer" : `/products/${product.slug}`}
                  className={`enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] ${
                    index === 1 || index === 4 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {product.eyebrow}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{product.description}</p>
                  <div className="mt-6 text-sm font-semibold text-[#9f412c]">Explore product</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
