import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Heart, Award, Flame, Coffee } from 'lucide-react';
import { bakeryData } from '../data/bakeryData';

export default function About() {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story Mosaic */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              
              {/* Primary Image: Master Baker / Fresh Croissants */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                  alt="Artisan baker shaping handcrafted pastries at Maison Crème"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent" />
              </div>

              {/* Inset Secondary Image */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-44 sm:w-56 rounded-2xl overflow-hidden border-4 border-cream-50 shadow-2xl hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=500&q=80"
                  alt="Specialty coffee and cake pairing"
                  className="w-full h-36 sm:h-44 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative Stamp */}
              <div className="absolute top-4 left-4 bg-espresso-950/80 backdrop-blur-md text-cream-100 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-cream-200/20">
                <Sparkles className="w-3 h-3 text-caramel-400" />
                <span>Since {bakeryData.business.foundedYear}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Statistics */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-caramel-700 uppercase">
                Our Philosophy & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 leading-tight">
                {bakeryData.aboutStory.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-espresso-800 font-medium leading-relaxed">
              {bakeryData.aboutStory.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-espresso-700 leading-relaxed font-normal">
              {bakeryData.aboutStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Chef Ethos Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-cream-100/90 border-l-4 border-caramel-500 border-y border-r border-cream-200">
              <p className="font-serif italic text-espresso-900 text-sm sm:text-base">
                {bakeryData.aboutStory.chefQuote}
              </p>
              <div className="mt-2 text-xs font-semibold text-caramel-800">
                — {bakeryData.aboutStory.chefName} · <span className="font-normal text-espresso-600">{bakeryData.aboutStory.chefRole}</span>
              </div>
            </div>

            {/* Statistic Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {bakeryData.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-3.5 rounded-xl bg-white/70 border border-cream-200 text-center sm:text-left transition-all hover:bg-white hover:shadow-xs"
                >
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-caramel-700">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-espresso-950 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-espresso-600 mt-0.5 line-clamp-2">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* "Our Story →" Action Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-2 text-sm font-bold text-espresso-950 hover:text-caramel-700 group transition-colors focus:outline-none"
              >
                <span>Read Full Story & Sourcing Ethos</span>
                <ArrowRight className="w-4 h-4 text-caramel-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Story & Philosophy Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-cream-50 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-cream-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-cream-200 text-espresso-800 hover:bg-cream-300 transition-colors"
              aria-label="Close story modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 text-left">
              <span className="text-xs font-bold tracking-widest text-caramel-700 uppercase">
                The Maison Crème Chronicle
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                Slow Ferment, Pure Butter & The Art of Patience
              </h3>

              <div className="space-y-3 text-sm text-espresso-800 leading-relaxed pt-2">
                <p>
                  At <strong>Maison Crème</strong>, we began with a simple belief: in a fast-paced world, some things should never be rushed.
                </p>
                <p>
                  Every morning at 4:30 AM, our bakers nurture the live sourdough cultures that have been cultivated since our doors opened. Our croissants go through a 72-hour lamination and resting process with pure Normandy churned butter to achieve the signature translucent honeycomb crumb.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-cream-200 text-center">
                    <Award className="w-5 h-5 text-caramel-600 mx-auto mb-1" />
                    <div className="font-bold text-xs text-espresso-900">Normandy Butter</div>
                    <div className="text-[10px] text-espresso-600">84% butterfat French churn</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-cream-200 text-center">
                    <Flame className="w-5 h-5 text-caramel-600 mx-auto mb-1" />
                    <div className="font-bold text-xs text-espresso-900">36h Sourdough</div>
                    <div className="text-[10px] text-espresso-600">Easy on digestion & rich flavor</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-cream-200 text-center">
                    <Coffee className="w-5 h-5 text-caramel-600 mx-auto mb-1" />
                    <div className="font-bold text-xs text-espresso-900">Single Estate Coffee</div>
                    <div className="text-[10px] text-espresso-600">Ethically sourced Arabica</div>
                  </div>
                </div>

                <p>
                  Whether you're celebrating a milestone birthday, enjoying an afternoon treat with loved ones, or picking up bread for Sunday family lunch, thank you for welcoming our passion into your home.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex justify-end">
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="px-6 py-2.5 rounded-full bg-espresso-950 text-cream-50 text-xs font-semibold hover:bg-caramel-700 transition-colors"
                >
                  Close Story
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
