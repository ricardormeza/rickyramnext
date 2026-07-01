import type { Metadata } from "next";

import SolucionesClient from "./soluciones-client";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/lib/site";
import { sanitizeWpHtml, stripHtml, wpFetch } from "@/src/lib/wordpress";
import type { WPPost } from "@/src/types/wp";

export const metadata: Metadata = {
  title: "Desarrollo web y creacion de sitios web | WordPress, Astro y Next.js",
  description:
    "Servicio de desarrollo web y creacion de sitios web a medida en WordPress, Astro y Next.js para negocios que buscan performance, SEO y conversion.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: "Desarrollo web y creacion de sitios web",
    description:
      "Servicio de desarrollo web y creacion de sitios web a medida en WordPress, Astro y Next.js para negocios que buscan performance, SEO y conversion.",
    url: `${siteConfig.siteUrl}/soluciones`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo web y creacion de sitios web",
    description:
      "Servicio de desarrollo web y creacion de sitios web a medida en WordPress, Astro y Next.js para negocios que buscan performance, SEO y conversion.",
  },
};

function getFeaturedMedia(post: WPPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0];
}

export default async function SolucionesPage() {
  const posts = await wpFetch<WPPost[]>(
    "/posts",
    {
      per_page: 3,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
    { revalidate: 300 }
  );

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desarrollo web y creacion de sitios web",
    serviceType: "Desarrollo web",
    description:
      "Servicio de desarrollo web y creacion de sitios web a medida en WordPress, Astro y Next.js para negocios que buscan performance, SEO y conversion.",
    url: `${siteConfig.siteUrl}/soluciones`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soluciones web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sitios web en WordPress",
            url: `${siteConfig.siteUrl}/soluciones/wordpress`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sitios web en Astro",
            url: `${siteConfig.siteUrl}/soluciones/astro`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sitios web en Next.js",
            url: `${siteConfig.siteUrl}/soluciones/nextjs`,
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeContent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteConfig.siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soluciones",
        item: `${siteConfig.siteUrl}/soluciones`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SolucionesClient blogPosts={blogPosts} />
    </>
  );
}
