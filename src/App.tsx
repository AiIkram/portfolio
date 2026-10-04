import { useEffect, useState } from "react";
import Ambient from "./components/Ambient";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Diamond from "./components/Diamond";
import People from "./components/People";
import Blog from "./components/Blog";
import {
  ABOUT_ME,
  CERTS,
  COLLABORATION_NOTE,
  EDUCATION,
  EXPERIENCE,
  FOCUS_AREAS,
  HIGHLIGHTS,
  LANGUAGES,
  NAV,
  NEWS,
  PAPERS,
  PROFILE,
  PUB_GROUPS,
  RESEARCH_STATEMENT,
  SCHOOLS,
  SKILLS,
  STATS,
  UNDER_REVIEW,
  type Paper,
} from "./data";
import { useActiveSection, useCountUp, useRevealObserver } from "./lib/hooks";

/* ── accents ─────────────────────────────────────────────────────────── */
const ACCENT: Record<
  string,
  { text: string; border: string; bg: string; dot: string }
> = {
  gold: { text: "text-gold", border: "border-gold/45", bg: "bg-gold/10", dot: "bg-gold" },
  teal: { text: "text-teal", border: "border-teal/45", bg: "bg-teal/10", dot: "bg-teal" },
  coral: { text: "text-coral", border: "border-coral/45", bg: "bg-coral/10", dot: "bg-coral" },
  ice: { text: "text-ice", border: "border-ice/45", bg: "bg-ice/10", dot: "bg-ice" },
};

/* ── shells ──────────────────────────────────────────────────────────── */
function Section({
  id,
  index,
  title,
  lede,
  children,
  className = "",
}: {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <header className="reveal mb-10 sm:mb-14">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.3em] text-gold/70">{index}</span>
            <span className="h-px w-6 bg-gold/40" />
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <h2 className="font-display text-[clamp(2rem,5.4vw,3.4rem)] font-bold leading-[0.95] tracking-[-0.035em] text-chalk">
              {title}
            </h2>
            {lede && <p className="max-w-md text-[13.5px] leading-relaxed text-mute">{lede}</p>}
          </div>
          <div className="mt-6 h-px w-full hairline" />
        </header>
        {children}
      </div>
    </section>
  );
}

function Reveal({
  d = 0,
  className = "",
  children,
}: {
  d?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`reveal ${className}`} style={{ ["--rd" as string]: `${d}ms` }}>
      {children}
    </div>
  );
}

/* ── stats ───────────────────────────────────────────────────────────── */
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, val } = useCountUp(value);
  return (
    <div className="group flex-1 px-5 py-7 sm:px-8 sm:py-9">
      <span
        ref={ref}
        className="block font-display text-[clamp(2.4rem,6vw,3.9rem)] font-bold leading-none tracking-[-0.04em] text-chalk transition-colors duration-500 group-hover:text-gold"
      >
        {val}
        <span className="text-gold">{suffix}</span>
      </span>
      <span className="mt-3 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.24em] text-mute">
        {label}
      </span>
    </div>
  );
}

