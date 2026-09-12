"use client";
import { useState } from "react";
import styles from "./portfolio.module.css";

const records = [
  { title: "Confirm site readiness", owner: "Project lead", status: "Needs attention", due: "Sep 11", evidence: "Site checklist has an unresolved access requirement." },
  { title: "Approve delivery schedule", owner: "Operations", status: "In review", due: "Sep 14", evidence: "Schedule received; owner approval is pending." },
  { title: "Reconcile project records", owner: "Coordinator", status: "Complete", due: "Sep 10", evidence: "Three source records reconciled against the signed scope." },
  { title: "Prepare weekly update", owner: "Program lead", status: "In progress", due: "Sep 15", evidence: "Draft prepared; readiness and schedule items remain open." },
];
const cases = [
  { title: "Operations visibility", industry: "Renewable energy", problem: "Project information lived across tools, making it difficult to see which records agreed and what needed action.", role: "I worked through the records and handoffs, clarified ownership and built a shared operating dashboard.", result: "The dashboard remains central to the team’s day-to-day operations.", instruction: "Filter the sample board, then open a record to see the evidence behind its status." },
  { title: "Handoffs with accountability", industry: "Program operations", problem: "Work can look complete to one team while the next team is still missing the information it needs.", role: "My operations work includes coordinating schedules, requirements and follow-up across teams. I design workflows around a named owner and an explicit acceptance step.", result: "This demonstration shows how I would make a handoff reviewable before calling it complete.", instruction: "Walk through a sample handoff. Evidence and manager review are required before completion." },
  { title: "Reporting with evidence", industry: "AI consulting", problem: "An automated summary is only useful if the underlying records support what it says.", role: "I build workflows that connect operational records to actions and reporting, with evidence checks and human approval before consequential steps.", result: "This demonstration turns the sample board into a short update while preserving its unresolved issues.", instruction: "Build the sample update, inspect its sources and mark it reviewed. This is a deterministic demo, with no live AI call or message sent." },
];

export function PortfolioDemo() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const [evidence, setEvidence] = useState(false);
  const [review, setReview] = useState(false);
  const [report, setReport] = useState(false);
  const [approved, setApproved] = useState(false);
  const current = cases[active];
  return <div>
    <div className={styles.tabs} role="tablist" aria-label="Portfolio examples">{cases.map((item, i) => <button key={item.title} id={`tab-${i}`} role="tab" aria-selected={active === i} aria-controls={`panel-${i}`} onClick={() => setActive(i)}><small>0{i + 1}</small>{item.title}</button>)}</div>
    <div className={styles.case} role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
      <div className={styles.context}><p className={styles.eyebrow}>{current.industry}</p><h3>{current.title}</h3><h4>The problem</h4><p>{current.problem}</p><h4>My contribution</h4><p>{current.role}</p><h4>{active === 0 ? "In use today" : "What this example shows"}</h4><p>{current.result}</p></div>
      <div className={styles.demo}><div className={styles.demoTop}><span>Interactive demonstration</span><span>Sample data only</span></div><p>{current.instruction}</p>
        {active === 0 && <><div className={styles.metrics}><div><strong>4</strong>Records</div><div><strong>1</strong>Needs attention</div><div><strong>1</strong>Complete</div></div><div className={styles.filters}>{["All work", "Needs attention", "Complete"].map(f => <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div><div className={styles.records}>{records.map((r, i) => (filter === "All work" || filter === r.status) && <button key={r.title} aria-pressed={selected === i} onClick={() => setSelected(i)}><span><b>{r.title}</b><small>{r.owner} · Due {r.due}</small></span><span className={styles.badge}>{r.status}</span></button>)}</div><div className={styles.evidence} aria-live="polite"><h4>{records[selected].title}: source note</h4><p>{records[selected].evidence}</p></div><small>Illustrative snapshot as of September 12, 2026.</small></>}
        {active === 1 && <><ol className={styles.steps}>{["Intake", "Evidence", "Manager review", "Complete"].map((s,i) => <li key={s} aria-current={step === i ? "step" : undefined}><span>{i + 1}</span>{s}</li>)}</ol><div className={styles.evidence} aria-live="polite"><h4>Delivery readiness handoff</h4><p>Owner: Project coordinator · Reviewer: Operations manager</p><p>{["Confirm the owner and requested deliverable before routing the task.", "Attach the readiness checklist so the reviewer can evaluate the handoff.", "The manager checks the evidence and accepts responsibility for the next step.", "Evidence attached. Review recorded. The handoff is complete."][step]}</p>{step === 1 && <label><input type="checkbox" checked={evidence} onChange={e=>setEvidence(e.target.checked)} /> Attach sample readiness checklist</label>}{step === 2 && <label><input type="checkbox" checked={review} onChange={e=>setReview(e.target.checked)} /> Record manager acceptance</label>}</div><div className={styles.actions}>{step < 3 && <button disabled={(step === 1 && !evidence) || (step === 2 && !review)} onClick={()=>setStep(step+1)}>Continue to { ["evidence", "manager review", "completion"][step]} →</button>}<button onClick={()=>{setStep(0);setEvidence(false);setReview(false);}}>Reset example</button></div></>}
        {active === 2 && <><div className={styles.evidence}><h4>Inputs</h4><p>Four project records from the operations board. One unresolved readiness issue. One pending schedule approval.</p></div><div className={styles.actions}><button onClick={()=>{setReport(true);setApproved(false);}}>Build sample update</button></div>{report && <div className={styles.evidence} aria-live="polite"><span className={styles.badge}>{approved ? "Reviewed locally" : "Draft: review required"}</span><h4>Weekly operations update</h4><p>Project records have been reconciled. Site readiness still needs the project lead to resolve access, and Operations needs to approve the delivery schedule. Keep both items open in the weekly update.</p><details><summary>Check the supporting records</summary><ul>{records.map(r=><li key={r.title}><b>{r.title}:</b> {r.evidence}</li>)}</ul></details><div className={styles.actions}><button disabled={approved} onClick={()=>setApproved(true)}>{approved ? "Review recorded" : "Mark reviewed"}</button></div><small>Nothing is sent or saved outside this page.</small></div>}</>}
      </div>
    </div>
  </div>;
}
