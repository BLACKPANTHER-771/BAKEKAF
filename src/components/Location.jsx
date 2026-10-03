import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';

export default function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(bakeryData.business.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Address, Hours, & Contact Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel-100 border border-caramel-200 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-caramel-600" />
                <span>Visit Our Bakery & Café</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950">
                Come say hello.
              </h2>
              <p className="text-sm sm:text-base text-espresso-700 font-normal">
                Step inside for the warm aroma of fresh cinnamon, slow-brewed espresso, and golden sourdough straight from the hearth.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-white border border-cream-200 shadow-xs space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-caramel-100 text-caramel-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-caramel-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-caramel-800">
                    Location & Landmark
                  </h3>
                  <p className="text-sm font-bold text-espresso-950 mt-1">
                    {bakeryData.business.address.line1}
                  </p>
                  <p className="text-xs text-espresso-700">
                    {bakeryData.business.address.line2}, {bakeryData.business.address.city} – {bakeryData.business.address.pincode}
                  </p>
                  <p className="text-[11px] text-caramel-700 font-medium mt-1">
                    📍 {bakeryData.business.address.landmark}
                  </p>
                </div>
                
                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-cream-100 hover:bg-cream-200 text-espresso-800 transition-colors text-xs flex items-center gap-1 shrink-0"
                  title="Copy full address"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4 text-espresso-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-5 rounded-2xl bg-white border border-cream-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-cream-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel-800">
                  <Clock className="w-4 h-4 text-caramel-600" />
                  <span>Baking & Service Hours</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Today
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {bakeryData.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-1 text-espresso-800">
                    <span className="font-semibold">{h.day}</span>
                    <span className="font-mono text-espresso-950 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Directions, Call, WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={bakeryData.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-caramel-400 text-espresso-950 hover:bg-caramel-300 active:scale-98 transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${bakeryData.business.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-espresso-900 hover:bg-cream-100 border border-cream-300 transition-all shadow-2xs"
              >
                <Phone className="w-4 h-4 text-caramel-600" />
                <span>Call Us</span>
              </a>

              <a
                href={createGeneralWhatsAppLink("Hi Maison Crème, I’m on my way and would like to confirm table/takeaway availability!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-espresso-950 text-cream-50 hover:bg-caramel-700 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-cream-200 bg-white relative">
              
              {/* Map View Header Banner */}
              <div className="bg-espresso-950 text-cream-100 px-5 py-3 flex items-center justify-between text-xs">
                <span className="font-serif italic font-bold">Maison Crème · Indiranagar Quarter</span>
                <a
                  href={bakeryData.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caramel-300 hover:text-caramel-100 flex items-center gap-1 font-semibold"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative h-[340px] sm:h-[400px] w-full bg-cream-200">
                <iframe
                  title="Maison Crème Bakery & Café Location"
                  src={bakeryData.business.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Bottom Mini Banner */}
              <div className="p-3 bg-cream-50 border-t border-cream-200 text-center text-xs text-espresso-700 flex items-center justify-around">
                <span>🚗 Valet Parking Available</span>
                <span className="text-cream-300">|</span>
                <span>🐾 Pet-Friendly Patio</span>
                <span className="text-cream-300">|</span>
                <span>⚡ Free High-Speed WiFi</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
