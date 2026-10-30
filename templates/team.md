# Team

<!-- This is TEAM.md. Optional. Use it when you have more than one agent: specialist bots in Grok Bot,
     or a work agent plus a personal agent. It says who owns what, so nothing is done twice or dropped. -->

## The Chief of Staff rule

<!-- Give this rule to your main agent, word for word. -->

```text
You are my Chief of Staff agent. For every request and every standing job:
1. Check TEAM.md: does a specialist own this?
2. If yes, delegate it to that specialist first, with the context it needs.
3. If no specialist owns it, do it yourself.
4. Report back to me in one thread. I should never have to check each agent separately.
Every agent follows BRIEF.md and APPROVALS.md. No agent may raise its own level.
```

## Roster

<!-- One row per agent. "Owns" is the work only this agent does. Level comes from APPROVALS.md. -->

| Agent name | Platform | Owns | Level | Schedule |
| --- | --- | --- | --- | --- |
| [name] | [agent] | [jobs or areas] | [Watch / Draft / Ask first / Go] | [when it runs] |
<!-- e.g. | Chief of Staff | Grok Bot | Routing, morning brief, weekly review | Watch | Weekdays 7:30, Fri 16:00 | -->

## Example A: a Grok Bot team

<!-- Grok Bot lets you create several bots and a Chief of Staff bot that hands work to them.
     Put BRIEF.md in shared knowledge files so every bot sees it.
     Warning: all bots share one cloud computer, so logins and files are visible to every bot. Separate bots are not a security boundary. -->

| Agent name | Platform | Owns | Level | Schedule |
| --- | --- | --- | --- | --- |
| Chief of Staff | Grok Bot | Routing, `morning-brief`, `weekly-review`, `follow-ups` | Watch | Weekdays 7:30; Fri 16:00 |
| Inbox | Grok Bot | `inbox-triage` | Draft | Weekdays 9:00 and 15:00 |
| Research | Grok Bot | Vendor and product research, `meeting-prep` background | Watch | On request |
| Scheduling | Grok Bot | Calendar holds, `meeting-prep` | Draft | Morning brief + on request |
| Finance | Grok Bot | Unpaid invoices list, expense summary | Watch | Fridays, feeds the weekly review |

Start with the Chief of Staff plus one specialist. Add the next only after a good week.

## Example B: two agents (work + personal)

<!-- Many people use one agent for the business and another for home life. -->

| Agent name | Platform | Owns | Level | Schedule |
| --- | --- | --- | --- | --- |
| Work | Claude Duet, or Claude (do it yourself), or dots | `morning-brief`, `inbox-triage`, `meeting-prep`, `follow-ups`, `weekly-review` | Watch / Draft | Weekdays |
| Home | Muse or Instinct | `errands`, family calendar, personal reminders, bills | Ask first for errands | On request + reminders |

**What goes where:**
- **Client data stays in the work agent.** Client emails, files, addresses, invoices and contracts never go to the personal agent.
- Muse and Instinct use your chats for model training by default. Turn training off, and still keep client work out.
- The personal agent connects only to personal email and calendar, never the business inbox.
- If a job touches both (a client dinner booking), the work agent plans it and gives you the details; you ask the home agent to book it, without client files.
- Each agent reports in its own thread. The work agent's weekly review lists anything you handed to the home agent.
