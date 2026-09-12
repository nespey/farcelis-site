import type { Metadata } from "next";
import { PortfolioDemo } from "./portfolio-demo";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Nathan Espey | Operations & AI Portfolio",
  description: "Selected work in operations, workflow design and practical AI adoption. Explore interactive demonstrations by Nathan Espey.",
  alternates: { canonical: "https://www.farcelis.io/portfolio" },
};

export default function Portfolio() {
  return <div className={styles.portfolio}>
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Nathan Espey / Selected work</p>
      <h1>Make the work clear.<br /><span>Then make it move.</span></h1>
      <p className={styles.lead}>I turn scattered information into systems people can actually use: clear ownership, dependable handoffs and a useful view of what needs attention.</p>
      <div className={styles.links}><a href="#work">Explore the work ↓</a><a href="https://www.linkedin.com/in/nathanespey">LinkedIn ↗</a><a href="https://github.com/nespey">GitHub ↗</a></div>
      <div className={styles.facts}><span>Operations leadership</span><span>Workflow design</span><span>AI-assisted implementation</span><span>Tampa Bay, Florida</span></div>
    </header>
    <section className={styles.intro} aria-label="Experience and approach">
      <h2>Built around how people work.</h2>
      <div><p>My background spans 24 years in the Army, federal training programs, cybersecurity operations and renewable energy. Today, I bring that operating experience to practical systems and AI adoption.</p><p>I define the workflow, clarify responsibilities and use AI-assisted development to implement and refine it. The measure that matters to me is whether the team keeps using what we build.</p></div>
    </section>
    <section id="work" className={styles.work}>
      <p className={styles.eyebrow}>Three ways I approach the work</p>
      <h2>From scattered records to a clear next step.</h2>
      <p className={styles.note}>These interactive examples were created for this portfolio using fictional records. They illustrate approaches from my work, with no client systems, company records or family information exposed.</p>
      <PortfolioDemo />
    </section>
    <section className={styles.closing}>
      <p className={styles.eyebrow}>The person behind the systems</p><h2>Accountability without unnecessary complexity.</h2>
      <p>I have managed a federal training program spanning more than 200 employees, four on-site managers and three locations. That experience shapes how I build: listen to the people doing the work, make responsibilities explicit and give leaders information they can act on.</p>
      <p>Master’s in educational leadership and administration · ClickUp Power User certification · AI Learning Consultant certificate</p>
      <div className={styles.links}><a href="https://www.linkedin.com/in/nathanespey">Connect on LinkedIn ↗</a><a href="https://github.com/nespey/farcelis-site/tree/main/src/app/portfolio">View this portfolio’s source ↗</a></div>
    </section>
  </div>;
}
