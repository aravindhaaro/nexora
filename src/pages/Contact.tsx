import { Layout } from "@/components/layout/Layout";
import { siteContent } from "@/data/siteContent";
import { SocialIcon } from "@/components/SocialIcon";

const Contact = () => {
  const { brand } = siteContent;

  return (
    <Layout variant="dark">
      <section className="min-h-screen flex items-center bg-black text-white pt-24">
        <div className="container py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-[-0.03em] mb-12">
              Let's work
              <br />
              together.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-16 leading-relaxed">
              I'm currently available for select projects and consulting engagements. 
              If you're building something meaningful, I'd love to hear about it.
            </p>

            {/* Email CTA */}
            <div className="mb-20">
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-4">Get in touch</p>
              <a
                href={`mailto:${brand.email}`}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-white hover:text-gray-300 transition-colors inline-flex items-center gap-4 group"
              >
                {brand.email}
                <span className="inline-block transition-transform group-hover:translate-x-2 text-gray-500">→</span>
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-800 mb-16" />

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-4">For Networking</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-gray-300 transition-colors"
                >
                  <SocialIcon label="LinkedIn" className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-4">For Updates</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-gray-300 transition-colors"
                  >
                    <SocialIcon label="Twitter" className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-gray-300 transition-colors"
                  >
                    <SocialIcon label="Instagram" className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-4">For Work</p>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-gray-300 transition-colors"
                >
                  <SocialIcon label="Dribbble" className="h-5 w-5" />
                  <span className="sr-only">Dribbble</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-32 md:mt-48">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} {brand.ownerName}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;