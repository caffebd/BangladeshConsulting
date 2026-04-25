import { useTranslations } from "next-intl";
import { Shield, Users, Globe, Eye, Layers, MapPin } from "lucide-react";

const REASONS = [
  { icon: Shield, titleKey: "reason1Title", descKey: "reason1Desc" },
  { icon: Users, titleKey: "reason2Title", descKey: "reason2Desc" },
  { icon: Globe, titleKey: "reason3Title", descKey: "reason3Desc" },
  { icon: Eye, titleKey: "reason4Title", descKey: "reason4Desc" },
  { icon: Layers, titleKey: "reason5Title", descKey: "reason5Desc" },
  { icon: MapPin, titleKey: "reason6Title", descKey: "reason6Desc" },
];

export default function TrustSection() {
  const t = useTranslations("trust");

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">
            Our Advantage
          </span>
          <h2 className="heading-section mt-3 text-3xl sm:text-4xl text-primary">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-border/60 bg-background p-6 hover:border-accent/40 hover:shadow-md transition-all duration-200"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                  <Icon size={20} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-primary text-base mb-2">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
