import { proofCards } from "@/lib/site-data";

export function ProofCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {proofCards.map((card) => (
        <article key={card.title} className="border-l border-white/16 pl-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/44">
            Operating Signal
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            {card.title}
          </h3>
          <p className="mt-4 max-w-sm text-[17px] leading-8 text-white/72">{card.body}</p>
        </article>
      ))}
    </div>
  );
}
