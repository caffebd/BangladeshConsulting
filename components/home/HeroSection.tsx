import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center py-20 lg:py-28">
      {/* Full-bleed background image */}
      <Image
        src="/images/dhaka-header.jpg"
        alt="Dhaka city skyline — Bengal Consulting serves clients across Bangladesh and abroad"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={60}
      />

      {/* Dark gradient overlay: strong on the left where text sits, fades to semi-transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30 pointer-events-none" />

      {/* Subtle bottom vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />

      {/* Dot matrix texture overlay */}
      <div className="absolute inset-0 dot-matrix-bg opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge className="mb-6 bg-accent/20 text-white border-accent/30 hover:bg-accent/30 font-medium">
            {t("tagline")}
          </Badge>

          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t("headline")}
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
            {t("subheadline")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/services">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-6"
              >
                {t("ctaPrimary")}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) text-white border-transparent font-semibold px-6"
              >
                <MessageCircle size={16} className="mr-2" />
                {t("ctaWhatsApp")}
              </Button>
            </a>
          </div>

          {/* Trust line */}
          <p className="text-sm text-white/60 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-(--color-whatsapp) shrink-0" />
            {t("trustLine")}
          </p>
        </div>
      </div>
    </section>
  );
}
