"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const capabilityLinks = [
  {
    href: "/services/ai-strategy-governance",
    label: "AI Strategy & Governance",
    detail: "Readiness, policy, adoption, and executive decision structure.",
  },
  {
    href: "/services/workflow-operations",
    label: "Workflow & Operations",
    detail: "Routing, handoffs, ownership, reporting, and operating cadence.",
  },
  {
    href: "/control-layer",
    label: "Control Layer",
    detail: "Flagship operating environment for intake, control, and intervention.",
  },
  {
    href: "/platforms",
    label: "Platforms & Integrations",
    detail: "CRM, work management, collaboration, reporting, and AI agents.",
  },
  {
    href: "/services#growth-systems",
    label: "Growth Systems",
    detail: "Social, SEO, blogs, campaigns, content, and revenue operations.",
  },
  {
    href: "/services#managed-operations",
    label: "Managed Operations",
    detail: "Fractional operations support, execution cadence, and intervention.",
  },
];

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
    href: "/platforms",
    label: "AI Agents & Assistants",
    detail: "Role-specific AI support connected to real workflow responsibilities.",
  },
  {
    href: "/industries",
    label: "Industry Operating Models",
    detail: "Service, government-adjacent, growth, operations, and enablement teams.",
  },
  {
    href: "/insights",
    label: "Insights & Playbooks",
    detail: "Practical thinking on AI adoption, governance, workflow, and growth.",
  },
  {
    href: "/resources",
    label: "Reports & Whitepapers",
    detail: "Gated executive briefings, playbooks, diagnostics, and frameworks.",
  },
  {
    href: "/events",
    label: "Webinars & Events",
    detail: "Executive sessions and workshops for AI-enabled operating systems.",
  },
];

type MenuKey = "capabilities" | "solutions";

export function Header() {
  const [elevated, setElevated] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const lastScrollY = useRef(0);

  const closeMenus = useCallback(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setElevated(currentScrollY > 10);

      if (currentScrollY <= 24) {
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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          elevated
            ? "bg-[rgba(18,32,42,0.42)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-inner flex min-h-20 items-center justify-between gap-6">
          <Link href="/" onClick={closeMenus} className="flex items-center gap-3">
            <Image
              src="/logos/farcelis-ai-logo.png"
              alt="Farcelis AI Consulting"
              width={152}
              height={44}
              className="h-10 w-auto brightness-[1.58]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("capabilities")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "capabilities" ? null : "capabilities")}
                className={`text-sm font-medium tracking-[0.01em] transition ${
                  activeMenu === "capabilities" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Capabilities
              </button>
              <div
                className={`absolute left-0 top-full z-40 pt-4 transition duration-200 ${
                  activeMenu === "capabilities"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="surface-dark min-w-[560px] rounded-[24px] border border-cyan-100/14 bg-[#173343] p-4 shadow-[0_28px_80px_rgba(3,8,16,0.46)]">
                  <div className="rounded-[18px] border border-cyan-100/10 bg-[#1c3c4d] px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                        Capabilities
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      AI, operations, platforms, growth, and managed execution services designed to stabilize how work moves.
                    </p>
                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {capabilityLinks.map((item) => (
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

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("solutions")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
                className={`text-sm font-medium tracking-[0.01em] transition ${
                  activeMenu === "solutions" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Solutions
              </button>
              <div
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
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Industries
            </Link>

            <Link
              href="/resources"
              onClick={closeMenus}
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Resources
            </Link>

            <Link
              href="/results"
              onClick={closeMenus}
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Results
            </Link>

            <Link
              href="/team"
              onClick={closeMenus}
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Leadership
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100/18 bg-white/[0.04] text-white transition hover:border-cyan-100/32 hover:bg-white/[0.08] lg:hidden"
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
          className={`border-t border-white/8 bg-[#122633]/96 px-6 pb-6 pt-2 shadow-[0_26px_70px_rgba(3,8,16,0.46)] backdrop-blur-2xl transition lg:hidden ${
            mobileOpen ? "block" : "hidden"
          }`}
        >
          <div className="grid gap-5">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Capabilities</p>
              <div className="mt-3 grid gap-2">
                {capabilityLinks.map((item) => (
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
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
