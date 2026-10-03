import React, { useState } from 'react';
import { ShoppingBag, Plus, Sparkles, Eye, Check, X, ShieldCheck, Heart } from 'lucide-react';
import { bakeryData } from '../data/bakeryData';

export default function BestSellers({ onOpenOrderDrawer, onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customNote, setCustomNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (product, e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, 1);
    } else if (onOpenOrderDrawer) {
      onOpenOrderDrawer();
    }
  };

  const handleModalAddToBasket = () => {
    if (!selectedProduct) return;
    if (onAddToCart) {
      onAddToCart(selectedProduct, quantity, customNote);
    }
    setSelectedProduct(null);
    setCustomNote('');
    setQuantity(1);
  };

  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-cream-100/70 relative border-t border-cream-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel-100 border border-caramel-200 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
            <span>Signature Creations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950">
            Made to be remembered.
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-normal">
            Our favourites, baked fresh for you every single day.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bakeryData.bestSellers.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl hover:border-caramel-300 transition-all duration-300 flex flex-col cursor-pointer"
            >
              
              {/* Product Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-cream-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-espresso-950/85 text-cream-100 backdrop-blur-xs">
                      {product.badge}
                    </span>
                  )}
                  {product.isEggless && (
                    <span className="px-2 py-1 rounded-full text-[10px] font-semibold bg-emerald-700/90 text-white backdrop-blur-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                      Eggless
                    </span>
                  )}
                </div>

                {/* Quick view hint icon */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-xs text-espresso-950 p-2 rounded-full shadow-md">
                  <Eye className="w-4 h-4 text-espresso-900" />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-caramel-700 uppercase tracking-wider mb-1">
                    <span>{product.category}</span>
                    <span className="text-espresso-500 font-normal lowercase">{product.servings}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950 group-hover:text-caramel-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-espresso-600 font-medium italic mt-1">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-espresso-700 line-clamp-2 mt-2 font-normal leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-cream-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-espresso-500 block leading-none">Price</span>
                    <span className="font-serif text-2xl font-bold text-espresso-950">
                      {bakeryData.business.currency}{product.price}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleAddClick(product, e)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-cream-50 bg-espresso-950 hover:bg-caramel-700 active:scale-95 transition-all shadow-xs"
                    title={`Add ${product.name} to basket`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-caramel-300" />
                    <span>Add to Basket</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Menu prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-espresso-700">
            Looking for daily sourdough, celebratory cakes, or hot espresso?
          </p>
          <a
            href="#menu"
            className="inline-block mt-2 text-sm font-bold text-caramel-700 hover:text-caramel-900 underline underline-offset-4 decoration-caramel-400"
          >
            Explore our complete artisanal menu below ↓
          </a>
        </div>

      </div>

      {/* Product Quick View & Customization Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-cream-50 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-cream-200 relative max-h-[92vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-md text-espresso-950 hover:bg-white transition-all shadow-md"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 sm:h-64 shrink-0 overflow-hidden bg-cream-200">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {selectedProduct.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-espresso-950/90 text-cream-50 backdrop-blur-xs">
                    {selectedProduct.badge}
                  </span>
                )}
                {selectedProduct.isEggless && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700 text-white backdrop-blur-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    Eggless
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-left flex-1">
              <div>
                <span className="text-xs font-semibold text-caramel-700 uppercase tracking-wider">
                  {selectedProduct.category} · {selectedProduct.servings}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mt-1">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm font-medium text-espresso-700 italic mt-0.5">
                  {selectedProduct.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-espresso-800 leading-relaxed font-normal">
                {selectedProduct.description}
              </p>

              {/* Quantity Selector */}
              <div className="pt-2 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-espresso-700 block">Quantity</span>
                  <span className="text-[11px] text-espresso-500">Fresh daily bake</span>
                </div>
                <div className="flex items-center border border-cream-300 rounded-xl bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-espresso-800 hover:bg-cream-100 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-sm text-espresso-950 min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-2 text-espresso-800 hover:bg-cream-100 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation & Add to Basket Button */}
              <div className="pt-4 border-t border-cream-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-espresso-500 block leading-none">Total</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                    {bakeryData.business.currency}{selectedProduct.price * quantity}
                  </span>
                </div>

                <button
                  onClick={handleModalAddToBasket}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-espresso-950 text-cream-50 hover:bg-caramel-700 shadow-md active:scale-98 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-caramel-300" />
                  <span>Add {quantity} to Basket</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
