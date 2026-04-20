export const COMMON_STACK =
  'Amplify hosting + CI/CD automation • React/TypeScript • .NET/Lambda + API Gateway • Route 53 • Stripe payments';

export const projects = [
  {
    name: 'AIWorkoutNow',
    emoji: '🏋️',
    value: 'AI-powered workout engine delivering structured training plans with real-time generation.',
    bullets: [
      'AI-generated workout plans focused on conversion and fast UX.',
      'Key Services: OpenAI • SSM • CloudWatch',
      'Real-time generation pipeline, SSM config, CloudWatch observability.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'SSM', 'CloudWatch', 'React'],
    liveUrl: 'https://aiworkoutnow.com',
  },
  {
    name: 'GetTrainMate',
    emoji: '💘',
    value:
      'AI-powered training partner matching platform for workouts, accountability, friendship, and fitness-focused dating.',
    bullets: [
      'Matching experience for gym, HYROX, CrossFit, running, and active lifestyle users.',
      'Conversion-focused onboarding, guest demo flow, and credit-based product strategy.',
      'Built for speed, mobile UX, discoverability, and scalable growth experiments.',
    ],
    commonLine:
      'Common across this app: Amplify hosting + React/TypeScript + .NET/Lambda + API Gateway + DynamoDB + Route 53 + Stripe payments',
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
  },
  {
    name: 'YouTubeBoosterAI',
    emoji: '🎥',
    value:
      'AI-powered YouTube growth platform designed to improve titles, CTR, positioning, and creator decision-making.',
    bullets: [
      'Channel analysis and growth workflow focused on packaging, discoverability, and performance.',
      'SEO-oriented landing pages, demo/paywall flow, and conversion-driven product strategy.',
      'Cognito + Stripe entitlement model for unlocking premium creator features.',
    ],
    commonLine:
      'Common across this app: Amplify hosting + React/TypeScript + .NET/Lambda + API Gateway + DynamoDB + Cognito + Stripe + Route 53',
    stack: ['Amplify', 'React', 'TypeScript', '.NET/Lambda', 'API Gateway', 'DynamoDB', 'Stripe'],
    statusButton: 'In Progress',
  },
  {
    name: 'DoctorAIBolit',
    emoji: '🩺',
    value: 'AI health assistant with safety guardrails and conversational triage workflows.',
    bullets: [
      'AI health chat with safety-first messaging.',
      'Key Services: OpenAI • SES • Secrets Manager',
      'Safety guardrails, SES for follow-ups, Secrets Manager for credentials.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'SES', 'Secrets Manager', 'React'],
    liveUrl: 'https://doctoraibolit.com',
  },
  {
    name: 'LoveBehaviorTranslator',
    emoji: '💬',
    value: 'AI-driven relationship insight tool designed for shareability and behavioral interpretation.',
    bullets: [
      'Relationship insight tool designed for sharing and retention.',
      'Key Services: OpenAI • SSM',
      'Shareability-first design, SSM config, behavioral interpretation pipeline.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'SSM', 'React'],
    liveUrl: 'https://lovebehaviortranslator.com',
  },
  {
    name: 'AnxietyChatAI',
    emoji: '🧠',
    value: 'Conversational mental health support platform focused on calm, low-friction interaction.',
    bullets: [
      'Calm, frictionless mental health support chat.',
      'Key Services: OpenAI • Secrets Manager',
      'Low-friction UX, Secrets Manager for credentials.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'OpenAI', 'Secrets Manager', 'React'],
    liveUrl: 'https://anxietychatai.com',
  },
  {
    name: 'LuckyNumbersLab',
    emoji: '🎯',
    value: 'Lightweight consumer analytics app optimized for speed, SEO, and discoverability.',
    bullets: [
      'Lightweight app focused on speed, SEO, and discoverability.',
      'Key Services: DynamoDB • S3 • SSM • TypeScript',
      'DynamoDB modeling, S3 assets, SSM config, SEO-first architecture.',
    ],
    stack: ['Amplify', 'DynamoDB', 'S3', 'SSM', 'Route 53', 'React', 'TypeScript'],
    liveUrl: 'https://luckynumberslab.com',
  },
  {
    name: 'ListingPilotAI',
    emoji: '🏡',
    value:
      'AI-powered real estate listing platform for agencies and agents to create stronger property copy, sharper positioning, and higher-converting listings.',
    bullets: [
      'Helps real estate agencies and agents generate polished, conversion-focused property listing descriptions.',
      'Improves listing quality, consistency, and speed across residential real estate marketing workflows.',
      'Designed as a scalable AI product with premium SaaS positioning for real estate teams.',
    ],
    commonLine:
      'Common across this app: Amplify hosting + React/TypeScript + .NET/Lambda + API Gateway + DynamoDB + OpenAI + Route 53 + Stripe payments',
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
  },
  {
    name: 'HybridRace Workouts',
    emoji: '💪',
    value: 'HYROX-focused performance training platform with AI-powered coaching.',
    bullets: [
      'Bedrock-powered conversational coach.',
      'CloudFormation-managed infrastructure.',
      'Secure config via SSM.',
    ],
    stack: ['Amplify', 'Lambda', 'DynamoDB', 'Bedrock', 'CloudFormation', 'SSM', 'React'],
    liveUrl: 'https://www.hybridraceworkouts.com/',
    featured: true,
  },
];

// Dev safeguard: SSM and Secrets Manager must not co-exist in the same project
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
