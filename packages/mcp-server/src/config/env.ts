import { z } from 'zod';

const envSchema = z.object({
  CAP_SERVICE_URL: z.string().url(),
  // Client-credentials OAuth against XSUAA. In local/dev these can be
  // dummy values because cap-service runs with mocked auth.
  XSUAA_CLIENT_ID: z.string().min(1),
  XSUAA_CLIENT_SECRET: z.string().min(1),
  XSUAA_TOKEN_URL: z.string().url().optional(),
  
  // Local CAP mocked auth
  CAP_DEV_USER: z.string().default('alice'),
  CAP_DEV_PASSWORD: z.string().default(''),
  
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Fail on startup, not on first request, if config is broken.
export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;