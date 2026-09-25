"use client";

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
import { LaunchSection } from "@/components/sections/LaunchSection";
import { TrialBanner } from "@/components/sections/TrialBanner";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

type ChatMessage = { author: "bot" | "visitor"; text: string };

export function ResponsiveLanding() {
  return (
    <div className="responsive-landing hot-landing">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <JourneySection />
        <CharacterSection />
        <ControlSection />
        <DemoSection />
        <LaunchSection />
        <TrialBanner />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileCta />
      <ResponsiveChat />
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
