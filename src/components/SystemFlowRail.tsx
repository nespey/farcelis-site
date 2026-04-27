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
    }, 1700);

    return () => window.clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative">
      <div
        className={`absolute left-0 right-0 top-3 h-px ${
          light ? "bg-slate-300" : "bg-white/10"
        }`}
      />
      <div
        className="absolute top-[8px] h-[6px] rounded-full bg-[linear-gradient(90deg,rgba(214,140,106,0),rgba(214,140,106,0.8),rgba(214,140,106,0))] transition-all duration-700"
        style={{
          left: `calc(${(activeIndex / steps.length) * 100}% + 2px)`,
          width: `calc(${100 / steps.length}% - 14px)`,
        }}
      />
      <div className="grid gap-4 md:grid-cols-6">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={step} className="relative pt-6 text-center">
              <div
                className={`mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-500 ${
                  isActive
                    ? light
                      ? "border-[#9f412c] bg-[#9f412c] text-white shadow-[0_0_24px_rgba(159,65,44,0.18)]"
                      : "border-[#d68c6a] bg-[#d68c6a] text-[#08111c] shadow-[0_0_24px_rgba(214,140,106,0.24)]"
                    : light
                      ? "border-slate-300 bg-white text-slate-500"
                      : "border-white/12 bg-[#0c1624] text-white/60"
                }`}
              >
                {index + 1}
              </div>
              <div
                className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  light ? "text-slate-500" : "text-white/40"
                }`}
              >
                Phase
              </div>
              <div
                className={`mt-2 text-[1.05rem] font-semibold tracking-[-0.03em] ${
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
