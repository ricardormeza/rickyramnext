export type WPMedia = {
  id?: number;
  source_url: string;
  alt_text?: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<
      string,
      {
        source_url: string;
        width: number;
        height: number;
      }
    >;
  };
};

export type WPTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
};

export type WPAuthor = {
  id: number;
  name: string;
  slug?: string;
  avatar_urls?: Record<string, string>;
};

export type WPPost = {
  id: number;
  slug: string;
  author?: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
    author?: WPAuthor[];
  };
};
