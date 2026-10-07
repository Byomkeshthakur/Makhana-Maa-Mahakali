import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';
import { EnquiryForm } from './EnquiryForm';

export const LocationSection = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact & Location Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-brand-gold font-mono text-xs uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                <MapPin className="w-3.5 h-3.5" />
                <span>Contact & Facilities</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Connect With Our <span className="text-gold-gradient">Madhubani Office</span>
              </h2>

              <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                Directly contact our processing unit for wholesale pricing, sample kits, and contractual bulk supply terms.
              </p>
            </div>

            {/* Factory Signboard Display Card */}
            <div className="rounded-2xl overflow-hidden border border-brand-gold/40 shadow-xl relative bg-brand-card group">
              <img 
                src={COMPANY_DETAILS.images.signboard} 
                alt="Official Makhaan Maa Mahakali India Pvt Ltd Signboard with GSTIN" 
                className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-xs">
                <div className="font-mono text-brand-gold font-bold">GSTIN: {COMPANY_DETAILS.gstin}</div>
                <div className="text-white text-[11px]">Official Facility Signboard • Madhubani, Bihar</div>
              </div>
            </div>

            {/* Business Information Cards */}
            <div className="space-y-4">
              
              {/* Address */}
              <div className="p-5 rounded-2xl bg-brand-card/80 border border-brand-border/80 flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-brand-dark text-brand-gold border border-brand-gold/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-brand-gold uppercase tracking-wider">Registered Location</h5>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {COMPANY_DETAILS.address}
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Mithila Region, State of Bihar, India
                  </p>
                </div>
              </div>

              {/* Phone & Direct Call - Displays Both Numbers! */}
              <div className="p-5 rounded-2xl bg-brand-card/80 border border-brand-border/80 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-brand-gold uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Business Phone Numbers</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="p-3 bg-brand-dark rounded-xl border border-brand-border hover:border-brand-gold text-xs font-bold text-white hover:text-brand-gold transition-colors flex items-center justify-between"
                  >
                    <span>{COMPANY_DETAILS.phone}</span>
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.phone2}`}
                    className="p-3 bg-brand-dark rounded-xl border border-brand-border hover:border-brand-gold text-xs font-bold text-white hover:text-brand-gold transition-colors flex items-center justify-between"
                  >
                    <span>{COMPANY_DETAILS.phone2}</span>
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  </a>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="p-5 rounded-2xl bg-brand-card/80 border border-brand-border/80 flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-brand-dark text-brand-gold border border-brand-gold/30 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-mono text-brand-gold uppercase tracking-wider">Operational Hours</h5>
                  <p className="text-xs text-white">
                    {COMPANY_DETAILS.hours.weekday}
                  </p>
                  <p className="text-xs text-brand-cream/80">
                    {COMPANY_DETAILS.hours.sunday}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick CTA */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire on WhatsApp Direct</span>
              </a>

            </div>

            {/* Embedded Interactive Map Card */}
            <div className="rounded-2xl overflow-hidden border border-brand-border/80 shadow-xl bg-brand-card">
              <iframe
                title="Makhaan Maa Mahakali India Pvt Ltd Madhubani Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57200.74108845009!2d86.04618797893998!3d26.35334796338982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd094ee7327d%3A0xb36b5ad86fb8fa01!2sMadhubani%2C%20Bihar%20847211!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Interactive B2B Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
};
