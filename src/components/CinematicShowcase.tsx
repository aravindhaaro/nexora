import { useEffect, useRef, useState, ReactNode } from "react";
import bagStreet from "@/assets/nx-bag-street.jpg";
import boxGlove from "@/assets/nx-box-glove.jpg";
import suiteDark from "@/assets/nx-suite-dark.jpg";
import suiteLight from "@/assets/nx-suite-light.jpg";
import cupSmoke from "@/assets/nx-cup-smoke.jpg";
import cupsTrio from "@/assets/nx-cups-trio.jpg";
import shelfObjects from "@/assets/nx-shelf-objects.jpg";
import paperRoll from "@/assets/nx-paper-roll.jpg";
import cupHand from "@/assets/nx-cup-hand.jpg";
import cafeScene from "@/assets/nx-cafe-scene.jpg";

/**
 * useScrollProgress
 * Returns a 0..1 value representing how far the section has progressed
 * through the viewport. 0 = section just entering from bottom, 1 = leaving top.
 */
function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // total scroll distance during which the section is visible
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      const p = Math.max(0, Math.min(1, traveled / total));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref]);

  return progress;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

interface SceneProps {
  image: string;
  caption: string;
  cameraLabel: string;
  effect:
    | "zoom-in"
    | "zoom-out"
    | "pan-left"
    | "pan-right"
    | "dolly-forward"
    | "orbit"
    | "aerial"
    | "wide-angle"
    | "close-up"
    | "handheld"
    | "tracking";
  /** Large spaced display word, e.g. "D E S I G N S" */
  overlayWord?: string;
  /** Small kicker label above caption, e.g. "OUR VISION" */
  kicker?: string;
  /** Optional supporting paragraph under caption */
  body?: string;
}

function Scene({ image, caption, cameraLabel, effect, overlayWord, kicker, body }: SceneProps) {
  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref);
  // ease the progress for nicer motion
  const t = progress;

  let transform = "";
  let filter = "brightness(0.85) contrast(1.05)";
  const originX = 50;
  const originY = 50;
  let extraStyle: React.CSSProperties = {};

  switch (effect) {
    case "zoom-in": {
      const scale = lerp(1.0, 1.45, t);
      transform = `scale(${scale})`;
      break;
    }
    case "zoom-out": {
      const scale = lerp(1.6, 1.0, t);
      transform = `scale(${scale})`;
      break;
    }
    case "pan-left": {
      const x = lerp(8, -8, t);
      transform = `translate3d(${x}%, 0, 0) scale(1.2)`;
      break;
    }
    case "pan-right": {
      const x = lerp(-8, 8, t);
      transform = `translate3d(${x}%, 0, 0) scale(1.2)`;
      break;
    }
    case "dolly-forward": {
      const scale = lerp(1.05, 1.5, t);
      const y = lerp(4, -4, t);
      transform = `translate3d(0, ${y}%, 0) scale(${scale})`;
      break;
    }
    case "orbit": {
      // orbit hint: small rotation + horizontal swing
      const rot = lerp(-6, 6, t);
      const x = lerp(-5, 5, t);
      transform = `perspective(1200px) rotateY(${rot}deg) translate3d(${x}%, 0, 0) scale(1.18)`;
      break;
    }
    case "aerial": {
      // top-down feel: tilt + slow drift down
      const rotX = lerp(8, -2, t);
      const y = lerp(-6, 6, t);
      transform = `perspective(1400px) rotateX(${rotX}deg) translate3d(0, ${y}%, 0) scale(1.2)`;
      break;
    }
    case "wide-angle": {
      // start wide (small) and barrel slightly
      const scale = lerp(1.0, 1.1, t);
      transform = `scale(${scale})`;
      extraStyle = { transformOrigin: "50% 60%" };
      break;
    }
    case "close-up": {
      const scale = lerp(1.4, 1.7, t);
      transform = `scale(${scale})`;
      extraStyle = { transformOrigin: "50% 45%" };
      break;
    }
    case "handheld": {
      // subtle shake driven by progress
      const wobbleX = Math.sin(t * Math.PI * 6) * 1.2;
      const wobbleY = Math.cos(t * Math.PI * 5) * 1.0;
      const rot = Math.sin(t * Math.PI * 4) * 0.8;
      transform = `translate3d(${wobbleX}%, ${wobbleY}%, 0) rotate(${rot}deg) scale(1.15)`;
      break;
    }
    case "tracking": {
      // smooth lateral tracking with slight forward push
      const x = lerp(-12, 12, t);
      const scale = lerp(1.15, 1.25, t);
      transform = `translate3d(${x}%, 0, 0) scale(${scale})`;
      break;
    }
  }

  // Vignette + caption fade tied to progress
  const captionOpacity = Math.min(1, Math.max(0, (t - 0.15) * 2.2));
  const captionTranslate = lerp(20, 0, Math.min(1, t * 1.5));

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Image layer */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={caption}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{
            transform,
            transformOrigin: `${originX}% ${originY}%`,
            filter,
            ...extraStyle,
          }}
          loading="lazy"
        />
      </div>

      {/* Cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
      {/* Top + bottom letterbox fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Giant spaced display word — drifts in from the side */}
      {overlayWord && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
          style={{
            opacity: Math.min(0.18, t * 0.25),
            transform: `translateX(${lerp(-40, 40, t)}px)`,
          }}
        >
          <span className="text-white font-light tracking-[0.35em] text-[14vw] md:text-[10vw] leading-none whitespace-nowrap select-none">
            {overlayWord}
          </span>
        </div>
      )}

      {/* Caption */}
      <div
        className="absolute bottom-16 left-6 right-6 md:left-20 md:right-20 flex items-end justify-between gap-8"
        style={{
          opacity: captionOpacity,
          transform: `translateY(${captionTranslate}px)`,
          transition: "opacity 120ms linear",
        }}
      >
        <div className="max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-3">
            {kicker ?? cameraLabel}
          </div>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
            {caption}
          </h2>
          {body && (
            <p className="mt-5 text-white/65 text-sm md:text-base max-w-xl leading-relaxed">
              {body}
            </p>
          )}
        </div>
        <div className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-white/40 self-end pb-2">
          NEXORA · {cameraLabel}
        </div>
      </div>
    </section>
  );
}

