import { seoServiceContent } from "./seo";
import type { ServiceContent } from "./types";

export const automatizacionServiceContent: ServiceContent = {
  ...seoServiceContent,
  hero: {
    ...seoServiceContent.hero,
    kicker: "Automatizaci\u00f3n",
  },
};
