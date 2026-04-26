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
        title="Start with the operating problem in front of you."
        description="If execution is fragmented, noisy, or hard to govern, that is the right starting point for a Farcelis strategy conversation."
        actions={[{ href: `mailto:${site.contact.founderEmail}`, label: "Start a Strategy Call" }]}
      />

      <Reveal delayMs={60}>
        <section className="overflow-hidden bg-[#f2f5f8] py-20 text-slate-950 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
            <div className="rounded-[30px] border border-slate-200 bg-white px-6 py-7 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f412c]">
                Conversation Inputs
              </p>
              <div className="mt-6 space-y-4">
                {prompts.map((prompt) => (
                  <div
                    key={prompt}
                    className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-base leading-7 text-slate-700"
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[30px] border border-white/10 bg-slate-950 px-6 py-7 text-white shadow-[0_24px_56px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d68c6a]">
                Contact Details
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${site.contact.founderEmail}`}
                  className="block rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 transition hover:bg-white/10"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Founder Contact</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.founderEmail}</div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="block rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 transition hover:bg-white/10"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">General Contact</div>
                  <div className="mt-2 text-lg font-semibold">{site.contact.email}</div>
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="block rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 transition hover:bg-white/10"
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
