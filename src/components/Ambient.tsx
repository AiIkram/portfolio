import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";

type Star = { x: number; y: number; z: number; r: number; tw: number; ph: number };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number; max: number };

/**
 * Fixed ambient layer: a parallax starfield on canvas, soft multi-hue
 * deep-space vignettes, and a fine film grain.
 */
export default function Ambient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let shooters: Shooter[] = [];
    let raf = 0;
    let scrollY = window.scrollY;
    let t = 0;

    const HUES = ["#f2c14e", "#4fd1b5", "#9cc0ff", "#ff7e6b", "#ffffff"];

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(230, Math.round((w * h) / 7200));
      stars = Array.from({ length: density }, () => {
        const z = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * (h + 400) - 200,
          z,
          r: 0.35 + z * 1.25,
          tw: 0.4 + Math.random() * 1.6,
          ph: Math.random() * Math.PI * 2,
        };
      });
    };

    const spawnShooter = () => {
      if (reduced || shooters.length > 1 || Math.random() > 0.0035) return;
      const fromLeft = Math.random() > 0.5;
      shooters.push({
        x: fromLeft ? -60 : w + 60,
        y: Math.random() * h * 0.55,
        vx: (fromLeft ? 1 : -1) * (5.5 + Math.random() * 4),
        vy: 1.6 + Math.random() * 1.8,
        life: 0,
        max: 90 + Math.random() * 40,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.016;

      // stars
      for (const s of stars) {
        const par = scrollY * (0.04 + s.z * 0.16);
        const y = ((s.y - par) % (h + 400) + h + 400) % (h + 400) - 200;
        const alpha = reduced
          ? 0.35 + s.z * 0.5
          : (0.28 + s.z * 0.62) * (0.6 + 0.4 * Math.sin(t * s.tw + s.ph));
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = HUES[Math.floor(s.ph) % HUES.length];
        ctx.globalAlpha = Math.max(0.05, alpha);
        ctx.fill();

        // halo on the brightest few
        if (s.z > 0.9) {
          ctx.globalAlpha = Math.max(0.02, alpha * 0.14);
          ctx.beginPath();
          ctx.arc(s.x, y, s.r * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // shooting stars
      spawnShooter();
      shooters = shooters.filter((sh) => sh.life < sh.max);
      for (const sh of shooters) {
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life++;
        const k = Math.sin((sh.life / sh.max) * Math.PI);
        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 14, sh.y - sh.vy * 14);
        grad.addColorStop(0, `rgba(255,255,255,${0.85 * k})`);
        grad.addColorStop(0.35, `rgba(242,193,78,${0.4 * k})`);
        grad.addColorStop(1, "rgba(242,193,78,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 14, sh.y - sh.vy * 14);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    build();
    draw();
    window.addEventListener("resize", build);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden grain">
      {/* deep-space vignettes — warm gold, cool teal, faint coral */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 82% -8%, rgba(242,193,78,0.14), transparent 58%)," +
            "radial-gradient(90% 70% at 6% 12%, rgba(79,209,181,0.11), transparent 60%)," +
            "radial-gradient(110% 90% at 50% 108%, rgba(255,126,107,0.09), transparent 62%)," +
            "radial-gradient(70% 60% at 96% 74%, rgba(156,192,255,0.08), transparent 60%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* horizon fade so text stays readable */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0.55)_0%,rgba(7,10,18,0.15)_30%,rgba(7,10,18,0.72)_100%)]" />
      {/* faint vertical rule grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(30,39,57,0.9) 1px, transparent 1px)",
          backgroundSize: "clamp(120px, 12.5vw, 200px) 100%",
          maskImage:
            "linear-gradient(180deg, transparent, black 12%, black 78%, transparent)",
        }}
      />
    </div>
  );
}
