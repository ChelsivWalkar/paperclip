# Chelsiv.AI — AI Company Package

> **Intelligent Algorithms. Future Business. Smarter Growth.**

Chelsiv.AI is a faith-centred, educator-led AI studio. Seven AI employees build learning programs, the Chelsiv.AI platform and SIV Home, design joyful biblical channel and status posts, and prepare the Cloud Door store. Walkar, the human founder, sits on the Board and gives final approval on every important decision.

This folder is an [Agent Companies](https://agentcompanies.io/specification) package that can be imported into [Paperclip](https://github.com/paperclipai/paperclip).

## How the company works (hub-and-spoke)

```
Walkar (human founder · Board · final approval)
   │  ideas, goals, approvals
   ▼
SIV — AI CEO / Chief of Staff  ── daily CEO brief 08:30 IST ──▶ Walkar
   ├── CTO ............................ website, apps, SIV Home, security
   ├── Creative Director .............. biblical posts, brand, PESU neon identity
   │      └── Ministry Writer ......... devotionals, captions, lessons
   ├── Learning Lead .................. WonderVerse School, PESU, LMS courses
   ├── Cloud Door Commerce Manager .... Shopify listings, suppliers, policies
   └── Ops & Finance Analyst .......... spend, unit economics, risk, compliance
```

1. Walkar shares an idea → SIV turns it into an issue with an owner and acceptance criteria.
2. The specialist does the work and attaches the work product.
3. Anything public, paid or involving personal data stops at an **approval gate** for Walkar.
4. SIV reports progress, blockers and pending decisions in the daily brief.

## Org chart

| Agent | Title | Reports to | Skills |
|---|---|---|---|
| SIV | AI CEO and Chief of Staff | Board (Walkar) | paperclip, daily-ceo-brief, family-privacy-guardrails |
| CTO | Chief Technology Officer | SIV | paperclip, family-privacy-guardrails |
| Creative Director | Creative Director, Faith & Brand | SIV | paperclip, biblical-post-design, scripture-accuracy-check |
| Ministry Writer | Ministry Content Writer | Creative Director | paperclip, scripture-accuracy-check |
| Learning Lead | Head of Learning Programs | SIV | paperclip, scripture-accuracy-check, family-privacy-guardrails |
| Cloud Door Commerce Manager | Cloud Door E-Commerce Manager | SIV | paperclip, cloud-door-listing-readiness |
| Ops & Finance Analyst | Operations and Finance Analyst | SIV | paperclip |

**Team:** Creative & Ministry (Creative Director + Ministry Writer).

## Custom skills

| Skill | Purpose |
|---|---|
| `biblical-post-design` | Brief, visual rules and checklist for joyful, empathetic channel and status posts |
| `scripture-accuracy-check` | Verifies reference, wording, translation and context of every verse |
| `daily-ceo-brief` | Structure for SIV's two-minute daily founder brief |
| `cloud-door-listing-readiness` | Mandatory real-data checklist before any product listing |
| `family-privacy-guardrails` | Consent, visibility and "guide, not control" rules for family features |

`paperclip` is Paperclip's built-in coordination skill.

## Projects and starter tasks

| Project | Owner | Starter tasks |
|---|---|---|
| Chelsiv.AI Platform | CTO | Verify website deployment · SIV Home learning-support pilot |
| Biblical Content Channel | Creative Director | 7-day "Loved by the Father" series · PESU neon brand kit |
| Learning Programs | Learning Lead | 7-Day Christian Life Productivity Challenge · "Time Mastery with Biblical Wisdom" outline · PESU program plan |
| Cloud Door Launch | Cloud Door Commerce Manager | Evaluate India-first suppliers · First 5–10 verified SKUs · Store policies |

### Recurring routines (Asia/Kolkata)

| Routine | Owner | When |
|---|---|---|
| Daily CEO brief | SIV | Every day 08:30 |
| Weekly company review | SIV | Monday 09:00 |
| Weekly finance and risk review | Ops & Finance Analyst | Friday 16:00 |
| Weekly content calendar | Creative Director | Saturday 10:00 |

## Safety built in

- New agents need Board approval (`requireBoardApprovalForNewAgents: true`).
- Nothing is published, purchased, sent to customers or deployed to production without Walkar's approval.
- Agents never invent products, prices, stock, reviews, testimonies or numbers.
- No secrets, customer data or family data in public code, posts or reports.
- Only the CTO declares an (optional) `GH_TOKEN`; no adapter is pinned, so Paperclip uses its default runtime.

## Getting started

```bash
# Preview first (no changes)
paperclipai company import --from ./companies/chelsiv-ai --dry-run

# Import as a new company
paperclipai company import --from ./companies/chelsiv-ai
```

After import: review each agent, set budgets, connect a runtime adapter and, if the CTO should push code, add `GH_TOKEN` as a secret.

## References

- Agent Companies specification: https://agentcompanies.io/specification
- Paperclip: https://github.com/paperclipai/paperclip
- Created with the company-creator skill from Paperclip.

## License

MIT — see [LICENSE](LICENSE).
