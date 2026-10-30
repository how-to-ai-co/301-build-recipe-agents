# Claude Duet (Anthropic)

Agent id: `claude-duet`. Facts from `research/agents-research.md`, checked 30 October 2026.

## 1. At a glance

| | |
| --- | --- |
| **Maker** | Anthropic. Research preview opened 21 October 2026. Built on Claude Opus 5.5. Made "for professionals and small business owners". |
| **Where it lives** | Its own iPhone app, Android app, and claude.ai on the web. Separate from the regular Claude app. One ongoing thread; type or talk. |
| **Cost** (as of 30 October 2026) | Included in Claude **Pro, Max and Ultra** during the preview. It shares your plan's usage limits, and background checks count. New admits get one full limit reset (reportedly until 30 November 2026; **check before class**). Price after the preview not announced. |
| **Availability** | **US only. Waitlist.** Invites go out in waves. Not yet on Team or Enterprise plans. |
| **Memory** | Carries over your Claude memory, skills and connected apps from the first message. |
| **Scheduled / proactive** | Yes: a morning brief, background checks **every few hours**, and messages when something needs you. You choose what to watch and how often. No general scheduler for your own jobs is documented. |
| **Email + calendar** | Yes. Gmail and Slack: finds missed messages, drafts replies. Calendar: schedules meetings, flags conflicts, preps call briefs. Microsoft 365 too. |
| **Connectors** | 6,000+ connectors and plugins in the Claude Marketplace (Gmail, Google Calendar, Drive, Slack, Microsoft 365, Notion, QuickBooks, Stripe, Gusto, Ramp, HubSpot, Docusign, Canva, Shopify, 1Password, LinkedIn…). Its own cloud computer and browser (your devices can be off), but it can't show you that browser yet. Buys with Link and Shop Pay. |
| **Sub-agents** | No. |
| **Best for** | Small-business work: inbox, calendar, invoices, deliverables (docs, sheets, decks). |
| **Weak at** | Real-time alerts (checks every few hours). Personal errands like tickets. Teams of agents. |

## 2. Is it right for your chief of staff?

For most people in this class, yes. It is the closest ready-made chief of staff for a small business owner.
It reuses the Claude setup you built in 201: memory, skills and connectors.
It asks before sending messages, paying, signing or deleting. It won't trade securities or move money between accounts even if you approve.
It handles credentials like Claude Managed Agents: it never directly sees your passwords or sign-in tokens. It refuses to share card numbers or government ID, and shares health and finance details only when you say so.
Honest limits: Anthropic says it "may misread a thread or misjudge urgency". It's US-only and waitlisted. It checks every few hours, so it can miss things between checks.

## 3. Before you start

- A Claude **Pro, Max or Ultra** plan, in the US.
- Join the waitlist at claude.com/product/claude-duet. Wait for the "ready" email.
- An iPhone or Android phone (or use claude.ai on the web).
- Your `BRIEF.md` and `APPROVALS.md` in `~/Documents/chief-of-staff/`.
- **While you wait:** set up [claude-diy](claude-diy.md). Connect Gmail, Calendar, Slack and Drive in the regular Claude app, and save your brief to memory and skills. Duet inherits all of it on day one. Nothing is wasted.

## 4. Set it up

**Who does what.** Claude (on your computer) can prepare your brief, memory notes and prompts, check your connectors in the Claude app, and copy messages for you. **You** must join the waitlist, install Duet on your phone, sign in, approve each connector and approve each action Duet asks about. Claude never types passwords.

1. **You:** Join the waitlist at claude.com/product/claude-duet.
2. **You and Claude, before the invite:** In the regular Claude app, go to **Settings → Connectors**. Connect Google Calendar first, then Gmail, Slack and Drive. Give the least access each one offers. Follow [claude-diy](claude-diy.md) sections 4–5 to put your brief into Claude memory.
3. **You, day one privacy:** In Claude settings, review the privacy and model-training setting (**check before class**: name and default for your plan). Decide what Duet may share: health and finance details are shared only on your explicit instruction.
4. **You:** When the "ready" email arrives, install Duet on your phone (or open it on claude.ai). Sign in with the same Claude account.
5. **You:** Check Duet sees your connectors and memory. Ask it: "What do you know about me and which apps can you use?"
6. **You:** Tell Duet what to watch and how often (section 6).
7. **You:** Approve actions as they come. Don't approve anything you don't understand.
8. **Claude:** Record Claude Duet as the agent in `JOBS.md`.

## 5. Give it your brief

Duet inherits Claude memory, skills and connectors. So the best way is to put the brief into Claude first (see [claude-diy](claude-diy.md) section 5). Then confirm in Duet.

1. **Claude:** Make sure `BRIEF.md` and `APPROVALS.md` are saved into your Claude memory/skills as in claude-diy.
2. **You:** Send Duet this message, with both files pasted in, so it has them in its thread too:

