# Domain Migration Notes

## Do not redirect the domain yet

This codebase is intended to become the future Farcelis site, but the current
Squarespace domain should remain untouched until the new deployment is approved.

## Migration sequence

1. Deploy the new site to a Vercel preview or production subdomain.
2. Review desktop and mobile layouts on the deployed environment.
3. Review all page copy and partner/logo accuracy.
4. Confirm favicon, manifest, and metadata behavior.
5. Only then update DNS for `www.farcelis.io`.

## DNS checklist

- Update `www` CNAME to the Vercel target.
- Update apex records if needed based on the chosen host.
- Confirm SSL provisioning completes.
- Confirm canonical URLs resolve to the final domain.

