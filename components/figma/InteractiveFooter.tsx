import Link from "next/link";
import Image from "next/image";
import { legalDetails, legalRegistrationLine } from "@/config/legal-details";

type Language = "ru" | "en";

const footerCopy = {
  ru: {
    description: "AI продавец для входящих обращений, настроенный под знания, правила и стиль вашего бизнеса.",
    product: "Продукт",
    company: "Компания",
    documents: "Документы",
    productLinks: ["Как отвечает", "Настройка под бизнес", "Сценарии", "Тарифы", "Вопросы"],
    companyLinks: ["Команда", "Обсудить доработку", "Поддержка", "Контакты"],
    documentLinks: [
      "Публичная оферта",
      "Пользовательское соглашение",
      "Политика обработки персональных данных",
      "Согласие на обработку персональных данных",
      "Политика использования файлов cookie",
    ],
    legal: "© 2026 Сэйлон",
    entity: legalDetails.shortName,
    registration: legalRegistrationLine,
  },
  en: {
    description: "An AI sales assistant for inbound requests, configured around your business knowledge, rules, and tone of voice.",
    product: "Product",
    company: "Company",
    documents: "Documents",
    productLinks: ["How it responds", "Business setup", "Scenarios", "Pricing", "Questions"],
    companyLinks: ["Team", "Discuss a custom feature", "Support", "Contacts"],
    documentLinks: ["Public offer", "Terms of use", "Personal data policy", "Personal data consent", "Cookie policy"],
    legal: "© 2026 Saleon",
    entity: legalDetails.shortName,
    registration: legalRegistrationLine,
  },
} as const;

const productHrefs = ["#how", "#features", "#demo", "#pricing", "#faq"];
const companyHrefs = ["#team", "#custom", "/support", "/contacts"];
const documentHrefs = [
  "/legal/offer",
  "/legal/terms",
  "/legal/privacy",
  "/legal/consent",
  "/legal/cookies",
];

export function InteractiveFooter({ language, onNavigate }: { language: Language; onNavigate: (href: string) => void }) {
  const copy = footerCopy[language];

  const renderLinks = (labels: readonly string[], hrefs: readonly string[]) =>
    labels.map((label, index) => {
      const href = hrefs[index];
      return href.startsWith("#") ? (
        <button key={href} type="button" onClick={() => onNavigate(href)}>{label}</button>
      ) : (
        <Link key={href} href={href}>{label}</Link>
      );
    });

  return (
    <footer className="interactive-footer" aria-label={language === "ru" ? "Подвал сайта" : "Website footer"}>
      <div className="footer-brand">
        <button type="button" className="footer-brand-row" onClick={() => onNavigate("#top")} aria-label={language === "ru" ? "Сэйлон — наверх" : "Saleon — back to top"}>
          <Image src="/icon.png" alt="" width={52} height={52} />
          <strong>{language === "ru" ? "Сэйлон" : "Saleon"}</strong>
        </button>
        <p>{copy.description}</p>
      </div>
      <nav className="footer-column" aria-label={copy.product}>
        <strong>{copy.product}</strong>
        {renderLinks(copy.productLinks, productHrefs)}
      </nav>
      <nav className="footer-column" aria-label={copy.company}>
        <strong>{copy.company}</strong>
        {renderLinks(copy.companyLinks, companyHrefs)}
      </nav>
      <nav className="footer-column footer-documents" aria-label={copy.documents}>
        <strong>{copy.documents}</strong>
        {renderLinks(copy.documentLinks, documentHrefs)}
      </nav>
      <div className="footer-bottom">
        <div>
          <span>{copy.legal}</span>
          <span>{copy.entity}</span>
          <span>{copy.registration}</span>
        </div>
        <a href={legalDetails.emailHref}>{legalDetails.email}</a>
      </div>
    </footer>
  );
}
