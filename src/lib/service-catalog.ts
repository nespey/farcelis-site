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
  capabilities: string[];
  process: string[];
  signals: string[];
  exclusions: string[];
  related: ServiceLink[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    label: "Build",
    detail: "Need a website, app, portal, dashboard, automation, or code cleaned up and launched? Start here.",
    headline: "You have an idea or messy system. We turn it into something real.",
    buyerPrompt:
      "If you need something built, rebuilt, connected, coded, launched, or made usable, Build is where you start.",
    outcomes: [
      "We build websites, apps, portals, dashboards, and internal tools.",
      "We build AI agents, automations, and the connections between your platforms.",
      "We clean up code, launch the work, document it, and make sure it can be owned.",
    ],
    primaryCta: "Talk Through a Build",
    pathHref: "/services/build",
    actionHref: "/contact/build",
    handoff: {
      title: "Build creates the asset. Grow makes it findable. Operate keeps it working.",
      body: "A site, app, portal, dashboard, or automation is only useful when it connects to visibility, follow-up, ownership, and support. Farcelis builds with that next handoff in mind.",
    },
    links: [
      {
        href: "/services/website-development",
        label: "Website Development",
        detail: "We build or rebuild your website, service pages, landing pages, and inquiry paths so people understand what you offer and what to do next.",
      },
      {
        href: "/services/app-portal-development",
        label: "App & Portal Development",
        detail: "We build web apps and private portals where clients, teams, or leaders can log in, see information, request work, and manage activity.",
      },
      {
        href: "/platforms",
        label: "AI Agents & Automations",
        detail: "We build assistants and automated workflows that help with intake, follow-up, reporting, CRM updates, and repeatable tasks.",
      },
      {
        href: "/platforms",
        label: "Platform Connections",
        detail: "We connect the tools you already use so your website, CRM, forms, workspaces, dashboards, and automations stop living in separate places.",
      },
      {
        href: "/services/reporting-decision-systems",
        label: "Dashboards and Decision Views",
        detail: "We build the dashboards and views leaders need to see what is happening, what is stuck, and what needs action.",
      },
    ],
  },
  {
    label: "Grow",
    detail: "Already have something to sell? Start here for SEO, AEO, ads, content, CRM, and lead follow-up.",
    headline: "You need the right people to find you, understand you, and take action.",
    buyerPrompt:
      "If you already have an offer but need more visibility, better campaigns, stronger content, or cleaner lead handling, Grow is where you start.",
    outcomes: [
      "We help buyers find you through SEO and AEO.",
      "We build ads, landing pages, content, and offers around what you sell.",
      "We connect leads to CRM, follow-up, reporting, and revenue handoff.",
    ],
    primaryCta: "Map a Growth Path",
    pathHref: "/services/grow",
    actionHref: "/contact/grow",
    handoff: {
      title: "Grow creates movement. Operate keeps that movement from becoming chaos.",
      body: "Visibility, campaigns, content, and CRM only matter when someone owns the follow-through. Farcelis connects growth activity into operating rhythm, reporting, and decision support.",
    },
    links: [
      {
        href: "/services/seo-aeo-visibility",
        label: "SEO & Search Visibility",
        detail: "We improve the pages, structure, topics, and signals that help people find you in traditional search.",
      },
      {
        href: "/services/seo-aeo-visibility",
        label: "AEO / AI Search Visibility",
        detail: "AEO means answer-engine optimization: we structure your site so AI search tools can understand, summarize, and cite what you offer.",
      },
      {
        href: "/services/google-meta-ads",
        label: "Google Ads / Paid Search",
        detail: "We build paid search paths tied to real landing pages, tracking, CRM follow-up, and measurable next steps.",
      },
      {
        href: "/services/google-meta-ads",
        label: "Meta Ads / Paid Social",
        detail: "We build social ad paths with audience, creative, landing page, lead handling, and follow-up in one plan.",
      },
      {
        href: "/services/marketing-automation-crm",
        label: "CRM & Revenue Operations",
        detail: "We clean up how leads are captured, routed, followed up, tracked, and reported so opportunities do not disappear.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "We plan the content, offers, campaigns, and publishing rhythm that keeps your market hearing from you with a purpose.",
      },
    ],
  },
  {
    label: "Operate",
    detail: "Need the work managed after it exists? Start here for Control Layer, workflows, reporting, support, and maintenance.",
    headline: "You need the work to stay visible, owned, managed, and moving.",
    buyerPrompt:
      "If you already have systems, tools, campaigns, code, or teams in motion and need them managed with control, Operate is where you start.",
    outcomes: [
      "We create rules for AI use, workflow, ownership, and decision-making.",
      "We put the Farcelis Control Layer around intake, visibility, reporting, and action.",
      "We manage operations, deployment continuity, maintenance, and support rhythm.",
    ],
    primaryCta: "Stabilize Operations",
    pathHref: "/services/operate",
    actionHref: "/contact/operate",
    handoff: {
      title: "Operate stabilizes the system, and it can point back to what needs to be built or grown.",
      body: "When operations expose a missing portal, unclear reporting layer, weak campaign handoff, or fragile deployment path, Farcelis can move back into Build or Grow without losing the operating model.",
    },
    links: [
      {
        href: "/services/ai-strategy-governance",
        label: "AI Strategy & Governance",
        detail: "We help you decide where AI should be used, where it should not, who owns it, and how it gets reviewed.",
      },
      {
        href: "/services/workflow-operations",
        label: "Workflow & Managed Operations",
        detail: "We design the workflow, ownership, cadence, follow-up, reporting, and support rhythm that keeps work moving.",
      },
      {
        href: "/control-layer",
        label: "The Farcelis Control Layer",
        detail: "This is our operating environment for intake, visibility, ownership, reporting, intervention, and action.",
      },
      {
        href: "/services/reporting-decision-systems",
        label: "Reporting & Decision Systems",
        detail: "We build the reporting views and decision rhythm leaders need to see what is working, what is stuck, and what needs action.",
      },
      {
        href: "/services/deployment-operations",
        label: "Deployment Operations",
        detail: "We keep the websites, apps, portals, dashboards, code releases, hosting path, documentation, and support rhythm managed after launch.",
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
    title: "Websites that explain the offer, capture demand, and connect into the operating system.",
    summary:
      "Farcelis builds service websites, landing pages, resource hubs, and conversion paths that make the business easier to understand and easier to act on.",
    primaryCta: "Discuss website development",
    secondaryCta: { href: "/services/seo-aeo-visibility", label: "See SEO & AEO visibility" },
    capabilities: [
      "Site architecture and page flow",
      "Conversion-ready service pages",
      "Resource and gated access paths",
      "Analytics, forms, and CRM handoff",
      "Performance, accessibility, and search foundations",
    ],
    process: [
      "Clarify the offer, audience, and page inventory.",
      "Map visitor questions to a qualified next action.",
      "Build inside the existing stack and visual system.",
      "Connect forms, analytics, CRM handoff, and tracking.",
      "Launch with mobile, metadata, speed, and route checks.",
    ],
    signals: [
      "The site no longer represents what the company actually sells.",
      "Offers live in conversations instead of clear pages.",
      "Traffic arrives but does not create a qualified next action.",
    ],
    exclusions: [
      "Logo-only refreshes without a clearer conversion path.",
      "Disconnected landing pages with no owner or follow-up.",
      "Sites that cannot be maintained after launch.",
    ],
    related: [
      {
        href: "/services/seo-aeo-visibility",
        label: "SEO & AEO Visibility",
        detail: "Make the site easier for buyers and answer engines to understand.",
      },
      {
        href: "/services/marketing-automation-crm",
        label: "Marketing Automation & CRM",
        detail: "Turn form activity and inquiries into visible follow-up.",
      },
      {
        href: "/services/content-revenue-systems",
        label: "Content & Revenue Systems",
        detail: "Connect publishing, campaigns, and revenue reporting.",
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
        href: "/services/workflow-operations",
        label: "Workflow & Operations",
        detail: "Clarify the path of work before building the surface.",
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
    slug: "seo-aeo-visibility",
    navLabel: "SEO & AEO Visibility",
    eyebrow: "Grow / SEO & AEO Visibility",
    title: "Search and answer-engine visibility built on clean structure, evidence, and useful content.",
    summary:
      "Farcelis connects technical SEO, AEO readiness, schema, resource strategy, and citation evidence so buyers and answer engines can understand what the company does.",
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
      "Baseline how search engines and answer engines understand the company.",
      "Clean service architecture, metadata, routes, and schema opportunities.",
      "Build pages and resources around buyer questions.",
      "Connect proof, results, and citations to service claims.",
      "Report visibility movement in plain operational terms.",
    ],
    signals: [
      "People ask for services you offer but cannot find them clearly.",
      "AI answer engines describe the company vaguely or incompletely.",
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
        detail: "Give search and answer engines a clearer public structure.",
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
];

export function getDirectService(slug: string) {
  return directServices.find((service) => service.slug === slug);
}
