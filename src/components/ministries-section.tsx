import { SectionHeading } from "@/components/section-heading";
import { ministries } from "@/data/site";

const icons: Record<string, string> = {
  Crianças: "✦",
  Jovens: "✦",
  "Louvor e Adoração": "✦",
  "Ação Social": "✦",
};

export function MinistriesSection() {
  return (
    <section id="ministerios" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ministérios"
          title="Servindo com amor"
          description="Conheça algumas das frentes de atuação da nossa igreja."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ministries.map((item, index) => (
            <article
              key={item.title}
              className="card-surface group flex gap-6 p-6 sm:p-8 transition-shadow hover:shadow-[0_16px_40px_rgba(115,87,72,0.14)]"
            >
              {/* Icon badge */}
              <div
                className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: index % 2 === 0 ? "rgba(9,118,178,0.1)" : "rgba(219,193,156,0.35)" }}
              >
                <svg width="22" height="22" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect x="20" y="6" width="4" height="32" rx="2" fill={index % 2 === 0 ? "#0976B2" : "#735748"} />
                  <rect x="10" y="17" width="24" height="4" rx="2" fill={index % 2 === 0 ? "#0976B2" : "#735748"} />
                </svg>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-[#735748]">
                  {item.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-crimson)] text-base leading-7 text-[#735748]/80">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
