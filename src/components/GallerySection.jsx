import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/companyData';
import { Camera, X, Maximize2, MessageCircle, ZoomIn } from 'lucide-react';
import { getProductWhatsAppLink } from '../utils/whatsapp';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Products', 'Origin & Farm', 'Packaging', 'Brand'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-brand-dark/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-brand-gold font-mono text-xs uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase & Facility</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Mithila Heritage & <span className="text-gold-gradient">Product Gallery</span>
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Take a visual tour of our direct lotus pond harvesting in Madhubani, raw materials, premium popped Makhana grades, and packaging facility.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-gold text-brand-black shadow-lg font-bold'
                    : 'bg-brand-card text-gray-300 hover:bg-brand-border/60 border border-brand-border/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-brand-border/70 hover:border-brand-gold/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 bg-brand-black"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md p-2 rounded-full text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity border border-brand-gold/40">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider bg-brand-gold/20 px-2 py-0.5 rounded border border-brand-gold/30">
                  {item.category}
                </span>
                <h4 className="text-sm font-serif font-bold text-white group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-brand-card text-brand-gold hover:bg-brand-border border border-brand-gold/40 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-brand-card border border-brand-gold/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6 my-auto">
            
            <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden bg-brand-black">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-brand-border/60">
              <div>
                <span className="text-xs font-mono text-brand-gold uppercase">{activeImage.category}</span>
                <h3 className="text-xl font-serif font-bold text-white">{activeImage.title}</h3>
                <p className="text-xs text-brand-muted mt-0.5">{activeImage.alt}</p>
              </div>

              <a
                href={getProductWhatsAppLink(activeImage.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      )}
    </section>
  );
};
