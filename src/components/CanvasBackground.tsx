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

const quadraticPoint = (start: Point, control: Point, end: Point, progress: number): Point => {
  const first = interpolate(start, control, progress);
  const second = interpolate(control, end, progress);
  return interpolate(first, second, progress);
};

const distance = (a: Point, b: Point) => Math.hypot(b.x - a.x, b.y - a.y);

const buildPath = (pathIndex: number, pathCount: number, width: number, height: number): FlowPath => {
  const segmentCount = 10 + (pathIndex % 4);
  const laneProgress = pathCount <= 1 ? 0.5 : pathIndex / (pathCount - 1);
  const startY =
    -height * 0.08 +
    laneProgress * height * 1.08 +
    Math.sin(pathIndex * 1.73) * height * 0.035;
  const endY =
    startY +
    height * (0.34 + (pathIndex % 5) * 0.025) +
    Math.cos(pathIndex * 1.17) * height * 0.06;
  const verticalStep = (endY - startY) / segmentCount;
  const startX = -width * (0.18 + (pathIndex % 3) * 0.025);
  const endX = width * (1.16 + (pathIndex % 4) * 0.025);
  const horizontalStep = (endX - startX) / segmentCount;
  const swingBase = width * (0.025 + (pathIndex % 4) * 0.006);
  const points: Point[] = [];

  for (let segment = 0; segment <= segmentCount; segment += 1) {
    const progress = segment / segmentCount;
    const direction = segment % 2 === 0 ? 1 : -1;
    const swing = direction * swingBase * (1 - progress * 0.18);
    const localVariance =
      Math.sin((segment + 1) * (pathIndex + 2) * 0.53) * width * 0.01 +
      Math.cos((segment + pathIndex) * 0.72) * height * 0.012;

    points.push({
      x: startX + segment * horizontalStep + swing + localVariance,
      y: startY + segment * verticalStep + Math.sin(segment * 0.9 + pathIndex) * height * 0.014,
    });
  }

  const samples: Point[] = [];

  for (let pointIndex = 0; pointIndex < points.length - 1; pointIndex += 1) {
    const start = points[pointIndex]!;
    const end = points[pointIndex + 1]!;
    const direction = pointIndex % 2 === 0 ? 1 : -1;
    const control: Point = {
      x: (start.x + end.x) / 2 + direction * (width * (0.014 + (pathIndex % 3) * 0.004)),
      y: (start.y + end.y) / 2 - height * (0.012 + ((pathIndex + pointIndex) % 3) * 0.004),
    };

    for (let step = 0; step <= 22; step += 1) {
      if (pointIndex > 0 && step === 0) continue;
      samples.push(quadraticPoint(start, control, end, step / 22));
    }
  }

  let length = 0;
  for (let index = 1; index < samples.length; index += 1) {
    length += distance(samples[index - 1]!, samples[index]!);
  }

  return {
    color: palette[pathIndex % palette.length]!,
    points,
    samples,
    length,
    width: pathIndex % 4 === 0 ? 2.1 : pathIndex % 3 === 0 ? 1.7 : 1.35,
    alpha: pathIndex % 4 === 0 ? 0.34 : 0.22,
    speed: 0.018 + pathIndex * 0.0018,
    phase: pathIndex * 0.137,
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
      const pathCount = 13;
      paths = Array.from({ length: pathCount }, (_, index) => buildPath(index, pathCount, width, height));
    };

    const strokePath = (path: FlowPath) => {
      context.beginPath();
      path.samples.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
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
        gradientStart.y,
        gradientEnd.x,
        gradientEnd.y,
      );

      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.48, path.color);
      gradient.addColorStop(1, "rgba(255,255,255,0.92)");

      context.save();
      context.beginPath();
      path.samples.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      });
      context.setLineDash([path.length * 0.11, path.length]);
      context.lineDashOffset = -headDistance;
      context.strokeStyle = gradient;
      context.lineWidth = path.width + 1.2;
      context.globalAlpha = path.alpha * 1.75;
      context.shadowColor = path.color;
      context.shadowBlur = 10;
      context.stroke();
      context.restore();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      paths.forEach((path) => strokePath(path));
      paths.forEach((path) => drawEnergy(path, time));

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
