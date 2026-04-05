import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0976B2]"
    >
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(219,193,156,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.12),transparent_60%)]" />
      {/* Subtle cross pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,white 39px,white 40px), repeating-linear-gradient(90deg,transparent,transparent 39px,white 39px,white 40px)",
        }}
      />

      <div className="container-page relative py-24 sm:py-32 lg:py-44">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left – text content */}
          <div className="max-w-2xl text-white">
            <p className="font-[family-name:var(--font-dancing)] text-[#DBC19C] text-2xl">
              Bem-vindo à
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-oswald)] text-5xl font-bold leading-none tracking-wide text-white sm:text-6xl lg:text-7xl">
              Assembleia de Deus<br />
              <span className="text-[#DBC19C]">Novas de Paz</span>
            </h1>
            <p className="mt-6 font-[family-name:var(--font-crimson)] text-xl leading-8 text-white/85 sm:text-2xl">
              {siteConfig.slogan}
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#programacao" className="btn-secondary">
                Ver programação
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0976B2]"
              >
                Fale conosco
              </Link>
            </div>
          </div>

          {/* Right – identity card */}
          <div className="flex justify-center lg:justify-end">
            <div className="card-surface w-full max-w-sm bg-[#FAFAF8] p-8 text-[#735748] sm:p-10">
              {/* Logo mark */}
              <div className="mx-auto h-20 w-20 overflow-hidden rounded-full shadow-lg">
                <Image
                  src="/adnp-website/logo.png"
                  alt="ADNP Logo"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <p className="mt-6 text-center font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.35em] text-[#0976B2]">
                Igreja Cristã
              </p>
              <h2 className="mt-2 text-center font-[family-name:var(--font-oswald)] text-3xl font-bold text-[#735748]">
                ADNP
              </h2>
              <p className="mt-2 text-center font-[family-name:var(--font-dancing)] text-lg text-[#735748]/70">
                Fé, esperança e comunhão
              </p>

              <div className="mt-6 h-px bg-[#DBC19C]/40" />

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Cultos", sub: "Semanais" },
                  { label: "Famílias", sub: "Bem-vindas" },
                  { label: "Comunhão", sub: "Verdadeira" },
                  { label: "Palavra", sub: "Viva" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4"
                    style={{ backgroundColor: i % 2 === 0 ? "rgba(219,193,156,0.2)" : "rgba(9,118,178,0.06)" }}
                  >
                    <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold text-[#735748]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-[family-name:var(--font-crimson)] text-sm text-[#735748]/70">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 48L1440 48L1440 24C1200 0 960 48 720 24C480 0 240 48 0 24L0 48Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
}

