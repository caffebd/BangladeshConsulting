"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

interface ServiceHeroProps {
  name: string;
  description: string;
  price: string;
  timeframe: string;
  slug: string;
}

export default function ServiceHero({ name, description, price, timeframe }: ServiceHeroProps) {
  const t = useTranslations("servicePage");
  const tCommon = useTranslations("common");

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-[#2a3a44] py-16 relative overflow-hidden">
      <div className="absolute inset-0 dot-matrix-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><span>/</span></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><span>/</span></li>
            <li className="text-white font-medium" aria-current="page">{name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
              {name}
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-white/15 text-white border-white/30 gap-2 py-1.5 px-3">
                {t("priceLabel")}: <span className="font-bold">{price}</span>
              </Badge>
              <Badge className="bg-white/15 text-white border-white/30 gap-2 py-1.5 px-3">
                <Clock size={13} /> {timeframe}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-6">
                  {tCommon("requestService")}
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) text-white border-transparent font-semibold px-6">
                  <MessageCircle size={15} className="mr-2" />
                  {tCommon("whatsappUs")}
                </Button>
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Why Choose Bengal Consulting?</p>
              {[
                "Local experts with years of experience",
                "Full managed service — we do all the paperwork",
                "Regular updates throughout the process",
                "Access to accountants, solicitors & agents",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                  <span className="mt-1 h-4 w-4 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">{i + 1}</span>
                  </span>
                  <p className="text-white/80 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
