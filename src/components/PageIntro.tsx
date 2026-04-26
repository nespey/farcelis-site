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
  asideTitle?: string;
  asideItems?: string[];
  compact?: boolean;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions = [],
  asideTitle,
  asideItems = [],
  compact = false,
}: PageIntroProps) {
  return (
    <section className={`section-shell section-shell-dark overflow-hidden ${compact ? "pt-16 lg:pt-20" : "pt-20 lg:pt-24"}`}>
      <div className="pointer-events-none absolute inset-0 subtle-grid" />
      <div className="pointer-events-none absolute left-[12%] top-[14%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(214,140,106,0.12),transparent_68%)] blur-3xl" />
      <div className="section-inner relative grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.22fr)] lg:items-end">
        <div>
          <p className="eyebrow text-[color:var(--color-accent)]">{eyebrow}</p>
          <h1 className="display-page mt-5 text-white">{title}</h1>
          <p className="lede mt-6 max-w-[720px]">{description}</p>
          {actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white hover:border-white/24 hover:bg-white/8 hover:shadow-[0_18px_34px_rgba(8,18,29,0.24)]"
                      : "site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(159,65,44,0.3)]"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {asideTitle || asideItems.length > 0 ? (
          <aside className="surface-dark relative rounded-[28px] px-6 py-7">
            {asideTitle ? (
              <p className="eyebrow text-[color:var(--color-accent)]">{asideTitle}</p>
            ) : null}
            <div className="mt-5 space-y-4">
              {asideItems.map((item) => (
                <div
                  key={item}
                  className="border-l border-white/12 pl-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
