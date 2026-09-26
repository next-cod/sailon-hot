"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

const nav = [
  ["Как отвечает", "how"],
  ["Настройка", "control"],
  ["Сценарии", "demo"],
  ["Тарифы", "pricing"],
  ["Вопросы", "faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  const navigateTo = (id: string) => {
    setOpen(false);
    document.querySelector<HTMLElement>(`.responsive-landing #${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header className="responsive-header sticky top-0 z-50 border-b border-black/5 bg-[rgba(255,255,255,.94)] backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-4 lg:h-[86px]">
        <button type="button" className="responsive-brand" onClick={() => navigateTo("top")} aria-label="Сэйлон — наверх">
          <Image src="/figma/logo-header.png" alt="" width={44} height={44} priority />
          <strong>Сэйлон</strong>
        </button>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {nav.map(([label, id]) => <button key={id} type="button" className="text-[15px] font-bold transition-colors hover:text-[var(--leaf)]" onClick={() => navigateTo(id)}>{label}</button>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <TrackedLink href={siteLinks.signup} event="hero_signup_click" className="!min-h-[50px] !rounded-[11px] !px-6">Попробовать бесплатно</TrackedLink>
        </div>
        <button className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="container-shell border-t border-[var(--line)] py-5 lg:hidden">
          <nav className="grid gap-1" aria-label="Мобильная навигация">
            {nav.map(([label, id]) => <button key={id} type="button" onClick={() => navigateTo(id)} className="rounded-xl px-3 py-3 text-left text-lg font-semibold hover:bg-white">{label}</button>)}
          </nav>
          <TrackedLink href={siteLinks.signup} event="hero_signup_click" className="mt-4 w-full">Попробовать бесплатно</TrackedLink>
        </div>
      )}
    </header>
  );
}
