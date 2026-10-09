"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Workflow = "quote" | "update" | "intake";
type FieldKey = "weekly" | "chased" | "chaseMinutes" | "reentered" | "reentryMinutes";

const workflows: Record<Workflow, { label: string; example: string; firstMove: string; build: string; service: string }> = {
  quote: {
    label: "Quotes and new inquiries",
    example: "A request arrives, the team collects details, prepares a quote, and follows up.",
    firstMove: "Give every inquiry one intake record, an owner, and a visible next action before building automation.",
    build: "An inquiry-to-quote path with ownership, missing-detail checks, and follow-up visibility.",
    service: "crm-revenue-operations",
  },
  update: {
    label: "Customer updates",
    example: "A customer asks for status and the team searches messages or tools to assemble an answer.",
    firstMove: "Put status, owner, and the next milestone in one place the team can trust.",
    build: "A customer-status view with a named owner, current milestone, and update trigger.",
    service: "workflow-managed-operations",
  },
  intake: {
    label: "Internal requests and approvals",
    example: "Work is requested, routed, approved, or chased across people and systems.",
    firstMove: "Define the request fields, decision owner, and handoff rule before adding another tool.",
    build: "A request-and-approval path with required inputs, decision ownership, and escalation rules.",
    service: "workflow-managed-operations",
  },
};

const initialValues: Record<FieldKey, string> = {
  weekly: "", chased: "", chaseMinutes: "", reentered: "", reentryMinutes: "",
};

function readNumber(raw: string, max: number) {
  if (raw.trim() === "") return null;
  const value = Number(raw);
  return Number.isInteger(value) && value >= 0 && value <= max ? value : null;
}

function hours(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: value > 0 && value < 1 ? 1 : 0,
    maximumFractionDigits: 1,
  });
}

function NumberField({
  id, label, value, onChange, min, max, placeholder,
}: {
  id: FieldKey; label: string; value: string; onChange: (value: string) => void;
  min: number; max: number; placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold leading-5 text-slate-900">{label}</label>
      <input
        id={id} name={id} type="number" inputMode="numeric" min={min} max={max} step="1" required
        value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder}
        className="mt-2 min-h-12 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-950 outline-none placeholder:text-slate-400 focus:border-[#9f412c] focus:ring-2 focus:ring-[#f28b5b]/25"
      />
    </div>
  );
}

