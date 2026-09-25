"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { characters } from "@/content/site-content";
import { trackMarketingEvent } from "@/lib/analytics";

export function CharacterSwitcher() {
  const [active, setActive] = useState(0);
  const item = characters[active];
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-[.78fr_1.22fr]">
      <div className="dark-panel rounded-[22px] p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm text-white/55"><SlidersHorizontal size={16}/>Характер ассистента</div>
        <div className="mt-7 grid gap-2" role="tablist" aria-label="Варианты характера">
          {characters.map((character, index) => (
            <button key={character.id} id={`character-tab-${character.id}`} role="tab" aria-selected={active === index} aria-controls={`character-panel-${character.id}`} tabIndex={active === index ? 0 : -1} onClick={() => { setActive(index); trackMarketingEvent("character_switch"); }} className={`flex min-h-14 items-center justify-between rounded-xl px-4 text-left transition ${active === index ? "bg-white text-[var(--forest-deep)]" : "text-white/70 hover:bg-white/10"}`}>
              <span className="font-bold">{character.label}</span><span className="text-xs opacity-60">{character.mood}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--paper)] p-6 sm:p-10">
        <p className="sub-title max-w-xl">«Хочу попробовать. С чего начать?»</p>
        <div key={item.id} id={`character-panel-${item.id}`} role="tabpanel" aria-labelledby={`character-tab-${item.id}`} aria-live="polite" className="content-swap mt-9 max-w-2xl rounded-[24px] rounded-bl-[7px] bg-[var(--signal)] p-6 text-lg leading-relaxed text-[var(--forest-deep)]">
            {item.answer}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {item.mood.split(" · ").map((tag) => <span key={tag} className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold">{tag}</span>)}
          <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold">без канцелярита</span>
        </div>
      </div>
    </div>
  );
}
