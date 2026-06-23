"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = siteConfig.faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FAQ Schema Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="relative pt-28 pb-20 font-body text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative blurred background blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none -z-10" />

      {/* --- HERO HEADER --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 mb-12">
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
          Answers & Information
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Find answers regarding cold pressed oil manufacturing, raw material sourcing, order delivery details, and FSSAI standards.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto mt-8">
          <input
            type="text"
            placeholder="Search questions or keywords..."
            aria-label="Search FAQs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3.5 rounded-full border border-border bg-card/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
          />
        </div>
      </section>

      {/* --- FAQ LIST (ACCORDIONS) --- */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/20"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary pr-4 flex items-start gap-2">
                      <span className="text-primary font-body font-semibold">Q:</span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                        isOpen ? "transform rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-border/40 font-body text-sm sm:text-base text-foreground/80 leading-relaxed pl-10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-card border border-dashed border-border rounded-2xl">
            <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground">No questions found</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Try searching for something else, or ask us directly via WhatsApp.
            </p>
          </div>
        )}
      </section>

      {/* --- WHATSAPP SUPPORT CTA --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-cream/40 border border-border rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Still Have a Question?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            If your query wasn&apos;t answered above, get in touch with us directly. We are happy to help with custom order weights, specific delivery zones, or B2B requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink("Hello Karuna Enterprises,\n\nI have a question that is not covered in your FAQ page.\n\nPlease assist me.\n\nThank you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-white bg-primary px-6 py-3 rounded-full hover:bg-primary-glow shadow-sm hover:shadow transition-all duration-300"
            >
              Ask on WhatsApp
              <MessageCircle className="w-4 h-4 shrink-0" />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-foreground bg-white border border-border px-6 py-3 rounded-full hover:bg-muted transition-all duration-300"
            >
              Call Our Team
              <Phone className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
