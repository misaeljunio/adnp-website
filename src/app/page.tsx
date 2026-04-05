import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ScheduleSection } from "@/components/schedule-section";
import { MinistriesSection } from "@/components/ministries-section";
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ScheduleSection />
        <MinistriesSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
