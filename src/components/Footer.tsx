import Link from "next/link";
import Image from "next/image";

import { certifications, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-black/6 bg-slate-950 px-4 py-16 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image
            src="/logos/farcelis-ai-logo.png"
            alt="Farcelis AI Consulting"
            width={180}
            height={60}
            className="h-12 w-auto brightness-[1.6] contrast-[1.1]"
          />
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Farcelis is an AI operational systems firm focused on workflow
            architecture, execution environments, and flagship system
            implementations for leaders who need more control before they scale.
          </p>
          <div className="mt-6 space-y-1 text-sm text-slate-400">
            <div>{site.contact.email}</div>
            <div>{site.contact.phone}</div>
            {site.contact.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Accreditations and certifications
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {certifications.map((badge) => (
              <div
                key={badge.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-white/95">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    sizes="(max-width: 768px) 30vw, 12vw"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <div>© 2025 Farcelis AI Consulting. All Rights Reserved.</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {site.legalLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
