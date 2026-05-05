import type { CSSProperties } from "react";

import type { InsightArticle } from "@/lib/site-data";

type InsightVisualProps = {
  kind: InsightArticle["visualKind"];
  label: string;
  metrics: string[];
  compact?: boolean;
};

const palette = {
  funnel: {
    bg: "from-[#fff7ed] via-[#eef8fb] to-white",
    accent: "#c75d33",
    secondary: "#2e7da4",
  },
  benchmark: {
    bg: "from-[#eef8fb] via-white to-[#f6f3ff]",
    accent: "#2e7da4",
    secondary: "#7c5cff",
  },
  marketing: {
    bg: "from-[#fff4ef] via-white to-[#eef8fb]",
    accent: "#9f412c",
    secondary: "#61c0d7",
  },
  executive: {
    bg: "from-[#eef8fb] via-[#fffaf4] to-white",
    accent: "#173343",
    secondary: "#c75d33",
  },
  content: {
    bg: "from-[#f7fbff] via-white to-[#fff7ef]",
    accent: "#6f5bd5",
    secondary: "#c75d33",
  },
} satisfies Record<InsightArticle["visualKind"], { bg: string; accent: string; secondary: string }>;

export function InsightVisual({ kind, label, metrics, compact = false }: InsightVisualProps) {
  const tone = palette[kind];
  const first = metrics.slice(0, compact ? 4 : 5);

  return (
    <div
      className={`relative overflow-hidden bg-[linear-gradient(135deg,var(--visual-start),var(--visual-mid),var(--visual-end))] ${compact ? "min-h-[220px] p-5" : "min-h-[420px] p-7"}`}
      style={
        {
          "--visual-start": tone.bg.includes("fff7ed") || tone.bg.includes("fff4ef") || tone.bg.includes("fff7ef") ? "#fff7ef" : "#eef8fb",
          "--visual-mid": "#ffffff",
          "--visual-end": tone.bg.includes("f6f3ff") ? "#f6f3ff" : "#eef8fb",
          "--visual-accent": tone.accent,
          "--visual-secondary": tone.secondary,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[-18%] top-[-20%] h-64 w-64 rounded-full bg-[color:var(--visual-secondary)]/18 blur-3xl" />
        <div className="absolute bottom-[-22%] right-[-18%] h-72 w-72 rounded-full bg-[color:var(--visual-accent)]/14 blur-3xl" />
      </div>

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--visual-accent)]">
              Farcelis visual brief
            </p>
            <h3 className={`${compact ? "mt-3 text-xl" : "mt-4 text-3xl"} font-semibold leading-tight tracking-[-0.055em] text-slate-950`}>
              {label}
            </h3>
          </div>
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[18px] border border-slate-200 bg-white/75 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
            <span className="h-4 w-4 rounded-full bg-[color:var(--visual-accent)] shadow-[0_0_0_10px_rgba(199,93,51,0.1)]" />
          </div>
        </div>

        <div className={`${compact ? "mt-8" : "mt-12"} grid gap-3`}>
          {first.map((metric, index) => (
            <div key={metric} className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {metric}
              </span>
              <span className="h-3 overflow-hidden rounded-full bg-slate-200/80">
                <span
                  className="block h-full rounded-full bg-[linear-gradient(90deg,var(--visual-accent),var(--visual-secondary))]"
                  style={{ width: `${52 + index * 9}%` }}
                />
              </span>
            </div>
          ))}
        </div>

        <div className={`${compact ? "mt-7" : "mt-12"} grid grid-cols-3 gap-3`}>
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="min-h-20 rounded-[20px] border border-white bg-white/70 p-3 shadow-[0_14px_28px_rgba(15,23,42,0.07)]"
            >
              <div className="h-2 w-10 rounded-full bg-[color:var(--visual-accent)]/65" />
              <div className="mt-4 h-2 rounded-full bg-slate-300/70" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
