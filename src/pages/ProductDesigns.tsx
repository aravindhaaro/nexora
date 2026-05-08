import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { productTypes } from "@/data/productDesigns";

const ProductDesigns = () => {
  return (
    <Layout variant="light">
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-100">
        {/* Hero */}
        <section className="pt-28 lg:pt-36 pb-10 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.4em] text-amber-600 mb-4 animate-fade-in">
              Nexora · Catalog
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.05] animate-fade-in">
              Product <span className="italic text-amber-500">Designs</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-neutral-600 animate-fade-in">
              Browse our packaging product families. Tap any tile to explore the
              full range of designs we craft for our customers.
            </p>
          </div>
        </section>

        {/* Tile grid — 4 columns on desktop */}
        <section className="px-4 sm:px-6 lg:px-20 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {productTypes.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/product-designs/${p.id}`}
                  className="group relative block overflow-hidden rounded-3xl bg-white border border-neutral-200/70 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.thumbnail}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"
                      style={{
                        background: `linear-gradient(180deg, transparent 30%, ${p.accent} 130%)`,
                      }}
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-800">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: p.accent }}
                      />
                      {p.designs.length} designs
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-neutral-900 group-hover:text-amber-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      {p.tagline}
                    </p>
                    <p className="mt-3 text-sm text-neutral-600 line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-900">
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDesigns;
