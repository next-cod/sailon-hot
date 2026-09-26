import { BookOpenCheck, GitBranch, ShieldCheck, Sparkles } from "lucide-react";

const inputs = [
  [BookOpenCheck, "Знания компании", "условия, цены, правила"],
  [GitBranch, "Этап клиента", "сейчас сомневается"],
  [ShieldCheck, "Инструкция", "не обещать лишнего"],
  [Sparkles, "Характер", "спокойно и по делу"],
] as const;

export function KnowledgeContext() {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
      <div className="grid gap-3">
        {inputs.map(([Icon,title,copy],index)=><div key={title} className="flex items-center gap-4 rounded-xl bg-[var(--leaf)] px-5 py-4 text-white" style={{marginLeft:`${index*7}%`,maxWidth:`${100-index*7}%`}}><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10"><Icon size={19}/></span><div><p className="font-extrabold">{title}</p><p className="text-sm text-white/60">{copy}</p></div></div>)}
      </div>
      <div className="rounded-[24px] bg-white p-8 lg:p-12">
        <p className="text-[clamp(30px,3.2vw,48px)] font-extrabold leading-[1.05] tracking-[-.045em]">Вы сами задаёте,<br/>в каких ситуациях бот<br/><span className="text-[var(--leaf)]">подключает человека,</span><br/>если это нужно</p>
      </div>
    </div>
  );
}
