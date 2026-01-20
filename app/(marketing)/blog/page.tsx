import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sanitizeWpHtml, stripHtml, wpFetch } from "@/src/lib/wordpress";
import type { WPPost } from "@/src/types/wp";

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  dateStyle: "medium",
});

function getFeaturedMedia(post: WPPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0];
}

export default async function BlogPage() {
  const posts = await wpFetch<WPPost[]>(
    "/posts",
    {
      per_page: 9,
      _embed: 1,
      orderby: "date",
      order: "desc",
    },
    { revalidate: 300 }
  );

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Blog
          </h1>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            Ideas, guias y aprendizajes reales desde proyectos reales.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const media = getFeaturedMedia(post);
            const title = stripHtml(post.title?.rendered ?? "");
            const excerptHtml = sanitizeWpHtml(post.excerpt?.rendered ?? "");
            return (
              <Card key={post.id} className="flex h-full flex-col">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  {media?.source_url ? (
                    <Image
                      src={media.source_url}
                      alt={media.alt_text || title || "Blog"}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-muted" />
                  )}
                </div>
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-widest">
                    {dateFormatter.format(new Date(post.date))}
                  </CardDescription>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <div dangerouslySetInnerHTML={{ __html: excerptHtml }} />
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.slug}`}>Leer mas</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
