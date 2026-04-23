"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="pt-32 pb-xl px-margin max-w-7xl mx-auto min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-sm max-w-3xl">
            Website Has Been Moved
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md max-w-2xl">
            Our services are now hosted on a new domain. Please select the service below to proceed.
          </p>

          <div className="flex gap-base mt-sm">
            <a
              href="https://systems.infotech.pro"
              className="bg-[#F04D32] text-white font-space-grotesk font-bold text-lg px-xl py-md rounded-lg custom-glow transition-all active:scale-95 flex items-center gap-2 no-underline"
            >
              Go to Website
              <span translate="no" className="material-symbols-outlined notranslate">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* Filter & Search */}
        <div className="mb-lg max-w-xl mx-auto relative">
          <span translate="no" className="material-symbols-outlined notranslate absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            search
          </span>
          <input
            className="w-full bg-[#161C24] border border-[#2D3748] focus:border-[#F04D32] focus:ring-1 focus:ring-[#F04D32] outline-none text-on-surface pl-12 py-4 rounded-lg font-body-md transition-all"
            placeholder="Search for a specific system..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Service Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No services found matching "{searchQuery}"
            </div>
          )}
        </div>

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
