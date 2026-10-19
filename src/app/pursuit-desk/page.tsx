import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "./pursuit-desk.module.css";

export const metadata: Metadata = {
  title: "Pursuit Desk | Farcelis AI Consulting",
  description:
    "A managed pursuit operating system for government contractors: bid decisions, requirements, owners, amendments, and leadership visibility in one place.",
  robots: { index: false, follow: false },
};

const friction = [
  { number: "01", title: "A requirement without an owner", copy: "A response can look complete while an obligation sits between teams. Give each requirement a source, an owner, and a review state." },
  { number: "02", title: "An amendment without an impact decision", copy: "A new version changes the work. Capture what moved, who checked it, and what the team needs to revisit." },
  { number: "03", title: "A deadline without a shared view", copy: "Leadership needs the decision, open risks, and next actions in one view, before the submission window narrows." },
];

const cadence = [
  { number: "01", title: "Decide", copy: "Score the opportunity and record the bid decision with its rationale." },
  { number: "02", title: "Assign", copy: "Connect each obligation to its source, owner, and review gate." },
  { number: "03", title: "Intervene", copy: "Surface missing ownership, unreviewed changes, and deadline pressure." },
  { number: "04", title: "Close", copy: "Give leaders a concise weekly view and preserve a usable record." },
];

export default function PursuitDeskPage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/images/industries/adobe-stock/government-contractors-public-sector.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.inner}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}><span className={styles.kickerLine} /> Farcelis Pursuit Desk / Government Contracting</p>
            <h1>Every bid has a deadline.<br /><em>Every decision needs control.</em></h1>
            <p className={styles.lead}>A managed pursuit desk that brings bid decisions, requirements, amendments, owners, and next actions into one operating frame.</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/pursuit-desk/demo">Explore the control room <span aria-hidden="true">↗</span></Link>
              <Link className={styles.secondary} href="/contact?work=workflow-managed-operations&industry=government-contractors-public-sector#contact-top">Talk with Farcelis <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className={styles.heroFooter}><span>01 / Pursuit operations</span><span>Built for decisions that have to hold up under pressure</span></div>
        </div>
      </section>

      <section className={styles.problem}>
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}><span className={styles.kickerLine} /> The pressure points</p>
            <h2>Where bids lose control.</h2>
            <p>The problems are usually visible before the deadline. The operating cadence has to make them actionable.</p>
          </div>
          <div className={styles.frictionList}>
            {friction.map((item) => (
              <article className={styles.frictionRow} key={item.number}>
                <span className={styles.rowNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className={styles.rowMark} aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cadenceSection}>
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}><span className={styles.kickerLine} /> The operating cadence</p>
            <h2>One pursuit.<br /><em>One accountable picture.</em></h2>
            <p>Farcelis turns the moving parts of a bid into a repeatable rhythm that both the team and leadership can see.</p>
          </div>
          <div className={styles.cadenceRail}>
            {cadence.map((item) => (
              <article className={styles.cadenceStep} key={item.number}>
                <span className={styles.cadenceNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <p className={styles.serviceNote}>The client approves bid decisions, pricing, representations, signatures, and final submission. Farcelis keeps the operating picture current.</p>
        </div>
      </section>

      <section className={styles.peopleSection}>
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}><span className={styles.kickerLine} /> People behind the system</p>
            <h2>A desk with named operators.</h2>
            <p>Clear ownership is part of the service, not a feature buried in the software.</p>
          </div>
          <div className={styles.people}>
            <article className={styles.person}>
              <div className={styles.portrait}><Image src="/images/team/katalin-espey.jpeg" alt="Katalin Espey" fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
              <div className={styles.personText}><p className={styles.personRole}>Client cadence &amp; growth</p><h3>Katalin Espey</h3><p>Leads discovery, pursuit rhythm, contributor follow-up, and the client relationship.</p></div>
            </article>
            <article className={styles.person}>
              <div className={styles.portrait}><Image src="/images/team/nathan-espey.png" alt="Nathan Espey" fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
              <div className={styles.personText}><p className={styles.personRole}>Operating system &amp; controls</p><h3>Nathan Espey</h3><p>Builds the workflow, dashboard, automations, document structure, and exception signals.</p></div>
            </article>
          </div>
          <p className={styles.boundary}>Specialist proposal writing, pricing, legal interpretation, and final compliance review are scoped separately. AI-assisted work is checked by a person against source documents.</p>
        </div>
      </section>

      <section className={styles.closeSection}>
        <div className={styles.closeGlow} />
        <div className={styles.inner}>
          <p className={styles.kicker}><span className={styles.kickerLine} /> See the working system</p>
          <h2>Open the control room.<br /><em>Put the process to work.</em></h2>
          <p>Try the sample pursuit: change a decision, assign requirements, review an amendment, and export the leadership brief.</p>
          <Link className={styles.primary} href="/pursuit-desk/demo">Explore the interactive demo <span aria-hidden="true">↗</span></Link>
          <p className={styles.previewNote}>Private working concept · sample data only</p>
        </div>
      </section>
    </>
  );
}
