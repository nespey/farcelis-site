"use client";

import { FormEvent } from "react";

import { site } from "@/lib/site-data";

type CapabilityInquiryFormProps = {
  label: string;
  prompts: string[];
};

export function CapabilityInquiryForm({ label, prompts }: CapabilityInquiryFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const goal = String(form.get("goal") ?? "");
    const context = String(form.get("context") ?? "");

    const subject = `Farcelis ${label} inquiry`;
    const body = [
      `Path: ${label}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      "What they want to do:",
      goal,
      "",
      "Useful context:",
      context,
    ].join("\n");

    window.location.href = `mailto:${site.contact.founderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="surface-dark grid gap-4 rounded-[28px] p-6">
      <p className="eyebrow text-[color:var(--color-accent)]">{label} Intake</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Name"
          className="rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
        />
      </div>
      <input
        name="company"
        placeholder="Company or organization"
        className="rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
      />
      <textarea
        name="goal"
        required
        rows={4}
        placeholder={prompts[0]}
        className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
      />
      <textarea
        name="context"
        rows={4}
        placeholder={prompts[1]}
        className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400 focus:border-cyan-100/40"
      />
      <button
        type="submit"
        className="min-h-12 rounded-full bg-[color:var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
      >
        Send {label} Context
      </button>
    </form>
  );
}
