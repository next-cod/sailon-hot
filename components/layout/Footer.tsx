"use client";

import Image from "next/image";
import Link from "next/link";
import { legalDetails, legalRegistrationLine } from "@/config/legal-details";
import { siteLinks } from "@/config/links";

export function Footer() {
  const navigateTo = (id: string) => document.querySelector<HTMLElement>(`.responsive-landing #${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <footer className="dark-panel border-t border-white/10 pb-24 pt-14 md:py-14">
      <div className="container-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1.25fr]">
        <div>
          <button type="button" className="responsive-footer-brand" onClick={() => navigateTo("top")} aria-label="Сэйлон — наверх"><Image src="/icon.png" alt="" width={46} height={46} /><strong>Сэйлон</strong></button>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60">AI продавец для входящих обращений, настроенный под знания, правила и стиль вашего бизнеса</p>
        </div>
        <FooterColumn title="Продукт" items={[["Как отвечает", "how"], ["Настройка", "control"], ["Сценарии", "demo"], ["Тарифы", "pricing"], ["Вопросы", "faq"]]} onNavigate={navigateTo} />
        <FooterColumn title="Компания" items={[["Команда", "team"]]} onNavigate={navigateTo} links={[["Обсудить доработку", "/contacts"], ["Поддержка", siteLinks.support], ["Контакты", "/contacts"]]} />
        <div className="responsive-footer-column"><strong>Документы</strong><Link href="/legal/offer">Публичная оферта</Link><Link href={siteLinks.terms}>Пользовательское соглашение</Link><Link href={siteLinks.privacy}>Политика обработки персональных данных</Link><Link href="/legal/consent">Согласие на обработку данных</Link><Link href="/legal/cookies">Политика файлов cookie</Link></div>
        <div className="responsive-footer-bottom"><span>© 2026 Сэйлон</span><span>{legalDetails.shortName}</span><span>{legalRegistrationLine}</span><a href={legalDetails.emailHref}>{legalDetails.email}</a></div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, links = [], onNavigate }: { title: string; items: string[][]; links?: string[][]; onNavigate: (id: string) => void }) {
  return <div className="responsive-footer-column"><strong>{title}</strong>{items.map(([label, id]) => <button type="button" key={id} onClick={() => onNavigate(id)}>{label}</button>)}{links.map(([label, href]) => <Link key={`${label}-${href}`} href={href}>{label}</Link>)}</div>;
}
