import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dbc19c]/30 bg-[#FAFAF8]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0976B2]">
              <svg width="18" height="18" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <rect x="20" y="6" width="4" height="32" rx="2" fill="white" />
                <rect x="10" y="17" width="24" height="4" rx="2" fill="white" />
                <circle cx="22" cy="6" r="3.5" fill="#DBC19C" />
              </svg>
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
