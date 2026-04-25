import { useTranslations } from "next-intl";
import { MessageCircle, ClipboardList, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: MessageCircle, titleKey: "step1Title", descKey: "step1Desc", number: "01" },
  { icon: ClipboardList, titleKey: "step2Title", descKey: "step2Desc", number: "02" },
  { icon: CheckCircle2, titleKey: "step3Title", descKey: "step3Desc", number: "03" },
];

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 dot-matrix-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">
            Simple Process
          </span>
          <h2 className="heading-section mt-3 text-3xl sm:text-4xl text-primary">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div className="absolute top-12 left-1/6 right-1/6 h-px bg-border hidden md:block" style={{ left: "20%", right: "20%" }} />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Number + icon circle */}
                <div className="relative mb-6">
                  <div className="h-24 w-24 rounded-full bg-white border-2 border-border shadow-md flex items-center justify-center group-hover:border-accent transition-colors duration-200">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-white text-xs font-bold font-heading flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="heading-section text-lg text-primary mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {t(step.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
