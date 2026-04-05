import { SectionHeading } from "@/components/section-heading";
import { ministries } from "@/data/site";

export function MinistriesSection() {
  return (
    <section id="ministerios" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ministérios"
          title="Servindo com amor"
          description="Conheça algumas das frentes de atuação da igreja."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ministries.map((item) => (
            <article key={item.title} className="card-surface p-6 sm:p-8">
              <div className="mb-4 h-1.5 w-16 rounded-full bg-[#DBC19C]" />
              <h3 className="text-2xl font-black text-[#735748]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#735748]/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