export function TimeLeakTest() {
  const [workflow, setWorkflow] = useState<Workflow>("quote");
  const [values, setValues] = useState(initialValues);
  const [showResult, setShowResult] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const setField = (key: FieldKey, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setShowResult(false);
    setCopyState("idle");
  };
  const numbers = {
    weekly: readNumber(values.weekly, 10000),
    chased: readNumber(values.chased, 10),
    chaseMinutes: readNumber(values.chaseMinutes, 240),
    reentered: readNumber(values.reentered, 10),
    reentryMinutes: readNumber(values.reentryMinutes, 240),
  };
  const valid = Object.values(numbers).every((value) => value !== null) && (numbers.weekly ?? 0) > 0;
  const chaseHours = valid ? ((numbers.weekly ?? 0) * (numbers.chased ?? 0) * (numbers.chaseMinutes ?? 0)) / 600 : 0;
  const reentryHours = valid ? ((numbers.weekly ?? 0) * (numbers.reentered ?? 0) * (numbers.reentryMinutes ?? 0)) / 600 : 0;
  const totalHours = chaseHours + reentryHours;
  const details = workflows[workflow];
  const primary = chaseHours >= reentryHours ? "follow-up and chasing" : "duplicate entry";
  const summary = [
    "Farcelis Time Leak Test",
    `Workflow: ${details.label}`,
    `Typical weekly requests: ${numbers.weekly}`,
    `Last 10 requiring follow-up: ${numbers.chased}; minutes each: ${numbers.chaseMinutes}`,
    `Last 10 requiring duplicate entry: ${numbers.reentered}; minutes each: ${numbers.reentryMinutes}`,
    `Estimated weekly time: ${hours(totalHours)} hours (${hours(chaseHours)} follow-up + ${hours(reentryHours)} duplicate entry).`,
    `First move: ${details.firstMove}`,
    "This is an estimate based on my sample, not a guaranteed saving.",
  ].join("\n");

  return (
    <>
      <section className="time-leak-intro section-shell section-shell-dark !pb-[clamp(2.25rem,4vw,4rem)] !pt-[clamp(2rem,4vw,4rem)]">
        <div className="section-inner grid gap-7 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.7fr)] lg:items-center">
          <div>
            <p className="eyebrow text-[color:var(--color-accent)]">Free Workflow Diagnostic</p>
            <h1 className="mt-4 max-w-[760px] text-[clamp(2.05rem,3.2vw,3.35rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white [text-wrap:balance]">
              See where the work is taking your time.
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
              Choose one recurring workflow. Use its last 10 requests to estimate the time spent chasing answers and entering information twice.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#assessment" className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]">Start the free test</a>
              <Link href="/services/workflow-operations" className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-center text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/28 hover:bg-cyan-100/8">Explore workflow services</Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">About 15 minutes · No email required · Your entries stay in this browser tab</p>
          </div>
          <figure className="relative overflow-hidden rounded-[20px] border border-cyan-100/12 bg-[#142f3e] shadow-[0_26px_70px_rgba(2,10,18,0.25)]">
            <Image src="/images/resources/adobe-stock/tools-assessments.jpeg" alt="A professional reviewing an audit checklist on a tablet" width={900} height={590} priority sizes="(max-width: 1024px) 100vw, 42vw" className="aspect-[1.55/1] w-full object-cover opacity-90" />
          </figure>
        </div>
      </section>

      <section id="assessment" className="time-leak-workspace section-shell scroll-mt-24 !py-[clamp(2.5rem,5vw,5rem)]" style={{ backgroundColor: "#e9eef3" }}>
        <div className="section-inner">
          <div className="max-w-[850px]">
            <p className="eyebrow text-[#9f412c]">The 15-Minute Time Leak Test</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.65rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-slate-950">Start with one process you can trace.</h2>
            <p className="mt-3 max-w-[720px] text-base leading-7 text-slate-600">You only need an estimate of weekly volume and a quick review of the last 10 requests. Count a request in both categories if it involved both kinds of work.</p>
          </div>
          <div className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start">
            <form
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(15,23,42,0.07)] sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                if (!valid) return;
                setShowResult(true);
                setCopyState("idle");
                requestAnimationFrame(() => document.getElementById("time-leak-result")?.scrollIntoView({ behavior: "smooth", block: "start" }));
              }}
            >
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
                <div>
                  <label htmlFor="workflow" className="block text-sm font-semibold text-slate-900">Which workflow are you reviewing?</label>
                  <select id="workflow" name="workflow" value={workflow} onChange={(event) => { setWorkflow(event.target.value as Workflow); setShowResult(false); setCopyState("idle"); }} className="mt-2 min-h-12 w-full rounded-[12px] border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-950 outline-none focus:border-[#9f412c] focus:ring-2 focus:ring-[#f28b5b]/25">
                    {(Object.keys(workflows) as Workflow[]).map((key) => <option key={key} value={key}>{workflows[key].label}</option>)}
                  </select>
                </div>
                <NumberField id="weekly" label="Requests in a typical week" value={values.weekly} onChange={(value) => setField("weekly", value)} min={1} max={10000} placeholder="e.g. 20" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{details.example}</p>

              <div className="mt-8 grid gap-6 border-t border-slate-200 pt-7 md:grid-cols-2 md:gap-8">
                <fieldset className="min-w-0">
                  <legend className="text-base font-semibold text-slate-950">01 / Follow-up and chasing</legend>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Time spent asking for missing details, checking status, or following up again.</p>
                  <div className="mt-4 grid gap-4">
                    <NumberField id="chased" label="How many of the last 10 needed this?" value={values.chased} onChange={(value) => setField("chased", value)} min={0} max={10} placeholder="0 to 10" />
                    <NumberField id="chaseMinutes" label="Minutes spent on each one" value={values.chaseMinutes} onChange={(value) => setField("chaseMinutes", value)} min={0} max={240} placeholder="e.g. 8" />
                  </div>
                </fieldset>
                <fieldset className="min-w-0 border-t border-slate-200 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <legend className="text-base font-semibold text-slate-950">02 / Duplicate entry</legend>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Time spent copying the same information into another tool, sheet, or message.</p>
                  <div className="mt-4 grid gap-4">
                    <NumberField id="reentered" label="How many of the last 10 needed this?" value={values.reentered} onChange={(value) => setField("reentered", value)} min={0} max={10} placeholder="0 to 10" />
                    <NumberField id="reentryMinutes" label="Minutes spent on each one" value={values.reentryMinutes} onChange={(value) => setField("reentryMinutes", value)} min={0} max={240} placeholder="e.g. 5" />
                  </div>
                </fieldset>
              </div>
              <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[460px] text-xs leading-5 text-slate-500">This estimates time spent on two activities. It does not assume that all of that time can be removed.</p>
                <button type="submit" className="site-cta inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-7 py-3 text-sm font-semibold text-white transition hover:shadow-[0_16px_30px_rgba(240,92,255,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f412c]">See my estimate</button>
              </div>
            </form>
            <aside className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.05)]">
              <p className="eyebrow text-[#9f412c]">How to Count</p>
              <ol className="mt-5 space-y-5 text-sm leading-6 text-slate-600">
                <li><strong className="block text-slate-950">1. Stay specific.</strong> Choose one repeat process, not the whole business.</li>
                <li><strong className="block text-slate-950">2. Check the last 10.</strong> Use email, CRM, tickets, or chat if your memory is uncertain.</li>
                <li><strong className="block text-slate-950">3. Use actual effort.</strong> Enter the minutes people spent, not elapsed time waiting for a reply.</li>
              </ol>
              <div className="mt-6 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">No benchmark and no assumed labor rate. Your entries are calculated in this page and are not submitted to Farcelis.</div>
            </aside>
          </div>
        </div>
      </section>

      {showResult && valid ? (
        <section id="time-leak-result" aria-live="polite" className="section-shell section-shell-dark scroll-mt-20 !py-[clamp(2.5rem,5vw,5rem)]">
          <div className="section-inner">
            <p className="eyebrow text-[color:var(--color-accent)]">Your Workflow Snapshot</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="rounded-[22px] border border-cyan-100/12 bg-[#142f3e] p-6 sm:p-8">
                <h2 className="text-base font-semibold text-slate-200">Estimated time on these activities</h2>
                <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-white"><span className="text-[clamp(3.5rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.06em]">{hours(totalHours)}</span><span className="text-lg font-medium">hours per week</span></p>
                <p className="mt-5 text-sm leading-6 text-slate-300">Based on {numbers.weekly} requests per week and the proportions in your last 10 {details.label.toLowerCase()}.</p>
                <div className="mt-6 grid gap-3 border-t border-white/12 pt-6 sm:grid-cols-2">
                  <div><p className="text-xs uppercase tracking-[0.12em] text-[#61c0d7]">Follow-up</p><p className="mt-2 text-2xl font-semibold text-white">{hours(chaseHours)} <span className="text-sm font-normal text-slate-300">hours</span></p></div>
                  <div><p className="text-xs uppercase tracking-[0.12em] text-[#61c0d7]">Duplicate entry</p><p className="mt-2 text-2xl font-semibold text-white">{hours(reentryHours)} <span className="text-sm font-normal text-slate-300">hours</span></p></div>
                </div>
              </div>
              <div className="rounded-[22px] border border-cyan-100/12 bg-[#102b3a] p-6 sm:p-8">
                <p className="eyebrow text-[#61c0d7]">First Move</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white">{totalHours > 0 ? `Look first at ${primary}.` : "Review the handoff before changing tools."}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-200">{details.firstMove}</p>
                <p className="mt-4 text-xs leading-5 text-slate-400">A sample of 10 may not represent every week. This is time spent, not guaranteed time saved.</p>
                <div className="mt-6 border-t border-white/12 pt-5">
                  <p className="eyebrow text-[color:var(--color-accent)]">If You Want Farcelis to Map the Fix</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Workflow Handoff Review · $395 fixed</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">One working session, one process map, a prioritized fix list, and a scoped quote for the next build. For your answers, the likely build to assess is: {details.build}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{totalHours >= 2 ? "Your estimate makes this worth examining now." : "If this is a small or unusual week, validate it with a longer sample first."} The review fee covers diagnosis and scope; implementation is quoted separately.</p>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={`/contact?work=${details.service}&resource=tools-assessments`} onClick={() => window.sessionStorage.setItem("farcelis_time_leak_inquiry", JSON.stringify({ workflow: details.label, summary }))} className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]">Request the $395 review</Link>
                  <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(summary); setCopyState("copied"); } catch { setCopyState("error"); } }} className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-100/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8">{copyState === "copied" ? "Copied to clipboard" : "Copy summary"}</button>
                  <button type="button" onClick={() => window.print()} className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-100/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8">Print / save PDF</button>
                </div>
                {copyState === "error" ? <p role="status" className="mt-3 text-sm text-[#f28b5b]">Copy failed. Use Print / save PDF to keep your result.</p> : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
