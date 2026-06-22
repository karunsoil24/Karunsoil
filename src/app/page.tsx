"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Leaf, CheckCircle, ArrowRight, ShieldCheck, Award, Truck, Sparkles, MessageCircle, ChevronDown, Landmark } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { products } from "@/data/products";

export default function Home() {
  const faqPreview = siteConfig.faqs.slice(0, 4);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollingProducts = [...products, ...products];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const floatVariantsLeft = {
    hidden: { opacity: 0, x: -30, y: -20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const floatVariantsRight = {
    hidden: { opacity: 0, x: 30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 1.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const heroWhatsAppMsg = "Hello Karuna Enterprises,\n\nI want to order your pure cold pressed oils and authentic spices.\n\nPlease share the catalog and pricing details.\n\nThank you.";
  const heroWhatsAppUrl = getWhatsAppLink(heroWhatsAppMsg);

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Decorative blurred background organic blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/25 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[50%] left-[20%] w-[450px] h-[450px] rounded-full bg-primary-glow/8 blur-[110px] pointer-events-none -z-10 animate-float-soft" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Copy (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Rating Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-md border border-primary/20 px-4 py-1.5 rounded-full shadow-sm mb-6"
              variants={itemVariants}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-gold" />
                ))}
              </div>
              <span className="text-xs font-body font-semibold tracking-wide text-foreground/80">
                Loved by 1,000+ households
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6"
              variants={itemVariants}
            >
              Pure <span className="italic font-normal font-display text-primary">cold pressed</span> oils, <br />
              <span className="text-gradient-gold font-bold">straight from nature.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl mb-8"
              variants={itemVariants}
            >
              From the heart of Kerala, {siteConfig.name} delivers premium cold pressed oils and traditional spice blends crafted with purity, quality, and trust.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
              variants={itemVariants}
            >
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-white bg-primary px-8 py-4 rounded-full shadow-md hover:bg-primary-glow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                Order on WhatsApp
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-foreground bg-[#FAF9F5] border border-border px-8 py-4 rounded-full shadow-sm hover:bg-muted hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Products
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-6 border-t border-border"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-semibold text-foreground/80">✓ Kerala Made</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-semibold text-foreground/80">✓ Cold Pressed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-semibold text-foreground/80">✓ FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-semibold text-foreground/80">✓ All India Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Composition (Right Column) */}
          <div className="lg:col-span-5 relative flex items-center justify-center select-none mt-6 lg:mt-0">
            {/* Dashed spin halo behind the bottle */}
            <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-primary/20 animate-spin-slow pointer-events-none -z-10" />

            {/* Main Product Container */}
            <motion.div
              className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/60 bg-gradient-to-br from-[#F0F2EB] to-white"
              variants={imageContainerVariants}
            >
              <Image
                src="/assets/Karun's extra virgin coconut oil hero.png"
                alt="KARUN'S Cold Pressed Coconut Oil flagship bottle"
                fill
                priority
                className="object-cover"
                sizes="(max-w-720px) 350px, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Coconut half (Top-Left) */}
            <motion.div
              className="absolute top-[-30px] left-[-20px] w-28 h-28 sm:w-36 sm:h-36 pointer-events-none z-10 filter drop-shadow-md animate-float-slow"
              variants={floatVariantsLeft}
            >
              <Image
                src="/assets/coconut-accent-v2.png"
                alt=""
                width={144}
                height={144}
                aria-hidden="true"
                className="object-contain"
              />
            </motion.div>

            {/* Floating Glass badge (Bottom-Right) */}
            <motion.div
              className="absolute bottom-[-20px] right-[-10px] z-10 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float-soft pointer-events-none border border-white/40"
              variants={floatVariantsRight}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-accent flex items-center justify-center text-white shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Quality</span>
                <span className="block font-display text-sm font-bold text-foreground">FSSAI Certified</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT STORY CARD (LAYERED DESIGN) ================= */}
      <section className="py-24 bg-accent/40 border-y border-border relative overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Layered Card Image Overlays (Left) */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-6">
              {/* Stacked background card (Layered under) */}
              <div className="absolute w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] bg-primary/20 border border-primary/20 rounded-[2rem] transform -rotate-3 translate-x-[-15px] translate-y-[-10px] pointer-events-none" />

              {/* Main image card (Layered over) */}
              <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-[#FAF9F5] transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/assets/spices-combo.png"
                  alt="Traditional Kerala spices hand-blended at Karuna Enterprises factory"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Small floating badge */}
              <div className="absolute bottom-[20px] left-[10px] bg-[#FAF9F5]/90 backdrop-blur border border-primary/20 p-3.5 rounded-2xl shadow-lg flex items-center gap-2 transform -rotate-2">
                <Landmark className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-foreground tracking-wide font-body">Thrissur Heritage</span>
              </div>
            </div>

            {/* About content (Right) */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">About KARUN&apos;S</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Pure Edible Oils<br />From the Heart of Thrissur
              </h2>
              <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed">
                Karuna Enterprises manufactures pure coconut oil and other edible oils using electric dryers and a cold press process. Our brand name is KARUN&apos;S and we have completed trademark registration.
              </p>
              <p className="font-body text-sm sm:text-base text-foreground/75 leading-relaxed">
                We started our proprietary firm on 24 June 2024 in Chelakkara, Thrissur district. Our commitment is to provide pure, hygienic, quality food products to customers at all times. We plan to scale production and market PAN India. We operate both B2C and B2B.
              </p>
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Cold Press Process</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Hygienic & Pure</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-glow font-body transition-colors group"
                >
                  Learn More About Our Story
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HORIZONTAL AUTO-SCROLLING PRODUCT GALLERY ================= */}
      <section className="py-24 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Pure Offerings</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Our Food Product Gallery
          </h2>
        </div>

        {/* Outer scrolling container - auto scrolls on desktop and mobile */}
        <div className="w-full overflow-hidden py-4">
          <div className="flex gap-6 md:gap-8 w-max animate-marquee will-change-transform md:hover:[animation-play-state:paused]">
            {scrollingProducts.map((product, idx) => {
              return (
                <div
                  key={`${product.id}-${idx}`}
                  className="w-[200px] sm:w-[240px] shrink-0 bg-card rounded-[2rem] border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-[1086/1448] overflow-hidden bg-accent/30">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={1086}
                      height={1448}
                      quality={90}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-4 text-center bg-card flex items-center justify-center h-14">
                    <h3 className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate w-full">
                      {product.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EXPLORE PRODUCTS CTA (FORCE DISCOVERY) ================= */}
      <section className="pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
          Explore Our Complete Product Range
        </h3>
        <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Discover premium cold pressed oils and authentic spice blends crafted with quality and care.
        </p>
        <div className="pt-2">
          <Link
            href="/products"
            className="btn-glow inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-white bg-primary px-8 py-4.5 rounded-full hover:bg-primary-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (MINIMAL BENTO GRID) ================= */}
      <section className="bg-accent/30 py-24 border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Our Standards</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Why Choose KARUN&apos;S?
            </h2>
          </div>

          {/* Asymmetric Minimal Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[160px] sm:auto-rows-[180px]">

            {/* Card 1: Cold Pressed Production (col-span-2) */}
            <div className="bg-gradient-to-br from-card to-accent/40 rounded-[2rem] p-6 sm:p-8 border border-border/80 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between md:col-span-2 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Cold Pressed Production</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Extracted mechanically at controlled low temperatures without chemical solvents to preserve purity.
                </p>
              </div>
            </div>

            {/* Card 2: Premium Ingredients (col-span-1) */}
            <div className="bg-gradient-to-br from-card to-accent/40 rounded-[2rem] p-6 sm:p-8 border border-border/80 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">Premium Ingredients</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Finest hand-selected copra and whole spices sourced directly from farms.
                </p>
              </div>
            </div>

            {/* Card 3: Trademark Registered Brand (col-span-1) */}
            <div className="bg-gradient-to-br from-card to-accent/40 rounded-[2rem] p-6 sm:p-8 border border-border/80 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">Trademark Registered</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Officially registered brand KARUN&apos;S, guaranteeing genuine quality.
                </p>
              </div>
            </div>

            {/* Card 4: Hygienic Processing (col-span-2) */}
            <div className="bg-gradient-to-br from-card to-accent/40 rounded-[2rem] p-6 sm:p-8 border border-border/80 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between md:col-span-2 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Hygienic Processing</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Manufactured in a clean facility in Thrissur using electric dryers and cold presses.
                </p>
              </div>
            </div>

            {/* Card 5: All India Delivery (col-span-2) */}
            <div className="bg-gradient-to-br from-card to-accent/40 rounded-[2rem] p-6 sm:p-8 border border-border/80 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between md:col-span-2 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Truck className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">All India Delivery</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Safe, drop-proof cargo packaging shipped directly from our Kerala facility nationwide.
                </p>
              </div>
            </div>

            {/* Card 6: B2B & B2C Supply (col-span-1) */}
            <div className="bg-gradient-to-br from-card to-accent/40 rounded-[2rem] p-6 sm:p-8 border border-border/80 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <MessageCircle className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">B2B & B2C Supply</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Catering to retail home cooks and bulk wholesale trade buyers alike.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= NATIONWIDE REACH (SIMPLIFIED) ================= */}
      <section className="py-24 bg-accent/25 border-y border-border/60 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Nationwide Delivery</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight max-w-2xl mx-auto">
            All India Delivery Direct from Our Factory
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We deliver KARUN&apos;S cold pressed oils and authentic spice products directly from our manufacturing facility in Kerala to customers across India.
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppLink("Hello Karuna Enterprises,\n\nI want to place an order for delivery within India.\n\nPlease share your product list and shipping details.\n\nThank you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-white bg-primary px-8 py-4.5 rounded-full shadow hover:bg-primary-glow transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ CARDS (PREMIUM EXPANDABLE ACCORDIONS) ================= */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Answers</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqPreview.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const numberLabel = `0${index + 1}`;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/20"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary pr-4 flex items-center gap-4">
                    <span className="font-body text-xs font-bold text-primary/40 tracking-wider">
                      {numberLabel}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "transform rotate-180 text-primary" : ""
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
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 border-t border-border/40 font-body text-sm sm:text-base text-foreground/80 leading-relaxed pl-14">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-body text-xs font-bold text-primary hover:text-primary-glow uppercase tracking-wider transition-colors"
          >
            View All FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ================= WHATSAPP CTA BANNER ================= */}
      <section className="pb-24 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-primary rounded-[2.5rem] py-16 px-6 sm:px-12 md:py-20 text-center shadow-xl border border-primary-glow/20">
          {/* Subtle design overlays */}
          <div className="absolute top-[-50%] left-[-20%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px]" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px]" />

          <div className="relative max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs font-body font-bold tracking-widest text-white/80 uppercase mb-4">Direct Order Channel</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Ready to Experience Pure Quality Products?
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed mb-8">
              Enquire about custom sizes, wholesale rates, or place a home kitchen order immediately. We package securely and ship nationwide.
            </p>
            <a
              href={getWhatsAppLink("Hello Karuna Enterprises,\n\nI want to place an order or inquire about your product pricing.\n\nPlease assist me.\n\nThank you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-primary bg-white hover:bg-white/90 px-8 py-4.5 rounded-full shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Order on WhatsApp
              <MessageCircle className="w-5 h-5 shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