/* ------------- Final water + lilies finale ------------- */

function WaterFinale() {
  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const tick = (now: number) => {
      setTime((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // logo gentle bobbing on water
  const bobY = Math.sin(time * 1.1) * 6;
  const bobRot = Math.sin(time * 0.7) * 1.2;
  const logoScale = lerp(0.7, 1, Math.min(1, progress * 1.6));
  const logoOpacity = Math.min(1, progress * 1.8);

  // lily sway helper
  const sway = (seed: number, amp = 6) =>
    Math.sin(time * 0.8 + seed) * amp;

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#05070a]"
    >
      {/* Deep water gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0e1620_0%,#05080c_55%,#000_100%)]" />

      {/* Animated water ripples (SVG) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="ripple" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="rgba(180,210,230,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => {
          const r = 120 + i * 90 + (Math.sin(time * 0.6 + i) + 1) * 40;
          return (
            <ellipse
              key={i}
              cx={600 + Math.sin(time * 0.3 + i) * 30}
              cy={500}
              rx={r}
              ry={r * 0.18}
              fill="none"
              stroke="rgba(170,200,225,0.18)"
              strokeWidth={1}
            />
          );
        })}
        <ellipse cx="600" cy="500" rx="500" ry="100" fill="url(#ripple)" />
      </svg>

      {/* Reflected light shimmer */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-60"
        style={{
          background:
            "linear-gradient(to top, rgba(120,160,200,0.08), transparent)",
        }}
      />

      {/* Lily pads — SVG shapes scattered around */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: "12%", y: "62%", size: 110, seed: 0.3, hue: 150 },
          { x: "78%", y: "58%", size: 130, seed: 1.1, hue: 145 },
          { x: "22%", y: "78%", size: 90, seed: 2.0, hue: 155 },
          { x: "70%", y: "80%", size: 100, seed: 2.7, hue: 148 },
          { x: "45%", y: "72%", size: 80, seed: 3.4, hue: 152 },
          { x: "88%", y: "72%", size: 70, seed: 4.1, hue: 150 },
          { x: "5%", y: "76%", size: 75, seed: 5.0, hue: 146 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              transform: `translate(-50%, -50%) translate(${sway(
                p.seed,
                4
              )}px, ${sway(p.seed + 1, 2)}px) rotate(${sway(p.seed, 3)}deg)`,
            }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {/* lily pad */}
              <path
                d="M50 8 A 42 42 0 1 1 49.9 8 L50 50 Z"
                fill={`hsl(${p.hue} 30% 12%)`}
                stroke={`hsl(${p.hue} 25% 22%)`}
                strokeWidth="0.6"
                opacity="0.9"
              />
              {/* lily flower */}
              <g transform="translate(50 50)">
                {[0, 1, 2, 3, 4, 5].map((k) => (
                  <ellipse
                    key={k}
                    rx="3"
                    ry="9"
                    fill="rgba(245,240,230,0.85)"
                    transform={`rotate(${k * 60 + sway(p.seed + k, 2)}) translate(0 -6)`}
                  />
                ))}
                <circle r="2.4" fill="hsl(45 60% 60%)" />
              </g>
            </svg>
          </div>
        ))}
      </div>

      {/* The floating NX logo */}
      <div
        className="absolute left-1/2 top-1/2 flex flex-col items-center"
        style={{
          transform: `translate(-50%, calc(-50% + ${bobY}px)) rotate(${bobRot}deg) scale(${logoScale})`,
          opacity: logoOpacity,
          filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.7))",
        }}
      >
        <NXLogo className="w-40 md:w-56 text-white" />
        <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/60">
          designs
        </div>
      </div>

      {/* Logo reflection */}
      <div
        className="absolute left-1/2 top-1/2 flex flex-col items-center"
        style={{
          transform: `translate(-50%, calc(-50% + ${bobY * -1 + 90}px)) scaleY(-0.6) scale(${logoScale})`,
          opacity: logoOpacity * 0.18,
          filter: "blur(4px)",
        }}
      >
        <NXLogo className="w-40 md:w-56 text-white" />
      </div>

      {/* Closing caption */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/40">
          Stillness · Reflection · Identity
        </div>
      </div>
    </section>
  );
}

