import { Check, Minus, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const fit = ["Есть стабильный поток входящих", "Повторяются одинаковые вопросы", "Важна скорость первого ответа", "Есть понятные этапы разговора", "Часть коммуникации можно описать правилами"];
const notFit = ["Каждая продажа требует экспертной диагностики", "Все предложения рассчитываются только вручную", "Входящих обращений слишком мало для окупаемой автоматизации"];

export function TrustSection() {
  return (
    <section className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Честный fit" title="Сейлон полезен не каждой компании — и это нормально" copy="Лучший результат получается там, где есть повторяющаяся первая линия и понятный следующий шаг. Сложные решения остаются у людей."/></Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-[28px] border border-[var(--line)] bg-[#edf4ee] p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[var(--success)] text-white"><Check size={20}/></span><h3 className="text-2xl font-bold">Хороший сценарий для старта</h3></div><ul className="mt-7 grid gap-3">{fit.map(item => <li key={item} className="flex gap-3"><Check size={17} className="mt-1 shrink-0 text-[var(--success)]"/><span>{item}</span></li>)}</ul></Reveal>
          <Reveal delay={.07} className="rounded-[28px] border border-[var(--line)] bg-[#eef2ef] p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[var(--cream)] text-[var(--muted)]"><Minus size={20}/></span><h3 className="text-2xl font-bold">Когда стоит считать аккуратнее</h3></div><ul className="mt-7 grid gap-3">{notFit.map(item => <li key={item} className="flex gap-3"><Minus size={17} className="mt-1 shrink-0 text-[var(--muted)]"/><span>{item}</span></li>)}</ul></Reveal>
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[var(--line)] px-5 py-4 text-sm"><ShieldCheck size={19} className="mt-0.5 shrink-0 text-[var(--leaf)]"/><p><b>Проверяйте не обещания, а механизм:</b> прозрачные настройки, возможность вмешаться, честные ограничения и 14 дней на тест в собственных диалогах.</p></div>
      </div>
    </section>
  );
}
