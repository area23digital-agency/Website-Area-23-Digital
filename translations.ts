
import { Translation } from './types';

export const translations: Record<'en' | 'es', Translation> = {
  en: {
    nav: {
      howWeWork: "How We Work",
      services: "Services",
      results: "Results",
      about: "About",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      cta: "Let's Talk"
    },
    hero: {
      badge: "GROWTH SYSTEMS AVAILABLE",
      headlineParts: ["We Drive", "Your Success in the", "Digital World"],
      subheadline: "We build integrated systems—Meta Ads, CRM, Data Strategy—that transform marketing into predictable revenue.",
      features: "Strategy → Paid Media → Automation → Sales",
      primaryCTA: "Book Strategy Call",
      secondaryCTA: "View Services",
      trustBadge: "TRUSTED BY 50+ GROWTH PARTNERS",
      trustBadgeSub: "$2M+ managed | 50+ businesses scaled across USA & LATAM"
    },
    problem: {
      badge: "THE CURRENT STATE",
      headline: "Does this sound familiar?",
      cards: [
        { title: "You don't know how to promote your business online", text: "You have a digital presence but can't attract customers consistently or predictably." },
        { title: "You don't know how to position your brand", text: "Your competitors appear first, while your business goes unnoticed in the digital market." },
        { title: "You don't know how to get more sales", text: "You invest in marketing but don't see clear results in your revenue growth." }
      ],
      transition: "This is the reality for most businesses today. We have the solution."
    },
    approach: {
      badges: ["Analysis", "Strategy", "Growth"],
      headline: "$100,000 Pages",
      supportingText: "Every component feeds data back into strategy, creating a self-optimizing revenue system that improves continuously over time.",
      cta: "DISCOVER OUR PROCESS",
      steps: [
        { title: "STRATEGY" },
        { title: "PAID MEDIA" },
        { title: "AUTOMATION" },
        { title: "SALES" }
      ]
    },
    hundredKPages: {
      badges: ["Analysis", "Strategy", "Growth"],
      headline: "The Growth Methodology",
      subheadline: "We engineer growth systems.",
      description: "Your revenue system, designed to scale. No fluff. No shortcuts. Just a disciplined process to design, launch, and optimize the infrastructure your business needs.",
      diagramNodes: [
        { title: "DISCOVERY" },
        { title: "BUILD" },
        { title: "SCALE" }
      ],
      phases: [
        {
          title: "DISCOVERY & STRATEGY",
          items: [
            "Full situation audit",
            "Competitor & market analysis",
            "Goal & KPI definition",
            "System architecture design",
            "Customer journey mapping"
          ],
          deliverable: "System Output: Growth Roadmap"
        },
        {
          title: "BUILD & DEPLOY",
          items: [
            "CRM & automation setup",
            "Meta Ads campaign launch",
            "Conversion tracking setup",
            "Landing page development",
            "WhatsApp automation setup"
          ],
          deliverable: "System Output: Launch-Ready Infrastructure"
        },
        {
          title: "OPTIMIZE & SCALE",
          items: [
            "Daily campaign optimization",
            "A/B testing of creatives and audiences",
            "Budget scaling strategies",
            "Lead quality refinement",
            "Performance reporting"
          ],
          deliverable: "System Output: Predictable Revenue"
        }
      ],
      footer: "SYSTEM STATUS: ACTIVE"
    },
    howWeWork: {
      headline: "Your revenue system, engineered to scale.",
      subheadline: "No fluff. No shortcuts. Just a disciplined process to design, launch, and optimize the infrastructure your business needs to scale predictably.",
      phases: [
        {
          title: "DISCOVERY & STRATEGY",
          items: [
            "Complete audit of current situation",
            "Competitor and market analysis",
            "Define objectives and KPIs",
            "Design system architecture",
            "Customer journey mapping"
          ],
          deliverable: "System Output: Strategic Blueprint"
        },
        {
          title: "BUILD & DEPLOY",
          items: [
            "Configure CRM and automation flows",
            "Launch Meta Ads campaigns",
            "Implement conversion tracking",
            "Develop landing pages",
            "WhatsApp automation setup"
          ],
          deliverable: "System Output: Live System"
        },
        {
          title: "OPTIMIZE & SCALE",
          items: [
            "Daily campaign optimization",
            "A/B testing of creatives and audiences",
            "Budget scaling strategies",
            "Lead quality refinement",
            "Performance reporting"
          ],
          deliverable: "System Output: Optimized Growth Engine"
        }
      ],
      footer: "Result: A self-optimizing revenue system that improves continuously."
    },
    services: {
      headline: "The components of your growth system",
      subheadline: "Each element works integrated with the others to generate sustainable results.",
      ctaButton: "SELECT SERVICE",
      cards: [
        { 
          component: "SYSTEM COMPONENT 01",
          title: "Strategic Paid Media", 
          description: "Professional Meta Ads management. We launch campaigns, optimize daily, and scale what works.",
          whatWeDoTitle: "CAPABILITIES",
          whatWeDo: [
            "Launch and manage Meta Ads campaigns",
            "Create and test ad creatives",
            "Optimize targeting and budgets daily",
            "Track and report performance weekly"
          ],
          advantageTitle: "SYSTEM ADVANTAGE",
          benefit: "Qualified leads and sales, not just reach."
        },
        { 
          component: "SYSTEM COMPONENT 02",
          title: "Growth Strategy", 
          description: "We analyze your business and design the complete customer journey before spending a dollar.",
          whatWeDoTitle: "CAPABILITIES",
          whatWeDo: [
            "Audit your current marketing situation",
            "Define objectives, KPIs, and target metrics",
            "Map complete customer journey",
            "Create strategic roadmap and action plan"
          ],
          advantageTitle: "SYSTEM ADVANTAGE",
          benefit: "Total clarity on what to do and what not to do." 
        },
        { 
          component: "SYSTEM COMPONENT 03",
          title: "Automation & Systems", 
          description: "We configure CRM and automate follow-up via WhatsApp, email, and SMS.",
          whatWeDoTitle: "CAPABILITIES",
          whatWeDo: [
            "Configure complete CRM system",
            "Build WhatsApp automated flows",
            "Set up email and SMS sequences",
            "Integrate with Meta Ads campaigns"
          ],
          advantageTitle: "SYSTEM ADVANTAGE",
          benefit: "No lost leads due to lack of follow-up." 
        },
        { 
          component: "SYSTEM COMPONENT 04",
          title: "Web & CRO", 
          description: "We develop high-converting landing pages optimized for mobile and speed.",
          whatWeDoTitle: "CAPABILITIES",
          whatWeDo: [
            "Design and develop conversion-focused pages",
            "Optimize for mobile and speed",
            "Implement conversion tracking",
            "A/B test elements to improve results"
          ],
          advantageTitle: "SYSTEM ADVANTAGE",
          benefit: "More conversions with the same traffic." 
        }
      ],
      footer: "We don’t sell these services in isolation. The power is in how everything works together as a single system."
    },
    stats: {
      headline: "Systems built for real, measurable growth.",
      items: [
        { value: "$2M+", label: "AD SPEND MANAGED" },
        { value: "50+", label: "BUSINESSES SCALED" },
        { value: "5+", label: "YEARS BUILDING SYSTEMS" },
        { value: "15+", label: "INDUSTRIES SERVED" },
        { value: "10K+", label: "QUALIFIED LEADS" },
        { value: "3x", label: "AVERAGE COST EFFICIENCY" }
      ]
    },
    caseStudies: {
      headline: "Real Results",
      badge: "CLIENT SUCCESS LOG",
      cta: "View All Case Studies",
      cases: [] // Deprecated in favor of testimonials
    },
    testimonials: {
      badge: "CLIENT SUCCESS LOG",
      headline: "Real Results",
      items: [
        { 
          industry: "ECOMMERCE",
          quote: "Area 23 Digital didn’t just run ads; they built a sales machine. Our lead quality increased significantly in the first month using their automation flows.", 
          name: "Marcus Thorne", 
          position: "CEO — NEXARETAIL",
          context: "Before working with Area 23 Digital, we were generating leads but lacked a real follow-up system to convert them into sales.",
          results: [
            { value: "3.5×", label: "ROAS" },
            { value: "+250%", label: "Sales Growth" },
            { value: "60-DAY", label: "Optimization" }
          ],
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
          indicator: "/// 1 OF 3"
        },
        { 
          industry: "CAR DEALERSHIP",
          quote: "We needed a system, not more ads. Area 23 Digital built our complete lead generation infrastructure with clear tracking and automation.", 
          name: "Carlos Martínez", 
          position: "CEO AT AUTOGROUP USA",
          context: "By implementing our complete system—Meta Ads + CRM + WhatsApp automation—this dealership scaled lead generation while reducing cost per lead.",
          results: [
            { value: "+180%", label: "Qualified Leads" },
            { value: "-35%", label: "Cost Per Lead" },
            { value: "90-DAY", label: "Implementation" }
          ],
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
          indicator: "/// 2 OF 3"
        },
        { 
          industry: "LOCAL SERVICES",
          quote: "Professional team with clear processes. Our conversion rate doubled in 3 months with their integrated system approach.", 
          name: "María González", 
          position: "OWNER AT SERVICEPRO LATAM",
          context: "Through strategic campaign optimization and automated follow-up flows, we doubled their conversion rate in 3 months.",
          results: [
            { value: "2×", label: "Conversion Rate" },
            { value: "+$150K", label: "Revenue Growth" },
            { value: "12-WEEK", label: "System Build" }
          ],
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
          indicator: "/// 3 OF 3"
        }
      ]
    },
    idealClient: {
      headline: "Is Area 23 Digital the right growth partner for your business?",
      workWithTitle: "WE WORK WITH BUSINESSES THAT:",
      notForTitle: "WE'RE NOT FOR:",
      workWith: [
        "Seek growth with clarity and control",
        "Value systems and processes over shortcuts",
        "Prioritize long-term partnership",
        "Want sustainable results, not 30-day miracles",
        "Have a validated offer ready to scale"
      ],
      notFor: [
        "Those seeking guaranteed results",
        "Those who only want likes or visibility",
        "Businesses unwilling to follow a structured growth process",
        "Budgets not suitable for scaling"
      ],
      industries: "CAR DEALERS · LOCAL SERVICES · ECOMMERCE · PROFESSIONAL SERVICES",
      cta: "Do you identify? Let’s talk.",
      ctaButton: "Let's Talk"
    },
            pricing: {
      headline: "Investment",
      subheadline: "Choose Your Growth Plan",
      sections: [
        {
          title: "",
          plans: [
            {
              topLabel: "TO GET STARTED",
              name: "Starter",
              price: "$850",
              period: "/month",
              headline: "Start selling online",
              description: "The essentials to digitalize your business and generate your first online customers.",
              features: [
                "Facebook, Instagram and Google Business setup",
                "Meta Ads campaigns optimized for leads",
                "Audience and competitor analysis",
                "Daily optimization + weekly reports"
              ],
              cta: "GET STARTED"
            },
            {
              topLabel: "TO GROW",
              highlightBadge: "MOST POPULAR",
              name: "Growth",
              price: "$1,500",
              period: "/month",
              headline: "Multiply your sales",
              description: "Advanced campaigns + complete management of your store to scale.",
              highlighted: true,
              features: [
                "Everything in Starter",
                "Professional website or ecommerce management",
                "A/B testing and conversion optimization",
                "Product updates (15/month)",
                "Monthly strategic call",
                "Priority support"
              ],
              cta: "GET STARTED"
            },
            {
              topLabel: "TO DOMINATE",
              name: "Scale",
              price: "$2,800",
              period: "/month",
              headline: "Automate everything",
              description: "Sell while you sleep with complete automations.",
              features: [
                "Everything in Growth",
                "CRM + automated WhatsApp API",
                "Email marketing automation",
                "Unlimited products in ecommerce",
                "Dedicated consultant",
                "24/7 support"
              ],
              cta: "GET STARTED"
            }
          ]
        },
        {
          title: "Need just a specific service?",
          subtitle: "Individual services with no monthly commitment",
          isAccordion: true,
          plans: [
            {
              name: "WEBSITE CREATION",
              price: "From $950",
              period: "one-time",
              description: "Professional website optimized to convert visits into customers.",
              features: [
                "Professional responsive design",
                "Up to 5 main pages",
                "Contact forms",
                "Basic SEO optimization"
              ],
              variants: [
                "Basic: $950",
                "Professional: $1,350",
                "Premium: $1,800"
              ],
              cta: "REQUEST QUOTE"
            },
            {
              name: "E-COMMERCE CREATION",
              price: "From $1,200",
              period: "one-time",
              description: "Complete online store ready to sell from day one.",
              features: [
                "Professional store design",
                "Payment gateway configured",
                "Shipping integration",
                "Refund, cookies and privacy policies",
                "Product upload with variants",
                "Admin panel"
              ],
              variants: [
                "Basic (15 products): $1,200",
                "Standard (35 products): $1,650",
                "Premium (50 products): $2,200"
              ],
              cta: "REQUEST QUOTE"
            },
            {
              name: "GOOGLE BUSINESS PROFILE",
              price: "$280",
              period: "one-time",
              description: "Appear on Google Maps and local searches in your area.",
              features: [
                "Profile creation and verification",
                "Local search optimization",
                "Complete setup (hours, services, location)",
                "Professional photos upload",
                "Reviews configuration"
              ],
              variants: [
                "Monthly management: $150/month",
                "Weekly posts",
                "Review responses",
                "Photo updates"
              ],
              cta: "REQUEST"
            },
            {
              name: "INDIVIDUAL META ADS CAMPAIGN",
              price: "$260",
              period: "per campaign",
              description: "One-time campaign for specific promotion, launch or event.",
              features: [
                "Ad account setup",
                "Target audience analysis",
                "Campaign structure design",
                "3-5 ad creatives creation",
                "Initial optimization (first 7 days)",
                "Final results report"
              ],
              notIncluded: [
                "Ongoing management (setup + initial optimization only)",
                "Ad budget"
              ],
              cta: "REQUEST"
            },
            {
              name: "WEB/E-COMMERCE MAINTENANCE",
              price: "From $280",
              period: "/month",
              description: "Keep your site updated, fast and secure.",
              features: [
                "Security updates",
                "Speed optimization",
                "Weekly backup",
                "New product/content upload",
                "Email technical support",
                "Performance monitoring"
              ],
              variants: [
                "Basic (10 products/month): $280/month",
                "Standard (25 products/month): $450/month",
                "Premium (unlimited products): $650/month"
              ],
              cta: "REQUEST"
            },
            {
              name: "DIGITAL MARKETING AUDIT",
              price: "$450",
              period: "one-time",
              description: "Complete diagnostic of your digital presence + action plan.\n\nDELIVERY:\nComplete PDF document + live presentation",
              features: [
                "Current campaigns analysis (if any)",
                "Website/ecommerce evaluation",
                "Social media presence review",
                "Competitor analysis",
                "Opportunity identification",
                "Detailed action plan (90 days)",
                "Presentation session (1 hour)"
              ],
              cta: "REQUEST"
            }
          ]
        }
      ],
      footer: "Minimum commitment: 3 months\nAd budget NOT included in monthly fees\n\nNot sure which to choose? [Schedule Strategy Call →]"
    },


    faq: {
      headline: "Frequently Asked Questions",
      subheadline: "Everything you need to know about our systems and process.",
      items: [
        { q: "How do you approach business growth?", a: "We start with strategy, not execution. We audit your current situation, design the complete growth system, then implement the components (ads, automation, optimization) in an integrated way. Everything is measured, tracked, and optimized continuously." },
        { q: "Can you guarantee results?", a: "We guarantee professional strategy, disciplined execution, and constant optimization. Results depend on multiple factors including your offer, budget, market conditions, and competitive landscape. We don't make unrealistic promises—we build sustainable systems that compound over time." },
        { q: "Do you offer a trial period?", a: "We require a minimum 3-month commitment. Growth systems need time to gather sufficient data, optimize properly, and show measurable results. We don't work with 30-day tests because they don't provide enough runway for meaningful optimization." },
        { q: "What’s included in the monthly fee?", a: "Ongoing campaign management, daily optimization, CRM maintenance and adjustments, automation flow refinements, weekly performance reports, monthly strategic planning calls, and direct communication with our team. Ad spend budget is separate and managed according to your plan." },
        { q: "How long does implementation take?", a: "Foundation System: 14-21 days | Growth System: 21-30 days | Scale System: 30-45 days. First leads typically appear within 2-3 weeks of launch. Full system optimization occurs over the first 60-90 days as we gather data and refine targeting, messaging, and automation flows." },
        { q: "What makes you different from other agencies?", a: "We design integrated systems, not isolated campaigns. We start with strategy before execution. We focus on sales and ROI, not vanity metrics. We're strategic partners who build infrastructure, not vendors who execute tasks. Everything we build is designed to scale profitably and compound over time." },
        { q: "What’s the minimum investment required?", a: "Combined monthly investment (our fees + ad spend) should be at least $3,000-$3,500 for Foundation, $5,500-$7,500 for Growth, and $10,000+ for Scale. Lower budgets don't generate enough data volume to optimize effectively or scale sustainably." }
      ]
    },
    finalCta: {
      headline: "Ready for stable, controlled growth?",
      subheadline: "No improvisation. No empty promises. Just clear systems that generate real sales.",
      primary: "Schedule Your Strategy Call",
      trust: ["We’ll respond within 12 hours", "No commitment required", "30-minute strategic session"]
    },
    methodology: {
      headline: "Our Pillars",
      pillars: [
        {
          title: "Data Intelligence",
          text: "We leverage advanced analytics to inform every decision, ensuring your budget goes where it generates the highest return."
        },
        {
          title: "Creative Strategy",
          text: "Compelling visuals and copy that resonate with your audience, driving engagement and conversions."
        },
        {
          title: "Systems Integration",
          text: "Connecting your marketing efforts with sales processes for a seamless revenue generation machine."
        }
      ]
    },
    comparison: {
      headlineParts: ["The", "Difference"],
      aspects: [
        { label: "Focus", others: "Vanity Metrics", we: "Revenue & Profit" },
        { label: "Approach", others: "Isolated Tactics", we: "Integrated Systems" },
        { label: "Commitment", others: "Month-to-Month", we: "Long-term Growth" }
      ],
      anchor: "Choose a partner invested in your success."
    },
    footer: {
      tagline: "Building growth systems, not campaigns.",
      links: {
        quick: "Quick Links",
        services: "Services",
        contact: "Contact",
        titles: {
          quick: "QUICK LINKS",
          services: "SERVICES",
          contact: "CONTACT",
          global: "GLOBAL COVERAGE"
        }
      },
      contactInfo: {
        email: "area23digital@gmail.com",
        phone: "+1 (786) 989-2694",
        hours: "Mon-Fri 9:00 AM - 6:00 PM EST",
        locations: "United States | Latin America"
      },
      copyright: "© 2025 Area 23 Digital. All rights reserved.",
      legal: {
        privacy: "PRIVACY POLICY",
        terms: "TERMS OF SERVICE"
      }
    }
  },
  es: {
    nav: {
      howWeWork: "Cómo Trabajamos",
      services: "Servicios",
      results: "Resultados",
      about: "Nosotros",
      pricing: "Precios",
      faq: "FAQ",
      contact: "Contacto",
      cta: "Hablemos"
    },
    hero: {
      badge: "SISTEMAS DE CRECIMIENTO DISPONIBLES",
      headlineParts: ["Impulsamos", "Tu Éxito en el", "Mundo Digital"],
      subheadline: "Construimos sistemas integrados—Meta Ads, CRM, Estrategia de Datos—que transforman el marketing en ingresos predecibles.",
      features: "Estrategia → Paid Media → Automatización → Ventas",
      primaryCTA: "Agendar Llamada Estratégica",
      secondaryCTA: "Ver servicios",
      trustBadge: "CONFIADO POR 50+ SOCIOS DE CRECIMIENTO",
      trustBadgeSub: "$2M+ gestionados | 50+ negocios escalados en USA y LATAM"
    },
    problem: {
      badge: "LA SITUACIÓN ACTUAL",
      headline: "¿Te suena familiar?",
      cards: [
        { title: "No sabes cómo promocionar tu negocio por internet", text: "Tienes presencia digital pero no logras atraer clientes de manera consistente ni predecible." },
        { title: "No sabes cómo posicionar tu marca", text: "Tu competencia aparece primero, mientras tu negocio pasa desapercibido en el mercado digital." },
        { title: "No sabes cómo tener más ventas", text: "Inviertes en marketing pero no ves resultados claros en el crecimiento de tus ingresos." }
      ],
      transition: "Esta es la realidad de la mayoría de los negocios hoy. Nosotros tenemos la solución."
    },
    approach: {
      badges: ["Análisis", "Estrategia", "Crecimiento"],
      headline: "Páginas de $100,000",
      supportingText: "Cada componente alimenta datos a la estrategia, creando un sistema de ingresos auto-optimizable que mejora continuamente con el tiempo.",
      cta: "DESCUBRE NUESTRO PROCESO",
      steps: [
        { title: "ESTRATEGIA" },
        { title: "PAID MEDIA" },
        { title: "AUTOMATIZACIÓN" },
        { title: "VENTAS" }
      ]
    },
    hundredKPages: {
      badges: ["Análisis", "Estrategia", "Crecimiento"],
      headline: "Nuestra Metodología",
      subheadline: "Diseñamos sistemas de crecimiento.",
      description: "Tu sistema de ingresos, diseñado para escalar. Sin rellenos. Sin atajos. Solo un proceso disciplinado para diseñar, lanzar y optimizar la infraestructura que tu negocio necesita.",
      diagramNodes: [
        { title: "DESCUBRIMIENTO" },
        { title: "CONSTRUCCIÓN" },
        { title: "OPTIMIZACIÓN" }
      ],
      phases: [
        {
          title: "DESCUBRIMIENTO Y ESTRATEGIA",
          items: [
            "Auditoría completa de la situación actual",
            "Análisis de competencia y mercado",
            "Definición de objetivos y KPIs",
            "Diseño de arquitectura del sistema",
            "Mapeo del viaje del cliente"
          ],
          deliverable: "Salida del Sistema: Blueprint Estratégico"
        },
        {
          title: "CONSTRUCCIÓN Y DESPLIEGUE",
          items: [
            "Configuración de CRM y flujos de automatización",
            "Lanzamiento de campañas en Meta Ads",
            "Implementación de seguimiento de conversiones",
            "Desarrollo de landing pages",
            "Configuración de automatización de WhatsApp"
          ],
          deliverable: "Salida del Sistema: Sistema en Vivo"
        },
        {
          title: "OPTIMIZACIÓN Y ESCALADO",
          items: [
            "Optimización diaria de campañas",
            "A/B testing de creativos y audiencias",
            "Estrategias de escalado de presupuesto",
            "Refinamiento de calidad de leads",
            "Reportes de rendimiento"
          ],
          deliverable: "Salida del Sistema: Motor de Crecimiento Optimizado"
        }
      ],
      footer: "ESTADO DEL SISTEMA: ACTIVO"
    },
    howWeWork: {
      headline: "Tu sistema de ingresos, diseñado para escalar.",
      subheadline: "Sin rellenos. Sin atajos. Solo un proceso disciplinado para diseñar, lanzar y optimizar la infraestructura que tu negocio necesita para escalar de manera predecible.",
      phases: [
        {
          title: "DESCUBRIMIENTO Y ESTRATEGIA",
          items: [
            "Auditoría completa de la situación actual",
            "Análisis de competencia y mercado",
            "Definición de objetivos y KPIs",
            "Diseño de arquitectura del sistema",
            "Mapeo del viaje del cliente"
          ],
          deliverable: "Salida del Sistema: Blueprint Estratégico"
        },
        {
          title: "CONSTRUCCIÓN Y DESPLIEGUE",
          items: [
            "Configuración de CRM y flujos de automatización",
            "Lanzamiento de campañas en Meta Ads",
            "Implementación de seguimiento de conversiones",
            "Desarrollo de landing pages",
            "Configuración de automatización de WhatsApp"
          ],
          deliverable: "Salida del Sistema: Sistema en Vivo"
        },
        {
          title: "OPTIMIZACIÓN Y ESCALADO",
          items: [
            "Optimización diaria de campañas",
            "A/B testing de creativos y audiencias",
            "Estrategias de escalado de presupuesto",
            "Refinamiento de calidad de leads",
            "Reportes de rendimiento"
          ],
          deliverable: "Salida del Sistema: Motor de Crecimiento Optimizado"
        }
      ],
      footer: "Resultado: Un sistema de ingresos auto-optimizable que mejora continuamente."
    },
    services: {
      headline: "Los componentes de tu sistema de crecimiento",
      subheadline: "Cada elemento trabaja integrado con los otros para generar resultados sostenibles.",
      ctaButton: "SELECCIONAR SERVICIO",
      cards: [
        { 
          component: "COMPONENTE DEL SISTEMA 01",
          title: "Paid Media Estratégico", 
          description: "Gestión profesional de Meta Ads. Lanzamos campañas, optimizamos diariamente y escalamos lo que funciona.",
          whatWeDoTitle: "CAPACIDADES",
          whatWeDo: [
            "Lanzamiento y gestión de campañas Meta Ads",
            "Creación y prueba de creativos",
            "Optimización diaria de segmentación y presupuestos",
            "Seguimiento y reportes semanales"
          ],
          advantageTitle: "VENTAJA DEL SISTEMA",
          benefit: "Leads cualificados y ventas, no solo alcance."
        },
        { 
          component: "COMPONENTE DEL SISTEMA 02",
          title: "Estrategia de Crecimiento", 
          description: "Analizamos tu negocio y diseñamos el viaje completo del cliente antes de gastar un dólar.",
          whatWeDoTitle: "CAPACIDADES",
          whatWeDo: [
            "Auditoría de marketing actual",
            "Definición de objetivos, KPIs y métricas",
            "Mapeo del viaje del cliente completo",
            "Creación de hoja de ruta estratégica"
          ],
          advantageTitle: "VENTAJA DEL SISTEMA",
          benefit: "Claridad total sobre qué hacer y qué no." 
        },
        { 
          component: "COMPONENTE DEL SISTEMA 03",
          title: "Automatización y Sistemas", 
          description: "Configuramos CRM y automatizamos el seguimiento vía WhatsApp, email y SMS.",
          whatWeDoTitle: "CAPACIDADES",
          whatWeDo: [
            "Configuración completa de sistema CRM",
            "Construcción de flujos automatizados de WhatsApp",
            "Configuración de secuencias de email y SMS",
            "Integración con campañas de Meta Ads"
          ],
          advantageTitle: "VENTAJA DEL SISTEMA",
          benefit: "Ningún lead perdido por falta de seguimiento." 
        },
        { 
          component: "COMPONENTE DEL SISTEMA 04",
          title: "Web y CRO", 
          description: "Desarrollamos landing pages de alta conversión optimizadas para móviles y velocidad.",
          whatWeDoTitle: "CAPACIDADES",
          whatWeDo: [
            "Diseño y desarrollo de páginas enfocadas en conversión",
            "Optimización para móviles y velocidad",
            "Implementación de seguimiento de conversiones",
            "A/B testing de elementos para mejorar resultados"
          ],
          advantageTitle: "VENTAJA DEL SISTEMA",
          benefit: "Más conversiones con el mismo tráfico." 
        }
      ],
      footer: "No vendemos estos servicios de forma aislada. El poder está en cómo todo trabaja junto como un sistema único."
    },
    stats: {
      headline: "Sistemas construidos para un crecimiento real y medible.",
      items: [
        { value: "$2M+", label: "INVERSIÓN GESTIONADA" },
        { value: "50+", label: "NEGOCIOS ESCALADOS" },
        { value: "5+", label: "AÑOS CONSTRUYENDO SISTEMAS" },
        { value: "15+", label: "INDUSTRIES ATENDIDAS" },
        { value: "10K+", label: "LEADS CUALIFICADOS" },
        { value: "3x", label: "EFICIENCIA DE COSTO PROMEDIO" }
      ]
    },
    caseStudies: {
      headline: "Resultados Reales",
      badge: "REGISTRO DE ÉXITO",
      cta: "Ver Todos los Casos",
      cases: [] 
    },
    testimonials: {
      badge: "REGISTRO DE ÉXITO",
      headline: "Resultados Reales",
      items: [
        { 
          industry: "ECOMMERCE",
          quote: "Area 23 Digital no solo corrió anuncios; construyeron una máquina de ventas. Nuestra calidad de leads aumentó significativamente en el primer mes usando sus flujos de automatización.", 
          name: "Marcus Thorne", 
          position: "CEO — NEXARETAIL",
          context: "Antes de trabajar con Area 23 Digital, generábamos leads pero nos faltaba un sistema real de seguimiento para convertirlos en ventas.",
          results: [
            { value: "3.5×", label: "ROAS" },
            { value: "+250%", label: "Crecimiento Ventas" },
            { value: "60 DÍAS", label: "Optimización" }
          ],
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
          indicator: "/// 1 DE 3"
        },
        { 
          industry: "CONCESIONARIO",
          quote: "Necesitábamos un sistema, no más anuncios. Area 23 Digital construyó nuestra infraestructura completa de generación de leads con seguimiento claro y automatización.", 
          name: "Carlos Martínez", 
          position: "CEO EN AUTOGROUP USA",
          context: "Implementando nuestro sistema completo—Meta Ads + CRM + Automatización WhatsApp—este concesionario escaló la generación de leads reduciendo el costo por lead.",
          results: [
            { value: "+180%", label: "Leads Cualificados" },
            { value: "-35%", label: "Costo Por Lead" },
            { value: "90 DÍAS", label: "Implementación" }
          ],
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
          indicator: "/// 2 DE 3"
        },
        { 
          industry: "SERVICIOS LOCALES",
          quote: "Equipo profesional con procesos claros. Nuestra tasa de conversión se duplicó en 3 meses con su enfoque de sistema integrado.", 
          name: "María González", 
          position: "DUEÑA EN SERVICEPRO LATAM",
          context: "A través de optimización estratégica de campañas y flujos de seguimiento automatizados, duplicamos su tasa de conversión en 3 meses.",
          results: [
            { value: "2×", label: "Tasa de Conversión" },
            { value: "+$150K", label: "Crecimiento Ingresos" },
            { value: "12 SEMANAS", label: "Construcción Sistema" }
          ],
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
          indicator: "/// 3 DE 3"
        }
      ]
    },
    idealClient: {
      headline: "¿Es Area 23 Digital el socio de crecimiento correcto para tu negocio?",
      workWithTitle: "TRABAJAMOS CON NEGOCIOS QUE:",
      notForTitle: "NO SOMOS PARA:",
      workWith: [
        "Buscan crecimiento con claridad y control",
        "Valoran sistemas y procesos sobre atajos",
        "Priorizan colaboración a largo plazo",
        "Quieren resultados sostenibles, no milagros de 30 días",
        "Tienen una oferta validada lista para escalar"
      ],
      notFor: [
        "Aquellos que buscan resultados garantizados",
        "Quienes solo quieren 'likes' o visibilidad",
        "Negocios no dispuestos a seguir un proceso de crecimiento estructurado",
        "Presupuestos no aptos para escalar"
      ],
      industries: "CONCESIONARIOS · SERVICIOS LOCALES · ECOMMERCE · SERVICIOS PROFESIONALES",
      cta: "¿Te identificas? Hablemos.",
      ctaButton: "Hablemos"
    },
            pricing: {
      headline: "Inversión",
      subheadline: "Elige Tu Plan de Crecimiento",
      sections: [
        {
          title: "",
          plans: [
            {
              topLabel: "PARA COMENZAR",
              name: "Starter",
              price: "$850",
              period: "/mes",
              headline: "Empieza a vender en línea",
              description: "Lo esencial para digitalizar tu negocio y generar tus primeros clientes online.",
              features: [
                "Configuración de Facebook, Instagram y Google Business",
                "Campañas de Meta Ads optimizadas para leads",
                "Análisis de audiencia y competencia",
                "Optimización diaria + reportes semanales"
              ],
              cta: "COMENZAR"
            },
            {
              topLabel: "PARA CRECER",
              highlightBadge: "MÁS ELEGIDO",
              name: "Growth",
              price: "$1,500",
              period: "/mes",
              headline: "Multiplica tus ventas",
              description: "Campañas avanzadas + gestión completa de tu tienda para escalar.",
              highlighted: true,
              features: [
                "Todo lo del Starter",
                "Gestión profesional de website o ecommerce",
                "A/B testing y optimización de conversiones",
                "Actualización de productos (15/mes)",
                "Llamada estratégica mensual",
                "Soporte prioritario"
              ],
              cta: "COMENZAR"
            },
            {
              topLabel: "PARA DOMINAR",
              name: "Scale",
              price: "$2,800",
              period: "/mes",
              headline: "Automatiza todo",
              description: "Vende mientras duermes con automatizaciones completas.",
              features: [
                "Todo lo del Growth",
                "CRM + WhatsApp API automatizado",
                "Email marketing automation",
                "Productos ilimitados en ecommerce",
                "Consultor dedicado",
                "Soporte 24/7"
              ],
              cta: "COMENZAR"
            }
          ]
        },
        {
          title: "¿Necesitas solo un servicio específico?",
          subtitle: "Servicios individuales sin compromiso mensual",
          isAccordion: true,
          plans: [
            {
              name: "CREACIÓN DE WEBSITE",
              price: "Desde $950",
              period: "pago único",
              description: "Sitio web profesional optimizado para convertir visitas en clientes.",
              features: [
                "Diseño profesional y responsivo",
                "Hasta 5 páginas principales",
                "Formularios de contacto",
                "Optimización SEO básica"
              ],
              variants: [
                "Básico: $950",
                "Profesional: $1,350",
                "Premium: $1,800"
              ],
              cta: "SOLICITAR COTIZACIÓN"
            },
            {
              name: "CREACIÓN DE E-COMMERCE",
              price: "Desde $1,200",
              period: "pago único",
              description: "Tienda online completa lista para vender desde día uno.",
              features: [
                "Diseño profesional de tienda",
                "Pasarela de pagos configurada",
                "Integración de envíos",
                "Políticas de reembolso, cookies y privacidad",
                "Carga de productos con variantes",
                "Panel de administración"
              ],
              variants: [
                "Básico (15 productos): $1,200",
                "Estándar (35 productos): $1,650",
                "Premium (50 productos): $2,200"
              ],
              cta: "SOLICITAR COTIZACIÓN"
            },
            {
              name: "GOOGLE BUSINESS PROFILE",
              price: "$280",
              period: "pago único",
              description: "Aparece en Google Maps y búsquedas locales de tu ciudad.",
              features: [
                "Creación y verificación de perfil",
                "Optimización para búsquedas locales",
                "Configuración completa (horarios, servicios, ubicación)",
                "Subida de fotos profesionales",
                "Configuración de reseñas"
              ],
              variants: [
                "Gestión mensual: $150/mes",
                "Publicaciones semanales",
                "Respuesta a reseñas",
                "Actualización de fotos"
              ],
              cta: "SOLICITAR"
            },
            {
              name: "CAMPAÑA INDIVIDUAL META ADS",
              price: "$260",
              period: "por campaña",
              description: "Campaña puntual para promoción, lanzamiento o evento específico.",
              features: [
                "Configuración de cuenta publicitaria",
                "Análisis de audiencia objetivo",
                "Diseño de estructura de campaña",
                "Creación de 3-5 creativos publicitarios",
                "Optimización inicial (primeros 7 días)",
                "Reporte final de resultados"
              ],
              notIncluded: [
                "Gestión continua (solo setup + optimización inicial)",
                "Presupuesto publicitario"
              ],
              cta: "SOLICITAR"
            },
            {
              name: "MANTENIMIENTO WEB/E-COMMERCE",
              price: "Desde $280",
              period: "/mes",
              description: "Mantén tu sitio actualizado, rápido y seguro.",
              features: [
                "Actualizaciones de seguridad",
                "Optimización de velocidad",
                "Backup semanal",
                "Subida de productos/contenido nuevo",
                "Soporte técnico por email",
                "Monitoreo de rendimiento"
              ],
              variants: [
                "Básico (10 productos/mes): $280/mes",
                "Estándar (25 productos/mes): $450/mes",
                "Premium (productos ilimitados): $650/mes"
              ],
              cta: "SOLICITAR"
            },
            {
              name: "AUDITORÍA DE MARKETING DIGITAL",
              price: "$450",
              period: "pago único",
              description: "Diagnóstico completo de tu presencia digital + plan de acción.\n\nENTREGA:\nDocumento PDF completo + presentación en vivo",
              features: [
                "Análisis de campañas actuales (si existen)",
                "Evaluación de website/ecommerce",
                "Revisión de presencia en redes sociales",
                "Análisis de competencia",
                "Identificación de oportunidades",
                "Plan de acción detallado (90 días)",
                "Sesión de presentación (1 hora)"
              ],
              cta: "SOLICITAR"
            }
          ]
        }
      ],
      footer: "Compromiso mínimo: 3 meses\nPresupuesto publicitario NO incluido en las tarifas mensuales\n\n¿No estás seguro cuál elegir? [Agendar Llamada Estratégica →]"
    },


    faq: {
      headline: "Preguntas Frecuentes",
      subheadline: "Todo lo que necesitas saber sobre nuestros sistemas y proceso.",
      items: [
        { q: "¿Cómo abordan el crecimiento del negocio?", a: "Comenzamos con estrategia, no ejecución. Auditamos tu situación actual, diseñamos el sistema completo de crecimiento, luego implementamos los componentes (anuncios, automatización, optimización) de forma integrada. Todo se mide, rastrea y optimiza continuamente." },
        { q: "¿Pueden garantizar resultados?", a: "Garantizamos estrategia profesional, ejecución disciplinada y optimización constante. Los resultados dependen de múltiples factores incluyendo tu oferta, presupuesto, condiciones del mercado y panorama competitivo. No hacemos promesas irreales—construimos sistemas sostenibles que componen con el tiempo." },
        { q: "¿Ofrecen un periodo de prueba?", a: "Requerimos un compromiso mínimo de 3 meses. Los sistemas de crecimiento necesitan tiempo para reunir datos suficientes, optimizar adecuadamente y mostrar resultados medibles. No trabajamos con pruebas de 30 días porque no proveen suficiente pista para optimización significativa." },
        { q: "¿Qué incluye la tarifa mensual?", a: "Gestión continua de campañas, optimización diaria, mantenimiento y ajustes de CRM, refinamientos de flujos de automatización, reportes de rendimiento semanales, llamadas de planificación estratégica mensual y comunicación directa con nuestro equipo. El presupuesto de anuncios es separado y gestionado según tu plan." },
        { q: "¿Cuánto toma la implementación?", a: "Sistema Fundación: 14-21 días | Sistema Crecimiento: 21-30 días | Sistema Escala: 30-45 días. Los primeros leads típicamente aparecen dentro de 2-3 semanas del lanzamiento. La optimización completa del sistema ocurre en los primeros 60-90 días mientras reunimos datos y refinamos segmentación, mensajes y flujos de automatización." },
        { q: "¿Qué los hace diferentes de otras agencias?", a: "Diseñamos sistemas integrados, no campañas aisladas. Comenzamos con estrategia antes de ejecución. Nos enfocamos en ventas y ROI, no métricas de vanidad. Somos socios estratégicos que construyen infraestructura, no proveedores que ejecutan tareas. Todo lo que construimos está diseñado para escalar rentablemente y componer con el tiempo." },
        { q: "¿Cuál es la inversión mínima requerida?", a: "La inversión mensual combinada (nuestras tarifas + gasto en anuncios) debería ser al menos $3,000-$3,500 para Fundación, $5,500-$7,500 para Crecimiento, y $10,000+ para Escala. Presupuestos más bajos no generan suficiente volumen de datos para optimizar efectivamente o escalar sosteniblemente." }
      ]
    },
    finalCta: {
      headline: "¿Listo para un crecimiento estable y controlado?",
      subheadline: "Sin improvisación. Sin promesas vacías. Solo sistemas claros que generan ventas reales.",
      primary: "Agenda Tu Llamada de Estrategia",
      trust: ["Respondemos en 12 horas", "Sin compromiso requerido", "Sesión estratégica de 30 minutos"]
    },
    methodology: {
      headline: "Nuestros Pilares",
      pillars: [
        {
          title: "Inteligencia de Datos",
          text: "Aprovechamos análisis avanzados para informar cada decisión, asegurando que tu presupuesto vaya donde genera mayor retorno."
        },
        {
          title: "Estrategia Creativa",
          text: "Visuales y textos convincentes que resuenan con tu audiencia, impulsando el compromiso y las conversiones."
        },
        {
          title: "Integración de Sistemas",
          text: "Conectando tus esfuerzos de marketing con procesos de ventas para una máquina de generación de ingresos fluida."
        }
      ]
    },
    comparison: {
      headlineParts: ["La", "Diferencia"],
      aspects: [
        { label: "Enfoque", others: "Métricas de Vanidad", we: "Ingresos y Ganancias" },
        { label: "Enfoque", others: "Tácticas Aisladas", we: "Sistemas Integrados" },
        { label: "Compromiso", others: "Mes a Mes", we: "Crecimiento a Largo Plazo" }
      ],
      anchor: "Elige un socio invertido en tu éxito."
    },
    footer: {
      tagline: "Construimos sistemas de crecimiento, no campañas.",
      links: {
        quick: "Enlaces Rápidos",
        services: "Servicios",
        contact: "Contacto",
        titles: {
          quick: "ENLACES RÁPIDOS",
          services: "SERVICIOS",
          contact: "CONTACTO",
          global: "COBERTURA GLOBAL"
        }
      },
      contactInfo: {
        email: "area23digital@gmail.com",
        phone: "+1 (786) 989-2694",
        hours: "Lun-Vie 9:00 AM - 6:00 PM EST",
        locations: "Estados Unidos | América Latina"
      },
      copyright: "© 2025 Area 23 Digital. Todos los derechos reservados.",
      legal: {
        privacy: "POLÍTICA DE PRIVACIDAD",
        terms: "TÉRMINOS DE SERVICIO"
      }
    }
  }
};
