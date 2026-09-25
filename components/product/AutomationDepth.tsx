import { Check, UserRound } from "lucide-react";

const steps = ["Ответить", "Квалифицировать", "Собрать данные", "Передать сотруднику"];

export function AutomationDepth() {
  return (
    <div className="mt-12 rounded-[22px] border border-[var(--line)] bg-[var(--canvas)] p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[.34fr_.66fr] lg:items-center">
        <div><h3 className="sub-title">AI-бот + сотрудник</h3><p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">AI квалифицирует, снимает типовые сомнения и подключает сотрудника в заранее выбранной точке</p></div>
        <div className="grid gap-3 sm:grid-cols-4">
          {steps.map((step,index)=><div key={step} className="relative min-h-[132px] rounded-2xl border border-[var(--line)] bg-white p-4"><span className={`grid size-8 place-items-center rounded-full ${index===3?"bg-[var(--signal)] text-[var(--forest-deep)]":"bg-[var(--cream)] text-[var(--leaf)]"}`}>{index===3?<UserRound size={16}/>:<Check size={16}/>}</span><span className="absolute right-3 top-3 text-[10px] text-[var(--muted)]">0{index+1}</span><p className="mt-6 text-sm font-extrabold leading-snug">{step}</p></div>)}
        </div>
      </div>
    </div>
  );
}
