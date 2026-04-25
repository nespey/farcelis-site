import Image from "next/image";

import { proofCards } from "@/lib/site-data";

export function ProofCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {proofCards.map((card) => (
        <article
          key={card.title}
          className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_48px_rgba(15,23,42,0.08)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:#9f412c]">
              Operating Signal
            </p>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              {card.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{card.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