```text
You're my chief of staff. Below are my brief and my approval rules. Use them for the morning brief, every background check and every task.

Approval levels:
- Watch: read and report only.
- Draft: prepare drafts and lists. Send nothing.
- Ask first: act only after I approve each action.
- Go: act alone within the stated limits.
Never, at any level: move money between accounts, trade, sign contracts, change passwords, delete email in bulk, or message a new contact without my approval.

Reply with a 5-line summary, and tell me which of my connected apps you can see.

--- BRIEF.md ---
[paste BRIEF.md here]

--- APPROVALS.md ---
[paste APPROVALS.md here]
```

## 6. Install the standing jobs

Duet has a built-in **morning brief** and **background checks every few hours**. You tell it what to watch. It doesn't document a general scheduler, so for exact-time jobs (like Friday 4 pm) ask it, and if it can't hold the time, use a claude-diy scheduled task. Full job definitions live in `playbook/jobs/`.

| Job | Default level | How in Duet |
| --- | --- | --- |
| [`morning-brief`](../jobs/morning-brief.md) | Watch | Built in. Set the content. |
| [`inbox-triage`](../jobs/inbox-triage.md) | Draft | Background checks (every few hours, not exactly 9:00 and 15:00). |
| [`meeting-prep`](../jobs/meeting-prep.md) | Watch | Built in (call prep briefs). |
| [`follow-ups`](../jobs/follow-ups.md) | Draft | Ask it to include in the brief. |
| [`weekly-review`](../jobs/weekly-review.md) | Watch | Ask for it; fallback: claude-diy scheduled task. |
| [`errands`](../jobs/errands.md) | Ask first | Works, but errands are weaker than work tasks. Muse or Instinct may do better. |

**morning-brief** (Watch)

```text
Set my morning brief for 7:30 am on weekdays. Include: today's calendar with conflicts, emails and Slack messages that need me, deadlines in the next 72 hours, and unpaid invoices (if QuickBooks or Stripe is connected). Read only. Keep it short.
```

**inbox-triage** (Draft)

```text
In your background checks, watch my Gmail and Slack. Message me only when something needs me today. Draft replies for those and leave them as drafts. Never send, archive or delete without my approval.
```

**meeting-prep** (Watch)

```text
Before each external meeting, send me a call brief: who's coming, our recent emails and messages, open items, and what I want from the meeting. Put same-day briefs in my morning brief if that's simpler. Read only.
```

**follow-ups** (Draft)

```text
Track what I've promised people and what I'm waiting on, from email, Slack and meetings. In each morning brief, list anything stalled more than 3 days and draft a nudge. Don't send.
```

**weekly-review** (Watch)

```text
Every Friday at 4 pm, send me a weekly review: done, slipped, open follow-ups, unpaid invoices, next week's calendar, and 3 suggested priorities. Read only. If you can't run this at a set time, tell me.
```

**errands** (Ask first)

```text
When I ask for an errand or purchase, show me the plan and the cost first. Ask before every payment, booking or message.
```

If Duet says it can't run a job at a set time, set that job up as a scheduled task in [claude-diy](claude-diy.md) and note it in `JOBS.md`.

## 7. Test it

1. **You:** Send Duet:

    ```text
    Give me my morning brief now, as a test.
    ```

2. **Check it worked:**
    - It shows your real calendar, emails and Slack.
    - It used your brief (your priorities and people show up).
    - Nothing was sent. Check your email Sent folder.
    - Tomorrow, check the brief arrives at 7:30 on its own.
3. **Claude:** Mark `morning-brief` as tested in `.cos/setup.json`.

## 8. Limits and gotchas

- **US only, waitlist, invites in waves.** Not on Team or Enterprise yet.
- **Shares usage limits** with your regular Claude use. Background checks count.
- Checks every few hours. It may miss things between checks. Not for urgent alerts.
- No user-defined scheduler documented. Exact-time jobs may need claude-diy.
- No sub-agents.
- Personal errands (like tickets) are weaker than work tasks.
- Can't show you its browser yet. 1Password sign-in is "coming soon".
- "May misread a thread or misjudge urgency" (Anthropic). Keep sending and paying on Ask first.
- Limit reset end date reported as 30 November 2026 (**check before class**). Post-preview pricing not announced.

## 9. Sources

- [claude.com: Claude Duet product page](https://claude.com/product/claude-duet) (official)
- [claude.com: Claude Duet article](https://claude.com/resources/articles/claude-duet) (official)
- [CNBC, 21 Oct 2026](https://www.cnbc.com/2026/10/21/anthropic-preview-of-claude-duet-personal-ai-agent-take-on-muse-dots.html)
- [TechCrunch, 22 Oct 2026](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/)
- [Unite.AI: Duet preview for Pro and Max](https://www.unite.ai/anthropic-opens-claude-duet-research-preview-to-us-pro-and-max-users/)
- [Fortune, 23 Oct 2026](https://fortune.com/2026/10/23/anthropic-joins-meta-and-openais-personal-ai-assistant-race-with-duet/)
