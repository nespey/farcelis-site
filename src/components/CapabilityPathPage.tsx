import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { capabilityGroups, getCapabilityGroup } from "@/lib/service-catalog";

const capabilityPillarImages: Record<string, string> = {
  Build: "/images/navigation/capability-build-pill.png",
  Grow: "/images/navigation/capability-grow-pill.png",
  Operate: "/images/navigation/capability-operate-pill.png",
};

const adjacentLabels: Record<string, string[]> = {
  Build: ["Grow", "Operate"],
  Grow: ["Build", "Operate"],
  Operate: ["Build", "Grow"],
};

export function CapabilityPathPage({ slug }: { slug: string }) {
  const group = getCapabilityGroup(slug);

  if (!group) {
    notFound();
  }

  const adjacentGroups = adjacentLabels[group.label]
    .map((label) => capabilityGroups.find((item) => item.label === label))
    .filter(Boolean) as typeof capabilityGroups;

  return (
    <>
      <PageIntro
        eyebrow={`${group.label} Path`}
        title={group.headline}
        description={group.buyerPrompt}
        actions={[
          { href: group.actionHref, label: group.primaryCta },
          { href: "/services", label: "Back to Capabilities", variant: "secondary" },
        ]}
        asideTitle="What This Covers"
        asideItems={group.outcomes}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner">
            <div
              className={`relative isolate flex min-h-16 items-center justify-center overflow-hidden rounded-[18px] border px-6 py-4 text-2xl font-black uppercase tracking-[0.34em] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
                group.label === "Build"
                  ? "border-cyan-100/16 bg-[#285869]"
                  : group.label === "Grow"
                    ? "border-emerald-100/16 bg-[#315f55]"
                    : "border-indigo-100/16 bg-[#3e506c]"
              }`}
            >
              <Image
                src={capabilityPillarImages[group.label]}
                alt=""
                fill
                sizes="1120px"
                className="h-full w-full rounded-[inherit] object-fill opacity-95"
                aria-hidden="true"
              />
              <span className="relative z-10 text-[color:var(--color-accent)] [text-shadow:0_1px_10px_rgba(3,8,16,1),0_0_18px_rgba(3,8,16,0.9)]">
                {group.label}
              </span>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {group.outcomes.map((outcome) => (
                <article
                  key={outcome}
                  className="rounded-[22px] border border-cyan-100/12 bg-[#1c3c4d] px-5 py-5 text-center"
                >
                  <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">{outcome}</h2>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <article className="rounded-[24px] border border-cyan-100/12 bg-[#1c3c4d] px-6 py-6">
                <p className="eyebrow text-[color:var(--color-accent)]">Inside This Path</p>
                <div className="mt-5 grid gap-2.5">
                  {group.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-[14px] border border-cyan-100/10 bg-[#173343] px-4 py-3 transition hover:border-cyan-100/24 hover:bg-[#24495c]"
                    >
                      <span className="block text-sm font-semibold text-white">{item.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-200">{item.detail}</span>
                    </Link>
                  ))}
                </div>
              </article>

              <article className="rounded-[24px] border border-cyan-100/12 bg-[#1c3c4d] px-6 py-6">
                <p className="eyebrow text-[color:var(--color-accent)]">How It Connects</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {group.handoff.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">{group.handoff.body}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {adjacentGroups.map((item) => (
                    <Link
                      key={item.label}
                      href={item.pathHref}
                      className="rounded-[14px] border border-cyan-100/12 bg-[#173343] px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-100/24 hover:bg-[#24495c]"
                    >
                      See {item.label}
                    </Link>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={group.actionHref}
                className="rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
              >
                {group.primaryCta}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-cyan-100/18 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-100/32 hover:text-white"
              >
                Back to Build / Grow / Operate
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
