import Link from "next/link";

import { services } from "@/lib/site-data";

export function ServiceCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {services.map((service) => (
        <article
          key={service.title}
          className="border border-slate-200 bg-white p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-lg text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              {service.title}
            </h3>
            <span className="border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Service
            </span>
          </div>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            {service.description}
          </p>
          <ul className="mt-6 grid gap-3 border-t border-slate-200 pt-5 text-sm text-slate-700 sm:grid-cols-2">
            {service.points.map((point) => (
              <li key={point} className="border-l border-slate-300 pl-4">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
            >
              Start a strategy call
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
