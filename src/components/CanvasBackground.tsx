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

const heroCablePalette = [
  "rgba(115, 216, 236, 1)",
  "rgba(255, 142, 91, 1)",
  "rgba(236, 244, 250, 1)",
  "rgba(255, 185, 105, 1)",
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
  const firstOffscreenDepth = width * 0.38;
  const points: Point[] = [
    { x: width + firstOffscreenDepth * 0.52, y: viewportHeight * 0.78 },
    { x: width * 0.92, y: viewportHeight * 0.86 },
    { x: width * 0.42, y: viewportHeight * 1.06 },
    { x: -firstOffscreenDepth, y: viewportHeight * 1.28 },
  ];
  let y = viewportHeight * 1.86;
  let sweepRight = true;
  let sweepIndex = 1;

  while (y < virtualHeight + viewportHeight * 0.7) {
    const offscreenDepth = width * (0.42 + (sweepIndex % 3) * 0.055);
    const verticalVariance = Math.sin(sweepIndex * 1.37) * viewportHeight * 0.045;
    points.push({
      x: sweepRight ? -offscreenDepth : width + offscreenDepth,
      y: y + verticalVariance,
    });

    y += viewportHeight * (0.64 + (sweepIndex % 3) * 0.045);
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
    width: lerp(0.68, 1.45, depthFactor),
    alpha: lerp(0.045, 0.14, depthFactor),
    speed: 0.015 + strandNoise(seed * 7.1) * 0.01,
    phase: strandNoise(seed * 8.2) * Math.PI * 2,
    strandIndex: pathIndex,
    totalStrands: pathCount,
    amplitude: lerp(0.3, 1, strandNoise(seed * 9.3)),
    drift: lerp(0.2, 0.6, strandNoise(seed * 10.1)),
    depthFactor,
    driftSpeed: 0.00022 + strandNoise(seed * 10.7) * 0.00012,
    driftPhase: strandNoise(seed * 10.9) * Math.PI * 2,
    curveAmplitude: viewportHeight * (0.007 + strandNoise(seed * 13.2) * 0.01),
    weavePhase: strandNoise(seed * 13.8) * Math.PI * 2,
    blur: lerp(1.6, 0, depthFactor),
    glow: depthFactor > 0.86 ? lerp(1.2, 4, depthFactor) : 0,
  };
};

