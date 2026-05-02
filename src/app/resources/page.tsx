import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { ResourceAccessForm } from "@/components/ResourceAccessForm";
import { buildMetadata } from "@/lib/metadata";
import { resourceOffers, resourceTypes, seo } from "@/lib/site-data";

export const metadata = buildMetadata(seo.resources);

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title="Farcelis resources package the thinking buyers need before they commit to a build."
        description="Executive briefings, reports, whitepapers, playbooks, and diagnostic guides help leaders understand AI readiness, workflow architecture, Control Layer design, CRM operations, and growth systems."
        actions={[
          { href: "#request-access", label: "Request Access" },
          { href: "/insights", label: "Read Insights", variant: "secondary" },
        ]}
        asideTitle="Resource Types"
        asideItems={resourceTypes.map((item) => item.title)}
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="max-w-[820px]">
              <p className="eyebrow text-[#9f412c]">Gated Library</p>
              <h2 className="section-title mt-5 text-slate-950">
                These offers give Farcelis a serious enterprise resource surface without pretending every asset is public.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resourceOffers.map((resource, index) => (
                <a
                  key={resource.title}
                  href="#request-access"
                  className={`enterprise-card rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] ${
                    index === 1 || index === 4 ? "lg:translate-y-5" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f412c]">
                    {resource.type}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{resource.description}</p>
                  <p className="mt-5 text-sm font-semibold text-slate-500">{resource.audience}</p>
                  <div className="mt-6 text-sm font-semibold text-[#9f412c]">Request gated access</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section id="request-access" className="section-shell section-shell-dark scroll-mt-24">
          <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Access Request</p>
              <h2 className="section-title mt-5 text-white">
                Turn gated resources into a clean conversion path.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
                The form surface is structured for qualification. It can later be wired into HubSpot, Salesforce, email automation, or the Farcelis Control Layer.
              </p>
            </div>

            <ResourceAccessForm />
          </div>
        </section>
      </Reveal>
    </>
  );
}
