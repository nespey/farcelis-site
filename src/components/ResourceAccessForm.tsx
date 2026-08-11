"use client";

import { FormEvent, useState } from "react";

const fields = [
  { label: "Name", name: "name", type: "text", autoComplete: "name" },
  { label: "Work email", name: "email", type: "email", autoComplete: "email" },
  { label: "Company", name: "company", type: "text", autoComplete: "organization" },
  { label: "Resource requested", name: "resource", type: "text", autoComplete: "off" },
];

export function ResourceAccessForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const resource = String(form.get("resource") ?? "");
    const improvement = String(form.get("improvement") ?? "");

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          goal: resource ? `Resource requested: ${resource}` : "",
          context: improvement,
          selectedWork: ["Resource request"],
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
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-200">
          {field.label}
          <input
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required={field.name === "name" || field.name === "email"}
            className="min-h-12 rounded-[14px] border border-cyan-100/14 bg-white/[0.045] px-4 text-base font-normal text-white outline-none transition focus:border-cyan-100/34"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        What are you trying to improve?
        <textarea
          name="improvement"
          className="min-h-28 rounded-[14px] border border-cyan-100/14 bg-white/[0.045] px-4 py-3 text-base font-normal text-white outline-none transition focus:border-cyan-100/34"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="site-cta mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-sm font-semibold text-white"
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
