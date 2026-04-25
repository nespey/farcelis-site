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
    { label: "Legal Notice", href: "https://www.farcelis.io/legal#legal" },
    { label: "Privacy Policy", href: "https://www.farcelis.io/privacy#privacy" },
    { label: "CA Consumer Policy", href: "https://www.farcelis.io/caconsumer#caconsumer" },
    {
      label: "Accessibility, Accommodations & E-Verify",
      href: "https://www.farcelis.io/ada#ada",
    },
    { label: "Terms of Service", href: "https://www.farcelis.io/tos#tos" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/control-layer", label: "Control Layer" },
    { href: "/services", label: "Services" },
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
  {
    name: "CityGov",
    logo: "/logos/partners/citygov-light.png",
    href: "https://www.citygov.com/",
    dark: true,
  },
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
];
