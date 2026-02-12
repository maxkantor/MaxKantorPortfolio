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
