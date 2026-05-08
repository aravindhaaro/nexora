// Product design catalog — sample royalty-free images.
// Replace `thumbnail` and `image` fields with your own assets later.

export interface ProductDesign {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

export interface ProductType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  thumbnail: string;
  accent: string; // tailwind-friendly hsl
  designs: ProductDesign[];
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const productTypes: ProductType[] = [
  {
    id: "cups",
    name: "Cups",
    tagline: "Paper · PET · Custom prints",
    description: "Single, double-wall and ripple paper cups crafted for hot and cold beverages.",
    thumbnail: u("photo-1517256064527-09c73fc73e38"),
    accent: "hsl(28, 95%, 60%)",
    designs: [
      {
        id: "cup-craft-kraft",
        title: "Craft Kraft Series",
        subtitle: "Earthy double-wall paper cups with bold typography.",
        description: "Recycled kraft body, food-safe lining, four custom print zones for branding.",
        image: u("photo-1495474472287-4d71bcdd2085"),
        tags: ["PAPER", "DOUBLE-WALL"],
        color: "hsl(28, 80%, 55%)",
      },
      {
        id: "cup-minimal-mono",
        title: "Minimal Mono",
        subtitle: "Mono-tone branding for boutique cafés.",
        description: "Matte finish, single-color print, suited for specialty coffee programs.",
        image: u("photo-1509042239860-f550ce710b93"),
        tags: ["PAPER", "MATTE"],
        color: "hsl(40, 30%, 75%)",
      },
      {
        id: "cup-pet-clear",
        title: "PET Clear Cold",
        subtitle: "Crystal-clear PET cups for cold drinks.",
        description: "12oz / 16oz / 22oz formats with dome and flat lid options.",
        image: u("photo-1513558161293-cdaf765ed2fd"),
        tags: ["PET", "COLD"],
        color: "hsl(195, 60%, 70%)",
      },
      {
        id: "cup-festive",
        title: "Festive Edition",
        subtitle: "Limited seasonal artwork wrap.",
        description: "Full-bleed seasonal artwork with metallic accents.",
        image: u("photo-1559056199-641a0ac8b55e"),
        tags: ["LIMITED", "SEASONAL"],
        color: "hsl(0, 70%, 55%)",
      },
    ],
  },
  {
    id: "boxes",
    name: "Boxes",
    tagline: "Mailer · Pizza · Gift · Custom",
    description: "Structural packaging from corrugated mailers to luxury rigid gift boxes.",
    thumbnail: u("photo-1607344645866-009c320b63e0"),
    accent: "hsl(15, 70%, 55%)",
    designs: [
      {
        id: "box-mailer",
        title: "Signature Mailer",
        subtitle: "E-commerce ready corrugated mailer.",
        description: "Tear strip, double-wall protection, full color outer print.",
        image: u("photo-1607082348824-0a96f2a4b9da"),
        tags: ["MAILER", "E-COMMERCE"],
        color: "hsl(20, 50%, 50%)",
      },
      {
        id: "box-pizza",
        title: "Wood-Fired Pizza Box",
        subtitle: "Vented kraft pizza box.",
        description: "Steam vents, grease-resistant inner liner, 9 / 12 / 14 inch.",
        image: u("photo-1604382354936-07c5d9983bd3"),
        tags: ["FOOD", "KRAFT"],
        color: "hsl(35, 60%, 45%)",
      },
      {
        id: "box-rigid-gift",
        title: "Rigid Gift Box",
        subtitle: "Magnetic closure luxury box.",
        description: "Soft-touch lamination, foil stamp, satin ribbon insert.",
        image: u("photo-1549465220-1a8b9238cd48"),
        tags: ["LUXURY", "RIGID"],
        color: "hsl(345, 40%, 35%)",
      },
      {
        id: "box-bakery",
        title: "Bakery Window Box",
        subtitle: "Display-window pastry box.",
        description: "Clear PET window, fold-flat shipping, food-grade board.",
        image: u("photo-1568827999250-3f6afff96e66"),
        tags: ["BAKERY", "WINDOW"],
        color: "hsl(40, 70%, 70%)",
      },
    ],
  },
  {
    id: "transparent-containers",
    name: "Transparent Containers",
    tagline: "Deli · Salad · Take-away",
    description: "Crystal-clear food containers that show off what's inside.",
    thumbnail: u("photo-1542838132-92c53300491e"),
    accent: "hsl(195, 80%, 55%)",
    designs: [
      {
        id: "tc-salad-bowl",
        title: "Salad Bowl 750ml",
        subtitle: "Stackable round PET bowl.",
        description: "Snap-tight lid, leak-resistant, microwave-safe variant available.",
        image: u("photo-1546069901-ba9599a7e63c"),
        tags: ["PET", "SALAD"],
        color: "hsl(140, 50%, 55%)",
      },
      {
        id: "tc-deli",
        title: "Deli Tub",
        subtitle: "Square deli container with hinged lid.",
        description: "8oz, 12oz, 16oz, 32oz. Tamper-evident option.",
        image: u("photo-1565299624946-b28f40a0ae38"),
        tags: ["DELI", "HINGED"],
        color: "hsl(35, 70%, 60%)",
      },
      {
        id: "tc-fruit",
        title: "Fruit Cube",
        subtitle: "Vented cube for cut fruit & berries.",
        description: "Crisp clarity, vent holes, fits standard refrigeration trays.",
        image: u("photo-1490474418585-ba9bad8fd0ea"),
        tags: ["FRUIT", "VENTED"],
        color: "hsl(350, 70%, 60%)",
      },
      {
        id: "tc-bento",
        title: "Bento Compartment",
        subtitle: "3-section take-away tray.",
        description: "Anti-fog clear lid, compostable PLA option.",
        image: u("photo-1604908176997-125f25cc6f3d"),
        tags: ["BENTO", "TAKE-AWAY"],
        color: "hsl(80, 40%, 55%)",
      },
    ],
  },
  {
    id: "bags",
    name: "Bags",
    tagline: "Paper · Kraft · Boutique",
    description: "Carry bags from grocery kraft to ribbon-handle boutique pieces.",
    thumbnail: u("photo-1591375275624-c2bf7c029610"),
    accent: "hsl(45, 90%, 55%)",
    designs: [
      {
        id: "bag-boutique",
        title: "Boutique Ribbon Bag",
        subtitle: "Twisted satin handle, matte laminated.",
        description: "Premium retail bag with reinforced base and custom foil print.",
        image: u("photo-1592503254549-d83d24a4dfab"),
        tags: ["RETAIL", "MATTE"],
        color: "hsl(0, 0%, 15%)",
      },
      {
        id: "bag-kraft",
        title: "Kraft Twisted Handle",
        subtitle: "Eco-friendly grocery & take-away bag.",
        description: "100% recyclable, multiple sizes, single-color custom print.",
        image: u("photo-1572584642822-6f8de0243c93"),
        tags: ["ECO", "KRAFT"],
        color: "hsl(35, 50%, 50%)",
      },
      {
        id: "bag-coffee",
        title: "Coffee Carrier",
        subtitle: "2 & 4 cup carry bag.",
        description: "Cup slot insert, kraft body, branded sleeve area.",
        image: u("photo-1600271886742-f049cd451bba"),
        tags: ["COFFEE", "CARRIER"],
        color: "hsl(25, 60%, 40%)",
      },
      {
        id: "bag-luxe",
        title: "Luxe Rope Handle",
        subtitle: "Heavyweight art-paper bag.",
        description: "210gsm board, cotton rope handle, hot foil branding.",
        image: u("photo-1582738411706-bfc8e691d1c2"),
        tags: ["LUXURY", "FOIL"],
        color: "hsl(220, 30%, 25%)",
      },
    ],
  },
  {
    id: "sippers",
    name: "Sippers",
    tagline: "Reusable · Branded · On-the-go",
    description: "Sipper bottles and tumblers for events, retail and merchandise.",
    thumbnail: u("photo-1602143407151-7111542de6e8"),
    accent: "hsl(280, 70%, 65%)",
    designs: [
      {
        id: "sipper-tumbler",
        title: "Insulated Tumbler",
        subtitle: "Double-wall stainless tumbler.",
        description: "Powder-coated body, laser-engraved branding zone.",
        image: u("photo-1523362628745-0c100150b504"),
        tags: ["INSULATED", "STAINLESS"],
        color: "hsl(220, 20%, 30%)",
      },
      {
        id: "sipper-sport",
        title: "Sport Squeeze",
        subtitle: "Soft-flex sport sipper.",
        description: "BPA-free, leak-proof valve, full-wrap print.",
        image: u("photo-1519864600265-abb23847ef2c"),
        tags: ["SPORT", "FLEX"],
        color: "hsl(150, 60%, 45%)",
      },
      {
        id: "sipper-kid",
        title: "Kids Pop-Top",
        subtitle: "Playful pop-top kids bottle.",
        description: "Bright colors, character print zone, dishwasher safe.",
        image: u("photo-1520975916090-3105956dac38"),
        tags: ["KIDS", "POP-TOP"],
        color: "hsl(45, 90%, 55%)",
      },
      {
        id: "sipper-glass",
        title: "Glass Carry Sipper",
        subtitle: "Borosilicate glass with silicone sleeve.",
        description: "Eco premium, customizable sleeve color.",
        image: u("photo-1556909114-44e3e9399a2f"),
        tags: ["GLASS", "PREMIUM"],
        color: "hsl(195, 50%, 60%)",
      },
    ],
  },
  {
    id: "glass",
    name: "Glassware",
    tagline: "Jars · Bottles · Vessels",
    description: "Glass containers for food, beverages, candles and apothecary.",
    thumbnail: u("photo-1550985616-10810253b84d"),
    accent: "hsl(160, 60%, 50%)",
    designs: [
      {
        id: "glass-jar",
        title: "Apothecary Jar",
        subtitle: "Amber glass with cork.",
        description: "100ml–500ml, custom screen-print available.",
        image: u("photo-1611078489935-0cb964de46d6"),
        tags: ["APOTHECARY", "AMBER"],
        color: "hsl(30, 70%, 40%)",
      },
      {
        id: "glass-bottle",
        title: "Cold-Press Bottle",
        subtitle: "Slim cold-press juice bottle.",
        description: "250 / 350ml, tamper-evident cap.",
        image: u("photo-1601004890684-d8cbf643f5f2"),
        tags: ["JUICE", "BOTTLE"],
        color: "hsl(80, 50%, 55%)",
      },
      {
        id: "glass-candle",
        title: "Candle Vessel",
        subtitle: "Frosted candle vessel.",
        description: "Heat-rated glass, custom etching, lid options.",
        image: u("photo-1602874801007-bd458bb1b8b6"),
        tags: ["CANDLE", "FROSTED"],
        color: "hsl(0, 0%, 92%)",
      },
      {
        id: "glass-tumbler",
        title: "Branded Tumbler",
        subtitle: "Café-grade drinking tumbler.",
        description: "Stackable, custom logo wrap printing.",
        image: u("photo-1572455024910-95da1b3a1b2e"),
        tags: ["CAFÉ", "TUMBLER"],
        color: "hsl(195, 40%, 70%)",
      },
    ],
  },
  {
    id: "wrappers",
    name: "Wrappers",
    tagline: "Burger · Sandwich · Greaseproof",
    description: "Greaseproof wraps and sheets for fast-casual food service.",
    thumbnail: u("photo-1568901346375-23c9450c58cd"),
    accent: "hsl(0, 80%, 60%)",
    designs: [
      {
        id: "wrap-burger",
        title: "Burger Wrap",
        subtitle: "Foil-lined greaseproof wrap.",
        description: "Keeps burgers warm, full-color custom print.",
        image: u("photo-1571091718767-18b5b1457add"),
        tags: ["BURGER", "FOIL"],
        color: "hsl(15, 70%, 55%)",
      },
      {
        id: "wrap-sandwich",
        title: "Sandwich Wax Wrap",
        subtitle: "Natural wax-coated paper.",
        description: "FSC-certified paper, branded repeat pattern.",
        image: u("photo-1539252554453-80ab65ce3586"),
        tags: ["SANDWICH", "WAX"],
        color: "hsl(40, 50%, 70%)",
      },
      {
        id: "wrap-deli-sheet",
        title: "Deli Tissue Sheet",
        subtitle: "Lightweight deli wrap sheet.",
        description: "Pre-cut, food-safe ink, multiple sizes.",
        image: u("photo-1497635701590-9da6cab853db"),
        tags: ["DELI", "SHEET"],
        color: "hsl(0, 0%, 95%)",
      },
      {
        id: "wrap-cone",
        title: "Fries & Snack Cone",
        subtitle: "Open-top printed snack cone.",
        description: "Greaseproof, custom artwork, stand-friendly base.",
        image: u("photo-1630384060421-cb20d0e0649d"),
        tags: ["FRIES", "CONE"],
        color: "hsl(50, 90%, 55%)",
      },
    ],
  },
];

export const getProductType = (id: string) =>
  productTypes.find((p) => p.id === id);
