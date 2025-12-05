// Type-safe environment variables helper

const getEnvVar = (key: string, required: boolean = true): string => {
  const value = process.env[key];
  if (required && !value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || '';
};

export const env = {
  // Database
  DATABASE_URL: getEnvVar('DATABASE_URL'),

  // NextAuth
  NEXTAUTH_SECRET: getEnvVar('NEXTAUTH_SECRET'),
  NEXTAUTH_URL: getEnvVar('NEXTAUTH_URL'),

  // AI Services
  NANO_BANANA_API_KEY: getEnvVar('NANO_BANANA_API_KEY', false),
  VEO_API_KEY: getEnvVar('VEO_API_KEY', false),
  MANUS_SLIDES_API_KEY: getEnvVar('MANUS_SLIDES_API_KEY', false),

  // Optional AI Providers
  OPENAI_API_KEY: getEnvVar('OPENAI_API_KEY', false),
  GEMINI_API_KEY: getEnvVar('GEMINI_API_KEY', false),
} as const;

export type Env = typeof env;
