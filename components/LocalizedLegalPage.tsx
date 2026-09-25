"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legalDetails, legalRegistrationLine } from "@/config/legal-details";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

export type LocalizedDocument = {
  ru: { title: string; intro: string; sections: readonly LegalSection[] };
  en: { title: string; intro: string; sections: readonly LegalSection[] };
};

export function LocalizedLegalPage({ document }: { document: LocalizedDocument }) {
  const { language } = useSiteLanguage();
  const copy = document[language];

  useDocumentTitle(`${copy.title} — ${language === "ru" ? "Сэйлон" : "Saleon"}`);

  return (
    <main className="legal-page">
      <div className="legal-toolbar">
        <Link className="legal-back" href="/" aria-label={language === "ru" ? "Вернуться на сайт" : "Back to site"} title={language === "ru" ? "Вернуться на сайт" : "Back to site"}>
          <ArrowLeft size={21} strokeWidth={2.25} aria-hidden="true" />
        </Link>
      </div>
      <article>
        <h1>{copy.title}</h1>
        <p className="legal-intro">{copy.intro}</p>
        <p className="legal-updated">{language === "ru" ? "Дата редакции" : "Effective date"}: {legalDetails.effectiveDate}</p>
        {copy.sections.map((section, index) => (
          <section key={section.title}>
            <h2>{index + 1}. {section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <footer>
          <p>{legalDetails.fullName}</p>
          <p>{legalRegistrationLine}</p>
          <p>{language === "ru" ? "Адрес регистрации" : "Registered address"}: {legalDetails.registrationAddress}</p>
          <p><a href={legalDetails.emailHref}>{legalDetails.email}</a> · <a href={legalDetails.phoneHref}>{legalDetails.phone}</a></p>
        </footer>
      </article>
    </main>
  );
}
