import { controlLayerCards } from "@/lib/site-data";

export function ControlLayerCards() {
  return (
    <div className="grid gap-4">
      {controlLayerCards.map((card, index) => (
        <div
          key={card.title}
          className={`border p-5 shadow-[0_18px_42px_rgba(15,23,42,0.08)] ${
            index === 2
              ? "border-slate-950 bg-slate-950 text-white"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="text-sm font-semibold tracking-[0.03em]">{card.title}</div>
          <div className="mt-4 space-y-2 text-sm leading-6">
            {card.lines.map((line) => (
              <div
                key={line}
                className={
                  index === 2
                    ? "text-slate-100/88"
                    : "text-slate-600"
                }
              >
                {line}
              </div>
            ))}
          </div>
          <div
            className={`mt-4 border-t pt-4 text-xs uppercase tracking-[0.16em] ${
              index === 2
                ? "border-white/10 text-slate-300"
                : "border-slate-200 text-slate-500"
            }`}
          >
            {card.footer}
          </div>
        </div>
      ))}
    </div>
  );
}
