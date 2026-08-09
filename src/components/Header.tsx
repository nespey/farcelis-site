"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { capabilityGroups } from "@/lib/service-catalog";

const solutionLinks = [
  {
    href: "/control-layer",
    label: "Farcelis Control Layer",
    detail: "The operating spine for intake, visibility, ownership, and action.",
  },
  {
    href: "/products",
    label: "Product Suite",
    detail: "Named Farcelis systems for diagnostics, learning, growth, and deployment.",
  },
  {
    href: "/insights",
    label: "Insights & Playbooks",
    detail: "Practical thinking on AI adoption, governance, workflow, and growth.",
  },
  {
    href: "/events",
    label: "Webinars & Events",
    detail: "Executive sessions and workshops for AI-enabled operating systems.",
  },
];

type MenuKey = "capabilities" | "solutions";
type CapabilityPillar = "Build" | "Grow" | "Operate";

const capabilityPillarImages: Record<CapabilityPillar, string> = {
  Build: "/images/navigation/capability-build-pill.png",
  Grow: "/images/navigation/capability-grow-pill.png",
  Operate: "/images/navigation/capability-operate-pill.png",
};

function CapabilityPillarHeader({ label }: { label: string }) {
  const pillar = label as CapabilityPillar;

  return (
    <div
      className={`relative isolate flex min-h-12 items-center justify-center overflow-hidden rounded-[12px] border px-4 py-2.5 text-lg font-black uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
        pillar === "Build"
          ? "border-cyan-100/16 bg-[#285869]"
          : pillar === "Grow"
            ? "border-emerald-100/16 bg-[#315f55]"
            : "border-indigo-100/16 bg-[#3e506c]"
      }`}
    >
      <Image
        src={capabilityPillarImages[pillar]}
        alt=""
        fill
        sizes="360px"
        className="h-full w-full rounded-[inherit] object-fill opacity-95"
        aria-hidden="true"
      />
      <span className="relative z-10 text-[color:var(--color-accent)] [text-shadow:0_1px_10px_rgba(3,8,16,1),0_0_18px_rgba(3,8,16,0.9)]">{label}</span>
    </div>
  );
}

function CapabilityPillarButton({
  group,
  onSelect,
}: {
  group: (typeof capabilityGroups)[number];
  onSelect: (pillar: CapabilityPillar) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(group.label as CapabilityPillar)}
      className="group flex h-full flex-col rounded-[18px] border border-cyan-100/10 bg-[#1c3c4d] p-3 text-center transition hover:-translate-y-0.5 hover:border-cyan-100/24 hover:bg-[#214557] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
    >
      <CapabilityPillarHeader label={group.label} />
      <p className="mx-auto mt-4 max-w-[270px] text-sm font-semibold leading-6 text-white">
        {group.headline}
      </p>
      <p className="mx-auto mt-2 max-w-[280px] text-xs leading-5 text-slate-200">
        {group.detail}
      </p>
    </button>
  );
}

