# Farcelis Pursuit Desk — operator playbook (pilot)

**Owner:** Farcelis AI Consulting LLC  
**Working public name:** Farcelis Pursuit Desk  
**Status:** Pilot service design. The web workspace is a browser-local demonstration, not a client production system.

## Buyer and promise

Serve established small and midsize government contractors with active bids and capable technical staff but no reliable proposal operations cadence. The desk gives their sponsor one current view of bid decisions, requirements, owners, amendments, review gates, and outstanding risks.

The desk manages coordination and evidence. It does not promise an award. The client remains the offeror and owns pricing, technical representations, certifications, signatures, final approval, and submission.

## Two accountable operators

- **Katalin — service lead:** Leads discovery, client fit, kickoff, weekly review, partner and subject-matter-expert follow-up, client satisfaction, and renewal conversation. She can pause a pursuit when owners or decisions are missing.
- **Nathan — systems lead:** Configures intake, controls, document structure, dashboard, automation rules, access, exports, and service reporting. He owns changes to the reusable delivery system.
- **Client sponsor:** Makes the bid/no-bid decision; approves content, pricing, and final submission.
- **Qualified specialist, when scoped:** Performs federal proposal writing, pricing, legal, or final compliance work that requires expertise beyond desk coordination.

## Standard delivery path

1. **Opportunity intake:** Record solicitation link and version, client, agency, due date, vehicle, contact, and source documents. Confirm access rights before any document is stored.
2. **Decision gate:** Score capability fit, past performance, delivery capacity, partner needs, strategic value, and timing. Record the client sponsor's bid/no-bid decision and rationale.
3. **Pursuit kickoff:** Identify the submission authority, section owners, review dates, communications channel, file location, and specialist gaps.
4. **Requirement control:** Create a matrix traced to solicitation sections. Assign each item to a person and capture evidence location, status, and reviewer. Reconcile the matrix after every amendment.
5. **Weekly cadence:** Katalin reviews open decisions, owner responses, amendments, schedule risk, and next seven days with the client sponsor. Send the brief after the meeting.
6. **Review and submission:** A qualified reviewer checks the response against the latest source documents. The client signs off and submits. Store submission receipt if the client supplies it.
7. **Close and reuse:** Record outcome and debrief, archive approved reusable content, and log process changes for the next pursuit.

## Pilot scope to quote

Write these limits into each statement of work: number of active pursuits, solicitation complexity, number of review meetings, expected client response time, amendment handling, document volume, specialist hours, and whether final compliance review is included. Define rush fees and an escalation path for late inputs. Price only after these limits and delivery hours are known.

The first paid pilot can cover one live pursuit and four weeks of desk coordination. Capture actual hours by work type so the recurring offer is priced from real effort.

## Data and AI controls

- Do not enter real bid or client data into the public demo. Its state is only in the visitor's browser.
- For live delivery, use a client-approved workspace, named access permissions, version history, and an agreed retention policy.
- Use AI for draft extraction, amendment summaries, status drafts, and gap suggestions only after the client approves the tool and data handling. Cite source sections in outputs. A human verifies every requirement and amendment against the current solicitation.
- Never let AI invent past performance, certifications, staffing, prices, or legal conclusions. Never auto-submit.

## Operational scorecard

Measure time from opportunity intake to bid decision; percentage of requirements with owners; open requirements at each review gate; amendment review lag; missed internal deadlines; hours per pursuit; and client renewal or repeat-purchase intent. Do not use win rate alone to judge desk performance, because award decisions have many external factors.

## What this repository contains today

- `/pursuit-desk`: focused service page, ready for review on a Vercel branch preview.
- `/pursuit-desk/demo`: browser-local working workspace with multiple pursuits, decisions, requirements, amendments, schedule, weekly brief, risk flags, and CSV exports for six templates.

Before taking real client data, add authenticated multi-user storage, access controls, audit history, document storage, and the approved AI workflow. Treat those as production requirements rather than claims made by the demo.
