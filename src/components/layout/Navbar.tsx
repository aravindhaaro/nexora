import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ContactDialog } from "@/components/ContactDialog";
import { siteContent } from "@/data/siteContent";
import { SocialIcon } from "@/components/SocialIcon";

interface NavbarProps {
  variant?: "light" | "dark";
}

// Grid icon (4 squares)
function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
}

// List icon (3 horizontal lines)
function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2" rx="1" />
      <rect x="1" y="7" width="14" height="2" rx="1" />
      <rect x="1" y="12" width="14" height="2" rx="1" />
    </svg>
  );
}

export function Navbar({ variant = "light" }: NavbarProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isDark = variant === "dark";
  const isGridActive = location.pathname === "/";
  const { brand, nav } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const viewToggle = (
    <div
      className={cn(
        "relative flex items-center rounded-full bg-gray-900 transition-all duration-300",
        scrolled ? "shadow-lg" : "shadow-md"
      )}
    >
      <div
        className={cn(
          "absolute top-0 h-full w-14 rounded-full bg-white transition-all duration-300 ease-out",
          isGridActive ? "left-0" : "left-14"
        )}
      />
      <Link
        to="/"
        className={cn(
          "relative z-10 flex h-10 w-14 items-center justify-center transition-colors duration-300",
          isGridActive ? "text-black" : "text-gray-400 hover:text-white"
        )}
        aria-label="Open grid view"
      >
        <GridIcon />
      </Link>
      <Link
        to="/about"
        className={cn(
          "relative z-10 flex h-10 w-14 items-center justify-center transition-colors duration-300",
          !isGridActive ? "text-black" : "text-gray-400 hover:text-white"
        )}
        aria-label="Open list view"
      >
        <ListIcon />
      </Link>
    </div>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 md:py-5 lg:px-20 lg:py-8">
      <div className="flex items-center justify-between">
        <Link 
          to="/" 
          className={cn(
            "text-xs uppercase tracking-[0.12em] font-medium transition-opacity hover:opacity-60",
            isDark ? "text-white" : "text-black"
          )}
        >
          {brand.ownerName}
          <span className={cn(
            "hidden lg:inline lg:ml-2",
            isDark ? "text-gray-500" : "text-gray-400"
          )}>
            {brand.location}
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:flex items-center gap-4">
            {nav.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                  isDark 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-500 hover:text-black"
                )}
              >
                <SocialIcon label={link.label} className="h-4 w-4" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col items-end gap-2">
            <ContactDialog
              trigger={
                <button
                  type="button"
                  className={cn(
                    "text-xs uppercase tracking-[0.12em] font-medium transition-opacity hover:opacity-60",
                    isDark ? "text-white" : "text-black"
                  )}
                >
                  Contact Us
                </button>
              }
            />
            <div>{viewToggle}</div>
          </div>
        </div>
      </div>
    </header>
  );
}