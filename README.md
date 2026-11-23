# KINGSLEY NJ — Artist Website Starter

This is a **starter project**, not a deployed or production-complete website.

## Included
- Cinematic public homepage for KINGSLEY NJ / SEINT MUSIC
- Starter `/admin` page
- Next.js 15 / React 19 project structure
- Supabase environment-variable example

## Not yet implemented
The store, payment processing, ticket checkout and QR tickets, fan accounts/community, newsletter, analytics, full content-management dashboard, file uploads, and production security review are not complete. Music is intended to be streamed on external platforms; this website does not host audio files.

## Deploying
1. Upload this project to a GitHub repository.
2. Import that repository into Vercel.
3. Configure the environment variables from `.env.example` after creating a Supabase project.
4. Run a production build and test all pages before connecting a custom domain.

## Important
- Do not commit `.env.local` or secrets to GitHub.
- Never expose a Supabase service-role key in browser code.
- Use a strong, unique password and enable two-factor authentication on GitHub and Vercel.
- A custom domain such as `kingsleynj.com` must be checked for availability and purchased separately.
