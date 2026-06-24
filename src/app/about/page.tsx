import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Leaf, Landmark } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About KARUN'S | Edible Oil Manufacturer in Thrissur Kerala",
  description: "Learn our story — FSSAI certified coconut oil and spice manufacturer in Thrissur, Kerala. Cold pressed, pure, natural. Supplying Kerala families and businesses.",
  alternates: {
    canonical: "https://www.karunsoil.com/about",
  },
  openGraph: {
    title: "About KARUN'S | Edible Oil Manufacturer in Thrissur Kerala",
    description: "Learn our story — FSSAI certified coconut oil and spice manufacturer in Thrissur, Kerala. Cold pressed, pure, natural. Supplying Kerala families and businesses.",
    url: "https://www.karunsoil.com/about",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/karuna_logo.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About KARUN'S | Edible Oil Manufacturer in Thrissur Kerala",
    description: "Learn our story — FSSAI certified coconut oil and spice manufacturer in Thrissur, Kerala. Cold pressed, pure, natural. Supplying Kerala families and businesses.",
    images: ["/assets/karuna_logo.png"],
  },
};

export default function About() {
  return (
    <div className="relative pt-28 pb-20 font-body">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] pointer-events-none -z-10" />

      {/* --- HERO / H1 SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
          Our Brand Story
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          About KARUN&apos;S
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We manufacture pure edible oils and food products under the registered trademark brand KARUN&apos;S.
        </p>
      </section>

      {/* --- COMPANY STORY SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Approved Content (Left) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Pure Edible Oils Direct from Chelakkara
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              Karuna Enterprises manufactures pure coconut oil and other edible oils using electric dryers and a cold press process. Our brand name is KARUN&apos;S and we have completed trademark registration.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              We started our proprietary firm on 24 June 2024 in Chelakkara, Thrissur district. Our commitment is to provide pure, hygienic, quality food products to customers at all times. We plan to scale production and market PAN India. We operate both B2C and B2B.
            </p>

            <div className="pt-4 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Trademark Registered</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                <Leaf className="w-4 h-4 text-primary" />
                <span>Cold Press Process</span>
              </div>
            </div>
          </div>

          {/* Image Overlay (Right) */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6">
            {/* Stacked background card (Layered under) */}
            <div className="absolute w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] bg-primary/20 border border-primary/20 rounded-[2rem] transform -rotate-3 translate-x-[-15px] translate-y-[-10px] pointer-events-none" />
            
            {/* Main image card (Layered over) */}
            <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-[#FAF9F5] transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/assets/kerala-spices-masala-combo.png"
                alt="KARUN'S pure food products and spices"
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Small floating badge */}
            <div className="absolute bottom-[20px] left-[10px] bg-[#FAF9F5]/90 backdrop-blur border border-primary/20 p-3.5 rounded-2xl shadow-lg flex items-center gap-2 transform -rotate-2">
              <Landmark className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-foreground tracking-wide font-body">Chelakkara, Thrissur</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- STAFF/TEAM SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image (Left on Desktop, First on Mobile) */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6">
            {/* Stacked background card (Layered under) */}
            <div className="absolute w-[280px] h-[210px] sm:w-[400px] sm:h-[300px] bg-primary/20 border border-primary/20 rounded-[2rem] transform rotate-3 translate-x-[15px] translate-y-[10px] pointer-events-none" />
            
            {/* Main image card (Layered over) */}
            <div className="relative w-[280px] h-[210px] sm:w-[400px] sm:h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-[#FAF9F5] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/assets/karuns-team-thrissur-kerala.jpeg"
                alt="KARUN'S production and operations team at Karuna Enterprises in Chelakkara, Thrissur, Kerala"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-w-640px) 280px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content (Right on Desktop, Second on Mobile) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              The People Behind KARUN&apos;S
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              Our team is the driving force behind KARUN&apos;S, bringing care, dedication, and attention to detail into every product we manufacture.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              Together, we work with a shared commitment to delivering pure, hygienic, and high-quality food products to customers across India.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed pt-2">
              The KARUN&apos;S team operates from Chelakkara in Thrissur, Kerala, supporting the production of cold pressed oils and authentic spice products that are delivered to customers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Behind The Scenes Section - Temporarily Disabled */}
      {/*
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Behind the Scenes</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            How We Process Our Products
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            No chemicals, no heavy refining, no shortcut heating. We keep our production process transparent and clean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
              1. Coconut Oils & VCO
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our coconut oil is extracted from premium quality, sun-dried copra sourced from local Kerala groves, using controlled-temperature cold pressing. Our Virgin Coconut Oil (VCO) is extracted directly from fresh coconut milk without heat, refining, or bleaching—preserving the maximum amount of protective lauric acid.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
              2. Sesame & Peanut Oils
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our Sesame Oil is cold pressed from select premium white sesame seeds, conserving natural sesamol and sesamin antioxidants for joint and skin wellness. Our Peanut Oil is extracted from top-grade peanuts, resulting in a naturally high smoke point (225–232°C) perfect for deep frying without burning.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
              3. Traditional Spice Powders
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our spices are ground fresh in small batches from whole, traceable raw spices. Coriander seeds are dry-roasted and milled. Turmeric rhizomes are sourced from high-curcumin farms. Chilli is milled for natural color and flavor. No rice flour fillers, salt, or artificial red dyes are ever added.
            </p>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
