export type ServicePageContent = {
  image: string;
  imageAlt: string;
  seoIntro: string;
  clientNeeds?: string[];
};

export const servicePageContent: Record<string, ServicePageContent> = {
  "website-development": {
    image: "/images/services/adobe-stock/website-development.jpeg",
    imageAlt:
      "Responsive website development displayed across desktop, tablet, and mobile screens",
    seoIntro:
      "Farcelis provides website development for businesses that need a clearer site, stronger service pages, better contact paths, and a website visitors can understand, trust, and use. We build new websites, rebuild outdated websites, clean up confusing pages, and connect forms, quote requests, analytics, SEO structure, and follow-up systems so the website supports real business growth.",
    clientNeeds: [
      "What the website should say",
      "Who the site needs to reach",
      "Which pages need to exist",
      "How visitors ask for help",
      "What needs to be rebuilt",
      "How follow-up should work",
    ],
  },
  "app-portal-development": {
    image: "/images/services/adobe-stock/app-portal-development.jpeg",
    imageAlt:
      "App and portal development interface with client portal screens, dashboards, and mobile access",
    seoIntro:
      "Farcelis provides app and portal development for businesses that need client portals, internal tools, login areas, dashboards, intake systems, and repeatable workspaces. We build digital tools that help teams and clients see status, request work, manage information, and keep the next step clear.",
    clientNeeds: [
      "Who needs to log in",
      "What users need to see",
      "What requests they submit",
      "What status should show",
      "Who owns each step",
      "What data stays private",
    ],
  },
  "quote-pricing-tools": {
    image: "/images/services/adobe-stock/quote-pricing-tools.png",
    imageAlt:
      "Dark quote builder and pricing calculator interface with estimate sliders, package choices, and request form fields",
    seoIntro:
      "Farcelis builds quote builders, pricing calculators, estimate request forms, and package selectors for companies that need buyers to understand price range before the first call. These website tools collect the right details, guide visitors through options, and send clean quote requests to email, CRM, or reporting for follow-up.",
    clientNeeds: [
      "What buyers need priced",
      "Which questions affect cost",
      "What estimate range to show",
      "What choices buyers compare",
      "Who receives the request",
      "How follow-up should happen",
    ],
  },
  "ai-agents-automations": {
    image: "/images/services/adobe-stock/ai-agents-automations.jpeg",
    imageAlt:
      "AI agents and automation workflow dashboard showing connected tasks, approvals, and system actions",
    seoIntro:
      "Farcelis builds AI agents and business automations for repeated intake, follow-up, reporting, CRM updates, task routing, and internal support work. We create practical automation with clear owners, review points, and tool connections so teams save time without losing control.",
    clientNeeds: [
      "Which tasks repeat often",
      "What information AI can use",
      "Where human review belongs",
      "Which tools must connect",
      "Who owns the workflow",
      "What should be reported",
    ],
  },
  "platform-connections": {
    image: "/images/services/adobe-stock/platform-connections.jpeg",
    imageAlt:
      "Platform connections linking website forms, CRM records, dashboards, email, and business data",
    seoIntro:
      "Farcelis creates platform connections between websites, forms, CRMs, email, dashboards, spreadsheets, workspaces, and reporting tools. We help businesses stop copying information by hand and connect the tools they already use into cleaner intake, follow-up, visibility, and operating paths.",
    clientNeeds: [
      "Which tools need to connect",
      "Where information starts",
      "Where information should go",
      "What updates happen by hand",
      "Who needs visibility",
      "What should trigger follow-up",
    ],
  },
  "dashboards-decision-views": {
    image: "/images/services/adobe-stock/dashboards-decision-views.jpeg",
    imageAlt:
      "Business dashboard and decision view with charts, metrics, status signals, and leadership reporting",
    seoIntro:
      "Farcelis builds dashboards and decision views that help leaders see what is happening, what is stuck, who owns the next move, and what needs attention. These business intelligence and reporting views turn scattered data into practical visibility for operations, revenue, delivery, and leadership decisions.",
    clientNeeds: [
      "What leaders need to see",
      "Which numbers matter most",
      "What is stuck or overdue",
      "Who owns the next move",
      "What needs daily visibility",
      "How decisions get tracked",
    ],
  },
  "seo-search-visibility": {
    image: "/images/services/adobe-stock/seo-search-visibility.jpeg",
    imageAlt:
      "SEO search bar, website optimization, and search visibility interface on a dark digital background",
    seoIntro:
      "Farcelis provides SEO and search visibility services for businesses that need clearer website structure, stronger service pages, search-ready metadata, internal links, local search signals, and buyer-question content. We help Google, Bing, Apple, and other search engines understand what the business offers so the right people can find it and take the next step.",
    clientNeeds: [
      "What customers search for",
      "Which pages need to rank",
      "What questions need answers",
      "What search engines should understand",
      "Which service terms matter",
      "How traffic turns into inquiries",
    ],
  },
  "aeo-ai-search-visibility": {
    image: "/images/services/adobe-stock/aeo-ai-search-visibility-1970008827.jpeg",
    imageAlt:
      "AI search visibility and answer engine optimization shown through connected digital search data and content signals",
    seoIntro:
      "Farcelis builds AEO and AI search visibility for companies that want answer engines and AI search tools to understand, summarize, and cite their services. We structure service pages, proof, buyer questions, schema, and resource paths so tools like ChatGPT, Gemini, Perplexity, and AI search can describe the business clearly.",
    clientNeeds: [
      "What AI tools should understand",
      "Which answers should cite you",
      "What proof supports your claims",
      "Which buyer questions matter",
      "How services should be summarized",
      "Where answer-ready content belongs",
    ],
  },
  "seo-aeo-visibility": {
    image: "/images/services/adobe-stock/aeo-ai-search-visibility-1970008827.jpeg",
    imageAlt:
      "SEO and AEO visibility represented by connected digital search data, content signals, and answer engine paths",
    seoIntro:
      "Farcelis strengthens SEO and AEO visibility for businesses that need clearer service pages, stronger search structure, better metadata, answer-ready content, and proof that Google, Bing, Apple, and AI search tools can understand. We help people and search systems find the offer, trust it, and take the next step.",
    clientNeeds: [
      "What search tools should understand",
      "Which pages need clearer answers",
      "What proof supports the offer",
      "Which questions buyers ask",
      "How content should be structured",
      "Where search traffic should go",
    ],
  },
  "google-ads-paid-search": {
    image: "/images/services/adobe-stock/google-ads-paid-search.jpeg",
    imageAlt:
      "Paid search advertising campaign dashboard with PPC performance analytics",
    seoIntro:
      "Farcelis builds Google Ads and paid search campaigns around the offer, landing page, conversion action, tracking, lead quality, and follow-up path. We help businesses capture high-intent search demand and connect paid search traffic to real inquiries instead of disconnected clicks.",
    clientNeeds: [
      "What buyers are searching",
      "Which offers need ads",
      "What landing page should say",
      "How leads should be captured",
      "What budget needs tracking",
      "Which searches waste spend",
    ],
  },
  "meta-ads-paid-social": {
    image: "/images/services/adobe-stock/meta-ads-paid-social.jpeg",
    imageAlt:
      "Paid social media campaign interface showing digital campaign, organic reach, and paid ad paths",
    seoIntro:
      "Meta Ads are paid social ads on Facebook and Instagram. Farcelis builds paid social campaigns for businesses that need better audience targeting, creative testing, landing pages, lead forms, follow-up paths, and reporting so attention turns into clear inquiries instead of scattered clicks.",
    clientNeeds: [
      "Who the ads should reach",
      "What offer should be tested",
      "Which creative gets attention",
      "Where leads should land",
      "How follow-up should happen",
      "What results should be measured",
    ],
  },
  "google-meta-ads": {
    image: "/images/services/adobe-stock/google-ads-paid-search.jpeg",
    imageAlt:
      "Paid advertising campaign dashboard showing search, social, and conversion performance",
    seoIntro:
      "Farcelis builds paid advertising systems for Google Ads, paid search, Meta Ads, and paid social campaigns that need clear offers, landing pages, conversion tracking, CRM routing, and reporting. We connect ad traffic to real inquiries and follow-up instead of disconnected clicks.",
    clientNeeds: [
      "Which channels need ads",
      "What offer should be promoted",
      "Where traffic should land",
      "How leads should be routed",
      "What conversion should count",
      "Which results need reporting",
    ],
  },
  "crm-revenue-operations": {
    image: "/images/services/adobe-stock/crm-revenue-operations.jpeg",
    imageAlt:
      "Dark CRM and revenue operations interface with glowing customer, sales, support, and pipeline icons",
    seoIntro:
      "Farcelis improves CRM and revenue operations for businesses that need leads captured, routed, followed up, tracked, and moved to the right next step. We clean up fields, stages, forms, owners, pipeline views, email handoffs, and reporting so sales and service work stays visible and nothing gets lost.",
    clientNeeds: [
      "Where leads come from",
      "Who follows up first",
      "Which stage each lead is in",
      "What fields need cleanup",
      "What tasks should be automatic",
      "Which reports show revenue",
    ],
  },
  "marketing-automation-crm": {
    image: "/images/services/adobe-stock/crm-revenue-operations.jpeg",
    imageAlt:
      "Dark marketing automation and CRM interface showing connected customer, sales, support, and follow-up workflows",
    seoIntro:
      "Farcelis builds marketing automation and CRM systems for businesses that need leads, quote requests, email follow-up, pipeline stages, owners, and revenue reporting to stay organized. We connect forms, campaigns, CRM records, and follow-up so opportunities are visible and not lost.",
    clientNeeds: [
      "Where leads enter the system",
      "What emails should happen",
      "Who owns each contact",
      "Which CRM stages matter",
      "What follow-up gets missed",
      "How revenue should be tracked",
    ],
  },
  "content-revenue-systems": {
    image: "/images/services/adobe-stock/content-revenue-systems.jpeg",
    imageAlt:
      "Dark content marketing and campaign dashboard with publishing, ads, audience, and revenue signals",
    seoIntro:
      "Farcelis builds content and revenue systems for businesses that need website pages, offers, blog posts, social content, email, campaigns, SEO, ads, CRM, and reporting connected. We turn scattered publishing into a repeatable system that supports demand, trust, follow-up, and sales.",
    clientNeeds: [
      "What content needs publishing",
      "Which offers need support",
      "What buyers need to learn",
      "Where campaigns should point",
      "How content creates inquiries",
      "What reporting proves progress",
    ],
  },
  "ai-strategy-governance": {
    image: "/images/services/adobe-stock/ai-strategy-governance.jpeg",
    imageAlt:
      "AI ethics and governance interface showing privacy, accountability, security, and responsible AI controls",
    seoIntro:
      "Farcelis provides AI strategy and governance for businesses that need clear rules for where AI should help, where it should not, who reviews it, what data is allowed, and how risk is managed. We help teams use AI safely, clearly, and productively without losing ownership, privacy, quality, or control.",
    clientNeeds: [
      "Where AI should be used",
      "Where AI needs approval",
      "Who owns AI decisions",
      "What data AI can access",
      "How teams should adopt it",
      "How rules get documented",
    ],
  },
  "workflow-managed-operations": {
    image: "/images/services/adobe-stock/workflow-managed-operations.jpeg",
    imageAlt:
      "Business workflow and managed operations system showing automated process routing",
    seoIntro:
      "Farcelis provides workflow and managed operations support for businesses that need tasks, owners, handoffs, follow-up, reporting, and support handled after a website, app, campaign, dashboard, or automation goes live. We help teams stop chasing updates, keep the right work visible, and get time back from the systems they already depend on.",
    clientNeeds: [
      "What work keeps getting chased",
      "Who owns each handoff",
      "Where tasks should live",
      "What needs a steady rhythm",
      "How updates reach the team",
      "What support happens after launch",
    ],
  },
  "reporting-decision-systems": {
    image: "/images/services/adobe-stock/reporting-decision-systems.jpeg",
    imageAlt:
      "Executive reporting and decision system dashboard with business analytics",
    seoIntro:
      "Farcelis builds reporting and decision systems for businesses that need clear dashboards, status views, KPI reporting, operating reviews, and leadership-ready updates. We turn scattered data into reports people can understand, trust, and use to decide what happens next.",
    clientNeeds: [
      "What reports leaders need",
      "Which decisions happen weekly",
      "What numbers create action",
      "Who owns each outcome",
      "Where data needs cleanup",
      "How progress should be shown",
    ],
  },
  "deployment-operations": {
    image: "/images/services/adobe-stock/deployment-operations.jpeg",
    imageAlt:
      "Website and app launch support interface with hosting, release, maintenance, and code deployment controls",
    seoIntro:
      "Farcelis provides launch, hosting, and website support for businesses that have an idea, a rough build, or a live digital product that needs to work online. We help set up the site or app, connect the domain, prepare releases, document access, manage updates, and keep the live system stable so the client does not have to figure out the technical path alone.",
    clientNeeds: [
      "Where the website or app lives",
      "What needs to launch safely",
      "Who handles updates",
      "What breaks need support",
      "How releases are checked",
      "What documentation is needed",
    ],
  },
};

export function getServicePageContent(slug: string) {
  return servicePageContent[slug] ?? servicePageContent["website-development"];
}
