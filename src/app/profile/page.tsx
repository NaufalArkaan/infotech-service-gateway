"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  "/Carousel1.png",
  "/Carousel2.jpg",
  "/Carousel3.png",
  "/Carousel4.png"
];

export default function Profile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="pt-32 pb-xl px-margin max-w-7xl mx-auto min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-24">
          <div className="opacity-0 animate-fade-in-up inline-block px-4 py-1.5 rounded-full border border-[#F04D32]/30 bg-[#F04D32]/10 text-[#F04D32] font-space-grotesk text-sm font-bold uppercase tracking-wider mb-6" style={{ animationDelay: '100ms' }}>
            About Us
          </div>
          <h1 className="opacity-0 animate-fade-in-up font-h1 text-h1 text-on-surface mb-sm max-w-4xl" style={{ animationDelay: '200ms' }}>
            Information Technology Laboratory
          </h1>
          <p className="opacity-0 animate-fade-in-up font-body-lg text-body-lg text-on-surface-variant mb-md max-w-3xl" style={{ animationDelay: '300ms' }}>
            Empowering innovation through research, development, and advanced technological solutions. We are the core of technical excellence.
          </p>

          <div className="opacity-0 animate-fade-in-up mt-8 relative w-full max-w-5xl aspect-[21/9] rounded-2xl overflow-hidden border border-[#2D3748] shadow-[0_0_40px_rgba(240,77,50,0.15)] group" style={{ animationDelay: '400ms' }}>
            {carouselImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`Infotech Laboratory ${idx + 1}`}
                fill
                className={`object-cover transition-all duration-1000 ${idx === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
                  }`}
                priority={idx === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161C24] via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide
                    ? "bg-[#F04D32] w-8"
                    : "bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#F04D32]/80 z-20 border border-white/10 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <span translate="no" className="material-symbols-outlined notranslate">chevron_left</span>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#F04D32]/80 z-20 border border-white/10 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <span translate="no" className="material-symbols-outlined notranslate">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Struktur Organisasi & Divisi Section */}
        <section className="mb-24">
          <div className="opacity-0 animate-fade-in-up text-center mb-12" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">Organizational Structure & Divisions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The synergy between the core board and various divisions in realizing the laboratory's vision and mission professionally.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pengurus Inti */}
            <div className="opacity-0 animate-fade-in-up bg-[#1A222C] border border-[#2D3748] rounded-2xl p-10 hover:border-[#F04D32]/50 transition-colors relative overflow-hidden group flex flex-col" style={{ animationDelay: '100ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F04D32]/5 rounded-bl-full -z-0 group-hover:bg-[#F04D32]/10 transition-colors"></div>
              <div className="relative z-10 flex-grow">
                <span translate="no" className="material-symbols-outlined notranslate text-4xl text-[#F04D32] mb-6 block">groups</span>
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">Core Board</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Chairman", "Secretary", "Treasurer",
                    "Event Coordinator", "IS Coordinator", "Social Media Coordinator"
                  ].map((jabatan, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-[#161C24] p-3.5 rounded-xl border border-[#2D3748]/50 hover:border-[#F04D32]/30 transition-colors">
                      <span translate="no" className="material-symbols-outlined notranslate text-[#F04D32] text-sm">person</span>
                      <span className="text-sm text-gray-300 font-medium">{jabatan}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divisi */}
            <div className="opacity-0 animate-fade-in-up bg-[#1A222C] border border-[#2D3748] rounded-2xl p-10 hover:border-[#F04D32]/50 transition-colors relative overflow-hidden group flex flex-col" style={{ animationDelay: '200ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F04D32]/5 rounded-bl-full -z-0 group-hover:bg-[#F04D32]/10 transition-colors"></div>
              <div className="relative z-10 flex-grow">
                <span translate="no" className="material-symbols-outlined notranslate text-4xl text-[#F04D32] mb-6 block">account_tree</span>
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">Divisions List</h3>
                <div className="space-y-4">
                  {[
                    { name: "Information Systems (IS)", desc: "Responsible for managing digital infrastructure, system maintenance, and providing technology facilities in the laboratory." },
                    { name: "Events", desc: "Fully responsible for designing and executing all series of activities or events organized by the laboratory." },
                    { name: "Social Media", desc: "Tasked with managing digital branding and all official social media platforms of UMM IT Lab." }
                  ].map((div, idx) => (
                    <div key={idx} className="flex flex-col bg-[#161C24] p-4.5 rounded-xl border border-[#2D3748]/50 hover:border-[#F04D32]/30 transition-colors p-5">
                      <h4 className="text-[#F04D32] font-bold text-base mb-2">{div.name}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{div.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keahlian & Kompetensi Divisi */}
        <section className="mb-24">
          <div className="opacity-0 animate-fade-in-up text-center mb-12" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">Division Skills & Competencies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The primary focus of skill development for each division to drive continuous innovation and creativity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "terminal",
                title: "Technology Field (IS)",
                skills: ["Front-end", "Back-end", "Mobile Development", "Data Science"]
              },
              {
                icon: "palette",
                title: "Creative Field (Sosmed)",
                skills: ["Graphic Design", "UI/UX"]
              },
              {
                icon: "event",
                title: "Management Field (Events)",
                skills: ["Event Planner", "Event Organizer"]
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="opacity-0 animate-fade-in-up bg-[#161C24] border border-[#2D3748] rounded-xl p-8 hover:bg-[#1A222C] transition-colors relative group overflow-hidden flex flex-col"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#F04D32]/5 rounded-full blur-[40px] group-hover:bg-[#F04D32]/10 transition-colors"></div>
                <div className="p-4 bg-[#2D3748]/50 rounded-xl text-[#F04D32] w-fit mb-6 inline-flex relative z-10">
                  <span translate="no" className="material-symbols-outlined notranslate text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-6 relative z-10">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-medium px-3.5 py-1.5 bg-[#2D3748]/30 border border-[#2D3748] rounded-full text-gray-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-b from-[#1A222C] to-[#161C24] border border-[#2D3748] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F04D32]/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>

          <h2 className="opacity-0 animate-fade-in-up text-3xl font-space-grotesk font-bold text-white mb-6 relative z-10" style={{ animationDelay: '100ms' }}>Ready to Collaborate?</h2>
          <p className="opacity-0 animate-fade-in-up text-gray-400 max-w-2xl mx-auto mb-8 relative z-10" style={{ animationDelay: '200ms' }}>
            Join us in building the future of technology. Whether you are a student, researcher, or industry partner, we are always open to new opportunities.
          </p>
          <Link
            href="/"
            className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 bg-[#F04D32] text-white font-space-grotesk font-bold px-8 py-4 rounded-lg custom-glow transition-all active:scale-95 relative z-10 no-underline"
            style={{ animationDelay: '300ms' }}
          >
            Explore Our Services
            <span translate="no" className="material-symbols-outlined notranslate">arrow_forward</span>
          </Link>
        </section>

        {/* System Background Decor */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F04D32]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#F04D32]/5 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] w-full h-full select-none">
            <svg height="100%" width="100%">
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
              </pattern>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
