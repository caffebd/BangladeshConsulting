import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Shield, Users, Globe, Eye, ArrowRight } from "lucide-react";
import { LocalBusinessSchema } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDesc"),
  };
}

const VALUES = [
  { icon: Eye, key: "value1" },
  { icon: Shield, key: "value2" },
  { icon: Users, key: "value3" },
  { icon: Globe, key: "value4" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-[#2a3a44] py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-matrix-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-4xl sm:text-5xl text-white mb-5">{t("title")}</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("story")}</p>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="rounded-xl border border-border/60 bg-background p-6">
              <h2 className="heading-section text-xl text-primary mb-3">{t("missionTitle")}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("missionText")}</p>
            </div>

            {/* Expertise */}
            <div className="rounded-xl border border-border/60 bg-background p-6">
              <h2 className="heading-section text-xl text-primary mb-3">{t("expertiseTitle")}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("expertiseText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora / Expats */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">
                Serving the Diaspora
              </span>
              <h2 className="heading-section mt-3 text-2xl sm:text-3xl text-primary mb-4">
                {t("expatsTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t("expatsText")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["🇬🇧 United Kingdom", "🇺🇸 United States", "🇨🇦 Canada", "🇦🇪 UAE", "🇶🇦 Qatar", "🇸🇦 Saudi Arabia"].map((country) => (
                <div key={country} className="rounded-lg border border-border/60 bg-white p-3 text-sm font-medium text-primary text-center">
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-2xl sm:text-3xl text-primary mb-8 text-center">
            {t("valuesTitle")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.key} className="rounded-xl border border-border/60 bg-background p-5 text-center group hover:border-accent/40 transition-colors">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mx-auto group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <p className="font-heading font-semibold text-sm text-primary">{t(v.key)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-2xl sm:text-3xl text-primary mb-4">
            Ready to work with us?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get in touch for a free, no-obligation consultation about your Bangladesh needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
              {tCommon("contactUs")}
              <ArrowRight size={15} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