const renderPath = (path: FlowPath, time: number): RenderedPath => {
  const maxBundleWidth = window.innerWidth < 768 ? 34 : 58;
  const minBundleWidth = 14;
  const samples = path.samples.map((point, index) => {
    const normal = normalAt(path.samples, index);
    const tangent = tangentAt(path.samples, index);
    const progress = clamp((point.y + window.innerHeight * 0.15) / Math.max(path.samples[path.samples.length - 1]!.y, 1), 0, 1);
    const heroTighten = 1 - Math.exp(-10 * clamp(progress / 0.16, 0, 1));
    const postHeroTighten = clamp((progress - 0.16) / 0.84, 0, 1);
    const entryWidth = lerp(maxBundleWidth, Math.max(18, maxBundleWidth * 0.32), heroTighten);
    const bundleWidth = Math.max(lerp(entryWidth, minBundleWidth, postHeroTighten), 12);
    const strandProgress = path.totalStrands <= 1 ? 0.5 : path.strandIndex / (path.totalStrands - 1);
    const heroDivergence = 1 + 0.16 * (1 - clamp(progress / 0.16, 0, 1));
    const signedStrand = strandProgress * 2 - 1;
    const clusteredStrand = Math.sign(signedStrand) * Math.pow(Math.abs(signedStrand), 0.84);
    const baseOffset = clusteredStrand * bundleWidth * 0.5 * heroDivergence;
    const position = progress * path.length;
    const heroVariance = 1 + 0.45 * (1 - clamp(progress / 0.22, 0, 1));
    const wave = Math.sin(position * 0.0105 + path.phase) * 5.5 * path.amplitude * heroVariance;
    const drift = Math.sin(time * path.driftSpeed + path.phase) * 1.8 * path.drift * heroVariance;
    const interaction = 0.94 + 0.06 * Math.sin(position * 0.0065 + path.phase);
    const curveOffset =
      Math.sin(position * 0.018 + path.weavePhase + time * path.driftSpeed * 0.9) *
      path.curveAmplitude;
    const lateralOscillation =
      Math.sin(position * 0.0045 + time * path.driftSpeed * 2.1 + path.driftPhase) *
      bundleWidth *
      0.018 *
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

const buildHeroCableSamples = (width: number, height: number) => {
  const points: Point[] = [
    { x: -width * 0.18, y: -height * 0.18 },
    { x: width * 0.1, y: -height * 0.04 },
    { x: width * 0.38, y: height * 0.02 },
    { x: width * 0.62, y: height * 0.08 },
    { x: width * 0.78, y: height * 0.22 },
    { x: width * 0.86, y: height * 0.44 },
    { x: width * 0.9, y: height * 0.68 },
    { x: width * 1.16, y: height * 0.92 },
  ];
  const samples: Point[] = [];

  for (let pointIndex = 0; pointIndex < points.length - 1; pointIndex += 1) {
    const previous = points[Math.max(0, pointIndex - 1)]!;
    const start = points[pointIndex]!;
    const end = points[pointIndex + 1]!;
    const next = points[Math.min(points.length - 1, pointIndex + 2)]!;

    for (let step = 0; step <= 16; step += 1) {
      if (pointIndex > 0 && step === 0) continue;
      samples.push(catmullRomPoint(previous, start, end, next, step / 16));
    }
  }

  return samples;
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
      const pathCount = 11;
      paths = Array.from({ length: pathCount }, (_, index) =>
        buildPath(index, pathCount, width, height, virtualHeight, spineSamples),
      ).sort((a, b) => a.depthFactor - b.depthFactor);
    };

    const drawHeroCableBody = (time: number) => {
      if (scrollY > height * 0.78) return;

      const heroSamples = buildHeroCableSamples(width, height);
      if (heroSamples.length < 2) return;

      const bodyGradient = context.createLinearGradient(-width * 0.08, 0, width * 1.02, height * 0.74);
      bodyGradient.addColorStop(0, "rgba(111, 205, 222, 0.24)");
      bodyGradient.addColorStop(0.46, "rgba(255, 144, 92, 0.22)");
      bodyGradient.addColorStop(1, "rgba(232, 240, 246, 0.16)");

      const drawTaperedStroke = (
        samples: Point[],
        color: string | CanvasGradient,
        maxLineWidth: number,
        minLineWidth: number,
        alpha: number,
        blur: number,
      ) => {
        context.save();
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = color;
        context.globalAlpha = alpha;
        context.shadowColor = "rgba(255, 154, 102, 0.18)";
        context.shadowBlur = blur;

        for (let index = 1; index < samples.length; index += 1) {
          const previous = samples[index - 1]!;
          const current = samples[index]!;
          const progress = index / (samples.length - 1);
          const tighten = 1 - Math.exp(-4.2 * progress);
          context.beginPath();
          context.moveTo(previous.x, previous.y - scrollY);
          context.lineTo(current.x, current.y - scrollY);
          context.lineWidth = lerp(maxLineWidth, minLineWidth, tighten);
          context.stroke();
        }

        context.restore();
      };

      drawTaperedStroke(heroSamples, bodyGradient, width < 768 ? 112 : 286, width < 768 ? 18 : 30, 0.11, 14);
      drawTaperedStroke(heroSamples, bodyGradient, width < 768 ? 64 : 168, width < 768 ? 9 : 16, 0.14, 4);

      const wireCount = width < 768 ? 14 : 30;
      const center = (wireCount - 1) / 2;
      for (let wireIndex = 0; wireIndex < wireCount; wireIndex += 1) {
        const seed = wireIndex + 1;
        const signed = (wireIndex - center) / center;
        const wireSamples = heroSamples.map((point, sampleIndex) => {
          const progress = sampleIndex / (heroSamples.length - 1);
          const normal = normalAt(heroSamples, sampleIndex);
          const tighten = 1 - Math.exp(-5 * progress);
          const spread = lerp(width < 768 ? 54 : 152, width < 768 ? 8 : 14, tighten);
          const braid =
            Math.sin(progress * Math.PI * 9.5 + seed * 0.74 + time * 0.0003) *
            lerp(width < 768 ? 6 : 12, width < 768 ? 1.5 : 2.2, tighten);
          const crossing =
            Math.sin(progress * Math.PI * 4.2 + seed * 1.33) *
            lerp(width < 768 ? 3 : 8, 1, tighten);
          const offset = signed * spread + braid + crossing;

          return {
            x: point.x + normal.x * offset,
            y: point.y + normal.y * offset,
          };
        });

        drawTaperedStroke(
          wireSamples,
          heroCablePalette[wireIndex % heroCablePalette.length]!,
          width < 768 ? 1.05 : 1.28,
          width < 768 ? 0.48 : 0.6,
          width < 768 ? 0.24 : 0.28,
          0.5,
        );
      }
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
      context.globalAlpha = path.alpha * (scrollY < height * 0.75 ? 0.16 : 0.24);
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
      context.lineWidth = path.width + 0.7;
      context.globalAlpha = path.alpha * (scrollY < height * 0.75 ? 0.34 : 0.36);
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
      drawHeroCableBody(time);
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
