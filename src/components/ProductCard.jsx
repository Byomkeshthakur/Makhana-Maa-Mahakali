import React from 'react';
import { MessageCircle, CheckCircle, Package, ArrowUpRight, Award } from 'lucide-react';
import { getProductWhatsAppLink } from '../utils/whatsapp';

export const ProductCard = ({ product, openEnquiryModal }) => {
  const isPouch = product.image.includes('pouch');

  return (
    <div className="bg-brand-card border border-brand-border/80 hover:border-brand-gold/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group">
      
      <div>
        {/* Product Image Container - Padded & Fitted for Packets */}
        <div className={`relative h-64 overflow-hidden ${isPouch ? 'bg-gradient-to-b from-brand-dark via-brand-black to-brand-dark p-4 flex items-center justify-center' : 'bg-brand-dark'}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${
              isPouch ? 'object-contain drop-shadow-2xl' : 'object-cover'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80 pointer-events-none"></div>

          {/* Top Category Tag */}
          <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-md text-brand-gold text-[11px] font-mono px-3 py-1 rounded-full border border-brand-gold/30 shadow-md">
            {product.category}
          </div>

          {/* Popular Tag */}
          {product.popular && (
            <div className="absolute top-3 right-3 bg-gold-gradient text-brand-black font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>Authentic Client Pack</span>
            </div>
          )}

          {/* Bottom Grade Tag */}
          <div className="absolute bottom-3 left-3 bg-brand-dark/90 backdrop-blur-sm text-white font-mono text-xs px-2.5 py-1 rounded-md border border-brand-border/60 shadow-md">
            Grade: <span className="text-brand-gold font-bold">{product.grade}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-serif font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-brand-muted mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Specifications list */}
          <div className="space-y-1.5 pt-2 border-t border-brand-border/40">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-brand-cream/90">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Bulk Packaging Spec */}
          <div className="p-3 bg-brand-dark/80 rounded-xl border border-brand-border/60 flex items-center space-x-2.5 text-xs text-brand-muted">
            <Package className="w-4 h-4 text-brand-gold shrink-0" />
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-mono">B2B Packaging:</span>
              <span className="text-white font-medium">{product.b2bPackaging}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action CTAs */}
      <div className="p-6 pt-0 grid grid-cols-2 gap-2">
        <a
          href={getProductWhatsAppLink(product.name, product.grade)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-3 rounded-xl transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Quote</span>
        </a>

        <button
          onClick={() => openEnquiryModal(product.name)}
          className="flex items-center justify-center space-x-1 bg-brand-dark hover:bg-brand-gold hover:text-brand-black text-brand-cream text-xs font-bold py-3 px-3 rounded-xl border border-brand-border hover:border-brand-gold transition-all"
        >
          <span>Quick Form</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
