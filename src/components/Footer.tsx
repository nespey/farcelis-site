import Image from "next/image";
import Link from "next/link";

import { certifications, site } from "@/lib/site-data";

const exploreLeft = [
  { href: "/", label: "Home" },
  { href: "/control-layer", label: "Control Layer" },
  { href: "/services", label: "Services" },
];

const exploreRight = [
  { href: "/team", label: "Our Team" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#06111b] py-18 text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(242,139,91,0.11),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(97,192,215,0.1),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))]" />
      <div className="section-inner relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.44fr)_minmax(0,0.66fr)]">
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
          <div className="mx-auto mt-5 grid max-w-[280px] grid-cols-2 gap-x-8 gap-y-3 text-center text-sm leading-7 text-slate-300">
            <div className="grid gap-3">
              {exploreLeft.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-3">
              {exploreRight.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-6 grid max-w-[280px] grid-cols-2 gap-3">
            {[
              {
                src: "/images/certifications/sba-sdvosb.jpg",
                alt: "SBA Service-Disabled Veteran-Owned Certified",
              },
              {
                src: "/images/certifications/sba-edwosb.jpg",
                alt: "SBA EDWOSB Certified",
              },
            ].map((badge) => (
              <div
                key={badge.src}
                className="rounded-[16px] border border-white/8 bg-white/[0.04] p-2.5 shadow-[0_16px_34px_rgba(3,8,16,0.18)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-white/95">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="140px"
                    className="object-contain p-1.5"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-[color:var(--color-accent)]">Certifications</p>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {certifications.map((badge) => (
              <div
                key={badge.name}
                className="rounded-[16px] border border-white/8 bg-white/[0.04] p-2.5 shadow-[0_16px_34px_rgba(3,8,16,0.18)]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[12px] bg-white/95">
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
