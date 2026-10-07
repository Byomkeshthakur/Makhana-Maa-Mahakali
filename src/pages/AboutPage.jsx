import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/companyData';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  CheckCircle, 
  Flame, 
  Droplets, 
  ArrowRight, 
  FileText, 
  Package,
  Building2,
  Calendar,
  Sparkles,
  Layers,
  Truck,
  Target,
  Eye,
  Heart,
  Phone
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const AboutPage = () => {
  return (
    <>
      <SEOHead 
        title="About Makhaan Mithila | Makhana Manufacturer in Madhubani, Bihar"
        description="Learn about Makhaan Maa Mahakali India Private Limited (Brand: Makhaan Mithila). Established 2019 in Madhubani, Bihar. GSTIN: 10AASCM7783K1ZU. Authentic lotus seed harvesting, hand-sorting, and wholesale supply."
      />

      <div className="space-y-0 text-left bg-brand-black opacity-100">
        
        {/* HERO HEADER */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-dark via-brand-black to-brand-black border-b border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
                <ShieldCheck className="w-4 h-4" />
                <span>About Makhaan Maa Mahakali India Pvt. Ltd.</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Authentic Mithila Heritage, <br />
                <span className="text-gold-gradient">Modern Food Manufacturing</span>
              </h1>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Operating under the flagship brand identity <strong className="text-white font-bold">{COMPANY_DETAILS.brandName}</strong>, <strong className="text-white font-bold">{COMPANY_DETAILS.name}</strong> (ESTD 2019, GSTIN: <span className="text-brand-gold font-bold">{COMPANY_DETAILS.gstin}</span>) is a premier processor and bulk wholesale supplier of popped lotus seeds based in Madhubani, Bihar.
              </p>
            </div>
          </div>
        </section>

        {/* 1. WHO WE ARE */}
        <section className="py-16 bg-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Business Identity</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Who We Are
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                <strong className="text-white">{COMPANY_DETAILS.name}</strong> is a registered food manufacturing and supply company operating out of Madhubani, Bihar. Under our registered commercial brand <strong className="text-brand-gold font-bold">{COMPANY_DETAILS.brandName}</strong>, we specialize in the direct procurement, quality inspection, size grading, hygienic packaging, and commercial wholesale distribution of popped fox nuts (Makhana).
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 bg-brand-card rounded-2xl border border-brand-border space-y-3 shadow-md opacity-100">
                <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Company & Brand</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  <span className="text-white font-bold">{COMPANY_DETAILS.name}</span><br />
                  Brand: <span className="text-brand-gold font-bold">{COMPANY_DETAILS.brandName}</span>
                </p>
              </div>

              <div className="p-6 bg-brand-card rounded-2xl border border-brand-border space-y-3 shadow-md opacity-100">
                <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Origin Location</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Madhubani, Bihar – 847211 / 847212<br />
                  Heart of the Mithila Makhana Belt
                </p>
              </div>

              <div className="p-6 bg-brand-card rounded-2xl border border-brand-border space-y-3 shadow-md opacity-100">
                <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Established & GSTIN</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  ESTD: <span className="text-white font-bold">2019</span><br />
                  GSTIN: <span className="text-brand-gold font-bold">{COMPANY_DETAILS.gstin}</span>
                </p>
              </div>

              <div className="p-6 bg-brand-card rounded-2xl border border-brand-border space-y-3 shadow-md opacity-100">
                <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Core Business</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Direct Pond Sourcing, Size Sorting, Retail Zipper Packs & B2B Wholesale Supply
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 2. OUR JOURNEY (TIMELINE) */}
        <section className="py-16 bg-brand-dark border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Verified Milestones</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">Our Journey</h2>
              <p className="text-xs sm:text-sm text-gray-200">
                Building a dependable Makhana supply business rooted in Madhubani, Bihar.
              </p>
            </div>

            <div className="relative border-l-2 border-brand-gold/30 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
              
              {/* Milestone 01 */}
              <div className="relative group opacity-100">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                </div>
                <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-2 shadow-md">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-gold px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">01</span>
                    <h3 className="text-base font-serif font-bold text-white">2019 — Brand Inception in Madhubani</h3>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Established Makhaan Maa Mahakali India Private Limited in Madhubani, Bihar to formalize direct trade connections between regional aquatic lotus cultivators and commercial food markets.
                  </p>
                </div>
              </div>

              {/* Milestone 02 */}
              <div className="relative group opacity-100">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                </div>
                <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-2 shadow-md">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-gold px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">02</span>
                    <h3 className="text-base font-serif font-bold text-white">Mithila Pond Sourcing Network</h3>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Formed direct procurement channels with traditional pond harvesters across Madhubani district, ensuring immediate access to raw harvested foxnut seeds (Guriyya).
                  </p>
                </div>
              </div>

              {/* Milestone 03 */}
              <div className="relative group opacity-100">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                </div>
                <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-2 shadow-md">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-gold px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">03</span>
                    <h3 className="text-base font-serif font-bold text-white">Hand Inspection & Size Grading</h3>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Implemented manual quality checking directly inside yellow bulk sacks and established standardized size classification (4+, 5+, and 6+ Soot Jumbo) for commercial buyers.
                  </p>
                </div>
              </div>

              {/* Milestone 04 */}
              <div className="relative group opacity-100">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                </div>
                <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-2 shadow-md">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-gold px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">04</span>
                    <h3 className="text-base font-serif font-bold text-white">Consumer Packaging & B2B Expansion</h3>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Expanded product offerings from heavy-duty bulk wholesale bags to consumer retail pouch packaging (`Gour.Bae 250g`), catering to both retail stores and wholesale distributors.
                  </p>
                </div>
              </div>

              {/* Milestone 05 */}
              <div className="relative group opacity-100">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                </div>
                <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-2 shadow-md">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-gold px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">05</span>
                    <h3 className="text-base font-serif font-bold text-white">Today — GSTIN Compliant Supply</h3>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Delivering GST-compliant bulk shipments nationwide from our Madhubani facility while maintaining authentic regional roots under the brand name <strong className="text-brand-gold">Makhaan Mithila</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. MITHILA — WHERE OUR STORY BEGINS */}
        <section className="py-16 bg-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl group opacity-100">
                  <img 
                    src={COMPANY_DETAILS.images.farming} 
                    alt="Lotus pond cultivation in Madhubani Bihar" 
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/95 p-4 rounded-xl border border-brand-gold/30">
                    <span className="text-xs text-brand-gold font-bold flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Madhubani District, Mithila Region</span>
                    </span>
                    <p className="text-xs text-gray-200 mt-1">
                      Natural aquatic pond ecosystems providing high-nutrient lotus seed crops.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Regional Origin</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Mithila — Where Our Story Begins
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  The wetland soil and aquatic climate of Madhubani, Bihar produce over 80% of India's finest lotus seeds. Makhaan Maa Mahakali India Pvt. Ltd. operates directly in this heritage region, partnering with local pond harvesters to preserve traditional lotus seed gathering techniques while upholding commercial food standards.
                </p>
                <div className="p-4 bg-brand-card rounded-xl border border-brand-border text-xs text-gray-200 space-y-1">
                  <span className="text-white font-bold block">Geographical Advantage:</span>
                  <span>Pure freshwater pond harvesting yields high fluffiness, clean kernels, and uniform white expansion upon popping.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. WHAT WE DO (4 STEPS) */}
        <section className="py-16 bg-brand-dark border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Operational Workflow</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">What We Do</h2>
              <p className="text-xs sm:text-sm text-gray-200">
                A streamlined 4-step process from aquatic pond harvesting to B2B freight distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Step 01 */}
              <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-3 opacity-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-lg">
                  01
                </div>
                <h3 className="text-base font-serif font-bold text-white">Makhana Sourcing</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Direct procurement of raw harvested lotus seeds (Guriyya) from pond harvesters across Madhubani district.
                </p>
              </div>

              {/* Step 02 */}
              <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-3 opacity-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-lg">
                  02
                </div>
                <h3 className="text-base font-serif font-bold text-white">Selection & Processing</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Controlled roasting, pan-popping, and manual sieve sorting into 4+, 5+, and 6+ Soot Jumbo size grades.
                </p>
              </div>

              {/* Step 03 */}
              <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-3 opacity-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-lg">
                  03
                </div>
                <h3 className="text-base font-serif font-bold text-white">Hygienic Packaging</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Protective packing into woven bulk sacks (8kg/10kg/25kg) and retail zipper pouches (`Gour.Bae 250g`).
                </p>
              </div>

              {/* Step 04 */}
              <div className="bg-brand-card p-6 rounded-2xl border border-brand-border space-y-3 opacity-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-lg">
                  04
                </div>
                <h3 className="text-base font-serif font-bold text-white">Wholesale & B2B Supply</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Prompt truck freight dispatch across India backed by commercial GSTIN invoices (GSTIN: {COMPANY_DETAILS.gstin}).
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. RAW MATERIAL / DIRECT SOURCING */}
        <section className="py-16 bg-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Quality Inspection</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Hand-Inspected Raw Sourcing
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Every batch of popped white Makhana is inspected by hand directly inside yellow woven bulk sacks in our Madhubani facility. We separate popped kernels into distinct Soot grades ensuring consistent density, clean de-shelling, and zero bitterness.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-brand-card rounded-xl border border-brand-border text-xs opacity-100">
                    <span className="text-brand-gold font-bold block text-sm">6+ Soot (20mm+)</span>
                    <span className="text-gray-200 text-xs mt-0.5 block">Jumbo Retail Grade</span>
                  </div>
                  <div className="p-3.5 bg-brand-card rounded-xl border border-brand-border text-xs opacity-100">
                    <span className="text-brand-gold font-bold block text-sm">5 Soot (16-19mm)</span>
                    <span className="text-gray-200 text-xs mt-0.5 block">Wholesale Roaster Grade</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-2 order-1">
                <div className="rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl group opacity-100">
                  <img 
                    src={COMPANY_DETAILS.images.bulkSack} 
                    alt="Hand quality inspection in yellow bulk sack" 
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/95 p-4 rounded-xl border border-brand-gold/30">
                    <span className="text-xs text-brand-gold font-bold">Physical Quality Inspection</span>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Hand inspecting white popped lotus seeds inside Madhubani bulk sacks.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. SUPPLY & OPERATIONS */}
        <section className="py-16 bg-brand-dark border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl group opacity-100">
                  <img 
                    src={COMPANY_DETAILS.images.warehouse} 
                    alt="Factory warehouse inventory stack" 
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/95 p-4 rounded-xl border border-brand-gold/30">
                    <span className="text-xs text-brand-gold font-bold">Factory Warehouse Stack</span>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Inventory stacks of packaged Makhana bags ready for freight truck dispatch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Supply Infrastructure</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Warehouse Stock & Freight Supply
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Our Madhubani facility maintains continuous warehouse inventory to fulfill large contractual B2B bulk orders without supply chain delays. All commercial dispatches include verified GSTIN billing (GSTIN: <span className="text-brand-gold font-bold">{COMPANY_DETAILS.gstin}</span>).
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Woven Bulk Woven Bags (8kg, 10kg, 15kg, 25kg)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct Truck Freight Dispatch from Madhubani Hub</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complete Commercial GSTIN Documentation & Tax Invoicing</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. AUTHENTIC CONSUMER PACKAGING */}
        <section className="py-16 bg-brand-black border-b border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Product Offerings</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Authentic Consumer Packaging
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  In addition to bulk wholesale sacks, we offer authentic consumer retail pouch packs (`Gour.Bae 250g Premium Pack`) equipped with freshness-lock zipper seals and clear product display windows.
                </p>

                <div className="p-4 bg-brand-card rounded-2xl border border-brand-gold/30 text-xs space-y-2 opacity-100 shadow-lg">
                  <div className="flex items-center justify-between text-brand-gold font-bold text-sm">
                    <span>Retail Pouch Specification</span>
                    <span>250g Pack</span>
                  </div>
                  <p className="text-gray-200 text-xs">
                    Freshness-lock zipper pouch, green-dot vegetarian certified, barcode and FSSAI ready.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-2 order-1">
                <div className="bg-gradient-to-b from-brand-card via-brand-dark to-brand-card rounded-3xl p-6 border border-brand-gold/40 shadow-2xl flex items-center justify-center h-96 opacity-100">
                  <img 
                    src={COMPANY_DETAILS.images.retailPouch1} 
                    alt="Authentic 250g Gour.Bae Makhana retail pouch" 
                    className="h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. OUR PURPOSE — MISSION, VISION & VALUES */}
        <section className="py-20 bg-gradient-to-b from-brand-dark via-brand-card/90 to-brand-dark border-b border-brand-gold/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">Core Foundations</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Our Purpose</h2>
              <p className="text-xs sm:text-sm text-gray-200">
                Guiding principles driving our sourcing, quality standards, and business relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Mission */}
              <div className="bg-brand-black/90 p-8 rounded-2xl border-t-2 border-t-brand-gold border-x border-b border-brand-gold/30 space-y-4 shadow-xl opacity-100">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-inner">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Our Mission</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  To supply authentic, high-grade Makhana from Madhubani, Bihar directly to commercial buyers and retail consumers with transparent quality, reliable supply, and honest service.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-brand-black/90 p-8 rounded-2xl border-t-2 border-t-brand-gold border-x border-b border-brand-gold/30 space-y-4 shadow-xl opacity-100">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-inner">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Our Vision</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  To build <strong className="text-white font-bold">Makhaan Mithila</strong> into a premier regional food brand recognized across India for genuine Mithila sourcing and dependable commercial integrity.
                </p>
              </div>

              {/* Values */}
              <div className="bg-brand-black/90 p-8 rounded-2xl border-t-2 border-t-brand-gold border-x border-b border-brand-gold/30 space-y-4 shadow-xl opacity-100">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-inner">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Core Values</h3>
                <ul className="text-xs sm:text-sm text-gray-200 space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></span>
                    <span><strong className="text-white">Authenticity:</strong> 100% Madhubani origin.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></span>
                    <span><strong className="text-white">Quality:</strong> Rigorous hand inspection.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></span>
                    <span><strong className="text-white">Reliability:</strong> Tax-compliant GST billing.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></span>
                    <span><strong className="text-white">Direct Business:</strong> Producer accessibility.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 9. WHY PARTNER WITH MAKHAAN MITHILA */}
        <section className="py-20 bg-brand-black border-b border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">B2B Advantages</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Why Partner With Makhaan Mithila?</h2>
              <p className="text-xs sm:text-sm text-gray-200">
                Empirical business benefits backed by direct Madhubani operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-brand-card p-6 rounded-2xl border border-brand-gold/30 space-y-3 opacity-100 shadow-xl hover:border-brand-gold/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-base font-serif font-bold text-white">Mithila-Based Business</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Located directly in Madhubani, Bihar—the central hub of Indian foxnut harvesting.
                </p>
              </div>

              <div className="bg-brand-card p-6 rounded-2xl border border-brand-gold/30 space-y-3 opacity-100 shadow-xl hover:border-brand-gold/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-md">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-serif font-bold text-white">Wholesale & Supply</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Structured supply capacity for bulk traders, roasters, snack brands, and distributors.
                </p>
              </div>

              <div className="bg-brand-card p-6 rounded-2xl border border-brand-gold/30 space-y-3 opacity-100 shadow-xl hover:border-brand-gold/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-md">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-base font-serif font-bold text-white">Product-Focused Selection</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Size-graded categories (4+, 5+, 6+ Soot Jumbo) tailored to customer specifications.
                </p>
              </div>

              <div className="bg-brand-card p-6 rounded-2xl border border-brand-gold/30 space-y-3 opacity-100 shadow-xl hover:border-brand-gold/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="text-base font-serif font-bold text-white">Direct Enquiry & Billing</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Verified GSTIN invoices (GSTIN: {COMPANY_DETAILS.gstin}), phone lines, and WhatsApp quotes.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 10. BRAND PHILOSOPHY */}
        <section className="py-20 bg-gradient-to-b from-brand-dark via-brand-card to-brand-dark border-b border-brand-gold/40 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 opacity-100">
            
            {/* Logo Container */}
            <div className="inline-block bg-brand-black p-5 rounded-2xl border border-brand-gold/40 shadow-2xl">
              <img 
                src={COMPANY_DETAILS.logo} 
                alt="Makhaan Mithila Official Logo" 
                className="w-20 sm:w-24 h-auto object-contain mx-auto"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">Brand Philosophy</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide">
                Makhaan Mithila
              </h2>
              <p className="text-lg sm:text-2xl font-serif italic text-gold-gradient font-semibold">
                "{COMPANY_DETAILS.tagline}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl mx-auto bg-brand-black/60 p-6 rounded-2xl border border-brand-gold/20 shadow-lg">
              In Mithila culture, Makhana (Foxnut) is far more than an agricultural commodity—it is sacred nourishment offered during traditional rituals, prized as pure Phalahar during fasts, and respected for its divine natural strength. <strong className="text-white">Makhaan Mithila</strong> honors this cultural legacy by bringing authentic, unadulterated Makhana directly from Madhubani's aquatic ponds to commercial kitchens and households across India.
            </p>

          </div>
        </section>

        {/* 11. READY TO CONNECT CTA */}
        <section className="py-20 bg-gradient-to-b from-brand-black via-brand-dark to-brand-card border-t border-brand-gold/50 relative">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 opacity-100">
            
            <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
              <Phone className="w-4 h-4" />
              <span>Direct Business Contact</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Ready to Connect With Our <span className="text-gold-gradient">Madhubani Team</span>?
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto leading-relaxed">
              Discuss bulk supply volume, size grading options, or request direct quotation details from our team in Madhubani, Bihar.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Connect on WhatsApp Direct</span>
              </a>

              <Link
                to="/contact"
                className="bg-gold-gradient text-brand-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Go to Contact & Enquiry Page</span>
              </Link>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="bg-brand-dark hover:bg-brand-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-brand-gold/30 shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};
