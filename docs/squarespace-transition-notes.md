# Squarespace Transition Notes

## Current role of Squarespace

Squarespace is now treated as the source reference for:

- existing public copy
- legal links
- current contact information
- preserved logos and certifications
- team headshots and imagery

## Transition approach

1. Preserve current Squarespace content and assets locally.
2. Build the replacement site in code.
3. Use the new coded site for internal review.
4. Migrate DNS only after approval.

## Current legal-link strategy

The footer currently points legal/policy links to the existing live Squarespace
pages so that compliance pages remain available during transition.

## Future cleanup after migration

- Rebuild legal pages natively in the Next.js site.
- Move policy content into internal routes.
- Retire the Squarespace dependency once parity is confirmed.