function StatsStrip() {
  return (
    <div className="relative border-y border-line/80 bg-ink-2/40">
      <div className="mx-auto flex max-w-[1240px] flex-col divide-y divide-line/70 sm:flex-row sm:divide-x sm:divide-y-0">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

/* ── 01 · about ──────────────────────────────────────────────────────── */
function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      lede="Independent researcher in medical image analysis and computational neuroscience."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-5">
            {ABOUT_ME.map((p, i) => (
              <Reveal key={i} d={i * 70}>
                <p
                  className={`leading-[1.85] text-chalk/75 ${
                    i === 0 ? "text-[16.5px] sm:text-[18px]" : "text-[14.5px]"
                  }`}
                >
                  {i === 0 ? (
                    <>
                      <span className="float-left mr-3 mt-1 font-display text-[3.6rem] font-bold leading-[0.72] text-gold">
                        {p.charAt(0)}
                      </span>
                      {p.slice(1)}
                    </>
                  ) : (
                    p
                  )}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* selected highlights */}
        <div className="lg:col-span-5">
          <Reveal d={140}>
            <div className="rounded-lg border border-line bg-ink-2/55 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold">
                Selected highlights
              </p>
              <p className="mt-2 font-mono text-[9.5px] tracking-[0.14em] text-mute/70">
                first (*) author unless noted
              </p>
              <ul className="mt-5 space-y-4">
                {HIGHLIGHTS.map((h) => {
                  const a = ACCENT[h.tone] ?? ACCENT.gold;
                  return (
                    <li
                      key={h.short}
                      className="group border-b border-line/60 pb-3.5 last:border-0 last:pb-0"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span
                          className={`font-display text-[14.5px] font-bold tracking-[-0.02em] ${a.text}`}
                        >
                          {h.short}
                        </span>
                        <span className="font-mono text-[9.5px] italic text-mute">{h.cite}</span>
                      </div>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-mute transition-colors duration-500 group-hover:text-chalk/75">
                        {h.desc}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ── 02 · research ───────────────────────────────────────────────────── */
function Research() {
  const layout = [
    "md:col-span-6 md:col-start-1",
    "md:col-span-6 md:col-start-7 md:mt-14",
    "md:col-span-8 md:col-start-3 md:mt-6",
  ];
  return (
    <Section
      id="research"
      index="02"
      title="Research"
      lede="Three lines of enquiry defining my doctoral research programme."
    >
      {/* statement */}
      <div className="mb-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {RESEARCH_STATEMENT.map((p, i) => (
            <Reveal key={i} d={i * 90}>
              <p
                className={`leading-[1.85] text-chalk/78 ${
                  i === 0 ? "text-[17px] sm:text-[19px]" : "mt-4 text-[15px] text-mute"
                }`}
              >
                {i === 0 ? (
                  <>
                    <span className="float-left mr-3 mt-1 font-display text-[3.6rem] font-bold leading-[0.72] text-gold">
                      {p.charAt(0)}
                    </span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="lg:col-span-4">
          <Reveal d={150}>
            <div className="rounded-lg border border-line bg-ink-2/60 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                At a glance
              </p>
              <dl className="mt-5 space-y-3.5 text-[13px]">
                {[
                  ["Research", "Independent researcher"],
                  ["Appointment", "Head of Risk Mgmt., CCR Algeria"],
                  ["Seeking", "PhD & collaborations"],
                  ["Fields", "Medical imaging · Comp. neuroscience"],
                  ["Venues", "MICCAI · EMNLP · MICAD"],
                  ["Based in", PROFILE.location],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-line/60 pb-2.5 last:border-0 last:pb-0">
                    <dt className="w-20 flex-shrink-0 font-mono text-[9.5px] uppercase tracking-[0.16em] text-mute">
                      {k}
                    </dt>
                    <dd className="flex-1 text-chalk/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* collaboration invitation */}
          <Reveal d={220}>
            <div className="group relative mt-4 overflow-hidden rounded-lg border border-coral/35 bg-coral/[0.06] p-6">
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-coral/15 blur-3xl"
                style={{ animation: "float-y 9s ease-in-out infinite" }}
              />
              <p className="relative font-mono text-[10px] uppercase tracking-[0.28em] text-coral">
                {COLLABORATION_NOTE.heading}
              </p>
              <p className="relative mt-4 text-[13.5px] leading-relaxed text-chalk/75">
                {COLLABORATION_NOTE.body}
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="relative mt-5 inline-flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] uppercase tracking-[0.16em] text-coral no-underline transition-colors duration-400 hover:text-gold"
              >
                <span className="link-underline">{COLLABORATION_NOTE.cta}</span>
                <span className="normal-case tracking-normal text-chalk/80">
                  {PROFILE.email}
                </span>
                <span className="text-[9px]">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* pillars */}
      <div className="grid gap-5 md:grid-cols-12">
        {FOCUS_AREAS.map((f, i) => {
          const a = ACCENT[f.accent] ?? ACCENT.gold;
          return (
            <Reveal key={f.n} d={i * 110} className={layout[i]}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-line bg-ink-2/45 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-ink-3/70 sm:p-8">
                <span
                  className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100 ${a.dot}`}
                />
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                  style={{
                    backgroundColor:
                      f.accent === "gold" ? "#f2c14e" : f.accent === "teal" ? "#4fd1b5" : "#ff7e6b",
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`font-display text-[3.2rem] font-bold leading-none tracking-[-0.05em] ${a.text} opacity-25 transition-opacity duration-500 group-hover:opacity-70`}
                  >
                    {f.n}
                  </span>
                  <span
                    className={`mt-2 h-2 w-2 rounded-full ${a.dot} transition-transform duration-500 group-hover:scale-150`}
                  />
                </div>
                <h3 className="mt-4 font-display text-[20px] font-semibold leading-tight tracking-[-0.025em] text-chalk sm:text-[23px]">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mute">{f.body}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-ink/60 px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-mute transition-colors duration-300 group-hover:text-chalk/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ── 02 · publications ───────────────────────────────────────────────── */
function PaperRow({ p, i }: { p: Paper; i: number }) {
  const a = ACCENT[p.tone] ?? ACCENT.gold;
  return (
    <Reveal d={i * 70}>
      <article className="group relative overflow-hidden rounded-lg border border-line bg-ink-2/45 transition-all duration-500 hover:bg-ink-3/70">
        <span
          className={`absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-600 group-hover:scale-y-100 ${a.dot}`}
        />
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: "radial-gradient(70% 120% at 0% 50%, rgba(242,193,78,0.07), transparent 60%)",
          }}
        />
        <div className="relative grid gap-5 p-5 sm:p-7 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="font-display text-[2rem] font-bold leading-none tracking-[-0.04em] text-mute/45 transition-colors duration-500 group-hover:text-chalk/70">
              {p.year}
            </p>
            <span
              className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${a.text} ${a.border} ${a.bg}`}
            >
              <span className={`h-1 w-1 rounded-full ${a.dot}`} />
              {p.status}
            </span>
            {p.role && (
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-mute">
                {p.role}
              </p>
            )}
          </div>

          <div className="md:col-span-10">
            <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.02em] text-chalk transition-colors duration-500 group-hover:text-gold sm:text-[19.5px]">
              {p.title}
            </h3>

            {p.authors && (
              <p className="mt-2.5 text-[13px] leading-relaxed text-mute">
                {p.authors.map((au, j) => (
                  <span key={j}>
                    {j > 0 && <span className="text-line"> · </span>}
                    {au.self ? (
                      <strong className="font-semibold text-chalk underline decoration-gold decoration-2 underline-offset-4">
                        {au.name}
                      </strong>
                    ) : au.link ? (
                      <a
                        href={au.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-mute no-underline hover:text-chalk"
                      >
                        {au.name}
                      </a>
                    ) : (
                      au.name
                    )}
                  </span>
                ))}
              </p>
            )}

            <p className="mt-2 text-[13px] italic text-chalk/60">
              {p.venue}
              {p.location && <span className="not-italic text-mute"> — {p.location}</span>}
            </p>

            {p.note && (
              <p className="mt-3 max-w-3xl border-l border-line pl-4 text-[12.5px] leading-relaxed text-mute/85">
                {p.note}
              </p>
            )}

            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mute no-underline transition-all duration-300 hover:border-teal/60 hover:text-teal"
                  >
                    {l.label}
                    <span className="text-[9px]">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Publications() {
  return (
    <Section
      id="publications"
      index="03"
      title="Publications"
      lede="Peer-reviewed contributions to MICCAI Society venues, MICAD and EMNLP, grouped by research theme."
    >
      {/* thematic groups */}
      <div className="space-y-14">
        {PUB_GROUPS.map((g) => {
          const items = PAPERS.filter((p) => p.group === g.key);
          if (!items.length) return null;
          const a = ACCENT[g.accent] ?? ACCENT.gold;
          return (
            <div key={g.key}>
              <Reveal>
                <div className="mb-5">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3
                      className={`font-display text-[19px] font-bold tracking-[-0.025em] sm:text-[22px] ${a.text}`}
                    >
                      {g.title}
                    </h3>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-mute">
                      {String(items.length).padStart(2, "0")} papers
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] italic text-mute">{g.sub}</p>
                  <div className={`mt-3 h-px w-full origin-left ${a.dot} opacity-30`} />
                </div>
              </Reveal>
              <div className="space-y-3">
                {items.map((p, i) => (
                  <PaperRow key={p.title} p={p} i={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* under review */}
      <Reveal d={80}>
        <div className="mt-12 flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-coral">
            Under review
          </span>
          <span className="h-px flex-1 bg-line/70" />
        </div>
      </Reveal>

      <div className="mt-5 space-y-2">
        {UNDER_REVIEW.map((p, i) => {
          const a = ACCENT[p.tone] ?? ACCENT.teal;
          return (
            <Reveal key={p.title} d={i * 60}>
              <div className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 rounded-lg border border-dashed border-line bg-ink-2/30 px-5 py-4 transition-all duration-500 hover:border-line hover:bg-ink-2/60">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[15.5px] font-semibold leading-snug tracking-[-0.02em] text-chalk/85 transition-colors duration-500 group-hover:text-chalk">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] italic text-mute">{p.venue}</p>
                </div>
                <span
                  className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${a.text} ${a.border} ${a.bg}`}
                >
                  <span className={`h-1 w-1 rounded-full ${a.dot}`} style={{ animation: "twinkle 2.4s infinite" }} />
                  in review
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ── 03 · news ───────────────────────────────────────────────────────── */
function News() {
  return (
    <Section
      id="news"
      index="04"
      title="News"
      lede="Recent acceptances, appointments and research training."
    >
      <ol className="relative ml-2 border-l border-line pl-6 sm:pl-10">
        {NEWS.map((n, i) => {
          const a = ACCENT[n.tone] ?? ACCENT.gold;
          return (
            <Reveal key={i} d={i * 55}>
              <li className="group relative pb-9 last:pb-0">
                <span
                  className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-ink transition-transform duration-500 group-hover:scale-125 sm:-left-[47px] ${a.dot}`}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                    {n.date}
                  </span>
                  <span className={`font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${a.text}`}>
                    [{n.kind}]
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] ${a.text} ${a.border} ${a.bg}`}
                  >
                    {n.badge}
                  </span>
                </div>
                <p className="mt-2.5 max-w-3xl text-[14.5px] leading-relaxed text-chalk/70 transition-colors duration-500 group-hover:text-chalk/90">
                  {n.text}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

/* ── 04 · the diamond ────────────────────────────────────────────────── */
function DiamondSection() {
  return (
    <Section
      id="diamond"
      index="06"
      title="A person is like a diamond"
      lede="A single stone with many facets — the scholarly work beyond the publication list."
    >
      <Diamond />
    </Section>
  );
}

/* ── 05 · gallery ────────────────────────────────────────────────────── */
function GallerySection() {
  return (
    <Section
      id="gallery"
      index="07"
      title="Gallery"
      lede="Conference presentations, imaging work and research practice."
    >
      <Gallery />
    </Section>
  );
}

/* ── 06 · experience ─────────────────────────────────────────────────── */
function Experience() {
  return (
    <Section
      id="experience"
      index="09"
      title="Experience"
      lede="Appointments across research, industry and university teaching."
    >
      <div className="divide-y divide-line/70 border-y border-line/70">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={i} d={i * 50}>
            <div className="group relative grid gap-3 py-7 transition-colors duration-500 hover:bg-ink-2/50 md:grid-cols-12 md:gap-6 md:px-4">
              <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-gold transition-transform duration-600 group-hover:scale-y-100" />
              <div className="md:col-span-4">
                <div className="flex flex-wrap items-center gap-2">
                  {e.hot && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/45 bg-gold/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">
                      <span
                        className="h-1 w-1 rounded-full bg-gold"
                        style={{ animation: "twinkle 2s infinite" }}
                      />
                      current
                    </span>
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                    {e.period}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-chalk transition-colors duration-500 group-hover:text-gold">
                  {e.title}
                </h3>
                <p className="mt-1 text-[13px] text-teal/85">{e.place}</p>
                {e.where && (
                  <p className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-mute/70">
                    {e.where}
                  </p>
                )}
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[13.5px] leading-relaxed text-mute">
                      <span className="mt-[9px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-gold/60" />
                      <span className="transition-colors duration-500 group-hover:text-chalk/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 07 · education ──────────────────────────────────────────────────── */
function Education() {
  return (
    <Section
      id="education"
      index="10"
      title="Education"
      lede="Degrees, research schools and certifications."
    >
      {/* degrees */}
      <div className="grid gap-4 md:grid-cols-2">
        {EDUCATION.map((e, i) => (
          <Reveal key={i} d={i * 90}>
            <div className="group relative h-full overflow-hidden rounded-lg border border-line bg-ink-2/45 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-ink-3/60">
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-[18px] font-semibold leading-snug tracking-[-0.025em] text-chalk transition-colors duration-500 group-hover:text-gold">
                  {e.degree}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  {e.period}
                </span>
              </div>
              <p className="mt-2 text-[13px] text-teal/85">{e.place}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">
                {e.honour}
              </span>
              <p className="mt-4 border-l border-line pl-4 text-[12.5px] leading-relaxed text-mute">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-mute/70">
                  Thesis ·{" "}
                </span>
                {e.thesis}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        {/* schools */}
        <div className="lg:col-span-6">
          <Reveal>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-coral">
              Research schools
            </h3>
          </Reveal>
          <div className="mt-5 space-y-3">
            {SCHOOLS.map((t, i) => (
              <Reveal key={i} d={i * 70}>
                <div className="group relative overflow-hidden rounded-lg border border-line bg-ink-2/45 p-5 transition-all duration-500 hover:border-coral/45 hover:bg-ink-3/60">
                  <span className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-coral transition-transform duration-600 group-hover:scale-y-100" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-chalk transition-colors duration-500 group-hover:text-coral">
                      {t.name}
                    </p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                      {t.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] text-mute">{t.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* certs */}
        <div className="lg:col-span-6">
          <Reveal>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal">
              Certifications
            </h3>
          </Reveal>
          <div className="mt-5 space-y-3">
            {CERTS.map((c, i) => (
              <Reveal key={i} d={i * 60}>
                <div className="group border-b border-line/60 pb-3.5 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p className="font-display text-[14.5px] font-semibold tracking-[-0.02em] text-chalk/85 transition-colors duration-500 group-hover:text-teal">
                      {c.name}
                    </p>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mute">
                      {c.year}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12.5px] text-mute">{c.org}</p>
                  {c.note && (
                    <p className="mt-1.5 text-[12px] leading-relaxed text-mute/70">{c.note}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── 05 · mentors, mates & mentees ───────────────────────────────────── */
function PeopleSection() {
  return (
    <Section
      id="people"
      index="05"
      title="Mentors, Mates & Mentees"
      lede="The people who shape this work — recorded here in gratitude."
    >
      <People />
    </Section>
  );
}

/* ── 08 · blog ───────────────────────────────────────────────────────── */
function BlogSection() {
  return (
    <Section
      id="blog"
      index="08"
      title="Blog"
      lede="Longer-form writing on medical AI, uncertainty and research practice."
    >
      <Blog />
    </Section>
  );
}

/* ── 11 · skills ─────────────────────────────────────────────────────── */
function Skills() {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setArmed(true), 500);
    return () => clearTimeout(t);
  }, []);
  const accents = ["gold", "teal", "coral", "ice"];

  return (
    <Section
      id="skills"
      index="11"
      title="Technical Competencies"
      lede="Methods, tooling and languages underpinning the research."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="space-y-7">
            {Object.entries(SKILLS).map(([cat, items], i) => {
              const a = ACCENT[accents[i % accents.length]];
              return (
                <Reveal key={cat} d={i * 80}>
                  <div className="group">
                    <div className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                      <h3 className={`font-mono text-[10.5px] uppercase tracking-[0.26em] ${a.text}`}>
                        {cat}
                      </h3>
                      <span className="h-px flex-1 bg-line/70" />
                      <span className="font-mono text-[10px] text-mute/60">
                        {String(items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="cursor-default rounded-full border border-line bg-ink-2/60 px-3 py-1.5 text-[12.5px] text-chalk/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/55 hover:bg-gold/10 hover:text-gold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4">
          <Reveal d={120}>
            <div className="rounded-lg border border-line bg-ink-2/50 p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                Languages
              </h3>
              <div className="mt-6 space-y-5">
                {LANGUAGES.map((l, i) => (
                  <div key={l.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-[15px] font-semibold text-chalk">
                        {l.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                        {l.level}
                      </span>
                    </div>
                    <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-coral transition-[width] duration-[1400ms] ease-out"
                        style={{ width: armed ? `${l.pct}%` : "0%", transitionDelay: `${i * 160}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ── 10 · contact ────────────────────────────────────────────────────── */
function Contact() {
  return (
    <Section
      id="contact"
      index="12"
      title="Contact"
      lede="Correspondence regarding doctoral positions, joint research and co-authorship is welcome."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-coral">
              ● Open to PhD positions & research collaboration
            </p>
          </Reveal>
          <Reveal d={90}>
            <a
              href={`mailto:${PROFILE.email}`}
              className="group mt-5 block break-all font-display text-[clamp(1.35rem,4.2vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.04em] text-chalk no-underline transition-colors duration-500 hover:text-gold"
            >
              {PROFILE.email}
              <span className="ml-2 inline-block text-gold transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
                ↗
              </span>
            </a>
          </Reveal>
          <Reveal d={140}>
            <p className="mt-3 font-mono text-[12px] tracking-[0.12em] text-mute">
              {PROFILE.phone}
            </p>
          </Reveal>
          <Reveal d={190}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-chalk/70">
              I am seeking a doctoral position in{" "}
              <span className="text-gold">oncological image analysis</span>,{" "}
              <span className="text-teal">computational neuroscience</span>, or{" "}
              <span className="text-coral">uncertainty quantification for clinical AI</span>.
            </p>
          </Reveal>
          <Reveal d={220}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-chalk/70">
              I likewise welcome enquiries concerning joint research projects, challenge
              participation, co-authorship and remote collaboration. Email is the most reliable
              means of reaching me, and I respond to all serious academic correspondence.
            </p>
          </Reveal>
          <Reveal d={250}>
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { label: "GitHub", href: PROFILE.links.github },
                { label: "LinkedIn", href: PROFILE.links.linkedin },
                { label: "Google Scholar", href: PROFILE.links.scholar },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-chalk/75 no-underline transition-all duration-400 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/10 hover:text-gold"
                >
                  {l.label}
                  <span className="text-[9px] transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal d={140}>
            <div className="relative overflow-hidden rounded-lg border border-line bg-ink-2/50 p-7">
              <span
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gold/12 blur-3xl"
                style={{ animation: "float-y 9s ease-in-out infinite" }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal">Currently</p>
              <ul className="mt-5 space-y-4 text-[13.5px]">
                {[
                  ["Research", "NeuroGraphMamba · EEG seizure detection"],
                  ["In review", "3 journal manuscripts — CMPB, TNSRE, JBHI"],
                  ["Programme", "BASIRA 2026, Imperial College London"],
                  ["Training", "Neuromatch Computational Neuroscience"],
                  ["Position", "Head of Risk Management, CCR — Algiers"],
                ].map(([k, v], i) => (
                  <li key={k} className="flex gap-4 border-b border-line/60 pb-3 last:border-0 last:pb-0">
                    <span className="w-20 flex-shrink-0 font-mono text-[9.5px] uppercase tracking-[0.18em] text-mute">
                      {k}
                    </span>
                    <span className="flex-1 text-chalk/80">{v}</span>
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-teal"
                      style={{ animation: `twinkle ${2 + i * 0.4}s infinite` }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ── footer ──────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-line/80 py-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          © {new Date().getFullYear()} {PROFILE.name} · Algiers
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute/70">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gold transition-colors hover:text-chalk"
          >
            back to top ↑
          </button>
        </p>
      </div>
    </footer>
  );
}

/* ── app ─────────────────────────────────────────────────────────────── */
export default function App() {
  const [entered, setEntered] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));
  useRevealObserver(entered);

  return (
    <>
      <Intro onDone={() => setEntered(true)} />
      <Ambient />
      <Nav active={active} />

      <div className="relative z-10 transition-opacity duration-700" style={{ opacity: entered ? 1 : 0 }}>
        <Hero />
        <StatsStrip />
        <About />
        <Research />
        <Publications />
        <News />
        <PeopleSection />
        <DiamondSection />
        <GallerySection />
        <BlogSection />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
