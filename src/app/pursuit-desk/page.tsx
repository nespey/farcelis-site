import Link from "next/link";
import type { Metadata } from "next";

import styles from "./pursuit-desk.module.css";

export const metadata: Metadata = {
  title: "Pursuit Desk | Farcelis AI Consulting",
  description:
    "A managed pursuit operating system for government contractors: bid decisions, requirements, owners, amendments, and leadership visibility in one place.",
  robots: { index: false, follow: false },
};

const steps = [
  ["01", "Choose", "Record why an opportunity fits, who decides, and whether to bid."],
  ["02", "Control", "Map requirements to owners, evidence, review gates, and deadlines."],
  ["03", "Respond", "Track amendments and missing inputs before the submission window closes."],
  ["04", "Learn", "Capture the outcome and preserve useful content for the next pursuit."],
];

export default function PursuitDeskPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <p className={styles.kicker}>Farcelis Pursuit Desk · Working service concept</p>
          <div className={styles.heroGrid}>
            <div>
              <h1>Run the pursuit. See the whole picture.</h1>
              <p className={styles.lead}>
                A managed operating desk for government contractors who have capable people and active bids, but need clearer decisions, ownership, and follow-through from opportunity to submission.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primary} href="/pursuit-desk/demo">Try the working demo</Link>
                <Link className={styles.secondary} href="/contact?work=workflow-managed-operations&industry=government-contractors-public-sector#contact-top">Discuss a pilot</Link>
              </div>
              <p className={styles.note}>Built under Farcelis AI Consulting LLC. Name and service scope are being validated.</p>
            </div>
            <div className={styles.heroPanel} aria-label="Pursuit workflow example">
              <div className={styles.panelTop}><span>ACTIVE PURSUIT</span><span>CONTROL VIEW</span></div>
              <h2>One bid. One accountable picture.</h2>
              <div className={styles.panelRows}>
                <div><span>Bid decision</span><strong>Recorded</strong></div>
                <div><span>Requirements</span><strong>Mapped to owners</strong></div>
                <div><span>Amendments</span><strong>Reviewed for impact</strong></div>
                <div><span>Leadership view</span><strong>Open risks, next actions</strong></div>
              </div>
              <div className={styles.panelFoot}>Client approves all claims, pricing, and final submission.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.kicker}>The operating path</p>
          <h2 className={styles.sectionTitle}>A repeatable way to move a bid.</h2>
          <div className={styles.steps}>
            {steps.map(([number, title, description]) => (
              <article className={styles.step} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className={styles.kicker}>People + system</p>
          <h2 className={styles.sectionTitle}>A desk with named operators.</h2>
          <div className={styles.people}>
            <article><p className={styles.personLabel}>Client cadence and growth</p><h3>Katalin Espey</h3><p>Leads discovery, pursuit rhythm, partner and contributor follow-up, and the client relationship.</p></article>
            <article><p className={styles.personLabel}>Operating system and controls</p><h3>Nathan Espey</h3><p>Builds the workflow, dashboard, automations, document structure, and exception signals behind the desk.</p></article>
          </div>
          <p className={styles.boundary}>Specialist proposal writing, pricing, legal interpretation, and final compliance reviews are scoped separately. AI-assisted work is checked against the source documents by a person.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.kicker}>What you can inspect now</p>
          <h2 className={styles.sectionTitle}>The first workspace is ready to try.</h2>
          <p className={styles.bottomCopy}>Open the sample pursuit, change the bid decision, assign requirements, log an amendment, and export the weekly brief and six starting templates. The demo runs in your browser and is clearly separated from live client operations.</p>
          <Link className={styles.primary} href="/pursuit-desk/demo">Open interactive demo →</Link>
        </div>
      </section>
    </>
  );
}
