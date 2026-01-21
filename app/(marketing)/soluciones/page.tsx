import type { Metadata } from "next";

import SolucionesClient from "./soluciones-client";
import { siteConfig } from "@/lib/site";
import { sanitizeWpHtml, stripHtml, wpFetch } from "@/src/lib/wordpress";
import type { WPPost } from "@/src/types/wp";

export const metadata: Metadata = {
  title: "Soluciones web a medida",
  description:
    "WordPress, Astro y Next.js para negocios que quieren crecer con performance, SEO y conversion.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: "Soluciones web a medida",
    description:
      "WordPress, Astro y Next.js para negocios que quieren crecer con performance, SEO y conversion.",
    url: `${siteConfig.siteUrl}/soluciones`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones web a medida",
    description:
      "WordPress, Astro y Next.js para negocios que quieren crecer con performance, SEO y conversion.",
  },
};

function getFeaturedMedia(post: WPPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0];
}

export default async function SolucionesPage() {
  let posts: WPPost[] = [];
  try {
    posts = await wpFetch<WPPost[]>(
      "/posts",
      {
        per_page: 3,
        _embed: 1,
        orderby: "date",
        order: "desc",
      },
      { revalidate: 300 }
    );
  } catch {
    posts = [];
  }

  const blogPosts = posts.map((post) => {
    const media = getFeaturedMedia(post);
    return {
      id: post.id,
      slug: post.slug,
      date: post.date,
      title: stripHtml(post.title?.rendered ?? ""),
      excerptHtml: sanitizeWpHtml(post.excerpt?.rendered ?? ""),
      image: media?.source_url
        ? { src: media.source_url, alt: media.alt_text || "" }
        : undefined,
    };
  });

  return <SolucionesClient blogPosts={blogPosts} />;
}
