"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Workflow = "quote" | "update" | "intake";

const workflows: Record<Workflow, { label: string; example: string; firstMove: string; service: string }> = {
  quote: {
    label: "Quotes and new inquiries",
    example: "A request arrives, details get collected, a quote is prepared, and someone follows up.",
    firstMove: "Give every inquiry one intake record, an owner, and a visible next action before building automation.",
    service: "crm-revenue-operations",
  },
  update: {
    label: "Customer updates",
    example: "A customer asks for status, and the team searches messages or tools to assemble an answer.",
    firstMove: "Put status, owner, and the next milestone in one place the team can trust.",
    service: "workflow-managed-operations",
  },
  intake: {
    label: "Internal requests and approvals",
    example: "Work is requested, routed, approved, or chased across people and systems.",
    firstMove: "Define the request fields, decision owner, and handoff rule before adding another tool.",
    service: "workflow-managed-operations",
  },
};

const card = "rounded-[24px] border border-cyan-100/15 bg-[#102b3a] shadow-[0_22px_70px_rgba(0,5,12,0.18)]";
const input = "mt-2 w-full rounded-[13px] border border-cyan-100/20 bg-[#071c29] px-4 py-3 text-base text-white outline-none focus:border-[#f28b5b] focus:ring-2 focus:ring-[#f28b5b]/25";

function safeNumber(raw: string, max: number) {
  if (raw.trim() === "") return null;
  const value = Number(raw);
  return Number.isFinite(value) && Number.isInteger(value) && value >= 0 && value <= max ? value : null;
}

