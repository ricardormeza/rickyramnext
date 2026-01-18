import { astroContent } from "@/content/solution/astro";
import { nextjsContent } from "@/content/solution/nextjs";
import { wordpressContent } from "@/content/solution/wordpress";
import { adsServiceContent } from "@/content/services/ads";
import { analiticaServiceContent } from "@/content/services/analitica";
import { automatizacionServiceContent } from "@/content/services/automatizacion";
import { ciberseguridadServiceContent } from "@/content/services/ciberseguridad";
import { infraestructuraServiceContent } from "@/content/services/infraestructura";
import { seoServiceContent } from "@/content/services/seo";
import type { PricingSelection } from "@/components/pricing/types";

export type CotizarPlan = {
  id: string;
  title: string;
  price?: string;
  description?: string;
};

export type CotizarStack = {
  id: string;
  label: string;
  plans: CotizarPlan[];
};

export type CotizarCategory = {
  id: string;
  label: string;
  stacks: CotizarStack[];
};

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const buildWebsitePlans = (
  plans: readonly {
    title?: string;
    name?: string;
    price?: string;
    description?: string;
    idealFor?: string;
  }[]
) =>
  plans.map((plan) => {
    const title = plan.title ?? plan.name ?? "";
    return {
      id: slugify(title),
      title,
      price: plan.price,
      description: plan.description ?? plan.idealFor,
    };
  });

const buildServicePlans = (content: {
  audit?: { title: string; lead?: string; prices?: readonly string[] };
  plans?: { cards: readonly { title: string; subtitle?: string; price?: string }[] };
}) => {
  const audit = content.audit
    ? [
        {
          id: slugify(content.audit.title),
          title: content.audit.title,
          price: content.audit.prices?.join(" / "),
          description: content.audit.lead,
        },
      ]
    : [];

  const planCards =
    content.plans?.cards.map((card) => ({
      id: slugify(card.title),
      title: card.title,
      price: card.price,
      description: card.subtitle,
    })) ?? [];

  return [...audit, ...planCards];
};

export const cotizarCatalog: CotizarCategory[] = [
  {
    id: "web",
    label: "Sitio web",
    stacks: [
      {
        id: "astro",
        label: "Astro",
        plans: buildWebsitePlans(astroContent.pricing.table),
      },
      {
        id: "wordpress",
        label: "WordPress",
        plans: [
          ...buildWebsitePlans(wordpressContent.pricing.plans),
          ...wordpressContent.stores.cards.map((card) => {
            const badge = "badge" in card ? card.badge : undefined;
            const bullet = "bullets" in card ? card.bullets?.[0] : undefined;
            return {
              id: slugify(card.title),
              title: card.title,
              price: card.price,
              description: badge ?? bullet,
            };
          }),
        ],
      },
      {
        id: "nextjs",
        label: "Next.js",
        plans: buildWebsitePlans(nextjsContent.pricing.table),
      },
    ],
  },
  {
    id: "servicios",
    label: "Servicios",
    stacks: [
      {
        id: "seo",
        label: seoServiceContent.hero.kicker,
        plans: buildServicePlans(seoServiceContent),
      },
      {
        id: "ads",
        label: adsServiceContent.hero.kicker,
        plans: buildServicePlans(adsServiceContent),
      },
      {
        id: "analitica",
        label: analiticaServiceContent.hero.kicker,
        plans: buildServicePlans(analiticaServiceContent),
      },
      {
        id: "automatizacion",
        label: automatizacionServiceContent.hero.kicker,
        plans: buildServicePlans(automatizacionServiceContent),
      },
      {
        id: "ciberseguridad",
        label: ciberseguridadServiceContent.hero.kicker,
        plans: buildServicePlans(ciberseguridadServiceContent),
      },
      {
        id: "infraestructura",
        label: infraestructuraServiceContent.hero.kicker,
        plans: buildServicePlans(infraestructuraServiceContent),
      },
    ],
  },
];

const readParam = (params: SearchParams | undefined, key: string) => {
  const value = params?.[key];
  return typeof value === "string" ? value : null;
};

export const findCotizarSelection = (
  searchParams?: SearchParams
): PricingSelection | null => {
  const tabParam = readParam(searchParams, "tab");
  const techParam = readParam(searchParams, "tech");
  const planParam = readParam(searchParams, "plan");

  if (!tabParam || !techParam || !planParam) return null;

  const category = cotizarCatalog.find((item) => item.id === tabParam);
  if (!category) return null;

  const stack = category.stacks.find((item) => item.id === techParam);
  if (!stack) return null;

  const plan = stack.plans.find((item) => item.id === planParam);
  if (!plan) return null;

  return {
    tab: category.id,
    tech: stack.id,
    plan: plan.id,
    title: plan.title,
    price: plan.price ?? "",
  };
};
