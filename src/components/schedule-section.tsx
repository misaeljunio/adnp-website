import { SectionHeading } from "@/components/section-heading";
import { schedule } from "@/data/site";

export function ScheduleSection() {
  return (
    <section id="programacao" className="section-pad bg-white/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Programação"
          title="Nossa agenda semanal"
          description="Participe dos nossos cultos e momentos de estudo bíblico. Você é sempre bem-vindo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {schedule.map((item) => (
            <article key={item.title} className="card-surface group p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(115,87,72,0.14)]">
              <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.25em] text-[#0976B2]">
                {item.day}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-oswald)] text-xl font-bold text-[#735748]">
                {item.title}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-anton)] text-4xl text-[#0976B2] tracking-wide">
                {item.time}
              </p>
              <div className="mt-4 h-px bg-[#DBC19C]/40" />
              <p className="mt-4 font-[family-name:var(--font-crimson)] text-base leading-6 text-[#735748]/75">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
