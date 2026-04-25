import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/metadata";
import { seo, site } from "@/lib/site-data";

export const metadata = buildMetadata(seo.contact);

const intakePrompts = [
  "Where is work currently scattered across tools, teams, or conversations?",
  "Where do priorities, handoffs, or reporting break down most often?",
  "What kind of visibility does leadership need but still not have?",
];

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
            Contact Farcelis
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Build your Control Layer with a grounded strategy conversation.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            Connect with Farcelis to design and implement your Control Layer.
            If you need better visibility into work, decisions, and execution
            before scaling AI, start here.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_56px_rgba(15,23,42,0.08)] lg:p-8">
            <SectionHeader
              eyebrow="Strategy Call"
              title="What to bring into the conversation."
              description="The strongest starting point is not a tool wishlist. It is an honest view of where execution currently breaks."
            />
            <div className="mt-8 grid gap-4">
              {intakePrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-base leading-7 text-slate-700"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-[0_24px_56px_rgba(15,23,42,0.18)] lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Contact Details
            </p>
            <div className="mt-6 grid gap-5">
              <a
                href={`mailto:${site.contact.founderEmail}`}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Founder Contact
                </div>
                <div className="mt-2 text-lg font-semibold">{site.contact.founderEmail}</div>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  General Contact
                </div>
                <div className="mt-2 text-lg font-semibold">{site.contact.email}</div>
              </a>
              <a
                href={site.contact.phoneHref}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Phone
                </div>
                <div className="mt-2 text-lg font-semibold">{site.contact.phone}</div>
              </a>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Office
                </div>
                <div className="mt-2 space-y-1 text-lg font-semibold">
                  {site.contact.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title="Start the conversation with the operating problem in front of you."
        description="Farcelis is designed to help founders, CEOs, operators, and teams bring structure to operational chaos before they scale more AI, more automation, or more complexity."
        primaryLabel="Email Farcelis"
        primaryHref={`mailto:${site.contact.founderEmail}`}
      />
    </>
  );
}

