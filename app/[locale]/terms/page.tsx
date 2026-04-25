import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Bengal Consulting",
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading-display text-3xl sm:text-4xl text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p>
            By using the Bengal Consulting website and services, you agree to the following terms and conditions.
          </p>
          <h2 className="heading-section text-xl text-primary">Services</h2>
          <p>
            Bengal Consulting provides consulting and administrative assistance services related to Bangladesh government procedures. We are not a law firm and do not provide legal advice. Our services are administrative in nature.
          </p>
          <h2 className="heading-section text-xl text-primary">Fees & Payments</h2>
          <p>
            All fees are quoted individually based on your specific requirements. Prices shown on this website are indicative and subject to change. A detailed quote will be provided before any work commences.
          </p>
          <h2 className="heading-section text-xl text-primary">Liability</h2>
          <p>
            Bengal Consulting acts as a facilitator and cannot guarantee specific outcomes from government authorities. We are not liable for delays or decisions made by third-party government bodies.
          </p>
          <h2 className="heading-section text-xl text-primary">Contact</h2>
          <p>
            For any queries regarding these terms, please contact us at{" "}
            <a href="mailto:mdkobiruddin@gmail.com" className="text-accent">
              mdkobiruddin@gmail.com
            </a>
            .
          </p>
          <p className="text-xs text-muted-foreground mt-10">Last updated: April 2026</p>
        </div>
      </div>
    </div>
  );
}
