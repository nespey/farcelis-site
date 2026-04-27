"use client";

import { useEffect, useRef } from "react";

type Segment = {
  a: { x: number; y: number };
  b: { x: number; y: number };
  id: string;
  el?: SVGLineElement;
};

type NodeRecord = {
  x: number;
  y: number;
  key: string;
  el?: SVGCircleElement;
};

type Spark = {
  g: SVGGElement;
  glow: SVGCircleElement;
  core: SVGCircleElement;
  speed: number;
  delay: number;
  activeSeg: number | null;
  fromNode: string | null;
  toNode: string | null;
  progress: number;
  started: boolean;
  history: number[];
};

export function HoneycombBackground() {
  const baseGridRef = useRef<SVGGElement | null>(null);
  const activeGridRef = useRef<SVGGElement | null>(null);
  const nodeLayerRef = useRef<SVGGElement | null>(null);
  const activeNodeLayerRef = useRef<SVGGElement | null>(null);
  const sparkLayerRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const baseGrid = baseGridRef.current;
    const activeGrid = activeGridRef.current;
    const nodeLayer = nodeLayerRef.current;
    const activeNodeLayer = activeNodeLayerRef.current;
    const sparkLayer = sparkLayerRef.current;

    if (!baseGrid || !activeGrid || !nodeLayer || !activeNodeLayer || !sparkLayer) {
      return;
    }

    const baseGridEl = baseGrid;
    const activeGridEl = activeGrid;
    const nodeLayerEl = nodeLayer;
    const activeNodeLayerEl = activeNodeLayer;
    const sparkLayerEl = sparkLayer;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    baseGrid.replaceChildren();
    activeGrid.replaceChildren();
    nodeLayer.replaceChildren();
    activeNodeLayer.replaceChildren();
    sparkLayer.replaceChildren();

    const cols = 9;
    const rows = 7;
    const size = 42;
    const h = Math.sqrt(3) * size;
    const xStart = 430;
    const yStart = 132;

    const pointMap = new Map<string, boolean>();
    const segments: Segment[] = [];
    const nodes = new Map<string, NodeRecord>();

    const segmentTimers = new Map<number, number>();
    const nodeTimers = new Map<string, number>();
    const startupTimers: number[] = [];

    const svgNs = "http://www.w3.org/2000/svg";

    const key = (x: number, y: number) => `${Math.round(x)}-${Math.round(y)}`;

    function addNode(x: number, y: number) {
      const k = key(x, y);
      if (!nodes.has(k)) nodes.set(k, { x, y, key: k });
    }

    function addSegment(a: { x: number; y: number }, b: { x: number; y: number }) {
      const ka = key(a.x, a.y);
      const kb = key(b.x, b.y);
      const id = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`;
      if (pointMap.has(id)) return;
      pointMap.set(id, true);
      segments.push({ a, b, id });
      addNode(a.x, a.y);
      addNode(b.x, b.y);
    }

    function hexPoints(cx: number, cy: number, r: number) {
      return [
        { x: cx, y: cy - r },
        { x: cx + h / 2, y: cy - r / 2 },
        { x: cx + h / 2, y: cy + r / 2 },
        { x: cx, y: cy + r },
        { x: cx - h / 2, y: cy + r / 2 },
        { x: cx - h / 2, y: cy - r / 2 },
      ];
    }

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const cx = xStart + col * h + (row % 2 ? h / 2 : 0);
        const cy = yStart + row * (size * 1.5);
        const pts = hexPoints(cx, cy, size);
        for (let i = 0; i < 6; i += 1) addSegment(pts[i]!, pts[(i + 1) % 6]!);
      }
    }

    segments.forEach((seg) => {
      const base = document.createElementNS(svgNs, "line");
      base.setAttribute("x1", String(seg.a.x));
      base.setAttribute("y1", String(seg.a.y));
      base.setAttribute("x2", String(seg.b.x));
      base.setAttribute("y2", String(seg.b.y));
      base.setAttribute("class", "hc-base-line");
      baseGridEl.appendChild(base);

      const active = document.createElementNS(svgNs, "line");
      active.setAttribute("x1", String(seg.a.x));
      active.setAttribute("y1", String(seg.a.y));
      active.setAttribute("x2", String(seg.b.x));
      active.setAttribute("y2", String(seg.b.y));
      active.setAttribute("class", "hc-active-line");
      active.style.transition = "opacity 480ms ease";
      activeGridEl.appendChild(active);
      seg.el = active;
    });

    nodes.forEach((node) => {
      const idle = document.createElementNS(svgNs, "circle");
      idle.setAttribute("cx", String(node.x));
      idle.setAttribute("cy", String(node.y));
      idle.setAttribute("r", "1.9");
      idle.setAttribute("class", "hc-node");
      nodeLayerEl.appendChild(idle);

      const hot = document.createElementNS(svgNs, "circle");
      hot.setAttribute("cx", String(node.x));
      hot.setAttribute("cy", String(node.y));
      hot.setAttribute("r", "2.8");
      hot.setAttribute("class", "hc-node-active");
      hot.style.transition = "opacity 420ms ease";
      activeNodeLayerEl.appendChild(hot);
      node.el = hot;
    });

    const adjacency = new Map<string, { index: number; next: string }[]>();
    nodes.forEach((node) => adjacency.set(node.key, []));

    segments.forEach((seg, index) => {
      adjacency.get(key(seg.a.x, seg.a.y))?.push({ index, next: key(seg.b.x, seg.b.y) });
      adjacency.get(key(seg.b.x, seg.b.y))?.push({ index, next: key(seg.a.x, seg.a.y) });
    });

    function createSpark(radius: number, speed: number, delay: number): Spark {
      const g = document.createElementNS(svgNs, "g");
      const glow = document.createElementNS(svgNs, "circle");
      glow.setAttribute("r", String(radius));
      glow.setAttribute("class", "hc-spark");
      const core = document.createElementNS(svgNs, "circle");
      core.setAttribute("r", String(Math.max(1.8, radius * 0.32)));
      core.setAttribute("class", "hc-spark-core");
      g.appendChild(glow);
      g.appendChild(core);
      sparkLayerEl.appendChild(g);
      return {
        g,
        glow,
        core,
        speed,
        delay,
        activeSeg: null,
        fromNode: null,
        toNode: null,
        progress: 0,
        started: false,
        history: [],
      };
    }

    const sparks = [
      createSpark(5.8, 0.0036, 0),
      createSpark(5.0, 0.0029, 1800),
      createSpark(6.3, 0.0024, 4200),
      createSpark(4.6, 0.0032, 6300),
    ];

    const nodeList = Array.from(nodes.values());

    function pickStart() {
      return nodeList[Math.floor(Math.random() * nodeList.length)]!.key;
    }

    function activateSegment(segIndex: number, strength = 1) {
      const seg = segments[segIndex];
      if (!seg?.el) return;
      seg.el.style.opacity = String(Math.max(0.08, Math.min(0.5, strength * 0.55)));
      const existing = segmentTimers.get(segIndex);
      if (existing) window.clearTimeout(existing);
      const timeout = window.setTimeout(() => {
        if (seg.el) seg.el.style.opacity = "0";
      }, 920);
      segmentTimers.set(segIndex, timeout);
    }

    function activateNode(nodeKey: string, strength = 1) {
      const node = nodes.get(nodeKey);
      if (!node?.el) return;
      node.el.style.opacity = String(Math.max(0.08, Math.min(0.7, strength * 0.7)));
      const existing = nodeTimers.get(nodeKey);
      if (existing) window.clearTimeout(existing);
      const timeout = window.setTimeout(() => {
        if (node.el) node.el.style.opacity = "0";
      }, 720);
      nodeTimers.set(nodeKey, timeout);
    }

    function chooseNext(currentKey: string, history: number[]) {
      const options = adjacency.get(currentKey) ?? [];
      const filtered = options.filter((opt) => !history.includes(opt.index));
      const pool = filtered.length ? filtered : options;
      return pool[Math.floor(Math.random() * pool.length)]!;
    }

    function resetSpark(spark: Spark) {
      spark.fromNode = pickStart();
      const next = chooseNext(spark.fromNode, []);
      spark.activeSeg = next.index;
      spark.toNode = next.next;
      spark.progress = 0;
      spark.history = [next.index];
      spark.started = true;
      activateNode(spark.fromNode, 0.45);
    }

    function moveSpark(spark: Spark, dt: number) {
      if (!spark.started || spark.activeSeg === null || !spark.fromNode || !spark.toNode) return;
      const seg = segments[spark.activeSeg];
      const fromNode = nodes.get(spark.fromNode);
      const toNode = nodes.get(spark.toNode);
      if (!seg || !fromNode || !toNode) return;

      spark.progress += dt * spark.speed;

      const p = Math.min(spark.progress, 1);
      const x = fromNode.x + (toNode.x - fromNode.x) * p;
      const y = fromNode.y + (toNode.y - fromNode.y) * p;
      spark.g.setAttribute("transform", `translate(${x} ${y})`);
      spark.glow.style.opacity = "0.78";
      spark.core.style.opacity = "0.95";

      activateSegment(spark.activeSeg, 0.24 + p * 0.5);
      if (p > 0.66) activateNode(spark.toNode, 0.52 + (p - 0.66) * 0.45);

      if (spark.progress >= 1) {
        spark.fromNode = spark.toNode;
        const next = chooseNext(spark.toNode, spark.history.slice(-3));
        spark.activeSeg = next.index;
        spark.toNode = next.next;
        spark.progress = 0;
        spark.history.push(next.index);
        if (spark.history.length > 6) spark.history.shift();
      }
    }

    let frameId = 0;
    let last = performance.now();

    if (!prefersReducedMotion) {
      sparks.forEach((spark) => {
        const timeout = window.setTimeout(() => resetSpark(spark), spark.delay);
        startupTimers.push(timeout);
      });

      const frame = (now: number) => {
        const dt = now - last;
        last = now;
        sparks.forEach((spark) => moveSpark(spark, dt));
        frameId = window.requestAnimationFrame(frame);
      };

      frameId = window.requestAnimationFrame(frame);
    }

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      startupTimers.forEach((timeout) => window.clearTimeout(timeout));
      segmentTimers.forEach((timeout) => window.clearTimeout(timeout));
      nodeTimers.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="hc-bg" aria-hidden="true">
      <div className="hc-bg-surface" />
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="hc-svg">
        <defs>
          <linearGradient id="hcActiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,220,165,0)" />
            <stop offset="48%" stopColor="rgba(255,223,170,0.08)" />
            <stop offset="74%" stopColor="rgba(255,220,158,0.34)" />
            <stop offset="90%" stopColor="rgba(255,231,189,0.76)" />
            <stop offset="100%" stopColor="rgba(255,248,232,0.95)" />
          </linearGradient>
          <filter id="hcBaseGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.8" result="g" />
            <feMerge>
              <feMergeNode in="g" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hcActiveGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="g1" />
            <feMerge>
              <feMergeNode in="g1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hcSparkGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="6" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="b2" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="b2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hcNodeGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3.6" result="n" />
            <feMerge>
              <feMergeNode in="n" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g ref={baseGridRef} />
        <g ref={activeGridRef} />
        <g ref={nodeLayerRef} />
        <g ref={activeNodeLayerRef} />
        <g ref={sparkLayerRef} />
      </svg>
    </div>
  );
}
