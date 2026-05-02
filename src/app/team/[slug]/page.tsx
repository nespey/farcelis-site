import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getTeamMemberBySlug, seo, teamMembers } from "@/lib/site-data";

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return buildMetadata(seo.team);
  }

  return buildMetadata({
    ...seo.team,
    title: `${member.name} | Farcelis Leadership`,
    description: `${member.name}, ${member.role} at Farcelis AI Consulting LLC.`,
    path: `/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow="Leadership Bio"
        title={member.name}
        description={member.role}
        actions={[{ href: "/team", label: "Back to Leadership", variant: "secondary" }]}
        asideTitle="Specialties"
        asideItems={member.specialties.slice(0, 4)}
        compact
      />

      <Reveal delayMs={60}>
        <section className="section-shell section-shell-light">
          <div className="section-inner grid gap-10 lg:grid-cols-[310px_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white p-2 shadow-[0_20px_48px_rgba(15,23,42,0.1)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 310px, 310px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="eyebrow text-[#9f412c]">{member.role}</p>
              <h1 className="mt-4 text-[clamp(2.5rem,4vw,4rem)] font-semibold tracking-[-0.06em] text-slate-950">
                {member.name}
              </h1>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                {member.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {member.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_18px_rgba(15,23,42,0.06)]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${member.email}`}
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
                >
                  {member.email}
                </a>
                <Link
                  href="/contact"
                  className="site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-950"
                >
                  Schedule a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
