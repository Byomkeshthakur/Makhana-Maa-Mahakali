import React from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

export const EnquiryModal = ({ isOpen, onClose, targetProduct = '', targetQuantity = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative max-w-2xl w-full my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 p-2.5 rounded-full bg-brand-card text-brand-gold hover:bg-brand-border border border-brand-gold/40 shadow-xl focus:outline-none"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <EnquiryForm prefilledProduct={targetProduct} prefilledQuantity={targetQuantity} />
      </div>

    </div>
  );
};
