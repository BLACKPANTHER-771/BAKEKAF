import React from 'react';

/**
 * Reusable Brand Typography Component for "Maison Crème"
 * Adheres strictly to:
 * - Full text in cursive and italic (font-script italic)
 * - 1st letter of each word ('M' and 'C') are BOLD, ITALIC, CURSIVE, AND CAPITAL
 * - Rest of the letters ('aison' and 'rème') are small case, CURSIVE, AND ITALIC
 */
export default function BrandName({ className = "", textClass = "text-espresso-950", sizeClass = "text-2xl sm:text-3xl" }) {
  return (
    <span className={`inline-flex items-baseline font-script italic select-none ${sizeClass} ${textClass} ${className}`}>
      <span className="font-extrabold uppercase text-[1.2em] leading-none inline-block transform -translate-y-[1px]">
        M
      </span>
      <span className="font-normal lowercase leading-none tracking-normal">
        aison
      </span>
      <span className="w-1.5 inline-block" aria-hidden="true">&nbsp;</span>
      <span className="font-extrabold uppercase text-[1.2em] leading-none inline-block transform -translate-y-[1px]">
        C
      </span>
      <span className="font-normal lowercase leading-none tracking-normal">
        rème
      </span>
    </span>
  );
}
