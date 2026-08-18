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
import { getProductBySlug, products, site, type Product } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

type ToolPageConfig = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryLabel: string;
  secondaryLabel: string;
  contactPath: string;
  signals: { label: string; text: string }[];
  quote?: {
    image: string;
    alt: string;
    eyebrow: string;
    text: string;
    byline: string;
  };
  connected: { href: string; title: string; body: string }[];
};

const standardToolPages: Record<string, ToolPageConfig> = {
  "intent-adaptive-learning-engine": {
    eyebrow: "INTENT+ Adaptive Learning Engine",
    title: "Turn AI training into real team behavior.",
    description:
      "INTENT+ gives each role a practical learning path, practice prompts, and adoption signals tied to the work people actually do.",
    image: "/images/industries/adobe-stock/education-enablement.jpeg",
    imageAlt: "Digital learning and AI enablement interface on a dark business background",
    primaryLabel: "Plan AI Adoption",
    secondaryLabel: "See Service Paths",
    contactPath:
      "/contact?work=ai-strategy-governance,ai-agents-automations,workflow-managed-operations,reporting-decision-systems&industry=education-enablement,operations-heavy-teams,small-mid-market-businesses&resource=tools-assessments#contact-top",
    signals: [
      { label: "Inputs", text: "roles, readiness, workflows, AI policies, training goals, and real team responsibilities." },
      { label: "Structure", text: "role-based lessons, prompt practice, checkpoints, reinforcement, and manager visibility." },
      { label: "Output", text: "adoption paths people can follow, measure, and keep using after training ends." },
    ],
    connected: [
      { href: "/services/ai-strategy-governance", title: "AI Strategy & Governance", body: "Rules, boundaries, review paths, and adoption structure before AI expands." },
      { href: "/services/ai-agents-automations", title: "AI Agents & Automations", body: "Assistant workflows that support the behavior teams are being trained to use." },
      { href: "/services/workflow-managed-operations", title: "Workflow & Managed Operations", body: "Cadence, ownership, and reinforcement after training moves into daily work." },
      { href: "/services/reporting-decision-systems", title: "Reporting & Decision Systems", body: "Adoption signals leaders can see before training fades into memory." },
      { href: "/industries/education-enablement", title: "Education & Enablement", body: "Best fit when learning needs to become repeatable operating behavior." },
      { href: "/industries/operations-heavy-teams", title: "Operations-Heavy Teams", body: "Best fit when teams need AI support inside busy intake, routing, and follow-up." },
    ],
  },
  "rapidramp-generator": {
    eyebrow: "RapidRamp Generator",
    title: "Turn SOPs and notes into launch-ready training.",
    description:
      "RapidRamp converts process documents, requirements, and workflow notes into onboarding modules, rollout plans, system maps, and reusable launch assets.",
    image: "/images/products/adobe-stock/rapidramp-generator.jpeg",
    imageAlt: "Hand placing an action plan tile into a dark digital implementation roadmap",
    primaryLabel: "Build Our Launch Kit",
    secondaryLabel: "See Service Paths",
    contactPath:
      "/contact?work=deployment-operations,workflow-managed-operations,app-portal-development,ai-strategy-governance,reporting-decision-systems&industry=education-enablement,operations-heavy-teams,professional-services-consulting&resource=tools-assessments#contact-top",
    signals: [
      { label: "Inputs", text: "SOPs, process notes, role context, requirements, launch constraints, and training goals." },
      { label: "Structure", text: "module outlines, rollout steps, knowledge checks, workflow maps, and reusable templates." },
      { label: "Output", text: "first-draft implementation assets the team can refine instead of starting from scratch." },
    ],
    connected: [
      { href: "/services/deployment-operations", title: "Deployment Operations", body: "Launch support, release structure, handoffs, and operational checks." },
      { href: "/services/workflow-managed-operations", title: "Workflow & Managed Operations", body: "Routing and cadence around the rollout once assets are ready." },
      { href: "/services/app-portal-development", title: "App & Portal Development", body: "Client portals, internal tools, and workspaces that may need onboarding assets." },
      { href: "/services/ai-strategy-governance", title: "AI Strategy & Governance", body: "Guidance for where generated materials need review, rules, and oversight." },
      { href: "/industries/education-enablement", title: "Education & Enablement", body: "Best fit when documentation needs to become useful training." },
      { href: "/industries/professional-services-consulting", title: "Professional Services & Consulting", body: "Best fit when client delivery needs repeatable onboarding and rollout structure." },
    ],
  },
  "blueprint-readiness-snapshot": {
    eyebrow: "Blueprint Readiness Snapshot",
    title: "Find the workflow problems before you build.",
    description:
      "Blueprint checks rhythm, data overlap, automation readiness, integration health, and governance so the next build starts from a clear operating picture.",
    image: "/images/resources/adobe-stock/tools-assessments.jpeg",
    imageAlt: "Dark digital audit checklist interface for readiness assessment",
    primaryLabel: "Start Readiness Review",
    secondaryLabel: "See Service Paths",
    contactPath:
      "/contact?work=ai-strategy-governance,workflow-managed-operations,reporting-decision-systems,platform-connections,dashboards-decision-views&industry=operations-heavy-teams,growth-revenue-teams,small-mid-market-businesses&resource=tools-assessments#contact-top",
    signals: [
      { label: "Inputs", text: "current tools, reporting gaps, duplicated data, automation ideas, and process friction." },
      { label: "Structure", text: "readiness questions, workflow scoring, risk patterns, priority actions, and oversight scope." },
      { label: "Output", text: "a clear snapshot of what to stabilize, connect, automate, or leave alone for now." },
    ],
    quote: {
      image: "/images/team/nathan-blueprint-quote.png",
      alt: "Nathan Espey",
      eyebrow: "Founder Note",
      text: "Blueprint is for the moment a leader knows the stack is messy but needs a clean first move.",
      byline: "Nathan Espey · Founder, Farcelis AI Consulting LLC",
    },
    connected: [
      { href: "/services/ai-strategy-governance", title: "AI Strategy & Governance", body: "Rules and review paths before AI or automation expands." },
      { href: "/services/workflow-managed-operations", title: "Workflow & Managed Operations", body: "Ownership, routing, cadence, and support once the friction is visible." },
      { href: "/services/reporting-decision-systems", title: "Reporting & Decision Systems", body: "Leadership-ready views for what is working, stuck, or risky." },
      { href: "/services/platform-connections", title: "Platform Connections", body: "Tool, form, CRM, document, and dashboard connections that reduce fragmentation." },
      { href: "/industries/operations-heavy-teams", title: "Operations-Heavy Teams", body: "Best fit when work arrives from everywhere and needs clearer routing." },
      { href: "/resources", title: "Tools & Assessments", body: "Use assessments to decide the right next move before committing to a build." },
    ],
  },
  "ai-marketing-blueprint-generator": {
    eyebrow: "AI Marketing Blueprint Generator",
    title: "Turn marketing activity into a working growth system.",
    description:
      "This blueprint connects audience, offer, content, SEO, campaigns, CRM follow-up, and reporting into one practical growth operating model.",
    image: "/images/services/adobe-stock/content-revenue-systems.jpeg",
    imageAlt: "Dark digital marketing and revenue system dashboard",
    primaryLabel: "Map Our Growth System",
    secondaryLabel: "See Service Paths",
    contactPath:
      "/contact?work=content-revenue-systems,crm-revenue-operations,seo-search-visibility,meta-ads-paid-social,google-ads-paid-search,ai-strategy-governance&industry=growth-revenue-teams,small-mid-market-businesses,professional-services-consulting&resource=tools-assessments#contact-top",
    signals: [
      { label: "Inputs", text: "audience, offers, content, SEO, paid channels, CRM stages, reporting, and follow-up gaps." },
      { label: "Structure", text: "content paths, campaign cadence, lead routing, owner rules, measurement loops, and AI support." },
      { label: "Output", text: "a growth blueprint that shows what to publish, promote, route, measure, and improve next." },
    ],
    quote: {
      image: "/images/team/celeste-growth-signal-quote.jpeg",
      alt: "Celeste Hartley",
      eyebrow: "Growth Perspective",
      text: "Growth systems work when the offer, message, channel, and follow-up all point in the same direction.",
      byline: "Celeste Hartley · Chief Marketing Officer",
    },
    connected: [
      { href: "/services/content-revenue-systems", title: "Content & Revenue Systems", body: "Offers, pages, content plans, and campaign structure tied to revenue follow-up." },
      { href: "/services/crm-revenue-operations", title: "CRM & Revenue Operations", body: "Lead capture, routing, follow-up, tracking, and revenue visibility." },
      { href: "/services/seo-search-visibility", title: "SEO & Search Visibility", body: "Search structure that helps the right buyers find the offer." },
      { href: "/services/meta-ads-paid-social", title: "Meta Ads / Paid Social", body: "Audience, creative, landing paths, and follow-up tied to the offer." },
      { href: "/industries/growth-revenue-teams", title: "Growth & Revenue Teams", body: "Best fit when campaigns and handoffs need visible follow-through." },
      { href: "/industries/small-mid-market-businesses", title: "Small & Mid-Market Businesses", body: "Best fit when growth needs practical systems without enterprise weight." },
    ],
  },
};

