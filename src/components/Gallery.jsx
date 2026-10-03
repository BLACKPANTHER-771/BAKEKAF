import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  MessageCircle, 
  Layers, 
  Grid3X3, 
  Compass, 
  ArrowRight,
  Heart,
  Eye
} from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';
import DomeGallery from './DomeGallery';

export default function Gallery() {
  const [viewMode, setViewMode] = useState('dome'); // 'dome' | 'grid'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const categories = ['All', 'Cakes', 'Pastries', 'Coffee', 'Breads', 'Ambiance', 'Stories'];

  const filteredItems = selectedCategory === 'All' 
    ? bakeryData.gallery 
    : bakeryData.gallery.filter(item => item.category === selectedCategory || (selectedCategory === 'Stories' && item.badge?.includes('Notes')));

  const handleItemSelect = (item) => {
    setActiveLightboxItem(item);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-espresso-950 text-cream-50 relative overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-caramel-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-caramel-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel-900/60 text-caramel-300 border border-caramel-700/50 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-caramel-400" />
              <span>Visual Chronicle & Life at Maison</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream-100">
              Moments of Warmth, Pastry & Connection
            </h2>
            <p className="text-sm sm:text-base text-cream-300/80 font-normal leading-relaxed">
              Explore our artisan creations, morning café ambiance, and neighbourhood customer notes in interactive 3D or curated photo journal.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2 bg-espresso-900/90 p-1.5 rounded-2xl border border-cream-200/20 self-start md:self-auto shadow-lg">
            <button
              onClick={() => setViewMode('dome')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                viewMode === 'dome'
                  ? 'bg-caramel-600 text-cream-50 shadow-md'
                  : 'text-cream-300 hover:text-cream-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>3D Dome View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-caramel-600 text-cream-50 shadow-md'
                  : 'text-cream-300 hover:text-cream-50'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Grid Journal</span>
            </button>
          </div>
        </div>

        {/* 3D DOME GALLERY MODE */}
        {viewMode === 'dome' && (
          <div className="relative animate-fadeIn">
            <DomeGallery
              images={bakeryData.gallery.map(g => ({
                src: g.src,
                alt: `${g.title} (${g.category})`,
                ...g
              }))}
              onItemClick={(item) => setActiveLightboxItem(item)}
            />
          </div>
        )}

        {/* GRID JOURNAL MODE */}
        {viewMode === 'grid' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-caramel-500 text-espresso-950 font-bold shadow-sm'
                      : 'bg-espresso-900/70 text-cream-300 hover:bg-espresso-800 border border-cream-200/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry-Style Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className="group relative rounded-2xl overflow-hidden bg-espresso-900/60 border border-cream-200/10 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-espresso-950/80 backdrop-blur-md text-[10px] font-bold text-caramel-300 border border-caramel-400/30">
                        {item.badge || item.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-1.5 rounded-full bg-cream-50/20 backdrop-blur-md text-cream-50 inline-block">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    <h3 className="font-serif text-lg font-bold text-cream-100 group-hover:text-caramel-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream-300/70 font-normal line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Preview Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-espresso-900 rounded-3xl overflow-hidden border border-cream-200/20 shadow-2xl text-left">
            
            {/* Close */}
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-espresso-950/80 text-cream-100 hover:bg-espresso-800 transition-colors border border-cream-200/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Preview */}
            <div className="max-h-[60vh] overflow-hidden bg-espresso-950">
              <img
                src={activeLightboxItem.src}
                alt={activeLightboxItem.title || activeLightboxItem.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-caramel-900/60 text-caramel-300 border border-caramel-600/40 text-xs font-semibold">
                  {activeLightboxItem.badge || activeLightboxItem.category || 'Artisan Highlight'}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                {activeLightboxItem.title || activeLightboxItem.alt}
              </h3>

              {activeLightboxItem.caption && (
                <p className="text-sm text-cream-200/80 leading-relaxed font-normal">
                  {activeLightboxItem.caption}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={createGeneralWhatsAppLink(`Hi Maison Crème! I loved this photo from your gallery: ${activeLightboxItem.title || activeLightboxItem.alt}. Can you share details/order availability?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-caramel-600 text-cream-50 hover:bg-caramel-500 font-semibold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-cream-50" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-espresso-800 text-cream-300 hover:text-cream-50 font-medium text-xs sm:text-sm transition-colors text-center"
                >
                  Close Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
