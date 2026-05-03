import { Link, useLocation } from "react-router-dom";
import { siteContent } from "@/data/siteContent";
import { SocialIcon } from "@/components/SocialIcon";
import mercuryImage from "@/assets/planets/mercury.jpg";
import venusImage from "@/assets/planets/venus.jpg";
import earthImage from "@/assets/planets/earth.jpg";
import marsImage from "@/assets/planets/mars.jpg";
import jupiterImage from "@/assets/planets/jupiter.jpg";
import saturnImage from "@/assets/planets/saturn.jpg";
import neptuneImage from "@/assets/planets/neptune.jpg";

type PlanetName =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "neptune";

const PLANET_IMAGE_BY_NAME: Record<PlanetName, string> = {
  mercury: mercuryImage,
  venus: venusImage,
  earth: earthImage,
  mars: marsImage,
  jupiter: jupiterImage,
  saturn: saturnImage,
  neptune: neptuneImage,
};

function PlanetIcon({ name, className }: { name: PlanetName; className?: string }) {
  return (
    <img
      src={PLANET_IMAGE_BY_NAME[name]}
      alt={`${name} planet`}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function Footer() {
  const { brand, footer, nav } = siteContent;
  const location = useLocation();
  const showWaterFooter = location.pathname === "/about";

  return (
    <footer className="relative bg-black text-white">
      <div className="relative h-[340px] overflow-hidden border-b border-white/10 md:h-[600px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(180,200,255,0.18),transparent_45%),radial-gradient(circle_at_15%_20%,rgba(120,140,200,0.12),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(150,170,220,0.1),transparent_45%)]" />
          <div className="moon-stars" />
          <div className="moon-rays" />
          <div className="moon-primary">
            <div className="moon-craters" />
            <div className="moon-shadow" />
            <div className="moon-glow" />
          </div>
          <div className="moon-phase-ring">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="moon-phase-slot" style={{ ["--i" as string]: i }}>
                <span className={`moon-phase moon-phase-${i}`} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-b border-white/10 overflow-hidden bg-black py-6 md:py-8">
        <div className="neon-line-track">
          <span className="neon-line-text" aria-label={`${footer.neonText.brand} ${footer.neonText.separator} ${footer.neonText.words.join(' ')}`}>
            {Array.from({ length: 4 }).map((_, copyIdx) => {
              return (
                <span key={copyIdx} className="neon-phrase" aria-hidden={copyIdx > 0 ? "true" : undefined}>
                  <span className="neon-brand">{footer.neonText.brand}</span>
                  <span className="neon-sep">{footer.neonText.separator}</span>
                  {footer.neonText.words.map((w, i) => (
                    <span
                      key={i}
                      className="neon-word"
                      style={{ animationDelay: `${i * 0.45}s` }}
                    >
                      {w}
                    </span>
                  ))}
                </span>
              );
            })}
          </span>
        </div>
      </div>

      <div className="container relative z-10 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 mb-8">
          {footer.socialGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-4">{group.category}</p>
              <div className="flex items-center gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white hover:text-gray-300 transition-colors"
                  >
                    <SocialIcon label={link.label} className="h-[18px] w-[18px]" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {brand.ownerName}. {footer.rightsLabel}
          </p>
          <nav className="flex items-center gap-8">
            {nav.primaryLinks.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-gray-500 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}