import React, { useState } from 'react';
import { PRODUCTS } from '../data/companyData';
import { ProductCard } from './ProductCard';
import { Package, ShieldCheck, Sparkles, Filter } from 'lucide-react';

export const ProductGrid = ({ openEnquiryModal }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Premium Grade', 'Wholesale Standard', 'Retail Packaging', 'Raw Material'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="products" className="py-16 sm:py-20 bg-brand-dark/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-brand-gold font-semibold text-xs uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            <Package className="w-3.5 h-3.5" />
            <span>Makhana Product Catalogue</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Premium <span className="text-gold-gradient">Makhana Grades</span> & Packaged Supplies
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Cultivated in the pristine aquatic ecosystems of Madhubani, Bihar. Featuring authentic company retail packaging and wholesale bulk bags.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-brand-gold text-brand-black shadow-lg font-bold'
                    : 'bg-brand-card text-gray-300 hover:bg-brand-border/60 hover:text-white border border-brand-border/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              openEnquiryModal={openEnquiryModal} 
            />
          ))}
        </div>

        {/* Custom Order Callout Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
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
            className="shrink-0 bg-gold-gradient text-brand-black font-bold text-xs px-6 py-3.5 rounded-xl hover:opacity-95 shadow-lg shadow-brand-gold/10 transition-all transform hover:-translate-y-0.5"
          >
            Request Custom Spec Quote
          </button>
        </div>

      </div>
    </section>
  );
};
