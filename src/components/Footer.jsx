import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle, ChevronRight, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-cream border-t border-brand-gold/30 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* COLUMN 1 — BRAND (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Controlled Small Logo Size: ~70-80px desktop, ~60px mobile */}
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-brand-gold/40 p-1 object-contain bg-brand-dark flex items-center justify-center shrink-0">
                <img 
                  src={COMPANY_DETAILS.logo} 
                  alt="Makhaan Mithila emblem" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Makhaan Mithila
                </h3>
                <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">
                  ESTD 2019 • Madhubani
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white font-semibold">{COMPANY_DETAILS.name}</strong> is a dedicated Makhana manufacturer, processor, and bulk wholesale supplier operating directly out of Madhubani, Bihar. GSTIN: <strong className="text-brand-gold font-bold">{COMPANY_DETAILS.gstin}</strong>.
            </p>

            <div className="pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Business Enquiry</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/products', label: 'Products' },
                { path: '/quality', label: 'Quality & Process' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-brand-gold transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-gold" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — PRODUCTS / SUPPLY (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Makhana Supplies
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>• Hand-Picked Jumbo Makhana (6+ Soot)</li>
              <li>• Gour.Bae 250g Retail Pouch Pack</li>
              <li>• Grade A Phool Makhana (5 Soot)</li>
              <li>• Raw Seed Makhana (Guriyya)</li>
              <li>• Commercial Bulk Bag Packaging</li>
              <li>• B2B Truck Freight Supply</li>
            </ul>
          </div>

          {/* COLUMN 4 — HEADQUARTERS / CONTACT (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-white hover:text-brand-gold font-bold">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2 pt-1">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px] text-gray-300">
                  <p>{COMPANY_DETAILS.hours.weekday}</p>
                  <p>{COMPANY_DETAILS.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR & CREDITS */}
        <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 <strong className="text-white font-semibold">{COMPANY_DETAILS.name}</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-1">
            <span>Built by</span>
            <a
              href="https://byomdigital.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-white font-bold transition-colors inline-flex items-center space-x-1"
            >
              <span>BYOM DIGITAL</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
