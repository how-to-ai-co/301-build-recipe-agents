# Muse (Meta)

Agent id: `muse`. Facts from `research/agents-research.md`, checked 30 October 2026.

## 1. At a glance

| | |
| --- | --- |
| **Maker** | Meta. Launched 8 September 2026. Runs on Meta's Muse Spark models. |
| **Where it lives** | iPhone and Android apps, muse.ai on the web, WhatsApp. Mac app reported (date: **check before class**). Glasses "soon". |
| **Cost** (as of 30 October 2026) | Free tier. Power $20/month. Maximum $100/month. A card is needed to start, even on Free. There is a usage meter. |
| **Availability** | US, age 18+. Canada reported (**check before class**). |
| **Memory** | Learns from your chats. You can look at it, edit it, or ask it to forget. Full reset under Data controls. Deleting a message may not delete memories made from it. |
| **Scheduled / proactive** | Yes. One-time, recurring and location reminders. You see them in the **Upcoming** tab. It makes suggestions, but acts only when you tell it to. |
| **Email + calendar** | Yes, through email and calendar connectors. It also has its own agent email address. |
| **Connectors** | Built-in connectors (email, calendar, payments, health, smart home, dining, shopping, music, events), one at a time. Any public service if you give it your own credentials. Otherwise it uses websites in its own cloud computer's browser, which you can watch and take over. Buys things with Link by Stripe (a one-time virtual card). No MCP, Zapier or public API. |
| **Sub-agents** | No. |
| **Best for** | Personal life admin: errands, shopping, bookings, bills, family scheduling, reminders. |
| **Weak at** | Business work. No team features, no MCP. Trains on your chats unless you opt out. Not a good home for client data. |

## 2. Is it right for your chief of staff?

Muse is a strong **personal** assistant. It is good at the errands side of the job and easy to reach on WhatsApp.
It is a weak **work** assistant. Your chats are used to train Meta's models by default. Meta says a private version it can't view comes before the end of 2026, but it is not here yet.
In October, shared-chat links were found to be discoverable, and Meta paused sharing. Amazon blocks Muse from its shopping site.
Our advice: use Muse for personal errands. Keep client email and client files in a work agent (Claude Duet, dots, Grok Bot or claude-diy). Read [playbook/safety.md](../safety.md) first.

## 3. Before you start

- A phone (iPhone or Android), or a computer browser for muse.ai, or WhatsApp.
- A US phone number or email to sign in. You must be 18+.
- A payment card. Muse asks for one even on the free tier.
- Your `BRIEF.md` and `APPROVALS.md` in `~/Documents/chief-of-staff/`.
- No waitlist is reported. If you can't sign up (for example, outside the US), use [claude-diy](claude-diy.md) for now.

## 4. Set it up

**Who does what.** Claude (on your computer) can open muse.ai in a browser, prepare your brief and prompts, and copy them for you. **You** must sign in, enter your card, connect each account and approve permissions yourself. Claude never types passwords or card numbers.

1. **You:** Download Muse from the App Store or Google Play. Or go to muse.ai. Or message Muse on WhatsApp.
2. **You:** Sign in with your phone number or email.
3. **You:** Name it, pick an avatar and a tone. Take the guided tour.
4. **You, day one privacy:** Turn off model training. Your chats train Meta's models until you do. Look in Settings, near Data controls (exact location: **check before class**).
5. **You, day one privacy:** Don't share chat links. Sharing was found to be unsafe in October.
6. **You:** Connect **calendar first**, then **email**. Connect one service at a time. Pick **read-only** if Muse offers it. Muse has a permission checker ("Sentinel") that keeps reading and writing separate. Grant read now; add write later.
7. **You:** Leave purchases off for now. When you want errands later, add a Link card and set an approval for every purchase.
8. **Claude:** Make sure `JOBS.md` lists Muse as the agent for any job you give it.

## 5. Give it your brief

Muse has no document upload for instructions that we could confirm. It learns from chat and you can check its memory. So paste the brief into the chat and ask it to remember.

1. **Claude:** Open `BRIEF.md` and `APPROVALS.md`. Remove client names, client details and anything about money or health you don't want Meta to keep.
2. **Claude:** Copy the message below with both files pasted in.
3. **You:** Paste it into Muse (app, web or WhatsApp).
4. **You:** Open Muse's memory and check it saved the key points. Edit anything wrong.

```text
I want you to be my personal chief of staff. Below are two files: my brief (who I am, my priorities, people and rules) and my approvals (what you may do alone, what you must ask first, and what you must never do).

Please remember both. Follow the approvals exactly. The levels are:
- Watch: read and report only.
- Draft: prepare drafts and lists. Send nothing.
- Ask first: act only after I say yes to each action.
- Go: act alone within the stated limits.
Never, at any level: move money between accounts, trade, sign contracts, change passwords, delete email in bulk, or message a new contact without my approval.

When you've saved this, reply with a 5-line summary of what you remember, so I can check it.

--- BRIEF.md ---
[paste BRIEF.md here]

--- APPROVALS.md ---
[paste APPROVALS.md here]
```

