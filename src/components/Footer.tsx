import Image from "next/image";
import Link from "next/link";

import { certifications, site } from "@/lib/site-data";

const exploreLeft = [
  { href: "/services", label: "Capabilities" },
  { href: "/products", label: "Products" },
  { href: "/platforms", label: "Platforms" },
  { href: "/industries", label: "Industries" },
  { href: "/results", label: "Results" },
];

const exploreRight = [
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

const certificationFooterImage = (image: string) => {
  const file = image.split("/").pop() ?? image;
  if (/microsoft-developer-cert/i.test(file)) {
    return "/images/certifications/footer/ms-365.svg";
  }

  return `/images/certifications/footer/${file.replace(/\.(jpe?g|png)$/i, ".png")}`;
};

const certificationToneClass = (name: string) => {
  if (/ailcn|databricks|chrome|superhuman/i.test(name)) {
    return "brightness-[1.28] contrast-[1.12] saturate-[1.08]";
  }

  if (/microsoft developer/i.test(name)) {
    return "brightness-[1.12] contrast-[1.06] saturate-[1.08]";
  }

  return "brightness-[1.08] contrast-[1.06] saturate-[1.06]";
};

export function Footer() {
  return (
    <footer className="relative bg-transparent py-12 text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(242,139,91,0.08),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(97,192,215,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))]" />
      <div className="section-inner relative grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)_minmax(0,1fr)]">
        <div className="max-w-[760px]">
          <Link href="/" aria-label="Farcelis AI Consulting home">
            <Image
              src="/logos/farcelis-ai-logo.png"
              alt="Farcelis AI Consulting"
              width={186}
              height={58}
              className="h-10 w-auto brightness-[1.55]"
            />
          </Link>
          <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-300">
            Farcelis is an AI operational systems firm for leaders who need stronger workflow
            architecture, cleaner execution, and more reliable visibility before complexity
            compounds into drag.
          </p>
          <div className="mt-5 space-y-0.5 text-sm leading-6 text-slate-400">
            <div>{site.contact.email}</div>
            <div>{site.contact.phone}</div>
            {site.contact.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[260px]">
          <p className="eyebrow footer-column-heading text-[color:var(--color-accent)]">Explore</p>
          <div className="mx-auto mt-5 grid w-[240px] grid-cols-2 gap-x-4 gap-y-2 text-center text-sm leading-6 text-slate-300">
            <div className="grid gap-2">
              {exploreLeft.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-2">
              {exploreRight.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-5 grid w-[152px] grid-cols-2 gap-3">
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
                className="rounded-[12px] border border-white/8 bg-white/[0.035] p-1.5 shadow-[0_10px_22px_rgba(3,8,16,0.16)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-white/95">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="70px"
                    className="object-contain p-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[560px]">
          <p className="eyebrow footer-column-heading text-[color:var(--color-accent)]">Certifications</p>
          <div className="mt-5 grid w-full grid-cols-4 items-center justify-items-center gap-x-5 gap-y-4 sm:grid-cols-6">
            {certifications.map((badge) => (
              <div key={badge.name} className="relative h-12 w-18">
                <Image
                  src={certificationFooterImage(badge.image)}
                  alt={badge.name}
                  fill
                  sizes="72px"
                  className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.24)] ${certificationToneClass(badge.name)}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-inner relative mt-8 flex flex-col gap-4 pt-4 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
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
