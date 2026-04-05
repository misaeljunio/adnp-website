import { SectionHeading } from "@/components/section-heading";

const highlights = [
  "Comunhão",
  "Palavra",
  "Adoração",
  "Serviço",
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Sobre nós"
              title="Somos uma família em Cristo"
              description="Na Assembleia de Deus Novas de Paz, acreditamos em uma igreja viva, acolhedora e comprometida com a Palavra de Deus."
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#735748]/80">
              Nosso desejo é receber cada pessoa com amor, compartilhar a esperança do evangelho e fortalecer a fé da nossa comunidade. Aqui, você encontra um lugar para adorar, crescer e servir.
            </p>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl p-5 ${
                    index % 2 === 0 ? "bg-[#FAFAF8]" : "bg-[#DBC19C]/20"
                  }`}
                >
                  <div className="mb-3 h-2 w-10 rounded-full bg-[#0976B2]" />
                  <p className="text-lg font-bold text-[#735748]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-[#735748]/75">
                    Vivemos esses valores em cada encontro.
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
