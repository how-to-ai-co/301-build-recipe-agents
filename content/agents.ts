// The five agents, from research/agents-research.md (checked 30 October 2026). Prices change often.
export const REPO = "https://github.com/how-to-ai-co/301-build-recipe-agents";
export const blob = (path: string) => `${REPO}/blob/main/${path}`;
export const tree = (path: string) => `${REPO}/tree/main/${path}`;
export const CHECKED = "30 October 2026";

export type Agent = {
  id: string; name: string; maker: string; tone: string; tagline: string;
  lives: string; memory: string; proactive: string; inbox: string; tools: string; team: string;
  cost: string; access: string; bestFor: string; watchOut: string; url: string;
};

export const agents: Agent[] = [
  {
    id: "claude-duet", name: "Claude Duet", maker: "Anthropic", tone: "orange",
    tagline: "The small-business chief of staff",
    lives: "iPhone, Android, claude.ai", memory: "Brings your Claude memory, skills and apps", proactive: "Morning brief; checks every few hours",
    inbox: "Gmail, Calendar, Microsoft 365, Slack", tools: "6,000+ connectors: QuickBooks, Stripe, HubSpot, Notion…", team: "One agent",
    cost: "Included in Claude Pro, Max, Ultra", access: "US waitlist (research preview)",
    bestFor: "Inbox, calendar, invoices and documents for a small business",
    watchOut: "Waitlist only; checks every few hours, not in real time", url: "https://claude.com/product/claude-duet",
  },
  {
    id: "grok-bot", name: "Grok Bot", maker: "SpaceXAI (formerly xAI)", tone: "violet",
    tagline: "A team of bots with a chief of staff",
    lives: "Desktop, iPhone, X Chat, Slack", memory: "Per-bot memory and shared team files", proactive: "Routines on a schedule or trigger, up to 50 per bot",
    inbox: "Through plugins and computer use", tools: "Plugin marketplace with MCP servers and skills", team: "Up to ~50 bots, built-in Chief of Staff bot",
    cost: "From $30/month (X Subscription Premium)", access: "Available",
    bestFor: "A chief of staff that hands work to specialist bots",
    watchOut: "Pricing keeps changing; all bots share one computer", url: "https://x.ai/bot",
  },
  {
    id: "dots", name: "dots", maker: "OpenAI (ChatGPT)", tone: "teal",
    tagline: "One always-on agent across ChatGPT and Slack",
    lives: "ChatGPT apps, Slack, Microsoft Teams", memory: "Learns preferences (thin controls)", proactive: "Reminders and recurring checks",
    inbox: "Your email, under your rules", tools: "4,000+ apps via ChatGPT plugins", team: "One dot for now; teams promised",
    cost: "ChatGPT Pro (from $100) or Business Premium", access: "Rolling out; not on Plus",
    bestFor: "People who already work in ChatGPT, Slack or Teams",
    watchOut: "Expensive entry; disconnecting an app doesn't delete its data", url: "https://chatgpt.com/dots",
  },
  {
    id: "muse", name: "Muse", maker: "Meta", tone: "blue",
    tagline: "Life admin in WhatsApp",
    lives: "iPhone, Android, Mac, web, WhatsApp", memory: "Learns; you can view, edit and forget", proactive: "One-time, recurring and location reminders",
    inbox: "Email and calendar connectors; its own email address", tools: "Built-in connectors, browser, Link by Stripe checkout", team: "One agent",
    cost: "Free; $20 or $100/month tiers", access: "US",
    bestFor: "Errands, bookings, bills and family logistics",
    watchOut: "Trains on your chats unless you opt out; keep client data out", url: "https://muse.ai",
  },
  {
    id: "instinct", name: "Instinct", maker: "Instinct (Spear Street Technology)", tone: "green",
    tagline: "An assistant you text like a person",
    lives: "iMessage, WhatsApp, phone calls", memory: "One long thread plus connected accounts", proactive: "Texts or calls you first",
    inbox: "Google Workspace", tools: "Connected accounts, a cloud computer, Link and Shop Pay", team: "Talks to your contacts' Instincts",
    cost: "Free in beta", access: "Invite only",
    bestFor: "Logistics and coordinating with other people by text",
    watchOut: "Data terms and past incidents; keep it out of client inboxes", url: "https://instinct.com",
  },
];

export const rows: { key: keyof Agent; label: string }[] = [
  { key: "lives", label: "Where it lives" },
  { key: "memory", label: "Memory" },
  { key: "proactive", label: "Works on its own" },
  { key: "inbox", label: "Email and calendar" },
  { key: "tools", label: "Connects to" },
  { key: "team", label: "Team of agents" },
  { key: "cost", label: "Cost" },
  { key: "access", label: "How to get it" },
  { key: "bestFor", label: "Best for" },
  { key: "watchOut", label: "Watch out for" },
];

export const jobs = [
  { id: "morning-brief", name: "Morning brief", when: "Weekdays 7:30", level: "Watch", what: "Your day, the emails that need you, deadlines, and what happened overnight." },
  { id: "inbox-triage", name: "Inbox triage", when: "9:00 and 15:00", level: "Draft", what: "Sorts the inbox and drafts replies in your voice. Sends nothing." },
  { id: "meeting-prep", name: "Meeting prep", when: "Before external meetings", level: "Watch", what: "Who you're meeting, your last thread with them, and what to ask." },
  { id: "follow-ups", name: "Follow-up tracker", when: "Daily", level: "Draft", what: "What you promised and what you're waiting on, with nudges drafted." },
  { id: "weekly-review", name: "Weekly review", when: "Fridays 16:00", level: "Watch", what: "Wins, what slipped, and next week's top three." },
  { id: "errands", name: "Errands and bookings", when: "On request", level: "Ask first", what: "Bookings and purchases, each one approved by you, with a spending cap." },
];

export const levels = [
  { name: "Watch", what: "Reads and reports." },
  { name: "Draft", what: "Prepares. Sends nothing." },
  { name: "Ask first", what: "Acts after your yes." },
  { name: "Go", what: "Acts alone, within limits." },
];

export const prompt = [
  { t: "Asks you everything up front", d: "Which agents you have, what you want off your plate, work or personal, where you want to talk to it, your tools, budget, and how careful to be with client data." },
  { t: "Compares the five for you", d: "A side-by-side for your situation, then one recommendation. Claude is the fallback if your pick is on a waitlist." },
  { t: "Writes your brief and rules", d: "One file about you and your business that any agent can read, and clear rules for what it may do alone." },
  { t: "Sets the agent up safely", d: "Privacy settings first, then only the connections your jobs need, read-only where possible." },
  { t: "Installs the standing jobs", d: "Morning brief, inbox triage, meeting prep, follow-ups and a weekly review, each with a schedule and a level." },
  { t: "Tests it with you", d: "Runs the morning brief and inbox triage once, shows you the results, and confirms nothing was sent." },
  { t: "Walks the safety check", d: "How to pause it, disconnect an account, and delete what it collected." },
  { t: "Hands off", d: "What runs when, what it costs, when to trust it with more, and a prompt to pick up where you left off." },
];
