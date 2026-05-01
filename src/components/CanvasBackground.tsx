"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

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

const drawConvergingCable = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const target = getPivotTarget(width, height);
  const targetVisible = target.y > -height * 0.22 && target.y < height * 1.22;
  const fade = targetVisible ? 1 : 0.86;
  const mobile = width < 768;
  const strandCount = mobile ? 4 : 7;
  const throat: Point = {
    x: width * (mobile ? 0.88 : 0.72),
    y: height * (mobile ? 0.42 : 0.58),
  };

  context.save();
  context.globalCompositeOperation = "screen";
  const guide = context.createLinearGradient(throat.x, throat.y, target.x, target.y);
  guide.addColorStop(0, "rgba(97, 192, 215, 0)");
  guide.addColorStop(0.45, "rgba(214, 230, 236, 0.024)");
  guide.addColorStop(1, "rgba(242, 139, 91, 0.05)");
  context.strokeStyle = guide;
  context.lineWidth = mobile ? 10 : 24;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.shadowColor = "rgba(97, 192, 215, 0.08)";
  context.shadowBlur = mobile ? 14 : 28;
  context.beginPath();
  context.moveTo(throat.x, throat.y);
  context.bezierCurveTo(
    target.x + width * (mobile ? 0.34 : 0.26),
    target.y - height * 0.2,
    target.x + width * (mobile ? 0.16 : 0.13),
    target.y - height * 0.02,
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
    const throatOffset = side * (mobile ? 20 : 44) + wave * (mobile ? 4 : 8);
    const neckOffset = side * (mobile ? 8 : 18) + twist * (mobile ? 3 : 7);
    const endOffset = side * (mobile ? 3 : 6);

    const points = [
      {
        x: throat.x + throatOffset,
        y: throat.y + side * (mobile ? 18 : 38),
      },
      {
        x: target.x + width * (mobile ? 0.22 : 0.18) + twist * (mobile ? 8 : 15),
        y: lerp(throat.y, target.y, 0.5) + wave * (mobile ? 12 : 20),
      },
      {
        x: target.x + width * (mobile ? 0.12 : 0.1) + neckOffset,
        y: lerp(throat.y, target.y, 0.84) - side * 18,
      },
      { x: target.x + endOffset, y: target.y + endOffset * 0.44 },
    ];

    drawCableStrand(
      context,
      points,
      strandColors[index % strandColors.length]!,
      lerp(mobile ? 1 : 1.5, mobile ? 2.2 : 3.4, 1 - Math.abs(side) * 1.15),
      fade * lerp(mobile ? 0.1 : 0.12, mobile ? 0.22 : 0.28, 1 - Math.abs(side)),
    );
  }
};

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
      drawConvergingCable(context, width, height);
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
      <div ref={fieldRef} aria-hidden="true" className="chaos-field-layer" />
      <canvas ref={canvasRef} aria-hidden="true" className="site-canvas-background" />
    </>
  );
}
