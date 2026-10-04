import { useState } from "react";
import { DIAMOND_INTRO, FACETS, SOFT_SKILLS } from "../data";

const HEX: Record<string, string> = {
  gold: "#f2c14e",
  teal: "#4fd1b5",
  coral: "#ff7e6b",
  ice: "#9cc0ff",
};

const TXT: Record<string, string> = {
  gold: "text-gold",
  teal: "text-teal",
  coral: "text-coral",
  ice: "text-ice",
};

const BORDER: Record<string, string> = {
  gold: "hover:border-gold/55",
  teal: "hover:border-teal/55",
  coral: "hover:border-coral/55",
  ice: "hover:border-ice/55",
};

/**
 * A brilliant-cut gem drawn in viewBox 0 0 200 200.
 *
 * Silhouette: a flat table across the top, sides flaring out to the girdle
 * (the widest point), then converging to a single culet at the bottom.
 *
 *   table   (74,24) ──────────── (126,24)
 *             ╲   ╲               ╱   ╱
 *   girdle (28,78) ─ (74,78) ─ (126,78) ─ (172,78)
 *             ╱   ╱   ╲       ╱   ╲   ╲
 *            ╱   ╱     ╲   ╱     ╲   ╲
 *           ╱   ╱       ╲ ╱       ╲   ╲
 *              (100,182)  culet
 *
 * The six facets below tile that outline EXACTLY, with no overlap, so every
 * hover target stays visible and independent. (The previous version drew an
 * "outer girdle" polygon on top of the pavilion facets, which hid them.)
 */
const GEM_FACETS = [
  { i: 0, d: "M74 24 L28 78 L74 78 Z", label: "crown far-left" },
  { i: 1, d: "M126 24 L126 78 L172 78 Z", label: "crown far-right" },
  { i: 2, d: "M74 24 L126 24 L126 78 L74 78 Z", label: "table" },
  { i: 3, d: "M28 78 L74 78 L100 182 Z", label: "pavilion left" },
  { i: 4, d: "M74 78 L126 78 L100 182 Z", label: "pavilion centre" },
  { i: 5, d: "M126 78 L172 78 L100 182 Z", label: "pavilion right" },
];

/** Crisp outer silhouette, drawn last and non-interactive. */
const GEM_OUTLINE = "M74 24 L126 24 L172 78 L100 182 L28 78 Z";

/** Girdle line across the widest point of the stone. */
const GIRDLE = "M28 78 L172 78";

