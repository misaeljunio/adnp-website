import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbc19c]/30 bg-[#FAFAF8]/92 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group" aria-label={siteConfig.churchName}>
          <div className="flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt={siteConfig.churchName}
              width={52}
              height={52}
              priority
              className="rounded-full shadow-md"
            />
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
