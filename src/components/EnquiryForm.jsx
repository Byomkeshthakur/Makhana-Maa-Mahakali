import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/companyData';
import { getB2BQuoteWhatsAppLink } from '../utils/whatsapp';

export const EnquiryForm = ({ prefilledProduct = '', prefilledQuantity = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirementType: 'Bulk Wholesale Supply',
    product: prefilledProduct || PRODUCTS[0].name,
    quantity: prefilledQuantity || '500 KG',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const url = getB2BQuoteWhatsAppLink(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-card/90 border border-brand-gold/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      
      <div className="space-y-2 text-left">
        <h3 className="text-2xl font-serif font-bold text-white">
          Send B2B <span className="text-gold-gradient">Supply Enquiry</span>
        </h3>
        <p className="text-xs text-brand-muted">
          Fill in your requirements below for an official quotation from our Madhubani office.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-brand-dark/95 border border-emerald-500/40 rounded-2xl space-y-4 text-center animate-in fade-in duration-300">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-serif font-bold text-white">Enquiry Received!</h4>
          <p className="text-xs text-brand-muted leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our team at Makhaan Maa Mahakali India Pvt. Ltd. will review your requirement ({formData.quantity} of {formData.product}) and contact you shortly at <strong className="text-white">{formData.phone}</strong>.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Continue on WhatsApp</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto text-xs text-brand-gold hover:underline py-2 font-semibold"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Email & Requirement Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Email Address (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">Requirement Type *</label>
              <select
                name="requirementType"
                value={formData.requirementType}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              >
                <option value="Bulk Wholesale Supply">Bulk Wholesale Supply</option>
                <option value="Retail Distribution">Retail Distribution</option>
                <option value="Contract Manufacturing">Contract Processing</option>
                <option value="Sample Request">Sample Batch Request</option>
              </select>
            </div>
          </div>

          {/* Row 3: Product Grade & Approx Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">Target Makhana Grade *</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">Approx Quantity / Volume *</label>
              <input
                type="text"
                name="quantity"
                required
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 KG or 2 Tons"
                className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Row 4: Delivery Location */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Delivery Destination City & State *</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Patna, Bihar / New Delhi / Kolkata"
              className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
            />
          </div>

          {/* Row 5: Message */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Message / Packaging Specifications</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide any additional specifications, target delivery dates, or packaging preferences..."
              className="w-full bg-brand-dark border border-brand-border focus:border-brand-gold rounded-xl p-3 text-xs text-white focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 bg-gold-gradient text-brand-black font-bold text-xs py-3.5 px-6 rounded-xl hover:opacity-95 shadow-lg shadow-brand-gold/10 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Submitting...' : 'Submit Official Enquiry'}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
