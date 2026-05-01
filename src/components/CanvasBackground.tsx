"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

const strandColors = [
  "rgba(97, 192, 215, 0.82)",
  "rgba(242, 139, 91, 0.74)",
  "rgba(214, 230, 236, 0.74)",
  "rgba(141, 119, 255, 0.58)",
  "rgba(161, 229, 204, 0.64)",
];

const getPivotTarget = (width: number, height: number): Point => {
  const pivot = document.querySelector<HTMLElement>("[data-system-pivot]");

  if (!pivot) {
    return { x: width * 0.56, y: height * 1.42 };
  }

  const rect = pivot.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + window.scrollY + rect.height / 2,
  };
};

const drawCableStrand = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string,
  width: number,
  alpha: number,
) => {
  context.save();
  context.globalAlpha = alpha;
  context.globalCompositeOperation = "screen";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = color;
  context.lineWidth = width;
  context.shadowColor = color;
  context.shadowBlur = width * 1.15;

  context.beginPath();
  context.moveTo(points[0]!.x, points[0]!.y);
  for (let index = 1; index < points.length - 2; index += 1) {
    const current = points[index]!;
    const next = points[index + 1]!;
    context.quadraticCurveTo(current.x, current.y, (current.x + next.x) / 2, (current.y + next.y) / 2);
  }

  const penultimate = points[points.length - 2]!;
  const last = points[points.length - 1]!;
  context.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);
  context.stroke();
  context.restore();
};

const drawRibbon = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string | CanvasGradient,
  width: number,
  alpha: number,
  blur: number,
) => {
  context.save();
  context.globalAlpha = alpha;
  context.globalCompositeOperation = "screen";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = color;
  context.lineWidth = width;
  context.shadowColor = typeof color === "string" ? color : "rgba(232, 248, 255, 0.32)";
  context.shadowBlur = blur;

  context.beginPath();
  context.moveTo(points[0]!.x, points[0]!.y);
  for (let index = 1; index < points.length - 2; index += 1) {
    const current = points[index]!;
    const next = points[index + 1]!;
    context.quadraticCurveTo(current.x, current.y, (current.x + next.x) / 2, (current.y + next.y) / 2);
  }

  const penultimate = points[points.length - 2]!;
  const last = points[points.length - 1]!;
  context.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);
  context.stroke();
  context.restore();
};

const drawHeroFunnel = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const mobile = width < 768;
  const mouthLeft = mobile ? width * 0.46 : width * 0.14;
  const mouthRight = mobile ? width * 1.08 : width * 0.72;
  const mouthTop = mobile ? height * 0.08 : height * 0.06;
  const mouthBottom = mobile ? height * 0.24 : height * 0.28;
  const throat: Point = {
    x: mobile ? width * 0.98 : width * 0.88,
    y: mobile ? height * 0.29 : height * 0.36,
  };
  const ribbonCount = mobile ? 8 : 14;

  context.save();
  context.globalCompositeOperation = "screen";

  const veil = context.createLinearGradient(mouthLeft, mouthTop, throat.x, throat.y);
  veil.addColorStop(0, "rgba(97, 192, 215, 0)");
  veil.addColorStop(0.28, "rgba(97, 192, 215, 0.13)");
  veil.addColorStop(0.58, "rgba(214, 230, 236, 0.18)");
  veil.addColorStop(0.78, "rgba(242, 139, 91, 0.08)");
  veil.addColorStop(1, "rgba(97, 192, 215, 0)");
  context.fillStyle = veil;
  context.beginPath();
  context.moveTo(mouthLeft, mouthTop);
  context.bezierCurveTo(width * 0.24, height * 0.04, width * 0.58, height * 0.1, throat.x, throat.y - height * 0.05);
  context.bezierCurveTo(width * 0.6, height * 0.28, width * 0.22, height * 0.34, mouthLeft, mouthBottom);
  context.closePath();
  context.filter = "blur(10px)";
  context.fill();
  context.filter = "none";
  context.restore();

  for (let index = 0; index < ribbonCount; index += 1) {
    const ratio = index / (ribbonCount - 1);
    const chaos = Math.sin(index * 2.17) * 0.5 + Math.cos(index * 0.61) * 0.5;
    const startX = lerp(mouthLeft, mouthRight, ratio) + chaos * width * (mobile ? 0.018 : 0.045);
    const startY = lerp(mouthTop, mouthBottom, 1 - ratio) + Math.sin(index * 1.3) * height * (mobile ? 0.018 : 0.04);
    const midA: Point = {
      x: lerp(startX, throat.x, 0.34) + Math.sin(index * 0.9) * width * 0.05,
      y: lerp(startY, throat.y, 0.08) - height * (mobile ? 0.035 : 0.07),
    };
    const midB: Point = {
      x: lerp(startX, throat.x, 0.7) + Math.cos(index * 1.45) * width * 0.022,
      y: lerp(startY, throat.y, 0.62) + Math.sin(index * 0.72) * height * 0.035,
    };
    const end: Point = {
      x: throat.x + Math.sin(index * 1.09) * (mobile ? 12 : 24),
      y: throat.y + (ratio - 0.5) * (mobile ? 42 : 76),
    };
    const core = 1 - Math.abs(ratio - 0.55) * 1.65;
    const color = strandColors[index % strandColors.length]!;

    drawRibbon(
      context,
      [{ x: startX, y: startY }, midA, midB, end],
      color,
      lerp(mobile ? 7 : 12, mobile ? 20 : 38, clamp(core, 0, 1)),
      lerp(mobile ? 0.13 : 0.16, mobile ? 0.28 : 0.36, clamp(core, 0, 1)),
      mobile ? 18 : 34,
    );
  }

  const compressedCore = context.createLinearGradient(width * 0.5, height * 0.08, throat.x, throat.y);
  compressedCore.addColorStop(0, "rgba(97, 192, 215, 0)");
  compressedCore.addColorStop(0.44, "rgba(214, 230, 236, 0.16)");
  compressedCore.addColorStop(0.78, "rgba(232, 248, 255, 0.38)");
  compressedCore.addColorStop(1, "rgba(97, 192, 215, 0)");
  drawRibbon(
    context,
    [
      { x: mobile ? width * 0.44 : width * 0.14, y: mobile ? height * 0.08 : height * 0.12 },
      { x: width * 0.5, y: height * 0.08 },
      { x: width * 0.75, y: height * 0.18 },
      throat,
    ],
    compressedCore,
    mobile ? 20 : 46,
    mobile ? 0.18 : 0.24,
    mobile ? 22 : 42,
  );
};

