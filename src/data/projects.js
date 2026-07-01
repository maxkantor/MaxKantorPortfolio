export const COMMON_STACK =
  'Amplify hosting + CI/CD automation • React/TypeScript • .NET/Lambda + API Gateway • Route 53 • Stripe payments';

export const projects = [
  {
    name: 'AIWorkoutNow',
    emoji: '🏋️',
    value: 'AI-powered workout engine delivering structured training plans with real-time generation.',
    problem:
      'Fitness users need personalized training plans without the friction of manual programming or generic templates.',
    architecture:
      'React SPA on Amplify, .NET Lambda APIs, DynamoDB for user/session data, OpenAI for plan generation, SSM for config, CloudWatch for observability.',
    businessValue:
      'Conversion-focused UX with real-time AI generation, enabling scalable subscription and credit-based monetization.',
    bullets: [
      'End-to-end product ownership from architecture through deployment and monitoring.',
      'Real-time generation pipeline with SSM-driven configuration and CloudWatch observability.',
      'Optimized for conversion, mobile UX, and fast time-to-value.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'SSM', 'CloudWatch', 'React'],
    liveUrl: 'https://aiworkoutnow.com',
    accent: '#4fd1ff',
  },
  {
    name: 'GetTrainMate',
    emoji: '💘',
    value:
      'AI-powered training partner matching platform for workouts, accountability, friendship, and fitness-focused dating.',
    problem:
      'Active lifestyle users struggle to find compatible training partners aligned on goals, schedule, and fitness discipline.',
    architecture:
      'Amplify-hosted React/TypeScript frontend, .NET Lambda + API Gateway backend, DynamoDB data layer, Cognito auth, Stripe billing, Route 53 DNS.',
    businessValue:
      'Credit-based product strategy with guest demo flow, designed for discoverability, retention, and scalable growth experiments.',
    bullets: [
      'Built matching experience for gym, HYROX, CrossFit, running, and active lifestyle users.',
      'Conversion-focused onboarding with guest demo and credit-based monetization.',
      'Full-stack ownership across UX, backend APIs, payments, and cloud infrastructure.',
    ],
    commonLine:
      'Amplify hosting + React/TypeScript + .NET/Lambda + API Gateway + DynamoDB + Route 53 + Stripe payments',
    stack: [
      'Amplify',
      'React',
      'TypeScript',
      '.NET/Lambda',
      'API Gateway',
      'DynamoDB',
      'Stripe',
      'Route 53',
      'Cognito',
    ],
    liveUrl: 'https://gettrainmate.com',
    accent: '#f472b6',
  },
  {
    name: 'YouTubeBoosterAI',
    emoji: '🎥',
    value:
      'AI-powered YouTube growth platform designed to improve titles, CTR, positioning, and creator decision-making.',
    problem:
      'Creators lack data-driven tooling to optimize packaging, discoverability, and channel growth decisions at scale.',
    architecture:
      'React/TypeScript on Amplify, serverless .NET APIs, DynamoDB persistence, Cognito identity, Stripe entitlements for premium features.',
    businessValue:
      'SEO-oriented landing pages and demo/paywall flow designed to convert creators into paying subscribers.',
    bullets: [
      'Channel analysis workflow focused on packaging, discoverability, and performance.',
      'Cognito + Stripe entitlement model for premium creator features.',
      'In active development with production architecture already in place.',
    ],
    commonLine:
      'Amplify hosting + React/TypeScript + .NET/Lambda + API Gateway + DynamoDB + Cognito + Stripe + Route 53',
    stack: ['Amplify', 'React', 'TypeScript', '.NET/Lambda', 'API Gateway', 'DynamoDB', 'Stripe'],
    statusButton: 'In Progress',
    accent: '#fb7185',
  },
  {
    name: 'DoctorAIBolit',
    emoji: '🩺',
    value: 'AI health assistant with safety guardrails and conversational triage workflows.',
    problem:
      'Users need accessible health guidance with safety-first guardrails and responsible AI interaction patterns.',
    architecture:
      'React frontend, Lambda microservices, DynamoDB storage, OpenAI integration with safety layers, SES for follow-ups, Secrets Manager for credentials.',
    businessValue:
      'Trust-oriented health chat product with operational readiness for secure, compliant user engagement.',
    bullets: [
      'Safety-first conversational triage with guardrailed AI responses.',
      'SES integration for follow-up communications.',
      'Secrets Manager for secure credential handling at scale.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'SES', 'Secrets Manager', 'React'],
    liveUrl: 'https://doctoraibolit.com',
    accent: '#34d399',
  },
  {
    name: 'LoveBehaviorTranslator',
    emoji: '💬',
    value: 'AI-driven relationship insight tool designed for shareability and behavioral interpretation.',
    problem:
      'Users want actionable relationship insights from conversations without complex analysis tools.',
    architecture:
      'Lightweight React SPA, Lambda APIs, DynamoDB, OpenAI pipeline for behavioral interpretation, SSM configuration management.',
    businessValue:
      'Shareability-first design driving organic growth and repeat engagement through viral content loops.',
    bullets: [
      'Behavioral interpretation pipeline optimized for sharing and retention.',
      'SSM-driven configuration for rapid iteration without redeployment.',
      'End-to-end ownership of UX, AI integration, and cloud deployment.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'SSM', 'React'],
    liveUrl: 'https://lovebehaviortranslator.com',
    accent: '#a78bfa',
  },
  {
    name: 'AnxietyChatAI',
    emoji: '🧠',
    value: 'Conversational mental health support platform focused on calm, low-friction interaction.',
    problem:
      'People seeking mental health support need calm, accessible AI interaction without overwhelming UX friction.',
    architecture:
      'React calm-interface frontend, Lambda backend, DynamoDB session storage, OpenAI with safety guardrails, Secrets Manager for API keys.',
    businessValue:
      'Low-friction support experience designed for trust, accessibility, and sustainable user engagement.',
    bullets: [
      'Calm UX patterns optimized for sensitive mental health interactions.',
      'Secure credential management via Secrets Manager.',
      'Production deployment with monitoring and operational readiness.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'Secrets Manager', 'React'],
    liveUrl: 'https://anxietychatai.com',
    accent: '#60a5fa',
  },
  {
    name: 'LuckyNumbersLab',
    emoji: '🎯',
    value: 'Lightweight consumer analytics app optimized for speed, SEO, and discoverability.',
    problem:
      'Consumer analytics tools often sacrifice speed and SEO, limiting organic discovery and user retention.',
    architecture:
      'TypeScript React on Amplify, DynamoDB data modeling, S3 asset delivery, SSM config, Route 53 DNS with SEO-first page architecture.',
    businessValue:
      'Fast, discoverable consumer app built for organic traffic growth and minimal operational overhead.',
    bullets: [
      'SEO-first architecture with optimized page performance.',
      'DynamoDB modeling and S3 asset pipeline for lightweight operations.',
      'Designed for speed, discoverability, and low cloud cost.',
    ],
    stack: ['Amplify', 'DynamoDB', 'S3', 'SSM', 'Route 53', 'React', 'TypeScript'],
    liveUrl: 'https://luckynumberslab.com',
    accent: '#fbbf24',
  },
  {
    name: 'ListingPilotAI',
    emoji: '🏡',
    value:
      'AI-powered real estate listing platform for agencies and agents to create stronger property copy, sharper positioning, and higher-converting listings.',
    problem:
      'Real estate teams need consistent, high-converting listing copy at scale without sacrificing quality or speed.',
    architecture:
      'React/TypeScript SPA, .NET Lambda APIs, DynamoDB, OpenAI + Bedrock for content generation, Stripe billing, Route 53.',
    businessValue:
      'Premium SaaS positioning for real estate teams — faster listings, stronger copy, higher conversion rates.',
    bullets: [
      'AI-generated listing descriptions optimized for conversion and consistency.',
      'Scalable product architecture for agency and team workflows.',
      'In active development with production-grade cloud foundation.',
    ],
    commonLine:
      'Amplify hosting + React/TypeScript + .NET/Lambda + API Gateway + DynamoDB + OpenAI + Route 53 + Stripe payments',
    stack: [
      'Amplify',
      'React',
      'TypeScript',
      '.NET/Lambda',
      'API Gateway',
      'DynamoDB',
      'OpenAI',
      'Stripe',
      'Bedrock',
    ],
    statusButton: 'In Progress',
    accent: '#2dd4bf',
  },
  {
    name: 'HybridRace Workouts',
    emoji: '💪',
    value: 'HYROX-focused performance training platform with AI-powered coaching.',
    problem:
      'Hybrid race athletes need structured HYROX training with intelligent coaching adapted to their performance level.',
    architecture:
      'React on Amplify, Lambda services, DynamoDB, AWS Bedrock conversational coach, CloudFormation IaC, SSM secure configuration.',
    businessValue:
      'Specialized performance platform combining AI coaching with production-grade AWS infrastructure management.',
    bullets: [
      'Bedrock-powered conversational coach for personalized training guidance.',
      'CloudFormation-managed infrastructure for reproducible deployments.',
      'Secure configuration via SSM with full product ownership.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'Bedrock', 'CloudFormation', 'SSM', 'React'],
    liveUrl: 'https://www.hybridraceworkouts.com/',
    featured: true,
    accent: '#4fd1ff',
  },
];

if (import.meta.env?.DEV) {
  projects.forEach((p) => {
    const stack = p.stack || [];
    const hasSSM = stack.some((s) => s === 'SSM');
    const hasSecretsManager = stack.some((s) => s === 'Secrets Manager');
    if (hasSSM && hasSecretsManager) {
      throw new Error(
        `Project "${p.name}" violates SSM/Secrets Manager separation: cannot use both in the same project.`
      );
    }
  });
}
