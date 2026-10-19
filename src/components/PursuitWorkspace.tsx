"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "@/app/pursuit-desk/workspace.module.css";

type Decision = "Pending" | "Bid" | "No bid";
type Requirement = { id: string; text: string; source: string; owner: string; status: "Open" | "Verified" };
type Amendment = { id: string; number: string; summary: string; impact: string; reviewed: boolean };
type Pursuit = {
  id: string;
  title: string;
  agency: string;
  client: string;
  dueDate: string;
  decision: Decision;
  decisionReason: string;
  fitScore: number;
  owner: string;
  requirements: Requirement[];
  amendments: Amendment[];
};
type Workspace = { pursuits: Pursuit[]; activeId: string };
type Tab = "overview" | "scorecard" | "requirements" | "schedule" | "amendments" | "brief" | "templates";

const storageKey = "farcelis-pursuit-desk-demo-v1";
const tabs: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "scorecard", label: "Bid decision" },
  { id: "requirements", label: "Requirements" },
  { id: "schedule", label: "Schedule" },
  { id: "amendments", label: "Amendments" },
  { id: "brief", label: "Weekly brief" },
  { id: "templates", label: "Templates" },
];

function dateOffset(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function seedWorkspace(): Workspace {
  return {
    activeId: "sample-1",
    pursuits: [{
      id: "sample-1",
      title: "Facilities Support Services",
      agency: "Sample Federal Agency",
      client: "Example contractor",
      dueDate: dateOffset(21),
      decision: "Bid",
      decisionReason: "Relevant past performance and available delivery team. Pricing review still required.",
      fitScore: 78,
      owner: "Katalin",
      requirements: [
        { id: "req-1", text: "Submit a technical approach describing staffing and transition.", source: "Sample Section L.1", owner: "Technical lead", status: "Open" },
        { id: "req-2", text: "Provide three relevant past performance examples.", source: "Sample Section L.2", owner: "Capture lead", status: "Verified" },
        { id: "req-3", text: "Include a quality control plan.", source: "Sample Section L.3", owner: "", status: "Open" },
        { id: "req-4", text: "Confirm all required forms and signatures.", source: "Sample Section L.4", owner: "Proposal lead", status: "Open" },
      ],
      amendments: [{ id: "amd-1", number: "0001", summary: "Illustrative change to submission instructions", impact: "Check forms and final upload checklist", reviewed: false }],
    }],
  };
}

function csvCell(value: string | number | boolean) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function download(filename: string, content: string, type = "text/csv;charset=utf-8") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function makeCsv(headers: string[], rows: (string | number | boolean)[][]) {
  return [headers.map(csvCell).join(","), ...rows.map((row) => row.map(csvCell).join(","))].join("\r\n");
}

function daysUntil(date: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((new Date(`${date}T00:00:00`).getTime() - today.getTime()) / 86400000);
}

function scheduleFor(pursuit: Pursuit) {
  const due = new Date(`${pursuit.dueDate}T00:00:00`);
  return [
    { stage: "Bid decision", offset: -18, owner: "Client sponsor" },
    { stage: "Requirement and amendment review", offset: -14, owner: "Pursuit desk" },
    { stage: "Contributor inputs due", offset: -10, owner: "Section owners" },
    { stage: "Internal draft review", offset: -7, owner: "Proposal lead" },
    { stage: "Final compliance pass", offset: -3, owner: "Qualified reviewer" },
    { stage: "Client approval and upload", offset: -1, owner: "Client sponsor" },
    { stage: "Solicitation deadline", offset: 0, owner: "Client sponsor" },
  ].map((item) => {
    const date = new Date(due);
    date.setDate(date.getDate() + item.offset);
    return { ...item, date: date.toISOString().slice(0, 10) };
  });
}

export function PursuitWorkspace() {
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [newPursuit, setNewPursuit] = useState({ title: "", agency: "", dueDate: "" });
  const [newRequirement, setNewRequirement] = useState({ text: "", source: "", owner: "" });
  const [newAmendment, setNewAmendment] = useState({ number: "", summary: "", impact: "" });

  useEffect(() => {
    const handle = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem(storageKey);
        const parsed = stored ? JSON.parse(stored) as Workspace : null;
        setWorkspace(parsed?.pursuits?.length ? parsed : seedWorkspace());
      } catch { setWorkspace(seedWorkspace()); }
    }, 0);
    return () => window.clearTimeout(handle);
  }, []);

  useEffect(() => {
    if (workspace) localStorage.setItem(storageKey, JSON.stringify(workspace));
  }, [workspace]);

  const pursuit = workspace?.pursuits.find((item) => item.id === workspace.activeId) ?? null;
  const openRequirements = pursuit?.requirements.filter((item) => item.status === "Open") ?? [];
  const unassigned = openRequirements.filter((item) => !item.owner.trim());
  const unreviewed = pursuit?.amendments.filter((item) => !item.reviewed) ?? [];
  const dueDays = pursuit ? daysUntil(pursuit.dueDate) : 0;
  const alerts = useMemo(() => {
    if (!pursuit) return [];
    const next: string[] = [];
    if (pursuit.decision === "Pending") next.push("A bid decision has not been recorded.");
    if (unassigned.length) next.push(`${unassigned.length} open requirement${unassigned.length === 1 ? "" : "s"} without an owner.`);
    if (unreviewed.length) next.push(`${unreviewed.length} amendment${unreviewed.length === 1 ? "" : "s"} awaiting impact review.`);
    if (dueDays <= 7 && openRequirements.length) next.push(`${openRequirements.length} requirement${openRequirements.length === 1 ? "" : "s"} still open within seven days of deadline.`);
    if (dueDays < 0) next.push("The recorded deadline has passed.");
    return next;
  }, [pursuit, unassigned.length, unreviewed.length, dueDays, openRequirements.length]);

  function updatePursuit(change: Partial<Pursuit>) {
    setWorkspace((current) => current && ({ ...current, pursuits: current.pursuits.map((item) => item.id === current.activeId ? { ...item, ...change } : item) }));
  }

  function addPursuit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newPursuit.title.trim() || !newPursuit.dueDate) return;
    const id = crypto.randomUUID();
    const next: Pursuit = { id, title: newPursuit.title.trim(), agency: newPursuit.agency.trim(), client: "Demo client", dueDate: newPursuit.dueDate, decision: "Pending", decisionReason: "", fitScore: 50, owner: "Katalin", requirements: [], amendments: [] };
    setWorkspace((current) => current && ({ pursuits: [...current.pursuits, next], activeId: id }));
    setNewPursuit({ title: "", agency: "", dueDate: "" });
    setTab("scorecard");
  }

  function addRequirement(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pursuit || !newRequirement.text.trim()) return;
    updatePursuit({ requirements: [...pursuit.requirements, { id: crypto.randomUUID(), text: newRequirement.text.trim(), source: newRequirement.source.trim(), owner: newRequirement.owner.trim(), status: "Open" }] });
    setNewRequirement({ text: "", source: "", owner: "" });
  }

  function addAmendment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pursuit || !newAmendment.number.trim()) return;
    updatePursuit({ amendments: [...pursuit.amendments, { id: crypto.randomUUID(), number: newAmendment.number.trim(), summary: newAmendment.summary.trim(), impact: newAmendment.impact.trim(), reviewed: false }] });
    setNewAmendment({ number: "", summary: "", impact: "" });
  }

  function exportTemplate(kind: number) {
    if (!pursuit) return;
    const schedule = scheduleFor(pursuit);
    const templates = [
      { name: "opportunity-scorecard", headers: ["Pursuit", "Agency", "Deadline", "Fit score", "Desk owner"], rows: [[pursuit.title, pursuit.agency, pursuit.dueDate, pursuit.fitScore, pursuit.owner]] },
      { name: "bid-decision", headers: ["Pursuit", "Decision", "Rationale", "Decision owner", "Date recorded"], rows: [[pursuit.title, pursuit.decision, pursuit.decisionReason, pursuit.owner, new Date().toISOString().slice(0, 10)]] },
      { name: "requirement-matrix", headers: ["ID", "Requirement", "Source", "Owner", "Status"], rows: pursuit.requirements.map((item) => [item.id, item.text, item.source, item.owner, item.status]) },
      { name: "pursuit-schedule", headers: ["Stage", "Target date", "Owner"], rows: schedule.map((item) => [item.stage, item.date, item.owner]) },
      { name: "amendment-log", headers: ["Number", "Summary", "Impact", "Reviewed"], rows: pursuit.amendments.map((item) => [item.number, item.summary, item.impact, item.reviewed ? "Yes" : "No"]) },
      { name: "weekly-executive-view", headers: ["Pursuit", "Decision", "Deadline", "Days left", "Open requirements", "Unassigned requirements", "Unreviewed amendments", "Risk flags"], rows: [[pursuit.title, pursuit.decision, pursuit.dueDate, dueDays, openRequirements.length, unassigned.length, unreviewed.length, alerts.join(" | ")]] },
    ];
    const selected = templates[kind];
    download(`${selected.name}.csv`, makeCsv(selected.headers, selected.rows));
  }

  function exportBrief() {
    if (!pursuit) return;
    const body = [
      "FARCELIS PURSUIT DESK — WEEKLY BRIEF", "DEMONSTRATION DATA ONLY", "",
      `Pursuit: ${pursuit.title}`, `Agency: ${pursuit.agency}`, `Deadline: ${pursuit.dueDate} (${dueDays} days remaining)`,
      `Decision: ${pursuit.decision}`, `Decision rationale: ${pursuit.decisionReason || "Not recorded"}`, "",
      `Requirements: ${pursuit.requirements.length} total; ${openRequirements.length} open; ${unassigned.length} unassigned`,
      `Amendments awaiting review: ${unreviewed.length}`, "", "ATTENTION NEEDED",
      ...(alerts.length ? alerts.map((item) => `- ${item}`) : ["- No rule-based flags in the current sample."]),
      "", "NEXT ACTION", "Confirm owners, amendment impact, and client review gates. The client approves final content and submission.",
    ].join("\n");
    download("farcelis-weekly-brief.txt", body, "text/plain;charset=utf-8");
  }

  if (!workspace || !pursuit) return <div className={styles.loading}>Loading Pursuit Desk demo…</div>;

  return (
    <div className={styles.shell}>
      <div className={styles.wrap}>
        <div className={styles.topline}><Link href="/pursuit-desk">← Pursuit Desk</Link><span>PRIVATE PREVIEW · SAMPLE DATA</span></div>
        <div className={styles.heading}>
          <div><p className={styles.eyebrow}>Farcelis Pursuit Desk</p><h1>Control room</h1><p>See the bid decision, owners, requirements, amendments, and next actions in one place.</p></div>
          <button className={styles.reset} onClick={() => { if (window.confirm("Reset the demo to its original sample data?")) { setWorkspace(seedWorkspace()); setTab("overview"); } }}>Reset demo</button>
        </div>
        <div className={styles.disclosure}>This is an interactive demonstration. Data stays in this browser; there is no shared account, server storage, document upload, or live AI review. Do not enter real client or sensitive bid data.</div>

        <div className={styles.projectPicker}>
          <label htmlFor="active-pursuit">Active pursuit</label>
          <select id="active-pursuit" value={workspace.activeId} onChange={(event) => setWorkspace({ ...workspace, activeId: event.target.value })}>
            {workspace.pursuits.map((item) => <option value={item.id} key={item.id}>{item.title}</option>)}
          </select>
          <span>{pursuit.agency || "Agency not entered"}</span>
        </div>

        <nav className={styles.tabs} aria-label="Pursuit sections">{tabs.map((item) => <button key={item.id} className={tab === item.id ? styles.selectedTab : ""} aria-current={tab === item.id ? "page" : undefined} onClick={() => setTab(item.id)}>{item.label}</button>)}</nav>

        {tab === "overview" && <div className={styles.content}>
          <div className={styles.metrics}>
            <div><span>Bid decision</span><strong>{pursuit.decision}</strong></div>
            <div><span>Days to deadline</span><strong>{dueDays}</strong></div>
            <div><span>Open requirements</span><strong>{openRequirements.length}</strong></div>
            <div><span>Unreviewed amendments</span><strong>{unreviewed.length}</strong></div>
          </div>
          <div className={styles.columns}>
            <section className={styles.card}><p className={styles.cardKicker}>Attention queue</p><h2>What needs action</h2>{alerts.length ? <ul className={styles.alerts}>{alerts.map((item) => <li key={item}>{item}</li>)}</ul> : <p className={styles.empty}>No rule-based flags in this pursuit.</p>}</section>
            <section className={styles.card}><p className={styles.cardKicker}>Pursuit details</p><h2>{pursuit.title}</h2><dl className={styles.details}><div><dt>Agency</dt><dd>{pursuit.agency || "Not entered"}</dd></div><div><dt>Desk owner</dt><dd>{pursuit.owner}</dd></div><div><dt>Deadline</dt><dd>{pursuit.dueDate}</dd></div><div><dt>Fit score</dt><dd>{pursuit.fitScore}/100</dd></div></dl></section>
          </div>
          <div className={styles.columns}><section className={styles.card}><p className={styles.cardKicker}>New pursuit</p><h2>Start another bid</h2><form className={styles.form} onSubmit={addPursuit}><input aria-label="Pursuit title" placeholder="Pursuit title" value={newPursuit.title} onChange={(event) => setNewPursuit({ ...newPursuit, title: event.target.value })} required /><input aria-label="Agency" placeholder="Agency" value={newPursuit.agency} onChange={(event) => setNewPursuit({ ...newPursuit, agency: event.target.value })} /><label>Deadline<input type="date" value={newPursuit.dueDate} onChange={(event) => setNewPursuit({ ...newPursuit, dueDate: event.target.value })} required /></label><button type="submit">Create pursuit</button></form></section><section className={styles.card}><p className={styles.cardKicker}>Operating rule</p><h2>Human approval stays visible</h2><p className={styles.bodyCopy}>This desk organizes the work and flags missing inputs. The client owns bid decisions, pricing, representations, signatures, and final submission.</p></section></div>
        </div>}

        {tab === "scorecard" && <div className={styles.content}><section className={styles.card}><p className={styles.cardKicker}>Opportunity scorecard + decision record</p><h2>Why are we pursuing this?</h2><div className={styles.formGrid}><label>Fit score: {pursuit.fitScore}/100<input type="range" min="0" max="100" value={pursuit.fitScore} onChange={(event) => updatePursuit({ fitScore: Number(event.target.value) })} /></label><label>Bid decision<select value={pursuit.decision} onChange={(event) => updatePursuit({ decision: event.target.value as Decision })}><option>Pending</option><option>Bid</option><option>No bid</option></select></label><label>Desk owner<input value={pursuit.owner} onChange={(event) => updatePursuit({ owner: event.target.value })} /></label><label>Deadline<input type="date" value={pursuit.dueDate} onChange={(event) => updatePursuit({ dueDate: event.target.value })} /></label></div><label className={styles.fullLabel}>Decision rationale<textarea value={pursuit.decisionReason} onChange={(event) => updatePursuit({ decisionReason: event.target.value })} placeholder="Capability match, past performance, delivery capacity, partner needs, pricing concerns…" /></label><p className={styles.helper}>Changes save in this browser. The decision record exports from Templates.</p></section></div>}

        {tab === "requirements" && <div className={styles.content}><section className={styles.card}><p className={styles.cardKicker}>Requirement matrix</p><h2>Every obligation gets an owner</h2><div className={styles.list}>{pursuit.requirements.length ? pursuit.requirements.map((item) => <article className={styles.listItem} key={item.id}><div><small>{item.source || "Source not entered"}</small><h3>{item.text}</h3><label className={styles.inlineEdit}>Owner<input aria-label={`Owner for ${item.text}`} value={item.owner} placeholder="Assign owner" onChange={(event) => updatePursuit({ requirements: pursuit.requirements.map((row) => row.id === item.id ? { ...row, owner: event.target.value } : row) })} /></label></div><button className={item.status === "Verified" ? styles.done : styles.open} disabled={!item.owner.trim() && item.status === "Open"} title={!item.owner.trim() ? "Assign an owner first" : undefined} onClick={() => updatePursuit({ requirements: pursuit.requirements.map((row) => row.id === item.id ? { ...row, status: row.status === "Open" ? "Verified" : "Open" } : row) })}>{item.status}</button></article>) : <p className={styles.empty}>No requirements recorded yet.</p>}</div></section><section className={styles.card}><h2>Add a requirement</h2><form className={styles.form} onSubmit={addRequirement}><textarea aria-label="Requirement" placeholder="Exact requirement or concise working summary" value={newRequirement.text} onChange={(event) => setNewRequirement({ ...newRequirement, text: event.target.value })} required /><div className={styles.formGrid}><input aria-label="Source reference" placeholder="Source section" value={newRequirement.source} onChange={(event) => setNewRequirement({ ...newRequirement, source: event.target.value })} /><input aria-label="Owner" placeholder="Owner" value={newRequirement.owner} onChange={(event) => setNewRequirement({ ...newRequirement, owner: event.target.value })} /></div><button type="submit">Add requirement</button></form><p className={styles.helper}>For real bids, verify every entry against the current solicitation and amendments.</p></section></div>}

        {tab === "schedule" && <div className={styles.content}><section className={styles.card}><p className={styles.cardKicker}>Pursuit schedule</p><h2>Review gates before the deadline</h2><div className={styles.list}>{scheduleFor(pursuit).map((item) => <div className={styles.scheduleRow} key={item.stage}><time>{item.date}</time><strong>{item.stage}</strong><span>{item.owner}</span></div>)}</div><p className={styles.helper}>This is a starter schedule calculated from the deadline. A delivery lead should adjust dates to the actual solicitation and client availability.</p></section></div>}

        {tab === "amendments" && <div className={styles.content}><section className={styles.card}><p className={styles.cardKicker}>Amendment log</p><h2>Show what changed</h2><div className={styles.list}>{pursuit.amendments.length ? pursuit.amendments.map((item) => <article className={styles.listItem} key={item.id}><div><small>Amendment {item.number}</small><h3>{item.summary || "Summary pending"}</h3><label className={styles.inlineEdit}>Impact<input aria-label={`Impact for amendment ${item.number}`} value={item.impact} placeholder="Assess impact" onChange={(event) => updatePursuit({ amendments: pursuit.amendments.map((row) => row.id === item.id ? { ...row, impact: event.target.value } : row) })} /></label></div><button className={item.reviewed ? styles.done : styles.open} disabled={!item.impact.trim() && !item.reviewed} title={!item.impact.trim() ? "Assess impact first" : undefined} onClick={() => updatePursuit({ amendments: pursuit.amendments.map((row) => row.id === item.id ? { ...row, reviewed: !row.reviewed } : row) })}>{item.reviewed ? "Reviewed" : "Review needed"}</button></article>) : <p className={styles.empty}>No amendments logged.</p>}</div></section><section className={styles.card}><h2>Log an amendment</h2><form className={styles.form} onSubmit={addAmendment}><div className={styles.formGrid}><input aria-label="Amendment number" placeholder="Number, e.g. 0002" value={newAmendment.number} onChange={(event) => setNewAmendment({ ...newAmendment, number: event.target.value })} required /><input aria-label="Amendment summary" placeholder="What changed" value={newAmendment.summary} onChange={(event) => setNewAmendment({ ...newAmendment, summary: event.target.value })} /></div><textarea aria-label="Amendment impact" placeholder="Impact on requirements, pricing, schedule, or submission" value={newAmendment.impact} onChange={(event) => setNewAmendment({ ...newAmendment, impact: event.target.value })} /><button type="submit">Log amendment</button></form></section></div>}

        {tab === "brief" && <div className={styles.content}><section className={styles.card}><p className={styles.cardKicker}>Weekly executive view</p><h2>{pursuit.title}</h2><div className={styles.briefGrid}><div><span>Decision</span><strong>{pursuit.decision}</strong></div><div><span>Deadline</span><strong>{pursuit.dueDate}</strong></div><div><span>Open requirements</span><strong>{openRequirements.length}</strong></div><div><span>Amendments to review</span><strong>{unreviewed.length}</strong></div></div><h3 className={styles.subhead}>Leadership attention</h3>{alerts.length ? <ul className={styles.alerts}>{alerts.map((item) => <li key={item}>{item}</li>)}</ul> : <p className={styles.empty}>No rule-based flags.</p>}<h3 className={styles.subhead}>Decision rationale</h3><p className={styles.bodyCopy}>{pursuit.decisionReason || "Not recorded."}</p><button className={styles.download} onClick={exportBrief}>Download weekly brief</button></section></div>}

        {tab === "templates" && <div className={styles.content}><section className={styles.card}><p className={styles.cardKicker}>Reusable delivery kit</p><h2>Six working templates</h2><p className={styles.bodyCopy}>Each CSV downloads with the current pursuit data. Open it in Excel, Sheets, or the client&apos;s approved workspace.</p><div className={styles.templateGrid}>{["Opportunity scorecard", "Bid decision record", "Requirement matrix", "Pursuit schedule", "Amendment log", "Weekly executive view"].map((name, index) => <button key={name} onClick={() => exportTemplate(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><span>Download CSV ↗</span></button>)}</div></section></div>}
      </div>
    </div>
  );
}
