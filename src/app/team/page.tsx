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
            <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-2">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="group grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.12)] sm:grid-cols-[132px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden sm:h-full sm:min-h-[190px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 132px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-col justify-center px-6 py-6">
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
