"use client";

import Link from "next/link";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  compact?: boolean;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions = [],
  compact = false,
}: PageIntroProps) {
  return (
    <section className={`relative ${compact ? "pb-16 pt-10 lg:pb-20 lg:pt-14" : "pb-20 pt-14 lg:pb-28 lg:pt-18"}`}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:#d68c6a]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-[3.2rem] font-semibold tracking-[-0.075em] text-white sm:text-[4.6rem] lg:text-[5.8rem] lg:leading-[0.98]">
            {title}
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-8 text-slate-300">
            {description}
          </p>
          {actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:border-white/24 hover:bg-white/8 hover:shadow-[0_14px_30px_rgba(15,23,42,0.24)]"
                      : "inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_18px_36px_rgba(159,65,44,0.28)]"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
