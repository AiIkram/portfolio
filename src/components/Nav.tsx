import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data";
import { useScrollProgress } from "../lib/hooks";

export default function Nav({ active }: { active: string }) {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* scroll progress rail */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-gold via-coral to-teal"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-ink/88 backdrop-blur-xl border-b border-line/80"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* monogram */}
            <button
              onClick={() => go("top")}
              className="group flex items-center gap-3 no-underline"
            >
              <span className="relative grid h-9 w-9 place-items-center">
                <span
                  className="absolute inset-0 rounded-full border border-gold/45 group-hover:border-gold transition-colors"
                  style={{ animation: "spin-slow 14s linear infinite" }}
                />
                <span className="absolute inset-[5px] rounded-full border border-dashed border-teal/35" />
                <span className="font-display text-[13px] font-bold text-gold">IA</span>
              </span>
              <span className="hidden sm:flex flex-col items-start leading-none">
                <span className="font-display text-[15px] font-semibold tracking-tight text-chalk">
                  {PROFILE.name}
                </span>
                <span className="font-mono text-[9px] tracking-[0.28em] text-mute uppercase mt-1">
                  {PROFILE.role}
                </span>
              </span>
            </button>

            {/* desktop links */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className={`relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                    active === n.id ? "text-gold" : "text-mute hover:text-chalk"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-px h-px origin-left bg-gold transition-transform duration-400 ${
                      active === n.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink no-underline"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-coral"
                    style={{ animation: "pulse-ring 2s infinite" }}
                  />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
                </span>
                Hire me
              </a>

              {/* burger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-line text-chalk hover:border-gold/60 transition-colors"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-ink/97 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <nav className="relative flex h-full flex-col justify-center px-8">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="group flex items-baseline gap-4 border-b border-line/60 py-4 text-left transition-all duration-500"
              style={{
                transitionDelay: open ? `${i * 45}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(14px)",
              }}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold/70">{n.index}</span>
              <span
                className={`font-display text-3xl font-semibold tracking-tight transition-colors ${
                  active === n.id ? "text-gold" : "text-chalk group-hover:text-gold"
                }`}
              >
                {n.label}
              </span>
            </button>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 font-mono text-[11px] tracking-[0.2em] text-teal uppercase no-underline"
          >
            {PROFILE.email} ↗
          </a>
        </nav>
      </div>
    </>
  );
}
