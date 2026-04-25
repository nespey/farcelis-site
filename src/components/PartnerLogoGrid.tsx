import Image from "next/image";

import { partners } from "@/lib/site-data";

type PartnerLogoGridProps = {
  compact?: boolean;
};

export function PartnerLogoGrid({ compact = false }: PartnerLogoGridProps) {
  const visiblePartners = compact ? partners.slice(0, 4) : partners.slice(0, 4);

  return (
    <div
      className={`grid gap-4 ${
        compact ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 gap-y-6 md:grid-cols-4"
      }`}
    >
      {visiblePartners.map((partner) => (
        <div
          key={partner.name}
          className={`flex min-h-24 items-center justify-center border px-6 py-6 ${
            compact
              ? "border-white/10 bg-transparent"
              : `shadow-[0_18px_42px_rgba(15,23,42,0.07)] transition hover:translate-y-[-1px] ${
                  partner.dark ? "border-slate-800 bg-slate-950" : "border-slate-300 bg-slate-950"
                }`
          }`}
        >
          {partner.logo ? (
            <div className={`relative w-full ${compact ? "h-10" : "h-14"}`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes={compact ? "(max-width: 1280px) 33vw, 16vw" : "(max-width: 1024px) 50vw, 33vw"}
                className="object-contain grayscale opacity-80"
              />
            </div>
          ) : (
            <span
              className={`text-center text-lg font-semibold tracking-[-0.02em] ${
                compact ? "text-white/72" : "text-white/72"
              }`}
            >
              {partner.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
