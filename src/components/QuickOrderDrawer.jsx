import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  Sparkles,
  Check
} from 'lucide-react';
import { bakeryData } from '../data/bakeryData';

export default function QuickOrderDrawer({ 
  isOpen, 
  onClose, 
  cart: externalCart, 
  setCart: setExternalCart 
}) {
  const [internalCart, setInternalCart] = useState([]);
  const cart = externalCart !== undefined ? externalCart : internalCart;
  const setCart = setExternalCart !== undefined ? setExternalCart : setInternalCart;

  const [orderNotes, setOrderNotes] = useState('');
  const [customerName, setCustomerName] = useState('');

  if (!isOpen) return null;

  const handleUpdateQuantity = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter(Boolean)
    );
  };

  const handleAddItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((e) => e.item.id === item.id);
      if (existing) {
        return prev.map((e) =>
          e.item.id === item.id ? { ...e, quantity: e.quantity + 1 } : e
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  };

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `Hi ${bakeryData.business.name}, I’d like to place an order for the following items:\n\n`;
    
    if (customerName) {
      message += `👤 Name: ${customerName}\n`;
    }

    message += `📋 Order Summary:\n`;
    cart.forEach((entry, idx) => {
      message += `${idx + 1}. *${entry.item.name}* × ${entry.quantity} = ${bakeryData.business.currency}${entry.item.price * entry.quantity}\n`;
    });

    message += `\n💰 *Total: ${bakeryData.business.currency}${calculateTotal()}*\n`;

    if (orderNotes.trim()) {
      message += `\n📝 Special Request: ${orderNotes}\n`;
    }

    message += `\nPlease confirm order availability and estimated pickup/delivery time. Thank you!`;

    const url = `https://wa.me/${bakeryData.business.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-espresso-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 shadow-2xl border-l border-cream-200 flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 bg-cream-100 border-b border-cream-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-caramel-600 text-cream-50 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-espresso-950">
                  Your Order Basket
                </h3>
                <p className="text-[11px] text-espresso-600">
                  Review items & send combined list to WhatsApp
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-cream-200 text-espresso-800 hover:bg-cream-300 transition-colors"
              aria-label="Close order drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 text-left">
            
            {/* Cart Items List */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-caramel-800">
                  Selected Items ({cart.reduce((s, e) => s + e.quantity, 0)})
                </span>
                {cart.length > 0 && (
                  <button
                    onClick={() => setCart([])}
                    className="text-[11px] text-espresso-500 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 bg-white rounded-2xl border border-cream-200 p-4">
                  <p className="text-xs text-espresso-600 font-medium">Your basket is currently empty.</p>
                  <p className="text-[11px] text-espresso-400 mt-0.5">Click &quot;Add to Basket&quot; on any delicacy or use quick suggestions below!</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {cart.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="p-3 bg-white rounded-xl border border-cream-200 flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-espresso-950 truncate">
                          {entry.item.name}
                        </h4>
                        <span className="text-[11px] text-caramel-700 font-serif font-bold">
                          {bakeryData.business.currency}{entry.item.price * entry.quantity}
                        </span>
                      </div>

                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2 bg-cream-100 rounded-lg p-1">
                        <button
                          onClick={() => handleUpdateQuantity(entry.item.id, -1)}
                          className="w-5 h-5 flex items-center justify-center text-xs font-bold text-espresso-800 hover:bg-cream-200 rounded cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{entry.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(entry.item.id, 1)}
                          className="w-5 h-5 flex items-center justify-center text-xs font-bold text-espresso-800 hover:bg-cream-200 rounded cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Add Suggestions */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-caramel-800 block mb-2">
                Quick Add Delicacies
              </span>
              <div className="grid grid-cols-2 gap-2">
                {bakeryData.bestSellers.slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAddItem(item)}
                    className="p-2.5 rounded-xl bg-cream-100/80 hover:bg-cream-200 border border-cream-200 text-left transition-colors flex flex-col justify-between cursor-pointer"
                  >
                    <span className="text-[11px] font-bold text-espresso-950 line-clamp-1">
                      + {item.name}
                    </span>
                    <span className="text-[10px] text-caramel-700 font-serif font-bold mt-1">
                      {bakeryData.business.currency}{item.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* User Details & Instructions */}
            <div className="space-y-3 pt-2 border-t border-cream-200">
              <div>
                <label className="block text-xs font-bold text-espresso-900 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rahul Verma"
                  className="w-full text-xs p-2.5 rounded-xl border border-cream-300 bg-white focus:outline-none focus:ring-2 focus:ring-caramel-400 text-espresso-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-espresso-900 mb-1">
                  Special Notes / Delivery or Pickup Time
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Need eggless only, pickup today at 5 PM"
                  className="w-full text-xs p-2.5 rounded-xl border border-cream-300 bg-white focus:outline-none focus:ring-2 focus:ring-caramel-400 text-espresso-950"
                />
              </div>
            </div>

          </div>

          {/* Drawer Footer & Total */}
          <div className="p-5 sm:p-6 bg-white border-t border-cream-200 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-espresso-600 font-medium">Estimated Total:</span>
              <span className="font-serif text-2xl font-bold text-espresso-950">
                {bakeryData.business.currency}{calculateTotal()}
              </span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              disabled={cart.length === 0}
              className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                cart.length > 0
                  ? 'bg-espresso-950 text-cream-50 hover:bg-caramel-700 cursor-pointer active:scale-98'
                  : 'bg-cream-300 text-espresso-400 cursor-not-allowed'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Send Final Order to WhatsApp ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
            </button>
            
            <p className="text-[10px] text-center text-espresso-500">
              No immediate online payment required. Kitchen confirms availability directly on WhatsApp.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
