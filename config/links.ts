import { legalDetails } from "@/config/legal-details";

const trialEmailSubject = encodeURIComponent("Заявка на бесплатный тест Сэйлона");

export const siteLinks = {
  signup: `${legalDetails.emailHref}?subject=${trialEmailSubject}`,
  login: "#pricing",
  contact: "/contacts",
  support: "/support",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
} as const;

export const siteConfig = {
  name: "Сэйлон",
  canonicalUrl: "https://sailon-hot.vercel.app",
  description:
    "Сэйлон — управляемый AI-продавец для входящих обращений. Задайте знания, характер и путь клиента и проверьте реальные диалоги бесплатно.",
} as const;