function StandardToolProductPage({ product, config }: { product: Product; config: ToolPageConfig }) {
  return (
    <>
      <section className="section-shell section-shell-dark control-layer-hero product-tool-hero">
        <div className="section-inner control-layer-hero-grid">
          <div className="control-layer-hero-copy">
            <p className="eyebrow text-[color:var(--color-accent)]">{config.eyebrow}</p>
            <h1 className="mt-4 text-[clamp(2rem,3.05vw,3.2rem)] font-medium leading-[1.03] tracking-[-0.055em] text-white [text-wrap:balance]">
              {config.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">{config.description}</p>
            <div className="control-layer-proof-list">
              {config.signals.map((signal) => (
                <p key={signal.label}>
                  <strong>{signal.label}:</strong> {signal.text}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={config.contactPath}
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
              >
                {config.primaryLabel}
              </a>
              <a
                href="/services"
                className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8"
              >
                {config.secondaryLabel}
              </a>
            </div>
            {config.quote ? (
              <div className="control-compact-quote control-compact-quote--hero">
                <Image src={config.quote.image} alt={config.quote.alt} width={112} height={112} />
                <div>
                  <p className="eyebrow text-[#ff7f4f]">{config.quote.eyebrow}</p>
                  <blockquote>{config.quote.text}</blockquote>
                  <p>{config.quote.byline}</p>
                </div>
              </div>
            ) : null}
          </div>
          <div className="control-layer-hero-visual">
            <div className="control-layer-hero-image product-tool-hero-image">
              <Image src={config.image} alt={config.imageAlt} width={1600} height={1100} priority sizes="(max-width: 1080px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-dark product-tool-overview-section">
          <div className="section-inner product-tool-overview-grid">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">What Usually Fits</p>
              <h2>{product.title} turns into useful work when the path is clear.</h2>
            </div>
            <div className="product-tool-step-grid">
              {product.delivery.slice(0, 3).map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="section-shell section-shell-dark control-crosswalk-section product-tool-connected-paths">
          <div className="section-inner">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <p className="eyebrow shrink-0 text-[color:var(--color-accent)]">Connected Paths</p>
              <div className="hidden h-px flex-1 bg-[color:var(--color-accent)]/70 lg:block" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={config.contactPath} className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-center text-sm font-semibold text-white hover:brightness-110">
                  {config.primaryLabel}
                </a>
                <a href="/services" className="site-cta inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 bg-cyan-100/6 px-5 py-2.5 text-center text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8">
                  See Service Paths
                </a>
              </div>
            </div>

            <div className="control-crosswalk-grid">
              {config.connected.map((item) => (
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
  const standardToolPage = standardToolPages[product.slug];
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

  if (standardToolPage) {
    return (
      <>
        <JsonLd data={productSchema} />
        <StandardToolProductPage product={product} config={standardToolPage} />
      </>
    );
  }

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
          <section className="section-shell section-shell-dark control-crosswalk-section pulse-thread-connected-paths">
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
