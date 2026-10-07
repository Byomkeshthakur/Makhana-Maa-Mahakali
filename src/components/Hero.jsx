import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Award, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Hero = ({ openEnquiryModal }) => {
  return (
    <section id="home" className="relative py-12 sm:py-16 bg-brand-black border-b border-brand-border/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Origin & Est Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-dark px-3.5 py-1.5 rounded-full border border-brand-gold/40 text-xs font-semibold text-brand-gold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Madhubani, Bihar • Established 2019</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Authentic <span className="text-gold-gradient">Makhana</span>.<br />
                Premium Quality.<br />
                Direct from <span className="text-emerald-400">Mithila</span>.
              </h1>
              <p className="text-brand-gold font-sans text-xs sm:text-sm font-bold tracking-wider uppercase pt-1">
                {COMPANY_DETAILS.tagline}
              </p>
            </div>

            {/* Subtitle Narrative */}
            <p className="text-sm sm:text-base text-brand-cream/90 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">{COMPANY_DETAILS.name}</strong> (Brand: <span className="text-brand-gold font-semibold">Makhaan Mithila</span>) is a leading processor and wholesale bulk supplier of hand-sorted lotus seeds from Madhubani, Bihar.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={openEnquiryModal}
                className="flex items-center space-x-1.5 bg-gold-gradient text-brand-black hover:opacity-95 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="flex items-center space-x-1.5 bg-brand-card hover:bg-brand-border text-brand-cream border border-brand-border text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
              >
                <span>View Products</span>
              </a>
            </div>

            {/* Trust Highlights Row */}
            <div className="pt-5 border-t border-brand-border/60 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-lg sm:text-xl font-bold font-serif text-brand-gold">2019</div>
                <div className="text-[11px] text-brand-muted uppercase font-semibold tracking-wider">Established</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-serif text-white">Madhubani</div>
                <div className="text-[11px] text-brand-muted uppercase font-semibold tracking-wider">Bihar Origin</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-serif text-emerald-400">Direct Pond</div>
                <div className="text-[11px] text-brand-muted uppercase font-semibold tracking-wider">Farm Harvest</div>
              </div>
            </div>

          </div>

          {/* Right Column: Controlled Hero Media */}
          <div className="lg:col-span-5">
            <div className="bg-brand-card/90 border border-brand-gold/30 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4 text-left">
              
              <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden border border-brand-border/60 bg-brand-dark">
                <img 
                  src={COMPANY_DETAILS.images.hero} 
                  alt="Makhaan Mithila popped lotus seeds bowl"
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
                <div className="absolute top-3 left-3 bg-brand-black/85 px-3 py-1 rounded-full text-[11px] font-semibold text-brand-gold border border-brand-gold/40 flex items-center space-x-1.5 shadow-md">
                  <Award className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Hand-Sorted 6+ Soot Jumbo</span>
                </div>
              </div>

              {/* Processing Info Box */}
              <div className="bg-brand-dark/95 p-3.5 rounded-xl border border-brand-border/60 space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Processing Hub: Madhubani, Bihar</span>
                  </span>
                  <span className="text-emerald-400 text-[11px] font-bold">B2B Ready</span>
                </div>
                <p className="text-[11px] text-brand-muted leading-relaxed">
                  Natural, gluten-free popped lotus seeds cultivated in traditional ponds & processed under clean hygienic protocols.
                </p>
              </div>

              {/* Quick WhatsApp Action inside Card */}
              <div className="flex items-center justify-between p-3 bg-emerald-950/40 border border-emerald-600/30 rounded-xl">
                <div className="text-xs">
                  <span className="text-white font-semibold block">Need Bulk Supply?</span>
                  <span className="text-emerald-300/80 text-[11px]">Direct WhatsApp Enquiry</span>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-emerald-500 transition-colors"
                >
                  Chat Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
