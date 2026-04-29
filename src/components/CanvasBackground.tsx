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
  strandIndex: number;
  totalStrands: number;
  amplitude: number;
  drift: number;
  depthFactor: number;
  driftSpeed: number;
  driftPhase: number;
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
  const firstOffscreenDepth = width * 0.46;
  const points: Point[] = [
    { x: -firstOffscreenDepth, y: -viewportHeight * 0.08 },
    { x: width * 0.5, y: viewportHeight * 0.02 },
    { x: width * 0.92, y: viewportHeight * 0.24 },
    { x: width + firstOffscreenDepth, y: viewportHeight * 0.64 },
  ];
  let y = viewportHeight * 1.02;
  let sweepRight = true;
  let sweepIndex = 1;

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

    for (let step = 0; step <= 96; step += 1) {
      if (pointIndex > 0 && step === 0) continue;
      samples.push(catmullRomPoint(previous, start, end, next, step / 96));
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
  pathCount: number,
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
    width: lerp(1.25, 3.4, depthFactor),
    alpha: lerp(0.16, 0.42, depthFactor),
    speed: 0.015 + strandNoise(seed * 7.1) * 0.01,
    phase: strandNoise(seed * 8.2) * Math.PI * 2,
    strandIndex: pathIndex,
    totalStrands: pathCount,
    amplitude: lerp(0.3, 1, strandNoise(seed * 9.3)),
    drift: lerp(0.2, 0.6, strandNoise(seed * 10.1)),
    depthFactor,
    driftSpeed: 0.00022 + strandNoise(seed * 10.7) * 0.00012,
    driftPhase: strandNoise(seed * 10.9) * Math.PI * 2,
    curveAmplitude: viewportHeight * (0.012 + strandNoise(seed * 13.2) * 0.018),
    weavePhase: strandNoise(seed * 13.8) * Math.PI * 2,
    blur: lerp(1.6, 0, depthFactor),
    glow: depthFactor > 0.84 ? lerp(2, 7, depthFactor) : 0,
  };
};

const renderPath = (path: FlowPath, time: number): RenderedPath => {
  const maxBundleWidth = window.innerWidth < 768 ? 180 : 260;
  const minBundleWidth = 42;
  const samples = path.samples.map((point, index) => {
    const normal = normalAt(path.samples, index);
    const tangent = tangentAt(path.samples, index);
    const progress = clamp((point.y + window.innerHeight * 0.15) / Math.max(path.samples[path.samples.length - 1]!.y, 1), 0, 1);
    const heroTighten = 1 - Math.exp(-12 * clamp(progress / 0.24, 0, 1));
    const postHeroTighten = clamp((progress - 0.24) / 0.76, 0, 1);
    const entryWidth = lerp(maxBundleWidth, Math.max(64, maxBundleWidth * 0.28), heroTighten);
    const bundleWidth = Math.max(lerp(entryWidth, minBundleWidth, postHeroTighten), 36);
    const strandProgress = path.totalStrands <= 1 ? 0.5 : path.strandIndex / (path.totalStrands - 1);
    const heroDivergence = 1 + 0.16 * (1 - clamp(progress / 0.16, 0, 1));
    const signedStrand = strandProgress * 2 - 1;
    const clusteredStrand = Math.sign(signedStrand) * Math.pow(Math.abs(signedStrand), 0.84);
    const baseOffset = clusteredStrand * bundleWidth * 0.5 * heroDivergence;
    const position = progress * path.length;
    const heroVariance = 1 + 0.45 * (1 - clamp(progress / 0.22, 0, 1));
    const wave = Math.sin(position * 0.0105 + path.phase) * 18 * path.amplitude * heroVariance;
    const drift = Math.sin(time * path.driftSpeed + path.phase) * 4 * path.drift * heroVariance;
    const interaction = 0.94 + 0.06 * Math.sin(position * 0.0065 + path.phase);
    const curveOffset =
      Math.sin(position * 0.018 + path.weavePhase + time * path.driftSpeed * 0.9) *
      path.curveAmplitude;
    const lateralOscillation =
      Math.sin(position * 0.0045 + time * path.driftSpeed * 2.1 + path.driftPhase) *
      bundleWidth *
      0.035 *
      path.amplitude;
    const crossOffset = (baseOffset + wave + drift) * interaction + curveOffset + lateralOscillation;
    const alongOffset =
      Math.cos(position * 0.007 + path.weavePhase + time * path.driftSpeed) *
      window.innerHeight *
      0.003;

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
    let lastPivotPulse = 0;

    const pulseSystemPivot = (x: number, y: number, time: number) => {
      if (time - lastPivotPulse < 2200) return;

      const pivot = document.querySelector<HTMLElement>("[data-system-pivot]");
      if (!pivot) return;

      const rect = pivot.getBoundingClientRect();
      const pivotX = rect.left + rect.width / 2;
      const pivotY = rect.top + rect.height / 2;
      const triggerRadius = Math.max(96, Math.min(width, height) * 0.08);

      if (Math.hypot(x - pivotX, y - pivotY) > triggerRadius) return;

      lastPivotPulse = time;
      pivot.classList.remove("timeline-node-pivot--burst");
      void pivot.offsetWidth;
      pivot.classList.add("timeline-node-pivot--burst");
      window.setTimeout(() => pivot.classList.remove("timeline-node-pivot--burst"), 2400);
    };

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
      const pathCount = 13;
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
      if (path.depthFactor > 0.68) {
        pulseSystemPivot(gradientEnd.x, gradientEnd.y - scrollY, time);
      }

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
