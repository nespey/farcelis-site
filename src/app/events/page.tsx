import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { eventOffers, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.events);

export default function EventsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Events and Webinars"
        title="Farcelis events turn complex AI and operations topics into structured executive conversations."
        description="Webinars, live briefings, workshops, and enablement sessions give prospects a way to understand the Farcelis operating model before a formal engagement."
        actions={[
          { href: "#sessions", label: "View Sessions" },
          { href: "/contact", label: "Host a Briefing", variant: "secondary" },
        ]}
        asideTitle="Formats"
        asideItems={["Executive webinars", "Live briefings", "Workshops", "Enablement sessions"]}
      />

      <Reveal delayMs={60}>
        <section id="sessions" className="section-shell section-shell-light scroll-mt-24">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Session Catalog</p>
              <h2 className="section-title mt-5 text-slate-950">
                The event layer gives Farcelis an education and conversion engine.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {eventOffers.map((event, index) => (
                <div
                  key={event.title}
                  className={`enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] ${
                    index % 2 === 1 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {event.format}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{event.description}</p>
                  <p className="mt-5 text-sm font-semibold text-slate-500">{event.audience}</p>
                  <a href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#9f412c]">
                    Request this session
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
