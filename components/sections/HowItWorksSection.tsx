import { ArrowRight, BookOpen, BrainCircuit, Flag, MessageCircle, UserRoundCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const flow = [
  [BookOpen, "Знает бизнес", "Берёт факты из вашей базы знаний"],
  [BrainCircuit, "Понимает ситуацию", "Учитывает этап и контекст диалога"],
  [MessageCircle, "Отвечает уместно", "Следует правилам и характеру бренда"],
  [Flag, "Ведёт дальше", "Работает ради цели текущего этапа"],
  [UserRoundCheck, "Передаёт человеку", "Если сработало заданное условие"],
] as const;

export function HowItWorksSection() {
  return (
    <section id="how" className="section-space bg-[var(--leaf)] text-white">
      <div className="container-shell">
        <Reveal><h2 className="section-title max-w-[760px]">От первого сообщения<br />{" "}к конкретному шагу</h2><p className="mt-7 max-w-[910px] text-xl leading-[1.45] text-white/80">Наш бот не выдаёт случайные заготовки, он учитывает знания компании, контекст разговора и цель этапа, чтобы каждый ответ двигал клиента</p></Reveal>
        <div className="mt-14 grid gap-3 lg:grid-cols-5">
          {flow.map(([Icon,title,copy],index)=><Reveal key={title} delay={index*.05} className="relative min-h-[192px] rounded-2xl bg-white p-5 text-[var(--ink)]"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-[var(--cream)] text-[var(--leaf)]"><Icon size={19}/></span>{index<flow.length-1&&<ArrowRight className="hidden text-[var(--muted)] lg:block" size={18}/>}</div><h3 className="mt-6 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
