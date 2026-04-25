import Link from "next/link";
import Image from "next/image";

import { site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(245,241,234,0.88)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase">
            <Image
              src="/logos/farcelis-ai-logo.png"
              alt="Farcelis AI Consulting"
              width={138}
              height={45}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/control-layer"
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950 sm:inline-flex"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[linear-gradient(135deg,#9f412c,#7e1f0d)] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(126,31,13,0.22)] transition hover:translate-y-[-1px]"
            >
              Build Your Control Layer
            </Link>
          </div>
        </div>

        <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
