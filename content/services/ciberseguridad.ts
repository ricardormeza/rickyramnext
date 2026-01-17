import { seoServiceContent } from "./seo";
import type { ServiceContent } from "./types";

export const ciberseguridadServiceContent: ServiceContent = {
  ...seoServiceContent,
  hero: {
    ...seoServiceContent.hero,
    kicker: "Ciberseguridad",
  },
};
