import Image from "next/image";
import Link from "next/link";

import { certifications, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#06111b] py-18 text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(214,140,106,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))]" />
      <div className="section-inner relative grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.5fr)_minmax(0,0.55fr)]">
        <div>
          <Image
            src="/logos/farcelis-ai-logo.png"
            alt="Farcelis AI Consulting"
            width={186}
            height={58}
            className="h-11 w-auto brightness-[1.55]"
          />
          <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300">
            Farcelis is an AI operational systems firm for leaders who need stronger workflow
            architecture, cleaner execution, and more reliable visibility before complexity
            compounds into drag.
          </p>
          <div className="mt-6 space-y-1 text-sm leading-7 text-slate-400">
            <div>{site.contact.email}</div>
            <div>{site.contact.phone}</div>
            {site.contact.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-[color:var(--color-accent)]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-[color:var(--color-accent)]">Certifications</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {certifications.map((badge) => (
              <div
                key={badge.name}
                className="surface-dark rounded-[18px] p-3"
              >
                <div className="relative aspect-square overflow-hidden rounded-[14px] bg-white/95">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    sizes="(max-width: 768px) 30vw, 10vw"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-inner relative mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <div>© 2026 Farcelis AI Consulting. All rights reserved.</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {site.legalLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
