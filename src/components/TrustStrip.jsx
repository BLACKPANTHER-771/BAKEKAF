import React from 'react';
import { Clock, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { bakeryData } from '../data/bakeryData';

export default function TrustStrip() {
  const iconMap = {
    Clock: Clock,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    Heart: Heart
  };

  return (
    <section className="border-y border-cream-200/80 bg-cream-100/60 py-6 sm:py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {bakeryData.trustPoints.map((point) => {
            const IconComponent = iconMap[point.icon] || Sparkles;
            return (
              <div 
                key={point.id} 
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-2 rounded-xl transition-all"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-cream-200/70 text-caramel-700 flex items-center justify-center border border-caramel-300/40 shadow-xs">
                  <IconComponent className="w-5 h-5 text-caramel-600" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-espresso-950 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-espresso-600 mt-0.5 leading-snug line-clamp-2">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
