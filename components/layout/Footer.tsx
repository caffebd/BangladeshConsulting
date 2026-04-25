import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICES, WHATSAPP_LINK, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: "/about", label: t("footer.about") },
    { href: "/contact", label: t("footer.contact") },
    { href: "/services", label: t("nav.services") },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top CTA strip */}
      <div className="bg-accent/10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {t("contact.ctaTitle")}
            </h3>
            <p className="text-sm text-white/70 mt-1">{t("contact.ctaSubtitle")}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) text-white px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {t("contact.ctaButton")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-primary text-sm font-bold font-heading">
                BC
              </div>
              <span className="font-heading font-bold text-white text-lg">Bengal Consulting</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <p className="text-xs text-white/40">{t("footer.disclaimer")}</p>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {t(`services.${s.key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More services */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.companyTitle")}
            </h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              More Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {t(`services.${s.key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors group"
                >
                  <MessageCircle size={16} className="mt-0.5 shrink-0 text-accent-light" />
                  <span>
                    <span className="block text-xs text-white/40 mb-0.5">WhatsApp</span>
                    {WHATSAPP_NUMBER}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-accent-light" />
                  <span>
                    <span className="block text-xs text-white/40 mb-0.5">Email</span>
                    {EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {currentYear} Bengal Consulting. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
