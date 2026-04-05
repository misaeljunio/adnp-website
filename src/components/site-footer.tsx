import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dbc19c]/30 bg-[#FAFAF8]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black text-[#735748]">
              {siteConfig.churchName}
            </p>
            <p className="mt-1 text-sm text-[#735748]/70">{siteConfig.slogan}</p>
          </div>
          <p className="text-sm text-[#735748]/60">
            © {new Date().getFullYear()} ADNP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
