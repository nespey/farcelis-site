import Link from "next/link";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.deploymentOperations);

const operatingStack = [
  {
    title: "GitHub release path",
    body: "Repository structure, branch discipline, deployment triggers, review checkpoints, and rollback notes for code that needs to stay understandable after launch.",
    points: ["Repository inventory", "Branch and preview flow", "Release checklist", "Rollback reference"],
  },
  {
    title: "Vercel hosting operations",
    body: "Project setup, production and preview deployment review, environment configuration, domains, build settings, analytics, and live-route validation.",
    points: ["Project and domain review", "Environment variables", "Build and deploy checks", "Production readiness"],
  },
  {
    title: "Live support rhythm",
    body: "A practical operating cadence for keeping sites, dashboards, portals, and AI-assisted tools maintained without turning every update into a fire drill.",
    points: ["Support boundaries", "Issue intake", "Documentation habits", "Business-hours escalation"],
  },
];

const launchPath = [
  "Confirm the application, owner, repository, hosting project, domains, secrets, and external services.",
  "Define what Farcelis manages, what the client owns, and which changes require approval.",
  "Stabilize the GitHub-to-Vercel release path with preview checks, launch steps, and rollback notes.",
  "Document the operating rhythm for updates, monitoring, support requests, and future improvements.",
];

const bestFit = [
  "A website, dashboard, portal, or AI-assisted tool already exists but the post-launch owner is unclear.",
  "GitHub, Vercel, DNS, domains, secrets, and deploy settings feel scattered or fragile.",
  "The business wants Farcelis to manage the deployment path without hiding ownership or trapping the client.",
  "A client needs a practical bridge between one-off build work and a real managed operating service.",
];

export default function DeploymentOperationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Deployment Operations"
        title="GitHub and Vercel support for tools that need to stay live after launch."
        description="Farcelis helps keep websites, apps, portals, dashboards, and AI-assisted tools deployed, documented, monitored, and manageable after the first build ships."
        actions={[
          { href: "/contact", label: "Discuss Deployment Support" },
          { href: "/services/managed-operations", label: "See Managed Operations", variant: "secondary" },
        ]}
        asideTitle="Best fit"
        asideItems={bestFit.slice(0, 3)}
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[900px]">
              <p className="eyebrow text-[#9f412c]">Managed Deployment Layer</p>
              <h2 className="section-title mt-5 text-slate-950">
                The service sits between the build and the business: release path, hosting setup, documentation, and operating support.
              </h2>
              <p className="mt-6 max-w-[760px] text-base leading-8 text-slate-600">
                Farcelis does not need to pretend to be the data center. The value is operational ownership: knowing what is deployed, how it updates, where it can fail, and how to keep the client in control.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {operatingStack.map((item) => (
                <article
                  key={item.title}
                  className="enterprise-card rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                  <ul className="mt-6 grid gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="border-l border-[#9f412c]/28 pl-4 text-sm font-semibold leading-6 text-slate-700"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">How It Works</p>
              <h2 className="section-title mt-5 text-white">
                Start with a client-owned stack, then make the deployment path repeatable.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                The clean initial model is simple: the client owns the repository, domain, hosting account, and data. Farcelis manages the operating process around it.
              </p>
            </div>

            <div className="grid gap-3">
              {launchPath.map((item, index) => (
                <div key={item} className="rounded-[22px] border border-cyan-100/12 bg-white/[0.045] px-5 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    Step {index + 1}
                  </div>
                  <p className="mt-2 text-lg leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                <p className="eyebrow text-[#9f412c]">Service Boundary</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  Farcelis manages the release path without taking ownership away from the client.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  This creates a legitimate managed deployment offer around GitHub, Vercel, domains, documentation, support cadence, and application upkeep while keeping infrastructure charges, code ownership, and export paths clear.
                </p>
              </article>

              <article className="rounded-[26px] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
                <p className="eyebrow text-[#9f412c]">Good Candidates</p>
                <ul className="mt-5 grid gap-4">
                  {bestFit.map((item) => (
                    <li
                      key={item}
                      className="border-l border-[#9f412c]/28 pl-4 text-base font-semibold leading-7 text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div className="max-w-[920px]">
              <p className="eyebrow text-[color:var(--color-accent)]">Where This Leads</p>
              <h2 className="section-title mt-5 text-white">
                The first product is managed deployment. The later product can become a Farcelis Deployment Hub.
              </h2>
              <p className="mt-6 max-w-[760px] text-base leading-8 text-slate-300">
                Once the managed service proves demand, Farcelis can build a private hub for repository intake, deployment status, support requests, documentation, and client reporting.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Start a Deployment Review
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/18 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/32 hover:bg-cyan-100/8"
                >
                  Return to Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
