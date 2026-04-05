import { SectionHeading } from "@/components/section-heading";
import { schedule } from "@/data/site";

export function ScheduleSection() {
  return (
    <section id="programacao" className="section-pad bg-white/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Programação"
          title="Nossa agenda semanal"
          description="Participe dos nossos cultos e momentos de estudo bíblico."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {schedule.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0976B2]">
                {item.day}
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#735748]">
                {item.title}
              </h3>
              <p className="mt-4 text-3xl font-black text-[#0976B2]">{item.time}</p>
              <p className="mt-4 text-sm leading-6 text-[#735748]/75">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
