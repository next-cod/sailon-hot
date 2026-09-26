import { KnowledgeContext } from "@/components/product/KnowledgeContext";
import { Reveal } from "@/components/ui/Reveal";

export function ControlSection() {
  return <section id="control" className="section-space bg-[var(--canvas)]"><div className="container-shell"><Reveal><h2 className="section-title max-w-[900px]">Не верь AI на слово<br />{" "}настрой, за что он отвечает</h2><p className="mt-6 max-w-[980px] text-xl leading-relaxed text-[var(--muted)]">Сейлон использует знания компании, понимает этап клиента, следует инструкции и сохраняет заданный характер. Если ситуация выходит за рамки, диалог можно передать менеджеру</p></Reveal><Reveal delay={.08}><KnowledgeContext/></Reveal></div></section>;
}
