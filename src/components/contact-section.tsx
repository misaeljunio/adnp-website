import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contato" className="section-pad bg-white/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contato"
          title="Fale com a igreja"
          description="Atualize estes dados com o endereço e contatos oficiais da ADNP."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-6 sm:p-8">
            <h3 className="text-2xl font-black text-[#735748]">Informações</h3>
            <dl className="mt-6 space-y-5 text-[#735748]/85">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0976B2]">
                  Endereço
                </dt>
                <dd className="mt-1 text-base">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0976B2]">
                  Telefone
                </dt>
                <dd className="mt-1 text-base">{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0976B2]">
                  WhatsApp
                </dt>
                <dd className="mt-1 text-base">{siteConfig.whatsapp}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0976B2]">
                  Instagram
                </dt>
                <dd className="mt-1 text-base">{siteConfig.instagram}</dd>
              </div>
            </dl>
          </div>

          <div className="card-surface overflow-hidden p-0">
            <div className="border-b border-[#dbc19c]/40 bg-[#FAFAF8] px-6 py-4 sm:px-8">
              <h3 className="text-2xl font-black text-[#735748]">Localização</h3>
            </div>
            <div className="flex min-h-[320px] items-center justify-center bg-[linear-gradient(135deg,rgba(9,118,178,0.08),rgba(219,193,156,0.12))] p-8 text-center">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-xl font-black text-[#0976B2]">AD</span>
                </div>
                <p className="text-lg font-bold text-[#735748]">
                  Mapa / localização pode ser inserido aqui
                </p>
                <p className="mt-2 text-sm text-[#735748]/75">
                  Substitua este bloco por um mapa do Google Maps, se desejar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
