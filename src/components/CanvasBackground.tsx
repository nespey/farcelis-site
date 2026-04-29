"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type FlowPath = {
  color: string;
  points: Point[];
  samples: Point[];
  length: number;
  width: number;
  alpha: number;
  speed: number;
  phase: number;
};

const palette = [
  "rgba(118, 218, 238, 1)",
  "rgba(255, 154, 102, 1)",
  "rgba(232, 240, 246, 1)",
];

const interpolate = (a: Point, b: Point, progress: number): Point => ({
  x: a.x + (b.x - a.x) * progress,
  y: a.y + (b.y - a.y) * progress,
});

const catmullRomPoint = (previous: Point, start: Point, end: Point, next: Point, progress: number): Point => {
  const t = progress;
  const t2 = t * t;
  const t3 = t2 * t;

  return {
    x:
      0.5 *
      (2 * start.x +
        (-previous.x + end.x) * t +
        (2 * previous.x - 5 * start.x + 4 * end.x - next.x) * t2 +
        (-previous.x + 3 * start.x - 3 * end.x + next.x) * t3),
    y:
      0.5 *
      (2 * start.y +
        (-previous.y + end.y) * t +
        (2 * previous.y - 5 * start.y + 4 * end.y - next.y) * t2 +
        (-previous.y + 3 * start.y - 3 * end.y + next.y) * t3),
  };
};

const distance = (a: Point, b: Point) => Math.hypot(b.x - a.x, b.y - a.y);

const getVirtualHeight = (viewportHeight: number) => {
  const documentHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight,
    viewportHeight,
  );

  return Math.max(documentHeight + viewportHeight * 0.75, viewportHeight * 2.6);
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const buildSpinePoints = (width: number, viewportHeight: number, virtualHeight: number) => {
  const points: Point[] = [];
  let y = viewportHeight * 0.18;
  let sweepRight = true;
  let sweepIndex = 0;

  while (y < virtualHeight + viewportHeight * 0.7) {
    const offscreenDepth = width * (0.24 + (sweepIndex % 3) * 0.035);
    const verticalVariance = Math.sin(sweepIndex * 1.37) * viewportHeight * 0.045;
    points.push({
      x: sweepRight ? -offscreenDepth : width + offscreenDepth,
      y: y + verticalVariance,
    });

    y += viewportHeight * (sweepIndex === 0 ? 0.46 : 0.58 + (sweepIndex % 3) * 0.045);
    sweepRight = !sweepRight;
    sweepIndex += 1;
  }

  const samples: Point[] = [];

  for (let pointIndex = 0; pointIndex < points.length - 1; pointIndex += 1) {
    const previous = points[Math.max(0, pointIndex - 1)]!;
    const start = points[pointIndex]!;
    const end = points[pointIndex + 1]!;
    const next = points[Math.min(points.length - 1, pointIndex + 2)]!;

    for (let step = 0; step <= 40; step += 1) {
      if (pointIndex > 0 && step === 0) continue;
      samples.push(catmullRomPoint(previous, start, end, next, step / 40));
    }
  }

  return { points, samples };
};

const normalAt = (samples: Point[], index: number): Point => {
  const previous = samples[Math.max(0, index - 1)]!;
  const next = samples[Math.min(samples.length - 1, index + 1)]!;
  const dx = next.x - previous.x;
  const dy = next.y - previous.y;
  const length = Math.hypot(dx, dy) || 1;

  return { x: -dy / length, y: dx / length };
};

