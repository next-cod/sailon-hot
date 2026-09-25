"use client";

import { useState } from "react";
import { CircleDot, Goal, Sparkles } from "lucide-react";
import { demoScenarios } from "@/content/site-content";
import { trackMarketingEvent } from "@/lib/analytics";
import { ChatBubble } from "./ChatBubble";

export function LiveDemo() {
  const [active, setActive] = useState(0);
  const scenario = demoScenarios[active];
  return (
    <div className="mt-12 overflow-hidden rounded-[28px] bg-[var(--forest-deep)] p-4 text-white shadow-soft sm:p-7">
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-4" role="tablist" aria-label="Демонстрационные сценарии">
        {demoScenarios.map((item, index) => <button key={item.id} id={`demo-tab-${item.id}`} role="tab" aria-selected={active === index} aria-controls={`demo-panel-${item.id}`} tabIndex={active === index ? 0 : -1} onClick={() => { setActive(index); trackMarketingEvent("demo_scenario_switch"); }} className={`min-w-max rounded-full px-4 py-2.5 text-sm font-bold transition ${active === index ? "bg-[var(--signal)] text-[var(--forest-deep)]" : "bg-white/8 text-white/65 hover:bg-white/12"}`}>{item.label}</button>)}
      </div>
      <div key={scenario.id} id={`demo-panel-${scenario.id}`} role="tabpanel" aria-labelledby={`demo-tab-${scenario.id}`} aria-live="polite" className="content-swap mt-2 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <div className="rounded-[24px] bg-[var(--paper)] p-5 text-[var(--ink)] sm:p-7">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4"><div><p className="font-bold">Диалог в работе</p><p className="text-xs text-[var(--muted)]">Сейлон · отвечает сейчас</p></div><span className="flex items-center gap-2 text-xs font-bold text-[var(--success)]"><span className="status-pulse size-2 rounded-full bg-[var(--signal-strong)]"/>онлайн</span></div>
            <div className="mt-5 grid gap-3">{scenario.messages.map(([side, text], index) => <div className="scenario-message-lite" style={{ animationDelay: `${index * 80}ms` }} key={`${side}-${index}`}><ChatBubble side={side as "client" | "assistant"}>{text}</ChatBubble></div>)}</div>
          </div>
          <div className="grid content-start gap-3">
            <DemoMeta icon={<CircleDot size={17}/>} label="Этап" value={scenario.stage}/>
            <DemoMeta icon={<Sparkles size={17}/>} label="Характер" value={scenario.character}/>
            <DemoMeta icon={<Goal size={17}/>} label="Цель" value={scenario.goal}/>
            <div className="rounded-[22px] border border-[var(--signal)]/30 bg-[var(--leaf)] p-5 text-sm font-semibold leading-relaxed text-white">Для каждого сценария свои правила разговора. Меняются цель, характер и следующий шаг</div>
          </div>
      </div>
    </div>
  );
}

function DemoMeta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="rounded-[22px] border border-white/10 bg-white/[.06] p-5"><span className="flex items-center gap-2 text-xs text-white/45">{icon}{label}</span><p className="mt-3 font-bold">{value}</p></div>;
}
