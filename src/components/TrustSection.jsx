import React from 'react';
import { Calendar, MapPin, PackageCheck, Star, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Calendar,
      title: "Since 2019",
      subtitle: "Established Entity",
      desc: "Delivering authentic Mithila Makhana processing & supply excellence."
    },
    {
      icon: MapPin,
      title: "Madhubani, Bihar",
      subtitle: "Authentic Origin",
      desc: "Direct pond harvesting in the heartland of world-renowned lotus seed cultivation."
    },
    {
      icon: FileText,
      title: `GSTIN Verified`,
      subtitle: COMPANY_DETAILS.gstin,
      desc: "Fully compliant GST registered business (GSTIN: 10AASCM7783K1ZU) for corporate billing."
    },
    {
      icon: Star,
      title: "Warehouse Stock",
      subtitle: "Bulk Freight Supply",
      desc: "Contractual wholesale supply for FMCG brands, roasters, and retail distributors."
    }
  ];

  return (
    <section className="py-10 bg-brand-dark/95 border-y border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-brand-card/70 border border-brand-border/60 hover:border-brand-gold/40 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg group text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-3 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Business Statement Bar */}
        <div className="mt-6 p-4 rounded-xl bg-brand-card/40 border border-brand-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted text-left">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              Official Registered Entity: <strong className="text-white">{COMPANY_DETAILS.name}</strong> • GSTIN: <strong className="text-brand-gold font-bold">{COMPANY_DETAILS.gstin}</strong>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
              <span>Madhubani Processing Unit</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
              <span>Authentic Mithila Origin</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
