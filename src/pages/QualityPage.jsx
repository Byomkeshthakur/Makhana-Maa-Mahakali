import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/companyData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const QualityPage = () => {
  const steps = [
    {
      step: "01",
      title: "Wetland Sourcing in Madhubani",
      desc: "Lotus seeds (Euryale ferox) are harvested directly from pristine natural ponds across Madhubani district, Bihar.",
      image: "/mithila-farming.jpg",
      tag: "Direct Wetland Harvest"
    },
    {
      step: "02",
      title: "Sun-Drying & Wood-Fire Roasting",
      desc: "Harvested seeds undergo natural sun-drying followed by traditional wood-fired pan roasting for precise moisture control.",
      image: "/hero-makhana.jpg",
      tag: "Heat & Moisture Control"
    },
    {
      step: "03",
      title: "Manual Popping & Hand Inspection",
      desc: "Roasters manually pop seeds using wooden mallets, hand-inspecting popping density and fluffiness inside bulk yellow sacks.",
      image: "/client-bulk-sack.jpg",
      tag: "Hand Quality Audit"
    },
    {
      step: "04",
      title: "Hygienic Moisture-Guard Packaging",
      desc: "Graded Makhana is sealed in double-layered moisture barrier bags and zipper pouches to guarantee crunch retention.",
      image: "/client-retail-pouch-1.jpg",
      tag: "Freshness Lock Pack"
    },
    {
      step: "05",
      title: "Warehouse Inventory & Freight Dispatch",
      desc: "Finished products are stacked in factory warehouse inventory and dispatched with GSTIN verified invoices across India.",
      image: "/client-warehouse-stock.jpg",
      tag: "Freight Ready Stock"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Makhana Processing & Quality Assurance | Makhaan Mithila"
        description="Discover the 5-step hygienic processing journey of Makhaan Maa Mahakali India Pvt. Ltd. Pond sourcing in Madhubani, sun-drying, hand quality inspection, and moisture-guard packaging."
      />

      <div className="space-y-0 text-left bg-brand-black">
        
        {/* HERO HEADER */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-brand-dark via-brand-black to-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Process & Quality Control</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Traditional Mithila Expertise, <br />
                <span className="text-gold-gradient">Hygienic Execution</span>
              </h1>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Follow our 5-step visual manufacturing story from wetland pond harvesting in Madhubani to hand-inspection, packaging, and freight dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* 5-STEP VISUAL TIMELINE */}
        <section className="py-16 bg-brand-dark border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {steps.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-card p-6 sm:p-8 rounded-3xl border border-brand-border/80 shadow-xl"
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-brand-dark border border-brand-border/60 group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-brand-black/95 font-bold text-xs text-brand-gold px-3 py-1 rounded-md border border-brand-gold/30">
                      Step {item.step}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-brand-dark/95 text-xs font-bold text-emerald-400 px-3 py-1 rounded border border-brand-border/60">
                      {item.tag}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-3 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Step {item.step} of 05</span>
                  <h3 className="text-2xl font-serif font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">{item.desc}</p>

                  <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Madhubani Processing Facility Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUALITY PARAMETERS */}
        <section className="py-16 bg-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-card border border-brand-border/80 p-6 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              <div className="lg:col-span-2 space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Strict Quality Parameters for Wholesale Consignments
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Every consignment shipped by <strong className="text-white font-semibold">{COMPANY_DETAILS.name}</strong> undergoes rigorous physical inspection for puffing index, moisture threshold (below 7.5%), seed-shell removal, and uniform color separation.
                </p>
              </div>

              <div className="bg-brand-dark p-5 rounded-2xl border border-brand-gold/30 text-xs space-y-3">
                <div className="flex items-center justify-between text-brand-gold font-bold text-sm">
                  <span>Moisture Content</span>
                  <span>&lt; 7.5%</span>
                </div>
                <div className="w-full bg-brand-border h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full w-4/5"></div>
                </div>
                <p className="text-xs text-gray-200">
                  Optimal dryness prevents fungal spoilage and guarantees high crunch retention.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};
