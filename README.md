# Zhi Lit Lim — Portfolio

Personal portfolio built with Next.js 15 App Router, TypeScript, Tailwind CSS 4, Framer Motion, and Payload CMS 3 with the PostgreSQL adapter.

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and set `DATABASE_URL` to a reachable PostgreSQL database.
3. Set `PAYLOAD_SECRET` to a long random value (for example, generate one with `openssl rand -base64 32`).
4. Run `npm run dev` and open `/` for the portfolio or `/admin` for Payload.

The public projects page uses a small local data fallback when no database URL is configured. Writing stays empty until posts are published in Payload. CMS content is loaded in server components through Payload's local API; there are no browser-side CMS requests.

For production, configure both environment variables and create/run Payload migrations as part of the deployment workflow. Do not use the local development secret in a deployed environment.

## Checks


