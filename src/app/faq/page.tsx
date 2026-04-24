"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const faqData = [
  {
    question: "Who can access the laboratory facilities?",
    answer: "All active students of the Informatics Department, University of Muhammadiyah Malang can access the lab facilities for academic, research, and practicum purposes."
  },
  {
    question: "How do I become a laboratory assistant?",
    answer: "We hold an Open Recruitment process annually. Keep an eye on our social media (@labit.umm) or the main portal for announcements. Registration and selection are managed through the Sirenta system."
  },
  {
    question: "How can I borrow equipment for my project?",
    answer: "Students can borrow hardware, IoT devices, and other equipment through the Sevenman system. Please ensure you read the latest Standard Operating Procedures (SOP) before making a request."
  },
  {
    question: "Where can I report a technical issue with the lab computers?",
    answer: "If you encounter any hardware or software issues during your session, you can report them directly to the assistant on duty or log a ticket via our internal Support Desk."
  },
  {
    question: "Can I use the lab outside of scheduled practicum hours?",
    answer: "Yes, the laboratory is available for independent study and research during our regular open hours, provided that no scheduled classes or events are currently occupying the room."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="pt-32 pb-xl px-margin max-w-4xl mx-auto min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16">
          <div className="opacity-0 animate-fade-in-up inline-block px-4 py-1.5 rounded-full border border-[#F04D32]/30 bg-[#F04D32]/10 text-[#F04D32] font-space-grotesk text-sm font-bold uppercase tracking-wider mb-6" style={{ animationDelay: '100ms' }}>
            Help Center
          </div>
          <h1 className="opacity-0 animate-fade-in-up font-h1 text-h1 text-on-surface mb-sm" style={{ animationDelay: '200ms' }}>
            Frequently Asked Questions
          </h1>
          <p className="opacity-0 animate-fade-in-up font-body-lg text-body-lg text-on-surface-variant max-w-2xl" style={{ animationDelay: '300ms' }}>
            Find answers to common questions about laboratory access, facilities, and procedures.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4 mb-24 relative z-10">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`opacity-0 animate-fade-in-up border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                  ? "bg-[#1A222C] border-[#F04D32]/50 shadow-[0_0_30px_rgba(240,77,50,0.1)]"
                  : "bg-[#161C24] border-[#2D3748] hover:border-gray-600"
                  }`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`font-space-grotesk font-bold text-lg transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                    {faq.question}
                  </span>
                  <span
                    translate="no"
                    className={`material-symbols-outlined notranslate text-xl transition-transform duration-300 ${isOpen ? "rotate-180 text-[#F04D32]" : "text-gray-500"
                      }`}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`px-6 transition-all duration-500 ease-in-out origin-top ${isOpen
                    ? "max-h-64 pb-6 opacity-100 scale-y-100"
                    : "max-h-0 py-0 opacity-0 scale-y-0"
                    }`}
                >
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2D3748] to-transparent mb-4"></div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* System Background Decor */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-[#F04D32]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#F04D32]/5 blur-[120px] rounded-full"></div>
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
