/**
 * Consulting Services, Engagement Models, and Credibility Data
 */

export const CONSULTING_SERVICES = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Implementation',
    headline: 'Move AI from idea to production.',
    description:
      'Help organizations identify practical AI opportunities, choose appropriate architectures, and integrate AI into real products and operational workflows.',
    areas: [
      'AI product strategy & feasibility',
      'LLM application architecture',
      'AI feature architecture & scoping',
      'RAG & knowledge-based AI',
      'Agentic workflows & automation',
      'AI APIs & model/service integration',
      'Prompt & workflow architecture',
      'AWS AI services integration',
      'Production integration & scalability',
      'Cost considerations & model evaluation',
    ],
    pricing: 'Starting at $200/hour',
    ctaText: 'Discuss an AI Project',
    eventType: 'ai_consulting_click',
    formInterest: 'AI Strategy & Implementation',
    relevantProjects: ['AIWorkoutNow', 'DoctorAIBolit', 'YouTubeBoosterAI'],
  },
  {
    id: 'software-architecture',
    title: 'Software Architecture & Modernization',
    headline: 'Build systems that can evolve with the business.',
    description:
      'Architect resilient, maintainable distributed systems and modernize existing software assets to eliminate technical debt and unlock agility.',
    areas: [
      '.NET architecture & modern C#',
      'React & modern frontend architecture',
      'REST APIs & microservices',
      'Distributed systems design',
      'SQL & data layer architecture',
      'Enterprise integration architecture',
      'Legacy modernization roadmaps',
      'Scalability & performance optimization',
      'Architecture reviews & risk reduction',
    ],
    pricing: 'Starting at $200/hour',
    ctaText: 'Book an Architecture Review',
    eventType: 'architecture_consulting_click',
    formInterest: 'Software Architecture',
    relevantProjects: ['GetTrainMate', 'LuckyNumbersLab', 'AIWorkoutNow'],
  },
  {
    id: 'cloud-architecture',
    title: 'AWS & Cloud Architecture',
    headline: 'Scalable, cost-effective cloud infrastructure.',
    description:
      'Cloud architecture reviews, serverless system design, and production AWS infrastructure grounded in hands-on deployment and operations experience.',
    areas: [
      'Cloud architecture reviews',
      'AWS serverless architecture',
      'Lambda, API Gateway, S3, DynamoDB',
      'CloudFront, Cognito & SES',
      'Step Functions & ECS container architecture',
      'CI/CD pipelines & deployment automation',
      'Cloud infrastructure strategy',
      'Scalability, reliability & monitoring',
      'Cloud cost analysis & optimization',
    ],
    pricing: 'Starting at $200/hour',
    ctaText: 'Discuss Your Cloud Architecture',
    eventType: 'cloud_consulting_click',
    formInterest: 'AWS / Cloud',
    relevantProjects: ['AIWorkoutNow', 'GetTrainMate', 'DoctorAIBolit'],
  },
  {
    id: 'leadership-advisory',
    title: 'Engineering Leadership Advisory',
    headline: 'Experienced engineering leadership without unnecessary overhead.',
    description:
      'Designed for CTOs, founders, and engineering executives needing senior engineering leadership perspective, process refinement, or execution alignment.',
    areas: [
      'Engineering organization design & structure',
      'Engineering hiring & team scaling',
      'Mentoring & leadership coaching',
      'Engineering delivery & sprint execution',
      'Agile, Scrum & Kanban discipline',
      'Engineering metrics & delivery KPIs',
      'Architecture governance & risk balance',
      'Technical roadmaps & milestone planning',
      'Engineering & product stakeholder alignment',
    ],
    pricing: 'Starting at $200/hour',
    ctaText: 'Discuss Engineering Leadership',
    eventType: 'leadership_advisory_click',
    formInterest: 'Engineering Leadership Advisory',
    note: 'Open for both select advisory engagements and permanent engineering leadership roles.',
  },
  {
    id: 'product-strategy',
    title: 'AI Product & Technology Strategy',
    headline: 'Turn product ideas into executable technology plans.',
    description:
      'Leverage hands-on experience personally designing, architecting, building, and launching production software and AI products.',
    areas: [
      'MVP definition & technical scoping',
      'Technical feasibility & validation',
      'Product & system architecture',
      'AI opportunity assessment',
      'Build vs. buy evaluation',
      'Technology stack selection',
      'SaaS architecture & user flows',
      'Product analytics & conversion tracking',
      'Founder technical advisory & due diligence',
    ],
    pricing: 'Starting at $200/hour',
    ctaText: 'Discuss Your Product',
    eventType: 'product_strategy_click',
    formInterest: 'AI Product / Technology Strategy',
    relevantProjects: ['GetTrainMate', 'AIWorkoutNow', 'ListingPilotAI'],
  },
  {
    id: 'fractional-leadership',
    title: 'Fractional Engineering Leadership',
    headline: 'Senior engineering leadership when you need it — without immediately adding another full-time executive.',
    description:
      'Engagements are scoped based on responsibilities, duration, and time commitment to guide team execution, architecture, and technology direction.',
    areas: [
      'Temporary engineering leadership & interim management',
      'Fractional engineering management',
      'Architecture oversight & tech standards',
      'Technical roadmap ownership',
      'Engineering process improvement',
      'Delivery recovery for critical initiatives',
      'Team mentoring & talent coaching',
      'Hiring strategy & candidate evaluation',
      'Technical decision support for founders & executives',
    ],
    pricing: 'Custom Engagement',
    pricingNote: 'Engagements are scoped based on responsibilities, duration and time commitment.',
    ctaText: 'Discuss a Fractional Engagement',
    eventType: 'fractional_leadership_click',
    formInterest: 'Fractional Engineering Leadership',
  },
];

