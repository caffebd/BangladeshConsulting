"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Globe, Phone } from "lucide-react";
import { WHATSAPP_LINK, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRouter } from "@/i18n/navigation";

const TOP_SERVICES = SERVICES.slice(0, 6);

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "en" ? "bn" : "en";
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-bold text-primary hover:opacity-90 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white text-sm font-bold">
            BC
          </div>
          <span className="hidden sm:block text-lg leading-tight">
            Bengal<br />
            <span className="text-accent text-sm font-semibold">Consulting</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <button
            onClick={switchLocale}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Switch language"
          >
            <Globe size={15} />
            <span>{locale === "en" ? "বাংলা" : "English"}</span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-md bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) px-4 py-2 text-sm font-semibold text-white transition-colors"
          >
            <Phone size={14} />
            {t("nav.getStarted")}
          </a>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <Menu size={20} />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-primary">
                  Bengal Consulting
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors",
                      pathname === link.href && "text-primary bg-muted font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 border-t pt-4">
                  <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Quick Services
                  </p>
                  {TOP_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      {t(`services.${s.key}.name`)}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-(--color-whatsapp) hover:bg-(--color-whatsapp-dark) px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                  >
                    <Phone size={14} />
                    {t("nav.getStarted")}
                  </a>
                  <button
                    onClick={() => { switchLocale(); setMobileOpen(false); }}
                    className="flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                  >
                    <Globe size={14} />
                    {locale === "en" ? "বাংলায় দেখুন" : "View in English"}
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
