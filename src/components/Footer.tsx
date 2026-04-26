import Image from "next/image";
import Link from "next/link";

import { certifications, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07111d] px-5 py-16 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div>
          <Image
            src="/logos/farcelis-ai-logo.png"
            alt="Farcelis AI Consulting"
            width={186}
            height={58}
            className="h-11 w-auto brightness-[1.55]"
          />
          <p className="mt-6 max-w-[540px] text-base leading-7 text-slate-300">
            Farcelis is an AI operational systems firm focused on workflow architecture,
            execution environments, and flagship system implementations for leaders who
            need structure before they scale more complexity.
          </p>
          <div className="mt-6 space-y-1 text-sm text-slate-400">
            <div>{site.contact.email}</div>
            <div>{site.contact.phone}</div>
            {site.contact.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d68c6a]">
            Certifications
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4">
            {certifications.map((badge) => (
              <div
                key={badge.name}
                className="rounded-[20px] border border-white/8 bg-white/5 p-3"
              >
                <div className="relative aspect-square overflow-hidden rounded-[16px] bg-white/95">
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

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-4 border-t border-white/8 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
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
