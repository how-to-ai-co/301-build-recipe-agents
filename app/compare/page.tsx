import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { agents, rows, CHECKED, blob } from "@/content/agents";
import { Topbar } from "../topbar";

export const metadata: Metadata = { title: "Compare the five | 301 Build Recipe: Agents | How to AI" };

const tone = (t: string) => ({ "--tone": `var(--t-${t})`, "--tint": `var(--t-${t}-tint)` }) as CSSProperties;

const picks = [
  { if: "You run a small business on Google or Microsoft", pick: "Claude Duet", tone: "orange", why: "Inbox, calendar, invoices and docs, with approvals by default. Use Claude with connectors while you wait." },
  { if: "You want a team, not one assistant", pick: "Grok Bot", tone: "violet", why: "A Chief of Staff bot that hands work to Inbox, Research and Scheduling bots." },
  { if: "You already live in ChatGPT, Slack or Teams", pick: "dots", tone: "teal", why: "One agent that follows you across all three, if Pro is worth it to you." },
  { if: "You want life admin handled in WhatsApp", pick: "Muse", tone: "blue", why: "Errands, bills and bookings. Opt out of training and keep work out of it." },
  { if: "You'd rather just text someone", pick: "Instinct", tone: "green", why: "Feels like texting a person, and it calls you. Invite only, so treat it as a bonus." },
  { if: "You have none of these yet", pick: "Claude (do it yourself)", tone: "orange", why: "Connectors and scheduled tasks in the Claude plan you already have. It carries over to Duet." },
];

export default function Compare() {
  return <>
    <div className="wrap">
      <Topbar active="compare" />
      <header className="hero inside-hero">
        <div className="course-tag"><span className="course-num">AI 301</span><span>Compare the five</span></div>
        <h1>Which agent?</h1>
        <p className="lede">The same job, five very different products. Here&apos;s how they line up for a chief of staff, as of {CHECKED}.</p>
      </header>

      <div className="cmp-wrap">
        <table className="cmp">
          <thead><tr><th scope="col"><span className="sr-only">Feature</span></th>
            {agents.map(a => <th key={a.id} id={a.id} scope="col" style={tone(a.tone)}><span>{a.maker.split(" (")[0]}</span><b>{a.name}</b></th>)}
          </tr></thead>
          <tbody>
            {rows.map(r => <tr key={r.key} className={r.key === "bestFor" ? "hl" : ""}><th scope="row">{r.label}</th>
              {agents.map(a => <td key={a.id}>{a[r.key]}</td>)}
            </tr>)}
            <tr><th scope="row">Setup guide</th>
              {agents.map(a => <td key={a.id}><a className="step-link" style={{ marginTop: 0 }} href={blob(`playbook/agents/${a.id}.md`)} target="_blank" rel="noreferrer">Open <ArrowUpRight size={13} aria-hidden="true" /></a></td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="note">Scroll sideways on a phone. Sources for every line are in <a className="step-link" style={{ marginTop: 0 }} href={blob("research/agents-research.md")} target="_blank" rel="noreferrer">the research notes</a>.</p>

      <section className="section" aria-labelledby="picks">
        <span className="eyebrow accent">Quick picks</span>
        <h2 id="picks" className="sec-title">Pick this if…</h2>
        <div className="picks">
          {picks.map(p => <div key={p.if} className="pick" style={tone(p.tone)}><span>{p.if}</span><b>{p.pick}</b><p>{p.why}</p></div>)}
        </div>
      </section>

      <section className="closer">
        <h2>Set yours up</h2>
        <p>Copy the prompt into Claude Code. It asks what you have, recommends one, and builds your chief of staff in it.</p>
        <a className="btn" href="./">Get the prompt</a>
      </section>
    </div>
    <footer className="foot">How to AI · AI 301</footer>
  </>;
}
