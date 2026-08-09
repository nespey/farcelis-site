import Image from "next/image";

import type { InsightArticle } from "@/lib/site-data";

type ArticleCoverProps = {
  article: InsightArticle;
  compact?: boolean;
};

const coverConfig = {
  funnel: {
    eyebrow: "Foundation audit",
    bg: "from-[#33130d] via-[#7f2e1e] to-[#f7c58c]",
    accent: "#f19a6b",
    pattern: "Friction Map",
  },
  benchmark: {
    eyebrow: "Benchmark watch",
    bg: "from-[#062232] via-[#114a66] to-[#9fe7f1]",
    accent: "#61c0d7",
    pattern: "Truth Table",
  },
  marketing: {
    eyebrow: "Signal flow",
    bg: "from-[#2d1016] via-[#7c2742] to-[#ffc2a3]",
    accent: "#f19a6b",
    pattern: "Campaign Loop",
  },
  executive: {
    eyebrow: "Board brief",
    bg: "from-[#07141d] via-[#173343] to-[#d9b06c]",
    accent: "#d9b06c",
    pattern: "Decision Room",
  },
  content: {
    eyebrow: "Editorial system",
    bg: "from-[#201042] via-[#4d3ba6] to-[#f3c1ff]",
    accent: "#b9a4ff",
    pattern: "Voice Engine",
  },
} satisfies Record<InsightArticle["visualKind"], { eyebrow: string; bg: string; accent: string; pattern: string }>;

export function ArticleCover({ article, compact = false }: ArticleCoverProps) {
  const config = coverConfig[article.visualKind];

  if (article.coverImage) {
    return (
      <div className={`relative overflow-hidden bg-slate-950 ${compact ? "min-h-[260px]" : "min-h-[460px]"}`}>
        <Image
          src={article.coverImage}
          alt={article.coverAlt ?? article.title}
          fill
          sizes={compact ? "(min-width: 1024px) 260px, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
          className="object-cover"
          priority={!compact}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,29,0.05),rgba(7,20,29,0.78))]" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f7d3bd]">
            {config.eyebrow}
          </p>
          <h3 className="mt-3 max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.06em] text-white">
            {config.pattern}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${config.bg} ${compact ? "min-h-[260px] p-6" : "min-h-[460px] p-8"}`}>
      <div className="absolute inset-0 opacity-45">
        <div className="absolute left-[-12%] top-[-12%] h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-[-18%] right-[-16%] h-80 w-80 rounded-full bg-black/30 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-25">
        {article.visualKind === "benchmark" ? (
          <div className="grid h-full grid-cols-5 gap-px p-6">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} className={index % 4 === 0 ? "bg-white/60" : "bg-white/16"} />
            ))}
          </div>
        ) : null}
        {article.visualKind === "marketing" ? (
          <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 items-end gap-3">
            {[54, 72, 38, 86, 62, 94].map((height) => (
              <span key={height} className="flex-1 rounded-t-full bg-white/50" style={{ height }} />
            ))}
          </div>
        ) : null}
        {article.visualKind === "executive" ? (
          <div className="absolute inset-8 grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className="rounded-[24px] border border-white/40 bg-white/10" />
            ))}
          </div>
        ) : null}
        {article.visualKind === "content" ? (
          <div className="absolute inset-8 flex flex-col justify-center gap-4">
            {[92, 74, 86, 58, 78].map((width) => (
              <span key={width} className="h-4 rounded-full bg-white/50" style={{ width: `${width}%` }} />
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {config.eyebrow}
          </p>
          <h3 className="mt-4 max-w-[420px] text-3xl font-semibold leading-tight tracking-[-0.06em] text-white">
            {config.pattern}
          </h3>
        </div>

        <div className="grid gap-3">
          {article.visualMetrics.slice(0, 4).map((metric) => (
            <div key={metric} className="flex items-center justify-between rounded-full border border-white/18 bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
              <span>{metric}</span>
              <span className="h-2 w-10 rounded-full" style={{ backgroundColor: config.accent }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
