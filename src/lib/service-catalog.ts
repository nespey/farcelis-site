export type ServiceLink = {
  href: string;
  label: string;
  detail: string;
};

export type CapabilityGroup = {
  label: string;
  detail: string;
  headline: string;
  buyerPrompt: string;
  outcomes: string[];
  primaryCta: string;
  pathHref: string;
  actionHref: string;
  handoff: {
    title: string;
    body: string;
  };
  links: ServiceLink[];
};

export const contactPathFor = (work: string | string[]) => {
  const values = Array.isArray(work) ? work : [work];
  return `/contact?work=${encodeURIComponent(values.join(","))}`;
};

const servicePathFor = (slug: string) => `/services/${slug}`;

export type DirectService = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: string;
  secondaryCta?: {
    href: string;
    label: string;
  };
  buildKicker?: string;
  buildTitle?: string;
  buildSummary?: string;
  processKicker?: string;
  processTitle?: string;
  signalsKicker?: string;
  exclusionsKicker?: string;
  relatedTitle?: string;
  capabilities: string[];
  process: string[];
  signals: string[];
  exclusions: string[];
  related: ServiceLink[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    label: "Build",
    detail: "Need a website, quote tool, app, portal, dashboard, automation, or code cleaned up? Start here.",
    headline: "You need something built, fixed, or connected.",
    buyerPrompt:
      "Websites, quote tools, apps, dashboards, automations, and the connections between them.",
    outcomes: [
      "We build websites, apps, portals, dashboards, and internal tools.",
      "We build AI agents, automations, and the connections between your platforms.",
      "We clean up code, launch the work, document it, and make sure it can be owned.",
    ],
    primaryCta: "Build with Farcelis",
    pathHref: "/services/build",
    actionHref: contactPathFor([
      "website-development",
      "app-portal-development",
      "ai-agents-automations",
      "platform-connections",
      "dashboards-decision-views",
    ]),
    handoff: {
      title: "Build creates the asset. Grow makes it findable. Operate keeps it working.",
      body: "A site, app, portal, dashboard, or automation is only useful when it connects to visibility, follow-up, ownership, and support. Farcelis builds with that next handoff in mind.",
    },
    links: [
      {
        href: servicePathFor("website-development"),
        label: "Website Development",
        detail: "Websites that explain what you do and help visitors contact you.",
      },
      {
        href: servicePathFor("app-portal-development"),
        label: "App & Portal Development",
        detail: "Client portals, internal tools, and private apps for repeated work.",
      },
      {
        href: "/services/quote-pricing-tools",
        label: "Quote & Pricing Tools",
        detail: "Website tools that let visitors get an estimate and request follow-up.",
      },
      {
        href: servicePathFor("ai-agents-automations"),
        label: "AI Agents & Automations",
        detail: "Helpers for intake, follow-up, reports, CRM updates, and repeated tasks.",
      },
      {
        href: servicePathFor("platform-connections"),
        label: "Platform Connections",
        detail: "Make your website, CRM, forms, dashboards, and tools work together.",
      },
      {
        href: servicePathFor("dashboards-decision-views"),
        label: "Dashboards and Decision Views",
        detail: "Simple views that show what is happening, what is stuck, and what needs action.",
      },
    ],
  },
  {
    label: "Grow",
    detail: "Need more people to find you, understand you, and become leads? Start here.",
    headline: "You need better visibility and better follow-up.",
    buyerPrompt:
      "Search, ads, content, CRM, and lead follow-up that connect to real inquiries.",
    outcomes: [
      "We help buyers find you through SEO and AEO.",
      "We build ads, landing pages, content, and offers around what you sell.",
      "We connect leads to CRM, follow-up, reporting, and revenue handoff.",
    ],
    primaryCta: "Grow with Farcelis",
    pathHref: "/services/grow",
    actionHref: contactPathFor([
      "seo-search-visibility",
      "aeo-ai-search-visibility",
      "google-ads-paid-search",
      "meta-ads-paid-social",
      "crm-revenue-operations",
      "content-revenue-systems",
    ]),
    handoff: {
      title: "Grow creates movement. Operate keeps that movement from becoming chaos.",
      body: "Visibility, campaigns, content, and CRM only matter when someone owns the follow-through. Farcelis connects growth activity into operating rhythm, reporting, and decision support.",
    },
    links: [
      {
        href: servicePathFor("seo-search-visibility"),
        label: "SEO & Search Visibility",
        detail: "Help people find your business on Google and other search engines.",
      },
      {
        href: servicePathFor("aeo-ai-search-visibility"),
        label: "AEO & AI Search Visibility",
        detail: "Help AI search tools understand and recommend what your business offers.",
      },
      {
        href: servicePathFor("google-ads-paid-search"),
        label: "Google Ads / Paid Search",
        detail: "Ads for people already searching for what you sell.",
      },
      {
        href: servicePathFor("meta-ads-paid-social"),
        label: "Meta Ads / Paid Social",
        detail: "Facebook and Instagram ads tied to a clear offer and follow-up.",
      },
      {
        href: servicePathFor("crm-revenue-operations"),
        label: "CRM & Revenue Operations",
        detail: "Make sure leads are captured, followed up, tracked, and not lost.",
      },
      {
        href: servicePathFor("content-revenue-systems"),
        label: "Content & Revenue Systems",
        detail: "Plan pages, posts, offers, and campaigns that support sales.",
      },
    ],
  },
  {
    label: "Operate",
    detail: "Need someone to keep the work organized after it launches? Start here.",
    headline: "You need the work to stay organized and moving.",
    buyerPrompt:
      "Workflows, reporting, support, maintenance, and clearer ownership.",
    outcomes: [
      "We create rules for AI use, workflow, ownership, and decision-making.",
      "We put the Farcelis Control Layer around intake, visibility, reporting, and action.",
      "We manage operations, deployment continuity, maintenance, and support rhythm.",
    ],
    primaryCta: "Operate with Farcelis",
    pathHref: "/services/operate",
    actionHref: contactPathFor([
      "ai-strategy-governance",
      "workflow-managed-operations",
      "farcelis-control-layer",
      "reporting-decision-systems",
      "deployment-operations",
    ]),
    handoff: {
      title: "Operate stabilizes the system, and it can point back to what needs to be built or grown.",
      body: "When operations expose a missing portal, unclear reporting layer, weak campaign handoff, or fragile deployment path, Farcelis can move back into Build or Grow without losing the operating model.",
    },
    links: [
      {
        href: servicePathFor("ai-strategy-governance"),
        label: "AI Strategy & Governance",
        detail: "Decide where AI should help, what rules it needs, and who reviews it.",
      },
      {
        href: servicePathFor("workflow-managed-operations"),
        label: "Workflow & Managed Operations",
        detail: "Organize tasks, owners, handoffs, follow-up, and support.",
      },
      {
        href: "/control-layer",
        label: "The Farcelis Control Layer",
        detail: "A shared place to see requests, owners, status, and next actions.",
      },
      {
        href: servicePathFor("reporting-decision-systems"),
        label: "Reporting & Decision Systems",
        detail: "Reports that show what is working, what is stuck, and what to do next.",
      },
      {
        href: servicePathFor("deployment-operations"),
        label: "Deployment Operations",
        detail: "Keep websites, apps, hosting, updates, and support handled after launch.",
      },
    ],
  },
];

