import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { footerNav } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-5 md:px-6">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center justify-center md:justify-start">
            <Link href="/" aria-label={siteConfig.name}>
              <img
                src="/images/logo-rickyram.webp"
                alt={siteConfig.name}
                className="h-12 w-auto"
                loading="lazy"
              />
            </Link>
            <span className="sr-only">{siteConfig.name}</span>
          </div>
          <p className="text-center md:text-left text-sm md:text-xl text-white text-white">
            Sitios web rapidos, medibles y listos para crecer.
          </p>
          <div className="space-y-1 text-center md:text-left text-sm md:text-xl text-white">
            <div>{siteConfig.city}</div>
            <a href={siteConfig.whatsapp}>{siteConfig.whatsappDisplay}</a>
            <div>{siteConfig.email}</div>
          </div>
          <div className="flex gap-3 text-white text-center md:text-left justify-center md:justify-start">
            <a
              href={siteConfig.socials.facebook}
              aria-label="Facebook"
              className="transition-colors hover:text-black"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              aria-label="Instagram"
              className="transition-colors hover:text-black"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              aria-label="LinkedIn"
              className="transition-colors hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <div className="text-sm md:text-xl font-medium text-white">Soluciones</div>
          <ul className="mx-auto w-fit space-y-2 text-sm md:text-xl text-white md:mx-0 md:w-auto">
            {footerNav.solutions.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <div className="text-sm md:text-xl font-medium text-white">Servicios</div>
          <ul className="mx-auto w-fit space-y-2 text-sm md:text-xl text-white md:mx-0 md:w-auto">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <div className="mx-auto grid w-fit grid-cols-2 gap-6 md:mx-0 md:block md:w-auto">
            <div className="space-y-3">
              <div className="text-sm md:text-xl font-medium text-white">Recursos</div>
              <ul className="space-y-2 text-sm md:text-xl text-white">
                {footerNav.resources.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-sm md:text-xl font-medium text-white">Legal</div>
              <ul className="space-y-2 text-sm md:text-xl text-white">
                {footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-white">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
