"use client";

import { FormEvent, useState } from "react";

const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Work email", name: "email", type: "email" },
  { label: "Company", name: "company", type: "text" },
  { label: "Resource requested", name: "resource", type: "text" },
];

export function ResourceAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        Request Access
      </button>
      {submitted ? (
        <div className="rounded-[18px] border border-[color:var(--color-accent)]/20 bg-[rgba(242,139,91,0.11)] px-4 py-3 text-sm leading-6 text-slate-100">
          Request captured. The production version can route this into HubSpot, Salesforce, email, or the Farcelis Control Layer.
        </div>
      ) : null}
    </form>
  );
}
