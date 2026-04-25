import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("contactTitle"),
    description: t("contactDesc"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">
            Get In Touch
          </span>
          <h1 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-xl border border-border/60 bg-white p-6 space-y-5">
              <h2 className="font-heading font-semibold text-primary text-lg">
                {t("orContact")}
              </h2>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg p-3 hover:bg-muted transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                    {t("whatsappLabel")}
                  </p>
                  <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    {WHATSAPP_NUMBER}
                  </p>
                  <p className="text-xs text-muted-foreground">Tap to chat instantly</p>
    
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 rounded-lg p-3 hover:bg-muted transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                    {t("emailContactLabel")}
                  </p>
                  <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors break-all">
                    {EMAIL}
                  </p>
                  <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
                </div>
              </a>

              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-start gap-4 rounded-lg p-3 hover:bg-muted transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    {WHATSAPP_NUMBER}
                  </p>
                  <p className="text-xs text-muted-foreground">Bangladesh office hours</p>
                </div>
              </a>
            </div>

            {/* Info box */}
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-5">
              <h3 className="font-heading font-semibold text-primary text-sm mb-2">
                Free Initial Consultation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All enquiries include a free initial consultation. We&apos;ll assess your requirements and provide a clear, transparent quote before any work begins.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="font-heading font-semibold text-primary text-xl mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