export function getCapabilityGroup(slug: string) {
  return capabilityGroups.find((group) => group.label.toLowerCase() === slug);
}

export const directServices: DirectService[] = [
  {
    slug: "website-development",
    navLabel: "Website Development",
    eyebrow: "Build / Website Development",
    title: "Build a website people understand, trust, and use.",
    summary:
      "New site, rebuild, cleanup, or custom feature: Farcelis builds the path from first visit to follow-up.",
    primaryCta: "Discuss website development",
    secondaryCta: { href: "/services/seo-search-visibility", label: "See SEO visibility" },
    buildKicker: "Where to Start",
    buildTitle: "Start with what the site needs to do.",
    buildSummary:
      "Build it new, rebuild what exists, or add the pages and forms that turn visitors into real follow-up.",
    processKicker: "How We Build",
    processTitle: "From rough idea to live website.",
    signalsKicker: "When This Helps",
    exclusionsKicker: "When It Does Not",
    relatedTitle: "Services that usually connect to website work.",
    capabilities: [
      "New website",
      "Website rebuild",
      "Service and landing pages",
      "Contact and quote forms",
      "Search-ready structure",
      "Follow-up connections",
    ],
    process: [
      "Define the offer and the people the site needs to reach.",
      "Choose the right path: custom, WordPress, Squarespace, or the current platform.",
      "Build the pages, forms, and buttons around how buyers ask for help.",
      "Connect inquiries to email, CRM, analytics, or reporting where needed.",
      "Launch with mobile, speed, search, and maintenance checks.",
    ],
    signals: [
      "The current site no longer explains what the business sells.",
      "Visitors ask basic questions the website should already answer.",
      "Inquiries, quote requests, or follow-up are still handled by hand.",
    ],
    exclusions: [
      "A logo-only refresh with no change to message, pages, or follow-up.",
      "One-off landing pages nobody will own after launch.",
      "A platform choice made before the website goals are clear.",
    ],
    related: [
      {
        href: "/services/seo-search-visibility",
        label: "SEO & Search Visibility",
        detail: "Make the site easier to find and understand.",
      },
      {
        href: "/services/crm-revenue-operations",
        label: "CRM & Revenue Operations",
        detail: "Turn inquiries into visible follow-up.",
      },
      {
        href: "/services/quote-pricing-tools",
        label: "Quote & Pricing Tools",
        detail: "Let buyers request a clearer estimate.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Keep pages, offers, and reporting connected.",
      },
    ],
  },
  {
    slug: "app-portal-development",
    navLabel: "App & Portal Development",
    eyebrow: "Build / App & Portal Development",
    title: "Apps, portals, and dashboards built around the work people need to control.",
    summary:
      "Farcelis turns repeated operational patterns into internal tools, client portals, intake systems, dashboards, and command surfaces that reduce scattered execution.",
    primaryCta: "Discuss app and portal development",
    secondaryCta: { href: "/control-layer", label: "Explore the Control Layer" },
    capabilities: [
      "Internal tools and operating portals",
      "Client intake and status environments",
      "Dashboards and command surfaces",
      "Role-based views and workflow states",
      "Release-ready documentation and handoff",
    ],
    process: [
      "Define the operating job the tool must perform.",
      "Map roles, permissions, data, and handoffs.",
      "Prototype the core workflow before expanding features.",
      "Build reusable components that match the Farcelis system standard.",
      "Document ownership, support, and improvement cadence.",
    ],
    signals: [
      "Teams are copying information between tools to understand status.",
      "Clients or internal teams need one place to see movement.",
      "A workflow is repeated often enough to deserve its own surface.",
    ],
    exclusions: [
      "Apps built before the process is understood.",
      "Feature lists with no ownership model.",
      "Dashboards that display information but do not change action.",
    ],
    related: [
      {
        href: "/control-layer",
        label: "Farcelis Control Layer",
        detail: "See the flagship command-surface model.",
      },
      {
        href: "/platforms",
        label: "Platforms & Integrations",
        detail: "Connect the tool to the systems already carrying the work.",
      },
      {
        href: "/services/quote-pricing-tools",
        label: "Quote & Pricing Tools",
        detail: "Build a buyer-facing quote experience when pricing questions slow down sales.",
      },
      {
        href: "/services/workflow-operations",
        label: "Workflow & Operations",
        detail: "Clarify the path of work before building the surface.",
      },
    ],
  },
  {
    slug: "dashboards-decision-views",
    navLabel: "Dashboards and Decision Views",
    eyebrow: "Build / Dashboards and Decision Views",
    title: "Dashboards and decision views built so leaders can see what needs action.",
    summary:
      "Farcelis builds practical dashboards, status views, and decision surfaces that show what is happening, what is stuck, who owns the next move, and what needs attention now.",
    primaryCta: "Discuss dashboards and decision views",
    secondaryCta: { href: "/services/reporting-decision-systems", label: "See reporting systems" },
    capabilities: [
      "Leadership dashboards and status views",
      "Operating metrics tied to action",
      "Client, team, or executive visibility surfaces",
      "Workflow, revenue, and delivery signal views",
      "Decision-ready layouts that show ownership and next steps",
    ],
    process: [
      "Clarify what decisions the dashboard needs to support.",
      "Identify the signals, data sources, and owners behind those decisions.",
      "Design the smallest useful view before expanding the system.",
      "Build the dashboard or decision surface inside the working stack.",
      "Connect the view to review cadence, handoff, and operating rhythm.",
    ],
    signals: [
      "People ask for updates because the current view is not clear.",
      "Dashboards exist but do not show what action should happen next.",
      "Leadership needs one place to see status, risk, ownership, and movement.",
    ],
    exclusions: [
      "Decorative reporting that looks polished but does not change decisions.",
      "Metric expansion before the business knows what each signal means.",
      "Dashboards with no owner, review rhythm, or follow-through path.",
    ],
    related: [
      {
        href: "/services/app-portal-development",
        label: "App & Portal Development",
        detail: "Build the working surface around the dashboard when people need to act inside it.",
      },
      {
        href: "/services/reporting-decision-systems",
        label: "Reporting & Decision Systems",
        detail: "Move from a dashboard into a broader decision rhythm.",
      },
      {
        href: "/services/quote-pricing-tools",
        label: "Quote & Pricing Tools",
        detail: "See how quote activity can become useful sales and pricing signal.",
      },
      {
        href: "/control-layer",
        label: "Farcelis Control Layer",
        detail: "Place dashboards inside the operating layer for visibility and action.",
      },
    ],
  },
  {
    slug: "ai-agents-automations",
    navLabel: "AI Agents & Automations",
    eyebrow: "Build / AI Agents & Automations",
    title: "AI agents and automations for repeated work, intake, and follow-up.",
    summary:
      "Farcelis builds practical automations and AI-assisted workflows that help teams collect information, follow up, update tools, prepare reports, and reduce repeated manual work.",
    primaryCta: "Discuss AI agents and automations",
    secondaryCta: { href: "/services/platform-connections", label: "See platform connections" },
    capabilities: [
      "Intake and follow-up automations",
      "CRM updates and task creation",
      "AI assistants for repeated internal work",
      "Report drafts, summaries, and routing",
      "Human review points before anything sensitive moves forward",
    ],
    process: [
      "Identify the repeated work that is wasting time.",
      "Map the inputs, tools, owners, and review points.",
      "Build the smallest useful automation first.",
      "Test the handoff before expanding the workflow.",
      "Document what it does, who owns it, and when it needs review.",
    ],
    signals: [
      "The team repeats the same update, summary, or follow-up every week.",
      "Leads or requests sit too long before someone acts.",
      "Useful information exists but has to be copied between tools by hand.",
    ],
    exclusions: [
      "Automations that remove needed human judgment.",
      "AI agents with no clear owner or review process.",
      "Workflows built before the business can explain the current process.",
    ],
    related: [
      {
        href: "/services/platform-connections",
        label: "Platform Connections",
        detail: "Connect the tools the automation needs to read from or write to.",
      },
      {
        href: "/services/crm-revenue-operations",
        label: "CRM & Revenue Operations",
        detail: "Use automation to improve lead capture and follow-up.",
      },
      {
        href: "/services/workflow-managed-operations",
        label: "Workflow & Managed Operations",
        detail: "Make sure automated work fits the way the team actually operates.",
      },
    ],
  },
  {
    slug: "platform-connections",
    navLabel: "Platform Connections",
    eyebrow: "Build / Platform Connections",
    title: "Platform connections that make your website, CRM, forms, and reports work together.",
    summary:
      "Farcelis connects the tools a business already uses so leads, requests, updates, dashboards, and follow-up do not get lost between systems.",
    primaryCta: "Discuss platform connections",
    secondaryCta: { href: "/platforms", label: "See platform experience" },
    capabilities: [
      "Website form and CRM handoff",
      "Email, task, and notification routing",
      "Dashboard and reporting data connections",
      "Automation paths between common business tools",
      "Connection checks before launch",
    ],
    process: [
      "List the tools that already carry the work.",
      "Map where information starts, changes, and needs to land.",
      "Connect the smallest useful path first.",
      "Test the handoff with real examples.",
      "Document owners, access, and support notes.",
    ],
    signals: [
      "People copy the same information from one system to another.",
      "Forms submit, but follow-up depends on someone noticing an email.",
      "Reports are incomplete because the data lives in too many places.",
    ],
    exclusions: [
      "Connections without clear access or ownership.",
      "Fragile workarounds that no one can support after launch.",
      "Data movement without review of privacy, security, or permission needs.",
    ],
    related: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "Make sure public forms and service pages create useful next steps.",
      },
      {
        href: "/services/ai-agents-automations",
        label: "AI Agents & Automations",
        detail: "Add automation once the connection path is clear.",
      },
      {
        href: "/services/dashboards-decision-views",
        label: "Dashboards and Decision Views",
        detail: "Turn connected data into views leaders can use.",
      },
    ],
  },
  {
    slug: "deployment-operations",
    navLabel: "Deployment Operations",
    eyebrow: "Build / Deployment Operations",
    title: "Deployment support for GitHub, Vercel, domains, releases, and live application upkeep.",
    summary:
      "Farcelis Deployment Operations helps clients move from idea, rough build, or existing repository into a clean, deployed, documented, and manageable website, app, portal, dashboard, or AI-assisted tool.",
    primaryCta: "Discuss deployment operations",
    secondaryCta: { href: "/services/managed-operations", label: "See managed operations" },
    capabilities: [
      "Idea-to-build intake and technical direction",
      "GitHub and Vercel release paths",
      "Domain, DNS, and environment review",
      "Secrets and dependency readiness checks",
      "Launch documentation and rollback notes",
      "Business-hours support cadence and escalation rules",
    ],
    process: [
      "Clarify whether the client has an idea, existing site, partial build, repository, or deployed app.",
      "For idea-stage clients, define the minimum viable build, codebase, and deployment path.",
      "Inventory the app, repo, hosting, domains, secrets, and external APIs where they already exist.",
      "Define what Farcelis supports and what remains client-owned.",
      "Create a release checklist for changes, previews, and production pushes.",
      "Set monitoring, issue intake, and documentation habits.",
      "Move from pilot support into a repeatable operating plan.",
    ],
    signals: [
      "The client has a clear idea for a website, app, portal, dashboard, or automation but does not know where to start.",
      "A useful app exists but ownership after launch is unclear.",
      "GitHub, Vercel, domains, and secrets feel fragile or undocumented.",
      "The business needs a release rhythm instead of one-off fixes.",
    ],
    exclusions: [
      "Emergency 24/7 infrastructure support without a support agreement.",
      "Undocumented access to sensitive client systems.",
      "Apps whose legal, security, or data ownership cannot be clarified.",
    ],
    related: [
      {
        href: "/services/managed-operations",
        label: "Managed Operations",
        detail: "Keep operating pressure moving while the system matures.",
      },
      {
        href: "/services/app-portal-development",
        label: "App & Portal Development",
        detail: "Build the client-facing or internal tool with launch support in mind.",
      },
      {
        href: "/control-layer",
        label: "Farcelis Control Layer",
        detail: "Place deployment work inside a visible command rhythm.",
      },
    ],
  },
  {
    slug: "quote-pricing-tools",
    navLabel: "Quote & Pricing Tools",
    eyebrow: "Build / Quote & Pricing Tools",
    title: "Website quote builders that help buyers understand cost before they call.",
    summary:
      "Farcelis builds website tools that let visitors answer a few questions, see an estimate or price range, and send the request to your team.",
    primaryCta: "Ask about a quote builder",
    secondaryCta: { href: "/services/website-development", label: "See website development" },
    capabilities: [
      "Quote builders and estimate request forms",
      "Price ranges based on simple questions",
      "Package selectors and add-on choices",
      "Contact forms tied to the quote details",
      "Email, CRM, and reporting follow-up",
    ],
    process: [
      "List the questions a buyer must answer.",
      "Map the service options, add-ons, and price ranges.",
      "Build the quote builder into the website.",
      "Send the quote request and contact details to the right person.",
      "Track which services people ask about most.",
    ],
    signals: [
      "Buyers ask for pricing before they are ready for a sales call.",
      "The team spends time creating similar estimates by hand.",
      "A simple price range would help visitors decide whether to keep going.",
    ],
    exclusions: [
      "Pricing logic that the business cannot explain or maintain.",
      "Instant final prices for work that still needs human review.",
      "Forms that collect details but do not send them anywhere useful.",
    ],
    related: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "Place the quote tool inside a clear website and service path.",
      },
      {
        href: "/services/app-portal-development",
        label: "App & Portal Development",
        detail: "Turn the quote flow into a fuller client or internal tool when needed.",
      },
      {
        href: "/services/marketing-automation-crm",
        label: "CRM & Revenue Operations",
        detail: "Route quote requests into follow-up, pipeline, and reporting.",
      },
      {
        href: "/services/dashboards-decision-views",
        label: "Dashboards and Decision Views",
        detail: "See which services, budgets, and quote paths are creating interest.",
      },
    ],
  },
  {
    slug: "seo-search-visibility",
    navLabel: "SEO & Search Visibility",
    eyebrow: "Grow / SEO & Search Visibility",
    title: "Search visibility that helps people find, understand, and act on what you offer.",
    summary:
      "Farcelis improves the pages, structure, topics, metadata, internal paths, and authority signals that help people find the business through traditional search.",
    primaryCta: "Discuss SEO search visibility",
    secondaryCta: { href: "/services/aeo-ai-search-visibility", label: "See AEO visibility" },
    capabilities: [
      "Technical SEO and index readiness",
      "Service-page structure and metadata",
      "Topic and buyer-question mapping",
      "Resource and internal-link planning",
      "Search visibility reporting tied to qualified next actions",
    ],
    process: [
      "Baseline how search engines currently read the site.",
      "Clarify the services, audiences, and buyer questions that need pages.",
      "Clean page structure, metadata, routes, links, and content gaps.",
      "Build or revise the pages and resources that support search intent.",
      "Track movement in plain business terms instead of vanity metrics.",
    ],
    signals: [
      "People search for the kind of work you do but do not find you clearly.",
      "The site has pages, but they are not organized around buyer intent.",
      "Search activity is disconnected from landing pages, forms, and follow-up.",
    ],
    exclusions: [
      "Keyword stuffing disconnected from the real offer.",
      "Ranking promises without measurement, authority, or content quality.",
      "Traffic growth that does not connect to a qualified next action.",
    ],
    related: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "Give search traffic a clearer public structure and conversion path.",
      },
      {
        href: "/services/aeo-ai-search-visibility",
        label: "AEO / AI Search Visibility",
        detail: "Make the offer easier for AI search tools to understand and cite.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Turn SEO work into a repeatable publishing and campaign rhythm.",
      },
    ],
  },
  {
    slug: "aeo-ai-search-visibility",
    navLabel: "AEO / AI Search Visibility",
    eyebrow: "Grow / AEO / AI Search Visibility",
    title: "AI search visibility that helps tools like ChatGPT understand what you offer.",
    summary:
      "Farcelis structures pages, resources, proof, schema, and question-answer content so AI search tools can understand what you do and summarize it accurately.",
    primaryCta: "Discuss AEO and AI search visibility",
    secondaryCta: { href: "/services/seo-search-visibility", label: "See SEO visibility" },
    capabilities: [
      "AI search readiness review",
      "Question and answer content architecture",
      "Schema, evidence, and citation signal planning",
      "Service pages structured for AI summaries",
      "Resource paths that make expertise easier to reference",
    ],
    process: [
      "Review how AI search tools currently describe the business.",
      "Identify the questions buyers and AI systems need answered clearly.",
      "Structure service pages, resources, proof, and schema around those answers.",
      "Build content that is useful to people and clear to AI search tools.",
      "Monitor whether the business is being summarized accurately over time.",
    ],
    signals: [
      "AI tools describe the company vaguely, incorrectly, or incompletely.",
      "The offer depends on expertise that is not clearly structured online.",
      "Buyers need quick answers before they are ready to contact you.",
    ],
    exclusions: [
      "AI visibility work with no real service clarity behind it.",
      "Generic answer content that does not reflect the actual offer.",
      "Citation chasing without proof, resources, or page structure.",
    ],
    related: [
      {
        href: "/services/seo-search-visibility",
        label: "SEO & Search Visibility",
        detail: "Strengthen the traditional search foundation around the same offer.",
      },
      {
        href: "/resources",
        label: "Resources",
        detail: "Use playbooks and reports as answer-ready proof assets.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Keep answer-ready content moving with a publishing rhythm.",
      },
    ],
  },
  {
    slug: "seo-aeo-visibility",
    navLabel: "SEO & AEO Visibility",
    eyebrow: "Grow / SEO & AEO Visibility",
    title: "Search visibility for Google and AI search tools.",
    summary:
      "Farcelis improves pages, structure, proof, and answers so buyers, Google, and AI search tools can understand what the company does.",
    primaryCta: "Discuss search visibility",
    secondaryCta: { href: "/resources", label: "See resource strategy" },
    capabilities: [
      "Technical SEO and index readiness",
      "AEO-focused question and answer structure",
      "Schema, metadata, and service-page clarity",
      "Resource and playbook planning",
      "Citation, review, and authority signals",
    ],
    process: [
      "Baseline how search engines and AI search tools understand the company.",
      "Clean service architecture, metadata, routes, and schema opportunities.",
      "Build pages and resources around buyer questions.",
      "Connect proof, results, and citations to service claims.",
      "Report visibility movement in plain operational terms.",
    ],
    signals: [
      "People ask for services you offer but cannot find them clearly.",
      "AI search tools describe the company vaguely or incompletely.",
      "Content exists but is not organized around searchable buyer intent.",
    ],
    exclusions: [
      "Keyword stuffing disconnected from real service delivery.",
      "Ranking promises without evidence or measurement.",
      "Content volume that creates more maintenance than value.",
    ],
    related: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "Give search tools and buyers a clearer public structure.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Turn visibility work into a repeatable publishing rhythm.",
      },
      {
        href: "/resources",
        label: "Resources",
        detail: "Use playbooks and reports as conversion-ready authority assets.",
      },
    ],
  },
  {
    slug: "google-ads-paid-search",
    navLabel: "Google Ads / Paid Search",
    eyebrow: "Grow / Google Ads / Paid Search",
    title: "Paid search campaigns connected to landing pages, tracking, and follow-up.",
    summary:
      "Farcelis builds Google Ads and paid search paths around the offer, the landing page, the conversion action, the tracking, and the follow-up that happens after a lead arrives.",
    primaryCta: "Discuss Google Ads and paid search",
    secondaryCta: { href: "/services/meta-ads-paid-social", label: "See paid social" },
    capabilities: [
      "Google Search campaign structure",
      "Offer, keyword, and landing-page alignment",
      "Conversion tracking and CRM handoff",
      "Budget, query, and lead-quality review",
      "Reporting tied to next-step decisions",
    ],
    process: [
      "Clarify the offer, search intent, and conversion action before spend begins.",
      "Audit landing pages, tracking, CRM handoff, and existing campaigns.",
      "Build a search structure around high-intent terms and measurable actions.",
      "Review early signal quality and adjust queries, pages, and budget.",
      "Report what happened, what changed, and what decision comes next.",
    ],
    signals: [
      "People are already searching for the problem, service, or offer.",
      "Paid traffic exists but conversion evidence is unclear.",
      "Leads arrive without a clean handoff into CRM or follow-up.",
    ],
    exclusions: [
      "Paid search without a real landing page or tracking path.",
      "Budget spend disconnected from lead quality and sales follow-up.",
      "Set-and-forget campaigns with no review cadence.",
    ],
    related: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "Create landing pages that convert search intent into action.",
      },
      {
        href: "/services/marketing-automation-crm",
        label: "CRM & Revenue Operations",
        detail: "Route paid-search leads into visible follow-up.",
      },
      {
        href: "/services/meta-ads-paid-social",
        label: "Meta Ads / Paid Social",
        detail: "Build audience and creative paths alongside search demand.",
      },
    ],
  },
  {
    slug: "meta-ads-paid-social",
    navLabel: "Meta Ads / Paid Social",
    eyebrow: "Grow / Meta Ads / Paid Social",
    title: "Paid social campaigns built around audience, creative, offer, and lead handling.",
    summary:
      "Farcelis builds Meta Ads and paid social paths that connect audience, creative, landing page, lead capture, CRM handoff, and reporting into one growth system.",
    primaryCta: "Discuss Meta Ads and paid social",
    secondaryCta: { href: "/services/google-ads-paid-search", label: "See paid search" },
    capabilities: [
      "Audience and campaign structure",
      "Creative and offer testing",
      "Landing-page and lead-form alignment",
      "CRM, follow-up, and reporting handoff",
      "Performance review tied to the next decision",
    ],
    process: [
      "Clarify the audience, offer, proof, and action the campaign should create.",
      "Map creative, landing page, form, CRM, and follow-up before launch.",
      "Build paid social campaigns with simple testing logic.",
      "Review signal quality across clicks, leads, cost, and follow-up movement.",
      "Use the learning to improve offers, pages, content, and revenue operations.",
    ],
    signals: [
      "The business needs attention before buyers are actively searching.",
      "Social campaigns create activity but not clean follow-up.",
      "Creative, landing pages, and lead handling are not working as one path.",
    ],
    exclusions: [
      "Paid social spend without an offer or follow-up path.",
      "Creative testing with no landing-page or CRM discipline.",
      "Reporting that celebrates clicks while leads stall.",
    ],
    related: [
      {
        href: "/services/google-ads-paid-search",
        label: "Google Ads / Paid Search",
        detail: "Capture high-intent demand alongside paid social attention.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Use campaign learning to strengthen content and offers.",
      },
      {
        href: "/services/marketing-automation-crm",
        label: "CRM & Revenue Operations",
        detail: "Make paid social leads visible, routed, and followed up.",
      },
    ],
  },
  {
    slug: "google-meta-ads",
    navLabel: "Google & Meta Ads",
    eyebrow: "Grow / Google & Meta Ads",
    title: "Paid campaigns connected to landing pages, tracking, CRM handoff, and revenue follow-through.",
    summary:
      "Farcelis manages Google and Meta campaign systems as part of a broader growth path: offer, landing page, audience, tracking, lead handling, and reporting.",
    primaryCta: "Discuss paid growth",
    secondaryCta: { href: "/services/website-development", label: "See website development" },
    capabilities: [
      "Google Search and lead-generation campaign structure",
      "Meta campaign planning and audience testing",
      "Landing page and offer alignment",
      "Conversion tracking and CRM handoff",
      "Performance review and budget discipline",
    ],
    process: [
      "Clarify the offer, audience, and conversion action before spending.",
      "Audit landing pages, tracking, CRM handoff, and current campaigns.",
      "Build a campaign structure tied to a real operating owner.",
      "Review early signals and adjust keywords, creative, audiences, and budget.",
      "Report what happened, what changed, and what decision comes next.",
    ],
    signals: [
      "Ad spend is happening without clean conversion evidence.",
      "Leads arrive but do not move cleanly into follow-up.",
      "The business needs demand now while organic systems mature.",
    ],
    exclusions: [
      "Media spend without landing page or tracking readiness.",
      "Set-and-forget campaigns with no operating cadence.",
      "Vanity metrics that do not connect to sales movement.",
    ],
    related: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "Create pages that turn paid traffic into a next action.",
      },
      {
        href: "/services/marketing-automation-crm",
        label: "Marketing Automation & CRM",
        detail: "Route leads and follow-up without losing signal.",
      },
      {
        href: "/services/seo-aeo-visibility",
        label: "SEO & AEO Visibility",
        detail: "Let paid learning strengthen the organic visibility path.",
      },
    ],
  },
  {
    slug: "marketing-automation-crm",
    navLabel: "Marketing Automation & CRM",
    eyebrow: "Grow / Marketing Automation & CRM",
    title: "Automation and CRM systems that make leads, customers, and follow-up easier to manage.",
    summary:
      "Farcelis cleans up CRM paths, automates lifecycle steps, and builds practical handoff systems so marketing activity turns into visible revenue work.",
    primaryCta: "Discuss automation and CRM",
    secondaryCta: { href: "/platforms", label: "See platforms and integrations" },
    capabilities: [
      "CRM cleanup and lifecycle structure",
      "Lead routing and ownership rules",
      "Email and follow-up automation",
      "Pipeline visibility and reporting",
      "Sales-service handoff support",
    ],
    process: [
      "Map where leads, customers, and requests currently enter.",
      "Identify broken fields, ownership gaps, and stalled handoffs.",
      "Design the minimum automation that improves movement.",
      "Connect forms, campaigns, CRM stages, and reporting.",
      "Document the rhythm for review, cleanup, and optimization.",
    ],
    signals: [
      "Follow-up depends on memory or individual effort.",
      "CRM data exists but leadership cannot trust the picture.",
      "Marketing creates activity without a clean revenue path.",
    ],
    exclusions: [
      "Automation added before ownership is defined.",
      "Complex nurture systems with no usable source data.",
      "CRM rebuilds that ignore how the team actually sells and serves.",
    ],
    related: [
      {
        href: "/platforms",
        label: "Platforms & Integrations",
        detail: "Connect the CRM to the rest of the operating stack.",
      },
      {
        href: "/services/workflow-operations",
        label: "Workflow & Operations",
        detail: "Clarify ownership and handoff rules before automation expands.",
      },
      {
        href: "/services/google-meta-ads",
        label: "Google & Meta Ads",
        detail: "Make campaign leads visible and actionable.",
      },
    ],
  },
  {
    slug: "crm-revenue-operations",
    navLabel: "CRM & Revenue Operations",
    eyebrow: "Grow / CRM & Revenue Operations",
    title: "CRM and revenue operations that keep leads from getting lost.",
    summary:
      "Farcelis helps businesses capture leads clearly, route them to the right follow-up, track status, and see what is happening after someone raises their hand.",
    primaryCta: "Discuss CRM and revenue operations",
    secondaryCta: { href: "/services/marketing-automation-crm", label: "See marketing automation" },
    capabilities: [
      "Lead capture and routing",
      "CRM cleanup and field structure",
      "Follow-up stages and task paths",
      "Pipeline and revenue reporting",
      "Form, email, and campaign handoff",
    ],
    process: [
      "Review how leads enter the business today.",
      "Clean the fields, stages, owners, and follow-up rules.",
      "Connect forms, campaigns, and quote requests to the CRM.",
      "Build reporting around real next actions.",
      "Document the follow-up path so the team can run it.",
    ],
    signals: [
      "Leads arrive but no one is sure who owns the next step.",
      "The CRM has records but does not show what needs action.",
      "Marketing activity is disconnected from sales follow-up.",
    ],
    exclusions: [
      "CRM cleanup with no agreement on how follow-up should work.",
      "Fields and dashboards no one will maintain.",
      "Campaign reporting that does not connect to actual inquiries.",
    ],
    related: [
      {
        href: "/services/quote-pricing-tools",
        label: "Quote & Pricing Tools",
        detail: "Send quote requests into a cleaner follow-up path.",
      },
      {
        href: "/services/platform-connections",
        label: "Platform Connections",
        detail: "Connect forms, email, CRM, and reporting.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Tie content and campaigns back to lead handling.",
      },
    ],
  },
  {
    slug: "content-revenue-systems",
    navLabel: "Content & Revenue Systems",
    eyebrow: "Grow / Content & Revenue Systems",
    title: "Content, campaigns, and revenue operations arranged into a repeatable growth system.",
    summary:
      "Farcelis turns blogs, social, offers, newsletters, SEO, campaigns, and reporting into a coordinated system instead of scattered content activity.",
    primaryCta: "Discuss growth systems",
    secondaryCta: { href: "/insights", label: "See insights" },
    capabilities: [
      "Offer and audience structure",
      "Editorial and social cadence",
      "SEO-informed content planning",
      "Campaign and launch coordination",
      "Revenue reporting and decision rhythm",
    ],
    process: [
      "Clarify the buyer, offer, proof, and conversion path.",
      "Organize existing content, resources, and campaign assets.",
      "Build a monthly rhythm for planning, creation, publishing, and review.",
      "Connect content to CRM, ads, SEO, and resource access where useful.",
      "Measure what created attention, movement, and qualified follow-up.",
    ],
    signals: [
      "Content is busy but not tied to revenue decisions.",
      "Social, blog, SEO, and campaigns operate in separate lanes.",
      "The company needs a repeatable way to turn expertise into demand.",
    ],
    exclusions: [
      "Content volume without a business objective.",
      "Generic posts that do not reflect Farcelis-level judgment.",
      "Campaigns launched without owner, offer, or follow-up path.",
    ],
    related: [
      {
        href: "/services/seo-aeo-visibility",
        label: "SEO & AEO Visibility",
        detail: "Make the content findable and useful in answer surfaces.",
      },
      {
        href: "/services/google-meta-ads",
        label: "Google & Meta Ads",
        detail: "Turn campaign testing into stronger audience and offer intelligence.",
      },
      {
        href: "/insights",
        label: "Insights",
        detail: "Use Farcelis thinking as the public proof layer.",
      },
    ],
  },
  {
    slug: "reporting-decision-systems",
    navLabel: "Reporting & Decision Systems",
    eyebrow: "Operate / Reporting & Decision Systems",
    title: "Reporting and decision systems that show leaders what needs action next.",
    summary:
      "Farcelis turns scattered status, dashboards, meetings, and operating signals into leadership-ready visibility that supports clearer decisions and faster intervention.",
    primaryCta: "Discuss reporting systems",
    secondaryCta: { href: "/control-layer", label: "Explore the Control Layer" },
    capabilities: [
      "Executive dashboard and status model design",
      "Decision rhythm and review cadence",
      "Workflow, revenue, and delivery signal mapping",
      "Intervention thresholds and ownership views",
      "Reporting handoff into Control Layer environments",
    ],
    process: [
      "Clarify which decisions are currently late, unclear, or unsupported.",
      "Identify the signals, systems, owners, and reporting gaps behind those decisions.",
      "Design the smallest useful visibility model before expanding dashboards.",
      "Connect reporting into operating cadence, ownership, and escalation paths.",
      "Document how the system should be reviewed, updated, and improved.",
    ],
    signals: [
      "Leadership meetings create discussion but not clear movement.",
      "Dashboards exist, but no one knows what decision they are supposed to drive.",
      "Important risks surface only after the business is already reacting.",
    ],
    exclusions: [
      "Decorative dashboards with no operating owner.",
      "Reports that duplicate existing data without changing decisions.",
      "Metric expansion before the business defines what action each signal supports.",
    ],
    related: [
      {
        href: "/control-layer",
        label: "Farcelis Control Layer",
        detail: "Place reporting inside the command surface for action.",
      },
      {
        href: "/services/workflow-operations",
        label: "Workflow & Operations",
        detail: "Connect visibility to how work actually moves.",
      },
      {
        href: "/services/managed-operations",
        label: "Managed Operations",
        detail: "Use reporting cadence to drive follow-through.",
      },
    ],
  },
  {
    slug: "workflow-managed-operations",
    navLabel: "Workflow & Managed Operations",
    eyebrow: "Operate / Workflow & Managed Operations",
    title: "Workflow and managed operations support for work that needs to stay organized.",
    summary:
      "Farcelis helps organize tasks, owners, handoffs, follow-up, reporting, and support so the work keeps moving after the first build or campaign is live.",
    primaryCta: "Discuss workflow and managed operations",
    secondaryCta: { href: "/services/managed-operations", label: "See managed operations" },
    capabilities: [
      "Task and owner mapping",
      "Intake, routing, and escalation paths",
      "Follow-up rhythm and support cadence",
      "Operating checklists and review habits",
      "Managed support for live websites, tools, and workflows",
    ],
    process: [
      "Map where work enters and who owns each step.",
      "Clarify handoffs, timing, and escalation points.",
      "Set the cadence for review, reporting, and support.",
      "Document the workflow so it can be repeated.",
      "Operate and improve the path as real work moves through it.",
    ],
    signals: [
      "People ask for updates because status is unclear.",
      "Work gets done, but only because one person remembers everything.",
      "A website, app, dashboard, or automation needs support after launch.",
    ],
    exclusions: [
      "Managed work with no owner on the client side.",
      "Support requests without a clear intake path.",
      "Operating cadence that no one is willing to follow.",
    ],
    related: [
      {
        href: "/services/deployment-operations",
        label: "Deployment Operations",
        detail: "Keep live websites, apps, and tools stable after release.",
      },
      {
        href: "/control-layer",
        label: "The Farcelis Control Layer",
        detail: "Use a shared view for requests, owners, status, and next actions.",
      },
      {
        href: "/services/reporting-decision-systems",
        label: "Reporting & Decision Systems",
        detail: "Make the operating rhythm visible to leaders.",
      },
    ],
  },
];

export function getDirectService(slug: string) {
  return directServices.find((service) => service.slug === slug);
}
