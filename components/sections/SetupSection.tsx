import { SetupTimeline } from "@/components/product/SetupTimeline";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SetupSection() {
  return <section className="section-space bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Самостоятельный запуск" title="6 шагов от пустого аккаунта до первого тестового диалога" copy="Для базовой настройки не нужен AI-инженер. Соберите продукт по понятной последовательности и начните с одного канала."/></Reveal><Reveal delay={.08}><SetupTimeline/></Reveal></div></section>;
}
