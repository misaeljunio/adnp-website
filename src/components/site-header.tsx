import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbc19c]/50 bg-[#FAFAF8]/95 shadow-[0_2px_12px_rgba(115,87,72,0.08)] backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group" aria-label={siteConfig.churchName}>
          <div className="flex-shrink-0 transition-transform group-hover:scale-105">
            <div className="rounded-full ring-2 ring-[#DBC19C]/70 ring-offset-2 ring-offset-[#FAFAF8] shadow-md">
              <Image
                src="/adnp-website/logo.png"
                alt={siteConfig.churchName}
                width={60}
                height={60}
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="leading-tight">
            <p className="hidden font-[family-name:var(--font-crimson)] text-sm sm:text-base md:text-lg italic text-[#735748]/60 sm:block sm:text-sm">
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