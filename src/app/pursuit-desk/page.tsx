import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "./pursuit-desk.module.css";

export const metadata: Metadata = {
  title: "Pursuit Desk | Farcelis AI Consulting",
  description:
    "Managed bid operations for government contractors. One view for decisions, requirements, owners, amendments, deadlines, and leadership reporting.",
  robots: { index: false, follow: false },
};

const templates = [
  "Opportunity scorecard",
  "Bid decision record",
  "Requirement matrix",
  "Pursuit schedule",
  "Amendment log",
  "Weekly executive view",
];

const contactUrl = "/contact?work=workflow-managed-operations&industry=government-contractors-public-sector#contact-top";

export default function PursuitDeskPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Farcelis Pursuit Desk · Government contractors</p>
              <h1>Keep every bid <span>under control.</span></h1>
              <p className={styles.lead}>A managed desk for bid decisions, requirements, owners, amendments, and deadlines.</p>
              <div className={styles.actions}>
                <Link className={styles.primary} href={contactUrl}>Scope a pilot <span aria-hidden="true">↗</span></Link>
                <Link className={styles.secondary} href="/pursuit-desk/demo">Explore the live demo <span aria-hidden="true">↗</span></Link>
              </div>
              <div className={styles.heroSignals} aria-label="Pursuit Desk service highlights">
                <span>One pursuit owner</span>
                <span>Weekly leadership view</span>
                <span>Six working templates</span>
              </div>
            </div>
            <Link className={styles.preview} href="/pursuit-desk/demo" aria-label="Explore the Pursuit Desk demo">
              <div className={styles.previewTop}><span>THE CONTROL ROOM</span><span>INTERACTIVE DEMO ↗</span></div>
              <Image src="/images/pursuit-desk/control-room-preview.png" alt="Pursuit Desk demo showing bid decision, deadlines, open requirements, and an attention queue" width={760} height={670} priority sizes="(max-width: 900px) 100vw, 52vw" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.deliverables}>
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>What your team gets</p><h2>Six templates. One clear view.</h2></div>
            <p>Run the bid from decision through submission readiness.</p>
          </div>
          <div className={styles.templateGrid}>
            {templates.map((template) => <div className={styles.template} key={template}><span className={styles.templateIcon} aria-hidden="true">✓</span><strong>{template}</strong></div>)}
          </div>
        </div>
      </section>

      <section className={styles.engagement}>
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>How to start</p><h2>One bid first. Then scale.</h2></div>
          </div>
          <div className={styles.offerGrid}>
            <article className={styles.offerPrimary}>
              <p className={styles.offerLabel}>Fixed-scope pilot</p>
              <div className={styles.offerMain}><h3>One active pursuit</h3><p className={styles.price}>From $5,000</p></div>
              <p className={styles.offerDetail}>Four weeks · kickoff · working templates · weekly review and brief</p>
              <Link href={contactUrl}>Scope my pilot <span aria-hidden="true">↗</span></Link>
            </article>
            <article className={styles.offerSecondary}>
              <p className={styles.offerLabel}>Ongoing desk</p>
              <div className={styles.offerMain}><h3>Recurring bid operations</h3><p className={styles.price}>From $7,500 <small>/ month</small></p></div>
              <p className={styles.offerDetail}>Up to two active pursuits · weekly cadence · live leadership view</p>
              <Link href={contactUrl}>Discuss monthly scope <span aria-hidden="true">↗</span></Link>
            </article>
          </div>
          <div className={styles.operatorStrip}>
            <div className={styles.avatars}><Image src="/images/team/katalin-espey.jpeg" alt="Katalin Espey" width={45} height={45} /><Image src="/images/team/nathan-espey.png" alt="Nathan Espey" width={45} height={45} /></div>
            <p><strong>Katalin runs the cadence. Nathan builds the controls.</strong><br />Proposal writing, pricing, and final compliance review are scoped separately.</p>
          </div>
          <p className={styles.priceNote}>Proposed preview pricing. Final fixed fee follows a solicitation and workload review. The client approves all bid content and submission.</p>
        </div>
      </section>
    </>
  );
}
