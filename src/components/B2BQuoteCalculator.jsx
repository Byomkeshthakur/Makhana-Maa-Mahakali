import React, { useState } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, Truck } from 'lucide-react';
import { getB2BQuoteWhatsAppLink } from '../utils/whatsapp';

export const B2BQuoteCalculator = ({ openEnquiryModal }) => {
  const [selectedGrade, setSelectedGrade] = useState('Hand-Picked Jumbo Makhana (6+ Soot)');
  const [quantity, setQuantity] = useState('500');
  const [packaging, setPackaging] = useState('15kg Moisture-Proof Woven Bags');
  const [destination, setDestination] = useState('');
  const [clientName, setClientName] = useState('');

  const gradeOptions = [
    'Hand-Picked Jumbo Makhana (6+ Soot / 20mm+)',
    'Grade A Phool Makhana (5 Soot / Wholesale)',
    'Gour.Bae 250g Consumer Retail Pack',
    'Raw Seed Makhana (Guriyya / Processing Grade)'
  ];

  const packagingOptions = [
    '10kg Master Cartons',
    '15kg Moisture-Proof Woven Bags',
    '25kg Heavy-Duty Export Sacks',
    '50kg HDPE Bulk Bags'
  ];

  const handleWhatsAppRedirect = () => {
    const payload = {
      name: clientName || 'B2B Wholesale Buyer',
      phone: '',
      product: selectedGrade,
      requirementType: 'Bulk Wholesale Order',
      quantity: `${quantity} KG`,
      location: destination || 'Direct Freight Delivery',
      message: `Packaging Preference: ${packaging}`
    };
    const url = getB2BQuoteWhatsAppLink(payload);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-brand-black border-y border-brand-border/60 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border border-brand-gold/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-border/60 pb-6 text-left">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Bulk Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Configure Your <span className="text-gold-gradient">B2B Wholesale Requirement</span>
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Select your desired Makhana size grade, bulk packaging type, and estimated volume for direct supply from Madhubani.
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs text-brand-cream/80 bg-brand-dark/90 px-4 py-2.5 rounded-xl border border-brand-border/60 shrink-0">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct Truck Freight Dispatch across India</span>
            </div>
          </div>

          {/* Form Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Step 1: Select Grade */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-brand-gold uppercase tracking-wider block">
                1. Select Size & Grade
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              >
                {gradeOptions.map((g, i) => (
                  <option key={i} value={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Packaging */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-brand-gold uppercase tracking-wider block">
                2. Select Packaging Sacks
              </label>
              <select
                value={packaging}
                onChange={(e) => setPackaging(e.target.value)}
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              >
                {packagingOptions.map((p, i) => (
                  <option key={i} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Step 3: Quantity Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-brand-gold uppercase tracking-wider block">
                3. Estimated Quantity (KG)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="50"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
                  placeholder="e.g. 500"
                />
                <span className="text-xs font-bold text-brand-gold px-3.5 py-3 bg-brand-dark rounded-xl border border-brand-border">
                  KG
                </span>
              </div>
            </div>

          </div>

          {/* Quick Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Company / Contact Name (Optional)
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-brand-dark border border-brand-border/60 focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
                placeholder="e.g. ABC Foods Pvt Ltd / Ramesh Kumar"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Destination City & State
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-brand-dark border border-brand-border/60 focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
                placeholder="e.g. Delhi NCR / Mumbai / Jaipur"
              />
            </div>
          </div>

          {/* Configured Summary Preview & Action CTAs */}
          <div className="bg-brand-dark/95 p-5 rounded-2xl border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-emerald-400 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Configured Requirement Summary</span>
              </div>
              <p className="text-sm font-semibold text-white">
                {quantity} KG • {selectedGrade} ({packaging})
              </p>
              <p className="text-xs text-brand-muted">
                {destination ? `Delivery to: ${destination}` : 'Direct Madhubani Processing Plant Dispatch'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleWhatsAppRedirect}
                className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                onClick={() => openEnquiryModal(selectedGrade, `${quantity} KG - ${packaging}`)}
                className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-gold-gradient text-brand-black font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Form Quote</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
