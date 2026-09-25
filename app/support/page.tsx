"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legalDetails } from "@/config/legal-details";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";

export default function SupportPage() {
  const { language } = useSiteLanguage();
  const en = language === "en";
  useDocumentTitle(en ? "Support — Saleon" : "Поддержка — Сэйлон");
  return (
    <main className="legal-page">
      <div className="legal-toolbar"><Link className="legal-back" href="/" aria-label={en ? "Back to site" : "Вернуться на сайт"} title={en ? "Back to site" : "Вернуться на сайт"}><ArrowLeft size={21} strokeWidth={2.25} aria-hidden="true" /></Link></div>
      <article>
        <h1>{en ? "Support" : "Поддержка"}</h1>
        <p className="legal-intro">{en ? "We can help with connection, setup, and using your AI sales assistant." : "Поможем с подключением, настройками и работой AI-продавца."}</p>
        <section><h2>{en ? "Contact support" : "Как обратиться"}</h2><p><a href={legalDetails.emailHref}>{legalDetails.email}</a><br /><a href={legalDetails.phoneHref}>{legalDetails.phone}</a></p></section>
        <section><h2>{en ? "What to include" : "Что указать в обращении"}</h2><p>{en ? "Please include the account contact, a short description of the issue, and screenshots if they help reproduce it." : "Укажите контакт, использованный в аккаунте, кратко опишите проблему и приложите скриншоты, если они помогут её воспроизвести."}</p></section>
      </article>
    </main>
  );
}
