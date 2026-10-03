import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import BestSellers from './components/BestSellers';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickOrderDrawer from './components/QuickOrderDrawer';
import PaymentModal from './components/PaymentModal';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((e) => e.item.id === item.id);
      if (existing) {
        return prev.map((e) =>
          e.item.id === item.id ? { ...e, quantity: e.quantity + quantity } : e
        );
      }
      return [...prev, { item, quantity }];
    });
    setIsOrderDrawerOpen(true);
  };

  const totalCartCount = cart.reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-espresso-950 font-sans selection:bg-caramel-200 selection:text-espresso-900 relative">
      
      {/* Navigation Header */}
      <Navbar 
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        />

        {/* Trust Strip */}
        <TrustStrip />

        {/* Editorial About Section */}
        <About />

        {/* Best Sellers (Signature Creations) */}
        <BestSellers 
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Complete Menu with Tabs & Search */}
        <Menu 
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Seasonal Offers & Privileges */}
        <Offers />

        {/* Visual Gallery / Lightbox */}
        <Gallery />

        {/* Customer Reviews & Neighborhood Testimonials */}
        <Reviews />

        {/* Location, Live Schedule & Google Maps */}
        <Location />

        {/* Direct Contact & WhatsApp Query */}
        <Contact 
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Custom Box Order Drawer */}
      <QuickOrderDrawer 
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        setCart={setCart}
      />

      {/* Payment-Ready Razorpay Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar 
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        cartCount={totalCartCount}
      />

    </div>
  );
}
