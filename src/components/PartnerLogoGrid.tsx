"use client";

import Image from "next/image";

import { partners } from "@/lib/site-data";

type PartnerLogoGridProps = {
  compact?: boolean;
};

export function PartnerLogoGrid({ compact = false }: PartnerLogoGridProps) {
  const visiblePartners = compact ? partners.slice(0, 3) : partners.slice(0, 3);
  const loopedPartners = [...visiblePartners, ...visiblePartners];

  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {visiblePartners.map((partner) => (
          <div
            key={partner.name}
            className="logo-tile group flex min-h-28 items-center justify-center border border-white/8 bg-transparent px-8 py-8 transition-all duration-300"
          >
            {partner.logo ? (
              <div className="relative h-8 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="33vw"
                  className="object-contain grayscale contrast-125 opacity-82 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ) : (
              <span className="text-center text-lg font-semibold tracking-[-0.02em] text-white/72">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="logo-carousel group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#020617] to-transparent" />
      <div className="logo-carousel-track flex w-max gap-6 group-hover:[animation-play-state:paused]">
        {loopedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="logo-tile group/logo flex min-h-32 min-w-[280px] items-center justify-center border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,29,0.92),rgba(2,6,23,0.92))] px-8 py-8 shadow-[0_24px_60px_rgba(2,6,23,0.22)] transition-all duration-300"
          >
            {partner.logo ? (
              <div className="relative h-16 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="280px"
                  className="object-contain grayscale contrast-125 opacity-82 transition duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
                />
              </div>
            ) : (
              <span className="text-center text-lg font-semibold tracking-[-0.02em] text-white/72">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
