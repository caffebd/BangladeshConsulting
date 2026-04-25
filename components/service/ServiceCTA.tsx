import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import { WHATSAPP_LINK, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function ServiceCTA() {
  const t = useTranslations("servicePage");

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-[#2a3a44] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-matrix-bg opacity-20 pointer-events-none" />
          <div className="relative">
            <h2 className="heading-display text-2xl sm:text-3xl text-white mb-3">
              {t("ctaTitle")}
            </h2>
            <p className="text-white/70 mb-8">{t("ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold">
                  {t("ctaButton")}
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) text-white border-transparent font-semibold">
                  <MessageCircle size={15} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/50">
              <a href={`tel:${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Phone size={12} /> {WHATSAPP_NUMBER}
              </a>
              <span className="hidden sm:block">·</span>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Mail size={12} /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
