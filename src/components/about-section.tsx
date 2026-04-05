import { SectionHeading } from "@/components/section-heading";

const highlights = [
  {
    label: "Comunhão",
    text: "Um lugar de acolhimento e pertencimento para toda a família.",
  },
  {
    label: "Palavra",
    text: "Ensinamentos fiéis à Bíblia para fortalecer a sua fé.",
  },
  {
    label: "Adoração",
    text: "Momentos de louvor que elevam o coração a Deus.",
  },
  {
    label: "Serviço",
    text: "Amor ao próximo expresso em ação concreta.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-pad">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Sobre nós"
              title="Somos uma família em Cristo"
              description="Na Assembleia de Deus Novas de Paz, acreditamos em uma igreja viva, acolhedora e comprometida com a Palavra de Deus."
            />
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-crimson)] text-lg leading-8 text-[#735748]/80">
              Nosso desejo é receber cada pessoa com amor, compartilhar a esperança do evangelho e fortalecer a fé da nossa comunidade. Aqui, você encontra um lugar para adorar, crescer e servir.
            </p>
            {/* Decorative divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#DBC19C]/50" />
              <svg width="24" height="24" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <rect x="20" y="4" width="4" height="36" rx="2" fill="#DBC19C" />
                <rect x="8" y="16" width="28" height="4" rx="2" fill="#DBC19C" />
              </svg>
              <div className="h-px flex-1 bg-[#DBC19C]/50" />
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: index % 2 === 0 ? "rgba(250,250,248,1)" : "rgba(219,193,156,0.2)" }}
                >
                  <div className="mb-3 h-1.5 w-8 rounded-full bg-[#0976B2]" />
                  <p className="font-[family-name:var(--font-oswald)] text-lg font-semibold text-[#735748]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-crimson)] text-sm leading-6 text-[#735748]/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
