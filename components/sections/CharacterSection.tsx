import { CharacterSwitcher } from "@/components/product/CharacterSwitcher";
import { Reveal } from "@/components/ui/Reveal";

export function CharacterSection() {
  return <section className="section-space bg-white"><div className="container-shell"><Reveal><h2 className="section-title max-w-[730px]">Пусть бот разговаривает так, как принято у вас</h2><p className="mt-6 max-w-[790px] text-xl leading-relaxed text-[var(--muted)]">Один и тот же вопрос не должен звучать одинаково в цветочном магазине, фитнес-клубе и автосервисе. Вы задаёте тон, формальность, живость и манеру ответа</p></Reveal><Reveal delay={.08}><CharacterSwitcher/></Reveal></div></section>;
}
