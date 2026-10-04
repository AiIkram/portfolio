import { useEffect, useState } from "react";
import { BLOG_INTRO, POSTS, type Post } from "../data";

const ACCENT: Record<string, { text: string; border: string; bg: string; dot: string; chip: string }> = {
  gold: {
    text: "text-gold",
    border: "border-gold/45",
    bg: "bg-gold/10",
    dot: "bg-gold",
    chip: "border-gold/35 text-gold",
  },
  teal: {
    text: "text-teal",
    border: "border-teal/45",
    bg: "bg-teal/10",
    dot: "bg-teal",
    chip: "border-teal/35 text-teal",
  },
  coral: {
    text: "text-coral",
    border: "border-coral/45",
    bg: "bg-coral/10",
    dot: "bg-coral",
    chip: "border-coral/35 text-coral",
  },
  ice: {
    text: "text-ice",
    border: "border-ice/45",
    bg: "bg-ice/10",
    dot: "bg-ice",
    chip: "border-ice/35 text-ice",
  },
};

/** Bento spans so the grid isn't a uniform list of identical cards. */
const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

/** Renders a paragraph, promoting **spans** to the accent colour + semibold. */
function Paragraph({ text, accent }: { text: string; accent: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="text-[15px] leading-[1.9] text-chalk/75">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className={`font-semibold ${accent}`}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

function Reader({ post, onClose }: { post: Post; onClose: () => void }) {
  const a = ACCENT[post.tone];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[95] overflow-y-auto bg-ink/97 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="fixed right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-ink/80 text-chalk transition-colors hover:border-coral hover:text-coral"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <article
        className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-24"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "intro-word 480ms cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
            {post.date}
          </span>
          <span className="h-px w-6 bg-line" />
          <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>
            {post.read} read
          </span>
        </div>

        <h2 className="mt-4 font-display text-[clamp(1.75rem,5vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.035em] text-chalk">
          {post.title}
        </h2>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full border bg-ink-2/70 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] ${a.chip}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className={`mt-8 h-px w-full ${a.dot} opacity-25`} />

        <div className="mt-8 space-y-6">
          {post.body.map((p, i) => (
            <Paragraph key={i} text={p} accent={a.text} />
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4 border-t border-line pt-6">
          <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            Ikram Aissiou · Algiers
          </span>
          <button
            onClick={onClose}
            className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-chalk"
          >
            close ✕
          </button>
        </div>
      </article>
    </div>
  );
}

export default function Blog() {
  const [open, setOpen] = useState<Post | null>(null);

  return (
    <>
      <p className="reveal max-w-2xl text-[15px] leading-[1.85] text-chalk/75">{BLOG_INTRO}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {POSTS.map((post, i) => {
          const a = ACCENT[post.tone];
          const external = Boolean(post.link);

          const Inner = (
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-ink-2/45 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-ink-3/70 sm:p-7 ${
                external ? "" : "cursor-pointer"
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100 ${a.dot}`}
              />
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
                style={{
                  backgroundColor:
                    post.tone === "gold"
                      ? "#f2c14e"
                      : post.tone === "teal"
                        ? "#4fd1b5"
                        : post.tone === "coral"
                          ? "#ff7e6b"
                          : "#9cc0ff",
                }}
              />

              <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  {post.date}
                </span>
                <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>
                  {post.read}
                </span>
                {external && (
                  <span className="font-mono text-[11px] text-mute transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold">
                    ↗
                  </span>
                )}
              </div>

              <h3 className="relative mt-3 font-display text-[20px] font-semibold leading-tight tracking-[-0.028em] text-chalk transition-colors duration-500 group-hover:text-gold sm:text-[22px]">
                {post.title}
              </h3>

              <p className="relative mt-3 flex-1 text-[14px] leading-relaxed text-mute">
                {post.excerpt}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line bg-ink/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-mute"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="relative mt-5 flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-mute/70">
                <span className={`h-1 w-1 rounded-full ${a.dot}`} />
                {external ? "read externally" : "read"}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          );

          return (
            <div key={post.slug} className={`reveal ${SPANS[i % SPANS.length]}`} style={{ ["--rd" as string]: `${i * 70}ms` }}>
              {external ? (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full no-underline"
                >
                  {Inner}
                </a>
              ) : (
                <button onClick={() => setOpen(post)} className="block w-full text-left">
                  {Inner}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {open && <Reader post={open} onClose={() => setOpen(null)} />}
    </>
  );
}
