"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const foundationWords = [
  "AI Consulting",
  "Operational System Design",
  "Workflow Architecture",
  "Execution Systems",
];

export function HeroBrandVisual() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhase((current) => (current + 1) % 6);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const stackComplete = phase >= 3;
  const scatter = phase === 5;

  return (
    <div className="relative min-h-[520px] px-4 py-4 lg:px-0">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_28%,rgba(106,181,214,0.2),transparent_24%),radial-gradient(circle_at_48%_68%,rgba(255,214,160,0.18),transparent_20%)]" />
      </div>

      <div className="relative h-full min-h-[456px]">
        <div className="absolute left-1/2 top-[14%] h-[290px] w-[290px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,220,160,0.18),transparent_70%)] blur-3xl" />

        <div className="absolute left-[8%] top-[16%] flex w-[124px] flex-col gap-3">
          {[...Array(5)].map((_, index) => (
            <div
              key={`spark-left-${index}`}
              className="h-2 w-2 rounded-full bg-[rgba(255,220,160,0.82)] shadow-[0_0_18px_rgba(255,220,160,0.55)]"
              style={{
                transform: `translate(${index * 14}px, ${index * 18}px)`,
                opacity: phase === 3 || phase === 4 ? 0.95 : 0.45,
                transition: "opacity 420ms ease",
              }}
            />
          ))}
        </div>

        <div className="absolute right-[12%] top-[18%] flex w-[112px] flex-col gap-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={`spark-right-${index}`}
              className="ml-auto h-2 w-2 rounded-full bg-[rgba(106,181,214,0.86)] shadow-[0_0_18px_rgba(106,181,214,0.5)]"
              style={{
                transform: `translate(${-index * 12}px, ${index * 18}px)`,
                opacity: phase === 3 || phase === 4 ? 0.95 : 0.42,
                transition: "opacity 420ms ease",
              }}
            />
          ))}
        </div>

        <div className="absolute left-1/2 top-[8%] h-[290px] w-[440px] -translate-x-1/2">
          <Image
            src="/logos/tree.png"
            alt="Farcelis systems tree"
            fill
            sizes="440px"
            className="object-contain opacity-95"
            priority
          />
        </div>

        <div
          className="absolute left-1/2 top-[37%] h-[118px] w-[118px] -translate-x-1/2 transition duration-500 ease-out"
          style={{
            transform: scatter
              ? "translate(-50%, -12px) scale(1.15)"
              : stackComplete
                ? "translate(-50%, 24px) scale(1)"
                : "translate(-50%, -26px) scale(0.92)",
            opacity: stackComplete ? 1 : 0.88,
          }}
        >
          <Image
            src={stackComplete ? "/logos/3d-red-badge.png" : "/logos/gold-badge.png"}
            alt="Farcelis badge"
            fill
            sizes="118px"
            className={`object-contain drop-shadow-[0_18px_26px_rgba(0,0,0,0.35)] ${stackComplete ? "brightness-[1.08]" : "brightness-[1.02]"}`}
          />
        </div>

        <div className="absolute bottom-[9%] left-1/2 flex w-[88%] -translate-x-1/2 flex-col items-center gap-3">
          {foundationWords.map((word, index) => {
            const visible = index <= phase || stackComplete;
            return (
              <div
                key={word}
                className="rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(97,192,215,0.12),rgba(255,214,160,0.1))] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-slate-100 shadow-[0_14px_28px_rgba(3,8,16,0.22)]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: scatter
                    ? `translate(${(index - 1.5) * 36}px, ${index * -10}px) scale(0.94)`
                    : `translateY(${visible ? 0 : 12}px)`,
                  transition: `opacity 320ms ease ${index * 80}ms, transform 420ms ease ${index * 80}ms`,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
