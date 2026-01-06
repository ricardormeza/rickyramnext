import Link from "next/link";

import { footerNav } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-5 md:px-6">
        <div className="space-y-3 md:col-span-2">
          <div className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </div>
          <p className="text-sm text-muted-foreground">
            Sitios web rapidos, medibles y listos para crecer.
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div>{siteConfig.city}</div>
            <a href={siteConfig.whatsapp}>{siteConfig.whatsappDisplay}</a>
            <div>{siteConfig.email}</div>
          </div>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <a href={siteConfig.socials.facebook}>Facebook</a>
            <a href={siteConfig.socials.instagram}>Instagram</a>
            <a href={siteConfig.socials.linkedin}>LinkedIn</a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Soluciones</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerNav.solutions.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Servicios</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Recursos</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerNav.resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 text-sm font-medium">Legal</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
