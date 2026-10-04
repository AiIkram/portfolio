import {
  COMMUNITIES,
  MATES,
  MENTEES_NOTE,
  MENTORS,
  PEOPLE_INTRO,
  type Person,
} from "../data";

function PersonRow({ p, accent }: { p: Person; accent: string }) {
  const dot =
    accent === "gold" ? "bg-gold" : accent === "teal" ? "bg-teal" : "bg-coral";
  const hov =
    accent === "gold"
      ? "group-hover:text-gold"
      : accent === "teal"
        ? "group-hover:text-teal"
        : "group-hover:text-coral";

  const Name = p.link ? (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-underline font-display text-[15.5px] font-semibold tracking-[-0.02em] text-chalk no-underline transition-colors duration-400 ${hov}`}
    >
      {p.name}
      <span className="ml-1 text-[9px] text-mute">↗</span>
    </a>
  ) : (
    <span className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-chalk">
      {p.name}
    </span>
  );

  return (
    <li className="group flex gap-4 border-b border-line/60 py-4 last:border-0">
      <span
        className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot} opacity-50 transition-opacity duration-400 group-hover:opacity-100`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {Name}
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-mute">
            {p.role}
          </span>
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-mute">{p.affiliation}</p>
        {p.note && (
          <p className="mt-1.5 border-l border-line pl-3 text-[12.5px] leading-relaxed text-mute/75">
            {p.note}
          </p>
        )}
      </div>
    </li>
  );
}

export default function People() {
  return (
    <div>
      <div className="reveal max-w-3xl">
        <p className="text-[15px] leading-[1.85] text-chalk/75">{PEOPLE_INTRO}</p>
        <p className="mt-4 text-[13.5px] italic leading-relaxed text-mute">
          闻道有先后，术业有专攻 — those who come earlier to understanding, or who possess
          distinct expertise, can be teachers.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        {/* mentors */}
        <div className="lg:col-span-7">
          <div className="reveal flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-gold">
              Mentors
            </h3>
            <span className="h-px flex-1 bg-line/70" />
          </div>
          <ul className="reveal mt-2" style={{ ["--rd" as string]: "60ms" }}>
            {MENTORS.map((p) => (
              <PersonRow key={p.name} p={p} accent="gold" />
            ))}
          </ul>

          {/* mates */}
          <div className="reveal mt-10 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-teal">
              Mates & Collaborators
            </h3>
            <span className="h-px flex-1 bg-line/70" />
          </div>
          <ul className="reveal mt-2" style={{ ["--rd" as string]: "60ms" }}>
            {MATES.map((p) => (
              <PersonRow key={p.name} p={p} accent="teal" />
            ))}
          </ul>

          {/* mentees */}
          <div className="reveal mt-10 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-coral">
              Mentees & Students
            </h3>
            <span className="h-px flex-1 bg-line/70" />
          </div>
          <p
            className="reveal mt-4 max-w-2xl text-[13.5px] leading-relaxed text-mute"
            style={{ ["--rd" as string]: "60ms" }}
          >
            {MENTEES_NOTE}
          </p>
        </div>

        {/* communities */}
        <div className="lg:col-span-5">
          <div className="reveal lg:sticky lg:top-28">
            <div className="rounded-lg border border-line bg-ink-2/55 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ice">
                Research communities
              </p>
              <ul className="mt-5 space-y-4">
                {COMMUNITIES.map((c) => (
                  <li key={c.name} className="group border-b border-line/60 pb-3.5 last:border-0 last:pb-0">
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-display text-[14.5px] font-semibold tracking-[-0.02em] text-chalk no-underline transition-colors duration-400 group-hover:text-ice"
                    >
                      {c.name}
                      <span className="ml-1 text-[9px] text-mute">↗</span>
                    </a>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-mute">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-lg border border-dashed border-line bg-ink-2/30 p-5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-mute">
                On collaboration
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-mute/85">
                Nearly all of my published work is collaborative and international — Algeria,
                France, Türkiye, the United Kingdom. I am always glad to extend that list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
