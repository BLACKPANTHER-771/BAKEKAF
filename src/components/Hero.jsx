import React from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Flame, 
  Star, 
  Award 
} from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';

export default function Hero({ onOpenOrderDrawer }) {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuElem = document.querySelector('#menu');
    if (menuElem) {
      const offsetTop = menuElem.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Subtle warm background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-caramel-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 bg-cream-200/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel-100/80 border border-caramel-200/60 text-caramel-800 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
              <span>ARTISAN BAKERY · CAFÉ</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-espresso-950 leading-[1.12] tracking-tight">
              Baked slowly. <br />
              <span className="font-serif italic font-normal text-caramel-600">Loved deeply.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-espresso-700 leading-relaxed max-w-xl font-normal">
              Handcrafted cakes, delicate French pastries and freshly brewed specialty coffee, made for the moments worth remembering.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-espresso-950 bg-caramel-400 hover:bg-caramel-500 active:scale-98 transition-all shadow-sm hover:shadow-md hover:shadow-caramel-400/20 group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-espresso-900 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={createGeneralWhatsAppLink("Hi Maison Crème, I’d like to place an order or enquire about today's fresh bakes!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-cream-50 bg-espresso-950 hover:bg-espresso-800 active:scale-98 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Small reassurance bullets */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-espresso-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                4.9/5 Rating (500+ Reviews)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-caramel-600" />
                Fresh Morning Batches Daily
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Award className="w-3.5 h-3.5 text-caramel-600" />
                100% Pure Normandy Butter
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Image Frame */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Decorative Frame Border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl sm:rounded-[2rem] border-2 border-caramel-300/40 transform rotate-1 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-[1.75rem] overflow-hidden shadow-2xl shadow-espresso-950/15 border border-cream-200/80 bg-cream-100">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                  alt="Freshly baked artisan sourdough bread and delicate pastries at Maison Crème"
                  className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle warm gradient overlay at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-cream-100 text-xs bg-espresso-950/60 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center justify-between">
                  <span className="font-serif italic">Morning Sourdough & Croissant Batch</span>
                  <span className="text-[11px] text-caramel-300 font-sans font-medium">Fresh out of oven</span>
                </div>
              </div>

              {/* Floating Card 1: Freshly Baked Daily */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 bg-cream-50/95 backdrop-blur-md border border-cream-200/90 rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-espresso-950/10 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-terracotta-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-espresso-950">Freshly Baked Daily</div>
                  <div className="text-[11px] text-espresso-600">36-hour slow fermentation</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
