import Image from "next/image";
import Link from "next/link";

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
        title="Leadership built to structure execution under real operating pressure."
        description="Farcelis brings together operational design, execution discipline, systems architecture, and growth intelligence under one company vision."
        asideTitle="Leadership Spine"
        asideItems={["Operational design", "Deployment discipline", "Growth architecture"]}
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-light">
          <div className="section-inner">
            <div className="grid gap-8 md:grid-cols-2">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(15,23,42,0.14)]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="px-6 py-6">
                    <p className="eyebrow text-[#9f412c]">{member.role}</p>
                    <h2 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.05em] text-slate-950">
                      {member.name}
                    </h2>
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-slate-950">
                      Read bio
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
