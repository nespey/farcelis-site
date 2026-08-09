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

function CapabilityPillarHeader({ label }: { label: string }) {
  const pillar = label as CapabilityPillar;

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[12px] border px-4 py-3 text-base font-bold uppercase tracking-[0.24em] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
        pillar === "Build"
          ? "border-cyan-100/16 bg-[#285869]"
          : pillar === "Grow"
            ? "border-emerald-100/16 bg-[#315f55]"
            : "border-indigo-100/16 bg-[#3e506c]"
      }`}
    >
      {pillar === "Build" ? (
        <svg
          className="absolute inset-0 h-full w-full opacity-36"
          viewBox="0 0 320 48"
          aria-hidden="true"
          focusable="false"
        >
          <g fill="none" stroke="#8fd3df" strokeLinecap="round" strokeLinejoin="round">
            <rect x="18" y="11" width="86" height="26" rx="2" strokeOpacity="0.5" />
            <path d="M30 18h62M30 25h42M30 32h56" strokeOpacity="0.28" />
            <path d="M116 14h28M116 24h36M116 34h22" strokeOpacity="0.3" />
            <rect x="216" y="12" width="78" height="24" rx="2" strokeOpacity="0.42" />
            <path d="M226 18h56M226 25h36M226 32h48" strokeOpacity="0.24" />
            <path d="M158 12v24M162 12v24" strokeOpacity="0.28" />
          </g>
        </svg>
      ) : null}

      {pillar === "Grow" ? (
        <svg
          className="absolute inset-0 h-full w-full opacity-38"
          viewBox="0 0 320 48"
          aria-hidden="true"
          focusable="false"
        >
          <g fill="none" stroke="#9bd8bd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 30C58 13 88 13 120 28" strokeOpacity="0.42" />
            <path d="M200 28c28-18 62-18 96 2" strokeOpacity="0.42" />
            <path d="M72 22c-9-11-21-10-28 0 11 3 20 2 28 0Z" fill="#9bd8bd" fillOpacity="0.16" strokeOpacity="0.45" />
            <path d="M106 25c11-10 23-7 28 4-12 1-20-1-28-4Z" fill="#9bd8bd" fillOpacity="0.16" strokeOpacity="0.45" />
            <path d="M234 24c-10-10-22-8-28 2 11 2 19 1 28-2Z" fill="#9bd8bd" fillOpacity="0.16" strokeOpacity="0.45" />
            <path d="M270 27c11-9 23-5 27 6-12 0-20-2-27-6Z" fill="#9bd8bd" fillOpacity="0.16" strokeOpacity="0.45" />
          </g>
        </svg>
      ) : null}

      {pillar === "Operate" ? (
        <svg
          className="absolute inset-0 h-full w-full opacity-38"
          viewBox="0 0 320 48"
          aria-hidden="true"
          focusable="false"
        >
          <g fill="none" stroke="#aebcf2" strokeLinecap="round">
            <path d="M24 16h108M188 16h108" strokeOpacity="0.32" />
            <path d="M24 24h74M132 24h164" strokeOpacity="0.26" />
            <path d="M24 32h130M206 32h90" strokeOpacity="0.22" />
            <circle cx="86" cy="16" r="5" fill="#3e506c" strokeOpacity="0.48" />
            <circle cx="126" cy="24" r="5" fill="#aebcf2" fillOpacity="0.16" strokeOpacity="0.48" />
            <circle cx="202" cy="32" r="5" fill="#3e506c" strokeOpacity="0.48" />
            <circle cx="246" cy="16" r="5" fill="#aebcf2" fillOpacity="0.14" strokeOpacity="0.42" />
          </g>
        </svg>
      ) : null}

      <span className="relative z-10 text-[color:var(--color-accent)]">{label}</span>
    </div>
  );
}

export function Header() {
  const [elevated, setElevated] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  const closeMenus = useCallback(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, []);

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
                onClick={() => setActiveMenu(activeMenu === "capabilities" ? null : "capabilities")}
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

                  <div className="mt-3 grid gap-3 lg:grid-cols-3">
                    {capabilityGroups.map((group) => (
                      <div key={group.label} className="flex flex-col rounded-[16px] border border-cyan-100/10 bg-[#1c3c4d] p-3 text-center">
                        <CapabilityPillarHeader label={group.label} />
                        <p className="mx-auto mt-3 min-h-10 max-w-[280px] text-center text-xs leading-5 text-slate-100">{group.detail}</p>
                        <div className="mt-3 grid flex-1 grid-rows-6 gap-1.5">
                          {group.links.map((item) => (
                            <Link
                              key={`${group.label}-${item.label}`}
                              href={item.href}
                              title={item.detail}
                              onClick={closeMenus}
                              className="flex min-h-11 items-center justify-center rounded-[12px] border border-cyan-100/10 bg-[#173343] px-3.5 py-2.5 text-center transition hover:border-cyan-100/22 hover:bg-[#24495c] hover:text-white"
                            >
                              <div className="text-sm font-semibold leading-5 text-white">{item.label}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
                    <div className="mt-3 grid gap-2">
                      {group.links.map((item) => (
                        <Link
                          key={`${group.label}-${item.label}`}
                          href={item.href}
                          onClick={closeMenus}
                          className="rounded-[14px] border border-cyan-100/10 bg-[#173343]/70 px-4 py-3 text-center text-sm font-semibold text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
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
