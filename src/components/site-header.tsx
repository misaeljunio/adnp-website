import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbc19c]/30 bg-[#FAFAF8]/92 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group" aria-label={siteConfig.churchName}>
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0976B2] shadow-md transition-shadow group-hover:shadow-[0_4px_16px_rgba(9,118,178,0.35)]">
            <svg width="22" height="22" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <rect x="20" y="6" width="4" height="32" rx="2" fill="white" />
              <rect x="10" y="17" width="24" height="4" rx="2" fill="white" />
              <circle cx="22" cy="6" r="3.5" fill="#DBC19C" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-widest text-[#0976B2]">
              {siteConfig.shortName}
            </p>
            <p className="hidden font-[family-name:var(--font-crimson)] text-sm italic text-[#735748]/70 sm:block">
              {siteConfig.churchName}
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Menu principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-wider text-[#735748]/70 transition-colors hover:text-[#0976B2]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contato" className="btn-primary text-xs sm:text-sm">
          Fale conosco
        </Link>
      </div>
    </header>
  );
}
