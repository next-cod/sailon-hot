"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { trackMarketingEvent, type MarketingEvent } from "@/lib/analytics";

type Props = ComponentPropsWithoutRef<"a"> & {
  event?: MarketingEvent;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
};

export function TrackedLink({ event, children, variant = "primary", arrow = false, className = "", ...props }: Props) {
  const variants = {
    primary: "signal-shadow bg-[var(--signal)] text-[var(--forest-deep)] hover:bg-[var(--signal-strong)]",
    secondary: "border border-[var(--line)] bg-white/60 text-[var(--ink)] hover:bg-white",
    light: "bg-[#f8f5ed] !text-[#0d2c27] hover:bg-white",
  };
  return (
    <a
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-extrabold transition-colors duration-200 ${variants[variant]} ${className}`}
      onClick={(e) => {
        props.onClick?.(e);
        if (!e.defaultPrevented && typeof props.href === "string" && props.href.startsWith("#")) {
          e.preventDefault();
          document.querySelector<HTMLElement>(`.responsive-landing ${props.href}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        }
        if (event) trackMarketingEvent(event);
      }}
    >
      {children}
      {arrow && <ArrowUpRight aria-hidden="true" size={18} />}
    </a>
  );
}
