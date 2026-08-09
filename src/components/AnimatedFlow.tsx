"use client";

import { useEffect, useState } from "react";

type AnimatedFlowProps = {
  steps: string[];
};

export function AnimatedFlow({ steps }: AnimatedFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 1600);

    return () => window.clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="mt-14 overflow-x-auto pb-2">
      <div className="flex min-w-max items-center gap-4 lg:gap-7">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <div key={step} className="flex items-center gap-4 lg:gap-7">
              <div
                className={`flow-step bg-white/6 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-sm transition-all duration-500 ${
                  isActive ? "flow-step-active" : isCompleted ? "flow-step-complete" : ""
                }`}
              >
                {step}
              </div>
              {index < steps.length - 1 ? (
                <div
                  className={`flow-connector h-px w-10 bg-gradient-to-r from-white/10 via-[color:#d9a08b] to-white/10 transition-opacity duration-500 lg:w-20 ${
                    isCompleted ? "opacity-100" : "opacity-45"
                  }`}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
