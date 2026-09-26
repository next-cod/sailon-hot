import { JourneyDemo } from "@/components/product/JourneyDemo";
import { Reveal } from "@/components/ui/Reveal";

export function JourneySection() {
  return <section className="section-space bg-[var(--canvas)]"><div className="container-shell"><Reveal><h2 className="section-title max-w-5xl">На каждом этапе своя цель разговора</h2><p className="mt-6 max-w-[930px] text-xl leading-relaxed text-[var(--muted)]">Человек только заинтересовался, сравнивает варианты, сомневается или готов действовать. Для каждого состояния можно задать отдельную задачу, знания, напоминание и условие передачи сотруднику</p></Reveal><Reveal delay={.08}><JourneyDemo/></Reveal></div></section>;
}
