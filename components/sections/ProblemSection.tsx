import { BookOpen, MessageCircleMore, RefreshCcw, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  [Sparkles, "Отвечает с характером!", "Общается с клиентами так, как принято у вас, может быть добрым, энергичным, да вообще любым"],
  [BookOpen, "Знает ваш бизнес", "Отвечает на основе ваших услуг, условий, цен и другой информации"],
  [MessageCircleMore, "Учитывает контекст", "Помнит, о чём шёл разговор, и не начинает каждый ответ с нуля"],
  [RefreshCcw, "Напоминает о себе", "Если клиент пропал, бот напомнит о себе в нужный момент"],
] as const;

export function ProblemSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <Reveal><h2 className="section-title max-w-[520px]">Понимает что нужно клиенту</h2></Reveal>
          <Reveal><p className="max-w-[520px] text-[22px] leading-[1.35] text-[var(--muted)]">Отвечает не шаблонно, понимает запрос, контекст и следующий шаг в разговоре</p></Reveal>
        </div>
        <div className="relative mt-14 grid gap-px overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {items.map(([Icon,title,copy], index)=><Reveal key={title} delay={index*.04} className="min-h-[204px] bg-white p-8"><Icon size={28} className="text-[var(--signal-strong)]"/><h3 className="mt-5 text-[26px] font-extrabold">{title}</h3><p className="mt-3 max-w-[510px] text-lg leading-relaxed text-[var(--muted)]">{copy}</p></Reveal>)}
          <span className="absolute right-4 top-0 hidden rotate-2 rounded-xl bg-[var(--leaf)] px-8 py-5 text-xl font-extrabold text-white shadow-md lg:block">Настройте характер своего бота сами</span>
        </div>
      </div>
    </section>
  );
}
