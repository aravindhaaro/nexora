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

export type CinematicEffect =
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

export interface CinematicSceneContent {
  image: string;
  caption: string;
  cameraLabel: string;
  effect: CinematicEffect;
  overlayWord?: string;
  kicker?: string;
  body?: string;
}

export const siteContent = {
  brand: {
    name: "Nexora",
    ownerName: "Nexora Designs",
    location: "Qatar",
    email: "aravindhaaro2127@gmail.com",
    phone: "+974 70480335",
    established: "2025",
    country: "Qatar",
  },
  nav: {
    primaryLinks: [
      { label: "Work", to: "/" },
      { label: "About", to: "/about" },
      // { label: "Contact", to: "/contact" },
    ],
    socialLinks: [
      { shortLabel: "TW", label: "Twitter", href: "https://twitter.com" },
      { shortLabel: "IG", label: "Instagram", href: "https://instagram.com" },
      { shortLabel: "DRIB", label: "Dribbble", href: "https://dribbble.com" },
      { shortLabel: "LIN", label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  footer: {
    ctaTitle: "Let's connect.",
    rightsLabel: "All rights reserved.",
    neonText: {
      brand: "Nexora",
      separator: "—",
      words: ["Crafting", "Dreams", "with", "Celestial", "Quality"],
    },
    socialGroups: [
      {
        category: "For Networking",
        links: [{ label: "LinkedIn", href: "https://linkedin.com" }],
      },
      {
        category: "For Updates",
        links: [
          { label: "Twitter", href: "https://twitter.com" },
          { label: "Instagram", href: "https://instagram.com" },
        ],
      },
      {
        category: "For Work",
        links: [{ label: "Dribbble", href: "https://dribbble.com" }],
      },
    ],
  },
  about: {
    heroText:
      "I am a New York based designer and creative director. My career spans over 15 years in the industry building products, digital experiences and brands that play meaningful roles in people's lives.",
    leftSections: [
      {
        title: "Work",
        items: [
          { primary: "Design Studio", secondary: "Creative Director", meta: "2022 — Present" },
          { primary: "Tech Company", secondary: "Senior Designer", meta: "2019 — 2022" },
          { primary: "Agency Name", secondary: "Brand Designer", meta: "2016 — 2019" },
          { primary: "Startup", secondary: "Product Designer", meta: "2014 — 2016" },
        ],
      },
      {
        title: "Jury",
        items: [
          { primary: "Awwwards Site of the Day", meta: "2024" },
          { primary: "D&AD Wood Pencil", meta: "2023" },
          { primary: "Communication Arts Award", meta: "2023" },
          { primary: "CSS Design Awards", meta: "2022" },
        ],
      },
      {
        title: "Speaker",
        items: [
          { primary: "Design Conference", secondary: "New York", meta: "2024" },
          { primary: "Brand Summit", secondary: "London", meta: "2023" },
          { primary: "Creative Mornings", secondary: "Los Angeles", meta: "2023" },
        ],
      },
    ],
    bioParagraphs: [
      "For over a decade, I've been helping startups and established companies tell their stories through design. I believe that great brands are built on clarity-knowing who you are, who you serve, and what you stand for.",
      "My approach is rooted in strategy, but expressed through craft. I start every project by asking hard questions: What's the real problem we're solving? What does success look like? Only after understanding the fundamentals do I move into visual exploration.",
      "I've had the privilege of working with companies at every stage-from pre-launch startups finding their voice to Fortune 500 companies reimagining their visual identity. Each project teaches me something new about the power of design to shape perception and drive action.",
      "I'm currently available for select projects and consulting engagements. If you're working on something interesting, I'd love to hear about it.",
    ],
    clientsTitle: "Our Clients",
    clients: [
      "Apple",
      "Google",
      "Spotify",
      "Nike",
      "Airbnb",
      "Stripe",
      "Notion",
      "Figma",
      "Linear",
      "Vercel",
      "Pitch",
      "Framer",
    ],
  },
  cinematic: {
    scenes: [
      {
        image: bagStreet,
        overlayWord: "D E S I G N S",
        kicker: "A B O U T   U S",
        caption: "NEXORA - established 2025, Qatar.",
        body: "We provide superior packaging products. Our in-house design team and high-quality print capabilities have earned us a reputation for custom-print packaging solutions.",
        cameraLabel: "Tracking shot",
        effect: "tracking",
      },
      {
        image: boxGlove,
        kicker: "Customised Paper Box",
        caption: "Held in the hand. Crafted with weight.",
        body: "Competitive pricing, committed lead-times, and excellent after-sales service - the three pillars of our success.",
        cameraLabel: "Close-up",
        effect: "close-up",
      },
      {
        image: suiteDark,
        overlayWord: "O U R   S E R V I C E S",
        kicker: "What we make",
        caption: "Packaging - designed and made.",
        body: "Paper Cups · Paper Bags · Paper Boxes · Plastic Cups · Business Cards · Thank You Cards · Custom Printing.",
        cameraLabel: "Wide angle",
        effect: "wide-angle",
      },
      {
        image: cupSmoke,
        kicker: "Customised Paper Cups",
        caption: "Vapor lifts. The mark remains.",
        cameraLabel: "Zoom in",
        effect: "zoom-in",
      },
      {
        image: cupsTrio,
        kicker: "Customised PET Cups",
        caption: "Three vessels. One identity.",
        cameraLabel: "Orbit",
        effect: "orbit",
      },
      {
        image: shelfObjects,
        overlayWord: "D E S I G N S",
        kicker: "In-house studio",
        caption: "Objects of ritual, lined like architecture.",
        cameraLabel: "Pan right",
        effect: "pan-right",
      },
      {
        image: paperRoll,
        overlayWord: "O U R   V I S I O N",
        kicker: "The horizon",
        caption: "Qatar's leading provider of sustainable packaging.",
        body: "We aim to set the standard for sustainable, design-led packaging across the region.",
        cameraLabel: "Aerial shot",
        effect: "aerial",
      },
      {
        image: cupHand,
        kicker: "Customised Paper Cups",
        caption: "A quiet exchange between hand and form.",
        cameraLabel: "Handheld",
        effect: "handheld",
      },
      {
        image: cafeScene,
        kicker: "Customised Paper Bags",
        caption: "Steam, light, presence.",
        body: "We invite expected customers to get in touch - to offer the chance to design a packaging arrangement modified to your needs.",
        cameraLabel: "Dolly forward",
        effect: "dolly-forward",
      },
      {
        image: suiteLight,
        overlayWord: "O U R   M I S S I O N",
        kicker: "Our mission",
        caption: "Renewable. Sustainable. Crafted to standard.",
        body: "We attract like-minded customers seeking environmentally friendly products - manufactured from renewable resources, following industry best-practice and the highest international production standards.",
        cameraLabel: "Zoom out",
        effect: "zoom-out",
      },
    ] as CinematicSceneContent[],
    finale: {
      logoSubtitle: "Nexora · Designs",
      locationLine: "Qatar · Est. 2025",
      closingKicker: "Stillness · Reflection · Identity",
    },
  },
};
