import Image from "next/image";

import { partners } from "@/lib/site-data";

type PartnerLogoGridProps = {
  compact?: boolean;
};

export function PartnerLogoGrid({ compact = false }: PartnerLogoGridProps) {
  return (
    <div
      className={`grid gap-4 ${
        compact ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-6" : "grid-cols-2 md:grid-cols-3"
      }`}
    >
      {partners.map((partner) => (
        <div
          key={partner.name}
          className={`flex min-h-20 items-center justify-center border px-5 py-5 ${
            compact
              ? "border-white/10 bg-transparent"
              : `shadow-[0_18px_42px_rgba(15,23,42,0.07)] transition hover:translate-y-[-1px] ${
                  partner.dark ? "border-slate-900 bg-slate-900" : "border-slate-200 bg-white"
                }`
          }`}
        >
          {partner.logo ? (
            <div className={`relative w-full ${compact ? "h-10" : "h-12"}`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes={compact ? "(max-width: 1280px) 33vw, 16vw" : "(max-width: 1024px) 50vw, 33vw"}
                className={compact ? "object-contain grayscale opacity-80" : "object-contain"}
              />
            </div>
          ) : (
            <span
              className={`text-center text-lg font-semibold tracking-[-0.02em] ${
                compact ? "text-white/72" : partner.dark ? "text-white" : "text-slate-900"
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
