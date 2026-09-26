import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

export function FinalCtaSection() {
  return (
    <section className="bg-white pb-0 pt-12">
      <div className="container-shell">
        <Reveal className="relative overflow-hidden rounded-[32px] bg-[var(--signal)] p-7 text-[var(--forest-deep)] shadow-[0_24px_70px_rgba(95,198,70,.24)] sm:p-12 lg:p-16">
          <Image src="/figma/logo-footer.png" alt="" width={320} height={320} className="pointer-events-none absolute -bottom-20 -right-8 size-72 object-contain opacity-30"/>
          <div className="relative max-w-5xl"><h2 className="section-title balance">Посмотрите, как Сэйлон будет работать именно с вашими клиентами</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--forest-deep)]/72">14 дней, чтобы собрать настройки, подключить первый канал и проверить реальные диалоги, без обязательства сразу менять весь процесс</p><div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"><TrackedLink href={siteLinks.signup} event="final_signup_click" variant="light" className="!bg-[var(--forest-deep)] !text-white hover:!bg-[var(--forest)]">Попробовать бесплатно <ArrowRight size={18}/></TrackedLink><span className="flex items-center gap-2 text-sm font-semibold"><Check size={17}/>10 000 кредитов уже на аккаунте</span></div></div>
        </Reveal>
      </div>
    </section>
  );
}
