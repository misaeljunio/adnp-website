import Link from "next/link";

export function CtaSection() {
  return (
    <section className="section-pad" aria-labelledby="cta-heading">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-[#0976B2] px-6 py-14 text-center text-white shadow-[0_20px_60px_rgba(9,118,178,0.35)] sm:px-10 lg:px-16">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(219,193,156,0.2),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.08),transparent_55%)]" />

          <div className="relative">
            <p className="font-[family-name:var(--font-dancing)] text-2xl text-[#DBC19C]">
              Venha participar
            </p>
            <h2
              id="cta-heading"
              className="mt-3 font-[family-name:var(--font-oswald)] text-3xl font-bold sm:text-4xl lg:text-5xl"
            >
              Será uma alegria receber<br className="hidden sm:block" /> você e sua família
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-crimson)] text-lg leading-7 text-white/85">
              Junte-se a nós nos cultos e encontre um lugar de fé, cuidado e comunhão genuína.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#contato" className="btn-secondary">
                Entrar em contato
              </Link>
              <Link
                href="#programacao"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Ver programação
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
