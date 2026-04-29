"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const capabilityLinks = [
  {
    href: "/services",
    label: "AI Consulting",
    detail: "Execution-first AI strategy, implementation, and operating alignment.",
  },
  {
    href: "/services",
    label: "Workflow Architecture",
    detail: "System design for routing, handoffs, ownership, and reporting.",
  },
  {
    href: "/control-layer",
    label: "Control Layer",
    detail: "Flagship operating environment for intake, control, and intervention.",
  },
];

export function Header() {
  const [elevated, setElevated] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

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
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos/farcelis-ai-logo.png"
              alt="Farcelis AI Consulting"
              width={152}
              height={44}
              className="h-10 w-auto brightness-[1.58]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <div className="group relative">
              <button className="text-sm font-medium tracking-[0.01em] text-slate-300 transition group-hover:text-white">
                Capabilities
              </button>
              <div className="pointer-events-none absolute left-0 top-full z-40 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="surface-dark min-w-[460px] rounded-[24px] border border-cyan-100/14 bg-[#173343] p-4 shadow-[0_28px_80px_rgba(3,8,16,0.46)]">
                  <div className="rounded-[18px] border border-cyan-100/10 bg-[#1c3c4d] px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                        Capabilities
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      AI consulting, workflow architecture, and flagship system deployments designed to stabilize execution.
                    </p>
                  </div>

                  <div className="mt-3 grid gap-2">
                    {capabilityLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
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
              href="/results"
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Results
            </Link>

            <Link
              href="/team"
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Leadership
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8e5b,#f05cff)] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_18px_38px_rgba(240,92,255,0.24)]"
          >
            Start Building Structure
          </Link>
        </div>
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
