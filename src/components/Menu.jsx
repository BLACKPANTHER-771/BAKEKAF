import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Sparkles, 
  Search, 
  Check, 
  Leaf, 
  ShoppingBag,
  MessageCircle
} from 'lucide-react';
import { bakeryData, createWhatsAppCustomCakeLink } from '../data/bakeryData';

export default function Menu({ onOpenOrderDrawer, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyEggless, setOnlyEggless] = useState(false);

  // Normalize category list
  const categoryList = useMemo(() => {
    return ['All', 'Artisan Cakes', 'Viennoiserie & Pastries', 'Specialty Coffee', 'Sourdough & Breads', 'High Tea & Desserts'];
  }, []);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return bakeryData.menuItems.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      
      // Search filter
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Eggless/Veg filter
      const matchesEggless = onlyEggless ? item.isEggless : true;

      return matchesCategory && matchesSearch && matchesEggless;
    });
  }, [activeCategory, searchQuery, onlyEggless]);

  const handleAdd = (item) => {
    if (onAddToCart) {
      onAddToCart(item, 1);
    } else if (onOpenOrderDrawer) {
      onOpenOrderDrawer();
    }
  };

  const handleCustomCake = () => {
    const url = createWhatsAppCustomCakeLink();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel-100 border border-caramel-200 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
            <span>Artisanal Kitchen Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950">
            Our Complete Menu
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-normal">
            Baked slowly with Normandy butter, Belgian single-origin chocolate, and live sourdough cultures.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          
          {/* Top Controls: Search + Veg Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sourdough, croissants, truffle cake, cold brew..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-cream-300 focus:outline-none focus:ring-2 focus:ring-caramel-400 text-espresso-950 placeholder:text-espresso-400 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-espresso-400 hover:text-espresso-800"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Eggless / Veg Toggle Switch */}
            <button
              onClick={() => setOnlyEggless(!onlyEggless)}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                onlyEggless
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                  : 'bg-white text-espresso-800 border-cream-300 hover:bg-cream-100'
              }`}
            >
              <Leaf className={`w-4 h-4 ${onlyEggless ? 'text-emerald-300' : 'text-emerald-600'}`} />
              <span>Eggless Only</span>
              {onlyEggless && <Check className="w-3.5 h-3.5 ml-0.5" />}
            </button>

          </div>

          {/* Horizontally Scrollable Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar border-b border-cream-200">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-espresso-950 text-cream-50 font-bold shadow-xs'
                    : 'bg-cream-100/80 text-espresso-800 hover:bg-cream-200/90 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results count & active indicator */}
        <div className="flex items-center justify-between text-xs text-espresso-600 mb-6 max-w-5xl mx-auto px-1">
          <span>Showing {filteredItems.length} handcrafted items</span>
          {onlyEggless && <span className="text-emerald-700 font-medium">🌿 Showing 100% eggless creations</span>}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-cream-200 max-w-xl mx-auto p-8">
            <p className="font-serif text-lg font-bold text-espresso-900">No matching items found</p>
            <p className="text-xs text-espresso-600 mt-1">Try changing your search term or turning off filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setOnlyEggless(false); setActiveCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold bg-espresso-950 text-cream-50"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group p-4 sm:p-5 rounded-2xl bg-white/90 border border-cream-200 hover:border-caramel-300 hover:shadow-lg transition-all duration-300 flex items-start gap-4 text-left"
              >
                
                {/* Item Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-cream-200 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.isEggless && (
                    <span 
                      className="absolute bottom-1 left-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white" 
                      title="100% Eggless / Vegetarian"
                    />
                  )}
                </div>

                {/* Details & Price */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-950 group-hover:text-caramel-700 transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-serif text-base sm:text-lg font-bold text-espresso-950 shrink-0">
                        {bakeryData.business.currency}{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-espresso-600 font-normal leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom row: Badge + Add to Basket Button */}
                  <div className="pt-2.5 flex items-center justify-between gap-2 mt-auto">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-cream-100 text-espresso-700 border border-cream-200">
                      {item.tags?.[0] || item.category}
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-espresso-950 bg-cream-100 hover:bg-caramel-400 group/btn active:scale-95 transition-all border border-cream-300 hover:border-caramel-400 cursor-pointer shadow-2xs"
                      title={`Add ${item.name} to Basket`}
                    >
                      <Plus className="w-3.5 h-3.5 text-espresso-900 group-hover/btn:scale-110 transition-transform" />
                      <span>Add to Basket</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Custom Cake / Large Catering Callout Card */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-espresso-950 to-espresso-900 text-cream-100 p-6 sm:p-10 relative overflow-hidden shadow-xl border border-espresso-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-caramel-400 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Bespoke Pâtisserie & Events
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Planning a Wedding, Birthday or High-Tea?
              </h3>
              <p className="text-xs sm:text-sm text-cream-300 font-normal leading-relaxed">
                Our master pastry chefs design custom multi-tiered celebration cakes, dessert tables, and artisan pastry platters tailored to your exact taste.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCustomCake}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-caramel-400 text-espresso-950 hover:bg-caramel-300 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-espresso-950" />
                <span>Enquire Custom Cake</span>
              </button>
            </div>
          </div>

          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-caramel-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
