"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

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
  { id: "dashboards-decision-views", label: "Dashboards and Decision Views", description: "Views that show what is happening, stuck, and ready for action." },
  { id: "seo-search-visibility", label: "SEO & Search Visibility", description: "Pages, structure, topics, and signals for traditional search." },
  { id: "aeo-ai-search-visibility", label: "AEO & AI Search Visibility", description: "Structure content so AI search can understand and cite the offer." },
  { id: "google-ads-paid-search", label: "Google Ads/Paid Search", description: "Paid search tied to landing pages, tracking, and follow-up." },
  { id: "meta-ads-paid-social", label: "Meta Ads/Paid Social", description: "Social ad paths with audience, creative, landing pages, and leads." },
  { id: "crm-revenue-operations", label: "CRM & Revenue Operations", description: "Lead capture, routing, follow-up, reporting, and handoffs." },
  { id: "content-revenue-systems", label: "Content & Revenue Systems", description: "Content, offers, campaigns, and publishing rhythm in one system." },
  { id: "ai-strategy-governance", label: "AI Strategy & Governance", description: "Use rules, ownership, risk boundaries, and adoption structure." },
  { id: "workflow-managed-operations", label: "Workflow & Managed Operations", description: "Work routing, ownership, cadence, reporting, and support." },
  { id: "farcelis-control-layer", label: "The Farcelis Control Layer", description: "A structured operating layer for intake, visibility, and action." },
  { id: "reporting-decision-systems", label: "Reporting & Decision Systems", description: "Leadership-ready reporting and decision rhythm." },
  { id: "deployment-operations-operate", label: "Deployment Operations", description: "Keep hosted websites, apps, releases, checks, and support stable.", emailLabel: "Deployment Operations - ongoing continuity" },
];

export function GeneralStrategyIntake() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [goalText, setGoalText] = useState("");
  const [contextText, setContextText] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const work = params
      .get("work")
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const request = params.get("request");
    const topic = params.get("topic");

    if (work?.length) {
      setSelectedIds((current) => Array.from(new Set([...current, ...work])));
    }

    if (request === "briefing") {
      setSelectedIds((current) =>
        Array.from(new Set([...current, "ai-strategy-governance", "workflow-managed-operations"])),
      );
      setGoalText(
        topic
          ? `I want to request a Farcelis briefing or session about ${topic}.`
          : "I want to request or host a Farcelis briefing.",
      );
      setContextText("This came from the Webinars & Briefings resource path.");
    }

    if (request === "use-case") {
      setGoalText("I want to talk through a specific use case and understand which service path fits.");
      setContextText("This came from the Insights & Playbooks resource path.");
    }

    if (request === "tool-assessment") {
      setGoalText(
        topic
          ? `I want to understand whether ${topic} fits what I am trying to do.`
          : "I want help choosing the right Farcelis tool or assessment for my Build, Grow, or Operate need.",
      );
      setContextText("This came from the Tools & Assessments resource path.");
    }
  }, []);

  const selectedItems = useMemo(
    () => workInterests.filter((item) => selectedIds.includes(item.id)),
    [selectedIds],
  );

  const toggleInterest = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const resizeTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
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
    <div className="grid gap-2">
      <section className="rounded-[18px] border border-cyan-100/12 bg-[#1c3c4d] px-3 py-2.5 text-white lg:px-4">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="eyebrow text-[color:var(--color-accent)]">Select Work Areas</p>
          <p className="text-xs leading-5 text-slate-300">
            Choose one or more areas you want Farcelis to help with. These selections are added to the intake message.
          </p>
        </div>
        <div className="mt-2 grid gap-1.5 sm:grid-cols-2 xl:grid-cols-4">
          {workInterests.map((item) => {
            const selected = selectedIds.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleInterest(item.id)}
                aria-pressed={selected}
                className={`min-h-[54px] rounded-[12px] border px-2.5 py-1.5 text-center transition ${
                  selected
                    ? "border-[color:var(--color-accent)] bg-[rgba(242,139,91,0.16)] shadow-[0_12px_30px_rgba(255,124,82,0.12)]"
                    : "border-cyan-100/10 bg-[#173343] hover:border-cyan-100/24 hover:bg-[#214557]"
                }`}
              >
                <span className="block text-[0.74rem] font-semibold leading-4 text-white">{item.label}</span>
                <span className="mx-auto mt-0.5 block max-w-[15rem] text-[0.66rem] leading-3 text-slate-300">
                  {item.description}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <form id="strategy-form" onSubmit={handleSubmit} className="surface-dark grid gap-2 rounded-[18px] p-3">
        <p className="eyebrow text-[color:var(--color-accent)]">Inquiry Details</p>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          <input
            name="name"
            required
            placeholder="Name"
            className="rounded-[13px] border border-white/10 bg-white/6 px-3.5 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="rounded-[13px] border border-white/10 bg-white/6 px-3.5 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
          <input
            name="company"
            placeholder="Company or organization"
            className="rounded-[13px] border border-white/10 bg-white/6 px-3.5 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40 sm:col-span-2 xl:col-span-1"
          />
        </div>
        {selectedItems.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 rounded-[13px] border border-cyan-100/10 bg-white/[0.035] px-2.5 py-1.5">
            {selectedItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleInterest(item.id)}
                className="rounded-full border border-[color:var(--color-accent)]/40 bg-[rgba(242,139,91,0.14)] px-2.5 py-1 text-[0.68rem] font-semibold text-white transition hover:bg-[rgba(242,139,91,0.22)]"
              >
                {item.label} ×
              </button>
            ))}
          </div>
        ) : null}
        <div className="grid gap-2 xl:grid-cols-2">
          <textarea
            name="goal"
            required
            rows={2}
            value={goalText}
            onChange={(event) => setGoalText(event.target.value)}
            onInput={resizeTextarea}
            placeholder="What are you trying to build, grow, or stabilize?"
            className="max-h-40 min-h-16 resize-none overflow-y-auto rounded-[14px] border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm leading-5 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
          <textarea
            name="context"
            rows={2}
            value={contextText}
            onChange={(event) => setContextText(event.target.value)}
            onInput={resizeTextarea}
            placeholder="What already exists, and what is missing, messy, stuck, or hard to manage?"
            className="max-h-40 min-h-16 resize-none overflow-y-auto rounded-[14px] border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm leading-5 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
        </div>
        <button
          type="submit"
          className="min-h-10 rounded-full bg-[color:var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
