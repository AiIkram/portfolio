import { useEffect, useRef, useState } from "react";

/* ── Reduced motion ─────────────────────────────────────────────────────── */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ── Global scroll reveal: adds .is-in to every .reveal in view ─────────── */
export function useRevealObserver(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const scan = () =>
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [enabled]);
}

/* ── Active section tracking ────────────────────────────────────────────── */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.05, 0.2, 0.5], rootMargin: "-15% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids.join("|")]);
  return active;
}

/* ── Scroll progress 0 → 1 ──────────────────────────────────────────────── */
export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}

/* ── Count up when the element scrolls into view ────────────────────────── */
export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const k = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - k, 3);
          setVal(Math.round(target * eased));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, reduced]);

  return { ref, val };
}

/* ── Scramble-decode text ───────────────────────────────────────────────── */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/\\[]{}#*+=—0123456789";

export function useScramble(text: string, start: boolean, speed = 34) {
  const [out, setOut] = useState("");
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    let timer = 0 as unknown as ReturnType<typeof setInterval>;
    const total = text.length * 3 + 12;

    timer = setInterval(() => {
      frame++;
      const revealed = Math.floor((frame / total) * text.length * 1.35);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          s += " ";
        } else if (i < revealed) {
          s += text[i];
        } else {
          s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setOut(s);
      if (frame >= total) {
        setOut(text);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, start, speed, reduced]);

  return out;
}

/* ── Pointer position (normalised -1..1) for parallax ───────────────────── */
export function usePointerParallax(strength = 12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--px", `${nx * strength}px`);
        el.style.setProperty("--py", `${ny * strength}px`);
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0px");
      el.style.setProperty("--py", "0px");
    };
    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength, reduced]);

  return ref;
}
