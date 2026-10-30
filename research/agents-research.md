# AI 301 — Five Personal Agents: Research Notes

Researched 30 Oct 2026. Every fact has a source link. **[UNVERIFIED]** means only one secondary source or sources disagree. **[OFFICIAL]** means the maker's own page. Several official pages (openai.com, help.openai.com, x.ai/grok-bot, docs) returned 403/404 to the fetcher, so some "official" facts come from press quoting them. Re-check prices on the official pages the week of class: they changed several times in Aug–Oct 2026.

## Name check: what the instructor's five names are

| Instructor's name | Real product | Maker | Confidence |
|---|---|---|---|
| **Muse** | **Muse** (personal agent, muse.ai) | Meta | High |
| **Instinct** | **Instinct** (agent you text or call, instinct.com) | Spear Street Technology, Inc. (dba Instinct) | High |
| **Grok** | **Grok Bot** (persistent bots, x.ai/bot) | SpaceXAI (SpaceX division, formerly xAI) | High |
| **Dot** | **dots** in ChatGPT (chatgpt.com/dots), lowercase "dots" | OpenAI | High |
| **Duet** | **Claude Duet** (claude.com/product/claude-duet) | Anthropic | High |

Notes on alternatives:
- **Duet**: Claude Duet (21 Oct 2026) is clearly the one. It launched aimed at "professionals and small business owners", the 301 audience. Other "Duets": Google's Duet AI (Workspace, 2023, renamed Gemini in 2024, not relevant), and a small, separate "Duet" email/calendar assistant reviewed Aug 2026 with no public pricing ([agent-finder.co](https://agent-finder.co/reviews/duet)). Not a fit.
- **Muse**: Meta's **Muse** is the agent product (8 Sep 2026). **Muse Spark** is the Meta *model* (Apr 2026) that powers it, not the agent ([Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent))).
- **"Jev"** from the community notes is **not an agent**: it is a "decision model" from TypeSafe AI (15 Sep 2026) that developers put inside agents to make judgment calls (which tool, is this safe). Not for this class. **[UNVERIFIED, community sources only]** ([Towards AI](https://pub.towardsai.net/what-is-jev-how-jev-works-inside-an-ai-agent-c5a3b236f779), [luma](https://luma.com/jev-ai))
- TechCrunch lists the field as Muse, Dots, Hark, Instinct, Grok Bot and "Fo" ([TechCrunch](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/)). Hark and Fo not researched.

---

## Comparison table

| Agent | Where it lives | Memory | Proactive / scheduled | Email + calendar | Tools / connectors | Cost (Oct 2026) | Best for |
|---|---|---|---|---|---|---|---|
| **Muse** (Meta) | iOS, Android, Mac app, muse.ai web, WhatsApp; glasses "soon" | Yes, learns from chats; view/edit/forget; full reset | Yes: one-time, recurring and location reminders; proactive suggestions | Yes (email, calendar connectors); has its own agent email address (added 23 Sep) | Built-in connectors, your own API credentials, or browser on its cloud VM; can "build a tool"; Link by Stripe checkout | Free tier; Power $20/mo; Maximum $100/mo; card required | Personal life admin, errands, shopping, bookings |
| **Instinct** | iMessage, WhatsApp, phone calls; Mac app + web workspace for settings; group chats (iMessage, 27 Oct) | Context in one long thread; indexes connected accounts | Yes: texts or calls you first; "recurring loops" | Yes, Google Workspace (Gmail, Calendar, Drive, Docs, Sheets…) | Connected accounts + cloud computer that uses sites like a person; Link + Shop Pay; agent-to-agent with trusted contacts | Free in beta, invite-only; no published price | Texting-first errands and logistics, family/group coordination |
| **Grok Bot** (SpaceXAI) | Mac, Windows, Linux, iPhone/iPad, Android; X Chat; Slack (Team Bots); no browser version | Per-bot memory + shared team memory/knowledge files | Yes: Routines (schedule or event triggers, up to 50 per bot); proactive primary bot (2 Oct) | Inbox management is a showcase job; via plugins/computer use (no dedicated connector documented) | Plugin marketplace incl. MCP servers & skills (same as Cursor), Composio, computer use, teach-by-demo; **multiple bots + Chief of Staff bot** | From $30/mo (X Subscription "Premium"); $100 Super; $200 Ultra; older SuperGrok/Cursor routes still valid | Building a real team: one chief-of-staff bot directing specialist bots |
| **dots** (OpenAI) | ChatGPT desktop, web, mobile; Slack; Microsoft Teams; optional link to your own PC | Yes (learns preferences); individual memories reportedly not viewable/editable **[UNVERIFIED]** | Yes: reminders, recurring checks, background research (read-only), messages you with updates | Yes, can use your personal email (sends only if your rules allow); no own email address at launch | 4,000+ apps via ChatGPT plugins; own cloud computer + browser; saved passwords hidden from model | First dot included in ChatGPT Pro ($100/$200/$500 tiers) and Business Premium (~$100–125/seat); not Plus | Work agent for people already living in ChatGPT/Slack/Teams |
| **Claude Duet** (Anthropic) | iOS app, Android app, claude.ai web | Inherits your Claude memory, skills and connected apps | Yes: morning brief, checks every few hours, messages you when something needs you | Yes: Gmail, Google Calendar, Microsoft 365, Slack; schedules meetings, flags conflicts, call prep | 6,000+ connectors/plugins in Claude Marketplace (QuickBooks, Stripe, HubSpot, Notion…); own cloud VM + browser; Link & Shop Pay | Included in Pro/Max/Ultra during research preview (shares usage limits); US waitlist only | Small-business work: inbox, calendar, invoices, deliverables (docs/sheets/decks) |

---

## 1. Muse (Meta)

**What it is.** Meta's consumer personal agent for "long-running tasks", launched **8 Sep 2026**, US, age 18+. Runs on Meta's Muse Spark model family. Official site: https://muse.ai. ([TechCrunch](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/), [Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent)))

**Where it lives.** iOS and Android apps, muse.ai web, WhatsApp chat [OFFICIAL: muse.ai lists mobile, Mac and WhatsApp]. Mac app reported 17 Sep **[UNVERIFIED date]**; on 23 Sep Meta added macOS app control, a dedicated agent email address, glasses wake-word, a Realtime Avatar video model and a "Muse Charm" device. Canada reportedly added by 29 Sep **[UNVERIFIED]**. ([muse.ai](https://muse.ai), [Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent)), [codersera](https://codersera.com/blog/meta-muse-ai-agent-app-guide-2026/), [MEXC blog](https://blog.mexc.com/technology/meta-muse-overview/))

**Agent abilities.**
- Own persistent Linux cloud computer ("Muse Secure VM") with a browser you can watch and take over [OFFICIAL]. ([muse.ai](https://muse.ai))
- Memory: learns from conversations; you can inspect, edit, ask it to forget; full reset under Data controls. Deleting a message may not remove memories made from it. ([aiagentslibrary](https://www.aiagentslibrary.com/blog/meta-muse-memory/))
- Reminders & scheduled tasks: one-time, **recurring** (daily check-ins, weekly summaries), and location-based; view in the Upcoming tab [OFFICIAL help]. ([Meta Help](https://www.meta.com/help/artificial-intelligence/1484325780075655/))
- Proactive suggestions, but acts only under your direction [OFFICIAL]. ([muse.ai](https://muse.ai))
- Connects to email, calendar, payments, health, smart home, dining, shopping, music, events; connect each service one at a time; any public API with your own credentials; otherwise it uses the website in its browser; "if a tool doesn't exist, the agent can build it". ([TechCrunch](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/), [muse.ai](https://muse.ai))
- Does: send email, book travel, lower bills, fill forms, buy things (Link by Stripe one-time card; Shop Pay & 1Password "coming soon"). Commerce partners announced 23 Sep: Stripe, Shopify, Walmart, Best Buy and others.
- Phone calls to businesses: reported (404 Media said some beta calls were completed by human workers). **[UNVERIFIED as a user-facing feature]** ([Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent)))
- No MCP, Zapier or public API documented.

**Pricing / availability.** Free tier; **Power $20/mo**, **Maximum $100/mo**; card required to start; usage meter. No ads; Meta plans small transaction fees. US (Canada reported). ([TechCrunch](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/), [Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent)))

**Setup (beginner).** 1) Download Muse (or go to muse.ai, or message it on WhatsApp). 2) Sign in with phone number or email. 3) Name it, pick avatar and tone. 4) Take the guided tour. 5) Connect services one at a time (start with calendar + email, read-only where offered). 6) Add a card / Link for purchases and set approvals. 7) Ask for a recurring task: "Every weekday at 7am, send me my day." ([muse.ai](https://muse.ai), [TechCrunch](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/))

**Privacy & limits.**
- Conversations **used for model training by default**; you must opt out. Meta says a version it can't view arrives before end of 2026. ([Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent)), [CNBC](https://www.cnbc.com/2026/09/08/meta-personal-ai-agents-public-reckoning-privacy-safety.html))
- Says it can't see passwords/payment methods; "Sentinel" permission agent separates read vs write; not shared with ad systems [OFFICIAL]; audit trail.
- **Amazon blocked Muse** from its retail site (21 Sep). Shared-chat links were found to be discoverable; Meta suspended sharing (Oct). ([CNBC](https://www.cnbc.com/2026/09/21/meta-muse-personal-ai-agent-downloads.html), [Wikipedia](https://en.wikipedia.org/wiki/Muse_(AI_agent)))

**Chief-of-staff fit.** Strong for the *personal* side: errands, purchases, bills, family scheduling, reminders, via WhatsApp. Weak for business work: no team features, no MCP/API, Meta trust concerns, and training-on-by-default makes it a poor home for client data.

---

## 2. Instinct

**What it is.** An invite-only personal agent you **text or call**. Made by Spear Street Technology, Inc. (San Francisco), dba Instinct; founder/CEO Noah Shinn (Reflexion paper author, ex-Sierra). Launched Aug 2026. Site: https://instinct.com (app at app.instinct.com). Raised fast: $2.5B valuation (26 Aug), then a reported $1B Series C at $10B (28 Sep). ([instinct.com](https://instinct.com), [TechCrunch](https://techcrunch.com/2026/08/26/viral-ai-startup-instinct-has-raised-350-million-at-a-2-5-billion-valuation/), [Forbes](https://www.forbes.com/sites/iainmartin/2026/08/26/vcs-are-so-obsessed-with-this-ai-assistant-that-its-valuation-jumped-fivefold-in-weeks/), [Fortune](https://fortune.com/2026/09/30/noah-shinn-instinct-ai-assistant-meta-muse-alexandr-wang-tech-series-c-ai-agent-mark-zuckerberg/))

**Where it lives.** iMessage (primary), WhatsApp, phone calls; Mac app and web workspace for connections/settings. "No new interfaces to learn" [OFFICIAL]. Group-chat Instinct opened to **all iMessage users on 27 Oct 2026**; people in the chat don't need accounts. ([instinct.com](https://instinct.com), [eesel](https://www.eesel.ai/blog/instinct-ai-review), [RuntimeWire](https://runtimewire.com/article/instinct-group-ai-agent-imessage))

**Agent abilities.**
- Persistent cloud computer; uses "a phone and a computer the way a person does" [OFFICIAL]. ([instinct.com](https://instinct.com))
- Proactive: texts or **calls you first**. Founders describe "recurring loops" with a top-level agent dispatching work; users report monitoring tasks (e.g. watching for ticket cancellations) and homework reminders. No documented scheduler UI. ([usecarly](https://www.usecarly.com/blog/what-is-instinct-ai/))
- Email/calendar: Google Workspace (Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks). ([eesel](https://www.eesel.ai/blog/instinct-ai-review))
- Booking/buying: flights, groceries, restaurants, appointments; Stripe Link one-time cards (late Aug), Shopify/Shop Pay (28 Sep); bill negotiation and cancellations reported.
- Agent-to-agent (9 Sep): your Instinct can negotiate plans with a trusted contact's Instinct. ([eesel](https://www.eesel.ai/blog/instinct-ai-review))
- Memory: one continuous thread; indexes connected accounts. Heavy users say the single thread gets crowded.
- **Custom tools / API / webhooks: not documented publicly.** The instructor's repo `how-to-ai-co/instinct-companion` tells users to "configure an Instinct HTTP tool/forwarder" that POSTs to `/api/memory` with a Bearer key. I found **no public Instinct documentation of an HTTP tool feature** — verify inside the Instinct app before teaching it. **[UNVERIFIED]**

**Pricing / availability.** **Free during invite-only beta**; no published price. Founder reportedly wants to stay free and take a cut of purchases; a $200–500/mo tier rumor has no named source **[UNVERIFIED]**. Waitlist at app.instinct.com or invite from a member (invites reportedly resold on eBay). 18+. ([usecarly pricing](https://www.usecarly.com/blog/instinct-pricing/), [techpilot](https://techpilot.ai/tools/instinct-ai/))

**Setup (beginner).** 1) Get an invite (or join waitlist). 2) Text Instinct from iMessage. 3) Open the web workspace (app.instinct.com) and connect Google; store logins in its Vault. 4) Set a Link card for purchases with approved amounts. 5) Turn off model training in settings. 6) Add it to a family/team iMessage group if useful. ([eesel](https://www.eesel.ai/blog/instinct-ai-review))

**Privacy & limits.**
- **Training on by default** (opt-out; past training not undone; Google Workspace & Vault data excluded). Disconnecting an account **does not delete indexed data**; request deletion. Terms let it act and enter agreements as your agent; you are the buyer of record; binding arbitration. ([eesel](https://www.eesel.ai/blog/instinct-ai-review), [usecarly](https://www.usecarly.com/blog/what-is-instinct-ai/))
- Incidents: outage 21–22 Sep with no status page; a Resy account banned after the agent pinged it "hundreds of times every hour"; an unapproved email sent; followed instructions hidden in an email in one test; kept Gmail copies after disconnect. ([usecarly](https://www.usecarly.com/blog/what-is-instinct-ai/))

**Chief-of-staff fit.** The most "human assistant" feel: you text it like a person, it calls you. Good for logistics, errands, coordinating with others (groups, agent-to-agent). Weak: invite-only, no official integrations surface for builders, single thread, reliability and prompt-injection incidents, aggressive data terms. Keep it away from client inboxes.

---

## 3. Grok Bot (SpaceXAI, formerly xAI)

**What it is.** Persistent agents ("Bots") each with a name, role, memory, runtime and tools. Early beta launched **11 Aug 2026**; SpaceXAI also owns Cursor (joined SpaceX 14 Aug). Download: x.ai/bot. ([x.ai design post](https://x.ai/news/designing-grok-bot) [OFFICIAL], [VentureBeat](https://venturebeat.com/orchestration/spacexais-grok-bot-turns-agents-into-persistent-digital-coworkers-that-can-operate-your-apps-for-120-per-month))

**Where it lives.** Desktop apps (macOS, Windows, Linux), iPhone/iPad, Android (status conflicted; now listed by Lindy), X Chat on x.com/X app (rolling out), Slack for Team Bots (public beta 28 Sep). No browser version. ([Lindy, updated 30 Oct](https://www.lindy.ai/blog/grok-bot))

**Agent abilities.**
- **Multiple bots + Chief of Staff**: ~50 bots per account; group chats of 2–6 bots; bots hand work to each other; users create a "Chief of Staff Bot" that coordinates specialists [OFFICIAL]. ([x.ai](https://x.ai/news/designing-grok-bot))
- **Routines**: standing jobs on a schedule or event (e.g. Morning Briefing 8:00, Inbox Cleanup weekdays 18:00, Weekly Team Update; triggers on Slack/Teams messages, Git/PRs, incidents). Up to 50 per bot. Run in the cloud with your devices off [OFFICIAL]. Proactive primary bot added 2 Oct. ([x.ai](https://x.ai/news/designing-grok-bot), [Lindy](https://www.lindy.ai/blog/grok-bot))
- Memory: per-bot memory plus shared team knowledge files. ([MindStudio](https://www.mindstudio.ai/blog/grok-bot-tips-and-hacks))
- Own computer (browser, files, terminal); **teach-by-demo** (record yourself up to 10 min → reusable skill; desktop only); saved login profiles (Vault, 1Password); payments via saved card, Link, X Money.
- Connectors: plugin Marketplace incl. the **same MCP servers, plugins and skills Cursor supports**; Composio for others. No public API/webhooks into Grok Bot itself **[per one guide]**. ([Lindy](https://www.lindy.ai/blog/grok-bot), [continuumcode](https://continuumcode.ai/guides/grok-bot-pricing/))
- Voice: dictate, voice chat, bots send voice memos.
- Models: no model picker; routing may use non-Grok models (Musk named Claude Opus 5.5, 6 Oct). **[partly UNVERIFIED]**

**Pricing / availability.** Since **12 Oct 2026, "The X Subscription"**: Plus $8 (no Grok Bot), **Premium $30 (includes Grok Bot)**, Super $100, Ultra $200. Older routes (SuperGrok Plus/Heavy, Cursor Pro+/Ultra/Teams) still valid for existing subscribers. Usage is a weekly pool shared with Cursor and Grok; extra usage prepaid; no spend cap reported. Enterprise via waitlist. ([Engadget](https://www.engadget.com/2284943/x-subscription-bundles-premium-grok-cursor/), [x.ai announcement](https://x.ai/news/x-subscription), [The New Stack](https://thenewstack.io/x-subscription-cursor-pricing/))

**Setup (beginner).** 1) Subscribe to X Subscription Premium ($30). 2) Download Grok Bot from x.ai/bot (desktop recommended for teach-by-demo). 3) Create one primary bot; pin it as your Chief of Staff with the rule "check if a specialist owns this; delegate first; otherwise do it; report back in one thread". 4) Add 2–3 specialists with one-line job descriptions (Inbox, Research, Scheduling). 5) Put durable facts (role, business, tools) in shared knowledge files. 6) Install plugins (Gmail, Calendar, Slack) or link Composio. 7) Create routines (Morning Briefing 7:30 weekdays). 8) Set approval rules. ([MindStudio](https://www.mindstudio.ai/blog/grok-bot-tips-and-hacks))

**Privacy & limits.** Training follows **Cursor Privacy Mode** (on = no training); Legacy Privacy Mode blocks Grok Bot. All bots share one cloud computer, so logins/files are visible to every bot — "don't treat separate bots as a security boundary". SSO, passkeys, CAPTCHAs handed back to you. One computer-use task per bot at a time. On Cursor Teams it's on for all members with no off switch. ([Lindy](https://www.lindy.ai/blog/grok-bot))

**Chief-of-staff fit.** The best native match for the "chief of staff + specialist sub-bots" pattern the community member built. Strong routines, MCP plugins, Slack. Weak: dev-tool heritage (Cursor accounts, tokens), pricing churn, no model choice, shared computer = shared blast radius, beta reliability.

---

## 4. dots (OpenAI / ChatGPT)

**What it is.** Always-on personal agents inside ChatGPT, announced at **DevDay, 29 Sep 2026**, powered by GPT-6 Astra **[model name per secondary sources]**. Lowercase "dots"; each user gets **one primary dot** at launch; teams of dots and "specialist dots" (org-defined) later. Official: https://openai.com/index/introducing-dots/ (403 to fetcher), creation at chatgpt.com/dots. ([Engadget](https://www.engadget.com/2272230/dots-are-openais-new-personal-agents-and-soon-youll-be-able-to-control-several-of-them/), [Unite.AI](https://www.unite.ai/openai-rolls-out-dots-agents-powered-by-gpt-6-astra-in-chatgpt/))

**Where it lives.** ChatGPT desktop, web and mobile (message or voice/call it); **Slack** (DMs or channel mentions) and **Microsoft Teams**; optionally your own PC (one PC, must stay online with the desktop app open). ([Engadget](https://www.engadget.com/2272230/dots-are-openais-new-personal-agents-and-soon-youll-be-able-to-control-several-of-them/), [SmartScope](https://smartscope.blog/en/blog/openai-dots-user-guide-creation-steps-initial-setup-2026/))

**Agent abilities.**
- Own cloud computer + browser; you can open it and watch.
- 4,000+ apps via ChatGPT plugins (shared Plugins tab permissions).
- Proactive: messages you with progress, questions, decisions; "background research" uses **read-only** connections only.
- Reminders and recurring checks (include time zone); pause; **Reset** deletes conversations, memories and schedules.
- Email: can use your personal email; sends only per your Custom Rules, with auto-review of recipients/content; **no own email address** at launch. Calendar not specifically documented in sources found.
- Autonomy rules: act without asking / act if pre-approved / ask first / hand off to you. Password changes and fund transfers always handed to you.
- Voice instructions yes; **cannot place phone calls** at launch (sources conflict on calling in). ([dragapp](https://www.dragapp.com/blog/openai-dots/), [SmartScope](https://smartscope.blog/en/blog/openai-dots-user-guide-creation-steps-initial-setup-2026/))
- Memory: learns preferences; viewing/editing individual memories reportedly not possible **[UNVERIFIED]**.

**Pricing / availability.** First dot **included** in ChatGPT **Pro** (tiers reported at $100/$200/$500) and **Business Premium** (~$100/seat annual, $125 monthly); **not Plus**. Enterprise: admin-enabled beta, off by default. Pro excluded in EEA, UK, Switzerland; 18+; gradual rollout. Dot usage free of plan allowance for the first month; more dots/capacity to be sold later. ([SmartScope](https://smartscope.blog/en/blog/openai-dots-user-guide-creation-steps-initial-setup-2026/), [costbench](https://costbench.com/software/ai-chatbots/chatgpt/), [OpenAI Help: manage dots](https://help.openai.com/en/articles/20001554-manage-dots-in-chatgpt-workspaces))

**Setup (beginner).** 1) Be on Pro or Business Premium. 2) Go to chatgpt.com/dots (desktop browser or desktop app; mobile per some guides). 3) Rename it / pick a look. 4) Connect apps in the Plugins tab (email, calendar, drive, Slack). 5) Set Custom Rules (what it may do alone vs. ask). 6) Optionally connect your PC. 7) Add it to Slack/Teams. 8) Give a recurring job: "Every weekday 7am ET, brief me on…". ([SmartScope](https://smartscope.blog/en/blog/openai-dots-user-guide-creation-steps-initial-setup-2026/))

**Privacy & limits.** Uses saved passwords without exposing them to the model. **Disconnecting an app doesn't remove data the dot already gathered — Reset needed.** Pause doesn't stop already-delegated tasks. One dot only (for now). ([SmartScope](https://smartscope.blog/en/blog/openai-dots-user-guide-creation-steps-initial-setup-2026/), [NeuralTrust](https://neuraltrust.ai/blog/chatgpt-agent-security))

**Chief-of-staff fit.** Good if the business already runs on ChatGPT + Slack/Teams: one agent that follows you across surfaces. Weak: expensive entry (Pro/Business Premium only), one dot (no sub-agents yet), no outbound calls, no own email address, memory controls thin.

---

## 5. Claude Duet (Anthropic)

**What it is.** A standalone app "where Claude works as a proactive agent", **research preview opened 21 Oct 2026**, built on Claude Opus 5.5, explicitly "for professionals and small business owners". Official: https://claude.com/product/claude-duet and https://claude.com/resources/articles/claude-duet. ([claude.com article](https://claude.com/resources/articles/claude-duet) [OFFICIAL], [CNBC](https://www.cnbc.com/2026/10/21/anthropic-preview-of-claude-duet-personal-ai-agent-take-on-muse-dots.html), [TechCrunch](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/))

**Where it lives.** iOS app, Android app, claude.ai on the web. Separate from the main Claude app; one ongoing thread, text or voice. [OFFICIAL]

**Agent abilities.** [OFFICIAL unless noted]
- **Carries over your Claude memory, skills and connected apps** from the first message.
- **Morning brief** of what matters across connected apps; monitors and messages you only when needed; you choose what and how often. Background checks run **every few hours** (may miss things between checks).
- Gmail/Slack: finds missed messages, drafts replies. Calendar: schedules meetings, flags conflicts, preps call briefs.
- Big tasks: set up meetings, build dashboards, prepare decks/docs/sheets; finding unpaid invoices and drafting reminders, prepping payroll for review, getting contracts ready.
- **6,000+ connectors/plugins** in the Claude Marketplace: Gmail, Google Calendar, Drive, Slack, Microsoft 365, Notion, QuickBooks, Stripe, Gusto, Ramp, HubSpot, Docusign, Canva, Shopify, 1Password, LinkedIn.
- Own cloud VM + browser (your devices can be off); can't yet show you its browser.
- Purchases via Link (virtual card) and Shop Pay; 1Password sign-in "coming soon".
- **Approval before sending messages, paying, signing, or deleting.** Off-limits even with approval: trading securities, moving money between accounts.
- No phone calls documented. No general user-defined scheduler documented (brief + periodic checks + reports). No sub-agents.

**Pricing / availability.** Included in **Pro, Max and Ultra** during the preview, sharing your plan's usage limits (background checks count). **US only, waitlist, invites in waves.** Team and Enterprise not yet. New admits get one full limit reset (reportedly until 30 Nov 2026 **[UNVERIFIED end date]**). Post-preview pricing not announced. ([claude.com product](https://claude.com/product/claude-duet), [Unite.AI](https://www.unite.ai/anthropic-opens-claude-duet-research-preview-to-us-pro-and-max-users/), [Fortune](https://fortune.com/2026/10/23/anthropic-joins-meta-and-openais-personal-ai-assistant-race-with-duet/))

**Setup (beginner).** 1) Have a Claude Pro/Max/Ultra plan (US). 2) Join the waitlist at claude.com/product/claude-duet. 3) Wait for the "ready" email. 4) Before then: in the regular Claude app, connect Gmail, Calendar, Slack, Drive and write memory/skills — they carry over. 5) Install Duet on phone; tell it what to watch and how often. 6) Approve actions as they come. [OFFICIAL]

**Privacy & limits.** Credentials handled like Claude Managed Agents ("never directly sees your passwords or sign-in tokens"); classifier refuses to share card numbers/government ID; health & finance info shared only on explicit instruction; prompt-injection defenses; pen-tested; bug bounty. Anthropic: "may misread a thread or misjudge urgency"; personal errands (tickets) weaker than work tasks. [OFFICIAL]

**Chief-of-staff fit.** The closest off-the-shelf "chief of staff" for a small-business owner: inbox + calendar + finance tools + deliverables, approvals by default, reuses the Claude setup students built in 201. Weak: waitlist/US only, checks every few hours (not real-time), no sub-agents, errands weaker, no visible browser, usage limits shared with regular Claude.

---

## AI chief-of-staff patterns people use in 2026 (short)

Common building blocks across guides and the Grok/Duet launch material:
1. **Morning brief** (6–8am): calendar, top 5 emails needing action with drafted replies, deadlines in 72h, overnight Slack. Built into Duet; a Routine in Grok Bot; recurring task in Muse/dots. ([x.ai](https://x.ai/news/designing-grok-bot), [techysurgeon](https://techysurgeon.com/workflows/chief-of-staff-agent/), [claudeforoperators](https://www.claudeforoperators.com/workflows/inbox-triage/))
2. **Inbox triage**: label/sort, draft replies, never auto-send at first. ([claudeforoperators](https://www.claudeforoperators.com/workflows/inbox-triage/))
3. **Meeting prep**: brief on attendees and open threads before each call (Duet does this natively).
4. **Follow-up tracking**: list of promises/waiting-on, nudge when stalled (Grok Bot "nudges stalled handoffs").
5. **Delegation to sub-agents**: one chief-of-staff agent routes to specialists (inbox, research, expenses, content). Native only in Grok Bot today; dots promises teams later. ([VentureBeat](https://venturebeat.com/orchestration/spacexais-grok-bot-turns-agents-into-persistent-digital-coworkers-that-can-operate-your-apps-for-120-per-month), [MindStudio](https://www.mindstudio.ai/blog/grok-bot-tips-and-hacks))
6. **Weekly review**: Friday summary of wins, slipped items, next week's priorities (Grok "Weekly Team Update" routine).
7. **A shared "memory" file** of role, business, priorities, people, tools — both Grok (shared knowledge files) and Claude-based builds rely on this. ([mimurchison/claude-chief-of-staff](https://github.com/mimurchison/claude-chief-of-staff))

**How Claude fits.**
- **Claude Duet** = Anthropic's ready-made proactive chief of staff (above).
- **Connectors** (Settings → Connectors): Gmail, Google Calendar, Slack, Drive, etc.; MCP underneath; shared with Duet.
- **Scheduled tasks** in the Claude app/Cowork (`/schedule`; hourly/daily/weekly) and **Claude Code Routines** (cloud cron, API webhook or GitHub triggers) for DIY briefs that run with the laptop closed. Sources disagree on whether Cowork tasks now run in the cloud, and one claims Cowork was folded into regular Claude chat on 16 Sep 2026 **[UNVERIFIED — check support.claude.com]**. ([hatchworks](https://hatchworks.com/blog/claude/building-agents-with-claude/), [aiblewmymind](https://aiblewmymind.substack.com/p/claude-cowork-scheduled-tasks-6-ways))
- **Claude Code** for builders: chief-of-staff repos (memory files + skills + scheduled runs), and for wiring other agents to dashboards (like the instinct-companion app).

## Open questions to verify before class
- Does Instinct really offer a user-configurable **HTTP tool / forwarder**? (Assumed by the instinct-companion repo; no public docs found.)
- Grok Bot Android status and current X Subscription tiers (pages blocked to fetcher).
- dots: exact Pro tier prices, calendar support, memory viewing; official help pages returned 403.
- Muse: Mac app date, Canada, phone-call feature.
- Claude: current home of scheduled tasks (Cowork vs. chat) and whether they run in the cloud.