const buildPath = (
  pathIndex: number,
  pathCount: number,
  width: number,
  viewportHeight: number,
  virtualHeight: number,
  spineSamples: Point[],
): FlowPath => {
  const centerIndex = (pathCount - 1) / 2;
  const strandPosition = pathIndex - centerIndex;
  const normalizedPosition = centerIndex === 0 ? 0 : strandPosition / centerIndex;
  const topSpread = viewportHeight * (0.09 + (pathIndex % 3) * 0.012);
  const lowerSpread = viewportHeight * 0.022;
  const phase = pathIndex * 0.71;
  const samples = spineSamples.map((point, sampleIndex) => {
    const progress = clamp((point.y + viewportHeight * 0.2) / virtualHeight, 0, 1);
    const convergence = 1 - progress * 0.78;
    const spread = lowerSpread + topSpread * convergence;
    const normal = normalAt(spineSamples, sampleIndex);
    const microDrift =
      Math.sin(sampleIndex * 0.085 + phase) * viewportHeight * 0.008 * convergence +
      Math.cos(sampleIndex * 0.037 + phase * 1.4) * width * 0.0035 * convergence;
    const offset = normalizedPosition * spread + microDrift;

    return {
      x: point.x + normal.x * offset,
      y: point.y + normal.y * offset,
    };
  });

  let length = 0;
  for (let index = 1; index < samples.length; index += 1) {
    length += distance(samples[index - 1]!, samples[index]!);
  }

  return {
    color: palette[pathIndex % palette.length]!,
    points: samples,
    samples,
    length,
    width: pathIndex % 4 === 0 ? 1.85 : pathIndex % 3 === 0 ? 1.55 : 1.28,
    alpha: pathIndex % 4 === 0 ? 0.24 : 0.16,
    speed: 0.017 + pathIndex * 0.0015,
    phase: pathIndex * 0.091,
  };
};

const pointAtDistance = (samples: Point[], targetDistance: number): Point => {
  let traveled = 0;

  for (let index = 1; index < samples.length; index += 1) {
    const previous = samples[index - 1]!;
    const current = samples[index]!;
    const segmentLength = distance(previous, current);

    if (traveled + segmentLength >= targetDistance) {
      return interpolate(previous, current, (targetDistance - traveled) / segmentLength);
    }

    traveled += segmentLength;
  }

  return samples[samples.length - 1]!;
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
    let scrollY = 0;
    let pixelRatio = 1;
    let paths: FlowPath[] = [];

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const virtualHeight = getVirtualHeight(height);
      const { samples: spineSamples } = buildSpinePoints(width, height, virtualHeight);
      const pathCount = 15;
      paths = Array.from({ length: pathCount }, (_, index) =>
        buildPath(index, pathCount, width, height, virtualHeight, spineSamples),
      );
    };

    const strokePath = (path: FlowPath) => {
      context.beginPath();
      path.samples.forEach((point, index) => {
        const y = point.y - scrollY;
        if (index === 0) {
          context.moveTo(point.x, y);
        } else {
          context.lineTo(point.x, y);
        }
      });

      context.strokeStyle = path.color;
      context.lineWidth = path.width;
      context.globalAlpha = path.alpha;
      context.stroke();
    };

    const drawEnergy = (path: FlowPath, time: number) => {
      const loop = reducedMotion ? path.phase : (time * path.speed * 0.001 + path.phase) % 1;
      const headDistance = loop * path.length;
      const tailDistance = path.length * 0.11;
      const gradientStart = pointAtDistance(path.samples, Math.max(0, headDistance - tailDistance));
      const gradientEnd = pointAtDistance(path.samples, headDistance);
      const gradient = context.createLinearGradient(
        gradientStart.x,
        gradientStart.y - scrollY,
        gradientEnd.x,
        gradientEnd.y - scrollY,
      );

      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.48, path.color);
      gradient.addColorStop(1, "rgba(255,255,255,0.92)");

      context.save();
      context.beginPath();
      path.samples.forEach((point, index) => {
        const y = point.y - scrollY;
        if (index === 0) {
          context.moveTo(point.x, y);
        } else {
          context.lineTo(point.x, y);
        }
      });
      context.setLineDash([path.length * 0.11, path.length]);
      context.lineDashOffset = -headDistance;
      context.strokeStyle = gradient;
      context.lineWidth = path.width + 0.95;
      context.globalAlpha = path.alpha * 1.45;
      context.shadowColor = path.color;
      context.shadowBlur = 8;
      context.stroke();
      context.restore();
    };

    const draw = (time = 0, scheduleNextFrame = true) => {
      scrollY = window.scrollY;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      paths.forEach((path) => strokePath(path));
      paths.forEach((path) => drawEnergy(path, time));

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";

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
