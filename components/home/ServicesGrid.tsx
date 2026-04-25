import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Landmark, FileText, Store, BadgeCheck, Leaf, BookOpen, IdCard, Baby, GraduationCap } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Landmark,
  FileText,
  Store,
  BadgeCheck,
  Leaf,
  BookOpen,
  IdCard,
  Baby,
  GraduationCap,
};

export default function ServicesGrid() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">
            What We Do
          </span>
          <h2 className="heading-section mt-3 text-3xl sm:text-4xl text-primary">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <Card className="h-full border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      {Icon && <Icon size={21} className="text-accent" />}
                    </div>
                    <CardTitle className="font-heading text-base text-primary group-hover:text-accent transition-colors">
                      {t(`services.${service.key}.name`)}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-1">
                      {t(`services.${service.key}.short`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs font-medium text-muted-foreground">
                        {service.price}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        {t("services.learnMore")}
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
