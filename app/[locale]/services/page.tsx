import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Landmark, FileText, Store, BadgeCheck, Leaf, BookOpen, IdCard, Baby, GraduationCap, Clock } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDesc"),
  };
}

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Landmark, FileText, Store, BadgeCheck, Leaf, BookOpen, IdCard, Baby, GraduationCap,
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-[#2a3a44] py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-matrix-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-4xl sm:text-5xl text-white mb-4">
            {t("services.title")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                  <Card className="h-full border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                    <CardHeader className="pb-3">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        {Icon && <Icon size={22} className="text-accent" />}
                      </div>
                      <CardTitle className="font-heading text-base text-primary group-hover:text-accent transition-colors">
                        {t(`services.${service.key}.name`)}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed mt-1">
                        {t(`services.${service.key}.description`)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs font-medium">
                          {service.price}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={11} />
                          {service.timeframe}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                        {t("services.learnMore")}
                        <ArrowRight size={12} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
