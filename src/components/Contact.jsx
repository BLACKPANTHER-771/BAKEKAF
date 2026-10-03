import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send, 
  Sparkles 
} from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}


export default function Contact({ onOpenOrderDrawer }) {
  const [quickMsg, setQuickMsg] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [inquiryType, setInquiryType] = useState('General Enquiry');

  const handleSendNote = (e) => {
    e.preventDefault();
    const formatted = `Hi Maison Crème! My name is ${customerName || 'a guest'}.\n\n📌 Topic: ${inquiryType}\n💬 Message: ${quickMsg || 'I’d like to know more about your daily specials!'}`;
    const url = createGeneralWhatsAppLink(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
    setQuickMsg('');
    setCustomerName('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-cream-100/70 border-t border-cream-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel-100 border border-caramel-200 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
            <span>Connect With Our Pâtissiers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950">
            Visit. Call. Order.
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-normal">
            Whether it’s a bespoke birthday cake, corporate high-tea platters, or a quiet morning table, we’re always delighted to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Channel Cards */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            {/* WhatsApp Direct Card */}
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-cream-200 hover:border-emerald-400 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Fastest Response
                  </span>
                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    WhatsApp Ordering & Queries
                  </h3>
                  <p className="text-xs text-espresso-600">
                    Instant replies for cakes, daily bakes & custom quotes
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-espresso-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Phone Call Card */}
            <a
              href={`tel:${bakeryData.business.phone}`}
              className="p-5 rounded-2xl bg-white border border-cream-200 hover:border-caramel-300 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cream-100 text-caramel-700 flex items-center justify-center border border-cream-300 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-caramel-800">
                    Direct Café Line
                  </span>
                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    {bakeryData.business.phoneDisplay}
                  </h3>
                  <p className="text-xs text-espresso-600">
                    Speak directly with our front desk & barista team
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-espresso-400 group-hover:text-caramel-600 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Instagram Card */}
            <a
              href={bakeryData.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-cream-200 hover:border-pink-300 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700">
                    Daily Visuals & Stories
                  </span>
                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    {bakeryData.business.instagramHandle}
                  </h3>
                  <p className="text-xs text-espresso-600">
                    Follow behind-the-scenes baking reels & batch drops
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-espresso-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${bakeryData.business.email}`}
              className="p-5 rounded-2xl bg-white border border-cream-200 hover:border-caramel-300 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cream-100 text-espresso-800 flex items-center justify-center border border-cream-300 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-espresso-600">
                    Corporate & Press
                  </span>
                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    {bakeryData.business.email}
                  </h3>
                  <p className="text-xs text-espresso-600">
                    For catering contracts, collaborations & inquiries
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-espresso-400 group-hover:text-espresso-800 group-hover:translate-x-1 transition-all" />
            </a>

          </div>

          {/* Right Column: Instant WhatsApp Query Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-sm text-left flex flex-col justify-between">
            <div>
              <div className="space-y-1 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-caramel-800">
                  Quick Inquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-espresso-950">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-espresso-600">
                  Fill in your request to start a live conversation directly on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSendNote} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-espresso-900 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Maya Sharma"
                    className="w-full text-xs p-3 rounded-xl border border-cream-300 bg-cream-50/50 focus:outline-none focus:ring-2 focus:ring-caramel-400"
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-bold text-espresso-900 mb-1">
                    What can we help you with?
                  </label>
                  <select
                    id="contact-topic"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-cream-300 bg-cream-50/50 focus:outline-none focus:ring-2 focus:ring-caramel-400"
                  >
                    <option>Custom Celebration Cake</option>
                    <option>Bulk Sourdough & Pastry Pre-order</option>
                    <option>Table Reservation / Afternoon Tea</option>
                    <option>Corporate Catering & Gifting</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-espresso-900 mb-1">
                    Your Note or Query
                  </label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    placeholder="e.g. Looking for a 1.5kg Pistachio Rose cake for this Saturday evening..."
                    className="w-full text-xs p-3 rounded-xl border border-cream-300 bg-cream-50/50 focus:outline-none focus:ring-2 focus:ring-caramel-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-cream-50 bg-espresso-950 hover:bg-caramel-700 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Send via WhatsApp →</span>
                </button>
              </form>
            </div>

            <div className="pt-4 mt-6 border-t border-cream-100 flex items-center justify-between text-[11px] text-espresso-500">
              <span>⚡ Average response time: &lt; 15 minutes</span>
              <span>🔒 Direct end-to-end chat</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
