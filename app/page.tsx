import { ResponsiveLanding } from "@/components/responsive/ResponsiveLanding";
import { siteConfig } from "@/config/links";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Сэйлон",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: { "@type": "AggregateOffer", lowPrice: "10000", highPrice: "30000", priceCurrency: "RUB" },
  };
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <ResponsiveLanding />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializedJsonLd }} />
    </>
  );
}
