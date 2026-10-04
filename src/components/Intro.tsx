import { useEffect, useRef, useState } from "react";
import { useScramble, usePrefersReducedMotion } from "../lib/hooks";

/**
 * Full-bleed entry splash: “Entering IKRAM's space” — words scramble-decode,
 * a progress rail fills, then the layer dissolves. Click or press a key to skip.
 */
export default function Intro({ onDone }: { onDone: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  const doneRef = useRef(onDone);
  const firedRef = useRef(false);
  doneRef.current = onDone;

  const total = reduced ? 800 : 3000;

  const w1 = useScramble("IKRAM", phase >= 0, 30);
  const w2 = useScramble("AISSIOU", phase >= 1, 30);
  const w3 = useScramble("SPACE", phase >= 2, 34);

  const finish = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    setLeaving(true);
    const t = setTimeout(() => {
      setGone(true);
      doneRef.current();
    }, 360);
    return () => clearTimeout(t);
  };

  /* staged phases + auto finish */
  useEffect(() => {
    const step = total / 3.4;
    const t1 = setTimeout(() => setPhase(1), step);
    const t2 = setTimeout(() => setPhase(2), step * 2);
    const t3 = setTimeout(() => {
      if (!firedRef.current) finish();
    }, total - 620);
    const t4 = setTimeout(() => {
      /* safety net if the staged finish never ran */
      if (!firedRef.current) {
        firedRef.current = true;
        setGone(true);
        doneRef.current();
      }
    }, total + 500);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  /* skip on click / key */
  useEffect(() => {
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* lock scroll while the splash is up */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex cursor-pointer select-none flex-col items-center justify-center bg-ink"
      style={{
        animation: leaving ? "intro-out 400ms cubic-bezier(0.7,0,0.84,0) forwards" : undefined,
      }}
      aria-hidden="true"
    >
      {/* concentric orbit rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[52vmin] w-[52vmin] rounded-full border border-line/70"
          style={{ animation: "spin-slow 26s linear infinite" }}
        />
        <div
          className="absolute h-[74vmin] w-[74vmin] rounded-full border border-dashed border-line/40"
          style={{ animation: "spin-rev 44s linear infinite" }}
        />
        <div className="absolute h-[96vmin] w-[96vmin] rounded-full border border-line/20" />
      </div>

      <div className="relative px-6 text-center">
        <p
          className="mb-8 font-mono text-[10px] uppercase tracking-[0.52em] text-mute sm:text-xs"
          style={{ animation: "intro-word 700ms cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Entering
        </p>

        <h1 className="font-display font-bold leading-[0.84] tracking-[-0.03em]">
          <span
            className="block text-[15vw] text-chalk sm:text-[11vw]"
            style={{ animation: "intro-word 800ms cubic-bezier(0.16,1,0.3,1) 60ms both" }}
          >
            {w1 || "\u00A0"}
          </span>
          <span
            className="block text-[15vw] text-gold sm:text-[11vw]"
            style={{ animation: "intro-word 800ms cubic-bezier(0.16,1,0.3,1) 180ms both" }}
          >
            {w2 || "\u00A0"}
          </span>
        </h1>

        <div
          className="mt-7 flex items-center justify-center gap-3"
          style={{ animation: "intro-word 700ms cubic-bezier(0.16,1,0.3,1) 420ms both" }}
        >
          <span className="h-px w-10 bg-line sm:w-16" />
          <span className="font-mono text-[11px] uppercase tracking-[0.42em] text-teal sm:text-sm">
            {w3 || "\u00A0"}
          </span>
          <span className="h-px w-10 bg-line sm:w-16" />
        </div>

        {/* progress rail */}
        <div className="mx-auto mt-10 h-px w-44 overflow-hidden bg-line/70 sm:w-64">
          <div
            className="h-full origin-left bg-gradient-to-r from-gold via-coral to-teal"
            style={{ animation: `line-grow ${total - 700}ms cubic-bezier(0.5,0,0.2,1) forwards` }}
          />
        </div>

        <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.3em] text-mute/70 sm:text-[10px]">
          medical ai · oncology · uncertainty
        </p>
      </div>
    </div>
  );
}
