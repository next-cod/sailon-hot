import { AutomationDepth } from "@/components/product/AutomationDepth";
import { Reveal } from "@/components/ui/Reveal";

export function AutomationSection() {
  return <section className="section-space bg-white"><div className="container-shell"><Reveal><h2 className="section-title max-w-[780px]">Решите сами, сколько общения отдать боту</h2><p className="mt-6 max-w-[830px] text-xl leading-relaxed text-[var(--muted)]">Простой диалог можно автоматизировать почти целиком. В сложной продаже AI заберёт первую линию и подготовит контекст для эксперта</p></Reveal><Reveal delay={.08}><AutomationDepth/></Reveal></div></section>;
}