export function TimeLeakTest() {
  const [workflow, setWorkflow] = useState<Workflow>("quote");
  const [weekly, setWeekly] = useState("");
  const [chased, setChased] = useState("");
  const [chaseMinutes, setChaseMinutes] = useState("");
  const [reentered, setReentered] = useState("");
  const [reentryMinutes, setReentryMinutes] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const numbers = useMemo(() => ({
    weekly: safeNumber(weekly, 10000),
    chased: safeNumber(chased, 10),
    chaseMinutes: safeNumber(chaseMinutes, 240),
    reentered: safeNumber(reentered, 10),
    reentryMinutes: safeNumber(reentryMinutes, 240),
  }), [weekly, chased, chaseMinutes, reentered, reentryMinutes]);
  const valid = Object.values(numbers).every((value) => value !== null) && (numbers.weekly ?? 0) > 0;
  const chaseHours = valid ? ((numbers.weekly ?? 0) * (numbers.chased ?? 0) * (numbers.chaseMinutes ?? 0)) / 600 : 0;
  const reentryHours = valid ? ((numbers.weekly ?? 0) * (numbers.reentered ?? 0) * (numbers.reentryMinutes ?? 0)) / 600 : 0;
  const totalHours = chaseHours + reentryHours;
  const primary = chaseHours >= reentryHours ? "follow-up and chasing" : "duplicate entry";
  const details = workflows[workflow];
  const format = (value: number) => value.toLocaleString("en-US", { maximumFractionDigits: 1 });
  const summary = `Farcelis Time Leak Test\nWorkflow: ${details.label}\nWeekly requests: ${numbers.weekly}\nLast 10 requiring follow-up/chasing: ${numbers.chased}; minutes each: ${numbers.chaseMinutes}\nLast 10 requiring duplicate entry: ${numbers.reentered}; minutes each: ${numbers.reentryMinutes}\nEstimated weekly time: ${format(totalHours)} hours (${format(chaseHours)} chasing + ${format(reentryHours)} duplicate entry).\nFirst move: ${details.firstMove}\nThis is an estimate based on my sample, not a guaranteed saving.`;

  return (
    <div className="pb-20 text-white">
      <section className="time-leak-intro section-inner pb-9 pt-12 sm:pt-16 lg:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#f28b5b]">Free workflow diagnostic</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.055em]">Find where your time goes.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Pick one repeat process. Look at its last 10 requests. In about 15 minutes, you&apos;ll see how much time your team may be spending on chasing and re-entering information.</p>
        <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-slate-200">
          {["No email required", "Your numbers stay on this page", "A result you can save"].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-2">{item}</span>)}
        </div>
      </section>

      <section className="time-leak-workspace section-inner grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(330px,.9fr)] lg:items-start">
        <form className={`${card} p-5 sm:p-8`} onSubmit={(event) => { event.preventDefault(); if (valid) { setShowResult(true); setCopied(false); requestAnimationFrame(() => document.getElementById("time-leak-result")?.scrollIntoView({ behavior: "smooth", block: "start" })); } }}>
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f28b5b] text-sm font-bold text-[#071c29]">1</span><h2 className="text-xl font-semibold">Choose one workflow</h2></div>
          <p className="mt-2 text-sm leading-6 text-slate-300">Use work that repeats every week. The test works best when you can review the last 10 real requests.</p>
          <div className="mt-5 grid gap-2">
            {(Object.keys(workflows) as Workflow[]).map((key) => <button key={key} type="button" aria-pressed={workflow === key} onClick={() => { setWorkflow(key); setShowResult(false); }} className={`rounded-[16px] border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f28b5b] ${workflow === key ? "border-[#f28b5b] bg-[#f28b5b]/12" : "border-white/15 bg-white/[0.035] hover:border-white/35"}`}><span className="block font-semibold">{workflows[key].label}</span><span className="mt-1 block text-sm leading-5 text-slate-300">{workflows[key].example}</span></button>)}
          </div>

          <div className="mt-9 flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f28b5b] text-sm font-bold text-[#071c29]">2</span><h2 className="text-xl font-semibold">Count what happened</h2></div>
          <p className="mt-2 text-sm leading-6 text-slate-300">Use your best estimate if records are incomplete. Count a request in both groups if it involved both kinds of work.</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold sm:col-span-2">About how many of these requests arrive in a typical week?<input className={input} inputMode="numeric" type="number" min="1" max="10000" step="1" required value={weekly} onChange={(event) => { setWeekly(event.target.value); setShowResult(false); }} placeholder="For example, 20" /></label>
            <label className="block text-sm font-semibold">Of the last 10, how many needed chasing or an extra follow-up?<input className={input} inputMode="numeric" type="number" min="0" max="10" step="1" required value={chased} onChange={(event) => { setChased(event.target.value); setShowResult(false); }} placeholder="0 to 10" /></label>
            <label className="block text-sm font-semibold">For each one, about how many minutes did that take?<input className={input} inputMode="numeric" type="number" min="0" max="240" step="1" required value={chaseMinutes} onChange={(event) => { setChaseMinutes(event.target.value); setShowResult(false); }} placeholder="For example, 8" /></label>
            <label className="block text-sm font-semibold">Of the last 10, how many required copying the same information elsewhere?<input className={input} inputMode="numeric" type="number" min="0" max="10" step="1" required value={reentered} onChange={(event) => { setReentered(event.target.value); setShowResult(false); }} placeholder="0 to 10" /></label>
            <label className="block text-sm font-semibold">For each one, about how many minutes did that take?<input className={input} inputMode="numeric" type="number" min="0" max="240" step="1" required value={reentryMinutes} onChange={(event) => { setReentryMinutes(event.target.value); setShowResult(false); }} placeholder="For example, 5" /></label>
          </div>
          <button type="submit" className="mt-7 w-full rounded-full bg-[#f28b5b] px-6 py-4 text-base font-bold text-[#071c29] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Show my time leak</button>
        </form>

        <aside className={`${card} p-5 sm:p-8 lg:sticky lg:top-28`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#61c0d7]">What this test measures</p>
          <h2 className="mt-3 text-2xl font-semibold">The work around the work.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">The estimate focuses on two visible sources of lost time: tracking down answers and entering information twice. It does not assume every minute can be eliminated.</p>
          <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm leading-6 text-slate-200"><p><strong className="text-white">One process.</strong> Keep the sample specific so the result points to an actual fix.</p><p><strong className="text-white">Your own numbers.</strong> No industry benchmark or made-up savings claim.</p><p><strong className="text-white">A next step.</strong> You&apos;ll get a starting action whether or not you contact Farcelis.</p></div>
          <p className="mt-6 rounded-[14px] border border-[#61c0d7]/25 bg-[#61c0d7]/8 p-4 text-sm leading-6 text-slate-200">If you don&apos;t know the last 10, review a week of email, CRM, tickets, or chat first. A rough answer is useful; a traceable answer is better.</p>
        </aside>
      </section>

      {showResult && valid ? <section id="time-leak-result" aria-live="polite" className="section-inner scroll-mt-28 pt-8"><div className={`${card} overflow-hidden border-[#f28b5b]/40`}><div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_1.15fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f28b5b]">Your estimate</p><p className="mt-4 text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-none tracking-[-0.06em]">{format(totalHours)}<span className="ml-2 text-xl tracking-normal text-slate-300">hours / week</span></p><p className="mt-5 text-sm leading-6 text-slate-300">Based on {numbers.weekly} requests per week and the proportions you observed in your last 10. This is time spent on these activities, not a promise that all of it can be recovered.</p></div><div className="grid gap-3"><div className="rounded-[16px] bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.16em] text-slate-400">Chasing and follow-up</p><p className="mt-2 text-2xl font-semibold">{format(chaseHours)} hours / week</p></div><div className="rounded-[16px] bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.16em] text-slate-400">Duplicate entry</p><p className="mt-2 text-2xl font-semibold">{format(reentryHours)} hours / week</p></div></div></div><div className="border-t border-white/10 bg-[#0b2431] p-5 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#61c0d7]">Where to start</p><h2 className="mt-3 text-2xl font-semibold">Look first at {totalHours > 0 ? primary : "the handoff"}.</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{details.firstMove}</p><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">Check this against the actual requests before assigning a dollar value or buying software. A short sample can be unrepresentative, and some follow-up is necessary work.</p><div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={async () => { try { await navigator.clipboard.writeText(summary); setCopied(true); } catch { setCopied(false); } }} className="min-h-12 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:bg-white/10">{copied ? "Summary copied" : "Copy my summary"}</button><button type="button" onClick={() => window.print()} className="min-h-12 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:bg-white/10">Print or save as PDF</button><Link href={`/contact?work=${details.service}&resource=tools-assessments`} className="inline-flex min-h-12 items-center rounded-full bg-[#f28b5b] px-6 py-2 text-sm font-bold text-[#071c29] transition hover:brightness-110">Discuss this workflow with Farcelis</Link></div><p className="mt-3 text-xs leading-5 text-slate-400">You can paste the copied summary into the contact form. Farcelis will review the workflow with you before recommending a build.</p></div></div></section> : null}
    </div>
  );
}
