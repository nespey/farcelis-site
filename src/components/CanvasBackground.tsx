"use client";

import { useEffect, useRef } from "react";

const palette = [
  "rgba(97, 192, 215, 0.22)",
  "rgba(242, 139, 91, 0.16)",
  "rgba(232, 238, 242, 0.12)",
];

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

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawCurve = (lineIndex: number, time: number) => {
      const diagonalLength = width + height;
      const spacing = Math.max(74, Math.min(width, height) * 0.12);
      const offset = (lineIndex - 5) * spacing;
      const amplitude = 18 + (lineIndex % 4) * 5;
      const frequency = 0.009 + (lineIndex % 3) * 0.0015;
      const phase = time * (0.00016 + lineIndex * 0.000006) + lineIndex * 0.72;
      const steps = 96;

      context.beginPath();

      for (let step = 0; step <= steps; step += 1) {
        const progress = step / steps;
        const baseX = progress * diagonalLength - height * 0.16;
        const baseY = progress * diagonalLength * 0.58 - width * 0.08;
        const wave =
          Math.sin(progress * diagonalLength * frequency + phase) * amplitude +
          Math.sin(progress * diagonalLength * frequency * 0.42 - phase * 1.34) * amplitude * 0.42;
        const x = baseX - wave * 0.42;
        const y = baseY + offset + wave;

        if (step === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }

      context.strokeStyle = palette[lineIndex % palette.length]!;
      context.lineWidth = lineIndex % 5 === 0 ? 1.4 : 0.9;
      context.globalAlpha = 0.34;
      context.stroke();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      for (let lineIndex = 0; lineIndex < 13; lineIndex += 1) {
        drawCurve(lineIndex, reducedMotion ? 0 : time);
      }

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="site-canvas-background" />;
}
