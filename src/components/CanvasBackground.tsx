"use client";

import { useEffect, useRef } from "react";

export function CanvasBackground() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateTransform = () => {
      frame = 0;
      if (fieldRef.current) {
        fieldRef.current.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
      }
    };

    const queueUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateTransform);
    };

    updateTransform();

    window.addEventListener("resize", queueUpdate);
    window.addEventListener("scroll", queueUpdate, { passive: true });

    return () => {
      window.removeEventListener("resize", queueUpdate);
      window.removeEventListener("scroll", queueUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={fieldRef} aria-hidden="true" className="chaos-field-layer" />;
}
