# 301 Build Recipe: Agents

Materials for the **AI 301 live workshop: compare the new personal AI agents and build your own chief of staff**. Students paste one recipe into Claude Code. Claude asks what they have, compares Muse, Instinct, Grok Bot, dots and Claude Duet for their situation, recommends one, writes their Chief of Staff brief and approval rules, sets the agent up safely, installs the standing jobs and tests them.

Handout and recipe: https://301-build-recipe-agents.vercel.app

Prerequisite: the AI 201 live workshop (Claude Code and connectors).

## What's here

- **`public/build-recipe.md`**: the prompt students paste into Claude Code. Keep `content/recipe.json` identical (`npm run sync`).
- **`AGENTS.md`** and **`CONVENTIONS.md`**: orientation for the agent that clones this repo, and the fixed names (approval levels, jobs, agents, the student's folder).
- **`research/agents-research.md`**: what each of the five agents is, what it can do, what it costs, how to set it up and its privacy record, with sources. Checked 30 October 2026.
- **`playbook/choose-your-agent.md`**: the decision guide.
- **`playbook/agents/`**: a setup guide per agent, plus `claude-diy.md` for students without any of the five.
- **`playbook/jobs/`**: six standing jobs (morning brief, inbox triage, meeting prep, follow-up tracker, weekly review, errands), each with an agent-neutral prompt and a sample output.
- **`playbook/safety.md`**: privacy settings, prompt injection, purchases, client data, and the end-of-class checklist.
- **`templates/`**: the Chief of Staff brief, approval rules, jobs list and team roster.
- **`app/`, `content/`**: the handout site. The comparison data is in `content/agents.ts`.

## Before class

Agent prices, access and features changed several times between August and October 2026. Re-check every item marked **(check before class)** and the prices in `content/agents.ts` the week of the class.

## Handout site

`npm ci`, then `npm run dev`. Validate with `npm run check` and `npm run build`. No accounts or keys are needed.
