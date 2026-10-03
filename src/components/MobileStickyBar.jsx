import React from 'react';
import { MessageCircle, Phone, ShoppingBag, Utensils } from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';

export default function MobileStickyBar({ onOpenOrderDrawer, cartCount = 0 }) {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuElem = document.querySelector('#menu');
    if (menuElem) {
      const offsetTop = menuElem.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-cream-50/95 backdrop-blur-lg border-t border-cream-200/90 px-4 py-2.5 shadow-[0_-8px_20px_rgba(35,19,13,0.08)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call Icon Button */}
        <a
          href={`tel:${bakeryData.business.phone}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-espresso-900 bg-cream-100 hover:bg-cream-200 border border-cream-200 shrink-0 w-12 h-12 transition-colors"
          aria-label="Call Maison Crème"
        >
          <Phone className="w-4 h-4 text-caramel-700" />
          <span className="text-[9px] font-bold mt-0.5">Call</span>
        </a>

        {/* Menu shortcut button */}
        <a
          href="#menu"
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-espresso-900 bg-cream-100 hover:bg-cream-200 border border-cream-200 shrink-0 w-12 h-12 transition-colors"
          aria-label="View Menu"
        >
          <Utensils className="w-4 h-4 text-caramel-700" />
          <span className="text-[9px] font-bold mt-0.5">Menu</span>
        </a>

        {/* Basket button with live badge */}
        <button
          onClick={onOpenOrderDrawer}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-espresso-900 bg-cream-100 hover:bg-cream-200 border border-cream-200 shrink-0 w-12 h-12 transition-colors relative cursor-pointer"
          aria-label="Open Basket"
        >
          <ShoppingBag className="w-4 h-4 text-caramel-700" />
          <span className="text-[9px] font-bold mt-0.5">Basket</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-caramel-600 text-white text-[9px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        {/* Primary Main WhatsApp Order CTA */}
        <a
          href={createGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-xl bg-espresso-950 hover:bg-caramel-700 text-cream-50 font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all px-3"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">Order on WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
