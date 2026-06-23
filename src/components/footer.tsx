import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Logo and Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-full bg-white flex items-center justify-center border border-primary/20 shadow-sm">
                <Image
                  src="/assets/karuna_logo.png"
                  alt="Karuna Logo"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Delivering premium cold pressed oils and traditional Kerala spices crafted with purity, quality, and trust. Sourced direct from Thrissur.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products?category=oils" className="text-muted-foreground hover:text-primary transition-colors">
                  Cold Pressed Coconut Oil
                </Link>
              </li>
              <li>
                <Link href="/products?category=oils" className="text-muted-foreground hover:text-primary transition-colors">
                  Virgin Coconut Oil (VCO)
                </Link>
              </li>
              <li>
                <Link href="/products?category=oils" className="text-muted-foreground hover:text-primary transition-colors">
                  Cold Pressed Sesame & Peanut Oils
                </Link>
              </li>
              <li>
                <Link href="/products?category=spices" className="text-muted-foreground hover:text-primary transition-colors">
                  Traditional Spice Powders
                </Link>
              </li>
              <li>
                <Link href="/products?category=spices" className="text-muted-foreground hover:text-primary transition-colors">
                  Authentic Masala Blends
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ Page
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & NAP */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  <strong>{siteConfig.legalName}</strong>
                  <br />
                  Chelakkara, Thrissur
                  <br />
                  Kerala, India - 680586
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Registered Trademark. FSSAI Certified.
          </p>
          {/* <p className="flex items-center gap-1">
            Designed/Developed by{" "}
            <a
              href="https://www.kaeonstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary inline-flex items-center gap-0.5 transition-colors"
            >
              Kaeon <ArrowUpRight className="w-3 h-3" />
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
