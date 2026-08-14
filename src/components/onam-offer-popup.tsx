"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, MessageSquare } from "lucide-react";

/**
 * Campaign Configuration
 * Centralized settings for easy modification & maintenance.
 */
export const ONAM_OFFER_CONFIG = {
  offerStartDate: "2026-08-01",
  offerEndDate: "2026-08-25",
  popupDelay: 600, // 500-800ms
  popupDuration: 7000,
  whatsappNumber: "91994782438",
  bannerImage: "/assets/mega_offer.jpeg",
  message: "Hi Karun's, I would like to order the Onam Mega Offer Combo for ₹1500. Please share the ordering and delivery details.",
  sessionKey: "onam_offer_popup_seen",
};

/**
 * Helper function to validate campaign active period.
 * Returns true ONLY between offerStartDate (00:00:00) and offerEndDate (23:59:59).
 */
export function isCampaignActive(
  startDateStr: string = ONAM_OFFER_CONFIG.offerStartDate,
  endDateStr: string = ONAM_OFFER_CONFIG.offerEndDate
): boolean {
  const now = new Date();
  const startDate = new Date(`${startDateStr}T00:00:00`);
  const endDate = new Date(`${endDateStr}T23:59:59.999`);

  return now >= startDate && now <= endDate;
}

export default function OnamOfferPopup() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClientActive, setIsClientActive] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(ONAM_OFFER_CONFIG.sessionKey, "true");
    } catch {
      // Ignore storage error if unavailable
    }
  }, []);

  const handleBannerClick = useCallback(() => {
    handleClose();
    const encodedMessage = encodeURIComponent(ONAM_OFFER_CONFIG.message);
    const whatsappUrl = `https://wa.me/${ONAM_OFFER_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }, [handleClose]);

  // Initial campaign active & session check on client mount
  useEffect(() => {
    // 1. Strict Campaign Date Validation
    if (!isCampaignActive()) {
      return;
    }

    // 2. Session Storage Validation
    try {
      if (sessionStorage.getItem(ONAM_OFFER_CONFIG.sessionKey) === "true") {
        return;
      }
    } catch {
      // Storage unavailable
    }

    setIsClientActive(true);

    // 3. Delayed reveal timer (600ms)
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, ONAM_OFFER_CONFIG.popupDelay);

    return () => clearTimeout(showTimer);
  }, []);

  // Modal active side-effects (body scroll lock, auto-close timer, escape key listener)
  useEffect(() => {
    if (!isVisible) return;

    // Lock background page scroll while active
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-close after duration (7000ms)
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, ONAM_OFFER_CONFIG.popupDuration);

    // Close on Escape key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      clearTimeout(autoCloseTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleClose]);

  // Completely unrender if inactive or hidden
  if (!isClientActive || !isVisible) {
    return null;
  }

  const encodedMessage = encodeURIComponent(ONAM_OFFER_CONFIG.message);
  const whatsappUrl = `https://wa.me/${ONAM_OFFER_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Onam Mega Offer"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative max-w-[90vw] sm:max-w-[440px] md:max-w-[480px] max-h-[88vh] flex flex-col items-center justify-center bg-card rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 p-3.5 sm:p-4 transition-all duration-300 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accessible Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close offer popup"
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 border border-white/30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Clickable Banner Image */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBannerClick}
          className="block relative w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-xl sm:rounded-2xl overflow-hidden group"
          aria-label="Onam Mega Offer Combo - Order on WhatsApp"
        >
          <Image
            src={ONAM_OFFER_CONFIG.bannerImage}
            alt="KARUN'S Onam Mega Offer Combo - ₹1500"
            width={853}
            height={1280}
            priority
            className="w-full h-auto max-h-[65vh] sm:max-h-[70vh] object-contain rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </a>

        {/* Single Centered CTA Button Directly Below Banner */}
        <div className="w-full pt-3 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBannerClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-glow px-8 py-3.5 rounded-full shadow-md btn-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>BUY NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}
