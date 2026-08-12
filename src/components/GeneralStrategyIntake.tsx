"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

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
  { id: "deployment-operations", label: "Deployment Operations", description: "Keep hosted websites, apps, releases, checks, and support stable.", emailLabel: "Deployment Operations - ongoing continuity" },
];

type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

const normalizeInitialWork = (initialWork: string[]) => {
  const allowedIds = new Set(workInterests.map((item) => item.id));
  return initialWork.filter((id) => allowedIds.has(id));
};

export function GeneralStrategyIntake({ initialWork = [] }: { initialWork?: string[] }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => normalizeInitialWork(initialWork));
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

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

  const dismissSuccess = useCallback(() => {
    setSubmitState((current) => (current.status === "success" ? { status: "idle" } : current));
  }, []);

  useEffect(() => {
    if (submitState.status !== "success") {
      return;
    }

    const timeout = window.setTimeout(dismissSuccess, 60000);
    const events: Array<keyof WindowEventMap> = ["pointermove", "pointerdown", "wheel", "keydown", "scroll"];

    events.forEach((eventName) => {
      window.addEventListener(eventName, dismissSuccess, { once: true, passive: true });
    });

    return () => {
      window.clearTimeout(timeout);
      events.forEach((eventName) => {
        window.removeEventListener(eventName, dismissSuccess);
      });
    };
  }, [dismissSuccess, submitState.status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const goal = String(form.get("goal") ?? "");
    const context = String(form.get("context") ?? "");
    const selectedWork = selectedItems.map((item) => item.emailLabel ?? item.label);

    setSubmitState({ status: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          goal,
          context,
          selectedWork,
        }),
      });

      if (!response.ok) {
        throw new Error("The inquiry could not be sent.");
      }

      formElement.reset();
      setSelectedIds([]);
      setSubmitState({ status: "success" });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error instanceof Error ? error.message : "The inquiry could not be sent.",
      });
    }
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

      <form id="contact-form" onSubmit={handleSubmit} className="surface-dark grid gap-2 rounded-[18px] p-3 scroll-mt-28">
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
            rows={2}
            onInput={resizeTextarea}
            placeholder="What are you trying to build, grow, or stabilize?"
            className="max-h-40 min-h-16 resize-none overflow-y-auto rounded-[14px] border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm leading-5 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
          <textarea
            name="context"
            rows={2}
            onInput={resizeTextarea}
            placeholder="What already exists, and what is missing, messy, stuck, or hard to manage?"
            className="max-h-40 min-h-16 resize-none overflow-y-auto rounded-[14px] border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm leading-5 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
          />
        </div>
        <button
          type="submit"
          disabled={submitState.status === "sending"}
          className="min-h-10 rounded-full bg-[color:var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
        >
          {submitState.status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
        {submitState.status === "error" ? (
          <div className="rounded-[16px] border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-100">
            {submitState.message}
          </div>
        ) : null}
      </form>

      {submitState.status === "success" ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#06141d]/72 px-5 backdrop-blur-md transition-opacity"
        >
          <div className="surface-dark max-w-[520px] rounded-[24px] border border-[color:var(--color-accent)]/24 px-6 py-6 text-center text-white shadow-[0_30px_90px_rgba(3,8,16,0.5)]">
            <p className="eyebrow text-[color:var(--color-accent)]">Inquiry Sent</p>
            <h2
              id="contact-success-title"
              className="mt-3 text-[clamp(1.45rem,2vw,1.9rem)] font-semibold leading-tight tracking-[-0.035em]"
            >
              Thanks for reaching out to Farcelis.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Your inquiry has been received. Nathan will review it directly, and you will receive a confirmation email with the details you submitted.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
