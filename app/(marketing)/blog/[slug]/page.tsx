import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { sanitizeWpHtml, stripHtml, wpFetch } from "@/src/lib/wordpress";
import type { WPPost, WPTerm } from "@/src/types/wp";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  dateStyle: "long",
});

function getFeaturedMedia(post: WPPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0];
}

function getAuthor(post: WPPost) {
  return post._embedded?.author?.[0];
}

function getTermsByTaxonomy(post: WPPost, taxonomy: string) {
  const groups = post._embedded?.["wp:term"] ?? [];
  return groups.flat().filter((term) => term.taxonomy === taxonomy);
}

function estimateReadTime(text: string) {
  const words = stripHtml(text).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min de lectura`;
}

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

async function getPostBySlug(slug?: string) {
  if (!slug) return null;
  try {
    const posts = await wpFetch<WPPost[]>(
      "/posts",
      {
        slug,
        _embed: 1,
      },
      { revalidate: 300 }
    );
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

async function resolveSlug(
  params: { slug: string } | Promise<{ slug: string }>
) {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

async function getSidebarData(postId?: number) {
  try {
    const [recentPosts, categories, tags] = await Promise.all([
      wpFetch<WPPost[]>(
        "/posts",
        {
          per_page: 4,
          _embed: 1,
          orderby: "date",
          order: "desc",
          ...(postId ? { exclude: postId } : {}),
        },
        { revalidate: 300 }
      ),
      wpFetch<WPTerm[]>(
        "/categories",
        {
          per_page: 8,
          orderby: "count",
          order: "desc",
          hide_empty: true,
        },
        { revalidate: 300 }
      ),
      wpFetch<WPTerm[]>(
        "/tags",
        {
          per_page: 12,
          orderby: "count",
          order: "desc",
          hide_empty: true,
        },
        { revalidate: 300 }
      ),
    ]);

    return { recentPosts, categories, tags };
  } catch {
    return { recentPosts: [], categories: [], tags: [] };
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Blog",
    };
  }

  const title = stripHtml(post.title?.rendered ?? "Blog");
  const description = truncate(
    stripHtml(post.excerpt?.rendered ?? post.content?.rendered ?? ""),
    160
  );
  const media = getFeaturedMedia(post);

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: media?.source_url ? [{ url: media.source_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: media?.source_url ? [media.source_url] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const slug = await resolveSlug(params);
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const { recentPosts, categories, tags } = await getSidebarData(post.id);
  const title = stripHtml(post.title?.rendered ?? "");
  const contentHtml = sanitizeWpHtml(post.content?.rendered ?? "");
  const media = getFeaturedMedia(post);
  const author = getAuthor(post);
  const postCategories = getTermsByTaxonomy(post, "category");
  const postTags = getTermsByTaxonomy(post, "post_tag");
  const siteBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const canonicalUrl = siteBase ? `${siteBase}/blog/${post.slug}` : `/blog/${post.slug}`;
  const shareUrl = encodeURIComponent(canonicalUrl);
  const shareTitle = encodeURIComponent(title);

  return (
    <section className="body-font text-gray-600">
      <ScrollProgress />
      <div className="container mx-auto px-5 py-16 md:py-24">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="rounded-3xl border bg-card px-6 py-10 text-card-foreground md:px-10">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                {postCategories.length
                  ? postCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/blog?category=${category.slug}`}
                        className="rounded-full border px-3 py-1 hover:text-foreground"
                      >
                        {category.name}
                      </Link>
                    ))
                  : null}
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                {title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {author ? (
                  <div className="flex items-center gap-2">
                    {author.avatar_urls?.["96"] ? (
                      <Image
                        src={author.avatar_urls["96"]}
                        alt={author.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                    ) : null}
                    <span className="font-medium text-foreground">
                      {author.name}
                    </span>
                  </div>
                ) : null}
                <span>{dateFormatter.format(new Date(post.date))}</span>
                <span>{estimateReadTime(post.content?.rendered ?? "")}</span>
              </div>
          </div>

            <div
              className="prose prose-neutral mt-10 max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:my-5 prose-li:my-2 prose-img:mx-auto prose-img:rounded-2xl prose-img:shadow-sm sm:prose-img:max-w-[640px]"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border bg-card px-6 py-5 text-card-foreground">
              <span className="text-sm font-semibold text-foreground">Comparte</span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Compartir en Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition hover:text-foreground"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Compartir en X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition hover:text-foreground"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Compartir en LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl border bg-card px-6 py-6 text-card-foreground">
              <div>
                <p className="text-sm text-muted-foreground">
                  ¿Te gustó este artículo?
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Hablemos de tu proyecto.
                </p>
              </div>
              <Button asChild>
                <Link href="/contacto">Agendar llamada</Link>
              </Button>
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border bg-card p-6 text-card-foreground">
              <h3 className="text-lg font-semibold text-foreground">
                Posts recientes
              </h3>
              <div className="mt-5 space-y-4">
                {recentPosts.map((item) => {
                  const itemMedia = getFeaturedMedia(item);
                  const itemTitle = stripHtml(item.title?.rendered ?? "");
                  return (
                    <Link
                      key={item.id}
                      href={`/blog/${item.slug}`}
                      className="flex items-center gap-4"
                    >
                      <div className="relative h-16 w-20 overflow-hidden rounded-2xl bg-muted">
                        {itemMedia?.source_url ? (
                          <Image
                            src={itemMedia.source_url}
                            alt={itemMedia.alt_text || itemTitle}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        ) : null}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {itemTitle}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {dateFormatter.format(new Date(item.date))}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-6 text-card-foreground">
              <h3 className="text-lg font-semibold text-foreground">
                Categorias
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/blog?category=${category.slug}`}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-6 text-card-foreground">
              <h3 className="text-lg font-semibold text-foreground">Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/blog?tag=${tag.slug}`}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>

            {postTags.length ? (
              <div className="rounded-3xl border bg-card p-6 text-card-foreground">
                <h3 className="text-lg font-semibold text-foreground">
                  Etiquetas del post
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {postTags.map((tag) => (
                    <span
                      key={tag.id}
                      className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
