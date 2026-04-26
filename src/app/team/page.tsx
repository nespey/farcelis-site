import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { seo, teamMembers } from "@/lib/site-data";

export const metadata = buildMetadata(seo.team);

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Leadership"
        title="Systems leadership built for live execution environments."
        description="Farcelis brings together operational design, implementation discipline, marketing architecture, and executive control under one system vision."
        asideTitle="Leadership Spine"
        asideItems={[
          "Operational design",
          "Deployment discipline",
          "Growth architecture",
        ]}
      />

      <div>
        {teamMembers.map((member, index) => {
          const light = index % 2 === 1;
          return (
            <Reveal key={member.name} delayMs={index * 60}>
              <section className={`section-shell ${light ? "section-shell-light" : "section-shell-dark"}`}>
                <div className="section-inner grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
                  <div className={light ? "lg:order-2" : ""}>
                    <div
                      className={`overflow-hidden rounded-[30px] ${light ? "surface-light" : "surface-dark"} p-2`}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={light ? "lg:order-1 lg:pr-10" : "lg:pl-4"}>
                    <p className={`eyebrow ${light ? "text-[#9f412c]" : "text-[color:var(--color-accent)]"}`}>
                      {member.role}
                    </p>
                    <h2 className={`mt-4 text-[clamp(2.6rem,4.8vw,4.3rem)] font-semibold tracking-[-0.06em] ${light ? "text-slate-950" : "text-white"}`}>
                      {member.name}
                    </h2>

                    <div className={`mt-6 max-w-[780px] space-y-4 ${light ? "text-slate-600" : "text-slate-300"}`}>
                      {member.bio.slice(0, 3).map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="text-base leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {member.specialties.slice(0, 6).map((specialty) => (
                        <span
                          key={specialty}
                          className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            light
                              ? "border-slate-200 bg-white text-slate-700 shadow-[0_10px_18px_rgba(15,23,42,0.06)]"
                              : "border-white/10 bg-white/[0.04] text-slate-200"
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
                      <div
                        className={`rounded-[24px] border px-5 py-5 ${
                          light
                            ? "border-slate-200 bg-[linear-gradient(135deg,rgba(97,192,215,0.1),rgba(242,139,91,0.08))] text-slate-700"
                            : "border-white/10 bg-[linear-gradient(135deg,rgba(97,192,215,0.08),rgba(141,119,255,0.08))] text-slate-200"
                        }`}
                      >
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                          Leadership Signal
                        </div>
                        <p className="mt-3 text-base leading-7">
                          {member.specialties.slice(0, 2).join(" and ")} stay anchored to how execution works in live operating environments.
                        </p>
                      </div>

                      <a
                        href={`mailto:${member.email}`}
                        className={`site-cta inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold ${
                          light
                            ? "border-slate-300 text-slate-900 hover:border-slate-950"
                            : "border-white/12 text-white hover:border-white/24"
                        }`}
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
