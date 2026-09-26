"use client";

import { ArrowRight, Globe2, MessageCircle } from "lucide-react";
import { HeroConsole } from "@/components/product/HeroConsole";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";
import Image from "next/image";

const channels = [
  ["VK", "/figma-exact/channel-vk.png"],
  ["Telegram", "/figma-exact/channel-telegram.png"],
  ["WhatsApp", "/figma-exact/channel-whatsapp.png"],
  ["Сайт", null],
] as const;

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-28 pt-20 lg:min-h-[840px] lg:pb-36 lg:pt-28">
      <div className="pointer-events-none absolute right-[7%] top-20 size-72 rounded-full bg-[var(--signal)]/20 blur-[68px]" />
      <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[.64fr_.46fr] lg:gap-20">
        <div>
          <h1 className="display max-w-[780px]">
            <span className="block">AI-бот для продаж, </span>
            <span>от первого сообщения до </span>
            <span className="text-[var(--leaf)]">заявки</span>
          </h1>
          <span className="absolute left-[19%] top-[70px] hidden -rotate-6 rounded-xl bg-white px-5 py-2 text-2xl font-extrabold text-[var(--leaf)] shadow-md lg:block">с характером*</span>
          <p className="mt-8 max-w-[570px] text-xl leading-[1.45] text-[var(--muted)]">Отвечает клиентам 24/7 по базе вашего бизнеса, помогает разобраться и переводит к следующему шагу</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <TrackedLink href={siteLinks.signup} event="hero_signup_click" arrow className="w-full !bg-[var(--signal)] !text-white sm:w-auto sm:min-w-[300px]">Попробовать бесплатно</TrackedLink>
            <button type="button" aria-label="Поразговаривать с ботом" onClick={() => window.dispatchEvent(new Event("saleon:open-chat"))} className="group inline-flex items-center gap-4 border-0 bg-transparent p-0 text-left font-bold"><span className="grid size-[58px] place-items-center rounded-full border-2 border-[var(--forest-deep)] bg-white transition group-hover:bg-[var(--cream)]"><MessageCircle size={24}/></span>Поразговаривать с ботом</button>
          </div>
        </div>
        <div className="relative">
          <div className="responsive-channel-grid" aria-label="Каналы подключения">
            {channels.map(([label, src]) => (
              <span key={label} title={label}>
                {src
                  ? <Image src={src} alt={label} width={42} height={42} sizes="42px" quality={90} loading="eager" />
                  : <Globe2 aria-label={label} role="img" />}
              </span>
            ))}
          </div>
          <HeroConsole />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[url('/figma/hero-transition.svg')] bg-cover bg-bottom bg-no-repeat" aria-hidden="true" />
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm font-bold text-[var(--leaf)] lg:flex"><ArrowRight size={16}/>Нешаблонные ответы на основе вашего бизнеса</div>
    </section>
  );
}
