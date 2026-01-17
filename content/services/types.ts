export type ServiceContent = {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    ctas: { label: string; href: string }[];
  };
  forWho: {
    title: string;
    bullets: string[];
    notFor: string[];
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
  layers: { title: string; bullets: string[] }[];
  deliverables: string[];
  audit: {
    id: string;
    title: string;
    lead: string;
    prices: string[];
    includes: string[];
    cta: { label: string; href: string };
  };
  plans: {
    id: string;
    title: string;
    lead: string;
    cards: {
      title: string;
      subtitle: string;
      bullets: string[];
      price: string;
    }[];
  };
  requirements: string[];
  addOns: { title: string; items: string[] }[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
  finalCta: {
    id: string;
    title: string;
    bullets: string[];
    primary: string;
    secondary: string;
  };
  contact: {
    id: string;
    items: { label: string; value: string }[];
  };
  internalLinks: { label: string; href: string }[];
};
