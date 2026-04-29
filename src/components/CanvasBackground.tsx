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
  driftAmplitude: number;
  driftSpeed: number;
  waveAmplitude: number;
  waveFrequency: number;
  weavePhase: number;
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

const buildSpinePoints = (width: number, viewportHeight: number, virtualHeight: number) => {
  const points: Point[] = [];
  let y = viewportHeight * 0.32;
  let sweepRight = true;
  let sweepIndex = 0;

  while (y < virtualHeight + viewportHeight * 0.7) {
    const offscreenDepth = width * (0.42 + (sweepIndex % 3) * 0.055);
    const verticalVariance = Math.sin(sweepIndex * 1.37) * viewportHeight * 0.045;
    points.push({
      x: sweepRight ? -offscreenDepth : width + offscreenDepth,
      y: y + verticalVariance,
    });

    y += viewportHeight * (sweepIndex === 0 ? 0.4 : 0.58 + (sweepIndex % 3) * 0.045);
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
  pathCount: number,
  width: number,
  viewportHeight: number,
  virtualHeight: number,
  spineSamples: Point[],
): FlowPath => {
  const centerIndex = (pathCount - 1) / 2;
  const strandPosition = pathIndex - centerIndex;
  const normalizedPosition = centerIndex === 0 ? 0 : strandPosition / centerIndex;
  const clusterBias = Math.sign(normalizedPosition) * Math.pow(Math.abs(normalizedPosition), 0.74);
  const seed = pathIndex + 1;
  const looseJitter = (strandNoise(seed * 2.7) - 0.5) * 0.34;
  const clusteredPosition = clamp(clusterBias + looseJitter, -1.12, 1.12);
  const topSpread = viewportHeight * (0.14 + strandNoise(seed * 1.9) * 0.085);
  const lowerSpread = viewportHeight * (0.052 + strandNoise(seed * 6.6) * 0.018);
  const phase = pathIndex * 0.71;
  const verticalLag = viewportHeight * ((strandNoise(seed * 4.1) - 0.5) * 0.06);
  const curvatureDrift = viewportHeight * (0.018 + strandNoise(seed * 3.3) * 0.018);
  const samples = spineSamples.map((point, sampleIndex) => {
    const progress = clamp((point.y + viewportHeight * 0.2) / virtualHeight, 0, 1);
    const convergence = 1 - progress * 0.52;
    const spread = lowerSpread + topSpread * convergence;
    const normal = normalAt(spineSamples, sampleIndex);
    const tangent = tangentAt(spineSamples, sampleIndex);
    const microDrift =
      Math.sin(sampleIndex * 0.041 + phase) * curvatureDrift * (0.5 + convergence * 0.5) +
      Math.cos(sampleIndex * 0.017 + phase * 1.4) * width * 0.0042 * (0.45 + convergence * 0.55);
    const crossingWeave =
      Math.sin(progress * Math.PI * (2.4 + strandNoise(seed * 8.7) * 1.5) + phase * 1.8) *
      spread *
      0.11;
    const crossOffset = clusteredPosition * spread + microDrift + crossingWeave;
    const alongOffset =
      verticalLag * (0.35 + convergence * 0.65) +
      Math.sin(sampleIndex * 0.029 + phase * 1.7) * viewportHeight * 0.016 * (0.45 + convergence * 0.55);

    return {
      x: point.x + normal.x * crossOffset + tangent.x * alongOffset,
      y: point.y + normal.y * crossOffset + tangent.y * alongOffset,
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
    width: 1.1 + strandNoise(seed * 5.9) * 0.9,
    alpha: 0.13 + strandNoise(seed * 7.1) * 0.12,
    speed: 0.017 + pathIndex * 0.0015,
    phase: pathIndex * 0.091,
    driftAmplitude: viewportHeight * (0.008 + strandNoise(seed * 9.3) * 0.014),
    driftSpeed: 0.00018 + strandNoise(seed * 10.1) * 0.00012,
    waveAmplitude: viewportHeight * (0.007 + strandNoise(seed * 11.7) * 0.011),
    waveFrequency: 0.024 + strandNoise(seed * 12.4) * 0.025,
    weavePhase: strandNoise(seed * 13.8) * Math.PI * 2,
  };
};

const renderPath = (path: FlowPath, time: number): RenderedPath => {
  const timeDrift = Math.sin(time * path.driftSpeed + path.weavePhase) * path.driftAmplitude;
  const samples = path.samples.map((point, index) => {
    const normal = normalAt(path.samples, index);
    const tangent = tangentAt(path.samples, index);
    const organicWave =
      Math.sin(index * path.waveFrequency + time * path.driftSpeed * 1.65 + path.weavePhase) *
      path.waveAmplitude;
    const secondaryWave =
      Math.cos(index * path.waveFrequency * 0.43 + time * path.driftSpeed * 0.9 + path.phase) *
      path.waveAmplitude *
      0.45;

    return {
      x: point.x + normal.x * (timeDrift + organicWave) + tangent.x * secondaryWave,
      y: point.y + normal.y * (timeDrift + organicWave) + tangent.y * secondaryWave,
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
      const pathCount = 15;
      paths = Array.from({ length: pathCount }, (_, index) =>
        buildPath(index, pathCount, width, height, virtualHeight, spineSamples),
      );
    };

    const strokePath = (path: FlowPath, renderedPath: RenderedPath) => {
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
      context.stroke();
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
      context.shadowBlur = 8;
      context.stroke();
      context.restore();
    };

    const draw = (time = 0, scheduleNextFrame = true) => {
      scrollY = window.scrollY;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      const renderedPaths = paths.map((path) => ({ path, renderedPath: renderPath(path, time) }));
      renderedPaths.forEach(({ path, renderedPath }) => strokePath(path, renderedPath));
      renderedPaths.forEach(({ path, renderedPath }) => drawEnergy(path, renderedPath, time));

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
