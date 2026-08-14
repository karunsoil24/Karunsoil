"use client";

import { motion } from "framer-motion";
import { Building2, MessageSquare } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function FranchiseCTA() {
  const franchiseWhatsAppUrl = getWhatsAppLink(siteConfig.franchiseWhatsAppMessage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card border border-border rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="flex items-center gap-4 text-left">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-1">
            Want a Franchise?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
            Partner with Karun&apos;s franchise network. Get details on location requirements, investment, and next steps.
          </p>
        </div>
      </div>

      <div className="shrink-0 w-full md:w-auto">
        <a
          href={franchiseWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 font-body text-xs font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-glow px-6 py-3.5 rounded-full shadow-md btn-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Enquire for Franchise</span>
        </a>
      </div>
    </motion.div>
  );
}