## 6. Install the standing jobs

Muse uses **recurring reminders and scheduled tasks**. Each one shows in the **Upcoming** tab. Paste each prompt into Muse. Full job definitions live in `playbook/jobs/`.

| Job | Default level | Fit in Muse |
| --- | --- | --- |
| [`morning-brief`](../jobs/morning-brief.md) | Watch | Good, for personal calendar and email. |
| [`inbox-triage`](../jobs/inbox-triage.md) | Draft | Personal inbox only. Use a work agent for client mail. |
| [`meeting-prep`](../jobs/meeting-prep.md) | Watch | Fine inside the morning brief. |
| [`follow-ups`](../jobs/follow-ups.md) | Draft | Fine for personal promises. |
| [`weekly-review`](../jobs/weekly-review.md) | Watch | Fine as a weekly summary. |
| [`errands`](../jobs/errands.md) | Ask first | Muse's strongest job. |

**morning-brief** (Watch)

```text
Every weekday at 7:30 am my time, send me my day: today's calendar, emails that need me today, anything due in the next 3 days, and reminders. Read only. Don't reply to or change anything. Keep it under 15 lines.
```

**inbox-triage** (Draft)

```text
Every weekday at 9:00 am and 3:00 pm, check my personal email. Give me a short list: needs me today, can wait, ignore. For the top 3, write a draft reply I can copy. Do not send, delete or archive anything.
```

**meeting-prep** (Watch)

```text
In my morning brief, for each meeting with someone outside my family today, add 3 lines: who they are, what we last talked about, and what I should bring or decide. Read only.
```

**follow-ups** (Draft)

```text
Keep a list of things I promised people and things I'm waiting on. Each morning, with my brief, show anything overdue and draft a short nudge for each. Don't send the nudges.
```

**weekly-review** (Watch)

```text
Every Friday at 4:00 pm, send me a weekly review: what got done, what slipped, what's coming next week, and 3 suggested priorities. Read only.
```

**errands** (Ask first)

```text
When I ask you to do an errand (book, buy, cancel, reschedule), show me the plan, the cost and the website before you act. Wait for my "yes" on each step that spends money, sends a message or signs me up for anything.
```

If a job doesn't work in Muse (for example, your work email isn't connected), run it in [claude-diy](claude-diy.md) or your work agent instead, and note that in `JOBS.md`.

## 7. Test it

1. **You:** Paste this into Muse:

    ```text
    Run my morning brief now, as a test, using the rules I gave you.
    ```

2. **Check it worked:**
    - The brief shows today's real calendar events.
    - It lists real emails, not made-up ones.
    - Nothing was sent, replied to or changed. Check your email Sent folder.
    - The recurring job appears in the **Upcoming** tab with the right time and time zone.
3. **Claude:** Mark `morning-brief` as tested in `.cos/setup.json`.

## 8. Limits and gotchas

- **Training is on by default.** Opt out on day one. Opting out is not the same as the "can't view" private version Meta has promised.
- Deleting a message may not delete what Muse remembered from it. Check and edit memory directly.
- Amazon blocks Muse on its retail site (21 September).
- Shared-chat links were discoverable; Meta suspended sharing in October.
- Phone calls to businesses are reported, and some beta calls were done by human workers. Not confirmed as a feature (**check before class**).
- No MCP, Zapier or public API. You can't connect it to the Claude tools you built in 201.
- Card required even on Free. Watch the usage meter. Meta plans small transaction fees.
- Shop Pay and 1Password are "coming soon", not here yet.

## 9. Sources

- [muse.ai](https://muse.ai) (official)
- [Meta Help: reminders and scheduled tasks](https://www.meta.com/help/artificial-intelligence/1484325780075655/) (official)
- [TechCrunch, 8 Sep 2026](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/)
- [Wikipedia: Muse (AI agent)](https://en.wikipedia.org/wiki/Muse_(AI_agent))
- [CNBC, 8 Sep 2026: privacy and safety](https://www.cnbc.com/2026/09/08/meta-personal-ai-agents-public-reckoning-privacy-safety.html)
- [CNBC, 21 Sep 2026: downloads and Amazon](https://www.cnbc.com/2026/09/21/meta-muse-personal-ai-agent-downloads.html)
- [aiagentslibrary: Muse memory](https://www.aiagentslibrary.com/blog/meta-muse-memory/)
- [codersera: Muse guide](https://codersera.com/blog/meta-muse-ai-agent-app-guide-2026/)
- [MEXC blog: Muse overview](https://blog.mexc.com/technology/meta-muse-overview/)
