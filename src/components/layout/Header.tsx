"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#161C24] border-b border-[#2D3748]">
      <div className="flex justify-between items-center px-8 h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/Lab_logo.png"
            alt="Infotech Lab Logo"
            width={200}
            height={80}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/profile" className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors">Profile</Link>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Announcement</a>
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
          <Link href="/profile" className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors">Profile</Link>
          <a className="font-space-grotesk uppercase tracking-widest text-xs font-bold text-gray-400 hover:text-white transition-colors" href="#">Announcement</a>
        </div>
      )}
    </header>
  );
}
