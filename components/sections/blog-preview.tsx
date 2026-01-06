import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function BlogPreview() {
  const { blog } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {blog.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {blog.subtitle}
          </p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/blog">Ir al blog</Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {blog.posts.map((post) => (
          <Card key={post} className="h-full">
            <CardHeader>
              <CardTitle className="text-base">{post}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Guia practica para tomar mejores decisiones digitales.
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
