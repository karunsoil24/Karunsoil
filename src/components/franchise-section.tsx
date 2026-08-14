"use client";

import { motion } from "framer-motion";
import { MapPin, Store, MessageSquare, Building2 } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function FranchiseSection() {
  const franchiseWhatsAppUrl = getWhatsAppLink(siteConfig.franchiseWhatsAppMessage);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-body">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">
          Our Network
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Our Franchises
        </h2>
      </motion.div>

      {/* Franchise Cards Grid: 3-column desktop -> 2-column tablet -> 1-column mobile */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
      >
        {siteConfig.franchises.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="premium-card p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header with Location Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <Store className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary/80 bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">
                  {item.state}
                </span>
              </div>

              {/* Franchise Location Name (H3) & District/City */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary/70 shrink-0" />
                <span>{item.district}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Franchise CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden text-center max-w-4xl mx-auto"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto space-y-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2">
            <Building2 className="w-7 h-7" />
          </div>

          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Want a Franchise?
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Partner with Karun&apos;s to expand pure, cold pressed edible oils and authentic Kerala spices in your city.
          </p>

          <div className="pt-2">
            <a
              href={franchiseWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-glow px-8 py-4 rounded-full shadow-md btn-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Enquire for Franchise</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
