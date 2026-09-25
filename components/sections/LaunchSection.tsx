import Image from "next/image";
import { ArrowRight, Globe2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

const channels = [
  { label: "VK", image: "/figma-exact/channel-vk.png" },
  { label: "Telegram", image: "/figma-exact/channel-telegram.png" },
  { label: "Сайт", image: null },
  { label: "MAX", image: null },
] as const;

const steps = ["Компания", "Знания", "Характер", "Путь", "Ассистент", "Канал"] as const;

export function LaunchSection() {
  return (
    <section id="launch" className="section-space bg-white">
      <div className="container-shell">
        <Reveal className="grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <h2 className="section-title max-w-[700px]">Подключите канал и начните с одного сценария</h2>
          <p className="max-w-[620px] text-xl leading-relaxed text-[var(--muted)]">
            Базовую настройку можно пройти самостоятельно: добавить знания, выбрать характер, собрать путь клиента и подключить первый канал.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal className="rounded-[28px] bg-[var(--forest-deep)] p-7 text-white sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[.08em] text-[var(--signal)]">Где работает</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {channels.map((channel) => (
                <div key={channel.label} className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                  <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white/95 text-[var(--forest-deep)]">
                    {channel.image ? (
                      <Image src={channel.image} alt="" width={44} height={44} sizes="44px" />
                    ) : channel.label === "MAX" ? (
                      <strong className="text-[11px] tracking-[-.03em]">MAX</strong>
                    ) : (
                      <Globe2 size={22} aria-hidden="true" />
                    )}
                  </span>
                  <strong className="text-base sm:text-lg">{channel.label}</strong>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="rounded-[28px] border border-[var(--line)] bg-[var(--canvas)] p-7 sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[.08em] text-[var(--leaf)]">Как запустить</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="flex min-h-24 items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_10px_35px_rgba(10,36,29,.05)]">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--signal)] text-sm font-extrabold text-[var(--forest-deep)]">{index + 1}</span>
                  <strong>{step}</strong>
                  {index < steps.length - 1 && <ArrowRight size={17} className="ml-auto hidden text-[var(--leaf)] xl:block" aria-hidden="true" />}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-[var(--muted)]">Нужна отдельная интеграция или нестандартная логика?</p>
              <TrackedLink href={siteLinks.contact} event="custom_solution_click" variant="secondary" className="shrink-0">Обсудить задачу</TrackedLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
