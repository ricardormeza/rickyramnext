import sanitizeHtml from "sanitize-html";

const base = process.env.WORDPRESS_BASE_URL?.replace(/\/$/, "") ?? "";
const apiBase = `${base}/wp-json/wp/v2`;

type WpFetchOptions = {
  revalidate?: number;
};

export async function wpFetch<T>(
  path: string,
  params?: Record<string, string | number | boolean>,
  options?: WpFetchOptions
): Promise<T> {
  if (!base) {
    throw new Error("WORDPRESS_BASE_URL is not set.");
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${apiBase}${normalizedPath}`);

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value === undefined || value === null) continue;
    url.searchParams.set(key, String(value));
  }

  const response = await fetch(url.toString(), {
    next: { revalidate: options?.revalidate ?? 300 },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`WordPress API error ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

export function stripHtml(text: string): string {
  const cleaned = sanitizeHtml(text ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  });
  return cleaned.replace(/\s+/g, " ").trim();
}

export function sanitizeWpHtml(html: string): string {
  return sanitizeHtml(html ?? "", {
    allowedTags: [
      "p",
      "br",
      "strong",
      "em",
      "b",
      "i",
      "u",
      "a",
      "ul",
      "ol",
      "li",
      "blockquote",
      "code",
      "pre",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "img",
      "hr",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading", "decoding"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
  });
}
