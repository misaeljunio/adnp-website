import Link from "next/link";

export function CtaSection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="card-surface bg-[#0976B2] px-6 py-12 text-center text-white sm:px-10 lg:px-16">
          <p className="eyebrow text-[#DBC19C]">Venha participar</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Será uma alegria receber você e sua família
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
            Junte-se a nós nos cultos e encontre um lugar de fé, cuidado e comunhão.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#contato" className="btn-secondary">
              Entrar em contato
            </Link>
            <Link href="#programacao" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Ver programação
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
