import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { ProductCard } from '../components/ProductCard';
import { B2BQuoteCalculator } from '../components/B2BQuoteCalculator';
import { ReviewSection } from '../components/ReviewSection';
import { COMPANY_DETAILS, PRODUCTS, GALLERY_IMAGES } from '../data/companyData';
import { ArrowRight, ShieldCheck, MapPin, Package, Camera, Award } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const HomePage = ({ openEnquiryModal }) => {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const previewGallery = GALLERY_IMAGES.slice(0, 4);

  return (
    <>
      <SEOHead 
        title="Makhana Manufacturer & Wholesale Supplier in Madhubani, Bihar | Makhaan Mithila"
        description="Makhaan Maa Mahakali India Private Limited (Brand: Makhaan Mithila) is a leading premium Makhana manufacturer, processor, and wholesale bulk supplier based in Madhubani, Bihar. GSTIN: 10AASCM7783K1ZU."
      />

      <div className="space-y-0">
        
        {/* HERO BANNER WITH PARALLAX EFFECT */}
        <Hero openEnquiryModal={openEnquiryModal} />

        {/* TRUST & SNAPSHOT BAR */}
        <TrustSection />

        {/* ABOUT SUMMARY PREVIEW */}
        <section className="py-16 bg-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl relative group">
                  <img 
                    src={COMPANY_DETAILS.images.farming} 
                    alt="Lotus pond farming in Madhubani Bihar" 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 p-3.5 rounded-xl border border-brand-gold/30 text-left">
                    <span className="text-xs text-brand-gold font-bold flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Madhubani, Mithila Region</span>
                    </span>
                    <p className="text-[11px] text-brand-muted mt-0.5">
                      Direct pond harvesting of authentic Indian Fox Nuts (Lotus Seeds).
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Heritage & Company Overview</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  Direct Sourcing & Processing from <span className="text-gold-gradient">Madhubani, Bihar</span>
                </h2>

                <p className="text-brand-cream/90 text-sm leading-relaxed">
                  Established in 2019, <strong className="text-white">{COMPANY_DETAILS.name}</strong> operates under the flagship brand identity <strong className="text-brand-gold">{COMPANY_DETAILS.brandName}</strong> (GSTIN: {COMPANY_DETAILS.gstin}).
                </p>

                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                  We specialize in traditional lotus seed cultivation, wood-fire popping, mechanical sieve sorting, and bulk packaging for domestic and corporate B2B supplies.
                </p>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 bg-brand-card hover:bg-brand-border text-brand-gold hover:text-white text-xs font-bold px-5 py-3 rounded-xl border border-brand-gold/30 transition-all"
                  >
                    <span>Read Our Full Heritage Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS CATALOGUE PREVIEW */}
        <section className="py-16 bg-brand-dark/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4 text-left">
              <div>
                <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 mb-2">
                  <Package className="w-3.5 h-3.5" />
                  <span>Featured Product Range</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-white">
                  Featured <span className="text-gold-gradient">Makhana Supplies</span>
                </h2>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center space-x-1.5 bg-brand-card hover:bg-brand-gold hover:text-brand-black text-brand-gold text-xs font-bold px-4 py-2.5 rounded-xl border border-brand-gold/30 transition-all"
              >
                <span>View Full Product Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} openEnquiryModal={openEnquiryModal} />
              ))}
            </div>
          </div>
        </section>

        {/* B2B QUOTE ESTIMATOR */}
        <B2BQuoteCalculator openEnquiryModal={openEnquiryModal} />

        {/* GALLERY PREVIEW */}
        <section className="py-16 bg-brand-black border-y border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4 text-left">
              <div>
                <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 mb-2">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Facility & Product Visuals</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-white">
                  Authentic <span className="text-gold-gradient">Company Visual Showcase</span>
                </h2>
              </div>

              <Link
                to="/gallery"
                className="inline-flex items-center space-x-1.5 bg-brand-card hover:bg-brand-gold hover:text-brand-black text-brand-gold text-xs font-bold px-4 py-2.5 rounded-xl border border-brand-gold/30 transition-all"
              >
                <span>View Complete Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewGallery.map((img) => (
                <div key={img.id} className="relative h-64 rounded-2xl overflow-hidden border border-brand-border/80 group bg-brand-dark">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] text-brand-gold font-bold uppercase">{img.category}</span>
                    <h4 className="text-xs font-serif font-bold text-white">{img.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS & SOCIAL PROOF */}
        <ReviewSection />

        {/* CALL TO ACTION BANNER */}
        <section className="py-16 bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border-t border-brand-gold/30">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Ready to Order Wholesale Makhana Direct from <span className="text-gold-gradient">Madhubani</span>?
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted max-w-2xl mx-auto">
              Contact our sales office for contractual bulk supplies, custom sieve sorting (4+, 5+, 6+ Soot), and sample dispatch across India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Chat Direct on WhatsApp
              </a>

              <Link
                to="/contact"
                className="bg-gold-gradient text-brand-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Visit Contact & Locations Page
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
