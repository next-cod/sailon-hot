import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/links";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "Сэйлон — AI-продавец для входящих обращений",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Сэйлон — AI-продавец для входящих обращений",
    description: siteConfig.description,
    url: "/",
    siteName: "Сэйлон",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Сэйлон — AI-продавец для входящих обращений",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#163d35",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
