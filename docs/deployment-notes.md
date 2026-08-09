# Deployment Notes

## Recommended host

- Vercel

## Pre-deploy steps

1. Push this repository to GitHub after approval.
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Confirm build command is `npm run build`.
5. Confirm output is standard Next.js deployment.

## Post-deploy checks

1. Verify all primary pages load:
   - `/`
   - `/control-layer`
   - `/services`
   - `/team`
   - `/results`
   - `/contact`
2. Verify metadata in page source.
3. Verify favicon and Apple touch icon render correctly.
4. Verify sitemap and robots routes respond.
5. Verify mobile layout on iPhone and Android widths.

