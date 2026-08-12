"use client";

import { FormEvent, useState } from "react";

import { site } from "@/lib/site-data";

const fields = [
  { label: "Name", name: "name", type: "text", autoComplete: "name" },
  { label: "Work email", name: "email", type: "email", autoComplete: "email" },
  { label: "Company", name: "company", type: "text", autoComplete: "organization" },
  { label: "Resource requested", name: "resource", type: "text", autoComplete: "off" },
];

export function ResourceAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const resource = String(form.get("resource") ?? "");
    const improvement = String(form.get("improvement") ?? "");
    const subject = `Farcelis resource access request: ${resource || "Executive resource"}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `Resource requested: ${resource}`,
      "",
      "What they are trying to improve:",
      improvement,
    ].join("\n");

    window.location.href = `mailto:${site.contact.founderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="surface-dark grid gap-4 rounded-[28px] p-6">
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-200">
          {field.label}
          <input
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            className="min-h-12 rounded-[14px] border border-cyan-100/14 bg-white/[0.045] px-4 text-base font-normal text-white outline-none transition focus:border-cyan-100/34"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        What are you trying to improve?
        <textarea
          name="improvement"
          required
          className="min-h-28 rounded-[14px] border border-cyan-100/14 bg-white/[0.045] px-4 py-3 text-base font-normal text-white outline-none transition focus:border-cyan-100/34"
        />
      </label>
      <button
        type="submit"
        className="site-cta mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-sm font-semibold text-white"
      >
        Prepare Access Request
      </button>
      {submitted ? (
        <div className="rounded-[18px] border border-[color:var(--color-accent)]/20 bg-[rgba(242,139,91,0.11)] px-4 py-3 text-sm leading-6 text-slate-100">
          Your email client is opening with the access request prepared for Farcelis.
        </div>
      ) : null}
    </form>
  );
}
