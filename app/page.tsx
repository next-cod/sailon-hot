import { ExactFigmaCanvas } from "@/components/figma/ExactFigmaCanvas";
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
    offers: { "@type": "AggregateOffer", lowPrice: "5900", highPrice: "24900", priceCurrency: "RUB" },
  };
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <ResponsiveLanding />
      <ExactFigmaCanvas />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializedJsonLd }} />
    </>
  );
}
