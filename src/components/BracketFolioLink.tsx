"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import type { ReactNode } from "react";

type BracketFolioLinkProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  placement: "homepage" | "services_operate";
};

export function BracketFolioLink({ children, className, ariaLabel, placement }: BracketFolioLinkProps) {
  return (
    <Link
      href="https://bracketfolio.io/"
      aria-label={ariaLabel}
      className={className}
      onClick={() => track("bracketfolio_referral_click", { placement })}
    >
      {children}
    </Link>
  );
}
