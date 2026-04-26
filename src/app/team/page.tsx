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
        title="Systems leadership built around live execution."
        description="Farcelis brings together operational design, implementation, growth, and execution discipline under one system vision."
      />

      <div className="space-y-0">
        {teamMembers.map((member, index) => {
          const light = index % 2 === 1;
          return (
            <Reveal key={member.name} delayMs={index * 60}>
              <section
                className={`overflow-hidden py-18 lg:py-24 ${
                  light ? "bg-[#f3f6f8] text-slate-950" : "bg-transparent text-white"
                }`}
              >
                {light ? (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07111d] to-transparent" />
                ) : null}
                <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:px-8">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/8">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1 lg:pr-10" : "lg:pl-6"}>
                    <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-[#9f412c]" : "text-[#d68c6a]"}`}>
                      {member.role}
                    </p>
                    <h2 className={`mt-4 text-4xl font-semibold tracking-[-0.05em] ${light ? "text-slate-950" : "text-white"}`}>
                      {member.name}
                    </h2>
                    <div className={`mt-6 grid gap-4 ${light ? "text-slate-600" : "text-slate-300"}`}>
                      {member.bio.slice(0, 3).map((paragraph) => (
                        <p key={paragraph.slice(0, 30)} className="text-base leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {member.specialties.slice(0, 5).map((specialty) => (
                        <span
                          key={specialty}
                          className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            light
                              ? "border-slate-300 bg-white text-slate-700"
                              : "border-white/10 bg-white/6 text-slate-200"
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a
                        href={`mailto:${member.email}`}
                        className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition ${
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
