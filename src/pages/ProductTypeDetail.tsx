import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { getProductType, type ProductDesign, productTypes } from "@/data/productDesigns";

function DesignCard({
  design,
  index,
  variant,
}: {
  design: ProductDesign;
  index: number;
  variant: "large" | "small" | "equal";
}) {
  const isEqual = variant === "equal";
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  // Generate global product code
  const getGlobalProductCode = () => {
    let globalIndex = 0;
    for (const type of productTypes) {
      for (const d of type.designs) {
        if (d.id === design.id) {
          return `NXRA_${String(globalIndex + 1).padStart(2, '0')}`;
        }
        globalIndex++;
      }
    }
    return 'NXRA_01';
  };

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh && rect.bottom > 0) {
        setVisible(true);
        if (!isEqual) {
          const center = rect.top + rect.height / 2;
          setOffset(((center - vh / 2) / vh) * 30);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isEqual]);

  return (
    <div
      ref={ref}
      className={`group block transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`relative mb-4 overflow-hidden rounded-2xl shadow-md ${
          isEqual ? "aspect-square" : variant === "large" ? "aspect-[4/3]" : "aspect-square"
        }`}
        style={{ backgroundColor: design.color }}
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${
            isEqual ? "" : "inset-[-20px]"
          }`}
          style={isEqual ? {} : { transform: `translateY(${offset}px)` }}
        >
          <img
            src={design.image}
            alt={design.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="text-base md:text-lg font-medium text-neutral-900 group-hover:text-amber-600 transition-colors">
          {design.title}
        </h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{design.subtitle}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
          Product Code: {getGlobalProductCode()}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {design.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-xs uppercase tracking-widest text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductTypeDetail = () => {
  const { typeId } = useParams<{ typeId: string }>();
  const navigate = useNavigate();
  const type = typeId ? getProductType(typeId) : undefined;

  if (!type) {
    return (
      <Layout variant="light">
        <div className="min-h-screen flex items-center justify-center bg-yellow-50">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-neutral-900 mb-4">
              Product type not found
            </h1>
            <Link to="/product-designs" className="text-amber-600 hover:underline">
              ← Back to Product Designs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout variant="light">
      <div
        className="min-h-screen"
        style={{
          background: `linear-gradient(160deg, #fffaf0 0%, #ffffff 50%, ${type.accent}1a 100%)`,
        }}
      >
        {/* Hero */}
        <section className="pt-28 lg:pt-36 pb-10 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/product-designs"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-900 transition-colors mb-6 cursor-pointer relative z-20"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Product Designs
            </Link>
            <p
              className="text-[11px] uppercase tracking-[0.4em] mb-4"
              style={{ color: type.accent }}
            >
              {type.tagline}
            </p>
            <h1
              onClick={() => navigate(`/product-designs/${type.id}`)}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.05] cursor-pointer hover:opacity-80 transition-opacity"
            >
              {type.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-neutral-700">
              {type.description}
            </p>
          </div>
        </section>

        {/* Designs grid — 2 columns with equal size */}
        <section className="px-4 sm:px-6 lg:px-20 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {type.designs.map((d, i) => (
                <DesignCard key={d.id} design={d} index={i} variant="equal" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductTypeDetail;
