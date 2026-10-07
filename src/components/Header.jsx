import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ShieldCheck, ChevronRight, MapPin, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Header = ({ openEnquiryModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/quality', label: 'Quality & Process' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-brand-black border-b border-brand-gold/20 shadow-2xl">
      
      {/* Top Bar: Verification, Location & Contact */}
      <div className="bg-brand-dark/95 border-b border-brand-border/40 py-1.5 px-4 text-[11px] text-brand-muted hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-brand-gold font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Madhubani, Bihar</span>
            </span>
            <span className="text-gray-500">|</span>
            <span className="flex items-center space-x-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>GSTIN: <strong className="text-white">{COMPANY_DETAILS.gstin}</strong></span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>{COMPANY_DETAILS.hours.weekday}</span>
            </span>
            <span className="text-gray-500">|</span>
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex items-center space-x-1 text-white hover:text-brand-gold font-bold transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO & BRAND NAME */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-left group focus:outline-none"
            aria-label="Makhaan Mithila Home"
          >
            <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-brand-gold/40 shadow-md group-hover:border-brand-gold transition-colors bg-brand-dark flex items-center justify-center p-0.5 shrink-0">
              <img 
                src={COMPANY_DETAILS.logo} 
                alt="Makhaan Mithila Official Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors">
                  Makhaan Mithila
                </span>
                <span className="text-[10px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.5 rounded font-semibold border border-brand-gold/30">
                  ESTD 2019
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-brand-muted hidden sm:block">
                Makhaan Maa Mahakali India Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION ROUTING */}
          <nav className="hidden lg:flex items-center space-x-1 bg-brand-card/70 px-3 py-1.5 rounded-full border border-brand-border/60">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => 
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive 
                      ? 'bg-brand-gold text-brand-black font-bold shadow' 
                      : 'text-gray-300 hover:text-brand-gold hover:bg-brand-dark/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-md transition-all"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => openEnquiryModal()}
              className="bg-gold-gradient text-brand-black hover:opacity-95 text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all flex items-center space-x-1"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="Quick WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-card text-brand-cream border border-brand-border focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-gold" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE ROUTING DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-gold/30 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
          <div className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider mb-2 flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Makhaan Maa Mahakali India Pvt. Ltd.</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-brand-gold text-brand-black font-bold' 
                      : 'bg-brand-card text-gray-200'
                  }`
                }
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-brand-border/60 grid grid-cols-2 gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center justify-center space-x-1.5 py-2.5 bg-brand-card border border-brand-border rounded-lg text-xs font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>Call Us</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquiryModal();
              }}
              className="flex items-center justify-center space-x-1 py-2.5 bg-gold-gradient text-brand-black font-bold rounded-lg text-xs"
            >
              <span>Enquire Form</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
