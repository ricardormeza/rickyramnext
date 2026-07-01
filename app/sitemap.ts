import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { wpFetch } from "@/src/lib/wordpress";
import type { WPPost } from "@/src/types/wp";

const STATIC_ROUTES = [
  "/",
  "/soluciones",
  "/soluciones/wordpress",
  "/soluciones/astro",
  "/soluciones/nextjs",
  "/servicios",
  "/servicios/seo",
  "/servicios/ads",
  "/servicios/analitica",
  "/servicios/automatizacion",
  "/servicios/ciberseguridad",
  "/servicios/infraestructura",
  "/precios",
  "/blog",
  "/contacto",
  "/cotizar",
  "/Agendar-llamada",
  "/portafolio",
  "/legal/terminos",
  "/legal/privacidad",
  "/legal/cookies",
] as const;

async function fetchAll<T>(path: string, params?: Record<string, string | number>) {
  const all: T[] = [];
  let page = 1;
  while (true) {
    const batch = await wpFetch<T[]>(
      path,
      { per_page: 100, page, ...params },
      { revalidate: 3600 }
    );
    all.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }
  return all;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
  }));

  try {
    const posts = await fetchAll<WPPost>("/posts", { _embed: 1 });

    posts.forEach((post) => {
      routes.push({
        url: `${siteConfig.siteUrl}/blog/${post.slug}`,
        lastModified: post.modified ? new Date(post.modified) : now,
      });
    });
  } catch {
    return routes;
  }

  return routes;
}
