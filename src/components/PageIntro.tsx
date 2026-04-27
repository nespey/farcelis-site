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
      <div className="vibrant-orbit absolute left-[10%] top-[12%] h-56 w-56 bg-[radial-gradient(circle,rgba(242,139,91,0.2),transparent_68%)]" />
      <div className="vibrant-orbit absolute right-[14%] top-[16%] h-64 w-64 bg-[radial-gradient(circle,rgba(97,192,215,0.18),transparent_70%)]" />
      <div className="vibrant-orbit absolute right-[32%] top-[32%] h-48 w-48 bg-[radial-gradient(circle,rgba(141,119,255,0.12),transparent_70%)]" />
      <div className="section-inner relative grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.22fr)] lg:items-end">
        <div className="text-center">
          <p className="eyebrow text-[color:var(--color-accent)]">{eyebrow}</p>
          <h1 className="display-page mt-5 text-white">{title}</h1>
          <p className="lede mt-6 max-w-[720px]">{description}</p>
          {actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "site-cta inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-200/6 px-6 py-3 text-sm font-semibold text-cyan-50 hover:border-cyan-100/28 hover:bg-cyan-100/8 hover:shadow-[0_18px_34px_rgba(46,125,164,0.24)]"
                      : "site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_20px_40px_rgba(240,92,255,0.24)]"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {asideTitle || asideItems.length > 0 ? (
          <aside className="surface-dark relative rounded-[28px] bg-[linear-gradient(180deg,rgba(97,192,215,0.08),rgba(255,255,255,0.03)),linear-gradient(135deg,rgba(141,119,255,0.08),transparent_45%)] px-6 py-7 text-center">
            {asideTitle ? (
              <p className="eyebrow text-[color:var(--color-accent)]">{asideTitle}</p>
            ) : null}
            <div className="mt-5 space-y-4">
              {asideItems.map((item) => (
                <div
                  key={item}
                  className="text-sm leading-7 text-slate-300"
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
