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
        title="The operators behind Farcelis."
        description="Operators building websites, workflows, growth systems, and reporting that give clients time back."
        asideTitle="Leadership Spine"
        asideItems={["Operational design", "Deployment discipline", "Growth architecture"]}
        className="team-page-intro"
      />

      <Reveal delayMs={50}>
        <section className="section-shell section-shell-light team-grid-section">
          <div className="section-inner">
            <div className="team-grid mx-auto grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="leadership-card group grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.12)] sm:grid-cols-[220px_minmax(0,1fr)] xl:block"
                >
                  <div className="leadership-card-image relative aspect-[4/5] overflow-hidden sm:min-h-[280px] xl:min-h-0">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Farcelis AI Consulting`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 220px, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                  </div>

                  <div className="leadership-card-copy flex flex-col justify-center px-6 py-6">
                    <p className="eyebrow text-[#9f412c]">{member.role}</p>
                    <h2 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.05em] text-slate-950">
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
