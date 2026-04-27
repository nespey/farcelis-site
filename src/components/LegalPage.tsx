import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: ReactNode }>;
}) {
  return (
    <section className="section-shell section-shell-light">
      <div className="section-inner">
        <div className="max-w-[880px]">
          <p className="eyebrow text-[#9f412c]">{eyebrow}</p>
          <h1 className="display-page mt-5 text-slate-950">{title}</h1>
          <p className="mt-6 text-base leading-8 text-slate-600">{intro}</p>
        </div>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-[26px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-slate-950">
                {section.heading}
              </h2>
              <div className="mt-4 text-base leading-8 text-slate-600">{section.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
