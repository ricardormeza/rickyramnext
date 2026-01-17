import { seoServiceContent } from "./seo";
import type { ServiceContent } from "./types";

export const infraestructuraServiceContent: ServiceContent = {
  ...seoServiceContent,
  hero: {
    ...seoServiceContent.hero,
    kicker: "Infraestructura",
  },
};
