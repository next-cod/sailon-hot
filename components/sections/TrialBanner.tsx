import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

export function TrialBanner() {
  return (
    <section className="relative -mt-1 overflow-hidden bg-[var(--leaf)] py-14 text-white lg:-rotate-[2deg] lg:py-16">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:rotate-[2deg]">
        <div className="flex flex-wrap items-center gap-5">
          <h2 className="text-[clamp(44px,4.2vw,72px)] font-extrabold leading-[.9] tracking-[-.055em]">14 дней<br />{" "}бесплатного теста</h2>
          <TrackedLink href={siteLinks.signup} event="hero_signup_click" className="!bg-[var(--signal)] !text-white">Попробовать бесплатно <ArrowUpRight size={18}/></TrackedLink>
        </div>
        <p className="max-w-xl text-[clamp(20px,1.8vw,28px)] font-bold leading-[1.18]">После регистрации вы получите бесплатные 10 000 кредитов на 14 дней для проверки AI-бота на реальных обращениях</p>
      </div>
    </section>
  );
}
