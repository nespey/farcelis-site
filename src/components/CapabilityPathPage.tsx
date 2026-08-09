import Link from "next/link";
import { notFound } from "next/navigation";

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

const flowCopy: Record<string, Record<string, string>> = {
  Build: {
    Grow: "Next: get the thing found, clicked, trusted, and followed up.",
    Operate: "Then: keep the thing managed, visible, supported, and improving.",
  },
  Grow: {
    Build: "Need the asset first? Build the site, app, portal, dashboard, or automation.",
    Operate: "Ready for control? Operate the follow-up, reporting, cadence, and support.",
  },
  Operate: {
    Build: "Missing the right tool? Go back and build the system operations needs.",
    Grow: "Need more movement? Go back and strengthen search, campaigns, content, and CRM.",
  },
};

function PillarRibbon({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div
      style={{
        backgroundImage: `url(${capabilityPillarImages[label]})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
      className={`relative isolate flex items-center justify-center overflow-hidden rounded-[14px] border px-4 font-black uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
        compact ? "min-h-11 text-sm" : "min-h-14 text-xl"
      } ${
        label === "Build"
          ? "border-cyan-100/16 bg-[#285869]"
          : label === "Grow"
            ? "border-emerald-100/16 bg-[#315f55]"
            : "border-indigo-100/16 bg-[#3e506c]"
      }`}
    >
      <span className="relative z-10 text-[color:var(--color-accent)] [text-shadow:0_1px_10px_rgba(3,8,16,1),0_0_18px_rgba(3,8,16,0.9)]">
        {label}
      </span>
    </div>
  );
}

function AdjacentPathCard({
  activeLabel,
  group,
}: {
  activeLabel: string;
  group: (typeof capabilityGroups)[number];
}) {
  return (
    <Link
      href={group.pathHref}
      className="group relative z-10 flex min-h-[210px] flex-1 flex-col rounded-[18px] border border-cyan-100/12 bg-[#1c3c4d] p-3 transition hover:-translate-y-0.5 hover:border-cyan-100/24 hover:bg-[#24495c]"
    >
      <PillarRibbon label={group.label} compact />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        {activeLabel === "Build"
          ? group.label === "Grow"
            ? "Build feeds Grow"
            : "Build feeds Operate"
          : activeLabel === "Grow"
            ? group.label === "Build"
              ? "Back to Build"
              : "Grow feeds Operate"
            : group.label === "Build"
              ? "Build can reinforce Operate"
              : "Grow can reinforce Operate"}
      </p>
      <p className="mt-3 text-sm font-semibold leading-6 text-white">{group.headline}</p>
      <p className="mt-2 text-xs leading-5 text-slate-200">{group.detail}</p>
      <div className="mt-4 rounded-[14px] border border-cyan-100/10 bg-[#173343] px-3 py-3 text-xs font-semibold leading-5 text-white">
        {flowCopy[activeLabel][group.label]}
      </div>
      <div className="mt-auto pt-4">
        <span className="inline-flex w-full items-center justify-center rounded-full border border-cyan-100/14 bg-cyan-100/6 px-4 py-2 text-sm font-semibold text-white transition group-hover:border-cyan-100/26 group-hover:bg-cyan-100/10">
          Go to {group.label} Path
        </span>
      </div>
    </Link>
  );
}

function FlowRail({
  activeLabel,
  groups,
  position,
}: {
  activeLabel: string;
  groups: typeof capabilityGroups;
  position: "left" | "right";
}) {
  return (
    <aside className="flex h-full min-h-[620px] flex-col rounded-[24px] border border-cyan-100/10 bg-[#102c39] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="rounded-[16px] border border-cyan-100/10 bg-[#173343] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
          {position === "left" ? "Feeds This Path" : "Next Path"}
        </p>
        <p className="mt-2 text-xs leading-5 text-slate-200">
          Click across when the buyer needs the step before this one, or the step that comes next.
        </p>
      </div>
      <div className="relative mt-3 flex flex-1 flex-col gap-3 overflow-hidden rounded-[18px]">
        <span className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-cyan-100/12" aria-hidden="true" />
        {groups.map((item, index) => (
          <div key={item.label} className="relative flex flex-1 flex-col">
            {index > 0 ? (
              <div className="relative z-10 -my-1 flex items-center justify-center">
                <span className="rounded-full border border-cyan-100/12 bg-[#102c39] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Then
                </span>
              </div>
            ) : null}
            <AdjacentPathCard activeLabel={activeLabel} group={item} />
          </div>
        ))}
      </div>
    </aside>
  );
}

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
      <Reveal delayMs={40}>
        <section className="section-shell section-shell-dark pt-10 lg:pt-12">
          <div className="section-inner">
            <div
              className={`grid items-stretch gap-4 ${
                group.label === "Grow"
                  ? "lg:grid-cols-[minmax(250px,0.44fr)_minmax(0,1fr)_minmax(250px,0.44fr)]"
                  : group.label === "Operate"
                    ? "lg:grid-cols-[minmax(340px,0.5fr)_minmax(0,1fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.5fr)]"
              }`}
            >
              {group.label === "Grow" ? (
                <FlowRail activeLabel={group.label} groups={[adjacentGroups[0]]} position="left" />
              ) : null}

              {group.label === "Operate" ? (
                <FlowRail activeLabel={group.label} groups={adjacentGroups} position="left" />
              ) : null}

              <article className="rounded-[24px] border border-cyan-100/12 bg-[#1c3c4d] p-4 lg:p-6">
                <PillarRibbon label={group.label} />
                <div className="mt-6 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
                  <div>
                    <p className="eyebrow text-[color:var(--color-accent)]">Why You Are Here</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                      {group.headline}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-200">{group.buyerPrompt}</p>
                    <div className="mt-5 grid gap-2.5 rounded-[16px] border border-cyan-100/10 bg-[#173343] p-3">
                      {group.outcomes.map((outcome) => (
                        <div key={outcome} className="flex gap-3 px-2 py-2 text-sm font-semibold leading-6 text-white">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={group.actionHref}
                      className="mt-5 inline-flex rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
                    >
                      {group.primaryCta}
                    </Link>
                  </div>

                  <div>
                    <p className="eyebrow text-[color:var(--color-accent)]">Choose What You Need</p>
                    <div className="mt-4 grid gap-2.5">
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
                  </div>
                </div>
              </article>

              {group.label === "Build" ? (
                <FlowRail activeLabel={group.label} groups={adjacentGroups} position="right" />
              ) : null}

              {group.label === "Grow" ? (
                <FlowRail activeLabel={group.label} groups={[adjacentGroups[1]]} position="right" />
              ) : null}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
