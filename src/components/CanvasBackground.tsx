"use client";

import { useEffect, useRef } from "react";

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let drawFrame = 0;
    let width = 0;
    let height = 0;
    let canvasHeight = 0;
    let pixelRatio = 1;

    const updateCanvasTransform = () => {
      canvas.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
      if (fieldRef.current) {
        fieldRef.current.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
      }
    };

    const draw = () => {
      drawFrame = 0;
      context.clearRect(0, 0, width, canvasHeight);
      updateCanvasTransform();
    };

    const queueDraw = () => {
      if (drawFrame) return;
      drawFrame = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      pixelRatio = 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvasHeight = height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(canvasHeight * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${canvasHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resize();
    draw();

    const handleScroll = () => {
      updateCanvasTransform();
    };

    const handleResize = () => {
      resize();
      queueDraw();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(drawFrame);
    };
  }, []);

  return (
    <>
      <div ref={fieldRef} aria-hidden="true" className="chaos-field-layer" />
      <canvas ref={canvasRef} aria-hidden="true" className="site-canvas-background" />
    </>
  );
}
