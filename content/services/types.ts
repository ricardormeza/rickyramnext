export type ServiceContent = {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    ctas: readonly { label: string; href: string }[];
  };
  forWho: {
    title: string;
    bullets: readonly string[];
    notFor: readonly string[];
  };
  labels: {
    notForTitle: string;
    layersTitle: string;
    layersNote: string;
    deliverablesTitle: string;
    auditPricesTitle: string;
    auditIncludesTitle: string;
    requirementsTitle: string;
    requirementsNote: string;
    addOnsTitle: string;
    processTitle: string;
    contactTitle: string;
    internalLinksTitle: string;
  };
  layers: readonly { title: string; bullets: readonly string[] }[];
  deliverables: readonly string[];
  audit: {
    id: string;
    title: string;
    lead: string;
    prices: readonly string[];
    includes: readonly string[];
    cta: { label: string; href: string };
  };
  plans: {
    id: string;
    title: string;
    lead: string;
    cards: readonly {
      title: string;
      subtitle: string;
      bullets: readonly string[];
      price: string;
    }[];
  };
  requirements: readonly string[];
  addOns: readonly { title: string; items: readonly string[] }[];
  processSteps: readonly string[];
  faqs: readonly { question: string; answer: string }[];
  finalCta: {
    id: string;
    title: string;
    bullets: readonly string[];
    primary: string;
    secondary: string;
  };
  contact: {
    id: string;
    items: readonly { label: string; value: string }[];
  };
  internalLinks: readonly { label: string; href: string }[];
};
