import { KnowledgeContext } from "@/components/product/KnowledgeContext";
import { Reveal } from "@/components/ui/Reveal";

export function ControlSection() {
  return <section id="control" className="section-space bg-[var(--canvas)]"><div className="container-shell"><Reveal><h2 className="section-title max-w-[900px]">Контролируйте, из чего складывается ответ</h2><p className="mt-6 max-w-[980px] text-xl leading-relaxed text-[var(--muted)]">Сейлон использует знания компании, учитывает контекст и этап клиента, следует инструкции и сохраняет заданный характер. Сложную ситуацию при необходимости можно передать человеку</p></Reveal><Reveal delay={.08}><KnowledgeContext/></Reveal></div></section>;
}
