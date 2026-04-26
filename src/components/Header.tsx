import Image from "next/image";
import Link from "next/link";

export function Header() {
  const capabilityLinks = [
    { href: "/services", label: "AI Consulting" },
    { href: "/services", label: "Workflow Architecture" },
    { href: "/control-layer", label: "Control Layer" },
  ];

  const companyLinks = [
    { href: "/results", label: "Results" },
    { href: "/team", label: "Leadership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(6,17,27,0.8)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-[color:var(--color-accent)]/40" />
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
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
          >
            Home
          </Link>
          <div className="group relative">
            <button className="text-sm font-medium tracking-[0.01em] text-slate-300 transition group-hover:text-white">
              Capabilities
            </button>
            <div className="pointer-events-none absolute left-0 top-full z-40 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="surface-dark min-w-[240px] rounded-[22px] bg-[linear-gradient(180deg,rgba(97,192,215,0.08),rgba(255,255,255,0.03))] p-3">
                {capabilityLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-[14px] px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
          >
            Services
          </Link>
          <div className="group relative">
            <button className="text-sm font-medium tracking-[0.01em] text-slate-300 transition group-hover:text-white">
              Company
            </button>
            <div className="pointer-events-none absolute left-0 top-full z-40 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="surface-dark min-w-[220px] rounded-[22px] bg-[linear-gradient(180deg,rgba(141,119,255,0.08),rgba(255,255,255,0.03))] p-3">
                {companyLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-[14px] px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
          Work With Farcelis
        </Link>
      </div>
    </header>
  );
}
