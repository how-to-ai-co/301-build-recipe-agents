# AI 301 build recipe: Agents

Compare the new personal AI agents and build your own chief of staff.

Copy this whole recipe into Claude Code. Keep this page open while you work.

By the end you will have a chief of staff working for you in the agent that fits you best: one written brief about you and your business, clear rules for what it may do, and standing jobs that run on their own. Those jobs are a morning brief, inbox triage, meeting prep, a follow-up tracker and a weekly review. You will also know which of the five agents (Muse, Instinct, Grok Bot, dots, Claude Duet) is worth paying for, and which to skip.

## The job

Act as my chief-of-staff consultant. Ask me everything you need up front, help me pick the right agent for me, write my brief and my approval rules with me, set the agent up safely, install the standing jobs, test them, and hand off.

Use the playbooks and templates at https://github.com/how-to-ai-co/301-build-recipe-agents. Clone it into a scratch folder and read `AGENTS.md`, `CONVENTIONS.md` and `playbook/choose-your-agent.md` before you start. If the clone fails, stop and tell me. Never recreate the playbooks from memory. Agent facts are as of 30 October 2026 and change fast: anything marked "check before class" must be checked on the real screen or the maker's site, not assumed.

## Work with me

- Run commands, create files and check results yourself. Many agent screens are on my phone; when a step needs me to tap something, tell me exactly what to tap and wait.
- Give every URL as a clickable link, never inside code formatting, and open pages for me when I need to see them.
- Ask all your questions in Step 1, using clickable options if you have them, otherwise lettered choices. After that, only stop for things I must do on my phone, approvals, sign-ins, or anything that costs money.
- Never ask me to paste passwords, API keys or codes into chat.
- Every job starts at **Watch** (read only) or **Draft** (prepares, sends nothing). Never set anything to send, buy, or delete on its own today.
- Use plain language. Explain any technical word the first time it comes up.

## Step 1: ask me everything up front

Ask these together, in one or two screens. Skip any question my earlier answers make unnecessary.

1. **Which of these do you already have?** (choose any) Muse / Instinct (invite) / Grok Bot (X Subscription Premium or higher) / dots (ChatGPT Pro or Business Premium) / Claude Duet (off the waitlist) / Claude Pro, Max or Ultra / none of these yet.
2. **What do you want off your plate?** (choose any) Inbox / Calendar and meeting prep / Following up on things / A morning brief / A weekly review / Errands, bookings and purchases / Research / Running a small team of specialist agents.
3. **Mostly work, mostly personal, or both?**
4. **Where do you want to talk to it?** iMessage / WhatsApp / Slack or Teams / a phone app / my computer.
5. **Your tools:** Gmail or Outlook, Google or Outlook calendar, Slack or Teams, and any business tools (CRM, accounting, payments).
6. **Monthly budget for an agent:** $0 (use what I have) / up to $30 / up to $100 / more.
7. **How careful should it be with client data?** Very careful (client data stays in a work agent) / normal.

Save the answers (no secrets) to `~/Documents/chief-of-staff/.cos/setup.json`.

## Step 2: show me the five agents and recommend one

Read `research/agents-research.md` and `playbook/choose-your-agent.md`. Show me a short comparison table of the five agents for my situation: where each lives, memory, scheduled jobs, email and calendar, cost, and the main trust concern. Then recommend:

- **A primary agent** for my chief of staff, with one sentence on why.
- **Optionally a second agent** if I want work and personal kept apart (for example, a work agent plus Muse or Instinct for errands).
- If my pick is on a waitlist or costs money I have not agreed to, start with **Claude (do it yourself)** today, `playbook/agents/claude-diy.md`, which carries over to Claude Duet later.

Ask me one question: **Use this / Pick a different one.**

## Step 3: write my brief and my rules

Create `~/Documents/chief-of-staff/` and fill in, with me:

1. `BRIEF.md` from `templates/brief.md`: who I am, my business, this quarter's top three priorities, my VIP people, my tools, how I like things, my voice for drafts, and my never-list. Draft it from my answers and, if I allow it, from my website, LinkedIn, recent sent email and calendar (read only). Then show it to me and let me change anything.
2. `APPROVALS.md` from `templates/approvals.md`, with every job at its default level and any spending cap set to $0 unless I say otherwise.
3. `TEAM.md` from `templates/team.md`, only if I chose two agents or a team.

## Step 4: set up the agent safely

Follow `playbook/agents/<my agent>.md` step by step, and read `playbook/safety.md` first.

1. Change the privacy settings it lists on day one (for example, turning off training on my data).
2. Connect only what my jobs need, read-only first where the agent offers it.
3. Give the agent my brief and approval rules the way the playbook says.

Report what is connected, in one short list.

## Step 5: install the standing jobs

For each job I want, read `playbook/jobs/<job>.md` and install it with the prompt for my agent from `playbook/agents/<my agent>.md`. Use the default schedule and level unless I asked otherwise:

| Job | When | Level |
| --- | --- | --- |
| Morning brief | Weekdays 7:30 | Watch |
| Inbox triage | Weekdays 9:00 and 15:00 | Draft |
| Meeting prep | In the morning brief, or 30 minutes before external meetings | Watch |
| Follow-up tracker | Daily, with the morning brief | Draft |
| Weekly review | Fridays 16:00 | Watch |
| Errands and bookings | On request | Ask first |

If I chose a team in Grok Bot, set up the Chief of Staff bot and the specialists from `TEAM.md`, with the routing rule from `templates/team.md`.

Write `JOBS.md` from `templates/jobs.md` with what you installed.

## Step 6: test it with me

1. Run the morning brief once, right now, and show me the result.
2. Run inbox triage once. It drafts only. Show me two drafts and confirm nothing was sent.
3. Fix anything that is wrong in the brief or the jobs, then run it again.

## Step 7: the safety check

Go through the checklist at the end of `playbook/safety.md` with me, one line at a time. Then tell me how to pause the agent, how to disconnect an account, and how to delete what it already collected (disconnecting alone does not always delete it).

## Finish with a handoff

End with:

- Which agent is my chief of staff, what is connected, and where my files are (`~/Documents/chief-of-staff/`).
- The jobs, when each runs next, and its level.
- What it costs me each month, if anything.
- When to consider raising a level (after a week of good results, one job at a time).
- One thing to try tomorrow morning.

Update `.cos/setup.json` with what was built, then give me this resume prompt:

> Resume my AI 301 chief of staff from `~/Documents/chief-of-staff/.cos/setup.json`. Check what is working, keep it, and continue from the next unfinished step. Do not repeat the questions.
