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

          {/* Map placeholder */}
          <div className="card-surface overflow-hidden p-0">
            <div className="border-b border-[#dbc19c]/40 bg-[#FAFAF8] px-6 py-4 sm:px-8">
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-[#735748]">
                Localização
              </h3>
            </div>
            <div className="flex min-h-[320px] items-center justify-center bg-[linear-gradient(135deg,rgba(9,118,178,0.06),rgba(219,193,156,0.10))] p-8 text-center">
              <div>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                  <svg width="28" height="28" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <rect x="20" y="6" width="4" height="32" rx="2" fill="#0976B2" />
                    <rect x="10" y="17" width="24" height="4" rx="2" fill="#0976B2" />
                    <circle cx="22" cy="6" r="3.5" fill="#DBC19C" />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-oswald)] text-lg font-bold text-[#735748]">
                  Como chegar
                </p>
                <p className="mt-2 font-[family-name:var(--font-crimson)] text-base text-[#735748]/70">
                  {siteConfig.address}
                </p>
                <p className="mt-4 text-sm text-[#735748]/50">
                  Substitua este bloco por um mapa do Google Maps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
