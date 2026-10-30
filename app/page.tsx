import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import recipe from "@/content/recipe.json";
import { REPO, agents, jobs, levels, prompt, CHECKED } from "@/content/agents";
import { CopyPrompt } from "./copy-prompt";
import { Topbar } from "./topbar";

const lines = (recipe as string).trimEnd().split("\n").length;
const tone = (t: string) => ({ "--tone": `var(--t-${t})`, "--tint": `var(--t-${t}-tint)` }) as CSSProperties;
const lvlClass = (l: string) => `lvl ${l.split(" ")[0]}`;

export default function Page() {
  return <>
    <div className="wrap">
      <Topbar active="steps" />

      <header className="hero">
        <div className="course-tag"><span className="course-num">AI 301</span><span>Live course · Agents</span></div>
        <h1>Your chief of staff.</h1>
        <p className="lede">Five new AI agents want to run your day. See how Muse, Instinct, Grok Bot, dots and Claude Duet compare, then set up the one that fits you as a chief of staff that briefs you, triages your inbox and keeps your follow-ups moving.</p>
        <CopyPrompt text={recipe as string} lines={lines} />
        <a className="repo-link" href={REPO} target="_blank" rel="noreferrer"><img src="/logos/github.svg" alt="" width={16} height={16} /> github.com/how-to-ai-co/301-build-recipe-agents <ArrowUpRight size={14} aria-hidden="true" /></a>
      </header>

      <section className="section" aria-labelledby="five">
        <div className="section-head">
          <div><span className="eyebrow accent">The contenders</span><h2 id="five" className="sec-title" style={{ marginBottom: 0 }}>Five agents, one job</h2></div>
          <a className="step-link" href="compare">Compare them side by side <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="agent-strip">
          {agents.map(a => <a key={a.id} href={`compare#${a.id}`} className="agent-card" style={tone(a.tone)}>
            <span className="maker">{a.maker.split(" (")[0]}</span>
            <b>{a.name}</b>
            <span className="tag">{a.tagline}</span>
            <span className="cost-line">{a.cost}</span>
          </a>)}
        </div>
        <p className="note">As of {CHECKED}. Prices and access change often.</p>
      </section>

      <section className="section" aria-labelledby="jobs">
        <span className="eyebrow accent">What your chief of staff does</span>
        <h2 id="jobs" className="sec-title">Six standing jobs</h2>
        <div className="job-grid">
          {jobs.map(j => <div key={j.id} className="job">
            <div className="job-top"><b>{j.name}</b><span className={lvlClass(j.level)}>{j.level}</span></div>
            <span className="when">{j.when}</span>
            <p>{j.what}</p>
          </div>)}
        </div>
        <ul className="levels" aria-label="Approval levels">
          {levels.map(l => <li key={l.name}><span className={lvlClass(l.name)}>{l.name}</span><br />{l.what}</li>)}
        </ul>
        <p className="note">Everything starts at Watch or Draft. You raise a level after a week of good results, one job at a time.</p>
      </section>

      <section className="does" id="prompt">
        <span className="eyebrow accent">The prompt</span>
        <h2>What the prompt does</h2>
        <p className="lede">You paste it once. Claude works through eight steps, and only stops for your answers, taps on your phone, approvals and anything that costs money.</p>
        <ol className="does-list">
          {prompt.map((p, i) => <li key={p.t}><span className="n">{i + 1}</span><div><b>{p.t}</b><p>{p.d}</p></div></li>)}
        </ol>
        <details className="full">
          <summary>Read the full prompt</summary>
          <div className="md"><ReactMarkdown remarkPlugins={[remarkGfm]}>{recipe as string}</ReactMarkdown></div>
        </details>
      </section>
    </div>
    <footer className="foot">How to AI · AI 301</footer>
  </>;
}
