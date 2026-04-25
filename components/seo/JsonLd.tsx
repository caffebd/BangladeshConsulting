export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bengalconsulting.com",
    name: "Bengal Consulting",
    description:
      "Professional consulting services in Bangladesh for locals and expats. Company formation, bank accounts, eTIN, VAT, passports, NID, birth certificates and more.",
    url: "https://bengalconsulting.com",
    telephone: "+8801723957059",
    email: "mdkobiruddin@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    areaServed: ["BD", "GB", "US", "CA", "AE", "SA", "QA", "KW"],
    availableLanguage: ["English", "Bengali"],
    sameAs: [],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    currenciesAccepted: "BDT",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
  price?: string;
}

export function ServiceSchema({ name, description, slug, price }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Bengal Consulting",
      url: "https://bengalconsulting.com",
    },
    areaServed: ["BD", "GB", "US", "CA", "AE"],
    url: `https://bengalconsulting.com/en/services/${slug}`,
    ...(price && { offers: { "@type": "Offer", description: price, priceCurrency: "BDT" } }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}

export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
