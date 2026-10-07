import React from 'react';
import { ShieldCheck, Flame, Layers, PackageCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const QualitySection = () => {
  const steps = [
    {
      step: "01",
      title: "Pond Sourcing in Madhubani",
      desc: "Lotus seeds (Euryale ferox) are harvested directly from the pristine natural ponds of Madhubani, Mithila region.",
      image: "/mithila-farming.jpg",
      tag: "Direct Wetland Harvest"
    },
    {
      step: "02",
      title: "Sun-Drying & Roasting",
      desc: "Harvested seeds undergo natural sun-drying followed by traditional wood-fired pan roasting for precise moisture control.",
      image: "/hero-makhana.jpg",
      tag: "Wood-Fire Heat Control"
    },
    {
      step: "03",
      title: "Manual Popping & Hand Inspection",
      desc: "Seeds are popped using wooden mallets, hand-inspected in bulk sacks, and graded into 4+, 5+, and 6+ Soot sizes.",
      image: "/client-bulk-sack.jpg",
      tag: "Hand Quality Audit"
    },
    {
      step: "04",
      title: "Warehouse Inventory & Dispatch",
      desc: "Graded Makhana is stacked in factory warehouse inventory and dispatched with GSTIN verified invoices across India.",
      image: "/client-warehouse-stock.jpg",
      tag: "Freight Freight Ready"
    }
  ];

  return (
    <section id="quality" className="py-20 bg-brand-black relative overflow-hidden">
      
      {/* Visual Ambient Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-gold font-mono text-xs uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Visual Process & Quality Assurance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Traditional Mithila Expertise, <span className="text-gold-gradient">Hygienic Execution</span>
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Follow our authentic 4-step manufacturing journey from wetland harvesting in Madhubani to hand-inspection and warehouse packaging.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards with Real Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-brand-card/80 border border-brand-border/70 hover:border-brand-gold/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-brand-dark">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-md font-mono text-xs text-brand-gold font-bold px-2.5 py-1 rounded-md border border-brand-gold/30">
                    Step {item.step}
                  </div>

                  <div className="absolute bottom-3 left-3 bg-brand-dark/90 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded border border-brand-border/60">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 space-y-2 text-left">
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 text-[11px] font-mono text-brand-gold/80 flex items-center justify-between border-t border-brand-border/30 mt-4">
                <span>Madhubani Facility</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Box */}
        <div className="mt-14 bg-brand-card/40 border border-brand-border/60 p-6 sm:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          <div className="lg:col-span-2 space-y-2 text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Strict Quality Parameters for Wholesale Supplies
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Every consignment shipped by <strong className="text-white">{COMPANY_DETAILS.name}</strong> undergoes rigorous physical inspection for puffing index, moisture threshold (below 7.5%), seed-shell removal, and uniform color separation.
            </p>
          </div>

          <div className="bg-brand-dark/90 p-4 rounded-2xl border border-brand-gold/30 text-xs space-y-2">
            <div className="flex items-center justify-between text-brand-gold font-bold">
              <span>Moisture Content</span>
              <span>&lt; 7.5%</span>
            </div>
            <div className="w-full bg-brand-border h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-gold h-full w-4/5"></div>
            </div>
            <p className="text-[11px] text-gray-400">
              Optimal dryness prevents fungal spoilage and guarantees high crunch retention.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
