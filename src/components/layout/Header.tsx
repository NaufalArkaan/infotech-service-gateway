"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#161C24] border-b border-[#2D3748]">
      <div className="flex justify-between items-center px-8 h-16">
        <div translate="no" className="notranslate text-2xl font-black tracking-tighter text-[#F04D32] font-space-grotesk uppercase">
          INFOTECH_CORE
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Profile</a>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Network</a>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Security</a>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Support</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span translate="no" className="material-symbols-outlined notranslate text-2xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#161C24] border-t border-[#2D3748] px-8 py-4 flex flex-col gap-4">
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Systems</a>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Network</a>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Security</a>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Support</a>
        </div>
      )}
    </header>
  );
}
