import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(6,17,27,0.82)] backdrop-blur-xl">
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
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-[0.01em] text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_18px_38px_rgba(159,65,44,0.24)]"
        >
          Work With Farcelis
        </Link>
      </div>
    </header>
  );
}
