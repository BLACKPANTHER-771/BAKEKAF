import React from 'react';

/**
 * Cursive Italic 'M' Luxury Monogram Logo
 */
export default function LogoMark({ className = "w-10 h-10" }) {
  return (
    <div className={`shrink-0 relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6E6B8" />
            <stop offset="40%" stopColor="#E2BE5E" />
            <stop offset="100%" stopColor="#B87B40" />
          </linearGradient>
          <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2C1810" />
            <stop offset="100%" stopColor="#160B07" />
          </linearGradient>
        </defs>

        {/* Circular Espresso Container */}
        <circle cx="50" cy="50" r="48" fill="url(#logoBg)" stroke="rgba(224, 206, 190, 0.2)" strokeWidth="1" />
        
        {/* Decorative Gold Dashed Accent Ring */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#logoGold)" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.85" />

        {/* Cursive Italic M Letter */}
        <g>
          {/* Swash entry */}
          <path d="M22 62 C22 55, 27 48, 33 46 C38 44, 40 48, 38 56 C36 63, 31 71, 26 71 C22 71, 20 67, 22 62 Z" fill="url(#logoGold)" />
          
          {/* Main Stem Loop */}
          <path d="M24 64 C28 48, 36 28, 44 23 C49 20, 52 24, 49 32 C45 42, 38 60, 35 71 C34 74, 31 75, 30 73 C29 70, 30 65, 32 58 C37 43, 44 28, 47 25 C48 24, 47 28, 44 38 L36 66 C35 70, 32 72, 30 72 C27 72, 25 68, 27 60 Z" fill="url(#logoGold)" />
          
          {/* Center Arch */}
          <path d="M42 41 C47 31, 56 25, 62 27 C66 28, 66 34, 63 43 C59 53, 53 66, 50 72 C48 74, 46 74, 45 72 C44 70, 46 64, 49 55 C53 44, 57 34, 58 31 C59 29, 57 28, 54 30 C49 33, 43 42, 39 52 Z" fill="url(#logoGold)" />
          
          {/* Right Arch & Flourish Tail */}
          <path d="M57 41 C62 31, 71 25, 77 27 C81 28, 81 34, 78 43 C74 53, 68 66, 65 72 C63 75, 61 75, 60 72 C59 70, 61 63, 64 55 C68 44, 72 34, 73 31 C74 29, 72 28, 69 30 C64 33, 58 42, 54 52 L62 38 C67 28, 77 26, 81 30 C84 34, 82 43, 76 56 C73 63, 71 69, 73 71 C75 73, 79 69, 83 62 C84 60, 85 61, 84 63 C80 72, 74 76, 70 74 C66 72, 67 65, 70 57 C75 46, 78 37, 77 34 C76 32, 73 33, 68 37 C61 43, 55 56, 51 68 Z" fill="url(#logoGold)" />
          
          {/* Tiny Gold Sparkle / Flourish Accent */}
          <circle cx="76" cy="23" r="2.2" fill="url(#logoGold)" />
        </g>
      </svg>
    </div>
  );
}
