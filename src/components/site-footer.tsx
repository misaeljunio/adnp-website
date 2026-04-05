import Image from "next/image";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dbc19c]/30 bg-[#FAFAF8]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Image
                src="/adnp-website/logo.png"
                alt={siteConfig.churchName}
                width={44}
                height={44}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-oswald)] text-base font-bold text-[#735748]">
                {siteConfig.churchName}
              </p>
              <p className="font-[family-name:var(--font-dancing)] text-sm text-[#735748]/60">
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
