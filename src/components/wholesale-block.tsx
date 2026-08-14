"use client";

import { motion } from "framer-motion";
import { Truck, PackageCheck, MessageSquare } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

interface WholesaleBlockProps {
  className?: string;
}

export default function WholesaleBlock({ className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-body" }: WholesaleBlockProps) {
  const wholesaleWhatsAppUrl = getWhatsAppLink(siteConfig.wholesaleWhatsAppMessage);

  return (
    <section className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-accent/40 border border-primary/20 rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Content side */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full mb-1">
              <Truck className="w-4 h-4" />
              <span>All India Delivery</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Wholesale Available
            </h2>

            <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl">
              <strong>Karun&apos;s products available at wholesale prices.</strong> Delivery available all over India for retail distributors, supermarkets, hotels, and caterers.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-1 text-xs sm:text-sm font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <PackageCheck className="w-4 h-4 text-primary shrink-0" />
                Factory-Direct Rates
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-primary shrink-0" />
                Delivery Across India
              </span>
            </div>
          </div>

          {/* Action side */}
          <div className="shrink-0 pt-2 md:pt-0">
            <a
              href={wholesaleWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-glow px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md btn-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Enquire Wholesale</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
