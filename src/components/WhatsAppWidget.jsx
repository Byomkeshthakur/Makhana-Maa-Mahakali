import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      
      {/* Floating Greeting Chat Bubble */}
      {showTooltip && (
        <div className="bg-brand-card border border-emerald-500/40 p-3.5 rounded-2xl shadow-2xl max-w-xs text-left animate-in slide-in-from-bottom-3 duration-300 relative group">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-brand-dark p-1 rounded-full text-gray-400 hover:text-white border border-brand-border"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Online • Madhubani Sales Desk</span>
          </div>

          <p className="text-xs text-white leading-relaxed">
            Looking for wholesale Makhana pricing or bulk sample dispatch?
          </p>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-400 hover:underline"
          >
            <span>Chat now on WhatsApp</span>
            <Send className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Floating Main Green WhatsApp Icon */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-all transform hover:scale-110 border-2 border-emerald-400 relative group focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Pulse Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-brand-black rounded-full animate-pulse"></span>
      </a>

    </div>
  );
};
