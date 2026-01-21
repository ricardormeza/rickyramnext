"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type BlogPreviewPost = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerptHtml: string;
  image?: { src: string; alt?: string };
};

type BlogPreviewProps = {
  posts: BlogPreviewPost[];
};

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  dateStyle: "medium",
});

export function BlogPreview({ posts }: BlogPreviewProps) {

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl text-[#1881ff] font-semibold tracking-tight md:text-4xl">
            Conoce más acerca del marketing y tecnología
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Estrategia, performance y aprendizajes reales para crecer con foco.
          </p>
        </div>
        <div>
          <Button variant="secondary" asChild>
            <Link href="/blog">Ir al blog</Link>
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.map((post) => {
          return (
            <Card key={post.id} className="flex h-full flex-col">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted">
                {post.image?.src ? (
                  <Image
                    src={post.image.src}
                    alt={post.image.alt || post.title || "Blog"}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <CardHeader>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {dateFormatter.format(new Date(post.date))}
                </p>
                <CardTitle className="text-base">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: post.excerptHtml }} />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
