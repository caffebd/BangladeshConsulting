import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { WHATSAPP_LINK, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function ContactCTASection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-[#2a3a44] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-matrix-bg opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          {t("contact.ctaTitle")}
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          {t("contact.ctaSubtitle")}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              {t("contact.ctaButton")}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) text-white border-transparent font-semibold px-8 py-3"
            >
              <MessageCircle size={16} className="mr-2" />
              {t("hero.ctaWhatsApp")}
            </Button>
          </a>
        </div>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Phone size={15} />
            {WHATSAPP_NUMBER}
          </a>
          <span className="hidden sm:block text-white/20">|</span>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Mail size={15} />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
