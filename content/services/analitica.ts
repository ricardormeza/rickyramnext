import { seoServiceContent } from "./seo";
import type { ServiceContent } from "./types";

export const analiticaServiceContent: ServiceContent = {
  ...seoServiceContent,
  hero: {
    ...seoServiceContent.hero,
    kicker: "Anal\u00edtica",
  },
};
