import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { QualityPage } from './pages/QualityPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetProduct, setTargetProduct] = useState('');
  const [targetQuantity, setTargetQuantity] = useState('');

  const openEnquiryModal = (product = '', quantity = '') => {
    setTargetProduct(product);
    setTargetQuantity(quantity);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-brand-cream selection:bg-brand-gold selection:text-brand-black flex flex-col justify-between relative">
        
        {/* Top Header Navigation */}
        <Header openEnquiryModal={openEnquiryModal} />

        {/* Dynamic Multi-Page Router Outlet */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage openEnquiryModal={openEnquiryModal} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage openEnquiryModal={openEnquiryModal} />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback wildcard route redirect to Home */}
            <Route path="*" element={<HomePage openEnquiryModal={openEnquiryModal} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Floating WhatsApp Widget */}
        <WhatsAppWidget />

        {/* Quick B2B Enquiry Modal */}
        <EnquiryModal 
          isOpen={isModalOpen} 
          onClose={closeEnquiryModal} 
          targetProduct={targetProduct} 
          targetQuantity={targetQuantity} 
        />

      </div>
    </Router>
  );
}
