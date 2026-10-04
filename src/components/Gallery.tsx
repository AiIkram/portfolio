import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "../data";

const TONE: Record<string, { chip: string; ring: string; dot: string }> = {
  gold: { chip: "text-gold border-gold/40 bg-gold/10", ring: "hover:border-gold/70", dot: "bg-gold" },
  teal: { chip: "text-teal border-teal/40 bg-teal/10", ring: "hover:border-teal/70", dot: "bg-teal" },
  coral: { chip: "text-coral border-coral/40 bg-coral/10", ring: "hover:border-coral/70", dot: "bg-coral" },
  ice: { chip: "text-ice border-ice/40 bg-ice/10", ring: "hover:border-ice/70", dot: "bg-ice" },
};

function CameraIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7a1 1 0 0 0 .83-.45l.94-1.4A1 1 0 0 1 9.8 3.7h4.4a1 1 0 0 1 .83.45l.94 1.4A1 1 0 0 0 16.8 6h1.7A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="12.8" r="3.6" />
    </svg>
  );
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {dir === "prev" ? (
        <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const real = GALLERY.filter((g) => !g.placeholder);

  const move = useCallback(
    (d: number) => {
      setOpen((cur) => {
        if (cur === null) return cur;
        return (cur + d + real.length) % real.length;
      });
    },
    [real.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  let realIndex = -1;

  return (
    <>
      <div className="grid auto-rows-[168px] sm:auto-rows-[190px] grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {GALLERY.map((shot, i) => {
          if (!shot.placeholder) realIndex++;
          const idx = realIndex;
          const tone = TONE[shot.tone ?? "gold"];

          const span =
            shot.span === "wide"
              ? "col-span-2 row-span-1"
              : shot.span === "tall"
                ? "col-span-1 row-span-2 md:col-span-1"
                : "col-span-1 row-span-1";

          /* ── empty slot: “put your photo here” ── */
          if (shot.placeholder || !shot.src) {
            return (
              <div
                key={i}
                className={`reveal group relative overflow-hidden rounded-md border border-dashed border-line bg-ink-2/50 p-4 flex flex-col items-center justify-center text-center transition-colors duration-500 hover:border-gold/60 hover:bg-ink-3/60 ${span}`}
                style={{ ["--rd" as string]: `${i * 55}ms` }}
              >
                <CameraIcon className="h-7 w-7 text-mute/60 group-hover:text-gold transition-colors duration-500" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mute group-hover:text-gold transition-colors duration-500">
                  {shot.tag}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-mute/70 max-w-[190px]">
                  {shot.caption}
                </p>
                <span className="absolute right-2 top-2 font-mono text-[9px] text-line">
                  /public
                </span>
              </div>
            );
          }

          /* ── real photo ── */
          return (
            <button
              key={i}
              onClick={() => setOpen(idx)}
              className={`reveal group relative overflow-hidden rounded-md border border-line bg-ink-2 text-left tilt-card ${tone.ring} ${span}`}
              style={{ ["--rd" as string]: `${i * 55}ms` }}
            >
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.72] grayscale-[0.45] transition-all duration-[900ms] ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.07]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0.05)_0%,rgba(7,10,18,0.55)_58%,rgba(7,10,18,0.94)_100%)]" />
              <span
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold via-coral to-teal transition-transform duration-700 group-hover:scale-x-100"
              />

              <span className="absolute left-3 top-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm ${tone.chip}`}
                >
                  <span className={`h-1 w-1 rounded-full ${tone.dot}`} />
                  {shot.tag}
                </span>
              </span>

              <span className="absolute inset-x-3 bottom-3 block">
                <span className="block text-[11.5px] leading-snug text-chalk/85 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {shot.caption}
                </span>
                <span className="mt-1.5 flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.2em] text-mute/80">
                  view
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 font-mono text-[10px] leading-relaxed tracking-[0.12em] text-mute/60 uppercase">
        Photos are placeholders · edit{" "}
        <span className="text-teal normal-case tracking-normal">src/data.ts → GALLERY</span> to add your own
      </p>

      {/* ── lightbox ── */}
      {open !== null && real[open] && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/96 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-line text-chalk hover:border-coral hover:text-coral transition-colors"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="relative max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "intro-word 500ms cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <img
              src={real[open].src}
              alt={real[open].caption}
              className="max-h-[74vh] w-full rounded-md border border-line object-contain bg-ink-2"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${
                    TONE[real[open].tone ?? "gold"].chip
                  }`}
                >
                  <span className={`h-1 w-1 rounded-full ${TONE[real[open].tone ?? "gold"].dot}`} />
                  {real[open].tag}
                </span>
                <p className="text-sm text-chalk/85">{real[open].caption}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-mute">
                  {String(open + 1).padStart(2, "0")} / {String(real.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => move(-1)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-chalk hover:border-gold hover:text-gold transition-colors"
                  aria-label="Previous"
                >
                  <Arrow dir="prev" />
                </button>
                <button
                  onClick={() => move(1)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-chalk hover:border-gold hover:text-gold transition-colors"
                  aria-label="Next"
                >
                  <Arrow dir="next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
