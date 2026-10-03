import React from 'react';
import { Star, MessageCircle, Heart, Quote, CheckCircle2 } from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-cream-100/60 border-t border-cream-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Summary */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel-100 border border-caramel-200 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-caramel-600 fill-caramel-600" />
            <span>Customer Love & Community</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950">
            Loved by our neighbourhood.
          </h2>

          {/* Rating Summary Box */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-2 pb-1 px-6 py-3 rounded-2xl bg-white border border-cream-200 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold text-espresso-950">
                {bakeryData.business.rating}
              </span>
              <span className="text-xs text-espresso-600 font-medium">/ 5.0</span>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="h-4 w-px bg-cream-300 hidden sm:block" />

            <div className="text-xs font-semibold text-espresso-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{bakeryData.business.totalReviews} Happy Local Patrons</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bakeryData.reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-cream-200 hover:border-caramel-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              {/* Quote icon background decoration */}
              <Quote className="w-10 h-10 text-cream-200/80 absolute top-5 right-5 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-espresso-800 leading-relaxed font-normal italic">
                  “{review.comment}”
                </p>

                {/* Favorite Item Badge */}
                {review.favoriteItem && (
                  <div className="inline-block text-[11px] font-semibold text-caramel-800 bg-caramel-50 px-2.5 py-1 rounded-md border border-caramel-200">
                    Favourite: <span className="font-bold">{review.favoriteItem}</span>
                  </div>
                )}
              </div>

              {/* Reviewer Meta with proper Image rendering */}
              <div className="pt-4 mt-4 border-t border-cream-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-caramel-100 border border-caramel-200 shrink-0 relative flex items-center justify-center">
                    {review.avatar && typeof review.avatar === 'string' && review.avatar.startsWith('http') ? (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="font-bold text-xs text-caramel-900">
                        {review.name ? review.name.charAt(0) : 'M'}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-espresso-950">
                      {review.name}
                    </h3>
                    <p className="text-[11px] text-espresso-500">
                      {review.role}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-espresso-400 font-medium">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-espresso-700">
            Have you visited us recently? We’d love to hear about your experience!
          </p>
          <a
            href={bakeryData.business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-xs sm:text-sm font-bold text-caramel-700 hover:text-caramel-900 underline underline-offset-4 decoration-caramel-400"
          >
            <span>Write a Google Review for Maison Crème →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
