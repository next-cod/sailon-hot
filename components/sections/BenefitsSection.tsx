import { MessageCircleMore, RefreshCcw, Repeat2, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  [RefreshCcw, "Возвращает клиента в разговор", "Если человек взял паузу, Сейлон вовремя напомнит о себе и продолжит диалог по заданному сценарию"],
  [Repeat2, "Отвечает на типовые вопросы", "Все частые вопросы бот закрывает, менеджеру не приходится десятки раз писать одно и то же"],
  [MessageCircleMore, "Собирает контекст для менеджера", "Уточняет задачу, фиксирует важные детали и передаёт сотруднику уже подготовленный диалог"],
  [Users, "Оставляет людям сложные решения", "Менеджер подключается, когда нужны опыт, ответственность или нестандартный подход"],
] as const;

export function BenefitsSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <Reveal><h2 className="section-title max-w-[1300px]">Сэйлон забирает рутину.<br />{" "}Менеджер подключается к важному</h2></Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {benefits.map(([Icon,title,copy],index)=><Reveal key={title} delay={index*.04} className="border-t border-[var(--line)] pt-6"><Icon size={25} className="text-[var(--signal-strong)]"/><h3 className="mt-7 text-[25px] font-extrabold leading-tight">{title}</h3><p className="mt-4 max-w-[540px] text-lg leading-relaxed text-[var(--muted)]">{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
