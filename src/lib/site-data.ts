export type NavItem = {
  href: string;
  label: string;
};

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
};

export type Partner = {
  name: string;
  logo?: string;
  href?: string;
  dark?: boolean;
};

export type Service = {
  title: string;
  description: string;
  points: string[];
};

export type ProofCard = {
  title: string;
  body: string;
  image: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  email: string;
  image: string;
  specialties: string[];
  bio: string[];
};

export type InfoCard = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  outcomes: string[];
  modules: string[];
  useCases: string[];
  proof: string[];
  delivery: string[];
  researchNotes: string[];
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  signals: string[];
  offers: string[];
};

export type ResourceOffer = {
  title: string;
  type: string;
  description: string;
  audience: string;
};

export type EventOffer = {
  title: string;
  format: string;
  description: string;
  audience: string;
};

export type MediaLane = {
  title: string;
  label: string;
  description: string;
  home: string;
};

export type PodcastBrief = {
  title: string;
  signal: string;
  description: string;
  runtime: string;
  image: string;
  audioSrc: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  label: string;
  author: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: string;
  body: {
    heading: string;
    paragraphs: string[];
  }[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  dek: string;
  visualKind: "funnel" | "benchmark" | "marketing" | "executive" | "content";
  visualLabel: string;
  visualMetrics: string[];
  coverImage?: string;
  coverAlt?: string;
  pullQuote: string;
  bridgeTitle: string;
  bridgeBody: string;
  sourceLabel: string;
  readTime: string;
  body: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  takeaways: string[];
};

export const site = {
  name: "Farcelis AI Consulting LLC",
  shortName: "Farcelis",
  domain: "https://www.farcelis.io",
  tagline: "AI operational systems for leaders who need structure, visibility, and execution control.",
  summary:
    "Farcelis is an AI operational systems firm that designs workflow architecture, execution systems, and structured decision environments for founders, CEOs, organizations, and complex operating teams.",
  contact: {
    email: "info@farcelis.io",
    founderEmail: "nespey@farcelis.io",
    phone: "(813) 999-5775",
    phoneHref: "tel:+18139995775",
    addressLines: ["19921 Dolores Ann Ct", "Lutz, Florida 33549"],
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/106402904/admin/dashboard/",
      icon: "/icons/social/linkedin.png",
    },
    {
      label: "X",
      href: "https://x.com/FarcelisAI?s=20",
      icon: "/icons/social/x.png",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574461822944",
      icon: "/icons/social/facebook.png",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/farcelisai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: "/icons/social/instagram.png",
    },
  ],
  legalLinks: [
    { label: "Legal Notice", href: "/legal" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "CA Consumer Policy", href: "/ca-consumer" },
    {
      label: "Accessibility, Accommodations & E-Verify",
      href: "/accessibility",
    },
    { label: "Terms of Service", href: "/terms" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/control-layer", label: "Control Layer" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/platforms", label: "Platforms" },
    { href: "/industries", label: "Industries" },
    { href: "/resources", label: "Resources" },
    { href: "/events", label: "Events" },
    { href: "/insights", label: "Insights" },
    { href: "/team", label: "Our Team" },
    { href: "/results", label: "Results" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavItem[],
};

export const seo = {
  home: {
    path: "/",
    title: "Farcelis AI Consulting | Operational Systems & Control Layer",
    description:
      "Farcelis is an AI operational systems firm that designs workflow architecture, execution systems, and Control Layer implementations for leaders who need clarity, speed, and operational control.",
  },
  controlLayer: {
    path: "/control-layer",
    title: "Farcelis Control Layer | AI-Powered Operational System",
    description:
      "The Farcelis Control Layer centralizes workflows, data, and decisions into a single system. Eliminate operational chaos and execute with clarity and precision.",
  },
  services: {
    path: "/services",
    title: "AI Consulting Services | Farcelis Operational Systems",
    description:
      "Farcelis builds AI consulting and operational system design engagements that structure workflows, automate operations, and improve execution across teams and organizations.",
  },
  aiStrategyGovernance: {
    path: "/services/ai-strategy-governance",
    title: "AI Strategy & Governance | Farcelis AI Consulting",
    description:
      "Farcelis helps leaders structure AI readiness, governance, adoption roadmaps, usage boundaries, and decision controls before tools multiply.",
  },
  workflowOperations: {
    path: "/services/workflow-operations",
    title: "Workflow & Operations | Farcelis AI Consulting",
    description:
      "Farcelis designs workflow routing, handoffs, ownership, reporting, and operating cadence so work moves cleanly across teams and tools.",
  },
  managedOperations: {
    path: "/services/managed-operations",
    title: "Managed Operations | Farcelis AI Consulting",
    description:
      "Farcelis provides managed operations support for leaders who need operating cadence, workflow triage, executive follow-through, AI enablement, and clearer execution.",
  },
  platforms: {
    path: "/platforms",
    title: "AI Platforms & Integrations | Farcelis Consulting",
    description:
      "Farcelis connects AI agents, CRM systems, workflow platforms, marketing tools, and reporting environments into cleaner operating systems.",
  },
  products: {
    path: "/products",
    title: "Farcelis Product Suite | AI Operating Systems",
    description:
      "Explore Farcelis proprietary product surfaces, including the Control Layer, Pulse Thread Coaching Assistant, INTENT+ Adaptive Learning Engine, RapidRamp Generator, and AI Marketing Blueprint Generator.",
  },
  industries: {
    path: "/industries",
    title: "Industries & Operating Environments | Farcelis AI Consulting",
    description:
      "Farcelis supports companies, government contractors, professional services teams, growth organizations, and complex operating environments with AI-enabled workflow structure.",
  },
  insights: {
    path: "/insights",
    title: "AI Operations Insights | Farcelis",
    description:
      "Farcelis insights on AI adoption, workflow architecture, governance, automation, CRM operations, SEO systems, and execution control.",
  },
  resources: {
    path: "/resources",
    title: "AI Operations Resources & Whitepapers | Farcelis",
    description:
      "Request Farcelis executive briefings, AI readiness guides, workflow architecture reports, CRM operations blueprints, and growth system playbooks.",
  },
  events: {
    path: "/events",
    title: "Farcelis Webinars & Executive Briefings",
    description:
      "Explore Farcelis webinars, executive briefings, workshops, and live sessions on AI adoption, workflow architecture, Control Layer design, and growth operations.",
  },
  team: {
    path: "/team",
    title: "Farcelis Leadership | AI Systems & Operational Design Experts",
    description:
      "Meet the Farcelis leadership team building AI-driven operational systems, workflow architecture, and Control Layer environments for modern organizations.",
  },
  results: {
    path: "/results",
    title: "Organizations Working With Farcelis | AI Systems & Operations",
    description:
      "Farcelis AI Consulting has supported organizations across automation, operations, and system design. Explore companies that have worked with Farcelis.",
  },
  contact: {
    path: "/contact",
    title: "Contact Farcelis | AI Operational Systems Strategy Call",
    description:
      "Connect with Farcelis to discuss AI consulting, operational systems, workflow design, and Control Layer implementation for your organization.",
  },
} satisfies Record<string, SeoEntry>;

export const partners: Partner[] = [
  {
    name: "K2 Renew",
    logo: "/logos/partners/k2-renew.png",
    href: "https://k2renew.com/home",
  },
  {
    name: "Paragon Cyber Solutions",
    logo: "/logos/partners/paragon-cyber-solutions.png",
    href: "https://paragoncybersolutions.com/",
  },
  {
    name: "NexAlign",
    logo: "/logos/partners/nexalign.jpeg",
    href: "https://nexalign.app/login?from_url=https%3A%2F%2Fnexalign.app%2F",
  },
  {
    name: "Eagle",
    logo: "/logos/partners/eagle-light.svg",
    href: "https://www.eagleeng.com/",
    dark: true,
  },
  {
    name: "4Throws",
    logo: "/logos/partners/fourthrows.png",
    href: "https://4throws.com/pages/contact",
  },
];

export const approvedLogos: Partner[] = [
  { name: "4Throws", logo: "/logos/approved/4throws-color.png", href: "https://4throws.com/pages/contact" },
  { name: "K2 Renew", logo: "/logos/approved/k2-renew-color.png", href: "https://k2renew.com/home" },
  { name: "Paragon Cyber Solutions", logo: "/logos/approved/paragon-color.png", href: "https://paragoncybersolutions.com/" },
  { name: "NexAlign", logo: "/logos/approved/nexalign-color.png", href: "https://nexalign.app/login?from_url=https%3A%2F%2Fnexalign.app%2F" },
  { name: "Eagle", logo: "/logos/approved/eagle-color.png", href: "https://www.eagleeng.com/" },
];

export const services: Service[] = [
  {
    title: "Control Layer Design & Deployment",
    description:
      "Build the operational system behind execution. Farcelis designs and deploys the Control Layer for organizations that need stronger workflow architecture, clearer reporting, better handoffs, and more executive visibility.",
    points: [
      "Priority and workflow mapping",
      "Reporting and visibility design",
      "Accountability and handoff structure",
      "Control Layer implementation",
    ],
  },
  {
    title: "Custom AI Consulting & Agents",
    description:
      "Tailored AI strategy, implementation, and automation built around the way your organization actually works, from roadmaps and readiness assessments to branded assistants and system integration.",
    points: [
      "AI strategy roadmaps",
      "Task-specific AI assistants",
      "Full-stack AI integration",
      "Execution-focused adoption planning",
    ],
  },
  {
    title: "AI Strategy, Governance & Readiness",
    description:
      "Structure AI adoption before tools multiply. Farcelis helps leaders define practical AI roadmaps, governance rules, usage boundaries, rollout priorities, and operating controls.",
    points: [
      "AI readiness assessment",
      "Governance and usage policy",
      "Adoption roadmap",
      "Leadership decision structure",
    ],
  },
  {
    title: "Data, Reporting & Visibility Systems",
    description:
      "Bring fragmented data, dashboards, and reporting paths into a clearer visibility layer so leaders can understand movement, pressure, and performance before issues compound.",
    points: [
      "Executive reporting design",
      "Data flow mapping",
      "Operational dashboards",
      "Decision intelligence",
    ],
  },
  {
    title: "CRM, Revenue & Customer Operations",
    description:
      "Align sales, service, marketing, and customer follow-through inside one operating model so pipeline movement, ownership, and client communication stop drifting across tools.",
    points: [
      "CRM architecture",
      "Revenue workflow design",
      "Customer handoff structure",
      "Pipeline visibility",
    ],
  },
  {
    title: "AI-Driven Marketing, SEO & Content Systems",
    description:
      "Build growth systems that connect social media, blogs, SEO optimization, content planning, lead capture, and campaign reporting into a measurable operating environment.",
    points: [
      "SEO intelligence",
      "Blog and content systems",
      "Social media management",
      "Campaign automation",
    ],
  },
  {
    title: "Managed Operations & Fractional Execution Support",
    description:
      "Support operators and leadership teams with structured execution, director-of-operations style oversight, workflow intervention, and practical operating cadence.",
    points: [
      "Fractional operations support",
      "Execution cadence",
      "Workflow intervention",
      "Operating rhythm design",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Farcelis aligns automation with real business logic so work routes correctly, handoffs tighten, and execution drag gets reduced instead of hidden behind more tooling.",
    points: [
      "Workflow architecture",
      "Routing and handoff optimization",
      "Operational logic alignment",
      "Cross-functional execution support",
    ],
  },
  {
    title: "AI Enablement",
    description:
      "Farcelis structures AI adoption inside practical operating environments through rollout support, enablement, and decision systems that reduce noise and improve execution.",
    points: [
      "Adoption readiness",
      "Team enablement",
      "Operational training support",
      "Practical rollout guidance",
    ],
  },
];

export const platformCapabilities: InfoCard[] = [
  {
    title: "AI agents and assistants",
    description:
      "Role-specific assistants for intake, follow-up, documentation, research, customer support, marketing, and operational execution.",
  },
  {
    title: "CRM and revenue platforms",
    description:
      "HubSpot, Salesforce, pipeline workflows, lead routing, customer handoffs, and revenue visibility structured around how the business actually sells and serves.",
  },
  {
    title: "Workflow and project systems",
    description:
      "ClickUp, Monday, Asana, Jira, Smartsheet, and related work systems configured around ownership, priority, routing, and reporting.",
  },
  {
    title: "Microsoft and Google workspaces",
    description:
      "Teams, SharePoint, Outlook, Gmail, Drive, Docs, Sheets, and collaboration environments connected into cleaner execution paths.",
  },
  {
    title: "Content, SEO, and social platforms",
    description:
      "Publishing, social media management, blog systems, search optimization, content calendars, and campaign reporting connected to measurable outcomes.",
  },
  {
    title: "Dashboards and decision systems",
    description:
      "Reporting layers that turn operational signals into leadership-ready views for decisions, intervention, and accountability.",
  },
];

export const products: Product[] = [
  {
    slug: "control-layer",
    title: "Farcelis Control Layer",
    eyebrow: "Flagship Operating System",
    description:
      "The Control Layer is the structured operating environment Farcelis builds above existing tools so intake, routing, ownership, visibility, and intervention live in one controlled frame.",
    outcomes: [
      "One intake path for scattered requests",
      "Clear ownership and escalation logic",
      "Leadership visibility into movement and blockage",
      "Execution controls that hold under pressure",
    ],
    modules: [
      "Intake layer",
      "Workflow engine",
      "Priority system",
      "Execution board",
      "Visibility layer",
      "Intervention path",
    ],
    useCases: [
      "Executive operations",
      "Client delivery",
      "Revenue operations",
      "Cross-functional coordination",
    ],
    proof: [
      "Modeled from live operating work across inbox control, project execution, document flow, executive reporting, and client-safe closeout coordination.",
      "Supported by internal Farcelis data surfaces for pipeline, CRM, projects, invoices, priorities, owners, statuses, and action records.",
      "Visualized in the site with a live workspace preview instead of a static product claim.",
    ],
    delivery: [
      "Map intake sources and decision paths.",
      "Define owners, escalation states, and close-loop rules.",
      "Build the board, views, automations, reporting cadence, and handoff rituals.",
    ],
    researchNotes: [
      "The workspace preview reflects actual Farcelis operating categories: inbox control, project operations, documents, action center, and executive view.",
      "The strongest product evidence is not a feature list. It is the discipline of routing work from signal to owned action without losing visibility.",
    ],
  },
  {
    slug: "pulse-thread-coaching-assistant",
    title: "Pulse Thread Coaching Assistant",
    eyebrow: "AI Enablement Product",
    description:
      "A guided AI assistant concept for coaching teams through structured follow-up, decision clarity, meeting action items, and adoption support inside live operating workflows.",
    outcomes: [
      "Better follow-through after meetings",
      "Cleaner action ownership",
      "Structured coaching for AI adoption",
      "Reduced leadership follow-up drag",
    ],
    modules: [
      "Action extraction",
      "Follow-up prompts",
      "Decision recap",
      "Adoption coaching",
      "Status pulse",
    ],
    useCases: [
      "Leadership meetings",
      "Client success",
      "Internal enablement",
      "Training programs",
    ],
    proof: [
      "Supported by the Farcelis Certified AI Agent material: role-specific assistants can draft communications, summarize notes, surface KPIs, automate scheduling, and support meeting prioritization.",
      "Connects directly to the Control Layer because coaching only matters when the next action has an owner and a place to land.",
      "The Farcelis agent guide frames implementation around alignment to human roles, not replacement: the assistant is trained on the team's language, data context, and workflow responsibilities.",
    ],
    delivery: [
      "Identify the roles and recurring conversations that create follow-up drag.",
      "Create prompt flows for decisions, next actions, owners, risks, meeting notes, and follow-up cadence.",
      "Route outputs into email, task boards, meeting notes, or the Control Layer.",
    ],
    researchNotes: [
      "This is an operating assistant, not a chatbot. Its job is to help teams keep context alive after the meeting ends.",
      "Farcelis agent material cites use cases around customer inquiries, tailored reports, KPI analysis, lead qualification, onboarding, scheduling, notes, and task prioritization.",
    ],
  },
  {
    slug: "intent-adaptive-learning-engine",
    title: "INTENT+ Adaptive Learning Engine",
    eyebrow: "Learning and Enablement System",
    description:
      "An adaptive learning framework for structuring training, knowledge reinforcement, adoption paths, and practical capability development around what teams actually need to do.",
    outcomes: [
      "Role-based learning paths",
      "AI adoption support",
      "Knowledge retention loops",
      "Training tied to operating behavior",
    ],
    modules: [
      "Readiness profile",
      "Learning path builder",
      "Practice prompts",
      "Progress signals",
      "Enablement dashboard",
    ],
    useCases: [
      "AI training",
      "Internal onboarding",
      "Operations enablement",
      "Process rollout",
    ],
    proof: [
      "Grounded in Farcelis training assets covering prompt engineering, data wrangling, annotation, chatbot implementation, AI bias, and business use cases.",
      "Designed to support role-based AI adoption instead of one-size-fits-all training content, using readiness profiles and practical exercises.",
      "Connects learning to operating behavior through practice prompts, reinforcement loops, and workflow-specific adoption signals.",
    ],
    delivery: [
      "Profile roles, readiness, data context, and real workflow responsibilities.",
      "Build adaptive learning paths with prompt practice, data exercises, knowledge checks, and reinforcement loops.",
      "Track adoption signals and connect them to operating outcomes.",
    ],
    researchNotes: [
      "The Training folder gives this product a real base: prompt engineering, NLP task definitions, data labeling, chatbot testing, and bias awareness.",
      "The product needs to show how people learn inside a system, not just how they consume training.",
    ],
  },
  {
    slug: "rapidramp-generator",
    title: "RapidRamp Generator",
    eyebrow: "Implementation Accelerator",
    description:
      "A GPT-powered implementation accelerator that turns client SOPs, process documents, and operating requirements into onboarding modules, rollout plans, system maps, and reusable launch documentation.",
    outcomes: [
      "Onboarding modules generated from real SOPs",
      "Faster first-draft learning assets",
      "Cleaner rollout sequencing before build",
      "Reusable client-ready documentation",
    ],
    modules: [
      "Structured input intake",
      "Microlearning module builder",
      "Knowledge check generator",
      "Manual refinement pass",
      "Workflow library storage",
      "Launch controls",
    ],
    useCases: [
      "Control Layer deployment",
      "CRM rebuilds",
      "Workflow automation",
      "Marketing operations setup",
    ],
    proof: [
      "Based on the RapidRamp Module Generator workflow: provide a client SOP or process document, audience context, two to three learning objectives, and tone guidance.",
      "The output structure is defined: title, module overview, three microlearning sections, one knowledge check with suggested answers, and a practical next-step summary.",
      "The documented workflow estimates roughly 70% drafting-time reduction by letting Farcelis focus on strategic refinement instead of starting from a blank page.",
    ],
    delivery: [
      "Capture the source SOP, role context, learning objectives, and desired instructional tone.",
      "Generate a mobile-first onboarding module with clear headers, bullets, plain explanations, and a knowledge check.",
      "Refine the draft for client nuance, brand voice, real-world references, internal language, and actual next steps.",
      "Save the reusable prompt and template into the AI workflows library, tagged by asset type, industry, and function.",
    ],
    researchNotes: [
      "RapidRamp is not a generic project template. It is a repeatable way to turn process knowledge into usable learning and implementation assets.",
      "The product works best when the client has real documentation but lacks the time, structure, or instructional design path to make it usable for onboarding or rollout.",
    ],
  },
  {
    slug: "blueprint-readiness-snapshot",
    title: "Blueprint Readiness Snapshot",
    eyebrow: "Assessment Product",
    description:
      "A structured R.A.P.I.D. diagnostic that evaluates workflow rhythm, data overlap, automation readiness, integration health, and the scope for managed AI oversight.",
    outcomes: [
      "Workflow cohesion surfaced clearly",
      "Redundancies and risk points identified",
      "Three priority actions for stabilization",
      "Retainer scope for ongoing AI oversight",
    ],
    modules: [
      "Rhythm",
      "Assessment",
      "Prototype",
      "Integration",
      "Delivery",
      "Workflow Harmony Report",
    ],
    useCases: [
      "Pre-engagement discovery",
      "Executive planning",
      "Automation readiness",
      "Operational reset",
    ],
    proof: [
      "Based on the Revive HRG Blueprint Readiness Snapshot: a 15-question diagnostic across Leap CRM, i360 CRM, Salesforce, Vendo, Five9, field marketing, reporting, integrations, and governance.",
      "The documented next step is a Workflow Harmony Report highlighting redundancies, risk points, and integration opportunities.",
      "The snapshot produces three priority actions for stabilization or automation expansion and outlines retainer options for ongoing oversight.",
    ],
    delivery: [
      "Interview the team across rhythm, assessment, prototype, integration, and delivery questions.",
      "Map single source of truth, data delays, reporting confidence, automation ownership, and governance gaps.",
      "Deliver a Workflow Harmony Report with priority actions and a recommended oversight or implementation path.",
    ],
    researchNotes: [
      "The Revive HRG version proves this is a real client-facing diagnostic, not a generic readiness quiz.",
      "The product is the cleanest front door when a buyer knows the stack is messy but is not ready to approve a full Control Layer build.",
    ],
  },
  {
    slug: "ai-marketing-blueprint-generator",
    title: "AI Marketing Blueprint Generator",
    eyebrow: "Growth Systems Product",
    description:
      "A growth architecture product for turning audience, offer, content, SEO, campaign, CRM, and social signals into a practical marketing operating system.",
    outcomes: [
      "Content and SEO strategy tied to execution",
      "Cleaner campaign and social cadence",
      "Lead flow connected to CRM operations",
      "Performance visibility for growth work",
    ],
    modules: [
      "Audience map",
      "SEO opportunity scan",
      "Content calendar",
      "Campaign workflow",
      "CRM handoff model",
    ],
    useCases: [
      "Blog systems",
      "Social media management",
      "SEO optimization",
      "Revenue campaign planning",
    ],
    proof: [
      "Supported by Farcelis HubSpot certification assets covering website optimization, SEO strategy, buyer personas, email performance, content frameworks, and digital marketing fundamentals.",
      "Connected to Farcelis growth articles on funnel foundations, website performance, AI-driven content, and marketing-system breakdowns.",
      "Turns audience, offer, content, SEO, CRM, campaign, and reporting work into one execution model instead of a loose set of channels.",
    ],
    delivery: [
      "Map audience, offers, buyer-persona assumptions, channels, content inventory, and CRM handoffs.",
      "Audit website performance, SEO, blog structure, email paths, social cadence, campaign logic, and reporting visibility.",
      "Connect growth actions to owners, deadlines, lead stages, measurement loops, and follow-up rules.",
    ],
    researchNotes: [
      "The Website Optimization Checklist gives this product practical inspection points: speed, redirects, responsive images, mobile tap targets, indexing, meta descriptions, and descriptive link text.",
      "The product shows that marketing is an operating system: the lead has to move from signal to follow-through without friction.",
    ],
  },
];

export const industryFocus: Industry[] = [
  {
    slug: "professional-services-consulting",
    title: "Professional services and consulting",
    description:
      "Client delivery, project visibility, knowledge work, internal coordination, and leadership reporting across fast-moving service teams.",
    signals: ["Client work lives in too many systems", "Delivery status depends on manual follow-up", "Project knowledge is hard to reuse"],
    offers: ["Control Layer deployment", "Client delivery dashboards", "Knowledge workflow design", "AI assistants for documentation"],
  },
  {
    slug: "government-contractors",
    title: "Government contractors and public-sector adjacent teams",
    description:
      "Compliance-aware workflows, documentation, deadline control, stakeholder coordination, and operating visibility for high-accountability environments.",
    signals: ["Documentation pressure is high", "Deadlines create coordination risk", "Approvals move through unclear channels"],
    offers: ["Compliance-aware workflow mapping", "Deadline control systems", "Stakeholder visibility", "Reporting cadence design"],
  },
  {
    slug: "small-mid-market-businesses",
    title: "Small and mid-market businesses",
    description:
      "Practical AI, workflow, CRM, marketing, and operating systems for companies that need enterprise discipline without enterprise overhead.",
    signals: ["Growth is outrunning process", "The owner still holds too many answers", "Tools exist but do not behave like a system"],
    offers: ["AI readiness snapshot", "CRM and workflow rebuild", "Managed operations support", "Growth systems setup"],
  },
  {
    slug: "growth-marketing-revenue",
    title: "Growth, marketing, and revenue organizations",
    description:
      "Lead flow, campaign operations, SEO, content systems, customer handoffs, and reporting tied back to execution and revenue movement.",
    signals: ["Campaigns are disconnected from CRM", "Content lacks operating cadence", "Lead handoffs are inconsistent"],
    offers: ["AI Marketing Blueprint", "SEO and blog systems", "Social media operations", "Revenue workflow design"],
  },
  {
    slug: "operations-heavy-teams",
    title: "Operations-heavy teams",
    description:
      "Intake, assignment, escalation, reporting, automation, and decision cadence for teams where complexity shows up as daily friction.",
    signals: ["Requests arrive from everywhere", "Escalations happen too late", "Ownership is visible only after something slips"],
    offers: ["Intake and routing design", "Escalation logic", "Operational dashboards", "Workflow automation"],
  },
  {
    slug: "education-training-enablement",
    title: "Education, training, and enablement environments",
    description:
      "Structured learning systems, AI enablement, internal adoption paths, and repeatable knowledge workflows for teams that need change to stick.",
    signals: ["Training does not translate into behavior", "AI adoption is uneven", "Knowledge transfer depends on individuals"],
    offers: ["INTENT+ learning paths", "AI enablement programs", "Knowledge workflows", "Adoption coaching systems"],
  },
];

export const insightCards: InfoCard[] = [
  {
    title: "AI readiness before AI rollout",
    description:
      "The serious work starts with governance, use cases, risk, operating ownership, and adoption design before a tool ever reaches the team.",
  },
  {
    title: "Why workflow automation fails",
    description:
      "Automation breaks when the underlying routing, decision rights, handoffs, and reporting logic were never clean enough to automate.",
  },
  {
    title: "The Control Layer operating model",
    description:
      "A practical view of how intake, execution, visibility, and intervention can sit above existing tools without forcing a full platform replacement.",
  },
  {
    title: "Marketing systems are operating systems",
    description:
      "SEO, social media, blogs, campaigns, CRM, and content all perform better when they are connected to ownership, cadence, and measurable flow.",
  },
  {
    title: "AI agents need governance",
    description:
      "Assistants and agents become useful when they are scoped, monitored, documented, and tied to specific operational responsibilities.",
  },
  {
    title: "Executive visibility is a design problem",
    description:
      "Leaders do not need more dashboards. They need the right operating signals arranged around action, priority, risk, and accountability.",
  },
];

export const mediaLanes: MediaLane[] = [
  {
    title: "Articles",
    label: "Long-form reader library",
    description:
      "Complete essays with executive takeaways, custom visual briefs, and a Farcelis connection at the end.",
    home: "/insights#articles",
  },
  {
    title: "Raw Intel",
    label: "Podcast and voice brief lane",
    description:
      "A sharper audio identity for live conversations, founder readouts, operating pressure, and AI adoption judgment.",
    home: "/insights#raw-intel",
  },
  {
    title: "Blog",
    label: "One public blog lane",
    description:
      "A separate Substack-style lane for shorter public commentary. It should not sit inside the article grid.",
    home: "/insights#blog",
  },
];

export const rawIntelBriefs: PodcastBrief[] = [
  {
    title: "The AI Lie Detector",
    signal: "Raw Intel launch highlight",
    description:
      "A podcast brief that pulls back the curtain on AI demo deception, benchmark manipulation, and the judgment leaders need before trusting performance claims.",
    runtime: "Podcast episode",
    image: "/images/media/raw-intel-podcast-artwork.png",
    audioSrc: "/audio/raw-intel/episode-5.m4a",
  },
  {
    title: "Benchmarks, Hype, and Executive Risk",
    signal: "AI governance",
    description:
      "A Raw Intel frame for how leaders should hear benchmark claims before they put AI outputs into real workflows.",
    runtime: "Discussion format",
    image: "/images/media/raw-intel-mark.png",
    audioSrc: "/audio/raw-intel/episode-10.m4a",
  },
  {
    title: "The AI Tool Is Not the Strategy",
    signal: "Operating judgment",
    description:
      "A practical conversation lane for adoption, ownership, escalation, and what happens after a team starts using AI in the wild.",
    runtime: "Operator debrief",
    image: "/images/media/raw-intel-podcast-button.png",
    audioSrc: "/audio/raw-intel/episode-16.m4a",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "funnel-broken-foundation",
    title: "Your Funnel Is Broken Because Your Foundation Is",
    label: "From Julian",
    author: "Julian Mercer",
    date: "April 14, 2025",
    description:
      "A growth-systems field note on why traffic, ads, and copy cannot repair a weak digital foundation underneath the funnel.",
    image: "/images/blog/julian-bigger.png",
    imageAlt: "Julian Mercer content systems artwork from the Farcelis blog library",
    cta: "Read the field note",
    body: [
      {
        heading: "The Funnel Is Not the First Problem",
        paragraphs: [
          "You do not have a lead generation problem if the system underneath the lead path cannot hold. You have a systems problem wearing a marketing costume.",
          "Most teams drive traffic, hope visitors convert, blame bad leads when they do not, and repeat the cycle with a new headline or a slightly louder campaign. That loop feels like marketing work, but it often hides a weaker foundation: slow pages, buried calls to action, disconnected forms, stale lifecycle content, missing retargeting logic, and follow-up that does not reach the right place.",
        ],
      },
      {
        heading: "Conversion Is an Operating Question",
        paragraphs: [
          "A funnel is only as good as the environment it sits on. You cannot optimize conversion when mobile load time is dragging, opt-in logic is brittle, CRM tags do not fire, or email follow-up lands after the moment has passed.",
          "The question that matters is simple: can a lead move from awareness to action without friction? If the answer is unclear, the next move is not more promotion. The next move is diagnosis.",
        ],
      },
      {
        heading: "The Email Nobody Clicked",
        paragraphs: [
          "One engagement made the point clearly. The paid ads were getting strong click-through rates, but the landing experience converted at less than one percent. The copy was serviceable, the audience was not wildly off, and the offer made sense.",
          "The actual failures were underneath the campaign: the page loaded slowly on mobile, the opt-in form carried a hidden field error, the confirmation email was getting pushed into spam, and the CRM sequence did not trigger because the tag logic was disconnected. The ad did its job. The system did not.",
        ],
      },
      {
        heading: "Fix the Foundation Before You Scale",
        paragraphs: [
          "Performance comes before promotion. Before another dollar goes into traffic, the website, content map, email logic, CRM handoff, retargeting path, and owner follow-through need to behave like a connected system.",
          "That is where Farcelis ties growth work back into operating architecture. Marketing is not just creative output. It is a route from signal to action, and that route needs ownership, visibility, and clean handoffs before scale makes sense.",
        ],
      },
    ],
  },
];

export const insightArticles: InsightArticle[] = [
  {
    slug: "funnel-broken-foundation",
    title: "Your Funnel Is Broken Because Your Foundation Is: Insights from Julian Mercer",
    author: "Nathan Espey",
    date: "April 14, 2025",
    category: "Growth Systems",
    dek:
      "Struggling with low conversions despite good traffic? The problem may not be your leads. It may be the digital foundation underneath the funnel.",
    visualKind: "funnel",
    visualLabel: "Conversion foundation diagnostic",
    visualMetrics: ["Traffic", "Load", "Opt-in", "CRM", "Follow-up"],
    coverImage: "/images/articles/foundation-build.png",
    coverAlt: "Build Foundation campaign artwork for a funnel foundation article",
    pullQuote: "No amount of traffic will fix a broken system.",
    bridgeTitle: "How Farcelis Applies This",
    bridgeBody:
      "This article is the clearest bridge into Farcelis growth-system work: before paid traffic scales, the operating path has to hold. That means landing pages, forms, CRM triggers, lifecycle content, email logic, retargeting, and owner follow-through need to behave like one controlled system.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "5 min read",
    takeaways: [
      "A funnel cannot outperform the system underneath it.",
      "Promotion should wait until forms, email logic, CRM triggers, and retargeting are actually connected.",
      "Marketing performance is an operations question, not just a creative one.",
    ],
    body: [
      {
        heading: "Why traffic is not converting and what to do before spending another dime on ads",
        paragraphs: [
          "Let’s get honest:\nYou don’t have a lead generation problem.\nYou have a systems problem masquerading as marketing failure.",
          "If you’re like most business owners, your funnel probably looks like this:",
        ],
        bullets: [
          "Drive traffic with ads or social media",
          "Hope visitors convert on your site",
          "Blame “bad leads” when they don’t",
          "Repeat the cycle with slightly better copy or a new headline",
        ],
      },
      {
        heading: "A Funnel Is Only As Good As the System It Sits On",
        paragraphs: [
          "Sound familiar?",
          "Here’s the inconvenient truth:\nNo amount of traffic will fix a broken system.\nAnd no marketing funnel works if your digital foundation is cracked underneath.",
          "You can’t optimize conversion if:",
        ],
        bullets: [
          "Your site takes 7+ seconds to load on mobile",
          "Your CTA buttons are buried or broken",
          "Your blog content is irrelevant or outdated",
          "Your retargeting ads are showing up after the sale (or never at all)",
        ],
      },
      {
        heading: "The Question That Matters",
        paragraphs: [
          "What most businesses call a “conversion problem” is really a diagnostic failure.",
          "They’re measuring the wrong things.\nThey’re solving the wrong pain.\nAnd they’re ignoring the one question that matters:",
          "Is your system built to move a lead from awareness to action without friction?",
        ],
      },
      {
        heading: "Case in Point: The Email That No One Clicked",
        paragraphs: [
          "Let me give you an example.",
          "A client came to us frustrated.\nThey were running paid ads and getting good click-through rates.\nBut once people landed on their lead magnet, the conversion rate dropped to 0.6%.",
          "We reviewed everything:\n- The blog was clean.\n- The email design was decent.\n- The targeting was actually solid.",
          "But here’s what we found:",
        ],
        bullets: [
          "The page took 6.2 seconds to fully load on mobile",
          "Their opt-in form had a hidden field error",
          "The confirmation email hit spam folders 63% of the time",
          "Their CRM didn’t trigger the follow-up sequence due to a disconnected tag",
        ],
      },
      {
        heading: "Performance > Promotion",
        paragraphs: [
          "Nothing in the ad needed changing.\nThe problem wasn’t the copy—it was the connection.",
          "Before you spend another dollar on promotion, audit the system:",
        ],
        bullets: [
          "Is your website responsive and fast?",
          "Is your content mapped to actual lifecycle stages?",
          "Are your emails built with logic, not just nice design?",
          "Does your tech stack talk to each other in real time?",
        ],
      },
      {
        heading: "Fix the Foundation, Then Build the Funnel",
        paragraphs: [
          "If the answer is “I’m not sure” or “I think so,” then you’re not ready for scale.\nYou’re still in the fix phase.",
          "This is why we start every engagement at Farcelis AI with a systems audit—not a branding workshop.\nBecause in today’s ecosystem, performance is brand.",
          "Here’s the sequence we use with clients:",
        ],
        bullets: [
          "Systems Audit: We analyze every touchpoint across your stack and look for drop-offs, disconnects, and delays.",
          "Conversion Layer Rebuild: Update landing pages, email logic, and user journey flows.",
          "Retarget & Retain: Set up smart retargeting and segment your email follow-ups.",
          "Scale Strategically: Only once everything flows do we pump traffic and optimize for ROI.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "That’s how you scale with confidence.\nNot on hope. Not on hacks. But on clarity and connection.",
          "If you’re burning money on traffic and wondering why conversions are flat—step back.",
          "You might not need better leads.\nYou might just need a better system.",
        ],
      },
    ],
  },
  {
    slug: "benchmark-mirage-ai-accuracy",
    title: "The Benchmark Mirage: Unveiling AI Accuracy Myths and Meta's Llama 4 Controversy",
    author: "Nathan Espey",
    date: "April 9, 2025",
    category: "AI Governance",
    dek:
      "AI benchmarks matter, but high scores are not the same as real-world performance. Leaders need to understand what benchmark results prove, what they hide, and where deployment risk begins.",
    visualKind: "benchmark",
    visualLabel: "Benchmark-to-reality evaluation map",
    visualMetrics: ["Score", "Robustness", "Fairness", "Context", "Oversight"],
    coverImage: "/images/articles/benchmark-fake-hype.png",
    coverAlt: "Fast money fake hype artwork for an AI benchmark article",
    pullQuote: "High benchmark scores do not automatically translate into real-world performance.",
    bridgeTitle: "How Farcelis Applies This",
    bridgeBody:
      "Farcelis treats AI evaluation as an operating design problem. A model needs a bounded role, a review path, escalation rules, data boundaries, and workflow-specific tests before leaders build process around its outputs.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "High benchmark scores do not guarantee real-world performance.",
      "AI evaluation should include robustness, governance, fairness, and workflow fit.",
      "Leaders need transparent testing before they build operations around model claims.",
    ],
    body: [
      {
        heading: "Understanding AI Benchmarks: What They Are and Why They Matter",
        paragraphs: [
          "AI benchmarks serve as standardized tests that evaluate the performance of artificial intelligence systems. They provide a framework for comparing different models across various tasks, ensuring that researchers and developers can assess the effectiveness and efficiency of their algorithms. Benchmarks can range from simple tasks like image classification to complex challenges such as natural language understanding.",
          "In the rapidly evolving field of AI, benchmarks are crucial for guiding research directions and setting industry standards. They help stakeholders make informed decisions about which models to adopt and invest in, ultimately influencing the trajectory of AI technology development.",
        ],
      },
      {
        heading: "The Myths of AI Accuracy: Separating Fact from Fiction",
        paragraphs: [
          "One of the prevalent myths surrounding AI accuracy is the belief that high benchmark scores directly correlate with real-world performance. While benchmarks provide valuable insights, they often fail to capture the intricacies of real-world applications, leading to overestimation of a model's capabilities.",
          "Additionally, many assume that higher accuracy always indicates a better model. However, accuracy can be misleading, particularly in cases of imbalanced datasets where a model might perform well on certain classes while neglecting others. Understanding these nuances is essential for interpreting benchmark results and avoiding pitfalls in AI deployment.",
        ],
      },
      {
        heading: "Inside the Controversy: Meta's Llama 4 and Its Benchmark Performance",
        paragraphs: [
          "Meta's Llama 4 has recently sparked controversy within the AI community regarding its benchmark performance. Critics argue that while Llama 4 achieves impressive scores on various benchmarks, its real-world applications may not live up to the hype. Concerns have been raised about the model's ability to generalize beyond the specific tasks it was tested on.",
          "This situation highlights the ongoing debate about the reliability of benchmarks as indicators of true AI performance. As the community scrutinizes Llama 4's claims, it becomes clear that more transparent evaluation methods are necessary to ensure that benchmarks accurately reflect a model's capabilities in diverse situations.",
        ],
      },
      {
        heading: "The Impact of Misleading Metrics on AI Development and Deployment",
        paragraphs: [
          "Misleading metrics can have significant ramifications for AI development and deployment. When companies and researchers rely on inflated benchmark scores, they may invest resources in models that do not perform well in practical scenarios. This can lead to wasted time, effort, and financial resources as well as erode trust in AI systems.",
          "Furthermore, the focus on achieving high scores on benchmarks can stifle innovation. Developers may prioritize optimizing for specific metrics rather than exploring more holistic approaches to model performance, potentially hindering advancements in AI that could benefit society as a whole.",
        ],
      },
      {
        heading: "Future Directions: Rethinking AI Evaluation Standards",
        paragraphs: [
          "As the limitations of current AI benchmarks become increasingly apparent, there is a pressing need to rethink evaluation standards. Future benchmarks should incorporate a wider range of performance metrics, including robustness, fairness, and real-world applicability, to provide a more comprehensive assessment of AI systems.",
          "Moreover, fostering collaboration among researchers, industry leaders, and policymakers will be essential for developing better evaluation practices. By creating standardized yet flexible benchmarks that adapt to the evolving nature of AI technology, we can ensure that the metrics used truly reflect the capabilities and limitations of AI models in real-world contexts.",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-hidden-issues-ai-fixes",
    title: "Why Your Digital Marketing Isn't Working: Hidden Issues and AI Fixes",
    author: "Nathan Espey",
    date: "April 2, 2025",
    category: "Marketing Operations",
    dek:
      "Digital marketing can look busy and still fail. This article walks through the strategy gaps, audience issues, data opportunities, and AI tools that can make marketing more precise.",
    visualKind: "marketing",
    visualLabel: "Marketing signal flow",
    visualMetrics: ["Audience", "Message", "Data", "AI", "Cadence"],
    coverImage: "/images/articles/marketing-duct-tape.png",
    coverAlt: "Duct tape campaign artwork for a broken digital marketing article",
    pullQuote: "Without a cohesive strategy, your marketing efforts can feel disjointed and ineffective.",
    bridgeTitle: "How Farcelis Applies This",
    bridgeBody:
      "Farcelis connects marketing work to operating structure: clear goals, audience intelligence, content systems, CRM routing, campaign ownership, and performance feedback. AI becomes useful when it improves the system instead of adding another disconnected tool.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "Marketing fails when goals, message, data, and workflow are disconnected.",
      "AI is useful when it sharpens decisions and reduces execution drag.",
      "Audience understanding still determines whether automation helps or just adds noise.",
    ],
    body: [
      {
        heading: "Identifying Common Pitfalls in Your Digital Marketing Strategy",
        paragraphs: [
          "Many businesses struggle with their digital marketing efforts due to common pitfalls that can easily be overlooked. These might include vague goals, inconsistent branding, and a lack of clear messaging. Without a cohesive strategy, your marketing efforts can feel disjointed and ineffective.",
          "Additionally, failing to adapt to changes in consumer behavior and technology can hinder your progress. It’s essential to routinely evaluate your strategy and identify areas for improvement to ensure your marketing remains relevant and impactful.",
        ],
      },
      {
        heading: "The Role of Audience Understanding: Why Targeting Matters",
        paragraphs: [
          "Understanding your audience is crucial to effective digital marketing. Many companies fail to create detailed buyer personas, leading to generic messaging that doesn't resonate with potential customers. Targeting the right audience with tailored content can significantly improve engagement and conversion rates.",
          "Moreover, using tools to analyze audience demographics and preferences can help refine your targeting strategy. This ensures that your marketing efforts are not only reaching the right people but also speaking directly to their needs and interests.",
        ],
      },
      {
        heading: "How Data Analytics Can Reveal Hidden Opportunities",
        paragraphs: [
          "Data analytics plays a vital role in uncovering hidden opportunities within your digital marketing strategy. By analyzing metrics such as website traffic, conversion rates, and customer behavior, you can identify trends and insights that inform future campaigns.",
          "Moreover, leveraging data allows you to make informed decisions rather than relying on assumptions. This analytical approach enables you to optimize your strategies, allocate resources more effectively, and ultimately drive better results.",
        ],
      },
      {
        heading: "Leveraging AI Tools for Enhanced Marketing Efficiency",
        paragraphs: [
          "Artificial Intelligence (AI) tools can revolutionize your digital marketing efforts by automating repetitive tasks and providing insights that would be difficult to obtain manually. For instance, AI can help in personalizing user experiences through targeted recommendations and dynamic content.",
          "Furthermore, employing AI for predictive analytics can give you a competitive edge, allowing you to anticipate market changes and consumer behaviors. This not only enhances marketing efficiency but also elevates your overall strategy, making it more agile and responsive.",
        ],
      },
      {
        heading: "Future-Proofing Your Strategy: Staying Ahead in a Digital World",
        paragraphs: [
          "To stay competitive in an ever-evolving digital landscape, it's crucial to future-proof your marketing strategy. This involves being adaptable and open to new technologies, trends, and consumer preferences. Regularly revisiting and updating your marketing plan can help you remain relevant.",
          "Additionally, investing in ongoing education and training for your marketing team can equip them with the skills needed to navigate changes effectively. Embracing innovation and staying informed about industry developments will ensure your strategy continues to thrive in the digital world.",
        ],
      },
    ],
  },
  {
    slug: "ceo-guide-ai-strategic-disruption",
    title: "Navigating the AI Storm: A CEO's Guide to Strategic Disruption",
    author: "Nathan Espey",
    date: "March 31, 2025",
    category: "Executive AI",
    dek:
      "A CEO’s guide to reading the AI landscape, identifying opportunities, building an AI-ready culture, forming strategic partnerships, and managing ethical risk.",
    visualKind: "executive",
    visualLabel: "Executive AI strategy board",
    visualMetrics: ["Trends", "Opportunity", "Culture", "Partners", "Risk"],
    coverImage: "/images/articles/ceo-ai-arms-race.png",
    coverAlt: "AI arms race artwork for an executive strategy article",
    pullQuote: "CEOs need to understand these trends to anticipate market shifts and adapt their strategies accordingly.",
    bridgeTitle: "How Farcelis Applies This",
    bridgeBody:
      "This is the executive frame behind Farcelis AI strategy and governance work. Adoption is not just tool selection. It is opportunity mapping, leadership alignment, culture design, partner strategy, ethical guardrails, and operating control.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "AI strategy has to connect market change to operating action.",
      "Culture, skills, and leadership habits determine whether adoption holds.",
      "Ethics and risk management belong inside the rollout plan, not after it.",
    ],
    body: [
      {
        heading: "Understanding the AI Landscape: Trends and Implications for Businesses",
        paragraphs: [
          "The AI landscape is evolving rapidly, with advancements in machine learning, natural language processing, and computer vision transforming how businesses operate. CEOs need to understand these trends to anticipate market shifts and adapt their strategies accordingly.",
          "Moreover, the implications of AI are profound, influencing everything from customer service to supply chain management. By interpreting these trends, leaders can identify how AI can create value in their organizations.",
        ],
      },
      {
        heading: "Identifying Opportunities: Leveraging AI for Innovation and Efficiency",
        paragraphs: [
          "AI presents vast opportunities for innovation and operational efficiency. Businesses can leverage AI to automate mundane tasks, analyze vast amounts of data for insights, and personalize customer experiences.",
          "By embracing AI technologies, companies can unlock new revenue streams and improve service delivery, ensuring they stay ahead of competitors in an increasingly digital marketplace.",
        ],
      },
      {
        heading: "Building an AI-Ready Culture: Skills, Mindset, and Leadership",
        paragraphs: [
          "Creating an AI-ready culture is essential for successful adoption. This involves fostering a mindset that embraces change, encouraging continuous learning, and equipping employees with the necessary skills to work alongside AI technologies.",
          "Leadership plays a critical role in this transformation, as CEOs must champion AI initiatives, inspire their teams, and create an environment where innovation thrives.",
        ],
      },
      {
        heading: "Strategic Partnerships: Collaborating with AI Startups and Tech Giants",
        paragraphs: [
          "Forming strategic partnerships is vital for leveraging the full potential of AI. Collaborating with startups can provide access to cutting-edge technologies, while alliances with established tech giants can enhance scalability and resources.",
          "These partnerships can accelerate AI implementation and innovation, allowing businesses to stay agile and responsive to market changes.",
        ],
      },
      {
        heading: "Preparing for the Future: Ethical Considerations and Risk Management in AI Adoption",
        paragraphs: [
          "As companies integrate AI into their operations, ethical considerations and risk management become paramount. CEOs must navigate issues such as data privacy, algorithmic bias, and the impact of automation on jobs.",
          "Proactively addressing these challenges will not only mitigate risks but also build trust with customers and stakeholders, ensuring a sustainable approach to AI adoption.",
        ],
      },
    ],
  },
  {
    slug: "understanding-ai-driven-content",
    title: "Understanding AI-Driven Content",
    author: "Nathan Espey",
    date: "March 27, 2025",
    category: "Content Systems",
    dek:
      "AI-driven content works when human direction, audience insight, workflow structure, and ethical review stay intact. The system makes the voice sharper, not generic.",
    visualKind: "content",
    visualLabel: "AI content operating loop",
    visualMetrics: ["Idea", "Draft", "Voice", "Review", "Publish"],
    coverImage: "/images/articles/content-roadmap.png",
    coverAlt: "Roadmap for future content artwork for an AI content article",
    pullQuote: "The human touch remains essential for crafting narratives that resonate emotionally with audiences.",
    bridgeTitle: "How Farcelis Applies This",
    bridgeBody:
      "Farcelis connects AI-driven content to the broader growth operating system: voice, cadence, audience intelligence, approval flow, publishing, CRM handoff, and performance feedback.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "AI can accelerate ideation, drafting, analysis, and adaptation.",
      "Human voice and editorial judgment remain the differentiator.",
      "Content systems need governance, cadence, and performance feedback.",
    ],
    body: [
      {
        heading: "The Evolution of Content Creation: How AI is Reshaping the Landscape",
        paragraphs: [
          "The landscape of content creation has undergone significant changes with the advent of artificial intelligence. AI technologies are now capable of generating text, images, and even video content, allowing creators to produce high-quality material at unprecedented speeds. This shift not only enhances productivity but also opens new avenues for creativity as AI tools assist in brainstorming and ideation.",
          "Moreover, AI's ability to analyze vast datasets means that content can be tailored to meet the specific preferences of target audiences, leading to more personalized and engaging experiences. This evolution marks a departure from traditional methods, paving the way for innovative approaches to content strategy.",
        ],
      },
      {
        heading: "Leveraging AI Tools for Enhanced Creativity and Efficiency",
        paragraphs: [
          "AI tools are revolutionizing the creative process by automating repetitive tasks and providing insights that can inspire fresh ideas. For instance, platforms that utilize natural language processing can assist writers by suggesting relevant keywords or topics based on current trends, effectively streamlining the content creation process.",
          "Additionally, these tools can analyze audience engagement metrics to inform content adjustments, ensuring that creators remain aligned with their audience's interests. By leveraging AI, marketers and content creators can focus more on strategic thinking and less on mundane tasks, ultimately enhancing both creativity and efficiency.",
        ],
      },
      {
        heading: "Best Practices for Integrating AI-Driven Content into Your Strategy",
        paragraphs: [
          "Successfully integrating AI-driven content into your marketing strategy requires a thoughtful approach. Begin by identifying specific areas where AI can add value, such as content generation, social media management, or data analytics. Setting clear goals will help measure the effectiveness of AI tools.",
          "It is also crucial to maintain a balance between human creativity and AI assistance. While AI can enhance efficiency, the human touch remains essential for crafting narratives that resonate emotionally with audiences. Establishing guidelines for collaboration between AI and human teams can lead to more cohesive and compelling content.",
        ],
      },
      {
        heading: "Case Studies: Successful Implementations of AI in Content Marketing",
        paragraphs: [
          "Several brands have successfully implemented AI in their content marketing strategies, showcasing its potential. For example, a leading e-commerce platform utilized AI algorithms to personalize product recommendations and create tailored email campaigns, resulting in a significant increase in conversion rates.",
          "Another case involved a media company that adopted AI-driven content creation tools to generate news articles, allowing them to cover more stories in a shorter timeframe, thereby enhancing their audience reach without compromising quality. These examples illustrate how AI can drive tangible results in content marketing.",
        ],
      },
      {
        heading: "The Future of AI in Content: Trends and Predictions from Industry Leaders",
        paragraphs: [
          "Looking ahead, industry leaders predict that AI will continue to evolve, increasingly integrating into the fabric of content creation and marketing. One key trend is the rise of AI-generated content becoming indistinguishable from that created by humans, which could challenge current notions of authorship and creativity.",
          "Furthermore, as AI technologies improve, we can expect greater emphasis on ethical considerations and transparency in AI-driven content. Brands will need to navigate these challenges while leveraging AI to enhance their storytelling capabilities, ensuring that they remain relevant in a rapidly changing digital landscape.",
          "Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.",
          "Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.",
        ],
      },
    ],
  },
];

export function getInsightArticleBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const resourceTypes: InfoCard[] = [
  {
    title: "AI adoption briefings",
    description:
      "Short executive notes on readiness, governance, use-case selection, policy, and rollout sequencing.",
  },
  {
    title: "Workflow architecture playbooks",
    description:
      "Practical guides for intake, assignment, escalation, reporting, and operating cadence design.",
  },
  {
    title: "Platform and integration notes",
    description:
      "Field-level guidance on CRM, Microsoft, Google, project systems, marketing tools, and AI agent implementation.",
  },
  {
    title: "Growth system teardown",
    description:
      "Analysis of how content, SEO, social media, CRM, and campaign operations connect to measurable execution.",
  },
  {
    title: "Control Layer perspectives",
    description:
      "Essays and diagrams explaining how the Farcelis operating model sits above existing tools.",
  },
  {
    title: "Client-safe proof stories",
    description:
      "Sanitized breakdowns of what changed in visibility, workflow control, routing, and execution reliability.",
  },
];

export const resourceOffers: ResourceOffer[] = [
  {
    title: "AI Readiness and Governance Brief",
    type: "Executive briefing",
    description:
      "A leadership-ready guide for evaluating AI use cases, governance rules, adoption risk, and rollout sequencing before tool selection starts.",
    audience: "CEOs, founders, operators, and department leaders",
  },
  {
    title: "Workflow Architecture Field Guide",
    type: "Whitepaper",
    description:
      "A practical breakdown of intake, routing, ownership, escalation, reporting, and operating cadence for teams that need work to move cleanly.",
    audience: "Operations leaders and delivery teams",
  },
  {
    title: "Control Layer Operating Model",
    type: "Framework report",
    description:
      "A structured explanation of how the Farcelis Control Layer sits above existing tools and turns fragmented execution into a visible operating system.",
    audience: "Executive teams evaluating operational redesign",
  },
  {
    title: "CRM and Revenue Operations Blueprint",
    type: "Implementation guide",
    description:
      "A guide to lead routing, pipeline ownership, customer handoffs, campaign attribution, and sales-service visibility across CRM environments.",
    audience: "Sales, marketing, and customer operations teams",
  },
  {
    title: "AI Marketing Systems Playbook",
    type: "Growth playbook",
    description:
      "A blueprint for connecting social media, blogs, SEO, content operations, CRM, campaign cadence, and performance reporting.",
    audience: "Growth leaders, marketers, and business owners",
  },
  {
    title: "Automation Failure Pattern Report",
    type: "Diagnostic report",
    description:
      "A decision guide for spotting when automation will fail because workflow logic, ownership, governance, or data visibility is not ready.",
    audience: "Leaders considering AI agents or workflow automation",
  },
];

export const eventOffers: EventOffer[] = [
  {
    title: "AI Adoption Without Operational Drift",
    format: "Executive webinar",
    description:
      "A leadership session on selecting AI use cases, setting guardrails, and building adoption systems that do not collapse into tool sprawl.",
    audience: "Executives, founders, and operators",
  },
  {
    title: "Building the Control Layer",
    format: "Live briefing",
    description:
      "A walkthrough of intake, routing, visibility, ownership, and intervention design for companies trying to regain execution control.",
    audience: "Leadership teams and operations owners",
  },
  {
    title: "CRM, Content, and Revenue Flow",
    format: "Growth systems workshop",
    description:
      "A working session on connecting blogs, SEO, social media, lead capture, CRM handoff, and campaign reporting into one revenue operating system.",
    audience: "Marketing, sales, and revenue operations teams",
  },
  {
    title: "Workflow Automation That Actually Holds",
    format: "Technical workshop",
    description:
      "A practical session on mapping workflow logic before automation, defining escalation rules, and avoiding brittle AI-agent deployments.",
    audience: "Operators, technologists, and implementation leads",
  },
  {
    title: "AI Enablement for Real Teams",
    format: "Enablement session",
    description:
      "A session on using adaptive learning, coaching assistants, and workflow-specific AI training to make adoption stick after launch.",
    audience: "Training, enablement, and department leaders",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industryFocus.find((industry) => industry.slug === slug);
}

export const proofCards: ProofCard[] = [
  {
    title: "Executive Visibility",
    body: "Built for leaders who need priorities, reporting, and follow-through to stay visible when execution starts to sprawl.",
    image: "/images/proof/time-saved.png",
  },
  {
    title: "Workflow Control",
    body: "Designed for teams that need workflows, handoffs, and priorities to stop slipping between people and systems.",
    image: "/images/proof/costs-reduced.png",
  },
  {
    title: "Delivery Governance",
    body: "Shaped by work that has to hold under pressure, across deadlines, stakeholders, and changing priorities.",
    image: "/images/proof/performance-increased.png",
  },
];

export const problemPoints = [
  "Fragmented workflows",
  "No clear ownership",
  "Reactive decisions",
  "Limited visibility",
];

export const urgencyPoints = [
  {
    title: "Execution breaks at handoff points",
    description:
      "Work slows down when requests move between people, tools, and teams without a defined operating path.",
  },
  {
    title: "Scale exposes weak systems",
    description:
      "Growth increases volume, pressure, and coordination load. Without structure, more effort only creates more drag.",
  },
  {
    title: "Leadership reacts too late",
    description:
      "When visibility is delayed, decisions arrive after the problem has already moved through the system.",
  },
  {
    title: "This is a system problem, not a people problem",
    description:
      "Good people still underperform inside weak operating environments. Structure is the layer that makes execution hold.",
  },
];

export const whatFarcelisDoes: InfoCard[] = [
  {
    title: "Operational system design",
    description:
      "Farcelis structures the operating model that determines how work moves, who owns it, and what leadership can actually see.",
  },
  {
    title: "Execution architecture",
    description:
      "Farcelis builds the architecture behind execution so reporting, accountability, and follow-through hold under real pressure.",
  },
  {
    title: "Workflow control environments",
    description:
      "Farcelis defines the environment where workflows, handoffs, and routing logic stay controlled across teams and tools.",
  },
  {
    title: "Decision systems",
    description:
      "Decision-making gains structure when leadership can see active work, pressure points, and operational movement in one frame.",
  },
  {
    title: "Flagship Control Layer implementation",
    description:
      "The Control Layer stands as the flagship Farcelis system when an operation needs a stronger spine across people, processes, and tools.",
  },
  {
    title: "Cross-domain operating range",
    description:
      "Farcelis applies the same systems discipline across enterprise, government, education, and personal environments where execution still needs control.",
  },
];

export const operatingContexts: InfoCard[] = [
  {
    title: "Founders and CEOs",
    description:
      "Farcelis gives leadership teams a stronger view into priorities, execution, and decision-making before chaos compounds.",
  },
  {
    title: "Businesses and enterprises",
    description:
      "Operational systems, automation pathways, and workflow architecture are designed to hold across larger teams and higher stakes.",
  },
  {
    title: "Government and education",
    description:
      "Structured environments can support compliance-heavy, deadline-driven, and cross-functional operating realities where coordination matters.",
  },
  {
    title: "Personal and household systems",
    description:
      "Farcelis applies the same systems thinking to personal environments where planning, priorities, and follow-through need more control.",
  },
];

export const audienceSignals: InfoCard[] = [
  {
    title: "For founders and CEOs",
    description:
      "If growth is outrunning structure and every answer still depends on chasing updates, this is for you.",
  },
  {
    title: "For operators",
    description:
      "If teams are losing execution control through manual follow-up, brittle handoffs, and reactive coordination, this is for you.",
  },
  {
    title: "For organizations carrying complexity",
    description:
      "If complexity keeps multiplying across teams, stakeholders, systems, or even personal operations, this is for you.",
  },
];

export const capabilityPoints = [
  "Full visibility across operations",
  "Clear ownership and accountability",
  "Real-time workflow tracking",
  "Faster, more confident decision-making",
  "Reduced operational friction",
  "Scalable execution systems",
];

export const flowSteps = [
  "Input",
  "Intake",
  "Assignment",
  "Execution",
  "Tracking",
  "Completion",
];

export const controlLayerIntro = [
  {
    title: "Capture",
    description: "All inputs flow into one intake system.",
  },
  {
    title: "Structure",
    description: "Workflows and ownership are clearly defined.",
  },
  {
    title: "Execute",
    description: "Teams operate with clarity and accountability.",
  },
];

export const controlLayerCards = [
  {
    title: "Intake Queue",
    lines: [
      "New Request — Pending",
      "Queued Work — Review",
      "Incoming Input — New",
      "Leadership Note — Routed",
    ],
    footer: "State: Active Intake",
  },
  {
    title: "Workflow Engine",
    lines: [
      "Stage 1 → Intake",
      "Stage 2 → Structuring",
      "Stage 3 → Assignment",
      "Stage 4 → Execution",
    ],
    footer: "Current Stage: Assignment",
  },
  {
    title: "Priority Panel",
    lines: [
      "High — Client Delivery, System Issue",
      "Medium — Internal Review",
      "Low — Documentation Update",
    ],
    footer: "Decision clarity without exposed client data",
  },
  {
    title: "Execution Board",
    lines: [
      "Assigned — Workflow A → Operations",
      "In Progress — Workflow B → Marketing",
      "Completed — Workflow C → Closed",
    ],
    footer: "Ownership and accountability by lane",
  },
  {
    title: "System Tracking",
    lines: [
      "Workflow Status: Active",
      "Execution Status: Stable",
      "Priority State: Live",
      "Visibility Layer: On",
    ],
    footer: "State: Operational",
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "nathan-espey",
    name: "Nathan Espey",
    role: "Founder & Chief Executive Officer",
    email: "nespey@farcelis.io",
    image: "/images/team/nathan-espey.png",
    specialties: [
      "AI-driven operational systems",
      "Workflow architecture",
      "Control layer design",
      "Enterprise AI strategy",
      "Execution systems",
      "Organizational transformation",
    ],
    bio: [
      "As Founder and CEO of Farcelis, Nathan Espey leads the development of advanced AI-driven operational systems designed to bring structure, clarity, and execution control to modern businesses. His work centers on building what Farcelis defines as the Control Layer, a centralized system that organizes inflows, outflows, workflows, and decision-making into a single, actionable environment.",
      "Nathan specializes in translating complex operational chaos into structured, scalable systems that enable leaders to move faster with greater precision. His approach blends AI automation, systems architecture, and real-world operational experience to create environments where strategy and execution are fully aligned.",
      "Drawing on leadership experience across operations, government contracting, and enterprise strategy, Nathan focuses on practical implementation, not theory. His systems are designed to work in live environments, integrating with existing tools while introducing a higher level of visibility, coordination, and control.",
      "Farcelis systems, including the Farcelis Control Layer, Pulse Thread Coaching Assistant(TM), and INTENT+(TM) Adaptive Learning Engine, are built to reduce friction, accelerate execution, and improve decision clarity across teams and organizations.",
      "Nathan's work has helped clients reduce onboarding time, increase delivery speed, and create sustainable operational scale without increasing overhead.",
    ],
  },
  {
    slug: "katalin-espey",
    name: "Katalin Espey",
    role: "Chief Systems Officer",
    email: "kespey@farcelis.io",
    image: "/images/team/katalin-espey.jpeg",
    specialties: [
      "Systems architecture",
      "Workflow design",
      "Operational structuring",
      "Control layer deployment",
      "Process optimization",
      "AI-integrated systems",
    ],
    bio: [
      "As Chief Systems Officer at Farcelis, Katalin leads the design, structuring, and deployment of the Farcelis Control Layer across client environments. She is responsible for translating complex operational realities into clean, executable system architectures that enable clarity, coordination, and consistent execution.",
      "Katalin specializes in systems thinking, workflow engineering, and operational structuring, with a focus on turning fragmented processes into unified control environments. Her work ensures that every Control Layer implementation is not just functional, but intuitive, scalable, and aligned with how teams actually operate.",
      "Working at the intersection of AI, automation, and operational design, she oversees how inflows, outflows, tasks, data, and decision points are organized into a single system that supports real-time visibility and action. She plays a critical role in ensuring that Farcelis systems move beyond theory and become fully embedded into day-to-day operations.",
      "Katalin's approach prioritizes clarity, usability, and continuity, ensuring that systems reduce cognitive load rather than add to it. She works closely with both leadership and operational teams to ensure that every system reflects real workflows, real priorities, and real constraints.",
      "At Farcelis, she is a core driver behind the evolution of the Control Layer as a repeatable, scalable product, helping transform it from a custom solution into a structured deployment framework.",
    ],
  },
  {
    slug: "celeste-hartley",
    name: "Celeste Hartley",
    role: "Chief Marketing Officer",
    email: "chartley@farcelis.io",
    image: "/images/team/celeste-hartley.jpeg",
    specialties: [
      "AI-driven growth systems",
      "Marketing architecture",
      "Funnel optimization",
      "Content automation",
      "SEO intelligence",
      "Conversion systems",
      "Control Layer integration",
    ],
    bio: [
      "Celeste Hartley serves as Chief Marketing Officer of Farcelis, operating as an AI-driven digital persona responsible for architecting and executing scalable growth systems across the firm and its clients. She leads the development of marketing environments that integrate directly into the Farcelis Control Layer, ensuring that lead generation, content, and conversion activity are fully aligned with operational workflows and business objectives.",
      "Celeste specializes in building structured, data-driven growth systems that move beyond traditional marketing campaigns. Her approach focuses on creating continuous, automated pipelines that connect inbound demand, customer engagement, and revenue generation into a single, trackable system.",
      "Working at the intersection of AI, automation, and behavioral analytics, she designs and deploys intelligent marketing frameworks that adapt in real time. These systems integrate SEO intelligence, content automation, funnel optimization, and performance tracking into unified environments that reduce friction and increase conversion efficiency.",
      "Leveraging tools such as the AI Marketing Blueprint Generator(TM), advanced SEO modeling, and adaptive content systems, Celeste has helped drive significant increases in qualified lead flow, conversion rates, and campaign performance while eliminating the need for manual oversight and fragmented tooling.",
      "Her focus is on building marketing systems that do not just generate attention, but translate directly into measurable business outcomes within the broader Farcelis operational framework.",
    ],
  },
  {
    slug: "dominic-chase",
    name: "Dominic Chase",
    role: "Chief Operating Officer",
    email: "dchase@farcelis.io",
    image: "/images/team/dominic-chase.jpeg",
    specialties: [
      "Operational execution",
      "Workflow deployment",
      "System integration",
      "Automation frameworks",
      "AI-enabled operations",
      "Control Layer implementation",
    ],
    bio: [
      "Dominic Chase serves as Chief Operating Officer at Farcelis, overseeing the execution, deployment, and performance of AI-driven operational systems across client environments. He is responsible for translating the Farcelis Control Layer from structured design into fully functional, real-world implementations that drive measurable results.",
      "Dominic specializes in operational execution, workflow integration, and system deployment, ensuring that every Control Layer is not only built correctly, but performs reliably under real business conditions. His work focuses on aligning automation, data flow, and team activity into cohesive systems that reduce friction and increase output without increasing complexity.",
      "Working closely with system architecture and strategy, he leads the buildout of AI-enabled workflows, automation frameworks, and integrated operational environments. This includes the deployment of proprietary tools such as the RapidRamp Generator(TM) and Blueprint Readiness Snapshot(TM), as well as the integration of custom AI agents into daily business processes.",
      "Dominic's approach is grounded in execution discipline. He ensures that systems are not theoretical or over-engineered, but practical, usable, and aligned with how teams actually operate. His work has helped organizations significantly reduce manual workload, improve coordination across teams, and increase operational throughput without sacrificing quality.",
      "At Farcelis, he plays a critical role in scaling the Control Layer from a structured framework into a repeatable, high-performance system that can be deployed across companies, teams, and environments.",
    ],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

export const certifications = [
  {
    name: "HubSpot Academy Digital Marketing Certification Badge",
    image: "/images/certifications/hubspot-digital-marketing.png",
  },
  {
    name: "LinkedIn and Microsoft AI Fundamentals Certification Badge",
    image: "/images/certifications/linkedin-ai-fundamentals.png",
  },
  {
    name: "Superhuman AI Certification Badge",
    image: "/images/certifications/superhuman-ai.jpg",
  },
  {
    name: "Industrial Rockstar Certification Badge",
    image: "/images/certifications/industrial-rockstar.jpg",
  },
  {
    name: "Google Cloud Certification Badge",
    image: "/images/certifications/google-cloud-ai.jpg",
  },
  {
    name: "Databricks AI Fundamentals Certification Badge",
    image: "/images/certifications/databricks-ai.jpg",
  },
  {
    name: "ClickUp Verified Power User",
    image: "/images/certifications/clickup-verified-power-user.jpeg",
  },
  {
    name: "SharePoint Certification",
    image: "/images/certifications/sharepoint-cert.png",
  },
  {
    name: "Power Automate Certification",
    image: "/images/certifications/power-automate-cert.png",
  },
  {
    name: "AILCN Consultant Certification",
    image: "/images/certifications/ailcn-consultant-cert.png",
  },
  {
    name: "Microsoft Developer Certification",
    image: "/images/certifications/microsoft-developer-cert.png",
  },
  {
    name: "Chrome DevTools Certification",
    image: "/images/certifications/chrome-devtools-cert.png",
  },
];

export const businessSignals = [
  "Small Business",
  "Service-Disabled Veteran-Owned",
  "Woman-Owned",
];