/* ------------- NX logomark (placeholder you can swap) ------------- */

function NXLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="currentColor"
      aria-label="NX logo"
    >
      {/* N — inverted U */}
      <path d="M20 80 V40 a30 30 0 0 1 60 0 V80 H64 V40 a14 14 0 0 0 -28 0 V80 Z" />
      {/* X — two arches forming X-ish mark */}
      <path d="M180 80 V40 a30 30 0 0 0 -60 0 V80 H136 V40 a14 14 0 0 1 28 0 V80 Z" />
    </svg>
  );
}

/* ------------- Top-center logo slot ------------- */

interface LogoSlotProps {
  src?: string;
  alt?: string;
}

function LogoSlot({ src, alt = "Brand logo" }: LogoSlotProps) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <div
        className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
        aria-label="Logo placeholder — replace with your image"
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />
        ) : (
          <NXLogo className="w-12 md:w-14 text-white" />
        )}
      </div>
    </div>
  );
}

/* ------------- Main showcase ------------- */

interface CinematicShowcaseProps {
  /** Replace this with your own logo image URL when ready */
  logoSrc?: string;
}

export function CinematicShowcase({ logoSrc }: CinematicShowcaseProps) {
  const scenes: SceneProps[] = [
    {
      image: bagStreet,
      caption: "A silhouette walks. The brand follows.",
      cameraLabel: "Tracking shot",
      effect: "tracking",
    },
    {
      image: boxGlove,
      caption: "Held in the hand. Crafted with weight.",
      cameraLabel: "Close-up",
      effect: "close-up",
    },
    {
      image: suiteDark,
      caption: "An entire system, rendered in shadow.",
      cameraLabel: "Wide angle",
      effect: "wide-angle",
    },
    {
      image: cupSmoke,
      caption: "Vapor lifts. The mark remains.",
      cameraLabel: "Zoom in",
      effect: "zoom-in",
    },
    {
      image: cupsTrio,
      caption: "Three vessels. One identity.",
      cameraLabel: "Orbit",
      effect: "orbit",
    },
    {
      image: shelfObjects,
      caption: "Objects of ritual, lined like architecture.",
      cameraLabel: "Pan right",
      effect: "pan-right",
    },
    {
      image: paperRoll,
      caption: "Pattern unspools into the dark.",
      cameraLabel: "Aerial shot",
      effect: "aerial",
    },
    {
      image: cupHand,
      caption: "A quiet exchange between hand and form.",
      cameraLabel: "Handheld",
      effect: "handheld",
    },
    {
      image: cafeScene,
      caption: "Steam, light, presence.",
      cameraLabel: "Dolly forward",
      effect: "dolly-forward",
    },
    {
      image: suiteLight,
      caption: "And then — daylight. The system breathes.",
      cameraLabel: "Zoom out",
      effect: "zoom-out",
    },
  ];

  return (
    <div className="relative bg-black">
      <LogoSlot src={logoSrc} />
      {scenes.map((s, i) => (
        <Scene key={i} {...s} />
      ))}
      <WaterFinale />
    </div>
  );
}
