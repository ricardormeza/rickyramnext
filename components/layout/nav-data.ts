import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Bot,
  Globe,
  Home,
  Mail,
  Megaphone,
  Search,
  Shield,
  Wrench,
} from "lucide-react";

type NavChildItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  children?: NavChildItem[];
};

export const navItems: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    label: "Servicios",
    href: "/servicios",
    icon: Wrench,
    children: [
      {
        label: "Sitios Web",
        href: "/soluciones",
        description: "WordPress, Astro y Next.js.",
        icon: Globe,
        disabled: false,
      },
      {
        label: "SEO",
        href: "/servicios/seo",
        description: "Visibilidad organica con contenido y tecnica.",
        icon: Search,
        disabled: false,
      },
      {
        label: "Ads",
        href: "/servicios/ads",
        description: "Campanas pagadas con foco en conversion.",
        icon: Megaphone,
        disabled: false,
      },
      {
        label: "Anal\u00edtica",
        href: "/servicios/analitica",
        description: "Tracking, dashboards y medicion clara.",
        icon: BarChart3,
        disabled: false,
      },
      {
        label: "Automatizaci\u00f3n",
        href: "/servicios/automatizacion",
        description: "Bots, flujos y CRM conectados.",
        icon: Bot,
        disabled: false,
      },
      {
        label: "Ciberseguridad",
        href: "/servicios/ciberseguridad",
        description: "Hardening y monitoreo continuo.",
        icon: Shield,
        disabled: false,
      },
      {
        label: "Infraestructura",
        href: "/servicios/infraestructura",
        description: "DNS, correo, SSL y migraciones.",
        icon: Wrench,
        disabled: false,
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "Contacto",
    href: "/contacto",
    icon: Mail,
  },
];
