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
    }, 1900);

    return () => window.clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="system-flow-rail relative overflow-x-auto py-0.5">
      <div
        className={`absolute left-0 right-0 top-1/2 h-px min-w-[680px] -translate-y-1/2 ${
          light ? "bg-slate-300" : "bg-white/10"
        }`}
      />
      <div
        className="absolute top-1/2 h-[2px] min-w-[680px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(214,140,106,0),rgba(255,168,117,0.98),rgba(214,140,106,0))] shadow-[0_0_16px_rgba(242,139,91,0.65)] transition-all duration-700"
        style={{
          left: `calc(${((activeIndex + 0.5) / steps.length) * 100}% - 32px)`,
          width: "64px",
        }}
      />
      <div className="relative grid min-w-[680px] grid-cols-6 gap-3">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={step} className="relative flex min-h-10 items-center justify-center text-center">
              <div
                className={`relative z-10 px-2 py-1 text-[0.92rem] font-semibold tracking-[-0.02em] transition-all duration-500 ${
                  isActive
                    ? light
                      ? "text-[#9f412c] drop-shadow-[0_0_14px_rgba(159,65,44,0.2)]"
                      : "text-[#ffae80] drop-shadow-[0_0_12px_rgba(242,139,91,0.72)]"
                    : light
                      ? "text-slate-500"
                      : "text-white/62"
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
