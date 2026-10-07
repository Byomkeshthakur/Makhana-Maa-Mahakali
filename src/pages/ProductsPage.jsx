import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { B2BQuoteCalculator } from '../components/B2BQuoteCalculator';
import { PRODUCTS } from '../data/companyData';
import { Package, Sparkles } from 'lucide-react';

export const ProductsPage = ({ openEnquiryModal }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Premium Grade', 'Wholesale Standard', 'Retail Packaging', 'Raw Material'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <>
      <SEOHead 
        title="Makhana Products & Wholesale Supply Catalogue | Makhaan Mithila"
        description="Explore authentic Makhana product grades by Makhaan Maa Mahakali India Pvt. Ltd. Hand-picked Jumbo 6+ Soot, Grade A 5-Soot, Gour.Bae 250g retail pouches, and raw seeds from Madhubani, Bihar."
      />

      <div className="space-y-0 text-left bg-brand-black">
        
        {/* HERO HEADER */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-brand-dark via-brand-black to-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
                <Package className="w-4 h-4" />
                <span>Product Catalogue & B2B Supplies</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Authentic <span className="text-gold-gradient">Makhana Product Range</span>
              </h1>

              <p className="text-brand-cream/90 text-sm sm:text-base leading-relaxed">
                Directly harvested in Madhubani ponds and processed under clean hygienic protocols. Featuring original company retail packaging and wholesale bulk sacks.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 pt-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      filter === cat
                        ? 'bg-brand-gold text-brand-black shadow-lg font-bold'
                        : 'bg-brand-card text-gray-300 hover:bg-brand-border/60 border border-brand-border/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CARDS GRID */}
        <section className="py-16 bg-brand-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} openEnquiryModal={openEnquiryModal} />
              ))}
            </div>

            {/* Custom Sieve Order Callout */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Custom Sieve Sorting & Private Label Bulk Orders</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white">
                  Need specific Soot sizing (4+, 5+, 6+) or custom packaging sacks?
                </h4>
                <p className="text-xs text-brand-muted">
                  We customize moisture-barrier packaging, bag sizes (10kg, 15kg, 25kg, 50kg) and dispatch direct from Madhubani.
                </p>
              </div>

              <button
                onClick={() => openEnquiryModal('Custom Bulk Sieve Order')}
                className="shrink-0 bg-gold-gradient text-brand-black font-bold text-xs px-6 py-3.5 rounded-xl hover:opacity-95 shadow-lg transition-all"
              >
                Request Custom Spec Quote
              </button>
            </div>
          </div>
        </section>

        {/* B2B BULK QUOTE ESTIMATOR */}
        <B2BQuoteCalculator openEnquiryModal={openEnquiryModal} />

      </div>
    </>
  );
};
