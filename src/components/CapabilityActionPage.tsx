import Link from "next/link";
import { notFound } from "next/navigation";

import { CapabilityInquiryForm } from "@/components/CapabilityInquiryForm";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { capabilityGroups, getCapabilityGroup } from "@/lib/service-catalog";

const actionPrompts: Record<string, string[]> = {
  Build: [
    "What do you want Farcelis to build, fix, connect, or launch?",
    "What already exists today, and what is missing, messy, fragile, or unclear?",
  ],
  Grow: [
    "What visibility, campaign, content, CRM, or revenue movement do you want Farcelis to help create?",
    "What is currently happening after someone finds you, clicks, asks, books, or becomes a lead?",
  ],
  Operate: [
    "What system, workflow, reporting path, deployment, or support rhythm do you want Farcelis to stabilize?",
    "Where are handoffs, ownership, AI use, maintenance, or decisions breaking down today?",
  ],
};

export function CapabilityActionPage({ slug }: { slug: string }) {
  const group = getCapabilityGroup(slug);

  if (!group) {
    notFound();
  }

  const adjacentGroups = capabilityGroups.filter((item) => item.label !== group.label);
  const prompts = actionPrompts[group.label];

  return (
    <>
      <PageIntro
        eyebrow={`${group.label} Action`}
        title={
          group.label === "Build"
            ? "Tell Farcelis what you want to build."
            : group.label === "Grow"
              ? "Tell Farcelis what you want to grow."
              : "Tell Farcelis what you need to stabilize."
        }
        description={group.buyerPrompt}
        actions={[
          { href: group.pathHref, label: `See the ${group.label} Path`, variant: "secondary" },
        ]}
        asideTitle="Useful Starting Points"
        asideItems={group.outcomes}
      />

      <Reveal delayMs={40}>
        <section className="section-shell section-shell-dark">
          <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">One Focused Next Step</p>
              <h2 className="section-title mt-5 text-white">
                The goal is not to make you choose the perfect service. It is to describe the outcome.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Farcelis can translate the business need into the right mix of build, growth, operating structure, deployment support, and Control Layer design.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {adjacentGroups.map((item) => (
                  <Link
                    key={item.label}
                    href={item.pathHref}
                    className="rounded-[16px] border border-cyan-100/12 bg-[#1c3c4d] px-4 py-4 text-center text-sm font-semibold text-white transition hover:border-cyan-100/24 hover:bg-[#24495c]"
                  >
                    Also see {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <CapabilityInquiryForm label={group.label} prompts={prompts} />
          </div>
        </section>
      </Reveal>
    </>
  );
}
