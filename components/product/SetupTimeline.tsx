import { Bot, Building2, Cable, Check, GitBranch, Library, Sparkles } from "lucide-react";

const steps = [
  [Building2, "Создайте компанию", "Базовые данные и контекст"],
  [Library, "Добавьте знания", "Услуги, цены, правила"],
  [Sparkles, "Задайте характер", "Тон и манера общения"],
  [GitBranch, "Настройте путь", "Этапы, цели и handoff"],
  [Bot, "Создайте ассистента", "Объедините настройки"],
  [Cable, "Подключите канал", "Проверьте реальные диалоги"],
] as const;

export function SetupTimeline() {
  return (
    <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {steps.map(([Icon, title, copy], index) => <li key={title} className="surface relative min-h-48 rounded-[24px] p-5"><span className="absolute right-5 top-5 text-xs text-[var(--muted)]">0{index + 1}</span><span className="grid size-11 place-items-center rounded-xl bg-[var(--cream)] text-[var(--forest)]"><Icon size={20}/></span><h3 className="mt-8 text-xl font-bold tracking-tight">{title}</h3><p className="muted mt-2 text-sm">{copy}</p>{index === steps.length - 1 && <span className="absolute bottom-5 right-5 grid size-8 place-items-center rounded-full bg-[var(--success)] text-white"><Check size={16}/></span>}</li>)}
    </ol>
  );
}
