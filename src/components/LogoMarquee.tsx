"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import type { Partner } from "@/lib/site-data";

type LogoMarqueeProps = {
  logos: Partner[];
  dark?: boolean;
};

export function LogoMarquee({ logos, dark = true }: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    let paused = false;
    const speed = 0.3;

    const tick = () => {
      if (!paused) {
        const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
        el.scrollLeft = el.scrollLeft >= maxScroll - 1 ? 0 : el.scrollLeft + speed;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className={`logo-marquee-shell ${dark ? "" : "light"} p-4 sm:p-5`}>
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

      <div ref={trackRef} className="relative overflow-x-hidden">
        <div className="flex w-max gap-7 pr-10">
        {logos.map((logo, index) => {
          const base = dark
            ? "border-white/8 bg-white/[0.04]"
            : index % 2 === 0
              ? "border-slate-200/80 bg-white/92"
              : "border-slate-200/80 bg-slate-50/92";

          const tile = (
            <div
              className={`logo-rail-tile hover-lift flex min-h-[122px] min-w-[248px] items-center justify-center rounded-[24px] border px-8 py-7 ${base}`}
            >
              <div className="relative h-[52px] w-full">
                {logo.logo ? (
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    sizes="220px"
                    className="object-contain"
                  />
                ) : null}
              </div>
            </div>
          );

          return logo.href ? (
            <Link key={logo.name} href={logo.href} className="shrink-0" target="_blank">
              {tile}
            </Link>
          ) : (
            <div key={logo.name} className="shrink-0">
              {tile}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
