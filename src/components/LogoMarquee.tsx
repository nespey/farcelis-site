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
    const speed = 0.28;

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
    <div ref={trackRef} className="relative overflow-x-hidden">
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-20 ${
          dark
            ? "bg-gradient-to-r from-[#07111d] to-transparent"
            : "bg-gradient-to-r from-[#f2f5f8] to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-20 ${
          dark
            ? "bg-gradient-to-l from-[#07111d] to-transparent"
            : "bg-gradient-to-l from-[#f2f5f8] to-transparent"
        }`}
      />
      <div className="flex w-max gap-10 pr-12">
        {logos.map((logo, index) => {
          const height =
            index === 0 ? "h-[72px]" : index === 1 ? "h-[76px]" : index > 3 ? "h-[60px]" : "h-[66px]";
          const tone = index % 2 === 0 ? "bg-white/[0.05]" : "bg-white/[0.08]";
          const wrapper = dark
            ? `${tone} border-white/10`
            : "bg-white border-slate-900/8";

          const tile = (
            <div
              className={`logo-rail-tile flex min-h-36 min-w-[300px] items-center justify-center rounded-[26px] border px-10 py-8 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition-all duration-200 ${wrapper}`}
            >
              <div className={`relative w-full ${height}`}>
                {logo.logo ? (
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    sizes="300px"
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
  );
}
