import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, site } from "@/lib/site-data";

export const metadata = buildMetadata(seo.contact);

const prompts = [
  "Where is work currently scattered across tools, teams, or conversations?",
  "Where do priorities, handoffs, or reporting break down most often?",
  "What visibility does leadership still not have?",
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with the operating problem that keeps pulling execution apart."
        description="If reporting, handoffs, priorities, or coordination are breaking under pressure, that is the right starting point for a Farcelis strategy conversation."
        actions={[{ href: `mailto:${site.contact.founderEmail}`, label: "Schedule a Strategy Call" }]}
        asideTitle="Bring Into The Conversation"
        asideItems={[
          "The pressure points",
          "The visibility gaps",
          "The system that needs to hold",
        ]}
      />

      <Reveal delayMs={70}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_380px]">
            <div className="surface-light rounded-[30px] px-6 py-7">
              <p className="eyebrow text-[#9f412c]">Conversation Inputs</p>
              <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                {prompts.map((prompt) => (
                  <div key={prompt} className="py-5 text-lg leading-8 text-slate-700">
                    {prompt}
                  </div>
                ))}
              </div>
            </div>

            <aside className="surface-dark rounded-[30px] px-6 py-7 text-white">
              <p className="eyebrow text-[color:var(--color-accent)]">Contact Details</p>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${site.contact.founderEmail}`}
                  className="hover-lift block rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Founder Contact</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.founderEmail}</div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover-lift block rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">General Contact</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.email}</div>
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="hover-lift block rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Phone</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.phone}</div>
                </a>
              </div>
            </aside>
          </div>
        </section>
      </Reveal>
    </>
  );
}
