import Image from "next/image";

import { partners } from "@/lib/site-data";

type PartnerLogoGridProps = {
  compact?: boolean;
};

export function PartnerLogoGrid({ compact = false }: PartnerLogoGridProps) {
  const visiblePartners = compact ? partners.slice(0, 3) : partners.slice(0, 3);

  return (
    <div
      className={`grid gap-4 ${
        compact ? "grid-cols-3" : "grid-cols-1 gap-y-6 md:grid-cols-3"
      }`}
    >
      {visiblePartners.map((partner) => (
        <div
          key={partner.name}
          className={`flex min-h-28 items-center justify-center border px-8 py-8 ${
            compact
              ? "border-white/8 bg-transparent"
              : "border-white/10 bg-[linear-gradient(180deg,rgba(9,17,29,0.92),rgba(2,6,23,0.92))] shadow-[0_24px_60px_rgba(2,6,23,0.22)]"
          }`}
        >
          {partner.logo ? (
            <div className={`relative w-full ${compact ? "h-8" : "h-16"}`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes={compact ? "33vw" : "(max-width: 1024px) 100vw, 33vw"}
                className="object-contain grayscale contrast-125 opacity-82"
              />
            </div>
          ) : (
            <span
              className="text-center text-lg font-semibold tracking-[-0.02em] text-white/72"
            >
              {partner.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
