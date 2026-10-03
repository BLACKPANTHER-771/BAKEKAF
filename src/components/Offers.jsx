import React, { useState } from 'react';
import { Tag, Sparkles, Copy, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { bakeryData, createWhatsAppOfferLink } from '../data/bakeryData';

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const handleClaimOffer = (offer) => {
    const url = createWhatsAppOfferLink(offer.title, offer.code);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="offers" className="py-16 md:py-24 bg-cream-100/80 border-y border-cream-200/80 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-caramel-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel-100 border border-caramel-200 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-caramel-600" />
            <span>Seasonal Privileges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950">
            Sweet moments deserve a little extra.
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-normal">
            Thoughtfully curated seasonal pairings and celebration pre-order privileges.
          </p>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {bakeryData.offers.map((offer) => (
            <div
              key={offer.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative text-left ${
                offer.highlight
                  ? 'bg-gradient-to-b from-espresso-950 to-espresso-900 text-white shadow-xl border border-espresso-800'
                  : 'bg-white text-espresso-950 shadow-sm hover:shadow-md border border-cream-200'
              }`}
            >
              {/* Top Tag & Discount Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      offer.highlight
                        ? 'bg-caramel-500/20 text-caramel-300 border border-caramel-400/30'
                        : 'bg-caramel-100 text-caramel-800 border border-caramel-200'
                    }`}
                  >
                    {offer.tag}
                  </span>

                  <span
                    className={`font-serif text-lg font-bold ${
                      offer.highlight ? 'text-caramel-400' : 'text-caramel-700'
                    }`}
                  >
                    {offer.discount}
                  </span>
                </div>

                {/* Offer Title */}
                <h3
                  className={`font-serif text-xl sm:text-2xl font-bold leading-snug ${
                    offer.highlight ? 'text-white' : 'text-espresso-950'
                  }`}
                >
                  {offer.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    offer.highlight ? 'text-cream-300' : 'text-espresso-700'
                  }`}
                >
                  {offer.description}
                </p>

                {/* Terms small text */}
                <div
                  className={`text-[11px] pt-1 ${
                    offer.highlight ? 'text-espresso-400' : 'text-espresso-500'
                  }`}
                >
                  * {offer.terms}
                </div>
              </div>

              {/* Bottom Actions: Promo code pill & WhatsApp Button */}
              <div className="pt-6 space-y-3 mt-4 border-t border-dashed border-cream-200/40">
                
                {/* Code container with copy */}
                <div
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-bold ${
                    offer.highlight
                      ? 'bg-espresso-900/90 border border-espresso-700 text-caramel-300'
                      : 'bg-cream-100 border border-cream-300 text-espresso-900'
                  }`}
                >
                  <span>CODE: {offer.code}</span>
                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="p-1 hover:opacity-80 transition-opacity"
                    title="Copy promo code"
                  >
                    {copiedCode === offer.code ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-sans">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-70" />
                    )}
                  </button>
                </div>

                {/* Claim Button */}
                <button
                  onClick={() => handleClaimOffer(offer)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    offer.highlight
                      ? 'bg-caramel-400 text-espresso-950 hover:bg-caramel-300 shadow-sm'
                      : 'bg-espresso-950 text-cream-50 hover:bg-caramel-700 shadow-xs'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{offer.actionText || 'Claim Offer on WhatsApp'}</span>
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