export default function Diamond() {
  const [hot, setHot] = useState<number | null>(null);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      {/* ── left: the stone ── */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <div className="reveal space-y-4">
            {DIAMOND_INTRO.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-[19px] sm:text-[23px] font-medium leading-snug tracking-[-0.02em] text-chalk"
                    : "text-[14.5px] leading-relaxed text-mute"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* the gem */}
          <div className="reveal relative mx-auto mt-10 w-full max-w-[320px]" style={{ ["--rd" as string]: "120ms" }}>
            {/* halo */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl transition-colors duration-700"
              style={{
                background:
                  hot !== null
                    ? `radial-gradient(circle at 50% 45%, ${HEX[FACETS[hot].accent]}33, transparent 68%)`
                    : "radial-gradient(circle at 50% 45%, rgba(242,193,78,0.16), transparent 68%)",
              }}
            />
            {/* slow orbit ring */}
            <div
              className="pointer-events-none absolute inset-2 rounded-full border border-dashed border-line/50"
              style={{ animation: "spin-slow 52s linear infinite" }}
            />

            <svg viewBox="0 0 200 200" className="relative w-full" style={{ animation: "float-y 7s ease-in-out infinite" }}>
              <defs>
                <linearGradient id="gemSheen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {GEM_FACETS.map((f) => {
                const facet = FACETS[f.i];
                const on = hot === f.i;
                return (
                  <path
                    key={f.i}
                    d={f.d}
                    fill={on ? HEX[facet.accent] : "url(#gemSheen)"}
                    fillOpacity={on ? 0.32 : 1}
                    stroke={on ? HEX[facet.accent] : "#1e2739"}
                    strokeWidth={on ? 1.7 : 1}
                    strokeLinejoin="round"
                    className="cursor-pointer transition-all duration-400"
                    onMouseEnter={() => setHot(f.i)}
                    onMouseLeave={() => setHot(null)}
                  />
                );
              })}

              {/* girdle line across the widest point */}
              <path
                d={GIRDLE}
                stroke="#2c3a52"
                strokeWidth="1"
                strokeLinecap="round"
                pointerEvents="none"
              />

              {/* crisp outer silhouette */}
              <path
                d={GEM_OUTLINE}
                fill="none"
                stroke="#33425e"
                strokeWidth="1.6"
                strokeLinejoin="round"
                pointerEvents="none"
              />

              {/* sparkle points at the gem's key vertices */}
              {[
                [74, 24],
                [126, 24],
                [28, 78],
                [172, 78],
                [100, 182],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i === 4 ? 2.6 : 2.1}
                  fill="#f2c14e"
                  style={{ animation: `twinkle ${2.2 + i * 0.6}s ease-in-out infinite` }}
                />
              ))}
            </svg>

            {/* readout */}
            <div className="mt-5 min-h-[52px] text-center">
              {hot !== null ? (
                <>
                  <p className={`font-mono text-[10px] uppercase tracking-[0.26em] ${TXT[FACETS[hot].accent]}`}>
                    Facet {FACETS[hot].n} · {FACETS[hot].kicker}
                  </p>
                  <p className="mt-1.5 font-display text-[20px] font-semibold tracking-[-0.02em] text-chalk">
                    {FACETS[hot].title}
                  </p>
                </>
              ) : (
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-mute/70">
                  Select a facet to turn the stone
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── right: the facets ── */}
      <div className="lg:col-span-7">
        <div className="space-y-3">
          {FACETS.map((f, i) => {
            const on = hot === i;
            return (
              <div
                key={f.n}
                className="reveal"
                style={{ ["--rd" as string]: `${i * 70}ms` }}
                onMouseEnter={() => setHot(i)}
                onMouseLeave={() => setHot(null)}
              >
                <article
                  className={`group relative overflow-hidden rounded-lg border bg-ink-2/45 p-5 transition-all duration-500 sm:p-6 ${
                    on ? "-translate-y-0.5 bg-ink-3/70" : ""
                  } ${BORDER[f.accent]} ${on ? "" : "border-line"}`}
                  style={on ? { borderColor: `${HEX[f.accent]}8c` } : undefined}
                >
                  {/* facet edge */}
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] origin-top transition-transform duration-600"
                    style={{
                      backgroundColor: HEX[f.accent],
                      transform: on ? "scaleY(1)" : "scaleY(0)",
                    }}
                  />
                  {/* corner light */}
                  <span
                    className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-3xl transition-opacity duration-700"
                    style={{ backgroundColor: HEX[f.accent], opacity: on ? 0.16 : 0 }}
                  />

                  <div className="relative flex items-start gap-5">
                    {/* roman numeral */}
                    <span
                      className="mt-0.5 w-9 flex-shrink-0 font-display text-[22px] font-bold leading-none tracking-tight transition-opacity duration-500"
                      style={{ color: HEX[f.accent], opacity: on ? 0.95 : 0.35 }}
                    >
                      {f.n}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-[19px] font-semibold leading-tight tracking-[-0.025em] text-chalk">
                          {f.title}
                        </h3>
                        <span className={`font-mono text-[9.5px] uppercase tracking-[0.2em] ${TXT[f.accent]}`}>
                          {f.kicker}
                        </span>
                      </div>

                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">{f.body}</p>

                      {f.items && (
                        <ul className="mt-4 space-y-2">
                          {f.items.map((it) => (
                            <li
                              key={it.label}
                              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-b border-line/50 pb-2 text-[12.5px] last:border-0 last:pb-0"
                            >
                              <span className="text-chalk/75">{it.label}</span>
                              {it.meta && (
                                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mute/80">
                                  {it.meta}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* soft skills */}
        <div className="reveal mt-8 flex flex-wrap items-center gap-3 border-t border-line/70 pt-6" style={{ ["--rd" as string]: "120ms" }}>
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mute">
            Throughout
          </span>
          {SOFT_SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-ink-2/60 px-3 py-1.5 text-[12.5px] text-chalk/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/55 hover:text-gold"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
