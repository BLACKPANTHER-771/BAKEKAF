import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, ExternalLink, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { bakeryData } from '../data/bakeryData';

export default function PaymentModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const hasConfiguredLink = Boolean(bakeryData.business.paymentLink && bakeryData.business.paymentLink.trim() !== '');

  const handleDemoClick = (e) => {
    if (!hasConfiguredLink) {
      e.preventDefault();
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-cream-50 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-cream-200 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-cream-200 text-espresso-800 hover:bg-cream-300 transition-colors"
          aria-label="Close payment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-100 text-caramel-800 text-xs font-semibold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-caramel-600" />
            <span>Payment-Ready Architecture</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-espresso-950">
            Online Payment Gateway
          </h3>
          <p className="text-xs text-espresso-700 leading-relaxed font-normal">
            For client commercial deployment, this module connects directly to your Razorpay, UPI QR, or Stripe payment link without needing backend code or sensitive API secrets.
          </p>
        </div>

        {/* Informative commercial demo card */}
        <div className="p-4 rounded-2xl bg-white border border-cream-200 space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-espresso-900 pb-2 border-b border-cream-100">
            <span>Configured Payment Field</span>
            <span className={`px-2 py-0.5 rounded border text-[11px] font-semibold ${
              hasConfiguredLink 
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                : 'text-amber-800 bg-amber-50 border-amber-200'
            }`}>
              {hasConfiguredLink ? 'Active URL' : 'Ready for Client Link'}
            </span>
          </div>

          <div className="text-xs text-espresso-800 font-mono bg-cream-100/70 p-2.5 rounded-xl break-all">
            {hasConfiguredLink ? (
              bakeryData.business.paymentLink
            ) : (
              <span className="text-espresso-600">
                paymentLink: &quot;&quot; <span className="text-[10px] text-espresso-500 block font-sans mt-0.5">(Configure in src/data/bakeryData.js)</span>
              </span>
            )}
          </div>

          <div className="space-y-1.5 pt-1 text-xs text-espresso-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Instant UPI (Google Pay, PhonePe, Paytm QR)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Credit & Debit Cards with 3D Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero server or database overhead for the client</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-2.5">
          {hasConfiguredLink ? (
            <a
              href={bakeryData.business.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-espresso-950 text-cream-50 hover:bg-caramel-700 transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Open Razorpay Checkout</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              onClick={handleDemoClick}
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-espresso-950 text-cream-50 hover:bg-caramel-700 transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Info className="w-4 h-4 text-caramel-400" />
              <span>{copied ? 'Paste your Razorpay Link in bakeryData.js!' : 'Demo Gateway (No Secret Keys Needed)'}</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-semibold text-espresso-600 hover:text-espresso-900 transition-colors text-center"
          >
            Return to website
          </button>
        </div>

        {/* Security assurance */}
        <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-center gap-2 text-[10px] text-espresso-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Public safe demo · Zero API keys or private secrets in codebase</span>
        </div>

      </div>
    </div>
  );
}
