"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { capabilityGroups } from "@/lib/service-catalog";

const resourceLinks = [
  {
    href: "/resources",
    label: "Resource Library",
    detail: "Guides and checklists that help you choose the right service.",
  },
  {
    href: "/insights",
    label: "Insights & Playbooks",
    detail: "Plain-language notes on websites, growth, workflow, and AI use.",
  },
  {
    href: "/events",
    label: "Webinars & Briefings",
    detail: "Short sessions on practical business and technology problems.",
  },
  {
    href: "/products",
    label: "Tools & Assessments",
    detail: "Simple tools that help clarify what to build, grow, or manage.",
  },
];

type MenuKey = "services" | "resources";
type CapabilityPillar = "Build" | "Grow" | "Operate";

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
      <span className="relative z-10 text-white">{label}</span>
    </div>
  );
}

function ServiceLinkButton({
  item,
  onClose,
}: {
  item: (typeof capabilityGroups)[number]["links"][number];
  onClose: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="flex min-h-[58px] flex-col justify-center rounded-[12px] border border-cyan-100/10 bg-[#173343] px-3 py-2 text-center transition hover:-translate-y-0.5 hover:border-cyan-100/24 hover:bg-[#214557] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70"
    >
      <span className="text-[0.78rem] font-semibold leading-4 text-white">{item.label}</span>
      <span className="mx-auto mt-1 max-w-[18rem] text-[0.66rem] leading-4 text-slate-300">
        {item.detail}
      </span>
    </Link>
  );
}

function ServicePillarColumn({
  group,
  onClose,
}: {
  group: (typeof capabilityGroups)[number];
  onClose: () => void;
}) {
  return (
    <div className="flex h-full flex-col rounded-[16px] border border-cyan-100/10 bg-[#1c3c4d] p-2.5 text-center">
      <CapabilityPillarHeader label={group.label} />
      <p className="mx-auto mt-2 max-w-[310px] text-xs font-semibold leading-5 text-white">
        {group.headline}
      </p>
      <p className="mx-auto mt-1.5 max-w-[320px] text-[0.7rem] leading-4 text-slate-300">
        {group.detail}
      </p>
      <div className="mt-2.5 grid gap-1.5">
        {group.links.map((item) => (
          <ServiceLinkButton key={`${group.label}-${item.label}`} item={item} onClose={onClose} />
        ))}
      </div>
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
  const topNavItemClass =
    "inline-flex min-h-11 cursor-pointer items-center rounded-full px-1 text-sm font-medium tracking-[0.01em] transition duration-150 hover:-translate-y-0.5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70";

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
        <div className="section-inner grid min-h-16 grid-cols-[auto_1fr_auto] items-center gap-4 sm:min-h-20 lg:grid-cols-[240px_1fr_240px] lg:gap-6">
          <Link href="/" onClick={closeMenus} className="flex min-h-10 items-center gap-3 justify-self-start">
            <Image
              src="/logos/farcelis-ai-logo.png"
              alt="Farcelis AI Consulting"
              width={152}
              height={44}
              className="h-8 w-auto brightness-[1.58] sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeMenu === "services"}
                aria-controls="services-menu"
                onClick={() => {
                  setActiveMenu(activeMenu === "services" ? null : "services");
                }}
                className={`${topNavItemClass} ${
                  activeMenu === "services" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Services
              </button>
              <div
                id="services-menu"
                className={`fixed left-1/2 top-16 z-40 w-[min(1160px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition duration-200 sm:top-20 ${
                  activeMenu === "services"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="surface-dark max-h-[calc(100vh-5.75rem)] overflow-hidden rounded-[22px] border border-cyan-100/14 bg-[#173343] p-3 shadow-[0_28px_80px_rgba(3,8,16,0.46)]">
                  <div className="rounded-[16px] border border-cyan-100/10 bg-[#1c3c4d] px-4 py-3 text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                      SERVICES
                    </div>
                    <p className="mx-auto mt-2 max-w-[820px] text-sm leading-6 text-slate-100">
                      Choose what you need: something built, more leads, or help keeping the work organized.
                    </p>
                  </div>

                  <div className="mt-2.5 grid gap-2.5 lg:grid-cols-3">
                    {capabilityGroups.map((group) => (
                      <ServicePillarColumn
                        key={group.label}
                        group={group}
                        onClose={closeMenus}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/industries"
              onClick={closeMenus}
              className={`${topNavItemClass} text-slate-300`}
            >
              Industries
            </Link>

            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeMenu === "resources"}
                aria-controls="resources-menu"
                onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
                className={`${topNavItemClass} ${
                  activeMenu === "resources" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Resources
              </button>
              <div
                id="resources-menu"
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 transition duration-200 ${
                  activeMenu === "resources"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="surface-dark min-w-[500px] rounded-[24px] border border-cyan-100/14 bg-[#173343] p-4 shadow-[0_28px_80px_rgba(3,8,16,0.46)]">
                  <div className="rounded-[18px] border border-cyan-100/10 bg-[#1c3c4d] px-4 py-3 text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                      Resources
                    </div>
                    <p className="mx-auto mt-2 max-w-[420px] text-sm leading-6 text-slate-100">
                      Guides, examples, and tools that help you choose the right next step.
                    </p>
                  </div>

                  <div className="mt-3 grid gap-2">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenus}
                        className="block rounded-[16px] border border-cyan-100/12 bg-[#1c3c4d] px-4 py-3 text-center transition hover:border-cyan-100/22 hover:bg-[#24495c] hover:text-white"
                      >
                        <div className="text-sm font-semibold text-white">{item.label}</div>
                        <div className="mx-auto mt-1 max-w-[420px] text-xs leading-6 text-slate-100">{item.detail}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/results"
              onClick={closeMenus}
              className={`${topNavItemClass} text-slate-300`}
            >
              Results
            </Link>

            <Link
              href="/team"
              onClick={closeMenus}
              className={`${topNavItemClass} text-slate-300`}
            >
              Leadership
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className={`${topNavItemClass} text-slate-300`}
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setActiveMenu(null);
              setMobileOpen((open) => !open);
            }}
            className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-cyan-100/18 bg-white/[0.04] text-white transition hover:border-cyan-100/32 hover:bg-white/[0.08] sm:h-11 sm:w-11 lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <span className="grid gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
          <Link
            href="/contact"
            onClick={closeMenus}
            className="btn-primary hidden whitespace-nowrap justify-self-end transition duration-150 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/70 lg:inline-flex"
          >
            Start Building Structure
          </Link>
        </div>

      <div
        id="mobile-navigation"
        className={`max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/8 bg-[#122633]/96 px-6 pb-6 pt-2 shadow-[0_26px_70px_rgba(3,8,16,0.46)] backdrop-blur-2xl transition sm:max-h-[calc(100vh-5rem)] lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
          <div className="grid gap-5">
            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Services</p>
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
                    <div className="mt-3 grid gap-2">
                      {group.links.map((item) => (
                        <ServiceLinkButton
                          key={`mobile-${group.label}-${item.label}`}
                          item={item}
                          onClose={closeMenus}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow text-[color:var(--color-accent)]">Resources</p>
              <div className="mt-3 grid gap-2">
                {resourceLinks.map((item) => (
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
                { href: "/industries", label: "Industries" },
                { href: "/results", label: "Results" },
                { href: "/team", label: "Leadership" },
                { href: "/contact", label: "Contact" },
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
          </div>
        </div>
      </header>
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
}
