"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/config/site";

export default function WhatsAppButton() {
  const message = "Hello Karuna Enterprises,\n\nI came across KARUN'S products on your website and would like to know more about your products and pricing.\n\nPlease assist me.\n\nThank you.";
  const link = getWhatsAppLink(message);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#20ba56] group"
        aria-label="Order on WhatsApp"
      >
        {/* Custom Premium WhatsApp SVG */}
        <svg
          className="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.528 2.008 14.053.988 11.433.987c-5.437 0-9.862 4.37-9.866 9.8.001 2.028.533 4.022 1.539 5.793L1.962 21.6l5.228-1.376c-.198-.109.198.109-.543-.67zM17.18 14.67c-.28-.14-1.654-.816-1.91-.91-.255-.094-.442-.14-.627.14-.186.28-.718.91-.879 1.096-.162.186-.324.21-.605.07-.28-.14-1.18-.435-2.247-1.387-.83-.74-1.39-1.653-1.553-1.933-.163-.28-.017-.43.123-.57.127-.127.28-.328.42-.49.14-.164.187-.28.28-.466.094-.187.047-.35-.023-.49-.07-.14-.627-1.509-.86-2.07-.226-.547-.454-.472-.626-.481-.162-.008-.348-.01-.533-.01-.186 0-.488.07-.743.35-.256.28-.975.953-.975 2.324s1.002 2.696 1.14 2.883c.14.187 1.966 3.003 4.764 4.21.666.287 1.185.458 1.589.587.67.213 1.28.183 1.762.11.537-.08 1.654-.676 1.887-1.33.232-.653.232-1.213.162-1.33-.07-.116-.255-.21-.537-.35z" />
        </svg>
        <span className="hidden md:inline font-body text-sm font-medium tracking-wide">
          Order on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
