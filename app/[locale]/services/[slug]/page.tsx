import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { SERVICES } from "@/lib/constants";
import { serviceData } from "@/lib/serviceData";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import { ServiceSchema, FAQSchema, HowToSchema } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  const t = await getTranslations({ locale, namespace: "services" });
  const name = t(`${service.key}.name`);
  const description = t(`${service.key}.description`);
  return {
    title: `${name} in Bangladesh`,
    description: `${description} Expert help from Bengal Consulting — fully managed service for locals and expats.`,
    openGraph: {
      title: `${name} in Bangladesh | Bengal Consulting`,
      description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const data = serviceData[slug];
  if (!data) notFound();

  const t = await getTranslations({ locale, namespace: "services" });
  const name = t(`${service.key}.name`);
  const description = t(`${service.key}.description`);

  // Related services (exclude current)
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <ServiceSchema
        name={name}
        description={description}
        slug={slug}
        price={service.price}
      />
      <HowToSchema
        name={`How to get ${name} in Bangladesh`}
        description={`Step-by-step process for obtaining ${name} in Bangladesh with help from Bengal Consulting.`}
        steps={data.steps}
      />
      <FAQSchema faqs={data.faqs} />

      {/* Page content */}
      <ServiceHero
        name={name}
        description={description}
        price={service.price}
        timeframe={service.timeframe}
        slug={slug}
      />

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="heading-section text-2xl text-primary mb-4">
              What is {name} in Bangladesh?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">{data.descriptionLong}</p>
          </div>
        </div>
      </section>

      <ServiceProcess steps={data.steps} documents={data.documents} />
      <ServiceFAQ faqs={data.faqs} />
      <ServiceCTA />

      {/* Related services */}
      <section className="py-14 bg-primary/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-xl text-primary mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center justify-between rounded-xl border border-border/60 bg-white px-5 py-4 group hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {t(`${s.key}.name`)}
                </span>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
