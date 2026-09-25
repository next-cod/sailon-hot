"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legalDetails, legalRegistrationLine } from "@/config/legal-details";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";

export default function ContactsPage() {
  const { language } = useSiteLanguage();
  const en = language === "en";
  useDocumentTitle(en ? "Contacts — Saleon" : "Контакты — Сэйлон");
  return (
    <main className="legal-page">
      <div className="legal-toolbar"><Link className="legal-back" href="/" aria-label={en ? "Back to site" : "Вернуться на сайт"} title={en ? "Back to site" : "Вернуться на сайт"}><ArrowLeft size={21} strokeWidth={2.25} aria-hidden="true" /></Link></div>
      <article>
        <h1>{en ? "Contacts" : "Контакты"}</h1>
        <p className="legal-intro">{en ? "Contact us about the product, implementation, or partnerships." : "Связаться по вопросам продукта, внедрения и сотрудничества."}</p>
        <section><h2>{en ? "Contact us" : "Как связаться"}</h2><p><a href={legalDetails.emailHref}>{legalDetails.email}</a><br /><a href={legalDetails.phoneHref}>{legalDetails.phone}</a></p></section>
        <section><h2>{en ? "Company details" : "Реквизиты"}</h2><p>{legalDetails.fullName}<br />{legalRegistrationLine}</p></section>
        <section><h2>{en ? "Addresses" : "Адреса"}</h2><p>{en ? "Registered address" : "Адрес регистрации"}: {legalDetails.registrationAddress}<br />{en ? "Postal address" : "Почтовый адрес"}: {legalDetails.postalAddress}</p></section>
      </article>
    </main>
  );
}
