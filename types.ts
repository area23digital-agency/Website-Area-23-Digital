
export type Language = 'en' | 'es';

export interface Translation {
  nav: {
    howWeWork: string;
    services: string;
    results: string;
    about: string;
    pricing: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headlineParts: string[];
    subheadline: string;
    features: string;
    primaryCTA: string;
    secondaryCTA: string;
    trustBadge: string;
    trustBadgeSub: string;
  };
  problem: {
    badge: string;
    headline: string;
    cards: Array<{
      title: string;
      text: string;
    }>;
    transition: string;
  };
  approach: {
    badges: string[];
    headline: string;
    supportingText: string;
    cta: string;
    steps: Array<{ // Kept for the visual node rendering
      title: string;
    }>;
  };
  hundredKPages: {
    badges: string[];
    headline: string;
    subheadline: string;
    description: string;
    diagramNodes: Array<{ title: string }>;
    phaseLabel: string;
    outputLabel: string;
    capabilitiesLabel: string;
    phases: Array<{
      title: string;
      items: string[];
      deliverable: string;
      services: string[];
    }>;
    footer: string;
  };
  howWeWork: {
    headline: string;
    subheadline: string;
    phases: Array<{
      title: string;
      items: string[];
      deliverable: string;
    }>;
    footer: string;
  };
  services: {
    headline: string;
    subheadline: string;
    ctaButton: string;
    cards: Array<{
      component: string;
      title: string;
      description: string;
      whatWeDoTitle: string;
      whatWeDo: string[];
      advantageTitle: string;
      benefit: string;
    }>;
    footer: string;
  };
  stats: {
    headline: string;
    items: Array<{
      value: string;
      label: string;
    }>;
  };
  caseStudies: {
    headline: string;
    badge: string;
    cta: string;
    cases: Array<{
      industry: string;
      location: string;
      description: string;
      metrics: Array<{ value: string; label: string }>;
      tags: string[];
    }>;
  };
  testimonials: {
    badge: string;
    headline: string;
    subheadline: string;
    verifiedLabel: string;
    items: Array<{
      industry: string;
      quote: string;
      name: string;
      position: string;
      results: Array<{ value: string; label: string }>;
      context: string;
      image: string;
      indicator: string;
    }>;
  };
  idealClient: {
    headline: string;
    workWithTitle: string;
    notForTitle: string;
    workWith: string[];
    notFor: string[];
    industries: string;
    cta: string;
    ctaButton: string;
  };
  pricing: {
    headline: string;
    subheadline: string;
    includedLabel: string;
    optionalLabel: string;
    notIncludedLabel: string;
    footerItems: string[];
    footerQuestion: string;
    footerCta: string;
    footerNote: string;
    sections: Array<{
      title: string;
      subtitle?: string;
      description?: string;
      commonFeaturesTitle?: string;
      commonFeatures?: string[];
      isAccordion?: boolean;
      plans: Array<{
        topLabel?: string;
        name: string;
        headline?: string;
        price: string;
        period?: string;
        description?: string;
        features: string[];
        notIncluded?: string[];
        variants?: string[];
        highlighted?: boolean;
        highlightBadge?: string;
        cta: string;
      }>;
    }>;
    footer: string;
  };
  faq: {
    headline: string;
    subheadline: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  finalCta: {
    headline: string;
    subheadline: string;
    primary: string;
    trust: string[];
  };
  methodology: {
    headline: string;
    pillars: Array<{
      title: string;
      text: string;
    }>;
  };
  comparison: {
    headlineParts: string[];
    aspects: Array<{
      label: string;
      others: string;
      we: string;
    }>;
    anchor: string;
  };
  footer: {
    tagline: string;
    links: {
      quick: string;
      services: string;
      contact: string;
      titles: {
        quick: string;
        services: string;
        contact: string;
        global: string;
      }
    };
    contactInfo: {
      email: string;
      phone: string;
      hours: string;
      locations: string;
    };
    copyright: string;
    legal: {
      privacy: string;
      terms: string;
    };
  };
}
