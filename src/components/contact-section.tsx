import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    label: "Endereço",
    value: siteConfig.address,
    href: null,
  },
  {
    label: "Telefone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/55${siteConfig.whatsapp.replace(/\D/g, "")}`,
  },
  {
    label: "Instagram",
    value: siteConfig.instagram,
    href: `https://instagram.com/${siteConfig.instagram.replace("@", "")}`,
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="section-pad bg-white/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contato"
          title="Fale com a igreja"
          description="Estamos aqui para receber você. Entre em contato ou venha nos visitar."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Contact info card */}
          <div className="card-surface p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-[#735748]">
              Informações
            </h3>
            <dl className="mt-6 space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#DBC19C]/30">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0976B2]" />
                  </div>
                  <div>
                    <dt className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.2em] text-[#0976B2]">
                      {item.label}
                    </dt>
                    {item.href ? (
                      <dd className="mt-1">
                        <a
                          href={item.href}
                          className="font-[family-name:var(--font-crimson)] text-base text-[#735748]/85 transition-colors hover:text-[#0976B2]"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="mt-1 font-[family-name:var(--font-crimson)] text-base text-[#735748]/85">
                        {item.value}
                      </dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Map iframe */}
          <div className="card-surface overflow-hidden p-0">
            <div className="border-b border-[#dbc19c]/40 bg-[#FAFAF8] px-6 py-4 sm:px-8">
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-[#735748]">
                Localização
              </h3>
            </div>
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.93276470311!2d-47.98166222397405!3d-16.068978429778095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93598421a4255555%3A0xb18bb07da63106d2!2sAssembleia%20De%20Deus%20Novas%20De%20Paz!5e0!3m2!1spt-BR!2sbr!4v1775418654833!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[420px]"
                title="Localização da igreja"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}