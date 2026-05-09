import { Layout } from "@/components/layout/Layout";
import { siteContent } from "@/data/siteContent";

const About = () => {
  const { about } = siteContent;

  return (
    <Layout variant="light">
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
          <div className="container">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black leading-[1.1] tracking-[-0.02em] max-w-6xl">
              {about.heroText}
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24 md:pb-32 bg-white">
          <div className="container">
            <div className="w-full h-px bg-gray-300 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              {/* Left Column - Lists */}
              <div className="lg:col-span-4 space-y-14">
                {about.leftSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">{section.title}</h3>
                    <div className={section.title === "Work" ? "space-y-5" : "space-y-2"}>
                      {section.items.map((item, index) => (
                        <div key={`${section.title}-${index}`}>
                          <p className={section.title === "Work" ? "text-sm font-medium text-black uppercase tracking-wide" : "text-sm text-gray-600"}>
                            {item.primary}
                            {section.title === "Speaker" && item.secondary ? ` (${item.secondary})` : ""}
                          </p>
                          {section.title === "Work" && item.secondary && (
                            <p className="text-sm text-gray-500">{item.secondary}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Bio */}
              <div className="lg:col-span-8">
                <div className="max-w-2xl">
                  {about.bioParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className={
                        index === 0
                          ? "text-lg md:text-xl text-black mb-8 leading-relaxed"
                          : index === about.bioParagraphs.length - 1
                            ? "text-base text-gray-600 leading-relaxed"
                            : "text-base text-gray-600 mb-6 leading-relaxed"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 md:py-24 bg-black border-t border-gray-200">
          <div className="container">
            <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-10">{about.clientsTitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {about.clients.map((client, index) => (
                <div
                  key={client.name}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="relative h-32 w-full overflow-hidden rounded-3xl bg-slate-950/90">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-full object-contain object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-center px-3">
                        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400 group-hover:text-white transition-colors">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;