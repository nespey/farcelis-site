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
  basePosition: number;
  depthFactor: number;
  driftSpeed: number;
  driftPhase: number;
  noiseFrequency: number;
  curveFrequency: number;
  curveAmplitude: number;
  weavePhase: number;
  blur: number;
  glow: number;
};

type RenderedPath = {
  samples: Point[];
  length: number;
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

const strandNoise = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const lerp = (start: number, end: number, progress: number) => start + (end - start) * progress;

const buildSpinePoints = (width: number, viewportHeight: number, virtualHeight: number) => {
  const points: Point[] = [];
  let y = viewportHeight * 0.18;
  let sweepRight = true;
  let sweepIndex = 0;

  while (y < virtualHeight + viewportHeight * 0.7) {
    const offscreenDepth = width * (0.42 + (sweepIndex % 3) * 0.055);
    const verticalVariance = Math.sin(sweepIndex * 1.37) * viewportHeight * 0.045;
    points.push({
      x: sweepRight ? -offscreenDepth : width + offscreenDepth,
      y: y + verticalVariance,
    });

    y += viewportHeight * (sweepIndex === 0 ? 0.48 : 0.58 + (sweepIndex % 3) * 0.045);
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

const tangentAt = (samples: Point[], index: number): Point => {
  const previous = samples[Math.max(0, index - 1)]!;
  const next = samples[Math.min(samples.length - 1, index + 1)]!;
  const dx = next.x - previous.x;
  const dy = next.y - previous.y;
  const length = Math.hypot(dx, dy) || 1;

  return { x: dx / length, y: dy / length };
};

const buildPath = (
  pathIndex: number,
  _pathCount: number,
  width: number,
  viewportHeight: number,
  virtualHeight: number,
  spineSamples: Point[],
): FlowPath => {
  const seed = pathIndex + 1;

  let length = 0;
  for (let index = 1; index < spineSamples.length; index += 1) {
    length += distance(spineSamples[index - 1]!, spineSamples[index]!);
  }

  const depthFactor = strandNoise(seed * 5.9);

  return {
    color: palette[pathIndex % palette.length]!,
    points: spineSamples,
    samples: spineSamples,
    length,
    width: lerp(0.5, 2, depthFactor),
    alpha: lerp(0.06, 0.26, depthFactor),
    speed: 0.015 + strandNoise(seed * 7.1) * 0.01,
    phase: strandNoise(seed * 8.2),
    basePosition: strandNoise(seed * 9.3) * 2 - 1,
    depthFactor,
    driftSpeed: 0.00012 + strandNoise(seed * 10.1) * 0.00018,
    driftPhase: strandNoise(seed * 10.9) * Math.PI * 2,
    noiseFrequency: 1.25 + strandNoise(seed * 11.4) * 2.65,
    curveFrequency: 3.4 + strandNoise(seed * 12.4) * 4.8,
    curveAmplitude: viewportHeight * (0.018 + strandNoise(seed * 13.2) * 0.035),
    weavePhase: strandNoise(seed * 13.8) * Math.PI * 2,
    blur: lerp(1.6, 0, depthFactor),
    glow: depthFactor > 0.78 ? lerp(3, 8, depthFactor) : 0,
  };
};

const renderPath = (path: FlowPath, time: number): RenderedPath => {
  const maxBundleWidth = window.innerHeight * 0.34;
  const minBundleWidth = window.innerHeight * 0.13;
  const samples = path.samples.map((point, index) => {
    const normal = normalAt(path.samples, index);
    const tangent = tangentAt(path.samples, index);
    const progress = clamp((point.y + window.innerHeight * 0.15) / Math.max(path.samples[path.samples.length - 1]!.y, 1), 0, 1);
    const bundleWidth = lerp(maxBundleWidth, minBundleWidth, progress);
    const position = progress * Math.PI * 2;
    const slowDrift = Math.sin(time * path.driftSpeed + path.driftPhase) * 0.22;
    const smoothNoise =
      Math.sin(position * path.noiseFrequency + path.weavePhase + time * path.driftSpeed * 1.4) * 0.42 +
      Math.cos(position * (path.noiseFrequency * 0.43) + path.phase * Math.PI * 2) * 0.28 +
      Math.sin(position * 0.65 + path.basePosition * Math.PI) * 0.18;
    const interaction = 0.9 + 0.1 * Math.sin(position * 1.4 + path.phase * Math.PI * 2);
    const curveOffset =
      Math.sin(position * path.curveFrequency + path.weavePhase + time * path.driftSpeed * 0.9) *
      path.curveAmplitude;
    const lateralOscillation =
      Math.sin(position * (2.1 + path.depthFactor * 1.8) + time * path.driftSpeed * 2.1 + path.driftPhase) *
      bundleWidth *
      0.08;
    const signal = clamp((path.basePosition * 0.5 + smoothNoise * 0.5 + slowDrift) * interaction, -1, 1);
    const crossOffset = signal * bundleWidth + curveOffset + lateralOscillation;
    const alongOffset =
      Math.cos(position * 2.7 + path.weavePhase + time * path.driftSpeed) *
      window.innerHeight *
      0.018;

    return {
      x: point.x + normal.x * crossOffset + tangent.x * alongOffset,
      y: point.y + normal.y * crossOffset + tangent.y * alongOffset,
    };
  });

  let length = 0;
  for (let index = 1; index < samples.length; index += 1) {
    length += distance(samples[index - 1]!, samples[index]!);
  }

  return { samples, length };
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
      const pathCount = 32;
      paths = Array.from({ length: pathCount }, (_, index) =>
        buildPath(index, pathCount, width, height, virtualHeight, spineSamples),
      ).sort((a, b) => a.depthFactor - b.depthFactor);
    };

    const strokePath = (path: FlowPath, renderedPath: RenderedPath) => {
      context.save();
      context.beginPath();
      renderedPath.samples.forEach((point, index) => {
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
      context.shadowColor = path.color;
      context.shadowBlur = path.blur;
      context.stroke();
      context.restore();
    };

    const drawEnergy = (path: FlowPath, renderedPath: RenderedPath, time: number) => {
      const loop = reducedMotion ? path.phase : (time * path.speed * 0.001 + path.phase) % 1;
      const headDistance = loop * renderedPath.length;
      const tailDistance = renderedPath.length * 0.11;
      const gradientStart = pointAtDistance(renderedPath.samples, Math.max(0, headDistance - tailDistance));
      const gradientEnd = pointAtDistance(renderedPath.samples, headDistance);
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
      renderedPath.samples.forEach((point, index) => {
        const y = point.y - scrollY;
        if (index === 0) {
          context.moveTo(point.x, y);
        } else {
          context.lineTo(point.x, y);
        }
      });
      context.setLineDash([renderedPath.length * 0.11, renderedPath.length]);
      context.lineDashOffset = -headDistance;
      context.strokeStyle = gradient;
      context.lineWidth = path.width + 0.95;
      context.globalAlpha = path.alpha * 1.45;
      context.shadowColor = path.color;
      context.shadowBlur = path.glow;
      context.stroke();
      context.restore();
    };

    const draw = (time = 0, scheduleNextFrame = true) => {
      scrollY = window.scrollY;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      const renderedPaths = paths.map((path) => ({ path, renderedPath: renderPath(path, time) }));
      renderedPaths.forEach(({ path, renderedPath }) => strokePath(path, renderedPath));
      renderedPaths
        .filter(({ path }) => path.depthFactor > 0.48)
        .forEach(({ path, renderedPath }) => drawEnergy(path, renderedPath, time));

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
