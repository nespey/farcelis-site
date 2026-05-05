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

export type InsightArticle = {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  dek: string;
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
    },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574461822944" },
    { label: "X", href: "https://x.com/FarcelisAI" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/farcelisai?igsh=MWI1OW1rbGlzeWliMA%3D%3D&utm_source=qr",
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
      "Built from Farcelis patterns around meeting follow-through, action extraction, decision recaps, and adoption coaching.",
      "Connects directly to the Control Layer because coaching only matters when the next action has an owner and a place to land.",
      "Useful where leaders repeatedly translate conversations into reminders, updates, and accountability notes.",
    ],
    delivery: [
      "Define the coaching moments that create drag.",
      "Create prompt flows for decisions, next actions, owners, risks, and follow-up cadence.",
      "Route outputs into email, task boards, meeting notes, or the Control Layer.",
    ],
    researchNotes: [
      "This is an operating assistant, not a chatbot. Its job is to help teams keep context alive after the meeting ends.",
      "Best evidence comes from recommendation themes around clarity, communication, urgency, and practical follow-through.",
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
      "Grounded in Farcelis AI literacy, enablement, and public-sector publishing themes around adoption, judgment, trust, and practical use.",
      "Designed to support role-based AI adoption instead of one-size-fits-all training content.",
      "Maps learning back to operating behavior so enablement produces better decisions, not just completed modules.",
    ],
    delivery: [
      "Profile roles, readiness, and real workflow responsibilities.",
      "Build adaptive learning paths with practice prompts and reinforcement loops.",
      "Track adoption signals and connect them to operating outcomes.",
    ],
    researchNotes: [
      "CityGov publishing around AI literacy, workforce readiness, and responsible AI gives this product a credible thought-leadership base.",
      "The product needs to show how people learn inside a system, not just how they consume training.",
    ],
  },
  {
    slug: "rapidramp-generator",
    title: "RapidRamp Generator",
    eyebrow: "Implementation Accelerator",
    description:
      "A structured deployment accelerator for turning messy operational requirements into phased rollout plans, system maps, tool configurations, and execution checklists.",
    outcomes: [
      "Faster implementation planning",
      "Cleaner rollout sequencing",
      "Reduced ambiguity before build",
      "Reusable system documentation",
    ],
    modules: [
      "Readiness intake",
      "System map",
      "Phase plan",
      "Tooling checklist",
      "Launch controls",
    ],
    useCases: [
      "Control Layer deployment",
      "CRM rebuilds",
      "Workflow automation",
      "Marketing operations setup",
    ],
    proof: [
      "Matches internal closeout, tracker, checklist, and deployment-document work where messy requirements become ordered execution packages.",
      "Turns discovery into phased plans, system maps, launch controls, and implementation checklists.",
      "Best suited when the client already feels urgency but needs sequencing before buildout.",
    ],
    delivery: [
      "Capture requirements, constraints, owners, and timing pressure.",
      "Generate a staged rollout map with checkpoints, dependencies, and launch controls.",
      "Convert the plan into implementation checklists and operating documentation.",
    ],
    researchNotes: [
      "Farcelis has multiple internal package builders and closeout artifacts in the workspace; the product story is deployment discipline.",
      "RapidRamp is strongest as a planning accelerator for real implementation, not a generic project template.",
    ],
  },
  {
    slug: "blueprint-readiness-snapshot",
    title: "Blueprint Readiness Snapshot",
    eyebrow: "Assessment Product",
    description:
      "A concise diagnostic product that scores the current operating environment across workflows, ownership, tools, data visibility, automation readiness, and governance gaps.",
    outcomes: [
      "Clear view of system gaps",
      "Prioritized implementation path",
      "AI and automation readiness signal",
      "Leadership-ready recommendation set",
    ],
    modules: [
      "Workflow scan",
      "Tooling review",
      "Data visibility check",
      "Governance review",
      "Priority roadmap",
    ],
    useCases: [
      "Pre-engagement discovery",
      "Executive planning",
      "Automation readiness",
      "Operational reset",
    ],
    proof: [
      "Reflects the same assessment logic used across CRM, projects, finance, pipeline, ownership, priority, and status data surfaces.",
      "Helps leaders see workflow, tooling, visibility, automation, and governance gaps before selecting a solution.",
      "Creates the bridge between a strategy conversation and a scoped implementation path.",
    ],
    delivery: [
      "Review workflows, tools, data visibility, handoffs, and governance posture.",
      "Score the environment across operating risk and implementation readiness.",
      "Deliver a prioritized roadmap with recommended next moves.",
    ],
    researchNotes: [
      "This is the cleanest front-door product for buyers who are not ready to commit to a full Control Layer.",
      "The assessment reads as executive-grade and specific, not like a generic quiz.",
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
      "Connected to Farcelis legacy blog content, SEO positioning, HubSpot certification assets, and growth-system service lanes.",
      "Turns audience, offer, content, SEO, CRM, and campaign work into one execution model.",
      "Designed for teams whose marketing activity is visible but not operationally controlled.",
    ],
    delivery: [
      "Map audience, offers, channels, content inventory, and CRM handoffs.",
      "Build the SEO, blog, social, campaign, and reporting cadence.",
      "Connect growth actions to owners, deadlines, lead stages, and measurement loops.",
    ],
    researchNotes: [
      "The old Farcelis articles around funnels, digital foundations, and AI-driven content give this product a native content base.",
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

export const insightArticles: InsightArticle[] = [
  {
    slug: "funnel-broken-foundation",
    title: "Your Funnel Is Broken Because Your Foundation Is",
    author: "Nathan Espey",
    date: "April 14, 2025",
    category: "Growth Systems",
    dek:
      "Traffic is easy to blame. Farcelis treats weak conversion as an operating-system problem: load speed, forms, CRM tags, follow-up logic, and handoffs have to work before promotion can scale.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "5 min read",
    takeaways: [
      "A funnel cannot outperform the system underneath it.",
      "Promotion should wait until forms, email logic, CRM triggers, and retargeting are actually connected.",
      "Marketing performance is an operations question, not just a creative one.",
    ],
    body: [
      {
        heading: "The Real Failure Point",
        paragraphs: [
          "When ads are getting clicks but the pipeline still feels dead, the answer is rarely another headline. The sharper question is whether the lead can move from awareness to action without friction.",
          "A slow mobile page, a buried CTA, a broken hidden field, a disconnected CRM tag, or a follow-up email landing in spam can make a good campaign look like a bad market. That is not a traffic problem. It is a foundation problem.",
        ],
      },
      {
        heading: "What Farcelis Audits First",
        paragraphs: [
          "Before scale, Farcelis looks for the small breaks that compound into lost revenue. The audit starts with the site experience, then follows the lead through form submission, confirmation, CRM routing, email delivery, retargeting, and owner follow-through.",
          "The point is to see the full system. If the handoff fails after the click, the ad budget only accelerates waste.",
        ],
        bullets: [
          "Mobile speed and page clarity",
          "CTA visibility and form reliability",
          "CRM tags, lifecycle stages, and ownership",
          "Email confirmation, deliverability, and follow-up sequence",
          "Retargeting and reporting logic",
        ],
      },
      {
        heading: "The Farcelis Fix",
        paragraphs: [
          "The repair sequence is simple: audit the system, rebuild the conversion layer, reconnect the follow-up path, then scale promotion only when the operating path holds.",
          "That is why the AI Marketing Blueprint Generator lives beside workflow architecture. Growth work is not separate from operations. It is one of the places where weak operations gets expensive fastest.",
        ],
      },
    ],
  },
  {
    slug: "benchmark-mirage-ai-accuracy",
    title: "The Benchmark Mirage: AI Accuracy Myths and Real-World Risk",
    author: "Nathan Espey",
    date: "April 9, 2025",
    category: "AI Governance",
    dek:
      "AI benchmark scores can be useful signals, but they are not operating proof. Leaders need evaluation standards tied to real workflows, failure modes, oversight, and measurable business use.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "High benchmark scores do not guarantee real-world performance.",
      "AI evaluation should include robustness, governance, fairness, and workflow fit.",
      "Leaders need transparent testing before they build operations around model claims.",
    ],
    body: [
      {
        heading: "Benchmarks Are Not the Finish Line",
        paragraphs: [
          "Benchmarks give teams a way to compare models, but they are controlled tests. They do not automatically reveal how a model behaves inside a client workflow, a compliance-heavy handoff, a messy inbox, or an executive decision loop.",
          "That gap is where risk enters. A model can look impressive in a leaderboard and still fail when the work depends on context, judgment, escalation, and consistency.",
        ],
      },
      {
        heading: "What Leaders Should Demand",
        paragraphs: [
          "Farcelis treats model evaluation as an operating question. The right test is not only whether the model can answer. The right test is whether the workflow can absorb the answer safely.",
          "That means leaders should ask how the model was evaluated, what conditions it fails under, what data it can touch, how outputs are reviewed, and what human decision rights remain intact.",
        ],
        bullets: [
          "Workflow-specific test cases",
          "Clear escalation and review rules",
          "Known failure modes and bias checks",
          "Data boundaries and privacy controls",
          "Human accountability for final decisions",
        ],
      },
      {
        heading: "The Control Layer View",
        paragraphs: [
          "In a Farcelis Control Layer, AI is not trusted because it is impressive. It is trusted when it has a defined responsibility, a visible output path, and a review structure.",
          "The lesson is plain: do not buy a benchmark. Build an operating environment where AI has a job, a boundary, and a manager.",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-hidden-issues-ai-fixes",
    title: "Why Digital Marketing Is Not Working: Hidden Issues and AI Fixes",
    author: "Nathan Espey",
    date: "April 2, 2025",
    category: "Marketing Operations",
    dek:
      "AI can improve content, targeting, personalization, and analytics, but only when the strategy has clear goals, a real audience model, and a workflow that connects marketing activity to revenue movement.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "Marketing fails when goals, message, data, and workflow are disconnected.",
      "AI is useful when it sharpens decisions and reduces execution drag.",
      "Audience understanding still determines whether automation helps or just adds noise.",
    ],
    body: [
      {
        heading: "The Hidden Drift",
        paragraphs: [
          "Digital marketing often looks busy long after it stops being effective. Posts go out. Campaigns run. Reports get reviewed. But the operating logic underneath is vague: unclear goals, inconsistent message, weak audience definition, and poor handoffs.",
          "AI does not fix that automatically. It amplifies whatever system it enters.",
        ],
      },
      {
        heading: "Where AI Helps",
        paragraphs: [
          "Used correctly, AI can help teams identify patterns in customer behavior, generate content variants, personalize journeys, and surface campaign opportunities faster than manual review.",
          "The useful version is not AI replacing strategy. It is AI giving operators better signal while the Control Layer keeps owners, deadlines, and follow-through visible.",
        ],
        bullets: [
          "Audience and persona refinement",
          "Content planning and keyword clustering",
          "Campaign testing and performance analysis",
          "CRM handoff and follow-up support",
          "Reporting tied to actual next actions",
        ],
      },
      {
        heading: "The Operating Move",
        paragraphs: [
          "Farcelis starts by tying every marketing activity to a workflow: who owns the next action, where the lead goes, what qualifies movement, and what gets reported.",
          "That is how marketing becomes an operating system instead of a pile of tactics.",
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
      "CEOs do not need to chase every AI trend. They need a practical adoption frame: where AI creates value, what risks must be governed, and how the organization changes without losing control.",
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "AI strategy has to connect market change to operating action.",
      "Culture, skills, and leadership habits determine whether adoption holds.",
      "Ethics and risk management belong inside the rollout plan, not after it.",
    ],
    body: [
      {
        heading: "Strategy Before Motion",
        paragraphs: [
          "The AI market moves fast enough to make every executive feel late. That pressure creates bad strategy: more pilots, more subscriptions, more noise, and no operating spine.",
          "A CEO needs to know where AI creates leverage, where it creates exposure, and which workflows are mature enough to support it.",
        ],
      },
      {
        heading: "The Leadership Work",
        paragraphs: [
          "AI readiness is partly technical, but it is also cultural. Teams need permission to learn, rules for responsible use, a shared language for risk, and leaders who can explain why the change matters.",
          "The best deployments pair opportunity with guardrails. They create room for innovation without abandoning decision rights, privacy, or accountability.",
        ],
      },
      {
        heading: "What Farcelis Builds",
        paragraphs: [
          "Farcelis turns AI strategy into an adoption architecture: use cases, governance, training, workflows, ownership, and reporting. The goal is not to look advanced. The goal is to make better decisions faster without weakening control.",
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
    sourceLabel: "Migrated from the original Farcelis article library",
    readTime: "4 min read",
    takeaways: [
      "AI can accelerate ideation, drafting, analysis, and adaptation.",
      "Human voice and editorial judgment remain the differentiator.",
      "Content systems need governance, cadence, and performance feedback.",
    ],
    body: [
      {
        heading: "Content Is a System",
        paragraphs: [
          "AI has changed how quickly teams can produce words, images, outlines, and variants. Speed is useful, but it is not the win by itself.",
          "The stronger question is whether the content reflects a real point of view, reaches a defined audience, and moves into a measurable operating path after publishing.",
        ],
      },
      {
        heading: "Where AI Belongs",
        paragraphs: [
          "AI can help identify topics, cluster keywords, draft variations, summarize research, repurpose long-form ideas, and read performance data. It should support the content engine without flattening the brand voice.",
          "Farcelis keeps the human layer visible: strategy, taste, judgment, ethics, and final editorial accountability.",
        ],
        bullets: [
          "Topic and keyword intelligence",
          "Draft acceleration and repurposing",
          "Audience and engagement analysis",
          "Editorial guardrails and review",
          "Publishing cadence tied to CRM and campaign movement",
        ],
      },
      {
        heading: "The Practical Standard",
        paragraphs: [
          "If the content sounds like anyone could have written it, the system is failing. AI should help a company sound more clearly like itself, with stronger rhythm, sharper structure, and a cleaner path from idea to action.",
        ],
      },
    ],
  },
];

export function getInsightArticleBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
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
