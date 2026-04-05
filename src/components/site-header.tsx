import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbc19c]/30 bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0976B2] text-sm font-black text-white shadow-md">
            AD
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#0976B2]">{siteConfig.shortName}</p>
            <p className="hidden text-sm text-[#735748]/80 sm:block">
              {siteConfig.churchName}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#735748]/80 transition hover:text-[#0976B2]"
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
