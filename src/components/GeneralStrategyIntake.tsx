"use client";

import { FormEvent, useMemo, useState } from "react";

import { site } from "@/lib/site-data";

type WorkInterest = {
  id: string;
  label: string;
  description: string;
  emailLabel?: string;
};

const workInterests: WorkInterest[] = [
  { id: "website-development", label: "Website Development", description: "Service pages, landing pages, resource hubs, and inquiry paths." },
  { id: "app-portal-development", label: "App & Portal Development", description: "Web apps, client portals, dashboards, and login-based tools." },
  { id: "ai-agents-automations", label: "AI Agents & Automations", description: "Assistants and repeatable workflows tied to real tasks." },
  { id: "platform-connections", label: "Platform Connections", description: "Connect websites, CRM, forms, workspaces, and dashboards." },
  { id: "deployment-operations-build", label: "Deployment Operations", description: "Launch paths, hosting, domains, releases, and documentation.", emailLabel: "Deployment Operations - launch path" },
  { id: "dashboards-decision-views", label: "Dashboards and Decision Views", description: "Views that show what is happening, stuck, and ready for action." },
  { id: "seo-search-visibility", label: "SEO & Search Visibility", description: "Pages, structure, topics, and signals for traditional search." },
  { id: "aeo-ai-search-visibility", label: "AEO & AI Search Visibility", description: "Structure content so AI search can understand and cite the offer." },
  { id: "google-ads-paid-search", label: "Google Ads/Paid Search", description: "Paid search tied to landing pages, tracking, and follow-up." },
  { id: "meta-ads-paid-social", label: "Meta Ads/Paid Social", description: "Social ad paths with audience, creative, landing pages, and leads." },
  { id: "crm-revenue-operations", label: "CRM & Revenue Operations", description: "Lead capture, routing, follow-up, reporting, and handoffs." },
  { id: "content-revenue-systems", label: "Content & Revenue Systems", description: "Content, offers, campaigns, and publishing rhythm in one system." },
  { id: "ai-strategy-governance", label: "AI Strategy & Governance", description: "Use rules, ownership, risk boundaries, and adoption structure." },
  { id: "workflow-operations", label: "Workflow & Operations", description: "How work enters, moves, gets assigned, escalated, and reported." },
  { id: "farcelis-control-layer", label: "The Farcelis Control Layer", description: "A structured operating layer for intake, visibility, and action." },
  { id: "managed-operations", label: "Managed Operations", description: "Cadence, triage, reminders, reporting, enablement, and support." },
  { id: "reporting-decision-systems", label: "Reporting & Decision Systems", description: "Leadership-ready reporting and decision rhythm." },
  { id: "deployment-operations-operate", label: "Deployment Operations", description: "Ongoing deployment continuity, maintenance, checks, and support.", emailLabel: "Deployment Operations - ongoing continuity" },
];

export function GeneralStrategyIntake() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedItems = useMemo(
    () => workInterests.filter((item) => selectedIds.includes(item.id)),
    [selectedIds],
  );

  const toggleInterest = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const goal = String(form.get("goal") ?? "");
    const context = String(form.get("context") ?? "");
    const selectedWork = selectedItems.map((item) => item.emailLabel ?? item.label);

    const subject = "Farcelis General Strategy inquiry";
    const body = [
      "Path: General Strategy",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      "Selected work areas:",
      selectedWork.length > 0 ? selectedWork.map((item) => `- ${item}`).join("\n") : "None selected",
      "",
      "What they want to build, grow, or stabilize:",
      goal,
      "",
      "What already exists / useful context:",
      context,
    ].join("\n");

    window.location.href = `mailto:${site.contact.founderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="grid gap-4">
      <section className="rounded-[24px] border border-cyan-100/12 bg-[#1c3c4d] px-4 py-4 text-white lg:px-5">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="eyebrow text-[color:var(--color-accent)]">Select Work Areas</p>
          <p className="text-sm leading-6 text-slate-300">
            Choose one or more areas you want Farcelis to help with. These selections are added to the intake message.
          </p>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {workInterests.map((item) => {
            const selected = selectedIds.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleInterest(item.id)}
                aria-pressed={selected}
                className={`min-h-[92px] rounded-[15px] border px-3 py-3 text-center transition ${
                  selected
                    ? "border-[color:var(--color-accent)] bg-[rgba(242,139,91,0.16)] shadow-[0_12px_30px_rgba(255,124,82,0.12)]"
                    : "border-cyan-100/10 bg-[#173343] hover:border-cyan-100/24 hover:bg-[#214557]"
                }`}
              >
                <span className="block text-sm font-semibold leading-5 text-white">{item.label}</span>
                <span className="mx-auto mt-1.5 block max-w-[18rem] text-xs leading-5 text-slate-300">
                  {item.description}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <form id="strategy-form" onSubmit={handleSubmit} className="surface-dark grid gap-3 rounded-[24px] p-5">
        <p className="eyebrow text-[color:var(--color-accent)]">General Strategy Intake</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Name"
            className="rounded-[15px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="rounded-[15px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
        </div>
        <input
          name="company"
          placeholder="Company or organization"
          className="rounded-[15px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
        />
        {selectedItems.length > 0 ? (
          <div className="flex flex-wrap gap-2 rounded-[15px] border border-cyan-100/10 bg-white/[0.035] px-3 py-3">
            {selectedItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleInterest(item.id)}
                className="rounded-full border border-[color:var(--color-accent)]/40 bg-[rgba(242,139,91,0.14)] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[rgba(242,139,91,0.22)]"
              >
                {item.label} ×
              </button>
            ))}
          </div>
        ) : null}
        <textarea
          name="goal"
          required
          rows={3}
          placeholder="What are you trying to build, grow, or stabilize?"
          className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
        />
        <textarea
          name="context"
          rows={3}
          placeholder="What already exists, and what is missing, messy, stuck, or hard to manage?"
          className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
        />
        <button
          type="submit"
          className="min-h-11 rounded-full bg-[color:var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
        >
          Send General Strategy Context
        </button>
      </form>
    </div>
  );
}
