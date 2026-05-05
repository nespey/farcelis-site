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
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[840px]">
              <p className="eyebrow text-[#9f412c]">Named Systems</p>
              <h2 className="section-title mt-5 text-slate-950">
                Farcelis product pages make the model concrete without shrinking it into a generic software pitch.
              </h2>
            </div>

            <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={product.slug === "control-layer" ? "/control-layer" : `/products/${product.slug}`}
                  className="enterprise-card flex h-full min-h-[380px] flex-col rounded-[24px] border border-white/10 bg-white/[0.055] px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {product.eyebrow}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{product.description}</p>
                  <div className="mt-5 grid gap-2">
                    {product.outcomes.slice(0, 2).map((outcome) => (
                      <div
                        key={outcome}
                        className="min-h-10 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold leading-6 text-slate-200"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 text-sm font-semibold text-[#f19a6b]">Explore product</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