function CapabilityFocusPanel({
  group,
  onBack,
  onClose,
}: {
  group: (typeof capabilityGroups)[number];
  onBack: () => void;
  onClose: () => void;
}) {
  return (
    <div className="rounded-[20px] border border-cyan-100/12 bg-[#1c3c4d] p-3 shadow-[0_24px_70px_rgba(3,8,16,0.38)]">
      <CapabilityPillarHeader label={group.label} />

      <div className="grid gap-5 px-2 py-5 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:px-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            {group.label} Path
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
            {group.headline}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-100">{group.buyerPrompt}</p>
        </div>

        <div className="grid gap-2.5">
          {group.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-[14px] border border-cyan-100/10 bg-[#173343] px-4 py-3 text-sm font-semibold leading-6 text-white"
            >
              {outcome}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cyan-100/10 px-2 pt-4 lg:px-4">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-cyan-100/18 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-100/32 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
        >
          Back to Build / Grow / Operate
        </button>
        <div className="flex flex-wrap gap-2">
          <Link
            href={group.pathHref}
            onClick={onClose}
            className="rounded-full border border-cyan-100/18 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-100/32 hover:text-white"
          >
            See the {group.label} Path
          </Link>
          <Link
            href={group.actionHref}
            onClick={onClose}
            className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,124,82,0.25)] transition hover:brightness-110"
          >
            {group.primaryCta}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [elevated, setElevated] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeCapability, setActiveCapability] = useState<CapabilityPillar | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  const closeMenus = useCallback(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setActiveCapability(null);
  }, []);

  const activeCapabilityGroup = activeCapability
    ? capabilityGroups.find((group) => group.label === activeCapability)
    : null;

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const canAutoHide = window.innerWidth >= 1024;

      setElevated(currentScrollY > 10);

      if (!canAutoHide || currentScrollY <= 24) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenus]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          elevated
            ? "bg-[rgba(18,32,42,0.42)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-inner flex min-h-16 items-center justify-between gap-6 sm:min-h-20">
          <Link href="/" onClick={closeMenus} className="flex min-h-10 items-center gap-3">
            <Image
              src="/logos/farcelis-ai-logo.png"
              alt="Farcelis AI Consulting"
              width={152}
              height={44}
              className="h-8 w-auto brightness-[1.58] sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeMenu === "capabilities"}
                aria-controls="capabilities-menu"
                onClick={() => {
                  setActiveMenu(activeMenu === "capabilities" ? null : "capabilities");
                  setActiveCapability(null);
                }}
                className={`inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70 ${
                  activeMenu === "capabilities" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Capabilities
              </button>
              <div
                id="capabilities-menu"
                className={`fixed left-1/2 top-16 z-40 w-[min(1120px,calc(100vw-3rem))] -translate-x-1/2 pt-3 transition duration-200 sm:top-20 ${
                  activeMenu === "capabilities"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="surface-dark max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[22px] border border-cyan-100/14 bg-[#173343] p-4 shadow-[0_28px_80px_rgba(3,8,16,0.46)]">
                  <div className="rounded-[16px] border border-cyan-100/10 bg-[#1c3c4d] px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                      Capabilities
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      AI, operations, platforms, growth, and managed execution services designed to stabilize how work moves.
                    </p>
                  </div>

                  {activeCapabilityGroup ? (
                    <div className="mt-3">
                      <CapabilityFocusPanel
                        group={activeCapabilityGroup}
                        onBack={() => setActiveCapability(null)}
                        onClose={closeMenus}
                      />
                    </div>
                  ) : (
                    <div className="mt-3 grid gap-3 lg:grid-cols-3">
                      {capabilityGroups.map((group) => (
                        <CapabilityPillarButton
                          key={group.label}
                          group={group}
                          onSelect={setActiveCapability}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeMenu === "solutions"}
                aria-controls="solutions-menu"
                onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
                className={`inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70 ${
                  activeMenu === "solutions" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Solutions
              </button>
              <div
                id="solutions-menu"
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 transition duration-200 ${
                  activeMenu === "solutions"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="surface-dark min-w-[500px] rounded-[24px] border border-cyan-100/14 bg-[#173343] p-4 shadow-[0_28px_80px_rgba(3,8,16,0.46)]">
                  <div className="rounded-[18px] border border-cyan-100/10 bg-[#1c3c4d] px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                      Solutions
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      Structured paths for leaders who need a working system, not another isolated tool.
                    </p>
                  </div>

                  <div className="mt-3 grid gap-2">
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenus}
                        className="block rounded-[16px] border border-cyan-100/12 bg-[#1c3c4d] px-4 py-3 transition hover:border-cyan-100/22 hover:bg-[#24495c] hover:text-white"
                      >
                        <div className="text-sm font-semibold text-white">{item.label}</div>
                        <div className="mt-1 text-xs leading-6 text-slate-100">{item.detail}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/industries"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
            >
              Industries
            </Link>

            <Link
              href="/resources"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
            >
              Resources
            </Link>

            <Link
              href="/results"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
            >
              Results
            </Link>

            <Link
              href="/team"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
            >
              Leadership
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            onClick={closeMenus}
            className="site-cta hidden min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_18px_38px_rgba(240,92,255,0.24)] sm:inline-flex"
          >
            Start Building Structure
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setActiveMenu(null);
              setMobileOpen((open) => !open);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-100/18 bg-white/[0.04] text-white transition hover:border-cyan-100/32 hover:bg-white/[0.08] sm:h-11 sm:w-11 lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <span className="grid gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

      <div
        id="mobile-navigation"
        className={`max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/8 bg-[#122633]/96 px-6 pb-6 pt-2 shadow-[0_26px_70px_rgba(3,8,16,0.46)] backdrop-blur-2xl transition sm:max-h-[calc(100vh-5rem)] lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
          <div className="grid gap-5">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Capabilities</p>
              <div className="mt-3 grid gap-3">
                {capabilityGroups.map((group) => (
                  <div key={group.label} className="rounded-[18px] border border-cyan-100/12 bg-white/[0.035] p-3 text-center">
                    <CapabilityPillarHeader label={group.label} />
                    <p className="mx-auto mt-3 max-w-[320px] text-sm font-semibold leading-6 text-white">
                      {group.headline}
                    </p>
                    <p className="mx-auto mt-2 max-w-[340px] text-xs leading-5 text-slate-200">
                      {group.detail}
                    </p>
                    <Link
                      href={group.pathHref}
                      onClick={closeMenus}
                      className="mt-3 inline-flex min-h-10 items-center justify-center rounded-full border border-cyan-100/18 px-4 text-sm font-semibold text-white"
                    >
                      See the {group.label} Path
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Solutions</p>
              <div className="mt-3 grid gap-2">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className="rounded-[16px] border border-cyan-100/12 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/industries", label: "Industries" },
                { href: "/resources", label: "Resources" },
                { href: "/events", label: "Events" },
                { href: "/results", label: "Results" },
                { href: "/team", label: "Leadership" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className="rounded-full border border-cyan-100/14 bg-white/[0.035] px-4 py-3 text-center text-sm font-semibold text-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="site-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-6 py-3 text-sm font-semibold text-white"
            >
              Start Building Structure
            </Link>
          </div>
        </div>
      </header>
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
}
