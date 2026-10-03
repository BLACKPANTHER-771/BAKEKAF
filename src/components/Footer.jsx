import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';
import BrandName from './BrandName';
import LogoMark from './LogoMark';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-espresso-950 text-cream-200 pt-16 pb-24 sm:pb-16 border-t border-espresso-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-espresso-900/80 text-left">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark className="w-10 h-10" />
              <div className="flex flex-col">
                <BrandName sizeClass="text-3xl" textClass="text-cream-50" />
                <span className="text-[11px] font-sans font-medium text-caramel-400 tracking-wider uppercase">
                  {bakeryData.business.subtagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-md font-normal">
              {bakeryData.business.description}
            </p>

            {/* Social & Contact Pills */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={bakeryData.business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-espresso-900 hover:bg-caramel-700 text-cream-200 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={bakeryData.business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-espresso-900 hover:bg-caramel-700 text-cream-200 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-900/40 border border-emerald-700/50 hover:bg-emerald-800 text-emerald-300 transition-colors"
                aria-label="WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-100">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-300/80">
              <li>
                <a href="#about" className="hover:text-caramel-300 transition-colors">Our Story & Ethos</a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-caramel-300 transition-colors">Signature Best Sellers</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-caramel-300 transition-colors">Artisan Menu & Bakes</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-caramel-300 transition-colors">Seasonal Privileges</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-caramel-300 transition-colors">3D Visual Chronicle</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-caramel-300 transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-100">
              Bakehouse Hours
            </h4>
            <div className="space-y-2 text-xs text-cream-300/80">
              {bakeryData.hours.map((h, i) => (
                <div key={i} className="pb-1.5 border-b border-espresso-900/50 last:border-none">
                  <span className="font-semibold text-cream-100 block">{h.day}</span>
                  <span className="text-caramel-300">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visit & Connect */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-100">
              Boutique Location
            </h4>
            <div className="space-y-2.5 text-xs text-cream-300/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-caramel-400 shrink-0 mt-0.5" />
                <span>{bakeryData.business.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
                <a href={`tel:${bakeryData.business.phone}`} className="hover:text-caramel-300">
                  {bakeryData.business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
                <a href={`mailto:${bakeryData.business.email}`} className="hover:text-caramel-300">
                  {bakeryData.business.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/70">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()}</span>
            <BrandName sizeClass="text-base" textClass="text-cream-200" />
            <span>· Handcrafted with passion & natural ingredients.</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-espresso-900 hover:bg-espresso-800 text-cream-200 transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
