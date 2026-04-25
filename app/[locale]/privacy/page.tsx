import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bengal Consulting",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading-display text-3xl sm:text-4xl text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p>
            Bengal Consulting (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information.
          </p>
          <h2 className="heading-section text-xl text-primary">Information We Collect</h2>
          <p>
            We collect information you provide directly to us through our contact form, including your name, email address, phone number, and message content.
          </p>
          <h2 className="heading-section text-xl text-primary">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your enquiries and provide the services you request. We do not sell, share, or distribute your personal information to third parties.
          </p>
          <h2 className="heading-section text-xl text-primary">Data Retention</h2>
          <p>
            We retain your contact information only for as long as necessary to fulfil the services requested or as required by applicable law.
          </p>
          <h2 className="heading-section text-xl text-primary">Contact</h2>
          <p>
            For any privacy-related queries, please contact us at{" "}
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