const drawConvergingCable = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const target = getPivotTarget(width, height);
  const targetVisible = target.y > -height * 0.22 && target.y < height * 1.22;
  const fade = targetVisible ? 1 : 0.86;
  const mobile = width < 768;
  const approach = clamp((height * 1.08 - target.y) / (height * 0.9), 0, 1);
  const strandCount = mobile ? 8 : 18;
  const heroPinch: Point = { x: width * (mobile ? 0.98 : 0.88), y: height * (mobile ? 0.32 : 0.36) };
  const throat: Point = mobile
    ? {
        x: lerp(heroPinch.x, width * 0.86, approach),
        y: lerp(heroPinch.y, lerp(height * 0.16, target.y, 0.18), approach),
      }
    : {
        x: lerp(heroPinch.x, width * 0.9, approach),
        y: lerp(heroPinch.y, lerp(height * 0.08, target.y, 0.28), approach),
      };

  context.save();
  context.globalCompositeOperation = "screen";
  const guide = context.createLinearGradient(width * 0.18, 0, target.x, target.y);
  guide.addColorStop(0, "rgba(97, 192, 215, 0)");
  guide.addColorStop(0.46, "rgba(214, 230, 236, 0.018)");
  guide.addColorStop(1, "rgba(242, 139, 91, 0.04)");
  context.strokeStyle = guide;
  context.lineWidth = mobile ? 14 : 30;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.shadowColor = "rgba(97, 192, 215, 0.08)";
  context.shadowBlur = mobile ? 10 : 22;
  context.beginPath();
  context.moveTo(throat.x, throat.y);
  context.bezierCurveTo(
    target.x + width * (mobile ? 0.42 : 0.34),
    target.y - height * 0.12,
    target.x + width * (mobile ? 0.22 : 0.18),
    target.y + height * 0.09,
    target.x,
    target.y,
  );
  context.stroke();
  context.restore();

  for (let index = 0; index < strandCount; index += 1) {
    const ratio = index / (strandCount - 1);
    const wave = Math.sin(index * 1.71);
    const twist = Math.cos(index * 0.93);
    const side = ratio - 0.5;
    const throatOffset = side * (mobile ? 42 : 88) + wave * (mobile ? 8 : 16);
    const neckOffset = side * (mobile ? 18 : 48) + twist * (mobile ? 7 : 16);
    const endOffset = side * (mobile ? 4 : 8);

    const points = [
      {
        x: throat.x + throatOffset,
        y: throat.y + side * (mobile ? 26 : 54),
      },
      {
        x: target.x + width * (mobile ? 0.45 : 0.34) + twist * (mobile ? 14 : 26),
        y: lerp(throat.y, target.y, 0.54) + wave * (mobile ? 26 : 34),
      },
      {
        x: target.x + width * (mobile ? 0.2 : 0.16) + neckOffset,
        y: lerp(throat.y, target.y, 0.84) - side * 24,
      },
      { x: target.x + endOffset, y: target.y + endOffset * 0.44 },
    ];

    drawCableStrand(
      context,
      points,
      strandColors[index % strandColors.length]!,
      lerp(mobile ? 1.4 : 2.4, mobile ? 3.6 : 5.8, 1 - Math.abs(side) * 1.15),
      fade * lerp(mobile ? 0.26 : 0.3, mobile ? 0.52 : 0.62, 1 - Math.abs(side)),
    );
  }
};

const clearCopyWindows = (context: CanvasRenderingContext2D) => {
  const protectedElements = document.querySelectorAll<HTMLElement>(
    ".hero-inner, .timeline-text, .timeline-pivot-text",
  );

  context.save();
  context.globalCompositeOperation = "destination-out";
  protectedElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const paddingX = element.classList.contains("hero-inner") ? 28 : 16;
    const paddingY = element.classList.contains("hero-inner") ? 24 : 10;
    context.fillStyle = "rgba(0, 0, 0, 0.96)";
    context.fillRect(
      rect.left - paddingX,
      rect.top + window.scrollY - paddingY,
      rect.width + paddingX * 2,
      rect.height + paddingY * 2,
    );
  });
  context.restore();
};

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    };

    const draw = () => {
      drawFrame = 0;
      context.clearRect(0, 0, width, canvasHeight);
      drawHeroFunnel(context, width, height);
      drawConvergingCable(context, width, height);
      clearCopyWindows(context);
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
      canvasHeight = Math.min(
        height * 3.1,
        Math.max(height * 2.05, getPivotTarget(width, height).y + height * 0.45),
      );
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
      <div aria-hidden="true" className="funnel-shimmer" />
      <canvas ref={canvasRef} aria-hidden="true" className="site-canvas-background" />
    </>
  );
}
