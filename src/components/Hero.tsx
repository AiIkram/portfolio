import { PROFILE, TICKER } from "../data";
import { usePointerParallax } from "../lib/hooks";

const ORBIT_TAGS = [
  { label: "MICCAI 2026", tone: "text-gold border-gold/40 bg-ink/85", top: "6%", left: "-12%" },
  { label: "AMAI · 1st author", tone: "text-teal border-teal/40 bg-ink/85", top: "27%", left: "76%" },
  { label: "HECKTOR", tone: "text-coral border-coral/40 bg-ink/85", top: "56%", left: "-16%" },
  { label: "ISLES '26", tone: "text-ice border-ice/40 bg-ink/85", top: "78%", left: "72%" },
  { label: "EMNLP 2026", tone: "text-gold border-gold/40 bg-ink/85", top: "94%", left: "6%" },
];

function ExtLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mute transition-colors duration-300 hover:text-gold no-underline"
    >
      <span className="link-underline">{label}</span>
      <span className="text-[9px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

export default function Hero() {
  const parallaxRef = usePointerParallax(16);

  return (
    <section id="top" className="relative pt-28 pb-0 sm:pt-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ── left: type ── */}
          <div className="lg:col-span-7">
            <div
              className="reveal flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.32em] text-mute"
              style={{ ["--rd" as string]: "80ms" }}
            >
              <span className="inline-flex items-center gap-2 text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" style={{ animation: "twinkle 2.4s infinite" }} />
                {PROFILE.location}
              </span>
              <span className="h-px w-8 bg-line" />
              <span>{PROFILE.role}</span>
            </div>

            <h1 className="reveal mt-6 font-display leading-[0.82] tracking-[-0.045em]" style={{ ["--rd" as string]: "160ms" }}>
              <span className="block text-[clamp(3.4rem,13vw,8.6rem)] font-bold text-chalk">
                {PROFILE.firstName}
              </span>
              <span
                className="block text-[clamp(3.4rem,13vw,8.6rem)] font-bold"
                style={{ WebkitTextStroke: "1.4px #f2c14e", color: "transparent" }}
              >
                {PROFILE.lastName}
              </span>
            </h1>

            <div className="reveal mt-7 max-w-xl" style={{ ["--rd" as string]: "280ms" }}>
              <p className="text-[15px] leading-relaxed text-chalk/75 sm:text-base">
                Independent researcher in {PROFILE.subRole.toLowerCase()}. My work develops
                segmentation and prognostic models for oncological imaging and neural signals,
                and examines the question that governs clinical deployment:{" "}
                <span className="text-gold">
                  how confident should a clinician be in this output?
                </span>
              </p>
            </div>

            {/* status */}
            <div className="reveal mt-7 flex flex-wrap items-center gap-3" style={{ ["--rd" as string]: "360ms" }}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-coral/45 bg-coral/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coral">
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-coral"
                    style={{ animation: "pulse-ring 2.2s infinite" }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                </span>
                {PROFILE.status}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                Head of Risk Management · CCR Algeria
              </span>
            </div>

            {/* links */}
            <div className="reveal mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line/70 pt-6" style={{ ["--rd" as string]: "440ms" }}>
              <ExtLink href={PROFILE.links.github} label="GitHub" />
              <ExtLink href={PROFILE.links.linkedin} label="LinkedIn" />
              <ExtLink href={PROFILE.links.scholar} label="Scholar" />
              <ExtLink href={`mailto:${PROFILE.email}`} label="Email" />
            </div>
          </div>

          {/* ── right: portrait in orbit ── */}
          <div className="lg:col-span-5">
            <div
              ref={parallaxRef}
              className="reveal relative mx-auto aspect-[4/5] w-full max-w-[380px]"
              style={{ ["--rd" as string]: "240ms" }}
            >
              {/* rotating rings */}
              <div
                className="pointer-events-none absolute -inset-7 rounded-full border border-line/70"
                style={{ animation: "spin-slow 40s linear infinite" }}
              >
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_14px_3px_rgba(242,193,78,0.55)]" />
              </div>
              <div
                className="pointer-events-none absolute -inset-14 rounded-full border border-dashed border-teal/20"
                style={{ animation: "spin-rev 68s linear infinite" }}
              >
                <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_12px_3px_rgba(79,209,181,0.5)]" />
              </div>

              {/* frame */}
              <div
                className="relative h-full w-full overflow-hidden rounded-[999px_999px_10px_10px] border border-line bg-ink-2 will-change-transform"
                style={{ transform: "translate3d(var(--px,0px), var(--py,0px), 0)" }}
              >
                <img
                  src={PROFILE.portrait.src}
                  alt={PROFILE.portrait.alt}
                  className="h-full w-full scale-105 object-cover opacity-90 grayscale-[0.25] transition-all duration-[1200ms] ease-out hover:scale-110 hover:grayscale-0 hover:opacity-100"
                />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0)_38%,rgba(7,10,18,0.55)_78%,rgba(7,10,18,0.92)_100%)]" />
                {/* scanline sweep */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(79,209,181,0.16),transparent)]"
                  style={{ animation: "scan-y 5.5s ease-in-out infinite" }}
                />
                {/* corner marks */}
                <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-gold/70" />
                <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-gold/70" />
                <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-gold/70" />
                <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold/70" />
              </div>

              {/* caption chip */}
              <div className="absolute -bottom-4 left-1/2 w-max max-w-[92%] -translate-x-1/2 rounded-full border border-line bg-ink/92 px-4 py-1.5 text-center backdrop-blur-sm">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mute">
                  {PROFILE.portrait.caption}
                </p>
              </div>

              {/* orbiting venue badges */}
              {ORBIT_TAGS.map((t, i) => (
                <span
                  key={t.label}
                  className={`pointer-events-none absolute hidden sm:inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm ${t.tone}`}
                  style={{
                    top: t.top,
                    left: t.left,
                    animation: `float-y ${5.5 + i * 0.8}s ease-in-out ${i * 0.4}s infinite`,
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── keyword ticker ── */}
      <div className="marquee-wrap relative mt-20 overflow-hidden border-y border-line/80 bg-ink-2/45 py-3">
        <div className="marquee-track flex w-max items-center gap-8">
          {[...TICKER, ...TICKER].map((k, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.26em] ${
                  i % 3 === 0 ? "text-gold/85" : i % 3 === 1 ? "text-chalk/55" : "text-teal/75"
                }`}
              >
                {k}
              </span>
              <span className="text-coral/50">✦</span>
            </span>
          ))}
        </div>
        <span className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,#070a12,transparent)]" />
        <span className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,#070a12,transparent)]" />
      </div>
    </section>
  );
}
