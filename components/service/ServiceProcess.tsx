import { useTranslations } from "next-intl";

interface Step {
  name: string;
  text: string;
}

interface ServiceProcessProps {
  steps: Step[];
  documents?: string[];
}

export default function ServiceProcess({ steps, documents }: ServiceProcessProps) {
  const t = useTranslations("servicePage");

  return (
    <section className="py-16 bg-primary/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Process steps */}
          <div>
            <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">Our Approach</span>
            <h2 className="heading-section mt-3 text-2xl sm:text-3xl text-primary mb-8">
              {t("processTitle")}
            </h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-xs font-bold font-heading">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border min-h-4" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-heading font-semibold text-primary text-sm mb-1">{step.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents required */}
          {documents && documents.length > 0 && (
            <div>
              <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">Checklist</span>
              <h2 className="heading-section mt-3 text-2xl sm:text-3xl text-primary mb-8">
                {t("documentsLabel")}
              </h2>
              <div className="rounded-xl border border-border/60 bg-white p-6 space-y-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#4682b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
