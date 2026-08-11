"use client";

import { FormEvent, useState } from "react";

type CapabilityInquiryFormProps = {
  label: string;
  prompts: string[];
};

export function CapabilityInquiryForm({ label, prompts }: CapabilityInquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const goal = String(form.get("goal") ?? "");
    const context = String(form.get("context") ?? "");

    setStatus("sending");

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
          selectedWork: [label],
        }),
      });

      if (!response.ok) {
        throw new Error("Inquiry failed");
      }

      formElement.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
        disabled={status === "sending"}
        className="min-h-12 rounded-full bg-[color:var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
      >
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "sent" ? (
        <div className="rounded-[18px] border border-[color:var(--color-accent)]/20 bg-[rgba(242,139,91,0.11)] px-4 py-3 text-sm leading-6 text-slate-100">
          Your inquiry was sent to Farcelis.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-[18px] border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-100">
          The inquiry could not be sent. Please try again.
        </div>
      ) : null}
    </form>
  );
}
