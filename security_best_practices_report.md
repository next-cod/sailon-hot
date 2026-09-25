# Security review — Сэйлон

## Executive summary

The current landing page has no confirmed critical or high-severity application vulnerabilities. It is a static Next.js application without API routes, authentication, payments, uploads, database access, third-party scripts, iframes, or outbound browser requests. `npm audit` reports zero known vulnerabilities. The production browser check found no cookies and no console errors.

The security baseline was strengthened during this review with restrictive response headers and safer JSON-LD serialization. The remaining launch risks are operational: the lead form is still a client-side demo, and the published legal pages contain placeholders.

## Resolved findings

### SEC-001 — Missing browser security headers

- Severity: Medium
- Location: `next.config.ts:3-36`
- Evidence: the project previously configured cache headers only.
- Impact: reduced defense in depth against framing, MIME confusion, unwanted browser capabilities, and script injection.
- Fix: added CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, and `X-Permitted-Cross-Domain-Policies`.
- Verification: the production build serves the headers and loads without browser console warnings.

### SEC-002 — JSON-LD insertion was not future-proof against script termination

- Severity: Low
- Location: `app/page.tsx:15-21`
- Evidence: JSON-LD is inserted with `dangerouslySetInnerHTML`.
- Impact: the current values are trusted constants, so there was no exploitable path; a future untrusted `<` sequence could make the sink unsafe.
- Fix: escape `<` as `\u003c` before insertion.

## Open launch blockers

### SEC-003 — Lead form has no real submission backend

- Severity: Medium before accepting real leads
- Location: `components/figma/FunctionalLayer.tsx:266-269`
- Evidence: submit only calls `setSent(true)` and does not send or store the entered name/contact.
- Impact: visitors see “Заявка принята”, but the lead is lost. Adding an ad-hoc endpoint later could also introduce unsafe storage or spam abuse.
- Required fix before real collection: choose a Russia-hosted destination, validate and normalize fields server-side, add rate limiting and abuse protection, record consent evidence, define retention/deletion, and avoid logging contact data.

### SEC-004 — Legal and operator details are placeholders

- Severity: Compliance blocker
- Location: `components/LocalizedLegalPage.tsx:29-42`, `app/contacts/page.tsx:17-18`, `app/support/page.tsx:18`
- Evidence: draft notices, dummy registration numbers, and placeholder support addresses are published.
- Impact: the site cannot be treated as legally finalized while collecting personal data or accepting an online contract.
- Required fix: replace placeholders only after the operator details, service terms, processing flow, providers, retention periods, and consent wording are confirmed.

## Accepted limitation

The CSP currently allows inline scripts and styles because the statically rendered Next.js page uses inline hydration data and inline layout styles. External scripts remain blocked. Moving to nonce-based CSP would require dynamic per-request rendering and would trade away part of the current static-delivery performance; it is not proportionate for this static landing until sensitive authenticated functionality is added.
