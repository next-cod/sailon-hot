import { ChannelInbox } from "@/components/product/ChannelInbox";
import { Reveal } from "@/components/ui/Reveal";

export function ChannelsSection() {
  return <section className="section-space bg-[var(--canvas)]"><div className="container-shell"><Reveal><h2 className="section-title max-w-[1250px]">Все подключённые диалоги в одном окне</h2><p className="mt-6 max-w-[1260px] text-xl leading-relaxed text-[var(--muted)]">Все диалоги в одном окне. Сразу видно, откуда пришёл клиент, о чём он спрашивал и чем закончился разговор</p></Reveal><Reveal delay={.08}><ChannelInbox/></Reveal></div></section>;
}
