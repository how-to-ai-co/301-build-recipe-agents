# Choose your agent

Facts from `research/agents-research.md`, checked 30 October 2026. Prices are as of 30 October 2026 and change often.

You don't need all five. Most people need one work agent, and maybe one personal agent. Everyone already has the fallback: [Claude (do it yourself)](agents/claude-diy.md).

## Answer six questions

1. **What do you want handed off?**
   Work (inbox, calendar, meetings, invoices, documents) → Claude Duet, dots, Grok Bot or claude-diy.
   Personal errands (bookings, shopping, bills, family plans) → Muse or Instinct.
2. **Work, personal, or both?**
   Both → pick one for each (see "Recommended combos").
3. **Where do you want to talk to it?**
   iMessage → Instinct. WhatsApp → Muse or Instinct. Slack → dots, Grok Bot (Team Bots), or Claude Duet/claude-diy through the Slack connector. Microsoft Teams → dots. A phone app → any of them. A browser → all except Grok Bot (no browser version).
4. **Which plan do you already pay for?**
   Claude Pro, Max or Ultra (US) → Claude Duet (waitlist) and claude-diy now.
   ChatGPT Pro or Business Premium → dots. (ChatGPT Plus doesn't include dots.)
   X Subscription Premium or higher, or an older SuperGrok/Cursor plan → Grok Bot.
   None → Muse has a free tier (card required). Instinct is free but invite-only. Or claude-diy on whatever Claude plan you have.
5. **Do you want a team of specialists?**
   Yes → Grok Bot. It's the only one with a Chief of Staff bot directing specialist bots today. dots promises teams later.
6. **How much do you trust it with client data?**
   Muse and Instinct train on your chats by default (you can opt out), and Instinct keeps indexed data after you disconnect. Keep client data out of both.
   For client work, use Claude Duet, claude-diy, dots (prefer a Business Premium work account) or Grok Bot with Cursor Privacy Mode on. Read [safety.md](safety.md) either way.

## Pick this if

| Agent | Pick this if… | Skip it if… | Cost (as of 30 Oct 2026) |
| --- | --- | --- | --- |
| [Claude Duet](agents/claude-duet.md) | You run a small business, already use Claude, and want inbox, calendar, meeting prep and invoices handled with approvals. | You're outside the US, need real-time alerts, or want a team of agents. | Included in Claude Pro/Max/Ultra during preview. Waitlist. |
| [claude-diy](agents/claude-diy.md) | You want to start today, control every step, or you're waiting for Duet. | You want something that watches all day on its own. | Your Claude plan (which plans include scheduling: **check before class**). |
| [dots](agents/dots.md) | Your business lives in ChatGPT, Slack or Teams, and you have Pro or Business Premium. | You're on ChatGPT Plus, or in the EEA, UK or Switzerland (Pro). | Pro (tiers reported $100/$200/$500; **check before class**) or Business Premium (~$100–125/seat). |
| [Grok Bot](agents/grok-bot.md) | You want a chief of staff plus specialist bots, with strong routines that run with your laptop off. | You want the simplest setup, or need bots kept apart for security (they share one computer). | X Subscription Premium $30/month and up. |
| [Muse](agents/muse.md) | You want help with personal errands, shopping, bills and family scheduling, often over WhatsApp. | You want it near client data. | Free tier; Power $20; Maximum $100/month. Card required. |
| [Instinct](agents/instinct.md) | You want to text an assistant like a person, and coordinate plans with family or groups in iMessage. | You need reliability or privacy for work. | Free in invite-only beta. |

## Recommended combos

- **Most students: Claude Duet (or claude-diy while you wait) for work + Muse or Instinct for personal errands.** Keep work email in the work agent. Give the personal agent only a personal Google account. Write who owns what in `TEAM.md` ([templates/team.md](../templates/team.md)).
- **You want a team: Grok Bot.** One Chief of Staff bot plus 2–4 specialists (Inbox, Research, Scheduling, Finance). See [Grok Bot: Build a team](agents/grok-bot.md#6-build-a-team).
- **You live in ChatGPT and Slack/Teams: dots for work.** Add claude-diy for any job dots can't do (for example, if calendar access doesn't work).
- **Any agent + claude-diy as backup.** If a job doesn't work in your agent, run it as a claude-diy scheduled task.

Whatever you pick, every job starts at **Watch** or **Draft**. Raise a level only after a week of good results. See [templates/approvals.md](../templates/approvals.md).

## If you have none of them

Use [claude-diy](agents/claude-diy.md). You already have Claude. Connect Gmail, Calendar, Slack and Drive, save your brief, and schedule the morning brief. When a Claude Duet invite arrives, your memory, skills and connectors carry over.
