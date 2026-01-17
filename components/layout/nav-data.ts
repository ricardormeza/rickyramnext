import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  Bot,
  Code2,
  Globe,
  Home,
  Layers,
  Mail,
  Megaphone,
  Search,
  Shield,
  Wrench,
  Zap,
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
    label: "Soluciones",
    href: "/soluciones",
    icon: Layers,
    children: [
      {
        label: "WordPress",
        href: "/soluciones/wordpress",
        description: "Sitios administrables y listos para crecer.",
        icon: Globe,
      },
      {
        label: "Astro",
        href: "/soluciones/astro",
        description: "Marketing ultra rapido con SEO base.",
        icon: Zap,
      },
      {
        label: "Next.js",
        href: "/soluciones/nextjs",
        description: "Webs premium, dashboards y apps a medida.",
        icon: Code2,
      },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    icon: Wrench,
    children: [
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
    label: "Precios",
    href: "/precios",
    icon: BadgeDollarSign,
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
