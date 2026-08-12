import Image from "next/image";
import Link from "next/link";

import { certifications, site } from "@/lib/site-data";

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/results", label: "Results" },
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
    <footer className="relative overflow-hidden border-t border-cyan-100/10 bg-[#061824] py-10 text-slate-300 shadow-[0_-28px_90px_rgba(2,8,14,0.22)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(242,139,91,0.08),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(97,192,215,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))]" />
      <div className="section-inner relative grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)_minmax(0,1fr)]">
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
          <p className="mt-5 max-w-[760px] text-xl font-semibold leading-8 tracking-[-0.03em] text-white">
            Stop losing time to scattered work. Farcelis connects the websites, tools,
            workflows, and follow-up your business depends on.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="space-y-0.5 text-sm leading-6 text-slate-400">
              <div>{site.contact.email}</div>
              <div>{site.contact.phone}</div>
              {site.contact.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>

            <div className="flex items-center gap-3.5 sm:pb-0.5">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group flex h-10 w-10 shrink-0 items-center justify-center transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,0.32)] transition duration-200 group-hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.38)]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[260px]">
          <p className="eyebrow footer-column-heading text-[color:var(--color-accent)]">Explore</p>
          <div className="mx-auto mt-5 grid w-[260px] grid-cols-3 gap-x-5 gap-y-3 text-center text-sm leading-6 text-slate-300">
            {exploreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-8 items-center justify-center transition hover:-translate-y-0.5 hover:text-white"
              >
                {item.label}
              </Link>
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

      <div className="section-inner relative mt-6 flex flex-col gap-3 pt-3 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <div>© 2026 Farcelis AI Consulting. All rights reserved.</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {site.legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-9 items-center transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
