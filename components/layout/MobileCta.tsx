"use client";

import { useEffect, useState } from "react";
import { siteLinks } from "@/config/links";

export function MobileCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 520);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return <a href={siteLinks.signup} data-analytics-event="hero_signup_click" className="signal-shadow fixed inset-x-3 bottom-3 z-40 flex min-h-12 items-center justify-center rounded-xl bg-[var(--signal)] px-5 py-3 text-center text-sm font-extrabold text-white md:hidden">Попробовать бесплатно</a>;
}
