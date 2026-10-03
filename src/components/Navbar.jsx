import React, { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  Phone, 
  ShoppingBag,
  Sparkles,
  CreditCard
} from 'lucide-react';
import { bakeryData, createGeneralWhatsAppLink } from '../data/bakeryData';
import BrandName from './BrandName';
import LogoMark from './LogoMark';

export default function Navbar({ onOpenOrderDrawer, onOpenPaymentModal, cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Best Sellers', href: '#bestsellers' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-espresso-950 text-cream-200 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-espresso-900/50">
        <Sparkles className="w-3.5 h-3.5 text-caramel-400 animate-pulse" />
        <span>Fresh Morning Batch Ready · Artisan Sourdough & French Pastries</span>
        <span className="hidden md:inline text-espresso-400">|</span>
        <span className="hidden md:inline text-caramel-300">Open Today until 10:00 PM</span>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-md py-3 border-b border-cream-200'
            : 'bg-cream-50/80 backdrop-blur-sm py-4 border-b border-cream-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <LogoMark className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <BrandName 
                sizeClass="text-2xl sm:text-3xl" 
                textClass="text-espresso-950 group-hover:text-caramel-800 transition-colors"
              />
              <span className="text-[10px] sm:text-[11px] font-sans font-medium text-caramel-800 tracking-wider uppercase -mt-0.5">
                {bakeryData.business.subtagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm font-medium text-espresso-800 hover:text-caramel-700 transition-colors relative py-1 hover:font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-caramel-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Box Drawer Trigger */}
            <button
              onClick={onOpenOrderDrawer}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-cream-200 text-espresso-900 hover:bg-cream-300 transition-colors border border-cream-300 relative cursor-pointer"
              title="Open Basket / Order Box"
            >
              <ShoppingBag className="w-4 h-4 text-caramel-700" />
              <span>Basket</span>
              {cartCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-caramel-600 text-white text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Order CTA */}
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-espresso-950 text-cream-50 hover:bg-caramel-800 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu & Quick Actions Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenOrderDrawer}
              className="p-2 rounded-xl bg-cream-200 text-espresso-900 hover:bg-cream-300 relative cursor-pointer"
              aria-label="Open Basket"
            >
              <ShoppingBag className="w-5 h-5 text-caramel-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-caramel-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-cream-100 text-espresso-950 hover:bg-cream-200 border border-cream-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-50 border-b border-cream-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-espresso-900 hover:bg-cream-200 hover:text-caramel-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 border-t border-cream-200 flex flex-col gap-2.5">
                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-espresso-950 text-cream-50 hover:bg-caramel-800"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${bakeryData.business.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-cream-200 text-espresso-900 hover:bg-cream-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-espresso-700" />
                    <span>Call Café</span>
                  </a>

                  {onOpenPaymentModal && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenPaymentModal();
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-caramel-100 text-caramel-900 hover:bg-caramel-200"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-caramel-700" />
                      <span>Payment Info</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
