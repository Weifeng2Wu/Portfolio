// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const ENVIRONMENT = process.env.NEXT_PUBLIC_ENV || 'development';
const DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: DSN,
  environment: ENVIRONMENT,

  ...(ENVIRONMENT === 'development' && {
    debug: true,
  }),

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],

  tracesSampleRate: ENVIRONMENT === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: ENVIRONMENT === 'production' ? 0.1 : 0.5,
  replaysOnErrorSampleRate: 1.0,

  enableTracing: true,
});
