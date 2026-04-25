import Image from "next/image";

import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/metadata";
import { seo, teamMembers } from "@/lib/site-data";

export const metadata = buildMetadata(seo.team);

export default function TeamPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
            Leadership
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            The Farcelis leadership team building AI systems around real execution.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            Farcelis brings together leadership across operational systems,
            workflow architecture, implementation discipline, and AI-driven
            growth so the Control Layer can move from concept to live adoption.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Leadership Team"
            title="Operational design, implementation, growth, and execution aligned under one system vision."
          />
          <div className="mt-10 grid gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_56px_rgba(15,23,42,0.08)] lg:grid-cols-[280px_minmax(0,1fr)] lg:p-8"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 280px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:#9f412c]">
                    {member.role}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    {member.name}
                  </h2>
                  <div className="mt-4 grid gap-4">
                    {member.bio.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 28)}
                        className="text-base leading-7 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Connect directly with the Farcelis leadership team."
        description="If you need operational clarity, workflow structure, or a serious AI systems implementation path, Farcelis is built to work inside live environments where execution matters."
        primaryLabel="Start a Strategy Call"
        primaryHref="/contact"
      />
    </>
  );
}

