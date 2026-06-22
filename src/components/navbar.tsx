"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Lock when Mobile Menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close Mobile Menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappMessage = "Hello Karuna Enterprises,\n\nI am browsing your website and would like to ask a question or place an order.\n\nPlease assist me.\n\nThank you.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo and Brand Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 overflow-hidden rounded-full bg-white flex items-center justify-center border border-primary/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/karuna_logo.png"
                alt="Karuna Logo"
                width={36}
                height={36}
                className="object-cover"
                priority
              />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary relative ${
                    isActive ? "text-primary font-semibold" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs font-semibold tracking-wider uppercase text-white bg-primary px-5 py-2.5 rounded-full hover:bg-primary-glow shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Order on WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop (Tapping outside closes menu) */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-[300px] h-full bg-background border-l border-border shadow-2xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-300">
            {/* Header: Logo & Close */}
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
                <div className="relative w-8 h-8 overflow-hidden rounded-full bg-white flex items-center justify-center border border-primary/20 shadow-sm">
                  <Image
                    src="/assets/karuna_logo.png"
                    alt="Karuna Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  {siteConfig.name}
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-5 my-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 rounded-xl font-body text-lg font-medium transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* WhatsApp Button at bottom */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-body text-sm font-semibold text-white bg-primary py-3.5 rounded-full hover:bg-primary-glow shadow transition-all duration-300"
              >
                Order on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
