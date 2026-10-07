import React from 'react';
import { ShieldCheck, Award, MapPin, CheckCircle, Flame, Droplets, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-brand-black relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Lotus Pond Cultivation Image */}
          <div className="lg:col-span-5 relative space-y-4">
            
            <div className="relative rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl group">
              <img 
                src={COMPANY_DETAILS.images.farming} 
                alt="Lotus pond farming in Madhubani Mithila Bihar" 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 backdrop-blur-md p-4 rounded-xl border border-brand-gold/30 text-left">
                <div className="flex items-center space-x-2 text-brand-gold font-serif font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Madhubani, Mithila Region, Bihar</span>
                </div>
                <p className="text-xs text-brand-muted mt-1">
                  The world capital of authentic Makhana (Euryale ferox) lotus seed cultivation.
                </p>
              </div>
            </div>

            {/* Embedded Logo Card */}
            <div className="bg-brand-card/90 border border-brand-border p-4 rounded-2xl flex items-center space-x-4 shadow-xl text-left">
              <img 
                src={COMPANY_DETAILS.logo} 
                alt="Makhaan Mithila emblem" 
                className="w-14 h-14 rounded-full border border-brand-gold/40 p-0.5 object-contain shrink-0 bg-brand-dark"
              />
              <div>
                <h4 className="font-serif font-bold text-white text-base">
                  {COMPANY_DETAILS.brandName}
                </h4>
                <p className="text-xs text-brand-gold font-semibold">
                  "{COMPANY_DETAILS.tagline}"
                </p>
                <p className="text-[11px] text-brand-muted mt-0.5">
                  Established 2019 • Madhubani, Bihar
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Makhaan Maa Mahakali</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Pioneering Premium <span className="text-gold-gradient">Makhana Processing</span> & Wholesale Supply
              </h2>
            </div>

            <p className="text-brand-cream/90 text-sm sm:text-base leading-relaxed">
              Established in <strong className="text-white">2019</strong> in Madhubani, Bihar, <strong className="text-white">{COMPANY_DETAILS.name}</strong> operates under the flagship brand identity <strong className="text-brand-gold">{COMPANY_DETAILS.brandName}</strong>.
            </p>

            <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
              We specialize in the cultivation, processing, grading, distribution, and wholesale supply of authentic Indian Fox Nuts (Lotus Seeds). Sourced directly from the pristine lotus ponds of the Mithila region, our products are handled with utmost care to maintain high nutritional integrity and crisp texture.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 bg-brand-card/60 rounded-xl border border-brand-border/60 space-y-1">
                <div className="flex items-center space-x-2 text-brand-gold font-semibold text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct Farm Sourcing</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Procured from local traditional lotus pond cultivators across Madhubani district.
                </p>
              </div>

              <div className="p-4 bg-brand-card/60 rounded-xl border border-brand-border/60 space-y-1">
                <div className="flex items-center space-x-2 text-brand-gold font-semibold text-xs uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Precision Wood-Fire Popping</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Traditional high-temperature roasting that yields maximum puffing and high pop density.
                </p>
              </div>

              <div className="p-4 bg-brand-card/60 rounded-xl border border-brand-border/60 space-y-1">
                <div className="flex items-center space-x-2 text-brand-gold font-semibold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-brand-gold" />
                  <span>Strict Mechanical Sieve Grading</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Separated into distinct size categories (4+, 5+, and 6+ Soot Jumbo) for specific client demands.
                </p>
              </div>

              <div className="p-4 bg-brand-card/60 rounded-xl border border-brand-border/60 space-y-1">
                <div className="flex items-center space-x-2 text-brand-gold font-semibold text-xs uppercase tracking-wider">
                  <Droplets className="w-4 h-4 text-sky-400" />
                  <span>Moisture Guard Packaging</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Packaged in heavy-duty moisture barrier sacks to prevent softness during transit.
                </p>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-brand-gold hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Connect directly with our Madhubani team on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
