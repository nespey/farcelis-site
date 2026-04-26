import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(7,17,29,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/farcelis-ai-logo.png"
            alt="Farcelis AI Consulting"
            width={144}
            height={44}
            className="h-9 w-auto brightness-[1.55]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c6a,#9f412c)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_16px_30px_rgba(159,65,44,0.24)]"
        >
          Work With Farcelis
        </Link>
      </div>
    </header>
  );
}
