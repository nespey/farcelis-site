"use client";

import { useEffect, useState } from "react";

type SystemFlowRailProps = {
  steps: string[];
  light?: boolean;
};

export function SystemFlowRail({ steps, light = false }: SystemFlowRailProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative">
      <div
        className={`absolute left-0 right-0 top-[18px] h-px ${
          light ? "bg-slate-300" : "bg-white/12"
        }`}
      />
      <div className="grid gap-5 md:grid-cols-6">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={step} className="relative">
              <div
                className={`mb-5 h-9 w-9 rounded-full border text-sm font-semibold transition-all duration-500 ${
                  isActive
                    ? light
                      ? "border-[#9f412c] bg-[#9f412c] text-white shadow-[0_0_24px_rgba(159,65,44,0.22)]"
                      : "border-[#d68c6a] bg-[#d68c6a] text-[#08111c] shadow-[0_0_24px_rgba(214,140,106,0.28)]"
                    : light
                      ? "border-slate-300 bg-white text-slate-500"
                      : "border-white/14 bg-[#0d1726] text-white/56"
                } flex items-center justify-center`}
              >
                {index + 1}
              </div>
              <div
                className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                  light ? "text-slate-500" : "text-white/38"
                }`}
              >
                Phase
              </div>
              <div
                className={`mt-3 text-lg font-semibold tracking-[-0.03em] ${
                  light ? "text-slate-950" : "text-white"
                }`}
              >
                {step}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
