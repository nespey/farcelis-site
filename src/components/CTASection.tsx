import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(244,238,230,0.98))] px-6 py-10 shadow-[0_28px_70px_rgba(15,23,42,0.09)] sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:#9f412c]">
              Next Step
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(126,31,13,0.26)] transition hover:translate-y-[-1px]"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

