"use client";

import dynamic from "next/dynamic";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCta } from "@/components/layout/MobileCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { CharacterSection } from "@/components/sections/CharacterSection";
import { ControlSection } from "@/components/sections/ControlSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { ChannelsSection } from "@/components/sections/ChannelsSection";
import { SetupSection } from "@/components/sections/SetupSection";
import { TrialBanner } from "@/components/sections/TrialBanner";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

const SavingsCalculatorPopup = dynamic(
  () => import("@/components/marketing/SavingsCalculatorPopup").then((module) => module.SavingsCalculatorPopup),
  { ssr: false },
);

type ChatMessage = { author: "bot" | "visitor"; text: string };

export function ResponsiveLanding() {
  const [compactMode, setCompactMode] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1359px)");
    const update = () => setCompactMode(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const goToPricing = () => {
    document.querySelector<HTMLElement>(".responsive-landing #pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!compactMode) return null;

  return (
    <div className="responsive-landing hot-landing">
      <Header />
      <main>
        <HeroSection />
        <TrialBanner />
        <ProblemSection />
        <JourneySection />
        <CharacterSection />
        <ControlSection />
        <DemoSection />
        <ChannelsSection />
        <SetupSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileCta />
      <ResponsiveChat />
      <SavingsCalculatorPopup onCreateBot={goToPricing} />
    </div>
  );
}

function ResponsiveChat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { author: "bot", text: "Привет! Я Сэйлон. Расскажу, как AI-бот может работать с обращениями вашего бизнеса." },
  ]);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 520);
    const openChat = () => setOpen(true);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("saleon:open-chat", openChat);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("saleon:open-chat", openChat);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = value.trim();
    if (!text) return;
    setMessages((items) => [...items, { author: "visitor", text }]);
    setValue("");
    window.setTimeout(() => setMessages((items) => [...items, {
      author: "bot",
      text: "Я отвечаю по знаниям и правилам компании, уточняю задачу и подключаю сотрудника в нужный момент.",
    }]), 420);
  };

  return (
    <>
      {visible && !open && <button type="button" className="responsive-chat-trigger is-visible" aria-label="Поразговаривать с ботом" onClick={() => setOpen(true)}>
        <MessageCircle size={22} aria-hidden="true" />
      </button>}
      {open && (
        <><div className="responsive-chat-backdrop" aria-hidden="true" onMouseDown={() => setOpen(false)} />
        <aside className="responsive-chat-panel" role="dialog" aria-modal="true" aria-labelledby="responsive-chat-title">
          <header>
            <div><Image src="/figma/logo-header.png" alt="" width={34} height={34} /><span><strong id="responsive-chat-title">Сэйлон</strong><small>AI-продавец онлайн</small></span></div>
            <button type="button" aria-label="Закрыть чат" onClick={() => setOpen(false)}><X size={20} /></button>
          </header>
          <div className="responsive-chat-messages" aria-live="polite">
            {messages.map((message, index) => <p key={`${message.author}-${index}`} className={message.author}>{message.text}</p>)}
          </div>
          <form onSubmit={submit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Напишите вопрос" aria-label="Сообщение для Сэйлона" />
            <button type="submit" aria-label="Отправить сообщение"><ArrowUp size={19} /></button>
          </form>
        </aside></>
      )}
    </>
  );
}
