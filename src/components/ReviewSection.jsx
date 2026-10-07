import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../data/companyData';

export const ReviewSection = () => {
  return (
    <section className="py-20 bg-brand-black relative border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 text-brand-gold font-mono text-xs uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            <Star className="w-3.5 h-3.5 fill-brand-gold" />
            <span>Social Proof & Business Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            What Our <span className="text-gold-gradient">Wholesale Buyers</span> Say
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Trusted by distributors, FMCG snack manufacturers, and retail buyers seeking direct Madhubani Makhana supply.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-card/70 border border-brand-border/80 hover:border-brand-gold/40 p-6 rounded-2xl shadow-xl space-y-4 flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-brand-cream/90 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                  <p className="text-[11px] text-brand-muted">{rev.role}</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-brand-dark flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-card/50 border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-gold font-bold font-serif text-lg">
              G
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Google Business Reviews</h4>
              <p className="text-xs text-brand-muted">
                Makhaan Maa Mahakali India Private Limited • Madhubani, Bihar
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Makhaan+Maa+Mahakali+India+Private+Limited+Madhubani+Bihar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-bold text-brand-gold hover:text-white bg-brand-dark px-4 py-2.5 rounded-xl border border-brand-gold/30 hover:border-brand-gold transition-colors"
          >
            <span>See Google Location & Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
