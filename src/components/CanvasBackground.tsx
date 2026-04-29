"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const drawCableGuide = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  scrollY: number,
) => {
  if (scrollY > height * 0.85) return;

  const fade = 1 - clamp(scrollY / (height * 0.85), 0, 1);
  const accent = context.createLinearGradient(width * 0.04, 0, width, height * 0.7);
  accent.addColorStop(0, "rgba(124, 218, 236, 0.08)");
  accent.addColorStop(0.52, "rgba(255, 143, 92, 0.1)");
  accent.addColorStop(1, "rgba(232, 242, 248, 0.06)");

  context.save();
  context.globalAlpha = fade;
  context.globalCompositeOperation = "screen";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = accent;
  context.lineWidth = width < 768 ? 42 : 86;
  context.shadowColor = "rgba(255, 143, 92, 0.08)";
  context.shadowBlur = 18;
  context.beginPath();
  context.moveTo(-width * 0.14, -height * 0.1);
  context.bezierCurveTo(width * 0.22, -height * 0.02, width * 0.72, height * 0.04, width * 0.86, height * 0.38);
  context.bezierCurveTo(width * 0.94, height * 0.58, width * 0.96, height * 0.72, width * 1.15, height * 0.94);
  context.stroke();
  context.restore();
};

const buildPulsePoints = (width: number, height: number): Point[] => [
  { x: -width * 0.12, y: -height * 0.08 },
  { x: width * 0.2, y: -height * 0.01 },
  { x: width * 0.62, y: height * 0.04 },
  { x: width * 0.84, y: height * 0.35 },
  { x: width * 0.95, y: height * 0.72 },
  { x: width * 1.12, y: height * 0.92 },
];

const drawPulse = (
  context: CanvasRenderingContext2D,
  points: Point[],
  time: number,
  width: number,
  height: number,
  scrollY: number,
) => {
  if (scrollY > height * 0.85) return;

  const fade = 1 - clamp(scrollY / (height * 0.85), 0, 1);
  const phase = ((time * 0.00008) % 1) * points.length;
  const segmentIndex = Math.min(points.length - 2, Math.floor(phase));
  const local = phase - segmentIndex;
  const start = points[segmentIndex]!;
  const end = points[segmentIndex + 1]!;
  const x = start.x + (end.x - start.x) * local;
  const y = start.y + (end.y - start.y) * local - scrollY;

  context.save();
  context.globalCompositeOperation = "screen";
  context.globalAlpha = 0.24 * fade;
  const gradient = context.createRadialGradient(x, y, 0, x, y, width < 768 ? 42 : 68);
  gradient.addColorStop(0, "rgba(255, 168, 114, 0.5)");
  gradient.addColorStop(0.36, "rgba(118, 218, 236, 0.18)");
  gradient.addColorStop(1, "rgba(118, 218, 236, 0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(x, y, width < 768 ? 42 : 68, 0, Math.PI * 2);
  context.fill();
  context.restore();
};

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let pulsePoints: Point[] = [];

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      pulsePoints = buildPulsePoints(width, height);
    };

    const draw = (time = 0, scheduleNextFrame = true) => {
      const scrollY = window.scrollY;
      context.clearRect(0, 0, width, height);
      drawCableGuide(context, width, height, scrollY);
      if (!reducedMotion) {
        drawPulse(context, pulsePoints, time, width, height, scrollY);
      }

      if (!reducedMotion && scheduleNextFrame) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const handleScroll = () => draw(performance.now(), false);

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="site-canvas-background" />;
}
