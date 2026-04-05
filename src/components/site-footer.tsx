import Image from "next/image";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dbc19c]/50 bg-[#FAFAF8] shadow-[0_-2px_12px_rgba(115,87,72,0.06)]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo + name */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full ring-2 ring-[#DBC19C]/60 ring-offset-2 ring-offset-[#FAFAF8] shadow-sm">
                <Image
                  src="/adnp-website/logo.png"
                  alt={siteConfig.churchName}
                  width={52}
                  height={52}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wide text-[#735748]">
                {siteConfig.shortName}
              </p>
              <p className="font-[family-name:var(--font-crimson)] text-sm italic text-[#735748]/70">
                {siteConfig.churchName}
              </p>
              <p className="font-[family-name:var(--font-dancing)] text-xs text-[#735748]/50">
                {siteConfig.slogan}
              </p>
            </div>
          </div>

          <p className="text-xs text-[#735748]/50">
            © {year} ADNP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