export const ENGAGEMENT_OPTIONS = [
  {
    id: 'consultation',
    title: 'Expert Consultation',
    rate: 'Starting at $200/hour',
    description:
      'Direct, 1-on-1 advisory session focused on a specific AI, architecture, cloud, engineering, or technology challenge.',
    deliverables: [
      'Focused problem diagnosis',
      'Architectural or technical recommendations',
      'Actionable next steps & implementation guidance',
    ],
    ctaText: 'Book a Consultation',
    ctaAction: 'calendly',
    eventType: 'consulting_book_click',
    formInterest: 'AI Strategy & Implementation',
  },
  {
    id: 'assessment',
    title: 'Architecture / AI Assessment',
    rate: 'Starting at $1,500',
    description:
      'An experienced, objective review of your existing architecture, AI implementation, technical design, cloud infrastructure, or modernization plan.',
    deliverables: [
      'Comprehensive system or AI workflow review',
      'Identification of bottlenecks, risks & tech debt',
      'Prioritized modernization roadmap & recommendations',
    ],
    deliverablesNote: 'Deliverables depend on project scope and system complexity.',
    ctaText: 'Request an Assessment',
    ctaAction: 'contact',
    eventType: 'architecture_consulting_click',
    formInterest: 'Software Architecture',
    budgetPrefill: 'Architecture / AI Assessment ($1,500+)',
  },
  {
    id: 'sprint',
    title: 'Technology Strategy Sprint',
    rate: 'Starting at $2,500',
    description:
      'A deep, collaborative sprint covering AI strategy, system architecture, product MVP planning, technical roadmapping, or cloud migration.',
    deliverables: [
      'End-to-end technical architecture & feasibility',
      'AI/LLM integration strategy & service selection',
      'Execution roadmap with milestones & stack recommendations',
    ],
    ctaText: 'Discuss a Strategy Sprint',
    ctaAction: 'contact',
    eventType: 'product_strategy_click',
    formInterest: 'AI Product / Technology Strategy',
    budgetPrefill: 'Technology Strategy Sprint ($2,500+)',
  },
  {
    id: 'fractional',
    title: 'Fractional Engineering Leadership',
    rate: 'Custom Engagement',
    description:
      'Hands-on, ongoing senior engineering leadership for organizations that need high-impact management, architecture oversight, and team guidance.',
    deliverables: [
      'Fractional leadership tailored to organization goals',
      'Engineering culture, standards & delivery discipline',
      'Hiring, mentoring, and technical decision support',
    ],
    deliverablesNote: 'Scoped based on responsibilities, duration, and time commitment.',
    ctaText: 'Discuss an Engagement',
    ctaAction: 'contact',
    eventType: 'fractional_leadership_click',
    formInterest: 'Fractional Engineering Leadership',
    budgetPrefill: 'Fractional Leadership (Custom)',
  },
];

export const CREDIBILITY_METRICS = [
  {
    value: '20+ Years',
    label: 'Software Engineering',
  },
  {
    value: '15+ Years',
    label: 'Engineering Leadership',
  },
  {
    value: 'Hands-On',
    label: 'Architecture & Development',
  },
  {
    value: 'AI',
    label: 'Products Built & Shipped',
  },
  {
    value: 'AWS',
    label: 'Cloud Architecture',
  },
  {
    value: 'Full Stack',
    label: '.NET · React · APIs · Data',
  },
];

export const WHO_I_WORK_WITH = [
  'Founders',
  'CTOs',
  'Engineering Leaders',
  'Startups',
  'Product Teams',
  'SaaS Companies',
  'Enterprises',
  'Organizations Adopting AI',
];
