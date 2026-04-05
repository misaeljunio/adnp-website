import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0976B2] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="container-page relative py-24 sm:py-32 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#DBC19C]">Bem-vindo</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {siteConfig.churchName}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
              {siteConfig.slogan}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#programacao" className="btn-secondary">
                Ver programação
              </Link>
              <Link href="#contato" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Fale conosco
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="card-surface w-full max-w-xl bg-[#FAFAF8] p-8 text-center text-[#735748] sm:p-10">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#DBC19C]/35">
                <span className="text-2xl font-black text-[#0976B2]">{siteConfig.shortName}</span>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0976B2]">
                Igreja Cristã
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Fé, esperança e comunhão
              </h2>
              <p className="mt-4 text-base leading-7 text-[#735748]/80">
                Um espaço acolhedor para adorar a Deus, crescer na Palavra e viver a comunhão com a igreja.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                <div className="rounded-2xl bg-[#DBC19C]/25 p-4">
                  <p className="text-sm font-semibold text-[#735748]">Cultos</p>
                  <p className="mt-1 text-sm text-[#735748]/80">Semanais</p>
                </div>
                <div className="rounded-2xl bg-[#0976B2]/10 p-4">
                  <p className="text-sm font-semibold text-[#735748]">Famílias</p>
                  <p className="mt-1 text-sm text-[#735748]/80">Bem-vindas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
