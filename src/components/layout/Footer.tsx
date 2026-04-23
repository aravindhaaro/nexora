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
      <div className="relative h-[340px] border-b border-white/10 md:h-[600px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(94,155,255,0.18),transparent_38%),radial-gradient(circle_at_85%_75%,rgba(203,114,255,0.14),transparent_40%),radial-gradient(circle_at_10%_85%,rgba(255,187,94,0.1),transparent_35%)]" />
              <div className="solar-core" />
              <div className="orbit-ring orbit-ring-one">
                <span className="orbit-planet">
                  <PlanetIcon name="earth" className="planet-photo h-6 w-6 md:h-7 md:w-7" />
                </span>
              </div>
              <div className="orbit-ring orbit-ring-two">
                <span className="orbit-planet">
                  <PlanetIcon name="saturn" className="planet-photo h-7 w-7 md:h-9 md:w-9" />
                </span>
              </div>
              <div className="orbit-ring orbit-ring-three">
                <span className="orbit-planet">
                  <PlanetIcon name="jupiter" className="planet-photo h-8 w-8 md:h-10 md:w-10" />
                </span>
              </div>
              <div className="orbit-ring orbit-ring-four">
                <span className="orbit-planet orbit-planet-mercury">
                  <PlanetIcon name="mercury" className="planet-photo h-5 w-5 md:h-6 md:w-6" />
                </span>
                <span className="orbit-planet orbit-planet-venus">
                  <PlanetIcon name="venus" className="planet-photo h-6 w-6 md:h-7 md:w-7" />
                </span>
                <span className="orbit-planet orbit-planet-mars">
                  <PlanetIcon name="mars" className="planet-photo h-5 w-5 md:h-6 md:w-6" />
                </span>
                <span className="orbit-planet orbit-planet-neptune">
                  <PlanetIcon name="neptune" className="planet-photo h-6 w-6 md:h-8 md:w-8" />
                </span>
              </div>
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