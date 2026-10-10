"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { timeLeakReviewPaymentUrl } from "@/lib/time-leak-offer";
import { openTimeLeakCheckout, trackTimeLeakEvent } from "@/lib/time-leak-analytics";

const workflowOptions = [
  "Quotes and new inquiries",
  "Customer updates",
  "Internal requests and approvals",
];

const likelyBuilds: Record<string, string> = {
  "Quotes and new inquiries": "An inquiry-to-quote path with ownership, missing-detail checks, and follow-up visibility.",
  "Customer updates": "A customer-status view with a named owner, current milestone, and update trigger.",
  "Internal requests and approvals": "A request-and-approval path with required inputs, decision ownership, and escalation rules.",
};

type SendState = "idle" | "sending" | "sent" | "error";

export function TimeLeakReview() {
  const [workflow, setWorkflow] = useState(workflowOptions[0]);
  const [summary, setSummary] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const raw = window.sessionStorage.getItem("farcelis_time_leak_inquiry");
      if (!raw) return;
      window.sessionStorage.removeItem("farcelis_time_leak_inquiry");
      try {
        const draft = JSON.parse(raw) as { workflow?: unknown; summary?: unknown };
        if (typeof draft.workflow === "string" && workflowOptions.includes(draft.workflow)) setWorkflow(draft.workflow);
        if (typeof draft.summary === "string") setSummary(draft.summary.slice(0, 2400));
      } catch {
        // A damaged browser draft does not prevent a new request.
      }
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          goal: `I would like the $395 Workflow Handoff Review for ${workflow}.`,
          context: summary.trim(),
          selectedWork: [`Workflow: ${workflow}`, "Resource: 15-Minute Time Leak Test"],
          timeLeakReview: true,
        }),
      });
      if (!response.ok) throw new Error("Your request could not be sent. Please try again.");
      setSendState("sent");
      trackTimeLeakEvent("time_leak_review_requested", workflow);
    } catch {
      setSendState("error");
      return;
    }
    openTimeLeakCheckout(workflow, timeLeakReviewPaymentUrl);
  };

  return (
    <>
      <section className="section-shell section-shell-dark !pb-5 !pt-6 lg:!pb-6 lg:!pt-8">
        <div className="section-inner">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Your Next Step</p>
            <h1 className="mt-2 max-w-[760px] text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white">Fix the handoff.</h1>
            <p className="mt-2 max-w-[720px] text-sm leading-6 text-slate-300 sm:text-base">The free test shows where time is being spent. In the Workflow Handoff Review, we trace one process with you and define a practical fix.</p>
            <p className="mt-3 text-sm font-semibold text-white">Workflow Handoff Review · $395 one-time</p>
            <Link href="/time-leak-test" className="mt-2 inline-flex min-h-8 items-center text-sm font-semibold text-[#8ed8e8] underline underline-offset-4 hover:text-white">Take the free test first</Link>
          </div>
        </div>
      </section>

      <section className="time-leak-review-workspace section-shell section-shell-dark !pb-[clamp(2rem,4vw,3.5rem)] !pt-3">
        <div className="section-inner grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <div className="rounded-[20px] border border-cyan-100/12 bg-[#102b3a] p-5 shadow-[0_18px_38px_rgba(2,10,18,0.15)] sm:p-6">
            <p className="eyebrow text-[color:var(--color-accent)]">Send Your Results</p>
            <h2 className="mt-3 text-[clamp(1.6rem,2.5vw,2.2rem)] font-semibold leading-tight tracking-[-0.04em] text-slate-950">Tell us which handoff to review.</h2>
            {sendState === "sent" ? (
              <div role="status" className="mt-6 rounded-[18px] border border-[#3c9b97]/50 bg-[#123e43] p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-950">Your results are with Farcelis.</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">Your request has been emailed to you and Nathan. Complete the secure $395 payment using the same email address. After payment, Farcelis will contact you to schedule the review. Stripe will show any applicable tax before you pay.</p>
                <a href={timeLeakReviewPaymentUrl} className="site-cta mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:shadow-[0_16px_30px_rgba(240,92,255,0.22)]">Continue to secure checkout</a>
                <p className="mt-3 text-xs leading-5 text-slate-600">You can also use the payment link in your confirmation email.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="review-name" className="block text-sm font-semibold text-slate-900">Name</label><input id="review-name" name="name" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 min-h-12 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-950 outline-none focus:ring-2 focus:ring-[#f28b5b]/30" /></div>
                  <div><label htmlFor="review-email" className="block text-sm font-semibold text-slate-900">Email</label><input id="review-email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 min-h-12 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-950 outline-none focus:ring-2 focus:ring-[#f28b5b]/30" /></div>
                </div>
                <div><label htmlFor="review-company" className="block text-sm font-semibold text-slate-900">Company <span className="font-normal text-slate-500">(optional)</span></label><input id="review-company" name="company" autoComplete="organization" value={company} onChange={(event) => setCompany(event.target.value)} className="mt-2 min-h-12 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-950 outline-none focus:ring-2 focus:ring-[#f28b5b]/30" /></div>
                <div><label htmlFor="review-workflow" className="block text-sm font-semibold text-slate-900">Workflow to review</label><select id="review-workflow" name="workflow" value={workflow} onChange={(event) => setWorkflow(event.target.value)} className="mt-2 min-h-12 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-950 outline-none focus:ring-2 focus:ring-[#f28b5b]/30">{workflowOptions.map((option) => <option key={option}>{option}</option>)}</select><p className="mt-2 text-sm leading-6 text-slate-600">Likely build to assess: {likelyBuilds[workflow]}</p></div>
                <div><label htmlFor="review-summary" className="block text-sm font-semibold text-slate-900">Time leak summary or process notes</label><textarea id="review-summary" name="summary" rows={7} required maxLength={2400} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Paste your test result, or describe the requests, handoffs, and repeat work you want reviewed." className="mt-2 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-3 text-base leading-6 text-slate-950 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#f28b5b]/30" /></div>
                <p className="text-xs leading-5 text-slate-500">Sending this request does not charge you. Secure Stripe checkout opens after your results are sent. Farcelis will contact you to schedule after payment.</p>
                {sendState === "error" ? <p role="alert" className="rounded-[12px] border border-red-300 bg-red-50 p-3 text-sm text-red-800">Your request could not be sent. Please try again or email info@farcelis.io.</p> : null}
                <button type="submit" disabled={sendState === "sending"} className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-7 py-3 text-sm font-semibold text-white transition disabled:opacity-60 hover:shadow-[0_16px_30px_rgba(240,92,255,0.22)]">{sendState === "sending" ? "Sending results…" : "Send results and open checkout"}</button>
              </form>
            )}
          </div>
          <aside className="rounded-[20px] border border-cyan-100/12 bg-[#102b3a] p-5 shadow-[0_18px_38px_rgba(2,10,18,0.12)]">
            <p className="eyebrow text-[color:var(--color-accent)]">What You Get</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>One 60-minute working session on a single workflow</li>
              <li>A map of the current handoff and where it stalls</li>
              <li>A prioritized fix list and scoped implementation quote</li>
            </ul>
            <p className="mt-5 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">The fee covers diagnosis and scope. If you want Farcelis to make the fix, implementation and any ongoing support are scoped and priced separately. The free test is an estimate; the review checks the process with you.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
