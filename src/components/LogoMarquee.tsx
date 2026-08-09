"use client";

import Image from "next/image";
import Link from "next/link";

import type { Partner } from "@/lib/site-data";

type LogoMarqueeProps = {
  logos: Partner[];
  dark?: boolean;
  bare?: boolean;
};

const bareLogoFrame: Record<string, string> = {
  "4Throws": "h-[54px] w-[128px]",
  "Eagle": "h-[78px] w-[66px]",
  "GenX Alliance": "h-[82px] w-[72px]",
  "K2 Renew": "h-[68px] w-[96px]",
  "NexAlign": "h-[84px] w-[56px]",
  "Paragon Cyber Solutions": "h-[44px] w-[150px]",
  "Soltaic": "h-[40px] w-[138px]",
  "Upwork": "h-[42px] w-[138px]",
};

const defaultBareLogoFrame = "h-[72px] w-[132px]";

export function LogoMarquee({ logos, dark = true, bare = false }: LogoMarqueeProps) {
  const renderLogos = bare
    ? [...logos, ...logos, ...logos, ...logos]
    : [...logos, ...logos];

  return (
    <div
      className={`${bare ? "relative overflow-hidden py-2" : `logo-marquee-shell ${dark ? "" : "light"} p-4 sm:p-5`}`}
    >
      {!bare ? (
        <>
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 ${
              dark
                ? "bg-gradient-to-r from-[#06111b] to-transparent"
                : "bg-gradient-to-r from-[#f8fafc] to-transparent"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 ${
              dark
                ? "bg-gradient-to-l from-[#06111b] to-transparent"
                : "bg-gradient-to-l from-[#f8fafc] to-transparent"
            }`}
          />
        </>
      ) : null}

      <div className="logo-marquee-viewport relative overflow-hidden">
        <div className={`logo-marquee-track flex w-max ${bare ? "gap-7 pr-7" : "gap-10 pr-10"}`}>
          {renderLogos.map((logo, index) => {
            const key = `${logo.name}-${index}`;
            const base = dark
              ? "border-white/8 bg-white/[0.04]"
              : index % 2 === 0
                ? "border-slate-200/80 bg-white/92"
                : "border-slate-200/80 bg-slate-50/92";

            const tile = (
              <div
                className={`logo-rail-tile hover-lift flex items-center justify-center ${
                  bare
                    ? "min-h-[112px] min-w-[188px] px-0 py-3"
                    : `min-h-[122px] min-w-[248px] rounded-[24px] border px-8 py-7 ${base}`
                }`}
              >
                <div className={`relative ${bare ? (bareLogoFrame[logo.name] ?? defaultBareLogoFrame) : "h-[52px] w-full"}`}>
                  {logo.logo ? (
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      fill
                      sizes={bare ? "190px" : "220px"}
                      className={`object-contain transition duration-200 ${
                        bare ? "drop-shadow-[0_14px_22px_rgba(3,8,16,0.2)]" : ""
                      }`}
                    />
                  ) : null}
                </div>
              </div>
            );

            return logo.href ? (
              <Link key={key} href={logo.href} className="shrink-0" target="_blank" rel="noopener noreferrer">
                {tile}
              </Link>
            ) : (
              <div key={key} className="shrink-0">
                {tile}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
