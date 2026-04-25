"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const t = useTranslations("servicePage");

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-muted-label text-xs tracking-widest uppercase text-accent font-semibold">FAQ</span>
          <h2 className="heading-section mt-3 text-2xl sm:text-3xl text-primary">
            {t("faqTitle")}
          </h2>
        </div>

        <Accordion multiple={false} className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="border border-border/60 rounded-xl px-5 data-[state=open]:border-accent/40 transition-colors"
            >
              <AccordionTrigger className="font-heading font-semibold text-primary text-left hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
