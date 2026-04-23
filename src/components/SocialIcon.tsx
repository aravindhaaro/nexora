import { Dribbble, Globe, Instagram, Linkedin, Twitter } from "lucide-react";

interface SocialIconProps {
  label: string;
  className?: string;
}

export function SocialIcon({ label, className }: SocialIconProps) {
  const normalized = label.trim().toLowerCase();

  if (normalized.includes("twitter") || normalized === "x") {
    return <Twitter className={className} aria-hidden="true" />;
  }
  if (normalized.includes("instagram")) {
    return <Instagram className={className} aria-hidden="true" />;
  }
  if (normalized.includes("linkedin")) {
    return <Linkedin className={className} aria-hidden="true" />;
  }
  if (normalized.includes("dribbble")) {
    return <Dribbble className={className} aria-hidden="true" />;
  }

  return <Globe className={className} aria-hidden="true" />;
}
