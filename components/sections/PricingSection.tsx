import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

const plans = [
  ["Старт", "5 900 ₽", "1 500 ответов бота / месяц", "≈ 300 диалогов · 1 канал"],
  ["Продажи", "11 900 ₽", "4 000 ответов бота / месяц", "≈ 800 диалогов · до 3 каналов"],
  ["Команда", "24 900 ₽", "10 000 ответов бота / месяц", "≈ 2 000 диалогов · до 5 каналов"],
] as const;

export function PricingSection() {
  return (
    <section id="pricing" className="section-space bg-[var(--canvas)]">
      <div className="container-shell">
        <Reveal className="relative"><h2 className="section-title max-w-[1150px]">14 дней бесплатно. Затем выберите пакет под ваш поток обращений</h2><span className="mt-6 inline-block -rotate-2 rounded-xl bg-white px-7 py-4 text-center font-extrabold text-[var(--leaf)] shadow-md lg:absolute lg:right-0 lg:top-0 lg:mt-0">10 000 кредитов<br />{" "}<span className="text-sm">уже на вашем аккаунте</span></span></Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map(([name,price,volume,note],index)=><Reveal key={name} delay={index*.05} className={`relative rounded-[22px] border p-7 ${index===1?"border-[var(--forest)] bg-[var(--forest)] text-white":"border-[var(--line)] bg-white"}`}>{index===1&&<span className="absolute right-4 top-[-13px] rounded-full bg-[var(--signal)] px-4 py-2 text-[10px] font-extrabold uppercase text-[var(--forest-deep)]">Берут чаще всего</span>}<p className={`font-bold ${index===1?"text-white/65":"text-[var(--muted)]"}`}>{name}</p><div className="mt-7 flex items-end gap-2"><p className="text-4xl font-extrabold tracking-[-.04em]">{price}</p><span className={`pb-1 text-xs ${index===1?"text-white/45":"text-[var(--muted)]"}`}>в месяц</span></div><p className={`mt-6 border-t pt-5 text-sm ${index===1?"border-white/15 text-white/65":"border-[var(--line)] text-[var(--muted)]"}`}>{volume}</p><p className={`mt-5 ${index===1?"text-white/75":"text-[var(--muted)]"}`}>{note}</p><TrackedLink href={siteLinks.signup} event="pricing_signup_click" variant={index===1?"light":"primary"} className="mt-7 w-full">Начать бесплатный тест</TrackedLink></Reveal>)}
        </div>
        <p className="mt-4 text-sm text-[var(--muted)]">10 000 кредитов уже на аккаунте для проверки Сэйлона на реальных диалогах.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="font-extrabold">Более 10 000 ответов в месяц</p><p className="mt-2 text-sm text-[var(--muted)]">Индивидуальные условия — согласуем заранее.</p></div><div className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="font-extrabold">Настройка нашей командой — 40 000 ₽</p><p className="mt-2 text-sm text-[var(--muted)]">Настройте сами бесплатно или поручите настройку нашей команде.</p></div></div>
      </div>
    </section>
  );
}
