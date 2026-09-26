import { LiveDemo } from "@/components/product/LiveDemo";
import { Reveal } from "@/components/ui/Reveal";

export function DemoSection() {
  return <section id="demo" className="section-space bg-[var(--cream)]"><div className="container-shell"><Reveal><h2 className="section-title max-w-[1180px]">Логика разговора меняется вместе с задачей бизнеса</h2><p className="mt-6 max-w-[1240px] text-xl leading-relaxed text-[var(--muted)]">Бот понимает этап клиента, выбирает цель диалога и ведёт к нужному действию: брони, записи, заказу или передаче менеджеру</p></Reveal><Reveal delay={.08}><LiveDemo/></Reveal></div></section>;
}
