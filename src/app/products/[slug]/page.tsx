import { notFound } from "next/navigation";
import Image from "next/image";

import { AIMarketingBlueprintGenerator } from "@/components/AIMarketingBlueprintGenerator";
import { BlueprintReadinessSnapshot } from "@/components/BlueprintReadinessSnapshot";
import { IntentAdaptiveLearningEngine } from "@/components/IntentAdaptiveLearningEngine";
import { JsonLd } from "@/components/JsonLd";
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
  const isMarketingBlueprint = product.slug === "ai-marketing-blueprint-generator";
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.domain}/products/${product.slug}#service`,
    name: product.title,
    serviceType: product.eyebrow,
    description: product.description,
    url: `${site.domain}/products/${product.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${site.domain}/#organization`,
      name: site.name,
      url: site.domain,
    },
    areaServed: "United States",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Executives, founders, operators, and operational teams",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${site.domain}/contact`,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${product.title} operating components`,
      itemListElement: product.modules.map((module, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: module,
        },
      })),
    },
  };

  if (isMarketingBlueprint) {
    return (
      <>
        <JsonLd data={productSchema} />
        <AIMarketingBlueprintGenerator />
      </>
    );
  }

  if (isBlueprintSnapshot) {
    return (
      <>
        <JsonLd data={productSchema} />
        <BlueprintReadinessSnapshot />
      </>
    );
  }

  if (isIntentEngine) {
    return (
      <>
        <JsonLd data={productSchema} />
        <IntentAdaptiveLearningEngine />
      </>
    );
  }

  if (isRapidRamp) {
    return (
      <>
        <JsonLd data={productSchema} />
        <RapidRampGenerator />
      </>
    );
  }

  if (isPulseThread) {
    const pulseContactPath =
      "/contact?work=ai-agents-automations,workflow-managed-operations,crm-revenue-operations,farcelis-control-layer,reporting-decision-systems&industry=education-enablement,growth-revenue-teams,professional-services-consulting,operations-heavy-teams&resource=tools-assessments#contact-top";

    return (
      <>
        <JsonLd data={productSchema} />
        <section className="section-shell section-shell-dark control-layer-hero pulse-thread-hero">
          <div className="section-inner control-layer-hero-grid">
            <div className="control-layer-hero-copy">
              <p className="eyebrow text-[color:var(--color-accent)]">Pulse Thread Coaching Assistant</p>
              <h1 className="mt-4 text-[clamp(2rem,3.05vw,3.2rem)] font-medium leading-[1.03] tracking-[-0.055em] text-white [text-wrap:balance]">
                Turn meetings into clear next steps.
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
                Pulse Thread helps teams capture what was decided, who owns each action, what needs follow-up, and where the work should go next.
              </p>
              <div className="control-layer-proof-list">
                <p><strong>Signals in:</strong> meetings, notes, emails, client calls, leadership check-ins, and training conversations.</p>
                <p><strong>Coaching in the middle:</strong> decisions, owners, blockers, tone, timing, and adoption prompts.</p>
                <p><strong>Execution out:</strong> follow-up drafts, task routing, meeting recaps, CRM notes, and Control Layer status pulses.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={pulseContactPath}
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
                >
                  Review PulseThread Fit
                </a>
                <a
                  href="/products"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
                >
                  View Product Suite
                </a>
              </div>
              <div className="control-compact-quote control-compact-quote--hero pulse-thread-quote--hero">
                <Image
                  src="/images/team/katalin-pulse-thread-quote.jpeg"
                  alt="Katalin Espey"
                  width={112}
                  height={112}
                />
                <div>
                  <p className="eyebrow text-[#ff7f4f]">Service Perspective</p>
                  <blockquote>Pulse Thread names the owner, keeps the context warm, and turns follow-up into visible work.</blockquote>
                  <p>Katalin Espey · Chief Growth Officer</p>
                </div>
              </div>
            </div>
            <div className="control-layer-hero-visual">
              <div className="control-layer-hero-image pulse-thread-hero-image">
                <Image
                  src="/images/products/adobe-stock/pulse-thread-coaching-assistant.jpeg"
                  alt="AI meeting assistant surfacing action items and real-time collaboration insights"
                  width={4752}
                  height={3168}
                  priority
                  sizes="(max-width: 1080px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div className="section-inner pulse-thread-hero-preview-anchor">
            <p className="eyebrow text-[color:var(--color-accent)]">Pulse Thread Preview</p>
            <h2>Meetings create motion. Pulse Thread turns motion into follow-through.</h2>
          </div>
        </section>

        <Reveal delayMs={40}>
          <PulseThreadPreview />
        </Reveal>

        <Reveal delayMs={90}>
          <section className="section-shell section-shell-dark control-crosswalk-section">
            <div className="section-inner">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <p className="eyebrow shrink-0 text-[color:var(--color-accent)]">Connected Paths</p>
                <div className="hidden h-px flex-1 bg-[color:var(--color-accent)]/70 lg:block" />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={pulseContactPath} className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-center text-sm font-semibold text-white hover:brightness-110">
                    Start PulseThread Review
                  </a>
                  <a href="/services" className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8">
                    See Service Paths
                  </a>
                </div>
              </div>

              <div className="control-crosswalk-grid">
                {[
                  { href: "/services/ai-agents-automations", title: "AI Agents & Automations", body: "Assistant flows that extract actions, draft follow-up, and keep human review intact." },
                  { href: "/services/workflow-managed-operations", title: "Workflow & Managed Operations", body: "Routing, ownership, cadence, support, and escalation once follow-up starts moving." },
                  { href: "/services/crm-revenue-operations", title: "CRM & Revenue Operations", body: "Lead, client, and meeting follow-up connected to pipeline and account visibility." },
                  { href: "/control-layer", title: "Farcelis Control Layer", body: "The operating home where decisions, owners, status, and next actions stay visible." },
                  { href: "/industries/education-enablement", title: "Education & Enablement", body: "Best fit when training, adoption, and coaching need to turn into changed behavior." },
                  { href: "/industries/growth-revenue-teams", title: "Growth & Revenue Teams", body: "Best fit when conversations, campaigns, and handoffs need cleaner follow-through." },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="control-crosswalk-card">
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </>
    );
  }

  return (
    <>
      <JsonLd data={productSchema} />
      <PageIntro
        eyebrow={product.eyebrow}
        title={product.title}
        description={product.description}
        actions={[
          { href: "/contact", label: "Request Product Review" },
          { href: "/products", label: "View Product Suite", variant: "secondary" },
        ]}
      />

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
